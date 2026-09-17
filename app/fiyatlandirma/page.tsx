import { Metadata } from "next";
import { Header } from "@/components/Header";
import { PricingSection } from "@/components/PricingSection";
import { PricingFaq } from "@/components/PricingFaq";
import { ClosingDemoSection } from "@/components/ClosingDemoSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Erpovy Fiyatlandırma | Şeffaf ve Modüler Bulut ERP Paketleri",
  description:
    "Erpovy şeffaf yıllık lisans paketlerini inceleyin. Gizli LEM bakım bedeli ve sunucu yatırımı olmadan KOBİ ve kurumsal ölçekte işletmenizi hemen büyütün.",
  alternates: {
    canonical: "https://www.erpovy.com/fiyatlandirma",
  },
};

export default function PricingPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Top Hero Trust Strip */}
        <div className="bg-[#070d1c] text-white pt-8 sm:pt-12 pb-10 sm:pb-16 border-b border-white/10 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-24 -right-24 w-96 h-96 bg-[#1992d1]/15 rounded-full blur-3xl" />
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Şeffaf Kurumsal Lisanslama
            </span>
            <h1 className="text-2xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4 sm:mb-6">
              İşletmeniz İçin Doğru Paket, <br />
              <span className="text-[#1992d1]">Öngörülebilir Yıllık Maliyet.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-10">
              Sunucu yatırımı yok. Zorunlu LEM faturası yok. RDP veya VPN çilesi yok.
              İhtiyacınıza uygun paketi seçin, işletmenizi aynı gün modern buluta taşıyın.
            </p>

            {/* 4 Guarantees Pills */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto text-left">
              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-[#1992d1] text-2xl shrink-0">
                  check_circle
                </span>
                <div>
                  <strong className="text-xs sm:text-sm text-white block font-bold">Gizli Maliyet Yok</strong>
                  <span className="text-[11px] text-slate-400">Yıllık tek net fatura</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-emerald-400 text-2xl shrink-0">
                  cloud_done
                </span>
                <div>
                  <strong className="text-xs sm:text-sm text-white block font-bold">
                    Sıfır Sunucu Yatırımı
                  </strong>
                  <span className="text-[11px] text-slate-400">%100 bulut tabanlı</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-sky-400 text-2xl shrink-0">
                  devices
                </span>
                <div>
                  <strong className="text-xs sm:text-sm text-white block font-bold">Platform Bağımsız</strong>
                  <span className="text-[11px] text-slate-400">Mac, PC, Mobil, Tablet</span>
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
                <span className="material-symbols-outlined text-purple-400 text-2xl shrink-0">
                  groups
                </span>
                <div>
                  <strong className="text-xs sm:text-sm text-white block font-bold">Rol Bazlı Yetki</strong>
                  <span className="text-[11px] text-slate-400">Granüler kullanıcı izinleri</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pricing Cards & Detailed Matrix */}
        <PricingSection showFullDetails={true} />

        {/* Pricing FAQs */}
        <PricingFaq />

        {/* Direct Demo / Contact Form */}
        <ClosingDemoSection />
      </main>
      <Footer />
    </>
  );
}
