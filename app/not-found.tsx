import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowLeft, Home, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 bg-[#e2f1f9] text-[#070d1c] flex flex-col justify-center items-center py-20 px-4 sm:px-6">
        <div className="max-w-xl w-full text-center space-y-6">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-[#070d1c] text-white shadow-xl shadow-slate-900/10 mb-2">
            <Compass className="w-10 h-10 text-[#1992d1] animate-pulse" />
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-rose-500/10 text-rose-600 border border-rose-500/20 text-xs font-bold uppercase tracking-wider">
            Hata Kodu: 404
          </span>

          <h1 className="text-3xl sm:text-5xl font-black text-[#070d1c] tracking-tight">
            Aradığınız Sayfa Bulunamadı
          </h1>

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Ulaşmaya çalıştığınız sayfa taşınmış, silinmiş veya bağlantı adresi değişmiş olabilir.
            Aşağıdaki bağlantıları kullanarak ana sayfaya dönebilir veya diğer bölümleri keşfedebilirsiniz.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
            <Link
              href="/"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#070d1c] text-white font-bold text-sm shadow-md hover:bg-slate-800 transition"
            >
              <Home className="w-4 h-4" />
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/moduller"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#070d1c] font-bold text-sm border border-slate-200 shadow-sm hover:bg-slate-50 transition"
            >
              <ArrowLeft className="w-4 h-4 rotate-180" />
              Tüm Modülleri İncele
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
