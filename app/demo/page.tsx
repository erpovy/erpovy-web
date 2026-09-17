import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { InquiryForm } from "@/components/InquiryForm";
import s from "@/components/InnerPages.module.css";
export const metadata: Metadata = {
    title: "Canlı Demo Talebi | Erpovy Yeni Nesil Bulut ERP Simülasyonu",
    description: "Erpovy'yi 20 dakikalık canlı oturumda inceleyin. Ezber slaytlar yerine kendi sektörünüze özel iş akışı simülasyonunu hemen ücretsiz keşfedin.",
    alternates: {
        canonical: "https://www.erpovy.com/demo",
    },
};
export default function Page() {
    return (<InnerPage label="Canlı demo" title="Sizin işiniz." accent="Sizin senaryonuz." description="20 dakikada, işletmenize uygun bir ürün turu. Önceliklerinizi paylaşın; görüşmeyi gerçekten görmek istediğiniz süreçlere ayıralım." closing={false}><section className={s.content}><div className={s.container}><div className={s.formLayout}><aside className={s.formAside}><span className={s.eyebrow}>GÖRÜŞMEDE SİZİ NELER BEKLİYOR?</span><h2>Birlikte bakalım.<br />Net bir fikirle ayrılın.</h2><p>Satış, stok ya da finans. Önce sizin için en önemli noktadan başlayalım.</p><div className={s.process}>{[{ title: "İşinizi tanıyalım", text: "Mevcut sisteminizi ve çözmek istediğiniz ihtiyaçları konuşalım." }, { title: "Ürünü keşfedin", text: "İlgili modülleri ve bir örnek iş akışını birlikte inceleyin." }, { title: "Sonraki adımı netleştirelim", text: "Paket, kullanıcı ve veri aktarımı kapsamını değerlendirelim." }].map((item, i) => <div key={item.title}><span>0{i + 1}</span><div><h3>{item.title}</h3><p>{item.text}</p></div></div>)}</div><Link className={s.contactLine} href="mailto:info@erpovy.com"><span>E-POSTA İLE ULAŞIN</span><strong>info@erpovy.com</strong></Link></aside><Suspense fallback={<div className={s.formPanel}>Form yükleniyor…</div>}><InquiryForm mode="demo"/></Suspense></div></div></section></InnerPage>);
}
