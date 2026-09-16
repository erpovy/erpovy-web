import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClosingDemoSection } from "@/components/ClosingDemoSection";

export const metadata: Metadata = {
  title: "Canlı Demo Talebi | Erpovy Yeni Nesil Bulut ERP Simülasyonu",
  description:
    "Erpovy'yi 20 dakikalık canlı oturumda inceleyin. Ezber slaytlar yerine kendi sektörünüze özel iş akışı simülasyonunu hemen ücretsiz keşfedin.",
  alternates: {
    canonical: "https://www.erpovy.com/demo",
  },
};

export default function DemoPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Dedicated Demo Page Wrapper */}
        <div className="bg-[#070d1c] text-white pt-12 pb-8 border-b border-white/10 text-center">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Ücretsiz & Taahhütsüz Değerlendirme
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-3xl mx-auto mb-4">
              Bir Sunum İzlemeyin. <br />
              <span className="text-[#1992d1]">Kendi İşinizin Akışını Görün.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              İşletmenizin önceliklerini paylaşın; ezber slaytlar yerine işinize en uygun modüller ve gerçekçi verilerle odaklı bir yol haritası çizelim.
            </p>
          </div>
        </div>

        {/* Demo Section with Form and Steps */}
        <ClosingDemoSection />
      </main>
      <Footer />
    </>
  );
}
