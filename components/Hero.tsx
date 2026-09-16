import { ProductPreview } from "./ProductPreview";

export function Hero() {
  return (
    <section
      id="urun"
      className="relative pt-32 pb-20 lg:pt-36 lg:pb-28 overflow-hidden"
    >
      {/* Subtle Atmospheric Glow Backgrounds */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#1992d1]/10 light:bg-[#1992d1]/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#1a2d5d]/20 light:bg-[#1992d1]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Editorial Text Area */}
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1992d1]/10 light:bg-[#1992d1]/10 border border-[#1992d1]/20 text-[#1992d1] text-xs font-semibold tracking-wider uppercase mb-6">
            <span className="material-symbols-outlined text-sm">view_quilt</span>
            <span>Modüler ERP ve İş Yönetimi</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white light:text-slate-900 tracking-tight leading-[1.15] mb-6">
            İşletmenizin tüm süreçlerine{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-[#1992d1] to-blue-500">
              tek yerden bakın.
            </span>
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-slate-300 light:text-slate-600 leading-relaxed mb-8">
            Satış, finans, stok, üretim ve ekip süreçlerinizi Erpovy’nin modüler yapısıyla bir araya getirin. İşletmenize uygun iş akışlarını keşfedin, günlük operasyonunuzu daha görünür hale getirin.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#demo"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#1992d1] hover:bg-[#1582bc] text-white font-semibold text-base shadow-lg shadow-[#1992d1]/25 hover:shadow-[#1992d1]/40 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#070d1c] focus-visible:ring-[#1992d1]"
            >
              <span>Demo Talep Et</span>
              <span className="material-symbols-outlined text-lg">arrow_forward</span>
            </a>

            <a
              href="#moduller"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-slate-800/60 light:bg-white hover:bg-slate-800 light:hover:bg-slate-50 text-slate-200 light:text-slate-700 hover:text-white light:hover:text-black font-medium text-base border border-white/10 light:border-slate-300 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1] shadow-sm"
            >
              <span>Ürünü Keşfet</span>
              <span className="material-symbols-outlined text-lg">explore</span>
            </a>
          </div>

          {/* Supporting Labels */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-slate-400 light:text-slate-500">
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#1992d1]">check_circle</span>
              Modüler yapı
            </span>
            <span className="text-slate-600 light:text-slate-300 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#1992d1]">check_circle</span>
              Ortak çalışma alanı
            </span>
            <span className="text-slate-600 light:text-slate-300 hidden sm:inline">·</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm text-[#1992d1]">check_circle</span>
              Türkçe arayüz
            </span>
          </div>
        </div>

        {/* Showcase Product Preview */}
        <div className="mt-8">
          <ProductPreview />
        </div>
      </div>
    </section>
  );
}
