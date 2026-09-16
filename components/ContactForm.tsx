"use client";

import { useState } from "react";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export function ContactForm() {
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
  );
}
