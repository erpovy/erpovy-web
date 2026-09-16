export function CoreValues() {
  const values = [
    {
      title: "Finansal görünürlüğü artırın.",
      description:
        "Cari hesap, fatura, kasa ve banka hareketlerini takip ederek finansal durumunuzu daha rahat değerlendirin.",
      icon: "account_balance_wallet",
      accent: "from-sky-500/20 to-blue-600/10 light:from-sky-500/5 light:to-blue-600/5",
      border: "border-sky-500/20 light:border-sky-200",
    },
    {
      title: "Operasyonu düzenleyin.",
      description:
        "Stok, depo, satın alma ve üretim kayıtlarını iş akışınızın parçası olarak yönetin.",
      icon: "hub",
      accent: "from-blue-500/20 to-indigo-600/10 light:from-blue-500/5 light:to-indigo-600/5",
      border: "border-blue-500/20 light:border-blue-200",
    },
    {
      title: "Ekipleri aynı resimde buluşturun.",
      description:
        "Proje, görev, insan kaynakları ve belge süreçlerini ortak bir yönetim yaklaşımıyla takip edin.",
      icon: "groups",
      accent: "from-indigo-500/20 to-sky-600/10 light:from-indigo-500/5 light:to-sky-600/5",
      border: "border-indigo-500/20 light:border-indigo-200",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl sm:text-4xl font-bold text-white light:text-slate-900 tracking-tight mb-4">
            Dağınık süreçler yerine ortak bir çalışma alanı.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600 leading-relaxed">
            Departmanlarınızın günlük işlerini aynı ürün ailesinde takip edin. İhtiyacınız olan modülleri tanıyın, işinize uygun kullanım kapsamını birlikte belirleyelim.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val) => (
            <div
              key={val.title}
              className={`p-8 rounded-2xl bg-gradient-to-b ${val.accent} bg-[#0f172a]/80 light:bg-white border ${val.border} backdrop-blur-md flex flex-col justify-between transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10 light:shadow-sm`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1992d1]/20 light:bg-sky-50 border border-[#1992d1]/30 light:border-sky-200 flex items-center justify-center text-[#1992d1] mb-6">
                  <span className="material-symbols-outlined text-2xl">{val.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white light:text-slate-900 mb-3">
                  {val.title}
                </h3>
                <p className="text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                  {val.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
