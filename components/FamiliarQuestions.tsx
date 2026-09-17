export function FamiliarQuestions() {
  const questions = [
    {
      number: "01",
      question: "“Ödeme geldi mi?”",
      description:
        "Cari hesap, fatura ve tahsilat kayıtlarını anlık inceleyin. Finansal durumunuzu ve vadesi gelen alacaklarınızı tek ekranda netleştirin.",
      icon: "payments",
      solution: "Otomatik Cari & Banka Takibi",
    },
    {
      number: "02",
      question: "“Bu ürün stokta var mı?”",
      description:
        "Ürün, varyant ve depo bazlı anlık stok hareketlerini görün. Kritik stok uyarılarıyla sipariş hazırlarken sürpriz yaşamayın.",
      icon: "inventory_2",
      solution: "Canlı WMS & Depo Entegrasyonu",
    },
    {
      number: "03",
      question: "“Bu iş kimde kaldı?”",
      description:
        "Görev, yetkili personel ve teslimat terminlerini şeffaf biçimde izleyin. Ekibinizle aynı ortak panel üzerinden senkronize çalışın.",
      icon: "assignment_ind",
      solution: "Şeffaf Görev & Süreç Yönetimi",
    },
  ];

  return (
    <section className="py-10 sm:py-14 md:py-20 lg:py-24 bg-[#e2f1f9] text-[#070d1c] border-b border-[#1992d1]/15">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-8 sm:mb-12">
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#1992d1] uppercase mb-2 inline-block">
            Günlük Operasyonel Zorluklar
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#070d1c] mb-3 sm:mb-4">
            Gününüz bilgi aramakla geçmesin.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-[#334155] leading-relaxed">
            İşletmenizin büyümesi daha fazla takip gerektirir. Erpovy, dağınık excel tablolarını ve mesajlaşmaları tek bir profesyonel alanda toplar.
          </p>
        </div>

        {/* 3 Rich Responsive Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {questions.map((item) => (
            <div
              key={item.number}
              className="bg-white/95 backdrop-blur-xs rounded-2xl p-5 sm:p-7 border border-slate-200/90 shadow-sm hover:shadow-md hover:border-[#1992d1]/40 transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-sky-500/10 text-[#1992d1] border border-sky-500/20 text-[11px] font-bold tracking-wider uppercase">
                    SORU {item.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center text-[#1992d1] group-hover:bg-[#1992d1] group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-xl">
                      {item.icon}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-black text-[#070d1c] mb-2.5">
                  {item.question}
                </h3>

                <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center gap-1.5 text-xs font-semibold text-[#1992d1]">
                <span className="material-symbols-outlined text-sm">check_circle</span>
                <span>{item.solution}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
