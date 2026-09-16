import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ShieldCheck, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "KVKK Aydınlatma Metni ve Veri Güvenliği | Erpovy Bulut ERP",
  description:
    "6698 sayılı KVKK uyarınca Erpovy kişisel verilerin işlenmesi, saklanması, güvenliği ve veri sahiplerinin kanuni haklarına ilişkin resmi aydınlatma metni.",
  alternates: {
    canonical: "https://www.erpovy.com/kvkk",
  },
};

export default function KvkkPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#e2f1f9] text-[#070d1c]">
        {/* Header Strip */}
        <section className="bg-[#070d1c] text-white pt-14 pb-16 border-b border-white/10 text-center">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <ShieldCheck className="w-3.5 h-3.5" />
              6698 Sayılı Kanun Uyarınca
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              KVKK Aydınlatma Metni
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Erpovy Bulut Kurumsal Yazılım Teknolojileri A.Ş. Kişisel Verilerin Korunması Bilgilendirmesi
            </p>
          </div>
        </section>

        {/* KVKK Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md space-y-8 text-sm sm:text-base text-[#334155] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-[#1992d1]" />
                  1. Veri Sorumlusunun Kimliği
                </h2>
                <p>
                  6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca, Erpovy Bulut Kurumsal Yazılım Teknolojileri A.Ş. (&quot;Erpovy&quot; veya &quot;Şirket&quot;) olarak, veri sorumlusu sıfatıyla, kişisel verilerinizin güvenliğine ve gizliliğine azami hassasiyet göstermekteyiz.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">2. İşlenen Kişisel Verileriniz</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Kimlik Bilgileri:</strong> Ad, soyad, T.C. kimlik numarası (e-fatura ve resmi işlemler için).</li>
                  <li><strong>İletişim Bilgileri:</strong> E-posta adresi, telefon numarası, şirket adresi.</li>
                  <li><strong>Müşteri İşlem ve Finans Bilgileri:</strong> Fatura bilgileri, ödeme kayıtları, cari hesap hareketleri.</li>
                  <li><strong>İşlem Güvenliği Verileri:</strong> IP adresi, giriş-çıkış logları, kullanıcı oturum bilgileri, 2FA doğrulama denemeleri, şifrelenmiş parola özetleri.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">3. Kişisel Verilerin İşlenme Amaçları ve Hukuki Sebepleri</h2>
                <p className="mb-3">
                  Kişisel verileriniz KVKK&apos;nın 5. ve 6. maddelerinde belirtilen kişisel veri işleme şartları dahilinde aşağıdaki amaçlarla işlenmektedir:
                </p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Erpovy ERP platformu kullanıcı hesabı oluşturulması ve yetkilendirme süreçlerinin yürütülmesi,</li>
                  <li>Bulut yazılım hizmetlerinin sunulması, modül aboneliklerinin ve sözleşme süreçlerinin yürütülmesi,</li>
                  <li>İki aşamalı doğrulama (2FA) ile hesap güvenliğinin ve yetkisiz erişim önleme mekanizmalarının sağlanması,</li>
                  <li>GİB e-Dönüşüm (e-Fatura, e-Arşiv, e-İrsaliye), banka ve kargo entegrasyonlarının mevzuata uygun işletilmesi,</li>
                  <li>5651 sayılı Kanun ve ilgili mevzuat uyarınca sistem erişim loglarının yasal süre boyunca tutulması.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">4. Kişisel Verilerin Aktarımı</h2>
                <p>
                  Kişisel verileriniz; kanunen yetkili kamu kurum ve kuruluşlarına (GİB, Vergi Daireleri, Adli Merciler), Müşteri&apos;nin aktif ettiği e-fatura özel entegratörlerine, SMS/E-posta iletim sağlayıcılarına ve güvenli bulut barındırma hizmeti alınan altyapı sağlayıcılarına yalnızca hizmetin ifası amacıyla ve KVKK&apos;nın 8. ve 9. maddelerine uygun olarak aktarılmaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">5. Veri Güvenliği Tedbirlerimiz</h2>
                <p>
                  Erpovy, kişisel verilerinizin hukuka aykırı olarak işlenmesini ve erişilmesini önlemek amacıyla 256-Bit SSL/TLS aktarım şifrelemesi, dinlenmeyen veritabanı şifreleme mekanizmaları, çok faktörlü kimlik doğrulama, rate limiting ve düzenli penetrasyon testleri uygulamaktadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">6. İlgili Kişinin KVKK Kapsamındaki Hakları (Madde 11)</h2>
                <p className="mb-3">KVKK&apos;nın 11. maddesi uyarınca veri sahipleri;</p>
                <ul className="list-disc pl-5 space-y-1.5">
                  <li>Kişisel veri işlenip işlenmediğini öğrenme,</li>
                  <li>Kişisel verileri işlenmişse buna ilişkin bilgi talep etme,</li>
                  <li>Kişisel verilerin işlenme amacını ve bunların amacına uygun kullanılıp kullanılmadığını öğrenme,</li>
                  <li>Yurt içinde veya yurt dışında kişisel verilerin aktarıldığı üçüncü kişileri bilme,</li>
                  <li>Kişisel verilerin eksik veya yanlış işlenmiş olması hâlinde bunların düzeltilmesini isteme,</li>
                  <li>Kişisel verilerin silinmesini veya yok edilmesini isteme haklarına sahiptir.</li>
                </ul>
                <p className="mt-4 pt-4 border-t border-slate-200">
                  Bu haklarınızı kullanmak için <span className="text-[#1992d1] font-mono font-bold">kvkk@erpovy.com</span> adresine güvenli elektronik imzalı olarak veya şirket merkezimize yazılı olarak başvurabilirsiniz.
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
