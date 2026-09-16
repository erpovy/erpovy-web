import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SectorRows } from "@/components/SectorRows";
import { ClosingDemoSection } from "@/components/ClosingDemoSection";
import { Briefcase } from "lucide-react";

export const metadata: Metadata = {
  title: "Erpovy Sektörel Çözümler | İmalat, Ticaret, Lojistik ERP",
  description:
    "İmalat, perakende, lojistik, otomotiv, gıda ve tarım sektörlerine özel bulut ERP çözümleri. İşletmenizin dinamiklerine uygun sektörel modülleri keşfedin.",
  alternates: {
    canonical: "https://www.erpovy.com/cozumler",
  },
};

export default function CozumlerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-[#070d1c] text-white pt-16 pb-20 border-b border-white/10 relative overflow-hidden text-center">
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-[#1992d1]/15 rounded-full blur-3xl" />
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <Briefcase className="w-3.5 h-3.5" />
              Sektöre Özel İş Süreçleri
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
              Her Sektörün Dinamiği Farklı, <br />
              <span className="text-[#1992d1]">Çözüm Tek Merkezde: Erpovy.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Üretimden dağıtıma, perakendeden servis sektörüne kadar her sektörün kendine özgü operasyonel ihtiyaçlarına uyum sağlayan modüler ERP kurguları.
            </p>
          </div>
        </section>

        {/* Sectors Interactive Grid */}
        <SectorRows />

        {/* Closing Demo Request CTA */}
        <ClosingDemoSection />
      </main>
      <Footer />
    </>
  );
}
