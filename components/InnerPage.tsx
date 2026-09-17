import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import s from "./InnerPages.module.css";
export function InnerPage({ label, title, accent, description, children, closing = true }: {
    label: string;
    title: string;
    accent: string;
    description: string;
    children: ReactNode;
    closing?: boolean;
}) {
    return <><Header /><main className={s.page}>
    <section className={s.hero}><div className={s.container}>
      <nav className={s.breadcrumb} aria-label="Sayfa yolu"><Link href="/">Ana sayfa</Link><ChevronRight size={12}/><span aria-current="page">{label}</span></nav>
      <div className={s.heroGrid}><div><span className={s.eyebrow}>ERPOVY / {label.toLocaleUpperCase("tr-TR")}</span><h1>{title}<br /><span>{accent}</span></h1></div><p>{description}</p></div>
    </div></section>
    {children}
    {closing && <section className={s.closing}><div className={`${s.container} ${s.closingGrid}`}><div><span className={s.eyebrow}>BİR SONRAKİ ADIMI BİRLİKTE ATALIM</span><h2>İşinize nasıl uyacağını<br />kendi gözünüzle görün.</h2></div><div><p>20 dakikalık, işletmenize özel bir ürün turu.</p><Link href="/demo/" className={s.primary}>Demoyu birlikte planlayalım <ArrowUpRight size={18}/></Link></div></div></section>}
  </main><Footer /></>;
}
export function QuestionList({ items }: {
    items: {
        question: string;
        answer: string;
    }[];
}) {
    return <div className={s.questions}>{items.map(item => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>;
}
