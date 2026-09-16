export function FamiliarQuestions() {
  const questions = [
    {
      number: "01",
      question: "“Ödeme geldi mi?”",
      description:
        "Cari hesap, fatura ve tahsilat kayıtlarını inceleyin. Finansal durumunuzu daha rahat değerlendirin.",
      icon: "payments",
    },
    {
      number: "02",
      question: "“Bu ürün stokta var mı?”",
      description:
        "Ürün ve stok hareketlerini takip edin. Sipariş hazırlarken ilgili kayıtları görün.",
      icon: "inventory_2",
    },
    {
      number: "03",
      question: "“Bu iş kimde kaldı?”",
      description:
        "Görev, sorumlu ve termin bilgilerini bir arada inceleyin. Ekibinizle aynı durum üzerinden konuşun.",
      icon: "assignment_ind",
    },
  ];

  return (
    <section className="py-20 lg:py-28 bg-[#e2f1f9] text-[#070d1c] border-b border-[#1992d1]/15">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#070d1c] mb-4">
            Gününüz bilgi aramakla geçmesin.
          </h2>
          <p className="text-base sm:text-lg text-[#334155] leading-relaxed">
            İşletmenizin büyümesi daha fazla takip gerektirir. Erpovy, günlük işlerinizi ortak bir yönetim alanında toplamanıza yardımcı olur.
          </p>
        </div>

        {/* 3 Open Editorial Columns with Top Rules */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {questions.map((item) => (
            <div
              key={item.number}
              className="pt-6 border-t-2 border-[#070d1c] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold tracking-widest text-[#1992d1] uppercase">
                    SORU {item.number}
                  </span>
                  <span className="material-symbols-outlined text-xl text-slate-400">
                    {item.icon}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-[#070d1c] mb-3">
                  {item.question}
                </h3>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
