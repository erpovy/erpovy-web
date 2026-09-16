export interface ModuleItem {
  id: string;
  repoModule: string;
  group: string;
  title: string;
  description: string;
  icon: string;
  isComingSoon?: boolean;
}

export const MODULE_CATEGORIES = [
  "Tümü",
  "Finans ve Satış",
  "Stok ve Operasyon",
  "Ekip ve Kurumsal Yönetim",
  "Sektörel Çözümler",
  "Ticaret ve Bağlantılar",
] as const;

export type ModuleCategory = (typeof MODULE_CATEGORIES)[number];

export const MODULES_DATA: ModuleItem[] = [
  // Finans ve Satış
  {
    id: "accounting",
    repoModule: "Accounting",
    group: "Finans ve Satış",
    title: "Finans ve Muhasebe",
    description: "Cari hesap, fatura, kasa ve banka hareketlerinizi takip edin.",
    icon: "account_balance",
  },
  {
    id: "crm",
    repoModule: "CRM",
    group: "Finans ve Satış",
    title: "Müşteri İlişkileri",
    description: "Müşteri kayıtlarınızı ve satış ilişkilerinizi düzenli yönetin.",
    icon: "contacts",
  },
  {
    id: "sales",
    repoModule: "Sales",
    group: "Finans ve Satış",
    title: "Satış Yönetimi",
    description: "Teklif ve satış süreçlerinizi takip edin.",
    icon: "point_of_sale",
  },
  {
    id: "purchasing",
    repoModule: "Purchasing",
    group: "Finans ve Satış",
    title: "Satın Alma",
    description: "Tedarikçi ve satın alma siparişi kayıtlarını yönetin.",
    icon: "shopping_cart",
  },

  // Stok ve Operasyon
  {
    id: "inventory",
    repoModule: "Inventory",
    group: "Stok ve Operasyon",
    title: "Stok Yönetimi",
    description: "Ürün kartlarını, stok hareketlerini ve stok seviyelerini izleyin.",
    icon: "inventory_2",
  },
  {
    id: "wms",
    repoModule: "WMS",
    group: "Stok ve Operasyon",
    title: "Depo Yönetimi",
    description: "Raf adresleri ve depo içi mal kabul süreçlerini düzenleyin.",
    icon: "warehouse",
  },
  {
    id: "manufacturing",
    repoModule: "Manufacturing",
    group: "Stok ve Operasyon",
    title: "Üretim Yönetimi",
    description: "Üretim iş emirlerini ve ilerleme durumlarını takip edin.",
    icon: "precision_manufacturing",
  },
  {
    id: "logistics",
    repoModule: "Logistics",
    group: "Stok ve Operasyon",
    title: "Lojistik",
    description: "Sevkiyat kayıtlarını ve teslimat durumlarını takip edin.",
    icon: "local_shipping",
  },
  {
    id: "fixed-assets",
    repoModule: "FixedAssets",
    group: "Stok ve Operasyon",
    title: "Demirbaş Yönetimi",
    description: "Demirbaş, konum ve amortisman bilgilerini kayıt altında tutun.",
    icon: "devices_other",
  },

  // Ekip ve Kurumsal Yönetim
  {
    id: "human-resources",
    repoModule: "HumanResources",
    group: "Ekip ve Kurumsal Yönetim",
    title: "İnsan Kaynakları",
    description: "Personel bilgilerini ve insan kaynakları süreçlerini yönetin.",
    icon: "badge",
  },
  {
    id: "project",
    repoModule: "Project",
    group: "Ekip ve Kurumsal Yönetim",
    title: "Proje ve Görevler",
    description: "Projeleri, görevleri, sorumluları ve terminleri takip edin.",
    icon: "assignment",
  },
  {
    id: "dms",
    repoModule: "DMS",
    group: "Ekip ve Kurumsal Yönetim",
    title: "Belge Yönetimi",
    description: "Kurumsal belgeleri düzenleyin ve yetkili erişimle yönetin.",
    icon: "folder_shared",
  },
  {
    id: "legal",
    repoModule: "Legal",
    group: "Ekip ve Kurumsal Yönetim",
    title: "Hukuk ve Sözleşmeler",
    description: "Sözleşme kayıtlarını ve ilgili tarihleri takip edin.",
    icon: "gavel",
  },
  {
    id: "lms",
    repoModule: "LMS",
    group: "Ekip ve Kurumsal Yönetim",
    title: "Eğitim Yönetimi",
    description: "Eğitim içeriklerini ve kurs yapısını düzenleyin.",
    icon: "school",
  },
  {
    id: "ohs",
    repoModule: "OHS",
    group: "Ekip ve Kurumsal Yönetim",
    title: "İş Sağlığı ve Güvenliği",
    description: "Risk değerlendirmelerini ve aksiyon kayıtlarını takip edin.",
    icon: "health_and_safety",
  },
  {
    id: "bi",
    repoModule: "BI",
    group: "Ekip ve Kurumsal Yönetim",
    title: "İş Zekâsı ve Raporlama",
    description: "Yönetim değerlendirmeleri için raporlama alanlarını keşfedin.",
    icon: "insights",
  },

  // Sektörel Çözümler
  {
    id: "service-management",
    repoModule: "ServiceManagement",
    group: "Sektörel Çözümler",
    title: "Servis Yönetimi",
    description: "Araç, servis ve bakım kayıtlarını takip edin.",
    icon: "build",
  },
  {
    id: "restaurant",
    repoModule: "Restaurant",
    group: "Sektörel Çözümler",
    title: "Restoran Yönetimi",
    description: "Menü, masa ve QR menü süreçlerini yönetin.",
    icon: "restaurant",
  },
  {
    id: "farm",
    repoModule: "Farm",
    group: "Sektörel Çözümler",
    title: "Tarım Yönetimi",
    description: "Tarımsal faaliyetlere yönelik yönetim alanlarını keşfedin.",
    icon: "agriculture",
    isComingSoon: true,
  },

  // Ticaret ve Bağlantılar
  {
    id: "b2b-portal",
    repoModule: "B2BPortal",
    group: "Ticaret ve Bağlantılar",
    title: "B2B Bayi Portalı",
    description: "Bayiler için özel sipariş ekranları, cari ekstre görüntüleme ve online tahsilat.",
    icon: "storefront",
    isComingSoon: true,
  },
  {
    id: "iot-hub",
    repoModule: "IoTHub",
    group: "Ticaret ve Bağlantılar",
    title: "IoT Hub & Entegrasyon",
    description: "Makine verilerini canlı izleme, sensör entegrasyonları ve kestirimci bakım sinyalleri.",
    icon: "hub",
    isComingSoon: true,
  },
  {
    id: "ecommerce",
    repoModule: "Ecommerce",
    group: "Ticaret ve Bağlantılar",
    title: "E-Ticaret",
    description: "E-ticaret operasyonlarına yönelik yönetim alanlarını keşfedin.",
    icon: "shopping_bag",
  },
  {
    id: "help-desk",
    repoModule: "HelpDesk",
    group: "Ticaret ve Bağlantılar",
    title: "Destek Yönetimi",
    description: "Destek taleplerini ve takip süreçlerini yönetin.",
    icon: "support_agent",
  },
  {
    id: "integrations",
    repoModule: "Integrations",
    group: "Ticaret ve Bağlantılar",
    title: "Entegrasyonlar",
    description: "İşletmenize uygun bağlantı seçeneklerini birlikte değerlendirin.",
    icon: "cable",
  },
];
