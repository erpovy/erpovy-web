# Erpovy Web — Sunucu Dağıtım ve Kurulum Kılavuzu

Bu proje bir Next.js 16 (App Router + Turbopack) uygulamasıdır. Sunucuya dosyaları yükledikten sonra aşağıdaki 3 yöntemden dilediğinizi seçerek tek tıkla veya tek komutla kurup çalıştırabilirsiniz.

---

## 📁 1. Sunucuya Hangi Dosyaları Yükleyeceksiniz?

Sunucuya yüklerken .git, 
ode_modules ve .next klasörlerini **atlamanız** (yüklememeniz) önerilir. Sadece kaynak kodları yükleyin:

- pp/
- components/
- content/
- lib/
- public/
- package.json ve package-lock.json
- 	sconfig.json
- 
ext.config.ts
- .env.example
- setup.sh, setup.bat, ecosystem.config.json, Dockerfile, docker-compose.yml

---

## 🚀 2. Yöntemler (Nasıl Çalıştırılır?)

### Seçenek A: Linux Sunucu (Ubuntu / Debian / CentOS) — ÖNERİLEN (PM2 İle)

1. Sunucunuzda projenin bulunduğu klasöre gidin.
2. setup.sh dosyasına çalıştırma izni verin ve başlatın:
   `ash
   chmod +x setup.sh
   ./setup.sh
   `
Bu script sırasıyla:
- 
pm install ile paketleri yükler.
- .env.example dosyasından .env.local oluşturur.
- 
pm run build ile projeyi canlı modda derler.
- pm2 ile arka planda kesintisiz (cluster modda) çalıştırır ve sunucu yeniden başlasa bile otomatik açılmasını sağlar (pm2 save).

---

### Seçenek B: Docker & Docker Compose (İzole ve Taşınabilir)

Sunucunuzda Docker ve Docker Compose kuruluysa hiçbir Node.js sürümüyle uğraşmadan:

1. .env.example dosyasını .env.local olarak kopyalayın:
   `ash
   cp .env.example .env.local
   `
2. Konteyneri inşa edip başlatın:
   `ash
   docker compose up -d --build
   `
Uygulama http://sunucu-ip-adresi:3000 portundan canlıya alınacaktır.

---

### Seçenek C: Windows Server

1. Klasör içindeki setup.bat dosyasına çift tıklayın veya CMD üzerinden çalıştırın:
   `cmd
   setup.bat
   `

---

## 🔒 3. Nginx Ters Proxy (Domain ve SSL / HTTPS Bağlantısı)

Uygulama sunucuda 3000 portunda çalışır. Domaininizi (www.erpovy.com) bağlamak için örnek Nginx bloğu:

`
ginx
server {
    server_name erpovy.com www.erpovy.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade ;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host System.Management.Automation.Internal.Host.InternalHost;
        proxy_cache_bypass ;
        proxy_set_header X-Real-IP ;
        proxy_set_header X-Forwarded-For ;
        proxy_set_header X-Forwarded-Proto ;
    }
}
`
Ardından Certbot ile ücretsiz SSL sertifikanızı tek komutla aktif edebilirsiniz:
`ash
sudo certbot --nginx -d erpovy.com -d www.erpovy.com
`

---

## ✉️ 4. E-posta ve Demo Bildirim Ayarları

Sunucuda .env.local dosyasını açıp kurumsal SMTP e-posta bilgilerinizi girdiğiniz anda demo talepleri e-postanıza düşmeye başlar:

`env
DEMO_NOTIFICATION_EMAIL=info@erpovy.com
SMTP_HOST=smtp.yandex.com
SMTP_PORT=465
SMTP_USER=info@erpovy.com
SMTP_PASS=uygulama_sifresi
`
