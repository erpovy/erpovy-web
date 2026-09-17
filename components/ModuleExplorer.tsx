"use client";

import { useState, useMemo } from "react";
import {
  MODULES_DATA,
  MODULE_CATEGORIES,
  ModuleCategory,
} from "@/content/modulesData";

export function ModuleExplorer() {
  const [selectedCategory, setSelectedCategory] =
    useState<ModuleCategory>("Tümü");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectModuleForDemo = (moduleId: string) => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("erpovy:select-module", {
          detail: { moduleId },
        })
      );
      const demoElement = document.getElementById("demo");
      if (demoElement) {
        demoElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const filteredModules = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase("tr-TR");

    return MODULES_DATA.filter((mod) => {
      const matchesCategory =
        selectedCategory === "Tümü" || mod.group === selectedCategory;

      if (!matchesCategory) return false;

      if (!query) return true;

      const titleMatch = mod.title.toLocaleLowerCase("tr-TR").includes(query);
      const descMatch = mod.description
        .toLocaleLowerCase("tr-TR")
        .includes(query);
      const groupMatch = mod.group.toLocaleLowerCase("tr-TR").includes(query);

      return titleMatch || descMatch || groupMatch;
    });
  }, [selectedCategory, searchQuery]);

  const clearFilters = () => {
    setSelectedCategory("Tümü");
    setSearchQuery("");
  };

  return (
    <section
      id="moduller"
      className="py-10 sm:py-14 md:py-20 lg:py-24 bg-[#0a1226]/60 light:bg-slate-100/70 border-y border-white/5 light:border-slate-200 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1992d1]/10 text-[#1992d1] text-xs font-semibold uppercase tracking-wider mb-3">
            <span className="material-symbols-outlined text-sm">widgets</span>
            <span>Geniş Modül Yelpazesi</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white light:text-slate-900 tracking-tight mb-3">
            İşinize uygun modüller, aynı Erpovy deneyimi.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-slate-300 light:text-slate-600">
            Finanstan depoya, satıştan üretime kadar işletmenizin ihtiyaç duyduğu alanları keşfedin.
          </p>
        </div>

        {/* Filter and Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 mb-6 sm:mb-8">
          {/* Category Tabs */}
          <div
            className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-none"
            role="tablist"
            aria-label="Modül Kategorileri"
          >
            {MODULE_CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-[#1992d1] text-white shadow-md shadow-[#1992d1]/20"
                      : "bg-[#0f172a] light:bg-white text-slate-400 light:text-slate-600 hover:text-white light:hover:text-[#1992d1] hover:bg-slate-800/80 light:hover:bg-slate-50 border border-white/5 light:border-slate-200 shadow-sm"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <span className="material-symbols-outlined absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
              search
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Modüllerde ara..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0f172a] light:bg-white border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] shadow-sm transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white light:hover:text-slate-700"
                aria-label="Aramayı temizle"
              >
                <span className="material-symbols-outlined text-sm">close</span>
              </button>
            )}
          </div>
        </div>

        {/* Module Cards Grid */}
        {filteredModules.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filteredModules.map((mod) => (
              <div
                key={mod.id}
                className="p-5 rounded-2xl bg-[#0f172a]/90 light:bg-white border border-white/10 light:border-slate-200 hover:border-[#1992d1]/40 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-black/20 light:hover:shadow-md group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-[#1992d1]/10 light:bg-sky-50 border border-[#1992d1]/20 light:border-sky-200 flex items-center justify-center text-[#1992d1] group-hover:bg-[#1992d1] group-hover:text-white transition-colors">
                      <span className="material-symbols-outlined text-xl">
                        {mod.icon}
                      </span>
                    </div>
                    <span className="text-[11px] font-medium text-slate-400 light:text-slate-500 px-2 py-0.5 rounded bg-white/5 light:bg-slate-100 border border-white/5 light:border-slate-200">
                      {mod.group}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white light:text-slate-900 mb-2 group-hover:text-[#1992d1] transition-colors">
                    {mod.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed mb-6">
                    {mod.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/5 light:border-slate-100">
                  <button
                    type="button"
                    onClick={() => handleSelectModuleForDemo(mod.id)}
                    className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-lg text-xs font-semibold text-slate-300 light:text-slate-700 hover:text-white light:hover:text-white bg-white/5 light:bg-slate-100 hover:bg-[#1992d1] light:hover:bg-[#1992d1] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1]"
                  >
                    <span>Demoda İncele</span>
                    <span className="material-symbols-outlined text-sm">
                      arrow_outward
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 rounded-2xl bg-[#0f172a]/60 light:bg-white border border-white/10 light:border-slate-200 shadow-sm">
            <span className="material-symbols-outlined text-4xl text-slate-500 mb-3 block">
              search_off
            </span>
            <p className="text-base text-slate-300 light:text-slate-800 font-medium mb-1">
              Aramanıza uygun modül bulunamadı.
            </p>
            <p className="text-xs text-slate-400 light:text-slate-500 mb-6">
              Farklı bir arama terimi deneyebilir veya filtreleri sıfırlayabilirsiniz.
            </p>
            <button
              type="button"
              onClick={clearFilters}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 light:bg-slate-100 hover:bg-slate-700 light:hover:bg-slate-200 text-white light:text-slate-800 text-xs font-semibold border border-white/10 light:border-slate-300 transition-colors"
            >
              <span className="material-symbols-outlined text-sm">restart_alt</span>
              <span>Filtreleri Temizle</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
