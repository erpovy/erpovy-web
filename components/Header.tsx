"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/lib/siteConfig";
import {
  Sparkles,
  Layers,
  Receipt,
  Headphones,
  ArrowRight,
  LogIn,
  UserPlus,
  Menu,
  X,
} from "lucide-react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    { label: "Çözümler", href: "/cozumler/", icon: Layers },
    { label: "Modüller", href: "/moduller/", icon: Sparkles },
    { label: "Fiyatlandırma", href: "/fiyatlandirma/", icon: Receipt },
    { label: "İletişim", href: "/iletisim/", icon: Headphones },
  ];

  const isActive = (href: string) => {
    if (!pathname) return false;
    const cleanHref = href.replace(/\/$/, "");
    const cleanPath = pathname.replace(/\/$/, "");
    return cleanPath === cleanHref;
  };

  return (
    <header
      className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070d1c]/95 backdrop-blur-xl border-b border-white/10 shadow-xl shadow-black/20"
          : "bg-[#070d1c] border-b border-white/10 shadow-md"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1] rounded-lg p-1 transition-opacity hover:opacity-90 shrink-0"
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

          {/* Center Navigation Island (Desktop) */}
          <nav
            className="hidden md:flex items-center gap-1.5 lg:gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/10 shadow-inner"
            aria-label="Ana Gezinti"
          >
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    active
                      ? "bg-[#1992d1] text-white shadow-md shadow-[#1992d1]/30 font-semibold"
                      : "text-slate-300 hover:text-white hover:bg-white/[0.06]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Buttons (Desktop) */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.erpovy.com/register"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-slate-300 hover:text-white px-4 py-2 rounded-xl hover:bg-white/[0.06] transition-colors"
            >
              Kayıt ol
            </a>

            <a
              href="https://app.erpovy.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1992d1] hover:bg-[#1582bc] text-white font-bold text-sm shadow-md shadow-[#1992d1]/25 hover:shadow-lg hover:shadow-[#1992d1]/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer"
            >
              <span>Giriş yap</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex md:hidden items-center">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/[0.05] border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-[#1992d1] transition-all"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Menüyü kapat" : "Menüyü aç"}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 top-18 sm:top-20 z-50 bg-[#070d1c]/98 backdrop-blur-2xl border-t border-white/10 flex flex-col p-6 md:hidden animate-in fade-in slide-in-from-top-4 duration-200 overflow-y-auto"
          role="dialog"
          aria-modal="true"
          aria-label="Mobil Gezinti Menüsü"
        >
          <div className="flex flex-col gap-2 mb-8">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider px-3 mb-1">
              Menü
            </span>
            {navItems.map((item) => {
              const Icon = item.icon;
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-base font-semibold transition-all ${
                    active
                      ? "bg-[#1992d1] text-white shadow-md shadow-[#1992d1]/30"
                      : "text-slate-200 hover:text-white hover:bg-white/[0.05]"
                  }`}
                >
                  <Icon className={`w-5 h-5 ${active ? "text-white" : "text-sky-400"}`} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Mobile Auth Actions */}
          <div className="flex flex-col gap-3 mt-auto pt-6 border-t border-white/10">
            <a
              href="https://app.erpovy.com/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-[#1992d1] text-white font-bold text-sm shadow-lg shadow-[#1992d1]/20 hover:bg-[#1582bc] transition-all"
            >
              <LogIn className="w-4 h-4" />
              Giriş yap
            </a>
            <a
              href="https://app.erpovy.com/register"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl bg-white/[0.05] border border-white/15 text-slate-200 font-semibold text-sm hover:bg-white/10 transition-all"
            >
              <UserPlus className="w-4 h-4" />
              Kayıt ol
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
