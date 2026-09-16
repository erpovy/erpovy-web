"use client";

import { useState } from "react";

interface Step {
  id: number;
  title: string;
  description: string;
  badge: string;
  icon: string;
  details: {
    heading: string;
    subtext: string;
    metrics: { label: string; value: string }[];
    notes: string;
  };
}

export function WorkflowSection() {
  const [activeStepId, setActiveStepId] = useState<number>(1);

  const steps: Step[] = [
    {
      id: 1,
      title: "Müşteri ve teklif",
      description: "Müşteri bilgilerini düzenleyin, satış teklifinizi takip edin.",
      badge: "Adım 1 / 4",
      icon: "handshake",
      details: {
        heading: "Teklif Hazırlığı ve Müşteri Onayı",
        subtext: "Örnek İşletme A adına açılan sipariş teklifi inceleniyor ve cari şartlar doğrulanıyor.",
        metrics: [
          { label: "Müşteri", value: "Örnek İşletme A" },
          { label: "Teklif No", value: "TKL-2026-441" },
          { label: "Tutar", value: "₺48.500" },
        ],
        notes: "Müşteri onayladığında kayıt tek ekrandan operasyon hazırlık sürecine aktarılır.",
      },
    },
    {
      id: 2,
      title: "Stok ve hazırlık",
      description: "İlgili ürün ve stok durumunu inceleyin, operasyon hazırlığını yönetin.",
      badge: "Adım 2 / 4",
      icon: "inventory",
      details: {
        heading: "Depo Rezervasyonu ve Malzeme Kontrolü",
        subtext: "Teklifteki ürünler için depolardan stok rezerve edilir, eksik parçalar için satın alma uyarısı üretilir.",
        metrics: [
          { label: "Rezerve Depo", value: "Ana Depo (Raf A-3)" },
          { label: "Kalem Sayısı", value: "4 Farklı Parça" },
          { label: "Stok Uygunluğu", value: "%100 Hazır" },
        ],
        notes: "Depo görevlileri sevkiyat ve montaj hazırlığını ortak liste üzerinden koordine eder.",
      },
    },
    {
      id: 3,
      title: "Fatura ve tahsilat",
      description: "Fatura kayıtlarını ve tahsilat durumunu takip edin.",
      badge: "Adım 3 / 4",
      icon: "receipt_long",
      details: {
        heading: "Fatura Kesimi ve Tahsilat Takibi",
        subtext: "Teslimat onayının ardından satış faturası kesilir, cari bakiye ve vade takip listesine yansıtılır.",
        metrics: [
          { label: "Fatura No", value: "FTR-2026-089" },
          { label: "Vade", value: "30 Gün" },
          { label: "Tahsilat Durumu", value: "Kısmi Tahsilat" },
        ],
        notes: "Banka ve kasa hareketleri cari hesapla eşleştirilerek bakiye güncel tutulur.",
      },
    },
    {
      id: 4,
      title: "Yönetim görünümü",
      description: "İlgili kayıtları değerlendirerek işin ilerleyişini görün.",
      badge: "Adım 4 / 4",
      icon: "monitoring",
      details: {
        heading: "Uçtan Uca Operasyonel Raporlama",
        subtext: "Siparişin başlangıcından tahsilatına kadar geçen tüm süreçler yönetim panellerinde konsolide edilir.",
        metrics: [
          { label: "Süreç Durumu", value: "Başarıyla Tamamlandı" },
          { label: "Operasyon Süresi", value: "3 İş Günü" },
          { label: "Kârlılık Görünümü", value: "Hedef Dahilinde" },
        ],
        notes: "Yöneticiler departmanlar arası veri kaybı olmadan tüm süreci geriye dönük izleyebilir.",
      },
    },
  ];

  const currentStep = steps.find((s) => s.id === activeStepId) || steps[0];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1992d1]/10 text-[#1992d1] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">route</span>
            <span>Örnek İş Akışı</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white light:text-slate-900 tracking-tight mb-4">
            Bir işin farklı adımlarını aynı bakışla takip edin.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            Farklı departmanların tek bir iş sürecinde nasıl senkronize çalıştığını temsili bir senaryo üzerinden inceleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Step Selector List (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {steps.map((step) => {
              const isActive = step.id === activeStepId;
              return (
                <button
                  key={step.id}
                  type="button"
                  onClick={() => setActiveStepId(step.id)}
                  className={`text-left p-5 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-[#0f172a] light:bg-white border-[#1992d1] shadow-lg shadow-[#1992d1]/15 ring-1 ring-[#1992d1]"
                      : "bg-[#0a1226]/50 light:bg-white/70 border-white/5 light:border-slate-200 hover:border-white/15 light:hover:border-slate-300 hover:bg-[#0f172a]/60 light:hover:bg-white"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                        isActive
                          ? "bg-[#1992d1] text-white"
                          : "bg-white/5 light:bg-slate-100 text-slate-400 light:text-slate-600"
                      }`}
                    >
                      <span className="material-symbols-outlined text-xl">
                        {step.icon}
                      </span>
                    </div>

                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-[11px] font-semibold text-[#1992d1] uppercase tracking-wider">
                          {step.badge}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-white light:text-slate-900 mb-1">
                        {step.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Step Visualizer Panel (Right) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-b from-[#0f172a] to-[#070d1c] light:from-white light:to-slate-50 border border-white/15 light:border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#1992d1]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10 light:border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="w-9 h-9 rounded-lg bg-[#1992d1]/20 light:bg-sky-50 border border-[#1992d1]/30 light:border-sky-200 flex items-center justify-center text-[#1992d1]">
                    <span className="material-symbols-outlined text-lg">
                      {currentStep.icon}
                    </span>
                  </span>
                  <div>
                    <span className="text-xs text-slate-400 light:text-slate-500 font-medium">İş Akışı Önizlemesi</span>
                    <h4 className="text-base sm:text-lg font-bold text-white light:text-slate-900">
                      {currentStep.details.heading}
                    </h4>
                  </div>
                </div>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-[#1992d1]/15 text-[#1992d1] border border-[#1992d1]/30">
                  {currentStep.badge}
                </span>
              </div>

              <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                {currentStep.details.subtext}
              </p>

              {/* Metrics Box */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                {currentStep.details.metrics.map((m) => (
                  <div
                    key={m.label}
                    className="p-3.5 rounded-xl bg-black/30 light:bg-slate-100 border border-white/5 light:border-slate-200"
                  >
                    <div className="text-[11px] text-slate-400 light:text-slate-500 mb-1">{m.label}</div>
                    <div className="text-sm sm:text-base font-bold text-white light:text-slate-900">
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>

              {/* Notes callout */}
              <div className="p-4 rounded-xl bg-[#1992d1]/5 light:bg-sky-50 border border-[#1992d1]/20 light:border-sky-200 flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1992d1] text-lg shrink-0 mt-0.5">
                  info
                </span>
                <p className="text-xs text-slate-300 light:text-slate-700 leading-normal">
                  {currentStep.details.notes}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
