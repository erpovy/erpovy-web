"use client";

import { useState, useEffect } from "react";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { Send } from "lucide-react";

export function ClosingDemoSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [primaryNeed, setPrimaryNeed] = useState("Finans");
  const [showExtraFields, setShowExtraFields] = useState(false);
  const [phone, setPhone] = useState("");
  const [note, setNote] = useState("");
  const [selectedContext, setSelectedContext] = useState<string | null>(null);

  const [formTouched, setFormTouched] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    const handleSelectNeed = (e: Event) => {
      const customEvent = e as CustomEvent<{ need: string }>;
      if (customEvent.detail?.need) {
        setPrimaryNeed(customEvent.detail.need);
        setSelectedContext(`Seçilen odak: ${customEvent.detail.need}`);
      }
    };

    const handleSelectSector = (e: Event) => {
      const customEvent = e as CustomEvent<{ sector: string }>;
      if (customEvent.detail?.sector) {
        setPrimaryNeed("Sektörel Çözüm");
        setSelectedContext(`Sektör: ${customEvent.detail.sector}`);
      }
    };

    const handleSelectModule = (e: Event) => {
      const customEvent = e as CustomEvent<{ moduleId: string; moduleTitle?: string }>;
      if (customEvent.detail?.moduleTitle) {
        setSelectedContext(`Modül: ${customEvent.detail.moduleTitle}`);
      }
    };

    window.addEventListener("erpovy:select-need", handleSelectNeed);
    window.addEventListener("erpovy:select-sector", handleSelectSector);
    window.addEventListener("erpovy:select-module", handleSelectModule);

    return () => {
      window.removeEventListener("erpovy:select-need", handleSelectNeed);
      window.removeEventListener("erpovy:select-sector", handleSelectSector);
      window.removeEventListener("erpovy:select-module", handleSelectModule);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormTouched(true);
    setSubmitSuccess(null);
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("/mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          companyName,
          primaryNeed,
          phone,
          note,
          honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess(data.message || "Talebiniz başarıyla alındı. En kısa sürede sizinle iletişime geçeceğiz.");
        // Form alanlarını sıfırla
        setFullName("");
        setEmail("");
        setCompanyName("");
        setPhone("");
        setNote("");
      } else {
        setSubmitError(data.error || "Talebiniz iletilirken bir sorun oluştu. Lütfen tekrar deneyin.");
      }
    } catch {
      setSubmitError("Sunucu bağlantısı kurulamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const needsList = [
    "Finans",
    "Satış",
    "Stok ve Depo",
    "Üretim",
    "Ekip Yönetimi",
    "Sektörel Çözüm",
    "Diğer",
  ];

  return (
    <section id="demo" className="py-10 sm:py-14 md:py-20 lg:py-24 bg-gradient-to-br from-[#127fb9] via-[#1992d1] to-[#0c6b9e] text-white relative overflow-hidden">
      {/* Decorative ambient lighting */}
      <div className="pointer-events-none absolute -top-40 -right-40 w-96 h-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#070d1c]/20 blur-3xl" />

      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start">
          {/* Left Column: Heading, value props & visual flow */}
          <div className="lg:col-span-6 flex flex-col items-start pt-2">
            <span className="text-xs sm:text-sm font-bold tracking-wider text-sky-200 uppercase mb-3 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/15 inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-sky-300 animate-pulse" />
              Somut Bir Sonraki Adım
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
              Bir sunum izlemeyin.<br />
              <span className="text-sky-200">Kendi işinizi görün.</span>
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal mb-6 max-w-lg">
              İşletmenizin önceliklerini paylaşın. Ezber slaytlar yerine, işinize en uygun modüller ve gerçekçi iş akışlarıyla 20 dakikada odaklı bir yol haritası çizelim.
            </p>

            {/* 3 Step Visual Flow */}
            <div className="w-full space-y-2.5 sm:space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs sm:text-sm text-sky-200 shrink-0">
                  1
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">İhtiyaç ve Öncelik Belirleme</h4>
                  <p className="text-[11px] sm:text-xs text-white/80 mt-0.5">Finans, stok, üretim ya da satış süreçlerinizdeki ana darboğazları konuşuruz.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs sm:text-sm text-sky-200 shrink-0">
                  2
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Canlı İş Akışı Simülasyonu</h4>
                  <p className="text-[11px] sm:text-xs text-white/80 mt-0.5">Sektörünüze özel örnek verilerle tekliften tahsilata akışı uçtan uca inceleriz.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/15 text-white">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-white/20 flex items-center justify-center font-bold text-xs sm:text-sm text-sky-200 shrink-0">
                  3
                </div>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white">Net Geçiş ve Modül Planı</h4>
                  <p className="text-[11px] sm:text-xs text-white/80 mt-0.5">Yalnızca kullanacağınız modülleri içeren sade bir uygulama takvimi sunarız.</p>
                </div>
              </div>
            </div>

            {/* Trust highlights */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-white/85 pt-3 border-t border-white/15 w-full">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm sm:text-base text-sky-200">timer</span>
                <span>20 Dk Odaklı Görüşme</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm sm:text-base text-sky-200">verified_user</span>
                <span>Satış Baskısı Yok</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-sm sm:text-base text-sky-200">support_agent</span>
                <span>Ürün Uzmanı ile</span>
              </div>
            </div>
          </div>

          {/* Right Column: Refined Demo Form */}
          <div className="lg:col-span-6 w-full">
            <div className="rounded-2xl bg-[#070d1c] text-white p-5 sm:p-8 lg:p-9 shadow-2xl border border-white/10">
              {/* Context prefill badge if selected */}
              {selectedContext && (
                <div className="mb-4 px-3 py-1.5 rounded-md bg-[#1992d1]/20 border border-[#1992d1]/40 text-xs text-sky-200 flex items-center justify-between">
                  <span>{selectedContext}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedContext(null)}
                    className="text-xs hover:text-white"
                  >
                    ×
                  </button>
                </div>
              )}

              {/* Hidden Honeypot field for bot protection */}
              <input
                type="text"
                name="b_phone_fax"
                tabIndex={-1}
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                autoComplete="off"
                aria-hidden="true"
              />

              {/* Status Notifications */}
              {submitSuccess && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 flex items-start gap-3 animate-in fade-in">
                  <span className="material-symbols-outlined text-xl text-emerald-400 shrink-0 mt-0.5">
                    check_circle
                  </span>
                  <div>
                    <strong className="font-bold text-emerald-300 block mb-0.5">Harika! Talebiniz Alındı</strong>
                    {submitSuccess}
                  </div>
                </div>
              )}

              {submitError && (
                <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-xs sm:text-sm text-rose-200 flex items-start gap-3 animate-in fade-in">
                  <span className="material-symbols-outlined text-xl text-rose-400 shrink-0 mt-0.5">
                    error
                  </span>
                  <div>
                    <strong className="font-bold text-rose-300 block mb-0.5">İletim Başarısız Oldu</strong>
                    {submitError}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Ad Soyad <span className="text-[#1992d1]">*</span>
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    required
                    autoComplete="name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Adınız ve Soyadınız"
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] disabled:opacity-50"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      İş E-postası <span className="text-[#1992d1]">*</span>
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      autoComplete="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="ad@sirketiniz.com"
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] disabled:opacity-50"
                    />
                  </div>

                  <div>
                    <label htmlFor="companyName" className="block text-xs font-semibold text-slate-300 mb-1.5">
                      Firma Adı <span className="text-[#1992d1]">*</span>
                    </label>
                    <input
                      id="companyName"
                      type="text"
                      required
                      autoComplete="organization"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Şirketinizin Adı"
                      disabled={isSubmitting}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] disabled:opacity-50"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="primaryNeed" className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Öncelikli İhtiyacınız
                  </label>
                  <select
                    id="primaryNeed"
                    value={primaryNeed}
                    onChange={(e) => setPrimaryNeed(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1c] border border-white/15 text-sm text-white focus:outline-none focus:border-[#1992d1] disabled:opacity-50"
                  >
                    {needsList.map((n) => (
                      <option key={n} value={n}>
                        {n}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Optional Extra Fields Toggle */}
                <div>
                  <button
                    type="button"
                    onClick={() => setShowExtraFields(!showExtraFields)}
                    className="text-xs text-slate-400 hover:text-white inline-flex items-center gap-1 focus:outline-none py-1 cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-sm">
                      {showExtraFields ? "expand_less" : "expand_more"}
                    </span>
                    <span>{showExtraFields ? "Ek bilgileri gizle" : "Ek bilgi paylaş (Telefon, not)"}</span>
                  </button>
                </div>

                {showExtraFields && (
                  <div className="space-y-4 pt-2 border-t border-white/5 animate-in fade-in duration-150">
                    <div>
                      <label htmlFor="phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Telefon
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="0 (5XX) XXX XX XX"
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1] disabled:opacity-50"
                      />
                    </div>

                    <div>
                      <label htmlFor="note" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Kısaca İhtiyacınız
                      </label>
                      <textarea
                        id="note"
                        rows={2}
                        maxLength={1000}
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                        placeholder="Mevcut kullandığınız sistem veya çözmek istediğiniz süreç..."
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1] resize-none disabled:opacity-50"
                      />
                    </div>
                  </div>
                )}

                <div className="pt-2">
                  <ButtonWithIcon
                    type="submit"
                    variant="brand"
                    size="md"
                    icon={Send}
                    disabled={isSubmitting}
                    className="w-full justify-center"
                  >
                    {isSubmitting ? "İletiliyor..." : "Demo Talebini Gönder"}
                  </ButtonWithIcon>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
