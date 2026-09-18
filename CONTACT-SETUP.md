# İletişim formu — cPanel kurulumu

Site statik Next.js çıktısı ve PHP gönderim uç noktası kullanır. Alıcı: **info@erpovy.com**.

1. `npm run build` çalıştırın. `out/` klasörünün **içeriğini** cPanel'de sitenin belge köküne (genellikle `public_html/`) yükleyin. `mail.php` dosyası da kökte olmalıdır.
2. Hosting üzerinde PHP 7.4 veya üzeri etkin olmalıdır. Next.js geliştirme sunucusu ve yalnızca statik önizleme sunucuları PHP çalıştırmaz.
3. Varsayılan gönderim cPanel'in yerel `mail()` servisini kullanır; dış SMTP şifresi gerekmez. Hosting, `info@erpovy.com` gönderici adresine izin vermelidir. `mail()` kabulü gelen kutusuna teslim garantisi değildir; cPanel **Track Delivery** ve spam klasörünü kontrol edin.
4. SMTP gerekiyorsa `erpovy-mail-config.example.php` dosyasını **public_html dışında**, `/home/CPANEL_KULLANICISI/erpovy-mail-config.php` adıyla oluşturun. `transport` değerini `smtp` yapın; cPanel > E-posta Hesapları > Connect Devices bölümündeki sunucu, port, kullanıcı ve şifreyi girin. 465 için `ssl`, 587 için `tls` kullanın. Sertifika doğrulaması zorunludur.
5. Belge kökü farklıysa PHP çalışma ortamında `ERPOVY_MAIL_CONFIG` değişkenini özel yapılandırma dosyasının mutlak yoluna ayarlayın. Bu PHP dosyası Next.js `.env.local` dosyasını okumaz. Parolaları `public/`, `out/` veya Git deposuna koymayın.
6. Canlı `/iletisim/` sayfasından bir test mesajı gönderin. `info@erpovy.com` kutusuna ulaştığını ve Yanıtla seçeneğinin formda girilen adrese döndüğünü doğrulayın. `/demo/` formunu da kontrol edin.

İletişimde ad, e-posta ve mesaj zorunludur; demo formunda ad, e-posta ve şirket zorunludur. Gönderim başarısızsa form içeriği korunur. Sunucu veri türünü, alan uzunluklarını ve e-posta adresini denetler; gizli bot alanını kontrol eder. Yoğun spam durumunda hosting/WAF tarafında `/mail.php` için istek sınırlaması uygulanabilir.

## Yerel doğrulama

- `php -l public/mail.php`
- `node --test tests/contact.test.mjs` (PHP CLI gerekir; gerçek e-posta göndermez.)
- `npm run build`

PHP ile statik siteyi önizlemek için derlemeden sonra `php -S 127.0.0.1:8080 -t out` çalıştırabilirsiniz. Yerel mail servisi yoksa gerçek gönderim için özel SMTP yapılandırması gerekir.
