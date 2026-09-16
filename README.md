# Erpovy Landing Page

Erpovy modüler ERP ve iş yönetimi platformu için geliştirilmiş modern, responsive, erişilebilir ve Türkçe pazarlama web sitesi.

Bu proje `todo-antigravity.md` şartnamesine tam uyumlu olarak Next.js (App Router), TypeScript ve Tailwind CSS ile bağımsız olarak inşa edilmiştir.

---

## Özellikler

- **Marka Bütünlüğü:** Orijinal Erpovy logosu (`/brand/logo.png`), `#1992d1` marka mavisi, `#1a2d5d` lacivert tonları, `#070d1c` koyu arka plan ve cam kart (glassmorphism) yüzeyleri.
- **İnteraktif Ürün Önizlemesi:** Finans, Stok ve Operasyon sekmelerine sahip temsili dashboard ekranı (`Intl.NumberFormat` para ve sayı biçimlendirmeleri).
- **22 Modüllü Keşif Alanı:** Türkçe karakter duyarlı anlık arama, 5 kategori filtresi ve formla entegre "Demoda İncele" aksiyonları.
- **4 Adımlı İş Akışı:** Müşteri teklifinden faturalandırma ve yönetim raporlamasına uzanan interaktif senaryo.
- **Sektörel Çözümler:** Üretim, Ticaret, Lojistik, Otomotiv, Restoran ve Tarım sektörlerine yönelik modül eşleştirmeleri.
- **Erişilebilir Demo Formu:** Modül ve sektör seçimleriyle senkronize çalışan, şartname Madde 4.10 gereği korumalı önizleme uyarısına sahip demo talep arayüzü.
- **Klavye & ARIA Uyumu:** WAI-ARIA standartlarına uygun SSS akordiyonları, mobil menü ve odak göstergeleri.

---

## Kurulum ve Çalıştırma

### Gereksinimler
- Node.js v18+ (önerilen v20 veya v24)
- npm veya pnpm / yarn

### Adımlar

1. `landing-page` klasörüne gidin:
```bash
cd landing-page
```

2. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```
Varsayılan olarak `http://localhost:3000` adresinde yerel önizleme açılır.

3. Üretim (Production) derlemesi alın:
```bash
npm run build
```

4. Üretim sunucusunu çalıştırın:
```bash
npm run start
```

---

## Proje Mimarisi

```text
landing-page/
├── app/
│   ├── layout.tsx         # Dil (tr), SEO, Material Symbols & Google Sans Flex fontları
│   ├── page.tsx           # Tüm bölümlerin birleştirildiği ana sayfa
│   └── globals.css        # Renk tokenları, cam yüzeyler ve özel stiller
├── components/
│   ├── Header.tsx         # Sticky navigasyon, mobil çekmece menü, login linki
│   ├── Hero.tsx           # H1 başlık, değer vaadi ve CTA'lar
│   ├── ProductPreview.tsx # Temsili Finans/Stok/Operasyon paneli
│   ├── CoreValues.tsx     # 3 temel fayda sütunu
│   ├── ModuleExplorer.tsx # 22 modül, arama ve filtreleme sistemi
│   ├── WorkflowSection.tsx# 4 adımlı iş akışı simülasyonu
│   ├── SectorSection.tsx  # 6 sektörel çözüm kartı
│   ├── TrustSection.tsx   # Yetkilendirme ve erişim güvenliği
│   ├── CommercialSection.tsx # Esnek çözüm ve danışma yaklaşımı
│   ├── FaqSection.tsx     # 7 adet SSS soru-cevabı (akordiyon)
│   ├── DemoForm.tsx       # Demo talep formu ve önizleme modu
│   └── Footer.tsx         # Logo, slogan, doğrudan bağlantılar ve telif
├── content/
│   ├── modulesData.ts     # 22 modülün verileri ve kategorileri
│   ├── sectorsData.ts     # Sektör verileri
│   ├── previewData.ts     # Önizleme ekranındaki temsili sayılar ve grafikler
│   └── faqData.ts         # SSS soru ve yanıtları
├── lib/
│   └── siteConfig.ts      # Site bağlantıları ve temel ayarlar
└── public/
    └── brand/             # Orijinal logo.png ve favicon.png
```
