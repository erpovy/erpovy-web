"use client";

import { useState } from "react";

export function FaqRedesign() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const faqs = [
    {
      id: "faq-1",
      q: "Erpovy kimler için tasarlandı?",
      a: "Satış, finans, stok, üretim ve ekip süreçlerini ortak bir yapı içinde takip etmek isteyen KOBİ'ler ve büyüyen işletmeler için tasarlanmıştır.",
    },
    {
      id: "faq-2",
      q: "Bütün modülleri kullanmak zorunda mıyım?",
      a: "Hayır. Erpovy modüler bir yapıya sahiptir. İhtiyacınız olan modülleri belirleyip yalnızca ilgili kapsam üzerinden çalışabilirsiniz.",
    },
    {
      id: "faq-3",
      q: "Fiyatlandırma nasıl belirleniyor?",
      a: "İşletmenizin modül, kullanıcı ve operasyonel ihtiyaçları değerlendirildikten sonra net ve şeffaf bir ticari kapsam sunulur.",
    },
    {
      id: "faq-4",
      q: "Mevcut verilerimizi aktarabilir miyiz?",
      a: "Veri aktarımının kapsamı mevcut sisteminizin ve dosyalarınızın (Excel, XML vb.) yapısına bağlıdır; demo görüşmesinde aktarım planını konuşabiliriz.",
    },
    {
      id: "faq-5",
      q: "Hangi sistemlerle entegre olabilir?",
      a: "Pazaryerleri, e-ticaret altyapıları ve banka entegrasyonu gibi bağlantı seçenekleri ihtiyaçlarınıza göre değerlendirilir.",
    },
    {
      id: "faq-6",
      q: "Demoda neler göreceğim?",
      a: "İşletmenizin öncelikli süreçlerine uygun modülleri, canlı ekranları ve örnek bir iş akışını 20 dakikalık odaklı bir oturumda incelersiniz.",
    },
  ];

  return (
    <section id="sss" className="py-10 sm:py-14 md:py-20 lg:py-24 bg-[#e2f1f9] text-[#070d1c]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6 sm:mb-8 md:mb-10">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-2 inline-block">
            Merak Edilenler
          </span>
          <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-[#070d1c]">
            Sıkça Sorulan Sorular
          </h2>
        </div>

        <div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-3.5 sm:py-5">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#070d1c] focus:outline-none"
                >
                  <span>{faq.q}</span>
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
                    {faq.a}
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
