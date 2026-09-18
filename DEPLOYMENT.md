# Erpovy Web — cPanel dağıtımı

Bu proje `output: "export"` ile statik site üretir. Canlı ortam PHP destekli cPanel hosting kullanır.

1. Bağımlılıkları `npm ci` ile yükleyin.
2. `npm run build` çalıştırın.
3. `out/` klasörünün içeriğini sitenin belge köküne (`public_html/`) yükleyin. Klasör yapısını koruyun; `mail.php` kökte kalmalıdır.
4. PHP'yi etkinleştirin ve [iletişim formu kurulumunu](CONTACT-SETUP.md) tamamlayın.
5. Ana sayfayı, `/iletisim/` ve `/demo/` sayfalarını kontrol edin. Bir test talebinin info@erpovy.com kutusuna ulaştığını doğrulayın.

`next start`, PM2 ve mevcut Node Docker betikleri bu statik cPanel dağıtımının parçası değildir. Yerel arayüz geliştirmesi için `npm run dev` kullanılabilir; bu sunucu PHP çalıştırmaz. Form dahil önizleme için `npm run build` sonrası `php -S 127.0.0.1:8080 -t out` kullanın.

E-posta parolalarını derlenen siteye veya depoya koymayın. SMTP gerekiyorsa özel yapılandırma dosyasını belge kökünün dışında tutun; ayrıntılar [CONTACT-SETUP.md](CONTACT-SETUP.md) içindedir.
