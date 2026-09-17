import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { SectorCatalog } from "@/components/InnerPageInteractive";
import s from "@/components/InnerPages.module.css";
export const metadata: Metadata = {
    title: "Erpovy Sektörel Çözümler | İmalat, Ticaret, Lojistik ERP",
    description: "İmalat, perakende, lojistik, otomotiv, gıda ve tarım sektörlerine özel bulut ERP çözümleri. İşletmenizin dinamiklerine uygun sektörel modülleri keşfedin.",
    alternates: {
        canonical: "https://www.erpovy.com/cozumler",
    },
};
export default function Page() {
    return (<InnerPage label="Çözümler" title="İşinizi anlıyoruz." accent="Düzenini birlikte kuruyoruz." description="Her sektörün ritmi farklı. Kendi iş alanınızı seçin; ürünün sizin operasyonunuzla nerede buluştuğunu keşfedin."><section className={s.content}><div className={s.container}><SectorCatalog /><div className={s.sectionHead}><div><span className={s.eyebrow}>SEKTÖRÜNÜZDEN BAŞLAYAN BİR YOL HARİTASI</span><h2>Önce işinizi dinliyoruz.</h2></div><p>Hazır bir kapsam dayatmak yerine, mevcut süreçlerinizi ve önceliklerinizi birlikte değerlendiriyoruz.</p></div><div className={s.valueGrid}>{[{ title: "İhtiyacı anlayalım", text: "Ekibinizin günlük akışını, darboğazları ve büyüme hedeflerini konuşalım." }, { title: "Akışı birlikte görelim", text: "İlgili modülleri, sizin işinize yakın örnek bir süreç üzerinden inceleyelim." }, { title: "Geçişi planlayalım", text: "Veri aktarımı, kullanıcılar ve kurulum kapsamı için net bir başlangıç belirleyelim." }].map((item, i) => <article key={item.title}><span>0{i + 1}</span><h3>{item.title}</h3><p>{item.text}</p></article>)}</div></div></section></InnerPage>);
}
