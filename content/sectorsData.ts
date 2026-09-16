export interface SectorItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  focusModules: string[];
  isComingSoon?: boolean;
}

export const SECTORS_DATA: SectorItem[] = [
  {
    id: "uretim",
    title: "Üretim ve sanayi",
    description: "Üretim emirleri, stok, satın alma ve depo takibi.",
    icon: "precision_manufacturing",
    focusModules: ["manufacturing", "inventory", "purchasing", "wms"],
  },
  {
    id: "ticaret",
    title: "Toptan ve perakende ticaret",
    description: "Müşteri, satış, cari hesap ve ürün hareketleri.",
    icon: "storefront",
    focusModules: ["sales", "crm", "accounting", "inventory"],
  },
  {
    id: "lojistik",
    title: "Depo ve lojistik",
    description: "Raf düzeni, mal kabul ve sevkiyat takibi.",
    icon: "local_shipping",
    focusModules: ["wms", "logistics", "inventory"],
  },
  {
    id: "otomotiv",
    title: "Otomotiv ve servis",
    description: "Araç, bakım, servis ve lastik oteli süreçleri.",
    icon: "car_repair",
    focusModules: ["service-management", "inventory", "sales"],
  },
  {
    id: "restoran",
    title: "Restoran ve kafe",
    description: "Menü, masa ve QR menü yönetimi.",
    icon: "restaurant",
    focusModules: ["restaurant", "inventory", "accounting"],
  },
  {
    id: "tarim",
    title: "Tarım işletmeleri",
    description: "Tarımsal faaliyetlere uygun modül kapsamının değerlendirilmesi.",
    icon: "agriculture",
    focusModules: ["farm", "inventory", "accounting"],
    isComingSoon: true,
  },
];
