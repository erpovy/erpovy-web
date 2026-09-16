import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Shield, Lock, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Gizlilik Politikası | Erpovy Veri Güvenliği ve Taahhütler",
  description:
    "Erpovy platformunun kişisel ve kurumsal veri güvenliği ilkeleri, 256-Bit SSL şifreleme altyapısı, çerez politikası ve resmi gizlilik taahhütleri metni.",
  alternates: {
    canonical: "https://www.erpovy.com/gizlilik-politikasi",
  },
};

export default function GizlilikPolitikasiPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#e2f1f9] text-[#070d1c]">
        {/* Header Strip */}
        <section className="bg-[#070d1c] text-white pt-14 pb-16 border-b border-white/10 text-center">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <Shield className="w-3.5 h-3.5" />
              Yasal Bilgilendirme
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Gizlilik Politikası
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Son Güncelleme: 02.09.2026 | Erpovy Bulut Kurumsal Yazılım Teknolojileri A.Ş.
            </p>
          </div>
        </section>

        {/* Content Box */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md space-y-8 text-sm sm:text-base text-[#334155] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#1992d1]" />
                  1. Genel İlkeler ve Taahhüdümüz
                </h2>
                <p>
                  Erpovy (&quot;Platform&quot; veya &quot;Şirket&quot;), kullanıcılarının ve kurumsal müşterilerinin veri gizliliğine ve güvenliğine en yüksek düzeyde riayet eder. İşbu Gizlilik Politikası, platformumuz ve web sitemiz aracılığıyla toplanan bilgilerin nasıl işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#1992d1]" />
                  2. Toplanan Bilgiler ve Kapsam
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Hesap ve Kimlik Bilgileri:</strong> Kayıt sırasında alınan ad, soyad, unvan, e-posta, telefon ve fatura adresi.</li>
                  <li><strong>Ticari ve Operasyonel Veriler:</strong> Erpovy modüllerine girilen cari hesaplar, stok kartları, teklifler, siparişler ve fatura kayıtları (Bu veriler münhasıran müşteriye aittir).</li>
                  <li><strong>Teknik ve Günlük (Log) Verileri:</strong> Güvenlik denetimleri amacıyla tutulan IP adresleri, tarayıcı türü, oturum süreleri ve sistem işlem hareketleri.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">3. Verilerin Kullanım Amaçları</h2>
                <p className="mb-3">Toplanan veriler yalnızca aşağıdaki meşru amaçlar doğrultusunda işlenir:</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Erpovy bulut ERP hizmetinin kesintisiz sunulması ve modül fonksiyonlarının yürütülmesi,</li>
                  <li>İki adımlı doğrulama (2FA) ve yetkilendirme süreçleriyle hesap güvenliğinin temin edilmesi,</li>
                  <li>E-fatura, e-arşiv, banka ve e-ticaret pazaryeri entegrasyonlarının mevzuata uygun işletilmesi,</li>
                  <li>Sistem kararlılığı, yedekleme ve siber saldırı önleme faaliyetlerinin sürdürülmesi.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">4. Veri Güvenliği ve Şifreleme</h2>
                <p>
                  Erpovy sunucuları ile kullanıcı tarayıcıları arasındaki tüm veri transferi 256-Bit SSL/TLS şifreleme protokolü ile güvence altına alınmıştır. Veritabanlarımızda parolalar geri döndürülemez tuzlu hash algoritmalarıyla saklanmakta olup, günlük otomatik yedekleme ve izole bulut altyapısı uygulanmaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">5. Veri Paylaşımı ve Üçüncü Taraflar</h2>
                <p>
                  Müşterilerimizin kurumsal veya şahsi verileri hiçbir surette üçüncü taraflara satılmaz, pazarlama amacıyla paylaşılmaz ya da kiralanmaz. Veriler yalnızca yasal zorunluluk halinde yetkili adli/idari mercilerle veya müşterinin kendi talebiyle entegre ettiği özel entegratörlerle (GİB, banka vb.) paylaşılır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">6. Çerezler (Cookies)</h2>
                <p>
                  Web sitemizde ve uygulamamızda yalnızca oturum devamlılığı, güvenlik doğrulama ve temel kullanıcı tercihlerini hatırlamak üzere zorunlu teknik çerezler kullanılmaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">7. İletişim ve Veri Sahibi Hakları</h2>
                <p>
                  Gizlilik politikamız veya saklanan verilerinizle ilgili sorularınız için <a href="mailto:info@erpovy.com" className="text-[#1992d1] font-semibold underline">info@erpovy.com</a> adresine e-posta gönderebilirsiniz.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
