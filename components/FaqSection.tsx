"use client";

import { useState } from "react";
import { FAQ_DATA } from "@/content/faqData";

export function FaqSection() {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    "faq-1": true,
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="sss"
      className="py-20 lg:py-28 bg-[#0a1226]/50 light:bg-slate-100/60 border-t border-white/5 light:border-slate-200 transition-colors relative"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1992d1]/10 text-[#1992d1] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">help</span>
            <span>Merak Edilenler</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white light:text-slate-900 tracking-tight mb-4">
            Sıkça Sorulan Sorular
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            Erpovy modüler yapısı, veri aktarımı ve demo süreçleri hakkında sık sorulan soruların yanıtları.
          </p>
        </div>

        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                className="rounded-2xl bg-[#0f172a]/80 light:bg-white border border-white/10 light:border-slate-200 shadow-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  id={`faq-btn-${faq.id}`}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#1992d1]"
                >
                  <span className="text-base sm:text-lg font-semibold text-white light:text-slate-900">
                    {faq.question}
                  </span>
                  <span
                    className={`material-symbols-outlined text-slate-400 light:text-slate-500 transition-transform duration-200 shrink-0 ${
                      isOpen ? "rotate-180 text-[#1992d1] light:text-[#1992d1]" : ""
                    }`}
                  >
                    keyboard_arrow_down
                  </span>
                </button>

                {isOpen && (
                  <div
                    id={`faq-panel-${faq.id}`}
                    role="region"
                    aria-labelledby={`faq-btn-${faq.id}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 light:text-slate-600 leading-relaxed border-t border-white/5 light:border-slate-100 animate-in fade-in duration-200"
                  >
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
