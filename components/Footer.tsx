import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#070d1c] text-white border-t border-white/10 pt-16 pb-12 text-sm">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <Link
              href="/"
              className="inline-block relative w-32 h-8 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1992d1] rounded"
            >
              <Image
                src={siteConfig.logo}
                alt="Erpovy"
                fill
                className="object-contain object-left"
              />
            </Link>
            <p className="text-slate-300 text-sm max-w-sm leading-relaxed">
              İşiniz büyüsün. Karmaşa değil. Satış, finans, stok ve ekip süreçlerinizi tek merkezde toplayan modüler ERP.
            </p>
            <p className="text-xs text-slate-500">
              Türk KOBİ’leri ve operasyonel ekipler için tasarlanmış bağımsız iş yönetimi platformu.
            </p>
          </div>

          {/* Col 2: Product Navigation */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Ürün & Çözümler
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/#hikaye" className="hover:text-white transition-colors">
                  Ürünü Keşfet
                </a>
              </li>
              <li>
                <a href="/#sektorler" className="hover:text-white transition-colors">
                  Sektörel Çözümler
                </a>
              </li>
              <li>
                <a href="/moduller" className="hover:text-white transition-colors">
                  Modüller
                </a>
              </li>
              <li>
                <a href="/fiyatlandirma" className="text-sky-300 hover:text-white transition-colors font-medium">
                  Fiyatlandırma
                </a>
              </li>
              <li>
                <a href="/demo" className="text-[#1992d1] hover:underline transition-colors font-semibold">
                  Canlı Demo İste
                </a>
              </li>
              <li>
                <a href="/sss" className="hover:text-white transition-colors">
                  Sıkça Sorulanlar (SSS)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate & Legal */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Kurumsal & Yasal
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </a>
              </li>
              <li>
                <a href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </a>
              </li>
              <li>
                <a href="/gizlilik-politikasi" className="hover:text-white transition-colors">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="/kullanim-kosullari" className="hover:text-white transition-colors">
                  Kullanım Koşulları
                </a>
              </li>
              <li>
                <a href="/kvkk" className="hover:text-white transition-colors">
                  KVKK Aydınlatma Metni
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: ERP Direct Login & App */}
          <div>
            <h3 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
              Uygulama
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <li>
                <a
                  href={siteConfig.loginUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-200 hover:text-white transition-colors"
                >
                  <span>Erpovy Giriş Yap</span>
                  <span className="material-symbols-outlined text-sm">open_in_new</span>
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.appUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  app.erpovy.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright & legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} Erpovy. Tüm hakları saklıdır.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a href="/gizlilik-politikasi" className="hover:text-slate-300">Gizlilik</a>
            <span>•</span>
            <a href="/kullanim-kosullari" className="hover:text-slate-300">Kullanım Şartları</a>
            <span>•</span>
            <a href="/kvkk" className="hover:text-slate-300">KVKK</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
