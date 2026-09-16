import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ClosingDemoSection } from "@/components/ClosingDemoSection";
import { Shield, Zap, Sparkles, Cpu, Layers, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Hakkımızda & Misyonumuz | Erpovy Yeni Nesil Bulut ERP",
  description:
    "Erpovy'nin kuruluş hikayesi, misyonu ve vizyonu. İşletmeleri hantal masaüstü programlarından kurtararak modern bulut hızında dijitalleştiriyoruz.",
  alternates: {
    canonical: "https://www.erpovy.com/hakkimizda",
  },
};

export default function HakkimizdaPage() {
  const values = [
    {
      icon: Layers,
      title: "Tam Modüler Mimari",
      desc: "İhtiyacınız olmayan özellikler için ödeme yapmazsınız. İşiniz büyüdükçe modüllerinizi tek tıkla genişletirsiniz.",
    },
    {
      icon: Zap,
      title: "Platform Bağımsız Hız",
      desc: "Uzak masaüstü (RDP) veya VPN beklemeden Mac, PC, iPad ve mobilden tarayıcı akıcılığında kesintisiz çalışma.",
    },
    {
      icon: Shield,
      title: "Şeffaf Lisanslama",
      desc: "Zorunlu LEM bakım bedelleri, sürpriz faturalar ve bayi bağımlılığı olmadan öngörülebilir maliyet modeli.",
    },
    {
      icon: Cpu,
      title: "Sıfır Donanım Maliyeti",
      desc: "100.000 TL'lik fiziksel sunuculara veya Windows Server lisanslarına gerek kalmadan %100 bulut güvenliği.",
    },
    {
      icon: HeartHandshake,
      title: "Müşteri Odaklı Yaklaşım",
      desc: "Ezber slaytlar yerine firmanızın gerçek süreçlerine odaklanan canlı yol haritası ve doğrudan ürün uzmanı desteği.",
    },
    {
      icon: Sparkles,
      title: "Erpovy Teams Gücü",
      desc: "Yönetici panelinden saniyeler içinde granüler rol tanımlama, veri gizleme ve güvenli ekip yetkilendirmesi.",
    },
  ];

  return (
    <>
      <Header />
      <main className="flex-1 bg-[#e2f1f9] text-[#070d1c]">
        {/* Hero Section */}
        <section className="bg-[#070d1c] text-white pt-16 pb-20 border-b border-white/10 relative overflow-hidden text-center">
          <div className="pointer-events-none absolute -top-32 -right-32 w-96 h-96 bg-[#1992d1]/15 rounded-full blur-3xl" />
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Yeni Nesil İşletim Sistemi
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
              İşletmeler İçin Modern, <br />
              <span className="text-[#1992d1]">Sade ve Hızlı ERP Deneyimi.</span>
            </h1>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              2000&apos;lerden kalma hantal masaüstü programlarına, karmaşık sunucu odalarına ve zorunlu bakım faturalarına meydan okuyoruz.
            </p>
          </div>
        </section>

        {/* Story & Mission */}
        <section className="py-16 lg:py-24">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-[#1992d1] block mb-2">
                  Hikayemiz
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-[#070d1c] tracking-tight mb-6">
                  Neden Erpovy&apos;yi İnşa Ettik?
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-[#334155] leading-relaxed">
                  <p>
                    Geleneksel ERP yazılımları onlarca yıl önce tasarlanmış hantal mimariler üzerinde çalışır. Şirketler; ofis dışından erişmek için yavaş VPN sunucuları kurmak, pahalı Windows Server lisansları satın almak ve her yıl zorunlu LEM bakım bedelleri ödemek zorunda bırakılır.
                  </p>
                  <p>
                    Erpovy, bu dağınıklığa ve gereksiz maliyetlere son vermek amacıyla yola çıktı. Amacımız; bir ticaret işletmesinin, fabrikanın ya da hizmet firmasının tüm finans, satış, stok ve ekip yönetimini tek bir tarayıcı penceresinden saniyeler içinde yönetebilmesini sağlamaktır.
                  </p>
                  <p>
                    Bugün Erpovy, işletmelere modern bulutun getirdiği bağımsızlığı, üst düzey veri güvenliğini ve şeffaf lisanslama modelini sunmaktadır.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl bg-[#070d1c] text-white p-8 sm:p-12 border border-white/10 shadow-2xl relative overflow-hidden">
                <div className="pointer-events-none absolute -top-24 -right-24 w-64 h-64 bg-[#1992d1]/20 rounded-full blur-2xl" />
                <h3 className="text-2xl font-black text-white tracking-tight mb-4">
                  Misyonumuz
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-8">
                  KOBİ&apos;leri ve büyüyen işletmeleri teknolojik karmaşadan kurtararak; kullanıcı dostu, modüler ve güvenli bir dijital omurga oluşturmak.
                </p>

                <h3 className="text-2xl font-black text-white tracking-tight mb-4">
                  Vizyonumuz
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  İşletmelerin operasyonlarını tek bir merkezden, hiçbir donanım veya bayi bağımlılığı olmadan yönetebildiği Türkiye ve bölgenin en çevik kurumsal kaynak planlama platformu olmak.
                </p>
              </div>
            </div>

            {/* Core Values Grid */}
            <div className="mb-16">
              <div className="text-center max-w-2xl mx-auto mb-12">
                <span className="text-xs font-bold uppercase tracking-wider text-[#1992d1] block mb-2">
                  Değerlerimiz
                </span>
                <h3 className="text-3xl font-black text-[#070d1c] tracking-tight">
                  Bizi Farklı Kılan Temel İlkeler
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {values.map((v, i) => {
                  const Icon = v.icon;
                  return (
                    <div
                      key={i}
                      className="p-6 rounded-2xl bg-white border border-slate-200/90 shadow-xs hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 rounded-xl bg-sky-50 border border-sky-200 flex items-center justify-center text-[#1992d1] mb-4">
                        <Icon className="w-6 h-6" />
                      </div>
                      <h4 className="text-lg font-bold text-[#070d1c] mb-2">{v.title}</h4>
                      <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">{v.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <ClosingDemoSection />
      </main>
      <Footer />
    </>
  );
}
