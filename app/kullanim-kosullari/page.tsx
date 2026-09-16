import { Metadata } from "next";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Scale, FileCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Kullanım Koşulları | Erpovy Modüler ERP",
  description:
    "Erpovy platformu kullanım ve hizmet şartları sözleşmesi, kullanıcı hakları ve abonelik esasları.",
  alternates: {
    canonical: "/kullanim-kosullari",
  },
};

export default function KullanimKosullariPage() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#e2f1f9] text-[#070d1c]">
        {/* Header Strip */}
        <section className="bg-[#070d1c] text-white pt-14 pb-16 border-b border-white/10 text-center">
          <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-sky-500/10 text-sky-300 border border-sky-500/20 text-xs font-bold uppercase tracking-wider mb-4">
              <Scale className="w-3.5 h-3.5" />
              Hukuki Şartlar
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
              Kullanım ve Hizmet Şartları
            </h1>
            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Son Güncelleme: 02.09.2026 | Erpovy Bulut Kurumsal Yazılım Teknolojileri A.Ş.
            </p>
          </div>
        </section>

        {/* Legal Text Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md space-y-8 text-sm sm:text-base text-[#334155] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#1992d1]" />
                  1. Taraflar ve Kapsam
                </h2>
                <p>
                  İşbu Kullanım ve Hizmet Şartları Sözleşmesi (&quot;Sözleşme&quot;), Erpovy Bulut Kurumsal Yazılım Teknolojileri A.Ş. (&quot;Hizmet Sağlayıcı&quot;) ile bu platforma kayıt olan, platformdan faydalanan tüzel ve/veya gerçek kişiler (&quot;Müşteri&quot; veya &quot;Kullanıcı&quot;) arasında akdedilmiştir. Erpovy sistemine kayıt olan veya oturum açan her kullanıcı işbu şartları peşinen kabul etmiş sayılır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">2. Hizmetin Niteliği ve Kapsamı</h2>
                <p>
                  Erpovy; Muhasebe, Finans, Stok ve Depo Yönetimi (WMS), E-Ticaret ve Pazaryeri Entegrasyonları, CRM, Sabit Kıymet, İSG, Lojistik ve İnsan Kaynakları modüllerini içeren çok kiracılı (multi-tenant) bir bulut kurumsal kaynak planlama yazılımıdır (SaaS). Hizmet Sağlayıcı, platformun teknik işleyişini, güvenliğini ve güncelliğini sürdürmekle yükümlüdür.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">3. Kullanıcı Yükümlülükleri ve Hesap Güvenliği</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Kullanıcı, sisteme tanımladığı e-posta, şifre ve iki aşamalı doğrulama (2FA) kodlarının gizliliğinden ve güvenliğinden bizzat sorumludur.</li>
                  <li>Platforma girilen tüm ticari veriler, cari hesaplar, e-fatura kayıtları ve envanter hareketlerinin yasal doğruluğu ve sorumluluğu Müşteri&apos;ye aittir.</li>
                  <li>Platformun tersine mühendislikle çözümlenmesi, kaynak kodlarının kopyalanması, sisteme yetkisiz erişim (brute-force, siber saldırı) girişimlerinde bulunulması kesinlikle yasaktır ve derhal yasal işlem başlatılmasına yol açar.</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">4. Veri Mülkiyeti ve Gizlilik</h2>
                <p>
                  Müşteri tarafından sisteme yüklenen tüm kurumsal veriler, müşteri listeleri, finansal tablolar ve belgeler münhasıran Müşteri&apos;nin mülkiyetindedir. Erpovy, söz konusu verileri Müşteri&apos;nin açık yazılı onayı veya yetkili adli/idari makamların yasal talepleri haricinde üçüncü şahıslarla paylaşamaz, satamaz veya ticari amaçla işleyemez.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">5. Hizmet Sürekliliği (SLA) ve Yedekleme</h2>
                <p>
                  Erpovy, platformun yıllık %99.5 erişilebilirlik (uptime) seviyesinde kesintisiz çalışması için gerekli kurumsal bulut altyapısını, veri replikasyonunu ve periyodik veritabanı yedeklemelerini sağlamaktadır. Mücbir sebepler ve önceden duyurulan planlı bakım saatleri SLA hesaplamasının dışındadır.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">6. Abonelik, Lisanslama ve Fesih</h2>
                <p>
                  Tanıtım demo görüşmesi sonrası başlatılan lisans süresi boyunca Müşteri tercih ettiği paket kapsamındaki modüllerden faydalanır. Müşteri dilediği zaman aboneliğini sonlandırabilir; fesih durumunda yasal süreler içerisinde verilerini dışa aktarma (Excel/JSON/XML) hakkına sahiptir.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3">7. Yetkili Mahkeme ve Yürürlük</h2>
                <p>
                  İşbu sözleşmenin uygulanmasından ve yorumlanmasından doğacak her türlü uyuşmazlığın çözümünde Türk Hukuku uygulanır ve Ankara Mahkemeleri ile İcra Daireleri yetkilidir.
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
