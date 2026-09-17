import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import s from "@/components/InnerPages.module.css";
import { Lock, FileText } from "lucide-react";
export const metadata: Metadata = {
    title: "Gizlilik Politikası | Erpovy Veri Güvenliği ve Taahhütler",
    description: "Erpovy platformunun kişisel ve kurumsal veri güvenliği ilkeleri, 256-Bit SSL şifreleme altyapısı, çerez politikası ve resmi gizlilik taahhütleri metni.",
    alternates: {
        canonical: "https://www.erpovy.com/gizlilik-politikasi",
    },
};
export default function Page() {
    return (<InnerPage label="Gizlilik politikası" title="Gizlilik politikası" accent="Bilginiz dahilinde." description="Gizliliğiniz, veri güvenliği ve hizmetlerimizin kullanımına ilişkin bilgiler." closing={false}><section className={s.content}><div className={s.container}><nav className={s.legalNav} aria-label="Yasal belgeler"><Link href="/gizlilik-politikasi/">Gizlilik politikası</Link><Link href="/kullanim-kosullari/">Kullanım koşulları</Link><Link href="/kvkk/">KVKK aydınlatma metni</Link></nav>
          <div className={s.legalBody}>
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md space-y-8 text-sm sm:text-base text-[#334155] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3 flex items-center gap-2">
                  <Lock className="w-5 h-5 text-[#1992d1]"/>
                  1. Genel İlkeler ve Taahhüdümüz
                </h2>
                <p>
                  Erpovy (&quot;Platform&quot; veya &quot;Şirket&quot;), kullanıcılarının ve kurumsal müşterilerinin veri gizliliğine ve güvenliğine en yüksek düzeyde riayet eder. İşbu Gizlilik Politikası, platformumuz ve web sitemiz aracılığıyla toplanan bilgilerin nasıl işlendiğini, saklandığını ve korunduğunu açıklamaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#1992d1]"/>
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
        </div></section></InnerPage>);
}
