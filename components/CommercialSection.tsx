export function CommercialSection() {
  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-[#1a2d5d]/80 via-[#0f172a] to-[#0a1226] light:from-sky-50 light:via-white light:to-blue-50/50 border border-white/15 light:border-slate-200 p-8 sm:p-12 lg:p-16 relative overflow-hidden shadow-2xl light:shadow-lg transition-colors">
          {/* Atmospheric ambient glow */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#1992d1]/20 light:bg-[#1992d1]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1992d1]/20 light:bg-sky-100 border border-[#1992d1]/30 light:border-sky-200 text-[#1992d1] text-xs font-semibold uppercase tracking-wider mb-6">
              <span className="material-symbols-outlined text-sm">tune</span>
              <span>Esnek Çözüm Modeli</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-white light:text-slate-900 tracking-tight leading-tight mb-6">
              İhtiyacınıza göre şekillenen kullanım kapsamı.
            </h2>

            <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed mb-8">
              Kullanacağınız modülleri, ekip yapınızı ve işletmenizin önceliklerini birlikte değerlendirelim. Size uygun çözüm kapsamını demo görüşmesinde netleştirelim.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#1992d1] hover:bg-[#1582bc] text-white font-semibold text-base shadow-lg shadow-[#1992d1]/30 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1]"
              >
                <span>İşletmem İçin Demo Talep Et</span>
                <span className="material-symbols-outlined text-lg">
                  arrow_forward
                </span>
              </a>

              <a
                href="#moduller"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-white/5 light:bg-white hover:bg-white/10 light:hover:bg-slate-50 text-slate-200 light:text-slate-700 hover:text-white light:hover:text-black font-medium text-base border border-white/10 light:border-slate-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1] shadow-sm"
              >
                <span>Modülleri İncele</span>
                <span className="material-symbols-outlined text-lg">
                  view_module
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
