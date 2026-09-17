"use client";

import { SECTORS_DATA } from "@/content/sectorsData";
import {
  Factory,
  Store,
  Truck,
  Wrench,
  Utensils,
  Tractor,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

const sectorIconMap: Record<string, LucideIcon> = {
  uretim: Factory,
  ticaret: Store,
  lojistik: Truck,
  otomotiv: Wrench,
  restoran: Utensils,
  tarim: Tractor,
};

export function SectorRows() {
  const handleSelectSector = (sectorTitle: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("erpovy:select-sector", {
          detail: { sector: sectorTitle },
        })
      );
      const demoEl = document.getElementById("demo");
      if (demoEl) {
        demoEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="sektorler" className="py-10 sm:py-14 md:py-20 lg:py-24 bg-[#e2f1f9] text-[#070d1c] border-b border-[#1992d1]/15">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-6 sm:mb-8 md:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-2 sm:mb-3 inline-block">
            Sektörel Yaklaşım
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#070d1c] mb-3 sm:mb-4">
            Sizin sektörünüz. Sizin öncelikleriniz.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#334155] leading-relaxed">
            Önce çözmek istediğiniz işi konuşalım. Sonra ilgili modülleri birlikte inceleyelim.
          </p>
        </div>

        {/* 6 Sector Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-5 lg:gap-6">
          {SECTORS_DATA.map((sector) => {
            const IconComponent = sectorIconMap[sector.id] || Factory;
            return (
              <div
                key={sector.id}
                onClick={() => {
                  if (!sector.isComingSoon) {
                    handleSelectSector(sector.title);
                  }
                }}
                className={`relative p-5 sm:p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md hover:border-[#1992d1]/40 transition-all flex flex-col justify-between group ${
                  sector.isComingSoon ? "cursor-default opacity-85" : "cursor-pointer"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-11 h-11 rounded-xl bg-[#1992d1]/10 border border-[#1992d1]/20 flex items-center justify-center text-[#1992d1] group-hover:scale-105 group-hover:bg-[#1992d1]/15 transition-all">
                      <IconComponent className="w-5 h-5" strokeWidth={2} />
                    </div>

                    {sector.isComingSoon ? (
                      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sky-100/90 border border-sky-200 text-[11px] font-bold text-[#1992d1] shadow-xs">
                        <span className="material-symbols-outlined text-xs">hourglass_top</span>
                        <span>ÇOK YAKINDA</span>
                      </span>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 group-hover:text-[#1992d1] group-hover:bg-[#1992d1]/10 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                        <ArrowUpRight size={16} />
                      </div>
                    )}
                  </div>

                  <h3 className="text-base sm:text-lg font-bold text-[#070d1c] group-hover:text-[#1992d1] transition-colors mb-2">
                    {sector.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-normal">
                    {sector.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
