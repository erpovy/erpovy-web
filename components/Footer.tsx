import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/siteConfig";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#142f3d] text-white border-t border-white/10 pt-10 sm:pt-14 pb-8 sm:pb-12 text-sm">
      <div className="max-w-[1240px] w-[calc(100%-40px)] md:w-[calc(100%-64px)] xl:w-[calc(100%-96px)] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 pb-8 sm:pb-12 border-b border-white/10">
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
                <Link href="/#hikaye" className="hover:text-white transition-colors">
                  Ürünü Keşfet
                </Link>
              </li>
              <li>
                <Link href="/cozumler/" className="hover:text-white transition-colors">
                  Sektörel Çözümler
                </Link>
              </li>
              <li>
                <Link href="/moduller" className="hover:text-white transition-colors">
                  Modüller
                </Link>
              </li>
              <li>
                <Link href="/fiyatlandirma" className="text-sky-300 hover:text-white transition-colors font-medium">
                  Fiyatlandırma
                </Link>
              </li>
              <li>
                <Link href="/demo" className="text-[#1992d1] hover:underline transition-colors font-semibold">
                  Canlı Demo İste
                </Link>
              </li>
              <li>
                <Link href="/sss/" className="hover:text-white transition-colors">
                  Sıkça Sorulanlar (SSS)
                </Link>
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
                <Link href="/hakkimizda" className="hover:text-white transition-colors">
                  Hakkımızda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="hover:text-white transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/gizlilik-politikasi" className="hover:text-white transition-colors">
                  Gizlilik Politikası
                </Link>
              </li>
              <li>
                <Link href="/kullanim-kosullari" className="hover:text-white transition-colors">
                  Kullanım Koşulları
                </Link>
              </li>
              <li>
                <Link href="/kvkk" className="hover:text-white transition-colors">
                  KVKK Aydınlatma Metni
                </Link>
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
            <Link href="/gizlilik-politikasi" className="hover:text-slate-300">Gizlilik</Link>
            <span>•</span>
            <Link href="/kullanim-kosullari" className="hover:text-slate-300">Kullanım Şartları</Link>
            <span>•</span>
            <Link href="/kvkk" className="hover:text-slate-300">KVKK</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
