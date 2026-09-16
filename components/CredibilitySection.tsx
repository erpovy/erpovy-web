export function CredibilitySection() {
  const steps = [
    {
      number: "1",
      title: "Önceliğinizi paylaşın.",
      description: "Takip etmekte zorlandığınız, dağılan veya manuel yürüyen süreçlerinizi anlatın.",
    },
    {
      number: "2",
      title: "İlgili akışı görün.",
      description: "İşletmenize uygun modülleri, temsili kayıtlar ve canlı ekran akışları üzerinden inceleyin.",
    },
    {
      number: "3",
      title: "Kapsamı netleştirin.",
      description: "Kullanıcı sayısı, aktif modüller ve varsa veri aktarımı gereksinimlerini birlikte değerlendirelim.",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#e2f1f9] text-[#070d1c] border-b border-[#1992d1]/15">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-3 inline-block">
            Süreç ve Beklenti
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#070d1c] mb-4">
            İşinize nasıl uyacağını birlikte netleştirelim.
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            Standart bir satış sunumu yerine, işletmenizin gerçek ihtiyaçlarına odaklanan bir ürün değerlendirmesi yapıyoruz.
          </p>
        </div>

        {/* 3 Step Sequence */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((s) => (
            <div
              key={s.number}
              className="p-6 rounded-xl bg-white border border-slate-200/80 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="w-8 h-8 rounded-full bg-[#070d1c] text-white flex items-center justify-center text-sm font-bold mb-4">
                  {s.number}
                </span>
                <h3 className="text-lg font-bold text-[#070d1c] mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-[#334155] leading-relaxed">
                  {s.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Security & Access Panel (Kontrollü erişim, düzenli kayıtlar) */}
        <div className="rounded-3xl bg-[#070d1c] text-white p-8 sm:p-12 lg:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          {/* Subtle ambient lighting */}
          <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-[#1992d1]/10 blur-3xl" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
            {/* Left Column: Heading & Description */}
            <div className="lg:col-span-5 space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-snug">
                Kontrollü erişim, düzenli kayıtlar.
              </h3>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                Kullanıcı yetkileri ve şirket kapsamına göre çalışma düzeninizi oluşturun. Belge erişimi ve hesap güvenliği seçeneklerini demo sırasında birlikte inceleyin.
              </p>
            </div>

            {/* Right Column: 2x2 Feature Cards Grid */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Card 1: Kullanıcı yetkilendirme */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1992d1] group-hover:scale-105 group-hover:bg-[#1992d1]/10 transition-all shrink-0">
                  <span className="material-symbols-outlined text-2xl">admin_panel_settings</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                  Kullanıcı yetkilendirme
                </span>
              </div>

              {/* Card 2: Şirket bazlı çalışma */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1992d1] group-hover:scale-105 group-hover:bg-[#1992d1]/10 transition-all shrink-0">
                  <span className="material-symbols-outlined text-2xl">apartment</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                  Şirket bazlı çalışma
                </span>
              </div>

              {/* Card 3: İki adımlı doğrulama seçeneği */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1992d1] group-hover:scale-105 group-hover:bg-[#1992d1]/10 transition-all shrink-0">
                  <span className="material-symbols-outlined text-2xl">phonelink_lock</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                  İki adımlı doğrulama seçeneği
                </span>
              </div>

              {/* Card 4: Yetkili belge erişimi */}
              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/[0.03] border border-white/10 hover:border-white/20 hover:bg-white/[0.06] transition-all group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#1992d1] group-hover:scale-105 group-hover:bg-[#1992d1]/10 transition-all shrink-0">
                  <span className="material-symbols-outlined text-2xl">lock_person</span>
                </div>
                <span className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-white transition-colors">
                  Yetkili belge erişimi
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
