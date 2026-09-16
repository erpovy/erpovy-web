"use client";

import { useState } from "react";
import {
  PRICING_PLANS,
  COMPETITOR_ADVANTAGES,
  HEAD_TO_HEAD_COMPARISON,
  DETAILED_MODULE_MATRIX,
  PricingPlan,
} from "@/content/pricingData";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { ArrowRight, Check, Sparkles, Shield, Zap, HelpCircle } from "lucide-react";

interface PricingSectionProps {
  showFullDetails?: boolean;
  className?: string;
}

export function PricingSection({ showFullDetails = true, className = "" }: PricingSectionProps) {
  const [billingPeriod, setBillingPeriod] = useState<"annual" | "monthly">("annual");
  const [showMatrix, setShowMatrix] = useState(false);

  const handleSelectPlan = (plan: PricingPlan) => {
    // Custom event dispatch to populate demo form
    const event = new CustomEvent("erpovy:select-need", {
      detail: { need: `Paket Talebi: ${plan.name} (${plan.tagline})` },
    });
    window.dispatchEvent(event);

    // Smooth scroll to demo section
    const demoElement = document.getElementById("demo");
    if (demoElement) {
      demoElement.scrollIntoView({ behavior: "smooth" });
    } else {
      window.location.href = "/#demo";
    }
  };

  return (
    <section id="fiyatlar" className={`py-20 lg:py-28 relative ${className}`}>
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1992d1]/15 text-[#1992d1] text-xs font-bold uppercase tracking-wider mb-4 border border-[#1992d1]/25">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Şeffaf ve Öngörülebilir Yatırım</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#070d1c] tracking-tight leading-tight mb-4">
            Gizli Maliyetsiz. Sürpriz Bakım Bedelsiz.{" "}
            <span className="text-[#1992d1]">İşinizle Büyüyen Fiyatlandırma.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Hantal masaüstü programlarına, 100.000 TL&apos;lik sunucu yatırımlarına ve zorunlu LEM bakım bedellerine son verin.
            İşletmenizin ölçeğine uygun şeffaf paketlerle hemen dijitalleşin.
          </p>

          {/* ROI Announcement Banner */}
          <div className="mt-6 inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-3 px-5 py-3 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs sm:text-sm font-medium shadow-xs">
            <span className="flex items-center gap-1.5 font-bold text-emerald-700">
              <Zap className="w-4 h-4 text-emerald-600 fill-emerald-500 shrink-0" />
              Yatırım Getirisi (ROI) Gerçeği:
            </span>
            <span>
              Yıllık <strong>55.000 TL</strong> başlangıç lisansı, şirketiniz için <strong>tek bir asgari ücretlinin aylık maliyetinin 5&apos;te birinden bile düşüktür</strong>.
            </span>
          </div>

          {/* Billing Switcher (Annual vs Monthly perspective) */}
          <div className="mt-8 inline-flex p-1 rounded-xl bg-slate-200/80 border border-slate-300">
            <button
              type="button"
              onClick={() => setBillingPeriod("annual")}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                billingPeriod === "annual"
                  ? "bg-[#070d1c] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Yıllık Lisans Bedeli
            </button>
            <button
              type="button"
              onClick={() => setBillingPeriod("monthly")}
              className={`px-5 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                billingPeriod === "monthly"
                  ? "bg-[#070d1c] text-white shadow-md"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              <span>Aylık Eşdeğer Maliyet</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-[#1992d1] text-white font-semibold">
                Kıyas
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PRICING_PLANS.map((plan) => {
            const isPopular = plan.popular;

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? "bg-[#070d1c] text-white shadow-2xl ring-2 ring-[#1992d1] lg:-translate-y-2"
                    : "bg-white text-[#070d1c] border border-slate-200/90 shadow-md hover:shadow-xl"
                }`}
              >
                {/* Popular Pill */}
                {isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#1992d1] to-[#0c6b9e] text-white text-xs font-black tracking-wide uppercase shadow-lg shadow-[#1992d1]/30 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>En Çok Tercih Edilen</span>
                  </div>
                )}

                <div>
                  {/* Top Badge & Title */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span
                      className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                        isPopular
                          ? "bg-[#1992d1]/25 text-sky-200 border border-[#1992d1]/40"
                          : plan.color === "emerald"
                          ? "bg-emerald-100 text-emerald-800 border border-emerald-200"
                          : "bg-purple-100 text-purple-800 border border-purple-200"
                      }`}
                    >
                      {plan.badge}
                    </span>
                    <span
                      className={`text-xs font-semibold ${
                        isPopular ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {plan.usersIncluded} Kullanıcı Dahil
                    </span>
                  </div>

                  <h3
                    className={`text-2xl sm:text-3xl font-black tracking-tight mb-1 ${
                      isPopular ? "text-white" : "text-[#070d1c]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className={`text-sm font-semibold mb-4 ${
                      isPopular ? "text-[#1992d1]" : "text-[#1992d1]"
                    }`}
                  >
                    {plan.tagline}
                  </p>

                  <p
                    className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                      isPopular ? "text-slate-300" : "text-[#334155]"
                    }`}
                  >
                    {plan.targetAudience}
                  </p>

                  {/* Price Block */}
                  <div
                    className={`p-5 rounded-2xl mb-6 ${
                      isPopular
                        ? "bg-white/[0.05] border border-white/10"
                        : "bg-slate-50 border border-slate-200/80"
                    }`}
                  >
                    <div className="flex items-baseline gap-1.5">
                      <span
                        className={`text-2xl sm:text-3xl font-black tracking-tight ${
                          isPopular ? "text-white" : "text-[#070d1c]"
                        }`}
                      >
                        {billingPeriod === "annual"
                          ? plan.annualPrice
                          : plan.monthlyEquivalent}
                      </span>
                      <span
                        className={`text-xs font-medium ${
                          isPopular ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        + KDV {billingPeriod === "annual" ? "/ Yıl" : ""}
                      </span>
                    </div>

                    <div
                      className={`text-xs mt-2 pt-2 border-t font-medium ${
                        isPopular
                          ? "border-white/10 text-sky-200"
                          : "border-slate-200 text-emerald-700"
                      }`}
                    >
                      {billingPeriod === "annual" ? (
                        <span>
                          Aylık eşdeğer: <strong>{plan.monthlyEquivalent}</strong>
                        </span>
                      ) : (
                        <span>Yıllık tek fatura: {plan.annualPrice} + KDV</span>
                      )}
                    </div>

                    {/* Additional User Info if exists */}
                    {plan.additionalUserPrice && (
                      <div
                        className={`text-[11px] mt-1.5 ${
                          isPopular ? "text-slate-400" : "text-slate-500"
                        }`}
                      >
                        İlave kullanıcı: <strong>{plan.additionalUserPrice}</strong>
                      </div>
                    )}
                  </div>

                  {/* Setup & Implementation Footnote */}
                  <div
                    className={`text-xs p-3 rounded-xl mb-6 flex items-start gap-2 ${
                      isPopular
                        ? "bg-sky-950/40 text-sky-200 border border-sky-800/40"
                        : "bg-amber-50 text-amber-900 border border-amber-200/80"
                    }`}
                  >
                    <span className="material-symbols-outlined text-base shrink-0 mt-0.5">
                      handshake
                    </span>
                    <div>
                      <strong className="block font-bold">
                        {plan.id === "enterprise"
                          ? "İmplementasyon (Anahtar Teslim Canlıya Alma):"
                          : "Tek Seferlik Kurulum & Veri Taşıma:"}
                      </strong>
                      <span className="text-[11px] opacity-90">{plan.setupCost}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-3 mb-8">
                    <span
                      className={`text-xs font-bold uppercase tracking-wider block mb-2 ${
                        isPopular ? "text-slate-300" : "text-slate-700"
                      }`}
                    >
                      Paket Kapsamı:
                    </span>
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <div
                          className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                            isPopular
                              ? "bg-[#1992d1] text-white"
                              : "bg-emerald-100 text-emerald-700"
                          }`}
                        >
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className={isPopular ? "text-slate-200" : "text-[#334155]"}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Action Button */}
                <div className="pt-4 border-t border-dashed border-slate-200/20">
                  <ButtonWithIcon
                    onClick={() => handleSelectPlan(plan)}
                    variant={isPopular ? "brand" : "navy"}
                    size="md"
                    icon={ArrowRight}
                    className="w-full justify-center"
                  >
                    {plan.ctaLabel}
                  </ButtonWithIcon>
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Killer Advantages Section: Logo / Mikro / DIA Comparison */}
        <div className="rounded-3xl bg-[#070d1c] text-white p-8 sm:p-12 lg:p-16 border border-white/10 shadow-2xl relative overflow-hidden mb-16">
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-[#1992d1]/15 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />

          <div className="max-w-3xl mb-12 relative z-10">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-sky-300 uppercase mb-3 inline-flex items-center gap-2">
              <Shield className="w-4 h-4" />
              Neden Logo, Mikro veya DİA Yerine Erpovy?
            </span>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight mb-4">
              Geleneksel ERP&apos;lerin 3 Büyük Külfetini Tarihe Karıştırıyoruz.
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Müşterilerimizin eski masaüstü yazılımlarından Erpovy&apos;ye geçme sebepleri; hantal uzak masaüstü (RDP) çilesinden kurtulmak,
              gizli bakım faturalarına son vermek ve ekibini yönetici paneliyle anında organize edebilmektir.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {COMPETITOR_ADVANTAGES.map((adv) => (
              <div
                key={adv.id}
                className="p-6 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#1992d1]/15 border border-[#1992d1]/30 flex items-center justify-center text-[#1992d1] mb-4">
                    <span className="material-symbols-outlined text-2xl">{adv.icon}</span>
                  </div>

                  <span className="text-xs font-bold text-sky-300 uppercase tracking-wide block mb-1">
                    {adv.highlight}
                  </span>
                  <h4 className="text-lg font-bold text-white mb-2">{adv.title}</h4>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {adv.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-white/10 text-xs text-rose-300/90 flex items-start gap-2 bg-rose-500/10 p-3 rounded-xl">
                  <span className="material-symbols-outlined text-sm shrink-0 mt-0.5 text-rose-400">
                    close
                  </span>
                  <div>
                    <strong className="text-white block mb-0.5">Rakiplerin Sorunu:</strong>
                    <span>{adv.competitorComparison}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Head-to-Head Comparison Table */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md mb-16">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-bold tracking-wider text-[#1992d1] uppercase mb-2 block">
              Birebir Kıyaslama
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#070d1c] tracking-tight">
              Eski Tip Masaüstü ERP vs. Erpovy Yeni Nesil Bulut
            </h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="py-3 px-4 font-bold text-slate-500 w-1/4">Karşılaştırma Kriteri</th>
                  <th className="py-3 px-4 font-bold text-rose-600 bg-rose-50/50 rounded-tl-xl w-3/8">
                    Geleneksel ERP (Logo / Mikro vb.)
                  </th>
                  <th className="py-3 px-4 font-bold text-[#1992d1] bg-sky-50/70 rounded-tr-xl w-3/8">
                    Erpovy Bulut Çözümü
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {HEAD_TO_HEAD_COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-4 px-4 font-bold text-[#070d1c]">{row.feature}</td>
                    <td className="py-4 px-4 text-slate-600 bg-rose-50/30">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-rose-500 text-base shrink-0 mt-0.5">
                          close
                        </span>
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-4 font-semibold text-[#070d1c] bg-sky-50/40">
                      <div className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-emerald-600 text-base shrink-0 mt-0.5">
                          check_circle
                        </span>
                        <span>{row.erpovy}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Detailed Module Matrix (Expandable) */}
        {showFullDetails && (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/90 shadow-md mb-16">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold tracking-wider text-[#1992d1] uppercase mb-1 block">
                  Tüm Ayrıntılar
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-[#070d1c]">
                  Modül ve Özellik Karşılaştırma Matrisi
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setShowMatrix(!showMatrix)}
                className="px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-[#070d1c] font-bold text-xs sm:text-sm inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>{showMatrix ? "Matrisi Daralt" : "Tüm Tabloyu İncele"}</span>
                <span className="material-symbols-outlined text-base">
                  {showMatrix ? "expand_less" : "expand_more"}
                </span>
              </button>
            </div>

            {showMatrix && (
              <div className="overflow-x-auto pt-4 border-t border-slate-100 animate-in fade-in duration-200">
                <table className="w-full text-left text-xs sm:text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-600">
                      <th className="py-3 px-4 font-bold">Özellik / Modül</th>
                      <th className="py-3 px-4 font-bold text-center">Standart</th>
                      <th className="py-3 px-4 font-bold text-center text-[#1992d1] bg-sky-50/50">
                        Professional
                      </th>
                      <th className="py-3 px-4 font-bold text-center">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {DETAILED_MODULE_MATRIX.map((item, idx) => (
                      <tr key={idx} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3.5 px-4 font-medium text-[#070d1c] flex items-center justify-between">
                          <span>{item.name}</span>
                          <span className="text-[10px] text-slate-400 font-normal px-2 py-0.5 rounded bg-slate-100">
                            {item.category}
                          </span>
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {typeof item.standart === "boolean" ? (
                            item.standart ? (
                              <Check className="w-4 h-4 text-emerald-600 mx-auto" />
                            ) : (
                              <span className="text-slate-300">—</span>
                            )
                          ) : (
                            <span className="font-semibold text-slate-700">{item.standart}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center bg-sky-50/30">
                          {typeof item.professional === "boolean" ? (
                            item.professional ? (
                              <Check className="w-4 h-4 text-[#1992d1] mx-auto stroke-[2.5]" />
                            ) : (
                              <span className="text-slate-300">—</span>
                            )
                          ) : (
                            <span className="font-bold text-[#1992d1]">{item.professional}</span>
                          )}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {typeof item.enterprise === "boolean" ? (
                            item.enterprise ? (
                              <Check className="w-4 h-4 text-purple-600 mx-auto" />
                            ) : (
                              <span className="text-slate-300">—</span>
                            )
                          ) : (
                            <span className="font-semibold text-slate-700">{item.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
