"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Search, X, Layers, ArrowRight } from "lucide-react";
import { MODULES_DATA, MODULE_CATEGORIES, type ModuleCategory } from "@/content/modulesData";
import { SECTORS_DATA } from "@/content/sectorsData";
import { PRICING_PLANS, DETAILED_MODULE_MATRIX } from "@/content/pricingData";
import s from "./InnerPages.module.css";
export function PricingDetails() {
    const [annual, setAnnual] = useState(true);
    return <>
    <div className={s.priceToolbar}><p>İhtiyacınız kadar başlayın. İşinizle birlikte genişletin.</p><div className={s.segment} aria-label="Fiyat gösterimi"><button aria-pressed={annual} onClick={() => setAnnual(true)}>Yıllık lisans</button><button aria-pressed={!annual} onClick={() => setAnnual(false)}>Aylık karşılığı</button></div></div>
    <div className={s.priceGrid}>{PRICING_PLANS.map((plan, index) => <article className={`${s.priceCard} ${index === 1 ? s.featured : ""}`} key={plan.id}>
      <div className={s.priceLabel}><span>0{index + 1} / {plan.tagline}</span>{index === 1 && <span>BÜYÜYEN EKİPLER</span>}</div>
      <h2>{plan.name.replace("Erpovy ", "")}</h2><p className={s.audience}>{["Temel finans, satış ve stok süreçlerini bir araya getiren işletmeler için.", "Birden fazla deposu, şubesi veya operasyon ekibi olan işletmeler için.", "Üretim ve kurumsal süreçlerini daha geniş kapsamda yöneten işletmeler için."][index]}</p>
      <div className={s.price}>{annual ? plan.annualPrice : new Intl.NumberFormat("tr-TR", { maximumFractionDigits: 0 }).format(plan.annualPriceMin / 12) + " TL"}<small>/ {annual ? "yıl" : "ay"}</small></div><p className={s.priceNote}>+ KDV · {plan.usersIncluded} kullanıcı dahil</p>
      <Link href={`/demo/?paket=${encodeURIComponent(plan.name)}`} className={index === 1 ? s.primary : s.outline}>Bu paketi görüşelim <ArrowUpRight size={18}/></Link>
      <div className={s.features}>{plan.features.map(feature => <span key={feature}><Check size={15}/>{feature}</span>)}</div>
      <div className={s.setup}><span>İLK KURULUM</span><p>{plan.setupCost}</p>{plan.additionalUserPrice && <small>Ek kullanıcı: {plan.additionalUserPrice}</small>}</div>
    </article>)}</div>
    <p className={s.finePrint}>Faturalandırma yıllıktır. Aylık tutarlar yıllık lisansın 12 aya bölünmüş yaklaşık karşılığıdır; aylık ödeme planı değildir. Kurulum bedelleri ayrıca uygulanır.</p>
    <div className={s.sectionHead}><div><span className={s.eyebrow}>AYRINTILARDA NETLİK</span><h2>Yan yana bakın.<br />İşinize göre karar verin.</h2></div><p>Modüller, kullanıcılar ve destek kapsamı.<br />Her paketin içeriği tek tabloda.</p></div>
    <div className={s.tableWrap} role="region" aria-label="Paket karşılaştırması, dar ekranda yatay kaydırılabilir" tabIndex={0}><table className={s.table}><caption>Erpovy paketlerinin özellik karşılaştırması</caption><thead><tr><th scope="col">Özellik ve kapsam</th><th scope="col">Standart</th><th scope="col">Professional</th><th scope="col">Enterprise</th></tr></thead><tbody>{DETAILED_MODULE_MATRIX.map(row => <tr key={row.name}><th scope="row"><small>{row.category}</small>{row.name}</th>{([row.standart, row.professional, row.enterprise]).map((value, i) => <td key={i}>{typeof value === "boolean" ? value ? <span className={s.included}><Check size={16}/><span className={s.srOnly}>Dahil</span></span> : <span aria-label="Dahil değil">—</span> : value}</td>)}</tr>)}</tbody></table></div>
  </>;
}
export function ModuleCatalog() {
    const [category, setCategory] = useState<ModuleCategory>("Tümü");
    const [query, setQuery] = useState("");
    const filtered = MODULES_DATA.filter(item => (category === "Tümü" || item.group === category) && `${item.title} ${item.description}`.toLocaleLowerCase("tr-TR").includes(query.toLocaleLowerCase("tr-TR")));
    return <div className={s.catalog}>
    <aside className={s.catalogAside}><span className={s.eyebrow}>İŞ ALANINIZI SEÇİN</span><div className={s.filters}>{MODULE_CATEGORIES.map(item => <button key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}<span>{item === "Tümü" ? MODULES_DATA.length : MODULES_DATA.filter(m => m.group === item).length}</span></button>)}</div><div className={s.asideNote}><Layers size={23}/><h3>Size göre bir bütün.</h3><p>İhtiyacınız olan modülleri birlikte belirleyelim.</p><Link href="/demo/">Birlikte planlayalım <ArrowUpRight size={16}/></Link></div></aside>
    <div><div className={s.search}><Search size={18}/><input aria-label="Modüllerde ara" placeholder="Bir modül veya ihtiyaç arayın…" value={query} onChange={e => setQuery(e.target.value)}/>{query && <button aria-label="Aramayı temizle" onClick={() => setQuery("")}><X size={16}/></button>}</div><p className={s.resultCount} aria-live="polite">{filtered.length} modül · {category}</p>
    <div className={s.moduleGrid}>{filtered.map(item => <article className={s.moduleCard} id={item.id} key={item.id}><div className={s.moduleMeta}><span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span><span>{item.isComingSoon ? "YAKINDA" : item.group}</span></div><h2>{item.title}</h2><p>{item.description}</p><Link href={`/demo/?modul=${encodeURIComponent(item.title)}`}>{item.isComingSoon ? "İhtiyacınızı paylaşın" : "Demoda inceleyin"}<ArrowUpRight size={17}/></Link></article>)}</div>
    {filtered.length === 0 && <div className={s.empty}><Search size={30}/><h2>Aradığınız modülü bulamadık.</h2><p>Başka bir kelime deneyin veya tüm modüllere göz atın.</p><button className={s.outline} onClick={() => { setQuery(""); setCategory("Tümü"); }}>Filtreleri temizle <ArrowRight size={16}/></button></div>}</div>
  </div>;
}
export function SectorCatalog() {
    const [selected, setSelected] = useState(SECTORS_DATA[0].id);
    const sector = SECTORS_DATA.find(item => item.id === selected)!;
    return <div className={s.sectorLayout}><div className={s.sectorMenu}>{SECTORS_DATA.map((item, i) => <button key={item.id} aria-pressed={selected === item.id} onClick={() => setSelected(item.id)}><span>0{i + 1}</span><strong>{item.title}</strong><ArrowUpRight size={19}/></button>)}</div><section className={s.sectorDetail} aria-live="polite"><div className={s.sectorSymbol}><span className="material-symbols-outlined" aria-hidden="true">{sector.icon}</span><span>{sector.isComingSoon ? "YAKINDA" : "SEKTÖRÜNÜZE UYGUN MODÜLLER"}</span></div><h2>{sector.title}</h2><p>{sector.description} İşletmenizin süreçlerini ve ekibinizin ihtiyaçlarını birlikte değerlendirerek uygun kapsamı belirleyelim.</p><div className={s.sectorModules}>{sector.focusModules.map(id => { const moduleItem = MODULES_DATA.find(m => m.id === id); return moduleItem ? <Link key={id} href={`/moduller/#${id}`}><Check size={15}/>{moduleItem.title}<ArrowUpRight size={15}/></Link> : null; })}</div><Link className={s.primary} href={`/demo/?sektor=${encodeURIComponent(sector.title)}`}>{sector.isComingSoon ? "İhtiyacınızı konuşalım" : "Bu akışı birlikte inceleyelim"}<ArrowUpRight size={18}/></Link><small className={s.finePrint}>Modül kapsamı ve kullanılabilirlik ihtiyaç değerlendirmesinde netleştirilir.</small></section></div>;
}
