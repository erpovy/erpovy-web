import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Phone, Clock, MessageSquare } from "lucide-react";

export const metadata: Metadata = {
  title: "İletişim & Canlı Destek | Erpovy Bulut Kurumsal Yazılım",
  description:
    "Erpovy kurumsal ekibiyle doğrudan iletişime geçin. Satış, ürün danışmanlığı, demo randevusu ve teknik destek talepleriniz için bize hemen mesaj gönderin.",
  alternates: {
    canonical: "https://www.erpovy.com/iletisim",
  },
};

export default function IletisimPage() {
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

              {/* Right Column: Contact Form */}
              <div className="lg:col-span-7">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
