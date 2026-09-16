"use client";

import { useState, useEffect } from "react";
import { MODULES_DATA } from "@/content/modulesData";
import { SECTORS_DATA } from "@/content/sectorsData";

export function DemoForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedModules, setSelectedModules] = useState<string[]>([]);
  const [requirements, setRequirements] = useState("");

  const [formTouched, setFormTouched] = useState(false);
  const [showPreviewNotice, setShowPreviewNotice] = useState(false);

  useEffect(() => {
    const handleSelectModule = (e: Event) => {
      const customEvent = e as CustomEvent<{ moduleId: string }>;
      if (customEvent.detail?.moduleId) {
        setSelectedModules((prev) => {
          if (!prev.includes(customEvent.detail.moduleId)) {
            return [...prev, customEvent.detail.moduleId];
          }
          return prev;
        });
      }
    };

    const handleSelectSector = (e: Event) => {
      const customEvent = e as CustomEvent<{ sector: string }>;
      if (customEvent.detail?.sector) {
        setSelectedSector(customEvent.detail.sector);
      }
    };

    window.addEventListener("erpovy:select-module", handleSelectModule);
    window.addEventListener("erpovy:select-sector", handleSelectSector);

    return () => {
      window.removeEventListener("erpovy:select-module", handleSelectModule);
      window.removeEventListener("erpovy:select-sector", handleSelectSector);
    };
  }, []);

  const toggleModuleSelection = (id: string) => {
    setSelectedModules((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormTouched(true);
    setShowPreviewNotice(true);
  };

  return (
    <section id="demo" className="py-20 lg:py-28 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1992d1]/10 text-[#1992d1] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">schedule_send</span>
            <span>Kişiselleştirilmiş Tanıtım</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white light:text-slate-900 tracking-tight mb-4">
            Erpovy’yi kendi iş akışınız üzerinden keşfedin.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 max-w-2xl mx-auto">
            İşletmenizi ve önceliklerinizi paylaşın; size uygun modülleri birlikte değerlendirelim.
          </p>
        </div>

        {/* Form Container */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0f172a]/90 light:bg-white border border-white/15 light:border-slate-200 shadow-2xl light:shadow-xl backdrop-blur-xl relative transition-colors">
          {/* Section 4.10 Required Preview Limitation Banner */}
          <div className="mb-8 p-4 rounded-xl bg-amber-500/10 light:bg-amber-50 border border-amber-500/30 light:border-amber-200 flex items-start gap-3 text-amber-200 light:text-amber-900">
            <span className="material-symbols-outlined text-amber-400 light:text-amber-600 text-xl shrink-0 mt-0.5">
              info
            </span>
            <div className="text-xs sm:text-sm">
              <strong className="font-semibold block text-amber-300 light:text-amber-800">
                Önizleme Modu: Bu form henüz talep göndermiyor.
              </strong>
              Canlı talep uç noktası ve onaylı aydınlatma metni yapılandırılana kadar form güvenli önizleme modundadır. Form elemanları ve seçimler test edilebilir durumdadır.
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name & Work Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-2"
                >
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
                  className="w-full px-4 py-3 rounded-xl bg-[#070d1c] light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-2"
                >
                  İş E-postası <span className="text-[#1992d1]">*</span>
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="ornek@sirketiniz.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#070d1c] light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] transition-colors"
                />
              </div>
            </div>

            {/* Company Name & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-2"
                >
                  Firma Adı <span className="text-[#1992d1]">*</span>
                </label>
                <input
                  id="companyName"
                  type="text"
                  required
                  autoComplete="organization"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  placeholder="Şirketinizin Ticari Unvanı"
                  className="w-full px-4 py-3 rounded-xl bg-[#070d1c] light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-2"
                >
                  Telefon <span className="text-slate-500 font-normal">(İsteğe bağlı)</span>
                </label>
                <input
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="0 (5XX) XXX XX XX"
                  className="w-full px-4 py-3 rounded-xl bg-[#070d1c] light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] transition-colors"
                />
              </div>
            </div>

            {/* Sector */}
            <div>
              <label
                htmlFor="sector"
                className="block text-xs font-semibold text-slate-300 light:text-slate-700 mb-2"
              >
                Sektör <span className="text-slate-500 font-normal">(İsteğe bağlı)</span>
              </label>
              <select
                id="sector"
                value={selectedSector}
                onChange={(e) => setSelectedSector(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-[#070d1c] light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] transition-colors"
              >
                <option value="">Sektör Seçiniz...</option>
                {SECTORS_DATA.map((s) => (
                  <option key={s.id} value={s.title}>
                    {s.title}
                  </option>
                ))}
                <option value="Diğer">Diğer</option>
              </select>
            </div>

            {/* Modules multi-select */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="block text-xs font-semibold text-slate-300 light:text-slate-700">
                  İlgilendiğiniz Modüller <span className="text-slate-500 font-normal">(Birden fazla seçebilirsiniz)</span>
                </label>
                {selectedModules.length > 0 && (
                  <button
                    type="button"
                    onClick={() => setSelectedModules([])}
                    className="text-[11px] text-[#1992d1] hover:underline"
                  >
                    Seçimleri Temizle ({selectedModules.length})
                  </button>
                )}
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-48 overflow-y-auto p-3 rounded-xl bg-[#070d1c] light:bg-slate-50 border border-white/10 light:border-slate-300">
                {MODULES_DATA.map((mod) => {
                  const isChecked = selectedModules.includes(mod.id);
                  return (
                    <button
                      key={mod.id}
                      type="button"
                      onClick={() => toggleModuleSelection(mod.id)}
                      className={`text-left p-2 rounded-lg text-xs flex items-center gap-2 border transition-all ${
                        isChecked
                          ? "bg-[#1992d1]/20 border-[#1992d1] text-white light:text-[#1992d1] light:bg-sky-50 font-medium"
                          : "bg-white/[0.02] light:bg-white border-white/5 light:border-slate-200 text-slate-400 light:text-slate-600 hover:text-slate-200 light:hover:text-slate-900 hover:bg-white/5 light:hover:bg-slate-100"
                      }`}
                    >
                      <span className="material-symbols-outlined text-sm">
                        {isChecked ? "check_box" : "check_box_outline_blank"}
                      </span>
                      <span className="truncate">{mod.title}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Requirements Textarea */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label
                  htmlFor="requirements"
                  className="block text-xs font-semibold text-slate-300 light:text-slate-700"
                >
                  Kısaca İhtiyacınız <span className="text-slate-500 font-normal">(İsteğe bağlı)</span>
                </label>
                <span className="text-[11px] text-slate-500">
                  {requirements.length}/1500
                </span>
              </div>
              <textarea
                id="requirements"
                rows={3}
                maxLength={1500}
                value={requirements}
                onChange={(e) => setRequirements(e.target.value)}
                placeholder="İşletmenizin öncelikli süreçlerini veya entegrasyon beklentilerinizi belirtebilirsiniz..."
                className="w-full px-4 py-3 rounded-xl bg-[#070d1c] light:bg-slate-50 border border-white/10 light:border-slate-300 text-sm text-white light:text-slate-900 placeholder-slate-500 light:placeholder-slate-400 focus:outline-none focus:border-[#1992d1] focus:ring-1 focus:ring-[#1992d1] transition-colors resize-y"
              />
            </div>

            {/* Privacy notice disclaimer */}
            <p className="text-xs text-slate-400 light:text-slate-500 leading-relaxed">
              Paylaştığınız bilgiler demo görüşmesinin organize edilmesi ve size uygun modül kapsamının değerlendirilmesi amacıyla kullanılacaktır.
            </p>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full py-4 px-6 rounded-xl bg-[#1992d1] hover:bg-[#1582bc] text-white font-bold text-base shadow-lg shadow-[#1992d1]/25 hover:shadow-[#1992d1]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d1c] focus-visible:ring-[#1992d1]"
              >
                Demo Talebini Gönder
              </button>
            </div>

            {/* Triggered Preview Feedback */}
            {showPreviewNotice && (
              <div
                role="status"
                className="p-4 rounded-xl bg-[#1992d1]/15 light:bg-sky-50 border border-[#1992d1]/30 light:border-sky-200 text-[#1992d1] text-xs sm:text-sm animate-in fade-in"
              >
                <strong>Önizleme Bildirimi:</strong> Form doğrulaması başarılı. todo-antigravity.md şartnamesi Madde 4.10 gereği, henüz onaylanmış bir canlı lead uç noktası yapılandırılmadığı için form sunucuya istek göndermemiştir.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
