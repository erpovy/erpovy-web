"use client";

import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { Send, Mail, Phone, MapPin, Clock, MessageSquare, CheckCircle, AlertCircle } from "lucide-react";

export default function IletisimPage() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [subject, setSubject] = useState("Genel Bilgi");
  const [message, setMessage] = useState("");
  const [honeypot, setHoneypot] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<string | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitSuccess(null);
    setSubmitError(null);
    setIsSubmitting(true);

    try {
      const res = await fetch("mail.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          email,
          phone,
          companyName,
          primaryNeed: subject,
          note: message,
          honeypot,
        }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        setSubmitSuccess("Mesajınız bize başarıyla ulaştı. En kısa sürede sizinle iletişime geçeceğiz.");
        setFullName("");
        setEmail("");
        setPhone("");
        setCompanyName("");
        setMessage("");
      } else {
        setSubmitError(data.error || "Mesaj iletilirken bir sorun oluştu. Lütfen doğrudan e-posta ile ulaşın.");
      }
    } catch {
      setSubmitError("Sunucu bağlantısı kurulamadı. Lütfen internet bağlantınızı kontrol edip tekrar deneyin.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#e2f1f9] text-[#070d1c]">
        {/* Contact Hero */}
        <section className="bg-[#070d1c] text-white pt-16 pb-20 border-b border-white/10 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-[#1992d1]/15 rounded-full blur-3xl" />
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <MessageSquare className="w-3.5 h-3.5" />
              Doğrudan İletişim
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-4">
              Bizimle İletişime Geçin, <br />
              <span className="text-[#1992d1]">İşinizi Birlikte Büyütelim.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Sorularınız, demo talepleriniz veya iş ortaklığı teklifleriniz için ekibimizle dilediğiniz kanaldan bağlantıya geçebilirsiniz.
            </p>
          </div>
        </section>

        {/* Contact Info & Form Grid */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              {/* Left Column: Contact Cards */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-[#1992d1] block mb-2">
                    Hızlı İletişim Kanalları
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-black text-[#070d1c] tracking-tight mb-4">
                    Her Zaman Yanınızdayız
                  </h2>
                  <p className="text-sm text-[#334155] leading-relaxed mb-6">
                    Hafta içi 09:00 - 18:00 saatleri arasında kurumsal uzmanlarımızla iletişime geçebilir, teknik ve ticari tüm sorularınıza doğrudan yanıt alabilirsiniz.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#1992d1] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-[#070d1c] block">E-Posta</strong>
                      <p className="text-xs text-slate-500 mb-1">Genel bilgi, teklif ve destek</p>
                      <a href="mailto:info@erpovy.com" className="text-sm font-semibold text-[#1992d1] hover:underline">
                        info@erpovy.com
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-600 shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-[#070d1c] block">Canlı Destek & Demo Hattı</strong>
                      <p className="text-xs text-slate-500 mb-1">Doğrudan ürün danışmanı ile görüşün</p>
                      <a href="https://app.erpovy.com" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-emerald-700 hover:underline">
                        Canlı Destek Başlat
                      </a>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl bg-white border border-slate-200/90 shadow-xs flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center text-purple-600 shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <strong className="text-sm font-bold text-[#070d1c] block">Çalışma Saatleri</strong>
                      <p className="text-xs text-slate-500">Pazartesi – Cuma: 09:00 – 18:00</p>
                      <p className="text-[11px] text-slate-400 mt-1">Acil sunucu izleme 7/24 otomatiktir</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Contact Form */}
              <div className="lg:col-span-7">
                <div className="rounded-3xl bg-[#070d1c] text-white p-7 sm:p-10 shadow-2xl border border-white/10">
                  <h3 className="text-2xl font-black text-white tracking-tight mb-2">
                    Bize Mesaj Gönderin
                  </h3>
                  <p className="text-sm text-slate-300 mb-6">
                    Aşağıdaki formu doldurun, uzman ekibimiz en geç 2 saat içinde sizinle irtibata geçsin.
                  </p>

                  {/* Anti-spam honeypot */}
                  <input
                    type="text"
                    name="contact_fax"
                    tabIndex={-1}
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                    className="hidden"
                    autoComplete="off"
                    aria-hidden="true"
                  />

                  {submitSuccess && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs sm:text-sm text-emerald-200 flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-emerald-300 block mb-0.5">Mesajınız Alındı</strong>
                        {submitSuccess}
                      </div>
                    </div>
                  )}

                  {submitError && (
                    <div className="mb-6 p-4 rounded-xl bg-rose-500/15 border border-rose-500/30 text-xs sm:text-sm text-rose-200 flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="font-bold text-rose-300 block mb-0.5">İletim Başarısız</strong>
                        {submitError}
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-name" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Adınız Soyadınız <span className="text-[#1992d1]">*</span>
                        </label>
                        <input
                          id="c-name"
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          placeholder="Ad Soyad"
                          disabled={isSubmitting}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1]"
                        />
                      </div>

                      <div>
                        <label htmlFor="c-email" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          İş E-postanız <span className="text-[#1992d1]">*</span>
                        </label>
                        <input
                          id="c-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ad@sirketiniz.com"
                          disabled={isSubmitting}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="c-phone" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Telefon Numarası
                        </label>
                        <input
                          id="c-phone"
                          type="tel"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="0 (5XX) XXX XX XX"
                          disabled={isSubmitting}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1]"
                        />
                      </div>

                      <div>
                        <label htmlFor="c-company" className="block text-xs font-semibold text-slate-300 mb-1.5">
                          Şirket / Firma Adı
                        </label>
                        <input
                          id="c-company"
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="Şirketiniz"
                          disabled={isSubmitting}
                          className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1]"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="c-subject" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Konu / İlgi Alanı
                      </label>
                      <select
                        id="c-subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-[#070d1c] border border-white/15 text-sm text-white focus:outline-none focus:border-[#1992d1]"
                      >
                        <option value="Demo Talebi">Demo ve Ürün Tanıtımı</option>
                        <option value="Fiyatlandırma">Fiyat ve Lisanslama Teklifi</option>
                        <option value="Veri Taşıma">Eski Sistemden Veri Aktarımı</option>
                        <option value="İş Ortaklığı">İş Ortaklığı & Entegrasyon</option>
                        <option value="Teknik Destek">Müşteri Desteği</option>
                        <option value="Diğer">Diğer</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="c-message" className="block text-xs font-semibold text-slate-300 mb-1.5">
                        Mesajınız <span className="text-[#1992d1]">*</span>
                      </label>
                      <textarea
                        id="c-message"
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="İhtiyacınızı veya iletmek istediğiniz detayları kısaca açıklayın..."
                        disabled={isSubmitting}
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-[#1992d1] resize-none"
                      />
                    </div>

                    <div className="pt-2">
                      <ButtonWithIcon
                        type="submit"
                        variant="brand"
                        size="md"
                        icon={Send}
                        disabled={isSubmitting}
                        className="w-full justify-center"
                      >
                        {isSubmitting ? "Gönderiliyor..." : "Mesajı İlet"}
                      </ButtonWithIcon>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
