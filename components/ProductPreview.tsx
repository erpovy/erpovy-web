"use client";

import { useState } from "react";
import {
  PREVIEW_FINANCE_DATA,
  PREVIEW_STOCK_DATA,
  PREVIEW_OPERATIONS_DATA,
} from "@/content/previewData";

type TabType = "finans" | "stok" | "operasyon";

export function ProductPreview() {
  const [activeTab, setActiveTab] = useState<TabType>("finans");

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat("tr-TR", {
      style: "currency",
      currency: "TRY",
      maximumFractionDigits: 0,
    }).format(val);
  };

  const formatNumber = (val: number) => {
    return new Intl.NumberFormat("tr-TR").format(val);
  };

  return (
    <div className="w-full relative rounded-2xl lg:rounded-3xl border border-white/15 bg-[#0f172a]/95 backdrop-blur-xl shadow-2xl shadow-black/80 overflow-hidden">
      {/* Top Banner / Persistent Label */}
      <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#070d1c]/80 border-b border-white/10 text-xs text-slate-400">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 rounded-full bg-emerald-500/80 animate-pulse" />
          <span className="font-medium text-slate-300">
            Örnek ekran · Temsili veriler
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden sm:inline-block text-slate-400">
            Firma: <strong className="text-slate-200">Örnek İşletme A</strong>
          </span>
          <span className="px-2 py-0.5 rounded text-[11px] bg-white/5 border border-white/10 text-slate-300">
            Canlı Sistem Değildir
          </span>
        </div>
      </div>

      {/* App Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#0a1226] border-b border-white/10">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-500/60" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/60" />
            <span className="w-3 h-3 rounded-full bg-green-500/60" />
          </div>
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs text-slate-400">
            <span className="material-symbols-outlined text-sm">search</span>
            <span>Kayıtlarda ara (Fatura, Stok, Müşteri)...</span>
          </div>
        </div>

        {/* Tab Switcher */}
        <div
          className="flex items-center p-1 rounded-xl bg-[#070d1c] border border-white/10"
          role="tablist"
          aria-label="Örnek Ekran Modül Sekmeleri"
        >
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "finans"}
            onClick={() => setActiveTab("finans")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "finans"
                ? "bg-[#1992d1] text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-sm">payments</span>
            <span>Finans</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "stok"}
            onClick={() => setActiveTab("stok")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "stok"
                ? "bg-[#1992d1] text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-sm">inventory_2</span>
            <span>Stok</span>
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeTab === "operasyon"}
            onClick={() => setActiveTab("operasyon")}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
              activeTab === "operasyon"
                ? "bg-[#1992d1] text-white shadow-sm"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span className="material-symbols-outlined text-sm">precision_manufacturing</span>
            <span>Operasyon</span>
          </button>
        </div>
      </div>

      {/* Main Preview Screen */}
      <div className="p-4 sm:p-6 bg-gradient-to-b from-[#0f172a] to-[#070d1c] min-h-[420px]">
        {/* TAB 1: FINANS */}
        {activeTab === "finans" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Faturalanan Satış</span>
                  <span className="material-symbols-outlined text-base text-[#1992d1]">receipt_long</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {formatCurrency(PREVIEW_FINANCE_DATA.summary.invoicedSales)}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Örnek dönem toplamı</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Tahsil Edilen</span>
                  <span className="material-symbols-outlined text-base text-emerald-400">check_circle</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-emerald-400 tracking-tight">
                  {formatCurrency(PREVIEW_FINANCE_DATA.summary.collected)}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Nakit ve banka tahsilatı</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Kalan Bakiye</span>
                  <span className="material-symbols-outlined text-base text-amber-400">pending</span>
                </div>
                <div className="text-xl sm:text-2xl font-bold text-amber-300 tracking-tight">
                  {formatCurrency(PREVIEW_FINANCE_DATA.summary.outstanding)}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Açık cari hesap toplamı</p>
              </div>
            </div>

            {/* Chart & Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-4">
              {/* Sample Sales Chart (SVG) */}
              <div className="lg:col-span-3 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white">Satış Trendi (6 Aylık)</h4>
                    <p className="text-xs text-slate-400">Nisan – Eylül dönemi temsilidir</p>
                  </div>
                  <span className="text-xs font-medium px-2 py-0.5 rounded bg-[#1992d1]/20 text-[#1992d1] border border-[#1992d1]/30">
                    ₺480.000 Zirve
                  </span>
                </div>

                <div className="h-36 w-full flex items-end justify-between gap-2 pt-4 px-2">
                  {PREVIEW_FINANCE_DATA.monthlySales.map((item) => {
                    const heightPercent = Math.round((item.amount / 480000) * 100);
                    return (
                      <div key={item.month} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end group">
                        <div className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          {formatNumber(item.amount / 1000)}k
                        </div>
                        <div
                          style={{ height: `${heightPercent}%` }}
                          className="w-full max-w-[32px] bg-gradient-to-t from-[#1a2d5d] to-[#1992d1] rounded-t-md transition-all duration-300 group-hover:brightness-125"
                        />
                        <span className="text-xs text-slate-400 font-medium">{item.month}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Transactions list */}
              <div className="lg:col-span-2 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <h4 className="text-sm font-semibold text-white mb-3">Son Cari İşlemler</h4>
                <div className="space-y-2.5">
                  {PREVIEW_FINANCE_DATA.recentTransactions.map((tx) => (
                    <div
                      key={tx.id}
                      className="p-2.5 rounded-lg bg-black/20 border border-white/5 flex items-center justify-between text-xs"
                    >
                      <div>
                        <div className="font-medium text-slate-200">{tx.party}</div>
                        <div className="text-[11px] text-slate-400">{tx.type} · {tx.date}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-semibold text-slate-100">{formatCurrency(tx.amount)}</div>
                        <span
                          className={`inline-block text-[10px] px-1.5 py-0.2 rounded font-medium ${
                            tx.status === "Tahsil Edildi"
                              ? "text-emerald-400 bg-emerald-500/10"
                              : "text-amber-400 bg-amber-500/10"
                          }`}
                        >
                          {tx.status}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: STOK */}
        {activeTab === "stok" && (
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Toplam Ürün Kartı</span>
                  <span className="material-symbols-outlined text-base text-[#1992d1]">category</span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  {PREVIEW_STOCK_DATA.summary.totalProducts} Adet
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Aktif tanımlı ürün kartları</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-1">
                  <span>Aktif Depo</span>
                  <span className="material-symbols-outlined text-base text-blue-400">warehouse</span>
                </div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  {PREVIEW_STOCK_DATA.summary.warehousesCount} Lokasyon
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Ana, Hammadde ve Yedek Depo</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-amber-500/30 bg-amber-500/[0.03]">
                <div className="flex items-center justify-between text-xs text-amber-300 mb-1">
                  <span>Kritik Seviye Uyarısı</span>
                  <span className="material-symbols-outlined text-base text-amber-400">warning</span>
                </div>
                <div className="text-2xl font-bold text-amber-300 tracking-tight">
                  {PREVIEW_STOCK_DATA.summary.criticalStockCount} Ürün
                </div>
                <p className="text-[11px] text-amber-200/70 mt-1">Minimum stok altına düşenler</p>
              </div>
            </div>

            {/* Critical items table */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-white">Kritik Stok Takip Listesi (Temsili 4 Ürün)</h4>
                <span className="text-xs text-slate-400">Tüm depolar</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="border-b border-white/10 text-slate-400">
                      <th className="pb-2 font-medium">Stok Kodu / Adı</th>
                      <th className="pb-2 font-medium">Depo Lokasyonu</th>
                      <th className="pb-2 font-medium">Mevcut</th>
                      <th className="pb-2 font-medium">Asgari</th>
                      <th className="pb-2 font-medium text-right">Durum</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {PREVIEW_STOCK_DATA.criticalItems.map((item) => (
                      <tr key={item.code} className="hover:bg-white/[0.02]">
                        <td className="py-2.5">
                          <div className="font-medium text-slate-200">{item.name}</div>
                          <div className="text-[11px] text-slate-400">{item.code}</div>
                        </td>
                        <td className="py-2.5 text-slate-300">{item.warehouse}</td>
                        <td className="py-2.5 font-bold text-amber-300">
                          {item.currentStock} {item.unit}
                        </td>
                        <td className="py-2.5 text-slate-400">
                          {item.minStock} {item.unit}
                        </td>
                        <td className="py-2.5 text-right">
                          <span className="inline-block text-[10px] px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                            Sipariş Gerekli
                          </span>
                        </td>
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
          <div className="space-y-6 animate-in fade-in duration-200">
            {/* KPI Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-xs text-slate-400 mb-1">Toplam İş Emri</div>
                <div className="text-2xl font-bold text-white tracking-tight">
                  {PREVIEW_OPERATIONS_DATA.summary.totalWorkOrders}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Operasyon havuzu</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
                <div className="text-xs text-slate-400 mb-1">Planlanan</div>
                <div className="text-2xl font-bold text-sky-300 tracking-tight">
                  {PREVIEW_OPERATIONS_DATA.summary.planned}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Sıraya alınan işler</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-blue-500/20 bg-blue-500/[0.02]">
                <div className="text-xs text-blue-300 mb-1">Devam Eden</div>
                <div className="text-2xl font-bold text-[#1992d1] tracking-tight">
                  {PREVIEW_OPERATIONS_DATA.summary.inProgress}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Üretim hattında</p>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.03] border border-emerald-500/20 bg-emerald-500/[0.02]">
                <div className="text-xs text-emerald-300 mb-1">Tamamlanan</div>
                <div className="text-2xl font-bold text-emerald-400 tracking-tight">
                  {PREVIEW_OPERATIONS_DATA.summary.completed}
                </div>
                <p className="text-[11px] text-slate-400 mt-1">Sevkiyata hazır</p>
              </div>
            </div>

            {/* Work orders table */}
            <div className="p-4 rounded-xl bg-white/[0.03] border border-white/10">
              <div className="flex items-center justify-between mb-3">
                <h4 className="text-sm font-semibold text-white">İş Emirleri Durumu</h4>
                <span className="text-xs text-slate-400">Üretim & Montaj Hatları</span>
              </div>
              <div className="space-y-3">
                {PREVIEW_OPERATIONS_DATA.workOrders.map((wo) => (
                  <div
                    key={wo.code}
                    className="p-3 rounded-lg bg-black/20 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-slate-200">{wo.title}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-white/5 text-slate-400">
                          {wo.code}
                        </span>
                      </div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{wo.line}</div>
                    </div>

                    <div className="flex items-center gap-4 min-w-[200px]">
                      <div className="flex-1">
                        <div className="flex justify-between text-[11px] text-slate-300 mb-1">
                          <span>İlerleme</span>
                          <span>%{wo.progress}</span>
                        </div>
                        <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                          <div
                            style={{ width: `${wo.progress}%` }}
                            className={`h-full rounded-full ${
                              wo.progress === 100
                                ? "bg-emerald-500"
                                : "bg-[#1992d1]"
                            }`}
                          />
                        </div>
                      </div>

                      <span
                        className={`text-[11px] px-2 py-0.5 rounded font-medium whitespace-nowrap ${
                          wo.status === "Tamamlandı"
                            ? "bg-emerald-500/10 text-emerald-400"
                            : wo.status === "Devam Ediyor"
                            ? "bg-[#1992d1]/10 text-[#1992d1]"
                            : "bg-slate-500/10 text-slate-400"
                        }`}
                      >
                        {wo.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
