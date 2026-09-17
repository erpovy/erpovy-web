import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ModuleExplorer } from "@/components/ModuleExplorer";
import { ClosingDemoSection } from "@/components/ClosingDemoSection";

export const metadata: Metadata = {
  title: "Erpovy Modülleri | Muhasebe, Finans, CRM, Stok ve WMS Depo",
  description:
    "Muhasebe, finans, satış, satın alma, WMS depo, üretim ve CRM modüllerini keşfedin. İhtiyacınıza uygun modülleri seçerek işletmenizi tek merkezden yönetin.",
  alternates: {
    canonical: "https://www.erpovy.com/moduller",
  },
};

export default function ModullerPage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* Page Hero */}
        <section className="bg-[#070d1c] text-white pt-8 sm:pt-14 pb-10 sm:pb-16 border-b border-white/10 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-[#1992d1]/15 rounded-full blur-3xl" />
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="material-symbols-outlined text-sm">widgets</span>
              Kapsamlı Modül Kataloğu
            </span>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-3 sm:mb-5">
              İşletmenizin İhtiyacı Olan Her Şey, <br />
              <span className="text-[#1992d1]">Tek Bir Entegre Platformda.</span>
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8">
              Parçalanmış tablolar ve farklı programlar yerine finans, satış, depo ve ekip süreçlerinizi Erpovy&apos;nin birbirine tam bağlı modülleriyle yönetin.
            </p>
          </div>
        </section>

        {/* Module Explorer Component */}
        <ModuleExplorer />

        {/* Closing Demo Request */}
        <ClosingDemoSection />
      </main>
      <Footer />
    </>
  );
}
