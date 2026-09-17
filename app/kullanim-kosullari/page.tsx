import type { Metadata } from "next";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import s from "@/components/InnerPages.module.css";
import { FileCheck } from "lucide-react";
export const metadata: Metadata = {
    title: "Kullanım Koşulları ve Hizmet Sözleşmesi | Erpovy Bulut ERP",
    description: "Erpovy platformu kullanım ve hizmet şartları sözleşmesi, lisanslama esasları, SLA garantisi, kullanıcı yükümlülükleri ve veri mülkiyeti hakları.",
    alternates: {
        canonical: "https://www.erpovy.com/kullanim-kosullari",
    },
};
export default function Page() {
    return (<InnerPage label="Kullanım koşulları" title="Kullanım koşulları" accent="Bilginiz dahilinde." description="Erpovy hizmetlerinin kullanımına ilişkin koşullar ve sorumluluklar." closing={false}><section className={s.content}><div className={s.container}><nav className={s.legalNav} aria-label="Yasal belgeler"><Link href="/gizlilik-politikasi/">Gizlilik politikası</Link><Link href="/kullanim-kosullari/">Kullanım koşulları</Link><Link href="/kvkk/">KVKK aydınlatma metni</Link></nav>
          <div className={s.legalBody}>
            <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200/90 shadow-md space-y-8 text-sm sm:text-base text-[#334155] leading-relaxed">
              <div>
                <h2 className="text-xl font-bold text-[#070d1c] mb-3 flex items-center gap-2">
                  <FileCheck className="w-5 h-5 text-[#1992d1]"/>
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
        </div></section></InnerPage>);
}
