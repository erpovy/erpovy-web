<?php
header('Content-Type: application/json; charset=utf-8');

// ====================================================================
// 1. E-POSTA VE SMTP AYARLARINIZ
// ====================================================================

// Demo taleplerinin düşeceği e-posta adresi:
$to = 'info@erpovy.com';

// SMTP kullanmak istiyorsanız true yapın (Yandex, Google, Hosting SMTP vb.):
$useSmtp = false; // true yaparsanız aşağıdaki SMTP ayarlarıyla gönderir

$smtpHost = 'smtp.yandex.com';        // Örn: smtp.yandex.com veya mail.erpovy.com
$smtpPort = 465;                      // SSL için 465, TLS için 587
$smtpSecure = 'ssl';                  // 'ssl' veya 'tls'
$smtpUser = 'info@erpovy.com';        // SMTP kullanıcı adı (genelde e-posta adresiniz)
$smtpPass = 'mail_sifreniz';          // E-posta veya uygulama şifreniz

// ====================================================================
// 2. İŞLEM KODLARI (BURADAN SONRASINA DOKUNMANIZA GEREK YOKTUR)
// ====================================================================

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    echo json_encode(['error' => 'Geçersiz istek türü']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (!$data) {
    echo json_encode(['error' => 'Geçersiz veri gönderildi']);
    exit;
}

$fn = htmlspecialchars($data['fullName'] ?? '');
$em = htmlspecialchars($data['email'] ?? '');
$co = htmlspecialchars($data['companyName'] ?? '');
$ne = htmlspecialchars($data['primaryNeed'] ?? 'Finans');
$ph = htmlspecialchars($data['phone'] ?? 'Belirtilmedi');
$no = htmlspecialchars($data['note'] ?? 'Yok');
$honeypot = htmlspecialchars($data['honeypot'] ?? '');

// Spam bot kontrolü
if (!empty($honeypot)) {
    echo json_encode(['success' => true, 'message' => 'Talebiniz alındı.']);
    exit;
}

// Zorunlu alan kontrolü
if (empty($fn) || empty($em) || empty($co)) {
    echo json_encode(['error' => 'Lütfen ad soyad, iş e-postası ve firma adı alanlarını doldurun.']);
    exit;
}

$subject = "=?UTF-8?B?" . base64_encode("[Demo Talebi] $co - $fn") . "?=";
$timestamp = date('d.m.Y H:i:s');

$message = "Yeni Demo Talebi — Erpovy\n";
$message .= "========================================\n";
$message .= "Ad Soyad       : $fn\n";
$message .= "İş E-postası   : $em\n";
$message .= "Firma Adı      : $co\n";
$message .= "Öncelikli Odak : $ne\n";
$message .= "Telefon        : $ph\n";
$message .= "Kullanıcı Notu : $no\n";
$message .= "Tarih          : $timestamp\n";

if ($useSmtp) {
    $sent = sendSmtpMail($smtpHost, $smtpPort, $smtpSecure, $smtpUser, $smtpPass, $to, $subject, $message, $em);
} else {
    $headers = "From: Erpovy Web <no-reply@" . ($_SERVER['HTTP_HOST'] ?? 'erpovy.com') . ">\r\n";
    $headers .= "Reply-To: $em\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";
    $sent = @mail($to, $subject, $message, $headers);
}

if ($sent) {
    echo json_encode([
        'success' => true,
        'message' => 'Demo talebiniz başarıyla alındı. Uzman ekibimiz en kısa sürede sizinle iletişime geçecektir.'
    ]);
} else {
    echo json_encode([
        'error' => 'E-posta iletimi sırasında bir sorun oluştu. Lütfen doğrudan ' . $to . ' adresinden iletişime geçin.'
    ]);
}

// Saf PHP yerel Socket SMTP İstemcisi (Kütüphane gerektirmez)
function sendSmtpMail($host, $port, $secure, $user, $pass, $to, $subject, $body, $replyTo) {
    $timeout = 10;
    $prefix = ($secure === 'ssl') ? 'ssl://' : '';
    $socket = @fsockopen($prefix . $host, $port, $errno, $errstr, $timeout);
    
    if (!$socket) return false;

    $response = fgets($socket, 515);
    if (empty($response)) return false;

    fputs($socket, "EHLO " . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\n");
    while ($line = fgets($socket, 515)) {
        if (substr($line, 3, 1) == " ") break;
    }

    if ($secure === 'tls') {
        fputs($socket, "STARTTLS\r\n");
        fgets($socket, 515);
        stream_socket_enable_crypto($socket, true, STREAM_CRYPTO_METHOD_TLS_CLIENT);
        fputs($socket, "EHLO " . ($_SERVER['HTTP_HOST'] ?? 'localhost') . "\r\n");
        while ($line = fgets($socket, 515)) {
            if (substr($line, 3, 1) == " ") break;
        }
    }

    fputs($socket, "AUTH LOGIN\r\n");
    fgets($socket, 515);
    fputs($socket, base64_encode($user) . "\r\n");
    fgets($socket, 515);
    fputs($socket, base64_encode($pass) . "\r\n");
    $authRes = fgets($socket, 515);
    if (substr($authRes, 0, 3) != '235') {
        fclose($socket);
        return false;
    }

    fputs($socket, "MAIL FROM: <$user>\r\n");
    fgets($socket, 515);
    fputs($socket, "RCPT TO: <$to>\r\n");
    fgets($socket, 515);
    fputs($socket, "DATA\r\n");
    fgets($socket, 515);

    $headers = "From: Erpovy Web <$user>\r\n";
    $headers .= "Reply-To: $replyTo\r\n";
    $headers .= "To: <$to>\r\n";
    $headers .= "Subject: $subject\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=utf-8\r\n";

    fputs($socket, "$headers\r\n$body\r\n.\r\n");
    $sendRes = fgets($socket, 515);

    fputs($socket, "QUIT\r\n");
    fclose($socket);

    return (substr($sendRes, 0, 3) == '250');
}

