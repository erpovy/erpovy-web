<?php
// PHP 7.4+ / cPanel. Keep credentials outside public_html (see CONTACT-SETUP.md).
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');

function respond($status, $payload) {
    http_response_code($status);
    echo json_encode($payload, JSON_UNESCAPED_UNICODE);
    exit;
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    header('Allow: POST');
    respond(405, ['error' => 'Yalnızca POST istekleri kabul edilir.']);
}
if ((int) ($_SERVER['CONTENT_LENGTH'] ?? 0) > 32768) {
    respond(413, ['error' => 'Gönderilen veri çok büyük.']);
}
$input = file_get_contents('php://input', false, null, 0, 32769);
if (strlen($input) > 32768) respond(413, ['error' => 'Gönderilen veri çok büyük.']);
$data = json_decode($input, true);
if (!is_array($data) || substr(ltrim($input), 0, 1) !== '{') {
    respond(400, ['error' => 'Geçersiz form verisi.']);
}
$limits = ['mode' => 10, 'fullName' => 120, 'email' => 160, 'companyName' => 160,
    'phone' => 30, 'primaryNeed' => 160, 'note' => 4000, 'context' => 500, 'honeypot' => 200];
$fields = [];
foreach ($limits as $key => $limit) {
    $value = $data[$key] ?? '';
    if (!is_string($value)) respond(422, ['error' => 'Form alanları metin olmalıdır.']);
    $value = trim($value);
    // Count Unicode characters without requiring the mbstring extension.
    if (preg_match_all('/./us', $value, $unused) > $limit || strpos($value, "\0") !== false) {
        respond(422, ['error' => 'Bir form alanı izin verilen uzunluğu aşıyor veya geçersiz karakter içeriyor.']);
    }
    $fields[$key] = $value;
}
if ($fields['honeypot'] !== '') respond(200, ['success' => true]);
$mode = $fields['mode'] ?: 'demo'; // Older demo forms omit mode.
if (!in_array($mode, ['contact', 'demo'], true)) respond(422, ['error' => 'Geçersiz form türü.']);
if ($fields['fullName'] === '' || $fields['email'] === '' ||
    ($mode === 'demo' && $fields['companyName'] === '') ||
    ($mode === 'contact' && $fields['note'] === '')) {
    respond(422, ['error' => 'Lütfen zorunlu alanları doldurun.']);
}
if (!filter_var($fields['email'], FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $fields['email'])) {
    respond(422, ['error' => 'Lütfen geçerli bir e-posta adresi girin.']);
}
foreach (['fullName', 'companyName', 'phone', 'primaryNeed'] as $key) {
    if (preg_match('/[\r\n]/', $fields[$key])) respond(422, ['error' => 'Tek satırlık alanlarda satır sonu kullanılamaz.']);
}

try {
    $configFile = getenv('ERPOVY_MAIL_CONFIG') ?: dirname(__DIR__) . '/erpovy-mail-config.php';
    $config = is_file($configFile) ? require $configFile : [];
    if (!is_array($config)) throw new RuntimeException('Invalid mail config');
    $to = $config['to'] ?? 'info@erpovy.com';
    $from = $config['from'] ?? 'info@erpovy.com';
    foreach ([$to, $from] as $address) {
        if (!filter_var($address, FILTER_VALIDATE_EMAIL) || preg_match('/[\r\n]/', $address)) {
            throw new RuntimeException('Invalid configured mail address');
        }
    }
    $title = $mode === 'contact' ? 'İletişim Mesajı' : 'Demo Talebi';
    $subject = '=?UTF-8?B?' . base64_encode('[Erpovy ' . $title . '] ' . ($fields['primaryNeed'] ?: 'Genel Bilgi')) . '?=';
    $body = "$title — Erpovy\n========================================\n";
    foreach (['fullName' => 'Ad Soyad', 'email' => 'E-posta', 'companyName' => 'Firma',
        'phone' => 'Telefon', 'primaryNeed' => 'Konu', 'context' => 'Seçilen kapsam', 'note' => 'Mesaj'] as $key => $label) {
        $body .= $label . ': ' . ($fields[$key] ?: 'Belirtilmedi') . "\n";
    }
    $body .= 'Tarih: ' . gmdate('Y-m-d H:i:s') . " UTC\n";
    $headers = "From: Erpovy Web <$from>\r\nReply-To: {$fields['email']}\r\n" .
        "MIME-Version: 1.0\r\nContent-Type: text/plain; charset=utf-8\r\nContent-Transfer-Encoding: base64\r\n";
    $encodedBody = chunk_split(base64_encode($body));
    if (($config['transport'] ?? 'mail') === 'smtp') {
        sendSmtpMail($config, $from, $to, $subject, $headers, $encodedBody);
    } elseif (($config['transport'] ?? 'mail') === 'mail') {
        if (!@mail($to, $subject, $encodedBody, $headers)) throw new RuntimeException('PHP mail rejected message');
    } else {
        throw new RuntimeException('Unknown mail transport');
    }
    respond(200, ['success' => true, 'message' => 'Mesajınız gönderildi. En kısa sürede sizinle iletişime geçeceğiz.']);
} catch (Throwable $error) {
    // Do not log credentials, SMTP replies or personal form contents.
    error_log('Erpovy: mail delivery failed. Check mail configuration and server logs.');
    respond(503, ['error' => 'Mesajınız şu anda gönderilemedi. Lütfen tekrar deneyin veya info@erpovy.com adresine yazın.']);
}

function smtpExpect($socket, $expected) {
    do {
        $line = fgets($socket, 4096);
        if ($line === false || !preg_match('/^\d{3}[ -]/', $line)) throw new RuntimeException('SMTP connection failed');
        $code = (int) substr($line, 0, 3);
    } while ($line[3] === '-');
    if (!in_array($code, $expected, true)) throw new RuntimeException('SMTP command rejected');
}
function smtpWrite($socket, $data) {
    while ($data !== '') {
        $written = fwrite($socket, $data);
        if (!$written) throw new RuntimeException('SMTP write failed');
        $data = substr($data, $written);
    }
}
function smtpCommand($socket, $command, $expected) {
    smtpWrite($socket, $command . "\r\n");
    smtpExpect($socket, $expected);
}
function sendSmtpMail($config, $from, $to, $subject, $headers, $body) {
    $host = $config['host'] ?? '';
    $secure = $config['secure'] ?? 'ssl';
    $port = (int) ($config['port'] ?? ($secure === 'ssl' ? 465 : 587));
    $user = $config['user'] ?? '';
    $pass = $config['pass'] ?? '';
    if (!preg_match('/^[a-zA-Z0-9.-]+$/', $host) || !in_array($secure, ['ssl', 'tls'], true) ||
        $port < 1 || $port > 65535 || $user === '' || $pass === '') throw new RuntimeException('Missing SMTP configuration');
    $context = stream_context_create(['ssl' => ['verify_peer' => true, 'verify_peer_name' => true, 'peer_name' => $host]]);
    $socket = @stream_socket_client(($secure === 'ssl' ? 'ssl://' : 'tcp://') . $host . ':' . $port,
        $errno, $errstr, 10, STREAM_CLIENT_CONNECT, $context);
    if (!$socket) throw new RuntimeException('SMTP unavailable');
    stream_set_timeout($socket, 10);
    try {
        smtpExpect($socket, [220]);
        smtpCommand($socket, 'EHLO erpovy.com', [250]);
        if ($secure === 'tls') {
            smtpCommand($socket, 'STARTTLS', [220]);
            if (!stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) throw new RuntimeException('TLS failed');
            smtpCommand($socket, 'EHLO erpovy.com', [250]);
        }
        smtpCommand($socket, 'AUTH LOGIN', [334]);
        smtpCommand($socket, base64_encode($user), [334]);
        smtpCommand($socket, base64_encode($pass), [235]);
        smtpCommand($socket, "MAIL FROM: <$from>", [250]);
        smtpCommand($socket, "RCPT TO: <$to>", [250, 251]);
        smtpCommand($socket, 'DATA', [354]);
        smtpWrite($socket, "To: <$to>\r\nSubject: $subject\r\n" . $headers . "\r\n" . $body . ".\r\n");
        smtpExpect($socket, [250]);
        // Acceptance is final; a disconnect during QUIT must not invite duplicate submissions.
        @fwrite($socket, "QUIT\r\n");
    } finally {
        fclose($socket);
    }
}
