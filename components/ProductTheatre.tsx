"use client";

import { useState } from "react";
import {
  PREVIEW_FINANCE_DATA,
  PREVIEW_STOCK_DATA,
  PREVIEW_OPERATIONS_DATA,
} from "@/content/previewData";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

type TheatreTab = "finans" | "stok" | "operasyon";

export function ProductTheatre() {
  const [activeTab, setActiveTab] = useState<TheatreTab>("finans");

  const handleContextualDemo = (needCategory: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("erpovy:select-need", {
          detail: { need: needCategory },
        })
      );
      const demoEl = document.getElementById("demo");
      if (demoEl) {
        demoEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(val);
  };

  return (
    <section
      id="urun-tiyatrosu"
      className="py-20 lg:py-28 bg-[#070d1c] text-white border-b border-white/10 relative"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-3 inline-block">
            Ürün Sahnesi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mb-4">
            Önce sizin işinize bakan ekran.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Bir özellik listesi okumak yerine, günlük işinizde bakacağınız bilgileri keşfedin.
          </p>
        </div>

        {/* Tab Selection Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10 mb-8">
          <div
            className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0"
            role="tablist"
            aria-label="Ürün Görünümleri"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "finans"}
              onClick={() => setActiveTab("finans")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === "finans"
                  ? "bg-[#1992d1] text-white shadow-md shadow-[#1992d1]/20"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="material-symbols-outlined text-base">account_balance_wallet</span>
              <span>Param nerede?</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "stok"}
              onClick={() => setActiveTab("stok")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === "stok"
                  ? "bg-[#1992d1] text-white shadow-md shadow-[#1992d1]/20"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="material-symbols-outlined text-base">warehouse</span>
              <span>Stok ne durumda?</span>
            </button>

            <button
              type="button"
              role="tab"
              aria-selected={activeTab === "operasyon"}
              onClick={() => setActiveTab("operasyon")}
              className={`px-5 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center gap-2 whitespace-nowrap ${
                activeTab === "operasyon"
                  ? "bg-[#1992d1] text-white shadow-md shadow-[#1992d1]/20"
                  : "bg-white/5 text-slate-400 hover:text-white hover:bg-white/10"
              }`}
            >
              <span className="material-symbols-outlined text-base">precision_manufacturing</span>
              <span>Hangi iş bekliyor?</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
            <span>Örnek ekran · Temsili veriler</span>
          </div>
        </div>

        {/* View Content Panel */}
        <div className="rounded-2xl bg-[#0a1226] border border-white/10 p-6 sm:p-8 shadow-2xl">
          {/* TAB 1: FINANS */}
          {activeTab === "finans" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">Finansal Durum Özeti</h3>
                  <p className="text-xs text-slate-400">Nisan – Eylül dönemi fatura, tahsilat ve bakiye dağılımı</p>
                </div>
                <ButtonWithIcon
                  type="button"
                  variant="brand"
                  size="sm"
                  onClick={() => handleContextualDemo("Finans")}
                >
                  Finans akışını demoda incele
                </ButtonWithIcon>
              </div>

              {/* KPI Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Faturalanan Satış</span>
                  <div className="text-2xl font-bold text-white">
                    {formatCurrency(PREVIEW_FINANCE_DATA.summary.invoicedSales)}
                  </div>
                  <span className="text-[11px] text-slate-400">Örnek dönem toplamı</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Tahsil Edilen</span>
                  <div className="text-2xl font-bold text-emerald-400">
                    {formatCurrency(PREVIEW_FINANCE_DATA.summary.collected)}
                  </div>
                  <span className="text-[11px] text-slate-400">Banka ve kasa tahsilatı</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Kalan Bakiye</span>
                  <div className="text-2xl font-bold text-amber-300">
                    {formatCurrency(PREVIEW_FINANCE_DATA.summary.outstanding)}
                  </div>
                  <span className="text-[11px] text-slate-400">Açık cari hesap toplamı</span>
                </div>
              </div>

              {/* Transactions Table */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Son Cari İşlem Kayıtları
                </h4>
                <div className="space-y-2">
                  {PREVIEW_FINANCE_DATA.recentTransactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-semibold text-white">{tx.party}</div>
                        <div className="text-slate-400 text-[11px]">{tx.type} · {tx.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-white">{formatCurrency(tx.amount)}</div>
                        <span className="text-[10px] text-emerald-400">{tx.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: STOK */}
          {activeTab === "stok" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">Stok ve Depo Durumu</h3>
                  <p className="text-xs text-slate-400">Tanımlı ürün kartları, lokasyonlar ve asgari stok uyarıları</p>
                </div>
                <ButtonWithIcon
                  type="button"
                  variant="brand"
                  size="sm"
                  onClick={() => handleContextualDemo("Stok ve Depo")}
                >
                  Stok akışını demoda incele
                </ButtonWithIcon>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Toplam Ürün Kartı</span>
                  <div className="text-2xl font-bold text-white">{PREVIEW_STOCK_DATA.summary.totalProducts} Adet</div>
                  <span className="text-[11px] text-slate-400">Aktif tanımlı ürün kartları</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Depo Sayısı</span>
                  <div className="text-2xl font-bold text-white">{PREVIEW_STOCK_DATA.summary.warehousesCount} Lokasyon</div>
                  <span className="text-[11px] text-slate-400">Ana, Hammadde, Yedek</span>
                </div>

                <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <span className="text-xs text-amber-300 block mb-1">Kritik Stok Seviyesi</span>
                  <div className="text-2xl font-bold text-amber-300">{PREVIEW_STOCK_DATA.summary.criticalStockCount} Ürün</div>
                  <span className="text-[11px] text-amber-200/70">Asgari seviyenin altındakiler</span>
                </div>
              </div>

              {/* Critical items table */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Kritik Stok Uyarısı Verilen Ürünler
                </h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-slate-400">
                        <th className="pb-2">Ürün Kodu / Adı</th>
                        <th className="pb-2">Depo</th>
                        <th className="pb-2">Mevcut</th>
                        <th className="pb-2">Asgari</th>
                        <th className="pb-2 text-right">Durum</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5">
                      {PREVIEW_STOCK_DATA.criticalItems.map((item) => (
                        <tr key={item.code} className="hover:bg-white/[0.02]">
                          <td className="py-2.5 font-medium text-white">{item.name} ({item.code})</td>
                          <td className="py-2.5 text-slate-300">{item.warehouse}</td>
                          <td className="py-2.5 font-bold text-amber-300">{item.currentStock} {item.unit}</td>
                          <td className="py-2.5 text-slate-400">{item.minStock} {item.unit}</td>
                          <td className="py-2.5 text-right text-amber-400">Sipariş Gerekli</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: OPERASYON */}
          {activeTab === "operasyon" && (
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white">İş Emirleri ve Operasyon</h3>
                  <p className="text-xs text-slate-400">Aktif hatlardaki iş emirleri ve ilerleme oranları</p>
                </div>
                <ButtonWithIcon
                  type="button"
                  variant="brand"
                  size="sm"
                  onClick={() => handleContextualDemo("Üretim")}
                >
                  Operasyon akışını demoda incele
                </ButtonWithIcon>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Toplam İş Emri</span>
                  <div className="text-2xl font-bold text-white">{PREVIEW_OPERATIONS_DATA.summary.totalWorkOrders}</div>
                  <span className="text-[11px] text-slate-400">İş havuzu</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Planlanan</span>
                  <div className="text-2xl font-bold text-sky-300">{PREVIEW_OPERATIONS_DATA.summary.planned}</div>
                  <span className="text-[11px] text-slate-400">Sıraya alınanlar</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Devam Eden</span>
                  <div className="text-2xl font-bold text-[#1992d1]">{PREVIEW_OPERATIONS_DATA.summary.inProgress}</div>
                  <span className="text-[11px] text-slate-400">Hatta işlemde</span>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10">
                  <span className="text-xs text-slate-400 block mb-1">Tamamlanan</span>
                  <div className="text-2xl font-bold text-emerald-400">{PREVIEW_OPERATIONS_DATA.summary.completed}</div>
                  <span className="text-[11px] text-slate-400">Kapanan işler</span>
                </div>
              </div>

              {/* Work orders */}
              <div className="space-y-2 pt-2">
                {PREVIEW_OPERATIONS_DATA.workOrders.map((wo) => (
                  <div
                    key={wo.code}
                    className="p-3 rounded-lg bg-white/[0.02] border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs"
                  >
                    <div>
                      <span className="font-semibold text-white mr-2">{wo.title}</span>
                      <span className="text-slate-400 text-[11px]">{wo.code} · {wo.line}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-slate-300">%{wo.progress}</span>
                      <span className="px-2 py-0.5 rounded bg-white/5 text-slate-200 text-[11px]">
                        {wo.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
