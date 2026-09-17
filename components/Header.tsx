"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, ArrowUpRight, Menu, X } from "lucide-react";
import { siteConfig } from "@/lib/siteConfig";
import s from "./Header.module.css";

const productLinks = [
  { label: "Ana sayfa", href: "/" },
  { label: "Çözümler", href: "/cozumler/" },
  { label: "Modüller", href: "/moduller/" },
  { label: "Fiyatlandırma", href: "/fiyatlandirma/" },
];
const companyLinks = [
  { label: "Hakkımızda", href: "/hakkimizda/" },
  { label: "Sıkça sorulan sorular", href: "/sss/" },
  { label: "İletişim", href: "/iletisim/" },
];
const legalLinks = [
  { label: "Gizlilik", href: "/gizlilik-politikasi/" },
  { label: "Kullanım koşulları", href: "/kullanim-kosullari/" },
  { label: "KVKK", href: "/kvkk/" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const header = useRef<HTMLElement>(null);
  const isActive = (href: string) => pathname.replace(/\/$/, "") === href.replace(/\/$/, "");

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const onFocus = (event: FocusEvent) => {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    };
    const wideScreen = window.matchMedia("(min-width: 961px)");
    const onResize = () => { if (wideScreen.matches) setOpen(false); };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("pointerdown", onPointerDown);
    window.addEventListener("focusin", onFocus);
    wideScreen.addEventListener("change", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("pointerdown", onPointerDown);
      window.removeEventListener("focusin", onFocus);
      wideScreen.removeEventListener("change", onResize);
    };
  }, [open]);

  return (
    <header ref={header} className={s.header}>
      <div className={s.topbar}>
        <div className={s.topbarInner}>
          <span>İşletmenizin tamamı. Tek bir çalışma alanı.</span>
          <nav aria-label="Kurumsal sayfalar" className={s.companyNav}>
            {companyLinks.map(link => (
              <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
      <div className={s.mainbar}>
        <Link href="/" aria-label="Erpovy ana sayfa" className={s.logo} onClick={() => setOpen(false)}>
          <Image src={siteConfig.logo} alt="Erpovy" width={145} height={41} priority className={s.brandImage} />
        </Link>
        <nav aria-label="Ana gezinme" className={s.productNav}>
          {productLinks.map(link => (
            <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined}>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={s.actions}>
          <a href={siteConfig.loginUrl} target="_blank" rel="noopener noreferrer" className={s.login}>
            Giriş yap <ArrowUpRight size={15} />
          </a>
          <a href="https://app.erpovy.com/register" target="_blank" rel="noopener noreferrer" className={s.demo}>
            14 gün ücretsiz deneme <ArrowRight size={17} />
          </a>
        </div>
        <button ref={toggle} type="button" className={s.toggle} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Menüyü kapat" : "Menüyü aç"} onClick={() => setOpen(value => !value)}>
          <span>{open ? "Kapat" : "Menü"}</span>{open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <div id="mobile-navigation" className={s.mobilePanel}>
          <nav aria-label="Mobil gezinme" className={s.mobileNav}>
            <span className={s.groupLabel}>ÜRÜN & ÇÖZÜMLER</span>
            {productLinks.map(link => (
              <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}<ArrowUpRight size={17} />
              </Link>
            ))}
            <span className={s.groupLabel}>ERPOVY HAKKINDA</span>
            {companyLinks.map(link => (
              <Link key={link.href} href={link.href} aria-current={isActive(link.href) ? "page" : undefined} onClick={() => setOpen(false)}>
                {link.label}<ArrowUpRight size={17} />
              </Link>
            ))}
          </nav>
          <div className={s.mobileActions}>
            <a href="https://app.erpovy.com/register" target="_blank" rel="noopener noreferrer" className={s.demo} onClick={() => setOpen(false)}>
              14 gün ücretsiz deneme <ArrowRight size={17} />
            </a>
            <a href={siteConfig.loginUrl} target="_blank" rel="noopener noreferrer" className={s.login} onClick={() => setOpen(false)}>
              Giriş yap <ArrowUpRight size={15} />
            </a>
          </div>
          <nav aria-label="Yasal sayfalar" className={s.legalNav}>
            {legalLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>{link.label}</Link>)}
          </nav>
        </div>
      )}
    </header>
  );
}
