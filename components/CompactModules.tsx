"use client";

import { useState, useMemo } from "react";
import {
  MODULES_DATA,
  MODULE_CATEGORIES,
  ModuleCategory,
} from "@/content/modulesData";

export function CompactModules() {
  const [selectedCategory, setSelectedCategory] =
    useState<ModuleCategory>("Finans ve Satış");
  const [showAll, setShowAll] = useState(false);

  const handleSelectModuleForDemo = (moduleId: string, moduleTitle: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("erpovy:select-module", {
          detail: { moduleId, moduleTitle },
        })
      );
      const demoEl = document.getElementById("demo");
      if (demoEl) {
        demoEl.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const filteredModules = useMemo(() => {
    const list = (showAll || selectedCategory === "Tümü")
      ? [...MODULES_DATA]
      : MODULES_DATA.filter((mod) => mod.group === selectedCategory);

    return list.sort((a, b) => {
      // ÇOK YAKINDA olanlar en sona
      if (a.isComingSoon && !b.isComingSoon) return 1;
      if (!a.isComingSoon && b.isComingSoon) return -1;

      // Kendi aralarında Türkçe alfabetik
      return a.title.localeCompare(b.title, "tr-TR");
    });
  }, [selectedCategory, showAll]);

  return (
    <section id="moduller" className="py-20 lg:py-28 bg-[#e2f1f9] text-[#070d1c] border-b border-[#1992d1]/15">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-3 inline-block">
            Modül Mimarisi
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#070d1c] mb-4">
            İhtiyacınız kadarını seçin. Büyük resmi görün.
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            İlgili modülleri keşfedin; kullanım kapsamını işletmenizin önceliklerine göre birlikte değerlendirelim.
          </p>
        </div>

        {/* Category Routes */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-black/[0.08] mb-8">
          {/* Grouped Outcome Paths */}
          <div
            className="flex flex-wrap items-center gap-2"
            role="tablist"
            aria-label="Modül Grupları"
          >
            {MODULE_CATEGORIES.filter((c) => c !== "Tümü").map((cat) => {
              const isSelected = !showAll && selectedCategory === cat;
              const count = MODULES_DATA.filter((m) => m.group === cat).length;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => {
                    setShowAll(false);
                    setSelectedCategory(cat);
                  }}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-xs ${
                    isSelected
                      ? "bg-[#070d1c] text-white shadow-md shadow-black/10 ring-2 ring-[#070d1c]"
                      : "bg-white text-slate-700 hover:bg-slate-50 hover:text-[#070d1c] border border-slate-300/80"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[11px] px-1.5 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-white/20 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}

            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer shadow-xs ${
                showAll
                  ? "bg-[#1992d1] text-white shadow-md shadow-[#1992d1]/20 ring-2 ring-[#1992d1]"
                  : "bg-white text-[#1992d1] hover:bg-sky-50 border border-sky-200"
              }`}
            >
              {showAll ? "Seçili Gruba Dön" : `Tüm ${MODULES_DATA.length} Modülü Gör`}
            </button>
          </div>
        </div>

        {/* Compact Modules List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredModules.map((mod) => (
            <div
              key={mod.id}
              className={`p-5 rounded-xl border shadow-xs flex flex-col justify-between transition-all ${
                mod.isComingSoon
                  ? "bg-slate-900/[0.03] border-dashed border-sky-300/80 hover:border-[#1992d1]"
                  : "bg-white border-slate-200/80 hover:border-slate-400"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <div className={`p-1.5 rounded-lg flex items-center justify-center ${
                      mod.isComingSoon ? "bg-sky-100 text-[#1992d1]" : "bg-sky-50 text-[#1992d1]"
                    }`}>
                      <span className="material-symbols-outlined text-xl">
                        {mod.icon}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#070d1c]">
                      {mod.title}
                    </h3>
                  </div>
                  {mod.isComingSoon ? (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-[#1992d1] border border-sky-200/70 tracking-wider uppercase">
                      YAKINDA
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      {mod.group}
                    </span>
                  )}
                </div>
                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed mb-4">
                  {mod.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 font-mono">
                  {mod.repoModule}
                </span>
                {mod.isComingSoon ? (
                  <span className="text-xs font-bold text-slate-500 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 border border-slate-200">
                    <span className="material-symbols-outlined text-xs text-slate-500">hourglass_top</span>
                    <span>ÇOK YAKINDA</span>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleSelectModuleForDemo(mod.id, mod.title)}
                    className="text-xs font-bold text-[#1992d1] hover:text-[#1582bc] inline-flex items-center gap-1 focus-visible:outline-none focus-visible:underline cursor-pointer"
                  >
                    <span>Demoda İncele</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
