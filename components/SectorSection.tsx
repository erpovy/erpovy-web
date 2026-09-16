"use client";

import { SECTORS_DATA } from "@/content/sectorsData";

export function SectorSection() {
  const handleSelectSector = (sectorTitle: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("erpovy:select-sector", {
          detail: { sector: sectorTitle },
        })
      );
      const demoElement = document.getElementById("demo");
      if (demoElement) {
        demoElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section
      id="sektorler"
      className="py-20 lg:py-28 bg-[#0a1226]/40 light:bg-slate-100/60 border-t border-white/5 light:border-slate-200 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1992d1]/10 text-[#1992d1] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">domain</span>
            <span>Sektörel Uyumluluk</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white light:text-slate-900 tracking-tight mb-4">
            Sektörünüzün işleyişine yakın çözümler.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            Farklı sektörlerin operasyonel dinamiklerine uygun modül bileşenlerini keşfedin.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SECTORS_DATA.map((sector) => (
            <div
              key={sector.id}
              className="p-6 rounded-2xl bg-[#0f172a]/90 light:bg-white border border-white/10 light:border-slate-200 hover:border-[#1992d1]/40 flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20 light:hover:shadow-md group"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1992d1]/10 light:bg-sky-50 border border-[#1992d1]/20 light:border-sky-200 flex items-center justify-center text-[#1992d1] mb-5 group-hover:bg-[#1992d1] group-hover:text-white transition-colors">
                  <span className="material-symbols-outlined text-2xl">
                    {sector.icon}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white light:text-slate-900 mb-2 group-hover:text-[#1992d1] transition-colors">
                  {sector.title}
                </h3>

                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                  {sector.description}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 light:border-slate-100">
                <button
                  type="button"
                  onClick={() => handleSelectSector(sector.title)}
                  className="w-full inline-flex items-center justify-between text-xs font-semibold text-slate-300 light:text-slate-700 group-hover:text-white light:group-hover:text-[#1992d1] group-hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1] py-1"
                >
                  <span>Sektörüm İçin Görüşün</span>
                  <span className="material-symbols-outlined text-sm text-[#1992d1]">
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
