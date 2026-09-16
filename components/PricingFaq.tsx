"use client";

import { useState } from "react";
import { PRICING_FAQ } from "@/content/pricingData";

export function PricingFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="fiyat-sss" className="py-16 lg:py-24 bg-[#e2f1f9] text-[#070d1c] border-t border-[#1992d1]/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-2 inline-block">
            Merak Edilenler & Güvenceler
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#070d1c]">
            Fiyatlandırma & Lisanslama Hakkında Sorular
          </h2>
          <p className="text-sm sm:text-base text-[#334155] mt-2">
            Lisans bedellerimiz, LEM bakım politikamız, veri taşıma ve kullanıcı limitleri hakkında en çok sorulanlar.
          </p>
        </div>

        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {PRICING_FAQ.map((faq, index) => {
            const isOpen = openIdx === index;
            return (
              <div key={index} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIdx(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#070d1c] focus:outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-slate-500 transition-transform ${
                      isOpen ? "rotate-180 text-[#1992d1]" : ""
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <p className="mt-3 text-sm sm:text-base text-[#334155] leading-relaxed animate-in fade-in duration-150">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
