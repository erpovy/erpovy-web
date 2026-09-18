import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { createServer } from 'node:net';
import { mkdtemp, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

// PHP's built-in Windows mail transport is pointed at a local SMTP sink.
// Linux uses a local sendmail stub instead. Neither path sends real email.
test('contact endpoint validates requests and reports transport results', async () => {
  const dir = await mkdtemp(join(tmpdir(), 'erpovy-contact-'));
  let reject = false;
  const messages = [];
  const smtp = createServer(socket => {
    socket.write('220 test.local ready\r\n');
    let buffer = '', body = '', inData = false;
    socket.on('data', chunk => {
      buffer += chunk;
      while (buffer.includes('\r\n')) {
        const end = buffer.indexOf('\r\n');
        const line = buffer.slice(0, end); buffer = buffer.slice(end + 2);
        if (inData) {
          if (line === '.') { messages.push(body); body = ''; inData = false; socket.write('250 accepted\r\n'); }
          else body += line + '\r\n';
        } else if (line === 'DATA') { inData = true; socket.write('354 continue\r\n'); }
        else if (line.startsWith('RCPT') && reject) socket.write('550 rejected\r\n');
        else if (line === 'QUIT') socket.end('221 bye\r\n');
        else socket.write('250 OK\r\n');
      }
    });
    socket.on('error', () => {});
  });
  await new Promise(resolve => smtp.listen(0, '127.0.0.1', resolve));
  const probe = createServer();
  await new Promise(resolve => probe.listen(0, '127.0.0.1', resolve));
  const port = probe.address().port;
  await new Promise(resolve => probe.close(resolve));
  const config = join(dir, 'config.php');
  await writeFile(config, "<?php return ['transport'=>'mail'];");
  const args = ['-d', 'SMTP=127.0.0.1', '-d', `smtp_port=${smtp.address().port}`, '-d', 'sendmail_from=info@erpovy.com'];
  if (process.platform !== 'win32') {
    const stub = join(dir, 'sendmail');
    await writeFile(stub, '#!/bin/sh\ncat > /dev/null\nexit 0\n', { mode: 0o700 });
    args.push('-d', `sendmail_path=${stub}`);
  }
  const php = spawn('php', [...args, '-S', `127.0.0.1:${port}`, '-t', resolve('public')], {
    env: { ...process.env, ERPOVY_MAIL_CONFIG: config }, stdio: 'pipe', windowsHide: true,
  });
  let startupError;
  php.on('error', error => { startupError = error; });
  const url = `http://127.0.0.1:${port}/mail.php`;
  const post = async data => {
    const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: typeof data === 'string' ? data : JSON.stringify(data) });
    return [response.status, await response.json()];
  };
  try {
    let ready = false;
    for (let i = 0; i < 50; i++) {
      if (startupError) throw startupError;
      try { if ((await fetch(url)).status === 405) { ready = true; break; } } catch {}
      await new Promise(resolve => setTimeout(resolve, 100));
    }
    assert.ok(ready, 'PHP server ready');
    const valid = { mode: 'contact', fullName: 'Çağrı Test', email: 'test@example.com', note: 'Türkçe mesaj & <örnek>', primaryNeed: 'Genel Bilgi' };
    assert.equal((await post('{broken'))[0], 400);
    for (const fields of [{ fullName: [] }, { email: 'bad' }, { email: 'x@example.com\r\nBcc: y@example.com' }, { note: ' ' }, { note: 'a'.repeat(4001) }, { mode: 'other' }]) {
      assert.equal((await post({ ...valid, ...fields }))[0], 422);
    }
    assert.equal((await post('x'.repeat(32769)))[0], 413);
    assert.equal((await post({ ...valid, honeypot: 'bot' }))[0], 200);
    assert.equal(messages.length, 0);
    assert.equal((await post(valid))[1].success, true);
    if (process.platform === 'win32') {
      assert.equal(messages.length, 1);
      assert.match(messages[0], /Reply-To: test@example.com/);
      assert.match(Buffer.from(messages[0].split('\r\n\r\n')[1], 'base64').toString(), /Türkçe mesaj & <örnek>/);
      reject = true;
      assert.equal((await post(valid))[0], 503);
      reject = false;
    }
    assert.equal((await post({ ...valid, mode: 'demo', note: '' }))[0], 422);
    assert.equal((await post({ ...valid, mode: 'demo', companyName: 'Firma', note: '' }))[1].success, true);
    await writeFile(config, "<?php return ['transport'=>'smtp'];");
    assert.equal((await post(valid))[0], 503);
  } finally {
    php.kill();
    await new Promise(resolve => php.once('close', resolve));
    await new Promise(resolve => smtp.close(resolve));
    await rm(dir, { recursive: true, force: true });
  }
});
