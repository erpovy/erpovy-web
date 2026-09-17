import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { InnerPage } from "@/components/InnerPage";
import { InquiryForm } from "@/components/InquiryForm";
import s from "@/components/InnerPages.module.css";
export const metadata: Metadata = {
    title: "İletişim & Canlı Destek | Erpovy Bulut Kurumsal Yazılım",
    description: "Erpovy kurumsal ekibiyle doğrudan iletişime geçin. Satış, ürün danışmanlığı, demo randevusu ve teknik destek talepleriniz için bize hemen mesaj gönderin.",
    alternates: {
        canonical: "https://www.erpovy.com/iletisim",
    },
};
export default function Page() {
    return (<InnerPage label="İletişim" title="İyi bir başlangıç," accent="iyi bir konuşmayla olur." description="Ürünle ilgili bir soru, işletmenize özel bir ihtiyaç veya iş birliği fikri. Doğrudan bize ulaşın, birlikte değerlendirelim." closing={false}><section className={s.content}><div className={s.container}><div className={s.formLayout}><aside className={s.formAside}><span className={s.eyebrow}>KONUŞALIM</span><h2>Doğru sorudan<br />başlayalım.</h2><p>Hangi aşamada olursanız olun, ihtiyacınızı paylaşabilirsiniz. Ürün, lisanslama ve geçiş sürecinde size yardımcı olalım.</p><a href="mailto:info@erpovy.com" className={s.contactLine}><span>E-POSTA</span><strong>info@erpovy.com</strong><small>Ürün, teklif ve destek talepleriniz için.</small></a><div className={s.contactLine}><span>ÇALIŞMA SAATLERİ</span><strong>Hafta içi 09.00 — 18.00</strong></div><Link href="/demo/" className={s.contactLine}><span>ÜRÜNÜ YAKINDAN TANIYIN</span><strong>Size özel bir demo planlayalım ↗</strong><small>İşletmenizin süreçlerine odaklanan bir görüşme.</small></Link></aside><Suspense fallback={<div className={s.formPanel}>Form yükleniyor…</div>}><InquiryForm mode="contact"/></Suspense></div></div></section></InnerPage>);
}
