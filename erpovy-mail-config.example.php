<?php
// Copy to /home/CPANEL_USER/erpovy-mail-config.php, OUTSIDE public_html.
return [
    'to' => 'info@erpovy.com',
    'from' => 'info@erpovy.com',
    // 'mail' uses cPanel's local mail service; switch to 'smtp' if needed.
    'transport' => 'mail',
    'host' => 'mail.erpovy.com', // Use the exact host shown in cPanel > Connect Devices.
    'port' => 465,
    'secure' => 'ssl', // ssl for 465, tls for 587
    'user' => 'info@erpovy.com',
    'pass' => '', // Only fill in the private server copy.
];
