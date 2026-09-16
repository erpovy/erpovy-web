export interface PricingPlan {
  id: string;
  name: string;
  badge: string;
  color: "emerald" | "blue" | "purple";
  tagline: string;
  targetAudience: string;
  annualPrice: string;
  annualPriceMin: number;
  annualPriceMax: number;
  monthlyEquivalent: string;
  monthlyNote: string;
  usersIncluded: number;
  additionalUserPrice?: string;
  setupCost: string;
  popular?: boolean;
  features: string[];
  ctaLabel: string;
}

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "standart",
    name: "ERPovy Standart",
    tagline: "Çekirdek ERP",
    badge: "KOBİ'ler İçin İdeal",
    color: "emerald",
    targetAudience:
      "5 - 25 personeli olan, eski hantal masaüstü programlarından kurtulmak isteyen ticaret ve hizmet KOBİ'leri.",
    annualPrice: "55.000 TL – 65.000 TL",
    annualPriceMin: 55000,
    annualPriceMax: 65000,
    monthlyEquivalent: "~4.500 - 5.500 TL / ay",
    monthlyNote: "Şirket için tek bir asgari ücretlinin aylık maliyetinin 5'te biri bile değil!",
    usersIncluded: 3,
    setupCost: "15.000 TL – 20.000 TL (Tek Seferlik Kurulum & Veri Taşıma)",
    popular: false,
    ctaLabel: "Standart Paket İçin Demo İste",
    features: [
      "Muhasebe & Finans (Fatura, Kasa, Banka, Çek/Senet)",
      "Satış & Teklif Yönetimi",
      "Satınalma & Tedarikçi Süreçleri",
      "Stok & Envanter Takibi",
      "Cari Hesaplar & Ekstre Takibi",
      "Temel CRM (Müşteri & İletişim Geçmişi)",
      "Yönetici Özet Dashboard",
      "3 Kullanıcı Lisansı Dahil",
      "Otomatik Bulut Yedekleme & SSL Güvenliği",
      "Standart Bilet & E-Posta Destek",
    ],
  },
  {
    id: "professional",
    name: "ERPovy Professional",
    tagline: "Gelişmiş ERP",
    badge: "En Çok Tercih Edilen",
    color: "blue",
    targetAudience:
      "Birden fazla deposu, şubesi veya saha ekibi olan, büyüme ivmesindeki operasyonel işletmeler.",
    annualPrice: "85.000 TL – 110.000 TL",
    annualPriceMin: 85000,
    annualPriceMax: 110000,
    monthlyEquivalent: "~7.000 - 9.100 TL / ay",
    monthlyNote: "Çok şubeli ve çok depolu operasyonlar için eksiksiz güç.",
    usersIncluded: 5,
    additionalUserPrice: "6.000 TL + KDV / yıl",
    setupCost: "25.000 TL – 35.000 TL (Tek Seferlik Kurulum & Eğitim)",
    popular: true,
    ctaLabel: "Professional Paket İçin Demo İste",
    features: [
      "Standart Paketteki Tüm Modüller Dahil",
      "Gelişmiş Depo Yönetimi (WMS / Raf / Barkod)",
      "Çoklu Şube Yönetimi & Konsolide Raporlama",
      "Proje & Görev Takip Modülü",
      "Doküman Yönetim Sistemi (DMS & Sözleşmeler)",
      "Gelişmiş CRM & Satış Hunisi (Pipeline)",
      "B2B Müşteri / Bayi Sipariş Portali",
      "5 Kullanıcı Lisansı Dahil (İlave: 6.000 TL/yıl)",
      "Erpovy Teams (Granüler Kullanıcı & Rol Yetkisi)",
      "Öncelikli Telefon & Canlı Uzman Destek",
    ],
  },
  {
    id: "enterprise",
    name: "ERPovy Enterprise",
    tagline: "Sanayi, Üretim & Büyük Ölçek",
    badge: "Sanayi & İmalat Lideri",
    color: "purple",
    targetAudience:
      "İmalatçılar, fabrikalar, e-ticaret devleri veya zincir işletmeler.",
    annualPrice: "160.000 TL – 220.000 TL",
    annualPriceMin: 160000,
    annualPriceMax: 220000,
    monthlyEquivalent: "~13.300 - 18.300 TL / ay",
    monthlyNote: "Üretimden pazaryerine anahtar teslim dijital kurumsallaşma.",
    usersIncluded: 10,
    additionalUserPrice: "Özel Tekliflendirilir",
    setupCost: "40.000 TL – 60.000 TL (Anahtar Teslim Canlıya Alma)",
    popular: false,
    ctaLabel: "Enterprise Çözüm Talebi",
    features: [
      "Professional Paketteki Tüm Modüller Dahil",
      "Üretim Yönetimi (Reçeteler, İş Emirleri, MRP I-II)",
      "İnsan Kaynakları & Bordro Yönetimi",
      "E-Ticaret & Pazaryeri Entegrasyonları (Trendyol, Hepsiburada vb.)",
      "Kalite Kontrol & İSG Süreç Takibi",
      "Özel API & Kurumsal Sistem Entegrasyonları",
      "10 Kullanıcı Lisansı Dahil (Genişletilebilir)",
      "Özel Müşteri Başarı Yöneticisi (Dedicated AM)",
      "SLA Garantisi & 7/24 Kesintisiz Destek",
      "Yerinde Anahtar Teslim Canlıya Alma",
    ],
  },
];

export interface CompetitorAdvantage {
  id: string;
  icon: string;
  title: string;
  highlight: string;
  description: string;
  competitorComparison: string;
}

export const COMPETITOR_ADVANTAGES: CompetitorAdvantage[] = [
  {
    id: "platform-independent",
    icon: "devices",
    title: "Modern Web & Mobil Deneyim",
    highlight: "Platform Bağımsız Özgürlük",
    description:
      "Mac, iPad, Android, Windows fark etmeksizin; ofiste, depoda veya sahada doğrudan tarayıcı hızıyla çalışır. Donanım bağımsızlığı sağlar.",
    competitorComparison:
      "Logo, Mikro gibi 2000'lerden kalma hantal uzak masaüstü (RDP), pahalı Windows Server lisansları veya kopup duran VPN sunucuları gerektirmez.",
  },
  {
    id: "transparent-pricing",
    icon: "receipt_long",
    title: "Gizli Maliyet Yok",
    highlight: "Şeffaf & Öngörülebilir Lisanslama",
    description:
      "ERPovy'de yıllık tek fatura ödersiniz. Ne ödeyeceğinizi baştan bilir, yıl ortasında sürpriz faturalarla karşılaşmazsınız.",
    competitorComparison:
      "Rakipler sizden her yıl zorunlu LEM (yazılım bakım bedeli), her ek modül için binlerce dolar ve her şube için ayrı lisans ister.",
  },
  {
    id: "erpovy-teams",
    icon: "security",
    title: "Erpovy Teams Yetkilendirme",
    highlight: "Granüler & Hızlı Yetki Yönetimi",
    description:
      "Patron veya yönetici; saniyeler içinde istediği personele özel, kısıtlı veya salt-okunur yetki tanımlayabilir. Bilgi güvenliği garanti altındadır.",
    competitorComparison:
      "Rakiplerde her kullanıcı rolü, alan kısıtlaması veya şube ayrımı için yetkili bayiye bağımlı olup bin dereden su getirmek gerekir.",
  },
];

export interface ComparisonRow {
  feature: string;
  traditional: string;
  erpovy: string;
  isAdvantage?: boolean;
}

export const HEAD_TO_HEAD_COMPARISON: ComparisonRow[] = [
  {
    feature: "Sunucu & Donanım Yatırımı",
    traditional: "100.000 TL+ fiziksel sunucu, klima odası, Windows Server & SQL lisansları",
    erpovy: "0 TL — Modern bulut altyapısı, sıfır donanım maliyeti",
    isAdvantage: true,
  },
  {
    feature: "Erişim Şekli",
    traditional: "Yavaş ve güvensiz Uzak Masaüstü (RDP) veya karmaşık VPN bağlantısı",
    erpovy: "Herhangi bir tarayıcıdan (Mac, PC, Tablet, Mobil) anında güvenli erişim",
    isAdvantage: true,
  },
  {
    feature: "Yıllık Zorunlu Bakım (LEM)",
    traditional: "Her yıl lisans bedelinin %15-%25'i oranında zorunlu LEM bakım faturası",
    erpovy: "0 TL Gizli Bakım — Güncellemeler ve bulut barındırma fiyata dahildir",
    isAdvantage: true,
  },
  {
    feature: "Modül Ekleme & Büyüme",
    traditional: "Her yeni modül (e-fatura, sipariş, depo) için ayrı lisans ve bayi ücreti",
    erpovy: "İhtiyacınıza uygun pakette zengin ve entegre modül seti",
    isAdvantage: true,
  },
  {
    feature: "Kullanıcı & Rol Yetkilendirme",
    traditional: "Bayi çağırma zorunluluğu, saatlik teknik servis faturası",
    erpovy: "Erpovy Teams ile patron panelinden saniyeler içinde anında yetkilendirme",
    isAdvantage: true,
  },
  {
    feature: "Yedekleme & Güvenlik",
    traditional: "Manuel harici disk yedekleri, fidye yazılımı (ransomware) riski",
    erpovy: "Otomatik günlük yedekleme, 256-bit banka düzeyinde SSL şifreleme",
    isAdvantage: true,
  },
];

export interface ModuleMatrixRow {
  name: string;
  category: string;
  standart: boolean | string;
  professional: boolean | string;
  enterprise: boolean | string;
}

export const DETAILED_MODULE_MATRIX: ModuleMatrixRow[] = [
  { name: "Kullanıcı Sayısı", category: "Genel", standart: "3 Kullanıcı Dahil", professional: "5 Kullanıcı Dahil", enterprise: "10 Kullanıcı Dahil" },
  { name: "İlave Kullanıcı Desteği", category: "Genel", standart: "Ek paket ile", professional: "6.000 TL/yıl", enterprise: "Esnek Ölçeklenebilir" },
  { name: "Şube & Depo Desteği", category: "Genel", standart: "Tek Şube / Depo", professional: "Çoklu Şube & Depo", enterprise: "Sınırsız Şube & Depo" },
  
  { name: "Muhasebe & Finans", category: "Finans & Operasyon", standart: true, professional: true, enterprise: true },
  { name: "Fatura, İrsaliye, Çek/Senet", category: "Finans & Operasyon", standart: true, professional: true, enterprise: true },
  { name: "Kasa & Banka Hareketleri", category: "Finans & Operasyon", standart: true, professional: true, enterprise: true },
  { name: "Cari Hesap & Borç/Alacak", category: "Finans & Operasyon", standart: true, professional: true, enterprise: true },
  { name: "Satış & Teklif Yönetimi", category: "Finans & Operasyon", standart: true, professional: true, enterprise: true },
  { name: "Satınalma & Tedarikçi Süreçleri", category: "Finans & Operasyon", standart: true, professional: true, enterprise: true },
  { name: "Stok & Envanter Takibi", category: "Finans & Operasyon", standart: true, professional: true, enterprise: true },
  
  { name: "Gelişmiş Depo (WMS / Raf / Barkod)", category: "İleri Operasyon", standart: false, professional: true, enterprise: true },
  { name: "Çoklu Şube Yönetimi", category: "İleri Operasyon", standart: false, professional: true, enterprise: true },
  { name: "Proje & Görev Yönetimi", category: "İleri Operasyon", standart: false, professional: true, enterprise: true },
  { name: "Doküman Yönetim Sistemi (DMS)", category: "İleri Operasyon", standart: false, professional: true, enterprise: true },
  { name: "Gelişmiş CRM & Satış Hunisi", category: "İleri Operasyon", standart: "Temel CRM", professional: true, enterprise: true },
  { name: "B2B Müşteri / Bayi Portali", category: "İleri Operasyon", standart: false, professional: true, enterprise: true },

  { name: "Üretim (Reçete & İş Emirleri)", category: "Üretim & Entegrasyon", standart: false, professional: false, enterprise: true },
  { name: "Malzeme İhtiyaç Planlaması (MRP)", category: "Üretim & Entegrasyon", standart: false, professional: false, enterprise: true },
  { name: "İnsan Kaynakları & Bordro", category: "Üretim & Entegrasyon", standart: false, professional: false, enterprise: true },
  { name: "E-Ticaret & Pazaryeri Entegrasyonları", category: "Üretim & Entegrasyon", standart: false, professional: false, enterprise: true },
  { name: "Kalite Kontrol & İSG Süreçleri", category: "Üretim & Entegrasyon", standart: false, professional: false, enterprise: true },
  { name: "Özel API & Entegrasyon Desteği", category: "Üretim & Entegrasyon", standart: false, professional: false, enterprise: true },

  { name: "Erpovy Teams Rol Yetkilendirme", category: "Güvenlik & Destek", standart: "Standart Roller", professional: "Gelişmiş Granüler", enterprise: "Tam Özel Rol Setleri" },
  { name: "Destek Seviyesi", category: "Güvenlik & Destek", standart: "Bilet & E-Posta", professional: "Öncelikli Telefon & Canlı", enterprise: "Özel Müşteri Yöneticisi + SLA" },
  { name: "Kurulum & Canlıya Alma", category: "Güvenlik & Destek", standart: "15.000 - 20.000 TL", professional: "25.000 - 35.000 TL", enterprise: "40.000 - 60.000 TL" },
];

export const PRICING_FAQ = [
  {
    question: "Fiyatlara KDV dahil midir ve ödeme periyodu nasıldır?",
    answer:
      "Belirtilen fiyatlar yıllık lisanslama bedeli olup + KDV olarak faturalandırılır. Yıllık tek fatura düzenlenir, böylece şirketiniz bütçesini tam olarak öngörebilir.",
  },
  {
    question: "Eski yazılımımızdan (Logo, Mikro vb.) verilerimizi taşıyabilir misiniz?",
    answer:
      "Evet! Tek seferlik kurulum ve veri taşıma sürecimizde; mevcut cari kartlarınızı, stok listelerinizi, fiyat listelerinizi ve bakiye durumlarınızı ERPovy'ye güvenle ve eksiksiz aktarıyoruz.",
  },
  {
    question: "Yıl sonunda zorunlu LEM veya ek bakım ücreti ödeyecek miyim?",
    answer:
      "Hayır. Geleneksel programların aksine ERPovy'de 'LEM' veya zorunlu gizli bakım ücreti yoktur. Yıllık lisans bedeliniz; yazılımın tüm güncellemelerini, mevzuat uyumlarını ve bulut altyapı hizmetlerini kapsar.",
  },
  {
    question: "Ek kullanıcıya ihtiyacımız olduğunda ne yapıyoruz?",
    answer:
      "Professional pakette yıllık yalnızca 6.000 TL + KDV karşılığında dilediğiniz zaman ilave kullanıcı ekleyebilirsiniz. Standart veya Enterprise paketlerde de ihtiyacınıza göre esnek kullanıcı artırımı yapılır.",
  },
  {
    question: "Ayrı bir sunucu veya donanım almamız gerekiyor mu?",
    answer:
      "Kesinlikle hayır. ERPovy %100 bulut yerel modern bir platformdur. 100.000 TL'leri bulan fiziksel sunucu, Windows Server lisansı, SQL lisansı veya klima yatırımı yapmanıza gerek yoktur.",
  },
  {
    question: "Erpovy Teams granüler yetkilendirme nedir?",
    answer:
      "Patron veya yöneticilerin, çalışanlara tek tıkla sadece kendi görmesi gereken cari, depo veya fatura ekranlarını açabilmesini; maliyet fiyatlarını veya kâr marjlarını personele saniyeler içinde gizleyebilmesini sağlayan modern rol yönetim motorumuzdur.",
  },
];
