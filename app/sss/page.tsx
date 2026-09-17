import type { Metadata } from "next";
import { InnerPage, QuestionList } from "@/components/InnerPage";
import s from "@/components/InnerPages.module.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { FAQ_DATA } from "@/content/faqData";
import { PRICING_FAQ } from "@/content/pricingData";
export const metadata: Metadata = {
    title: "Sıkça Sorulan Sorular | Erpovy Bulut ERP Merak Edilenler",
    description: "Erpovy kurulumu, veri aktarımı, lisanslama, kullanıcı yetkilendirme ve bulut güvenliği hakkında en çok merak edilen tüm soruların şeffaf yanıtları.",
    alternates: {
        canonical: "https://www.erpovy.com/sss",
    },
};
export default function Page() {
    return (<InnerPage label="Sıkça sorulan sorular" title="Aklınızdaki sorular." accent="Açık, anlaşılır yanıtlar." description="İlk adımdan günlük kullanıma. Modüller, veri aktarımı ve lisanslama hakkında merak ettiklerinizi burada bulabilirsiniz."><section className={s.content}><div className={s.container}><div className={s.faqLayout}><aside className={s.faqAside}><h2>Birlikte netleştirelim.</h2><p>Her işletmenin ihtiyacı farklı. Burada yanıtını bulamadığınız sorular için bize yazabilirsiniz.</p><Link href="/iletisim/">Ekibimizle konuşun <ArrowUpRight size={17}/></Link></aside><div><section className={s.faqGroup}><h2>Ürün ve kullanım</h2><QuestionList items={FAQ_DATA}/></section><section className={s.faqGroup}><h2>Lisanslama ve geçiş</h2><QuestionList items={PRICING_FAQ}/></section></div></div></div></section></InnerPage>);
}
