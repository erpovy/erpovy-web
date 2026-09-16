export interface PreviewFinanceData {
  summary: {
    invoicedSales: number;
    collected: number;
    outstanding: number;
  };
  monthlySales: { month: string; amount: number }[];
  recentTransactions: {
    id: string;
    party: string;
    type: string;
    amount: number;
    date: string;
    status: string;
  }[];
}

export interface PreviewStockData {
  summary: {
    totalProducts: number;
    warehousesCount: number;
    criticalStockCount: number;
  };
  criticalItems: {
    code: string;
    name: string;
    warehouse: string;
    currentStock: number;
    minStock: number;
    unit: string;
  }[];
}

export interface PreviewOperationsData {
  summary: {
    totalWorkOrders: number;
    planned: number;
    inProgress: number;
    completed: number;
  };
  workOrders: {
    code: string;
    title: string;
    line: string;
    status: "Planlandı" | "Devam Ediyor" | "Tamamlandı";
    progress: number;
  }[];
}

export const PREVIEW_FINANCE_DATA: PreviewFinanceData = {
  summary: {
    invoicedSales: 480000,
    collected: 360000,
    outstanding: 120000,
  },
  monthlySales: [
    { month: "Nis", amount: 240000 },
    { month: "May", amount: 280000 },
    { month: "Haz", amount: 310000 },
    { month: "Tem", amount: 350000 },
    { month: "Ağu", amount: 420000 },
    { month: "Eyl", amount: 480000 },
  ],
  recentTransactions: [
    {
      id: "FTR-2026-089",
      party: "Örnek İşletme A",
      type: "Satış Faturası",
      amount: 48500,
      date: "04.09.2026",
      status: "Tahsil Edildi",
    },
    {
      id: "FTR-2026-088",
      party: "Kuzey Sanayi Ltd.",
      type: "Satış Faturası",
      amount: 72000,
      date: "02.09.2026",
      status: "Beklemede",
    },
    {
      id: "THS-2026-034",
      party: "Atlas Dağıtım A.Ş.",
      type: "Banka Tahsilat",
      amount: 35000,
      date: "01.09.2026",
      status: "Tamamlandı",
    },
  ],
};

export const PREVIEW_STOCK_DATA: PreviewStockData = {
  summary: {
    totalProducts: 128,
    warehousesCount: 3,
    criticalStockCount: 4,
  },
  criticalItems: [
    {
      code: "STK-104",
      name: "Rulman Yatağı B-12",
      warehouse: "Ana Depo (Raf A-3)",
      currentStock: 12,
      minStock: 40,
      unit: "Adet",
    },
    {
      code: "STK-089",
      name: "Endüstriyel Conta Takımı",
      warehouse: "Hammadde Deposu",
      currentStock: 5,
      minStock: 25,
      unit: "Set",
    },
    {
      code: "STK-210",
      name: "Hidrolik Filtre Kartuşu",
      warehouse: "Ana Depo (Raf C-1)",
      currentStock: 8,
      minStock: 30,
      unit: "Adet",
    },
    {
      code: "STK-315",
      name: "Montaj Civatası M8x30",
      warehouse: "Yedek Depo",
      currentStock: 150,
      minStock: 500,
      unit: "Adet",
    },
  ],
};

export const PREVIEW_OPERATIONS_DATA: PreviewOperationsData = {
  summary: {
    totalWorkOrders: 12,
    planned: 4,
    inProgress: 5,
    completed: 3,
  },
  workOrders: [
    {
      code: "İEM-26-041",
      title: "Metal Gövde Talaşlı İmalat",
      line: "Hat 1 - CNC",
      status: "Devam Ediyor",
      progress: 65,
    },
    {
      code: "İEM-26-042",
      title: "Elektronik Kontrol Paneli Montajı",
      line: "Hat 3 - Montaj",
      status: "Devam Ediyor",
      progress: 40,
    },
    {
      code: "İEM-26-043",
      title: "Kasa Boyama ve Fırınlama",
      line: "Hat 2 - Yüzey İşlem",
      status: "Planlandı",
      progress: 0,
    },
    {
      code: "İEM-26-040",
      title: "Güç Ünitesi Test ve Kalibrasyon",
      line: "Hat 4 - Test",
      status: "Tamamlandı",
      progress: 100,
    },
  ],
};
