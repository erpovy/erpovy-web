#!/usr/bin/env bash
# ==============================================================================
# Erpovy Web Landing Page — Sunucu Otomatik Kurulum ve Başlatma Scripti
# ==============================================================================
set -e

echo "🚀 [1/4] Erpovy Landing Page kurulumu başlatılıyor..."

# 1. Node.js ve npm kontrolü
if ! command -v node &> /dev/null; then
    echo "❌ HATA: Node.js sunucuda bulunamadı. Lütfen Node.js v20+ kurun."
    exit 1
fi

echo "📦 [2/4] Paket bağımlılıkları yükleniyor (npm install)..."
npm install --production=false

# 2. .env.local kontrolü
if [ ! -f .env.local ]; then
    echo "⚠️ .env.local dosyası bulunamadı. .env.example üzerinden oluşturuluyor..."
    cp .env.example .env.local
    echo "ℹ️ Lütfen .env.local dosyasını açıp SMTP/E-posta bilgilerinizi düzenleyin."
fi

echo "🔨 [3/4] Next.js üretim derlemesi yapılıyor (npm run build)..."
npm run build

echo "✨ [4/4] Uygulama PM2 ile arka planda başlatılıyor..."
if command -v pm2 &> /dev/null; then
    pm2 delete erpovy-landing 2>/dev/null || true
    pm2 start ecosystem.config.json
    pm2 save
    echo "✅ Başarılı! Erpovy Landing Page PM2 üzerinde (erpovy-landing adıyla) çalışıyor."
    echo "📊 Durumu görmek için: pm2 status"
    echo "📜 Logları izlemek için: pm2 logs erpovy-landing"
else
    echo "⚠️ PM2 kurulu değil. 'npm i -g pm2' ile kurabilirsiniz."
    echo "➡️ Uygulamayı manuel başlatmak için: npm run start"
fi
