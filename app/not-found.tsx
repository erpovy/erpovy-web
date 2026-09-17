import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import s from "@/components/InnerPages.module.css";
export default function NotFound() {
    return <><Header /><main className={s.page}><div className={s.notFound}><span>404</span><h1>Bu sayfa yerinde yok.</h1><p>Bağlantı değişmiş veya sayfa taşınmış olabilir. Ana sayfadan yeniden başlayabilirsiniz.</p><Link href="/" className={s.primary}>Ana sayfaya dön <ArrowUpRight size={18}/></Link></div></main><Footer /></>;
}
