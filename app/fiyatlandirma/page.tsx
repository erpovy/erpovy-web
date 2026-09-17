import type { Metadata } from "next";
import { InnerPage, QuestionList } from "@/components/InnerPage";
import s from "@/components/InnerPages.module.css";
import { PricingDetails } from "@/components/InnerPageInteractive";
import { PRICING_FAQ } from "@/content/pricingData";
export const metadata: Metadata = {
    title: "Erpovy Fiyatlandırma | Şeffaf ve Modüler Bulut ERP Paketleri",
    description: "Erpovy şeffaf yıllık lisans paketlerini inceleyin. Gizli LEM bakım bedeli ve sunucu yatırımı olmadan KOBİ ve kurumsal ölçekte işletmenizi hemen büyütün.",
    alternates: {
        canonical: "https://www.erpovy.com/fiyatlandirma",
    },
};
export default function Page() {
    return (<InnerPage label="Fiyatlandırma" title="Büyümenize alan açın." accent="Bütçeniz net kalsın." description="İşletmenizin bugünkü ihtiyaçlarına uygun paketi seçin. Kullanıcıları, modülleri ve geçiş planını birlikte netleştirelim."><section className={s.content}><div className={s.container}><PricingDetails /><div className={s.sectionHead}><div><span className={s.eyebrow}>LİSANSLAMA HAKKINDA</span><h2>Karar vermeden önce.</h2></div></div><QuestionList items={PRICING_FAQ}/></div></section></InnerPage>);
}
