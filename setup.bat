@echo off
chcp 65001 > nul
echo ========================================================
echo   Erpovy Landing Page - Windows Sunucu Kurulum Scripti
echo ========================================================
echo.

echo [1/3] Paket bağımlılıkları yükleniyor...
call npm install
if %errorlevel% neq 0 (
    echo [HATA] npm install başarısız oldu!
    pause
    exit /b %errorlevel%
)

if not exist .env.local (
    echo [BILGI] .env.local oluşturuluyor...
    copy .env.example .env.local
)

echo.
echo [2/3] Proje derleniyor (npm run build)...
call npm run build
if %errorlevel% neq 0 (
    echo [HATA] npm run build başarısız oldu!
    pause
    exit /b %errorlevel%
)

echo.
echo [3/3] Sunucu başlatılıyor (port 3000)...
call npm run start
