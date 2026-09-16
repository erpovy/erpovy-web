export function TrustSection() {
  const trustFeatures = [
    {
      title: "Kullanıcı yetkilendirme",
      description: "Personel ve departman bazında modül, menü ve veri erişim yetkilerini hassas biçimde tanımlayın.",
      icon: "admin_panel_settings",
    },
    {
      title: "Şirket bazlı çalışma",
      description: "Farklı şirket veya şubelerinizin kayıtlarını ortak bir altyapıda ancak izole şekilde yönetin.",
      icon: "corporate_fare",
    },
    {
      title: "İki adımlı doğrulama seçeneği",
      description: "Kullanıcı hesapları için ek güvenlik katmanı sağlayarak yetkisiz erişim risklerini sınırlandırın.",
      icon: "security",
    },
    {
      title: "Yetkili belge erişimi",
      description: "Sözleşmeler ve kurumsal evraklar için yalnızca yetkilendirilmiş kişilerin erişebileceği arşivleme düzeni kurun.",
      icon: "folder_managed",
    },
  ];

  return (
    <section className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1992d1]/10 text-[#1992d1] text-xs font-semibold uppercase tracking-wider mb-4">
            <span className="material-symbols-outlined text-sm">lock</span>
            <span>Erişim ve Güvenlik</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white light:text-slate-900 tracking-tight mb-4">
            Kontrollü erişim, düzenli kayıtlar.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 light:text-slate-600">
            Kullanıcı yetkileri ve şirket kapsamına göre çalışma düzeninizi oluşturun. Belge erişimi ve hesap güvenliği seçeneklerini demo sırasında birlikte inceleyin.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustFeatures.map((item) => (
            <div
              key={item.title}
              className="p-6 rounded-2xl bg-[#0f172a]/70 light:bg-white border border-white/10 light:border-slate-200 hover:border-white/20 light:hover:border-slate-300 transition-all shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-[#1992d1]/10 light:bg-sky-50 border border-[#1992d1]/20 light:border-sky-200 flex items-center justify-center text-[#1992d1] mb-4">
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
              </div>
              <h3 className="text-base font-bold text-white light:text-slate-900 mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 light:text-slate-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
