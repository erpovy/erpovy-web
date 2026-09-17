"use client";

import { useState } from "react";
import ParticleDrift from "@/components/ui/particle-drift";
import { AwardBadge } from "@/components/ui/award-badge";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { ArrowDown } from "lucide-react";

export function HeroRedesign() {
  const [activeStep, setActiveStep] = useState<number>(1);

  const scenarioMoments = [
    {
      id: 1,
      title: "Teklif değerlendirildi",
      detail: "100 koli ambalaj kutusu için teklif hazırlandı ve müşteri tarafından onaylandı.",
      tag: "Teklif No: TKL-1042",
      amount: "₺24.000",
      status: "Onaylandı",
      statusColor: "text-emerald-400 bg-emerald-500/10",
      icon: "request_quote",
    },
    {
      id: 2,
      title: "Stok rezerve edildi",
      detail: "Ana Depo A-3 rafından 100 koli stok ayrıldı, sevkiyat hazırlığı tamamlandı.",
      tag: "Depo: Ana Depo (A-3)",
      amount: "100 Koli",
      status: "Rezerve",
      statusColor: "text-sky-400 bg-sky-500/10",
      icon: "inventory_2",
    },
    {
      id: 3,
      title: "Fatura düzenlendi",
      detail: "Sevkiyat çıkışıyla birlikte satış faturası kesildi ve cari hesaba borç kaydedildi.",
      tag: "Fatura: FTR-2026-1042",
      amount: "₺24.000",
      status: "Kesildi",
      statusColor: "text-blue-400 bg-blue-500/10",
      icon: "receipt_long",
    },
    {
      id: 4,
      title: "Ödeme takip listesinde",
      detail: "30 günlük vade tanımlandı, banka tahsilat havuzunda vade tarihi izleniyor.",
      tag: "Vade: 30 Gün",
      amount: "₺24.000 Bakiye",
      status: "Beklemede",
      statusColor: "text-amber-400 bg-amber-500/10",
      icon: "hourglass_top",
    },
  ];

  return (
    <section className="relative pt-8 pb-12 sm:pt-12 sm:pb-16 lg:pt-16 lg:pb-20 bg-[#e2f1f9] text-[#070d1c] border-b border-[#1992d1]/15 overflow-hidden">
      {/* Particle Drift Background Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-70">
        <ParticleDrift
          mode="light"
          density={1.1}
          speed={0.9}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-16 items-center">
          {/* Left Column: 55% Editorial Copy */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-3 sm:mb-4 inline-block px-3 py-1 bg-sky-500/10 rounded-full border border-sky-500/20 backdrop-blur-xs">
              İşletmeniz için ortak çalışma alanı
            </span>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-[#070d1c] tracking-tight leading-[1.08] mb-4 sm:mb-6">
              İşiniz büyüsün.<br />
              <span className="text-slate-500">Karmaşa değil.</span>
            </h1>

            <p className="text-base sm:text-lg lg:text-xl text-[#334155] leading-relaxed max-w-2xl mb-6 sm:mb-8 font-normal">
              Satış nerede kaldı, stok yeterli mi, ödeme geldi mi? Erpovy ile işinizin farklı adımlarını aynı yerden takip edin.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto mb-4">
              <AwardBadge
                type="erpovy-demo"
                theme="brand-dark"
                link="/demo"
                badgeLabel="ERPOVY · DEMO"
                titleText="İşime uygun demoyu gör"
                className="w-full sm:w-auto"
              />

              <ButtonWithIcon
                asLink
                href="#hikaye"
                variant="light"
                size="md"
                icon={ArrowDown}
                className="w-full sm:w-auto justify-center bg-white/95"
              >
                Bir iş akışını keşfet
              </ButtonWithIcon>
            </div>

            {/* Quick Trust Tags on Mobile & Desktop */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-[11px] sm:text-xs font-semibold text-slate-600">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                %100 Bulut Tabanlı
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                Sıfır Sunucu Maliyeti
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 border border-slate-200/80 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                20 Dk Canlı Demo
              </span>
            </div>
          </div>

          {/* Right Column: 45% Navy Order Story Panel */}
          <div id="hikaye" className="lg:col-span-5 w-full">
            <div className="rounded-2xl bg-[#070d1c] text-white p-4 sm:p-7 border border-white/10 shadow-2xl backdrop-blur-md">
              {/* Header of Story Panel */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div>
                  <div className="text-[11px] font-semibold text-[#1992d1] tracking-wider uppercase mb-0.5">
                    Örnek senaryo
                  </div>
                  <h2 className="text-lg font-bold text-white">
                    Bir siparişin hikâyesi
                  </h2>
                </div>
                <div className="text-right">
                  <div className="text-xs text-slate-400">Sipariş #1042</div>
                  <div className="text-sm font-bold text-white">₺24.000</div>
                </div>
              </div>

              {/* Context Summary Bar */}
              <div className="px-3.5 py-2 rounded-lg bg-white/5 border border-white/5 flex items-center justify-between text-xs text-slate-300 mb-5">
                <span>Müşteri: <strong className="text-white">Örnek İşletme A</strong></span>
                <span>Ürün: <strong className="text-white">100 Koli Ambalaj</strong></span>
              </div>

              {/* 4 Moments Sequence */}
              <div className="space-y-3">
                {scenarioMoments.map((m) => {
                  const isActive = activeStep === m.id;
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => setActiveStep(m.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all ${
                        isActive
                          ? "bg-slate-900 border-[#1992d1] shadow-md shadow-[#1992d1]/10"
                          : "bg-white/[0.02] border-white/5 hover:border-white/15 hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-start justify-between gap-3 mb-1">
                        <div className="flex items-center gap-2">
                          <span
                            className={`w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${
                              isActive
                                ? "bg-[#1992d1] text-white"
                                : "bg-white/10 text-slate-400"
                            }`}
                          >
                            {m.id}
                          </span>
                          <h3 className="text-sm font-semibold text-white">
                            {m.title}
                          </h3>
                        </div>
                        <span
                          className={`text-[10px] px-2 py-0.5 rounded font-medium ${m.statusColor}`}
                        >
                          {m.status}
                        </span>
                      </div>

                      <p className="text-xs text-slate-300 pl-8 leading-relaxed mb-2">
                        {m.detail}
                      </p>

                      <div className="pl-8 flex items-center justify-between text-[11px] text-slate-400">
                        <span>{m.tag}</span>
                        <span className="font-semibold text-slate-200">{m.amount}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <span className="text-[11px] text-slate-400">
                  Tüm adımlar ortak veri yapısı üzerinde gerçek zamanlı izlenir.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Ruled Row Under Hero */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-black/[0.08] flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs sm:text-sm text-slate-600">
          <div className="font-bold text-[#070d1c] tracking-tight text-base sm:text-lg">
            Satıştan finansa. Depodan üretime.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-8 font-medium">
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#1992d1]">check</span>
              Modüler yapı
            </span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#1992d1]">check</span>
              Türkçe arayüz
            </span>
            <span className="text-slate-300 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#1992d1]">check</span>
              İşinize göre kullanım
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
