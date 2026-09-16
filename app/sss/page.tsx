import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FaqRedesign } from "@/components/FaqRedesign";
import { PricingFaq } from "@/components/PricingFaq";
import { ClosingDemoSection } from "@/components/ClosingDemoSection";

export const metadata: Metadata = {
  title: "Sıkça Sorulan Sorular | Erpovy Bulut ERP Merak Edilenler",
  description:
    "Erpovy kurulumu, veri aktarımı, lisanslama, kullanıcı yetkilendirme ve bulut güvenliği hakkında en çok merak edilen tüm soruların şeffaf yanıtları.",
  alternates: {
    canonical: "https://www.erpovy.com/sss",
  },
};

export default function SssPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-[#070d1c] text-white pt-16 pb-20 border-b border-white/10 relative overflow-hidden text-center">
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-[#1992d1]/15 rounded-full blur-3xl" />
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="material-symbols-outlined text-sm">quiz</span>
              Yardım & Bilgi Merkezi
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
              Aklınızdaki Tüm Sorular, <br />
              <span className="text-[#1992d1]">Şeffaf ve Net Yanıtlar.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Erpovy&apos;nin çalışma prensibi, veri güvenliği, fiyatlandırma politikası ve geçiş süreciyle ilgili en çok merak edilenleri derledik.
            </p>
          </div>
        </section>

        {/* General FAQ Component */}
        <FaqRedesign />

        {/* Pricing & Licensing FAQ */}
        <PricingFaq />

        {/* Demo Section */}
        <ClosingDemoSection />
      </main>
      <Footer />
    </>
  );
}
