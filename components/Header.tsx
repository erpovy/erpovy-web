"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";
import { ButtonWithIcon } from "@/components/ui/button-with-icon";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [mobileMenuOpen]);

  const navItems = [
    { label: "Çözümler", href: "/#sektorler" },
    { label: "Modüller", href: "/moduller" },
    { label: "Fiyatlandırma", href: "/fiyatlandirma" },
    { label: "İletişim", href: "/iletisim" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 z-50 bg-[#070d1c] border-b border-white/10 text-white shadow-md">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1] rounded p-1 transition-opacity hover:opacity-90"
            aria-label="Erpovy Ana Sayfası"
          >
            <div className="relative w-32 h-8 sm:w-36 sm:h-9">
              <Image
                src={siteConfig.logo}
                alt="Erpovy"
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-5 lg:gap-7"
            aria-label="Ana Gezinti"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-slate-300 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1] rounded px-2 py-1"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href={siteConfig.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 hover:text-white px-3 py-1.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1]"
            >
              Giriş yap
            </a>
            <ButtonWithIcon
              asLink
              href="/demo"
              variant="brand"
              size="sm"
            >
              Canlı Demo İste
            </ButtonWithIcon>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/60 focus:outline-none focus:ring-2 focus:ring-[#1992d1]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              <span className="material-symbols-outlined text-2xl">
                {mobileMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-16 z-50 bg-[#070d1c] border-t border-white/10 flex flex-col p-6 md:hidden animate-in fade-in duration-150"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil Gezinti Menüsü"
        >
          <nav className="flex flex-col gap-4 mb-8" aria-label="Mobil Menü">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-medium text-slate-200 hover:text-[#1992d1] py-2 border-b border-white/5 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/10">
            <a
              href={siteConfig.loginUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-md border border-white/15 text-slate-200 font-medium hover:bg-slate-800 transition-colors"
            >
              Giriş yap
            </a>
            <ButtonWithIcon
              asLink
              href="/demo"
              variant="brand"
              size="md"
              className="w-full justify-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Canlı Demo İste
            </ButtonWithIcon>
          </div>
        </div>
      )}
    </header>
  );
}
