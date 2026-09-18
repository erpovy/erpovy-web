"use client";
import { useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, CheckCircle, AlertCircle } from "lucide-react";
import s from "./InnerPages.module.css";
export function InquiryForm({ mode }: {
    mode: "demo" | "contact";
}) {
    const params = useSearchParams();
    const context = [params.get("paket"), params.get("modul"), params.get("sektor")].filter(Boolean).join(" · ");
    const [pending, setPending] = useState(false);
    const [status, setStatus] = useState<{
        type: "success" | "error";
        message: string;
    } | null>(null);
    async function submit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        if (pending)
            return;
        const form = event.currentTarget;
        const data = new FormData(form);
        setPending(true);
        setStatus(null);
        try {
            const response = await fetch("/mail.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mode, fullName: data.get("fullName"), email: data.get("email"), companyName: data.get("companyName"), phone: data.get("phone"), primaryNeed: data.get("primaryNeed"), note: data.get("note"), context, honeypot: data.get("contact_fax") }),
            });
            if (!response.headers.get("content-type")?.includes("application/json"))
                throw new Error("unavailable");
            const result = await response.json();
            if (!response.ok || !result.success) {
                setStatus({ type: "error", message: result.error || "Talebiniz gönderilemedi. Lütfen tekrar deneyin." });
                return;
            }
            setStatus({ type: "success", message: "Talebiniz alındı. Paylaştığınız iletişim bilgileri üzerinden size ulaşacağız." });
            form.reset();
        }
        catch {
            setStatus({ type: "error", message: "Talebiniz şu anda gönderilemedi. Bilgileriniz formda duruyor; tekrar deneyebilir veya info@erpovy.com adresine yazabilirsiniz." });
        }
        finally {
            setPending(false);
        }
    }
    return <div className={s.formPanel}><span className={s.eyebrow}>{mode === "demo" ? "SİZE ÖZEL BİR GÖRÜŞME" : "DOĞRUDAN İLETİŞİM"}</span><h2>{mode === "demo" ? "İşinizi biraz tanıyalım." : "Sizi dinliyoruz."}</h2><p>{mode === "demo" ? "Bilgilerinizi bırakın, görüşmenin odağını birlikte belirleyelim." : "Sorunuzu ve ihtiyacınızı paylaşın; doğru konudan başlayalım."}</p>
    {context && <div className={s.context}><CheckCircle size={17}/>{context}</div>}
    {status && <div role={status.type === "error" ? "alert" : "status"} className={status.type === "error" ? s.error : s.success}>{status.type === "error" ? <AlertCircle size={20}/> : <CheckCircle size={20}/>}<span>{status.message}</span></div>}
    <form onSubmit={submit} aria-busy={pending}><fieldset disabled={pending} className={s.formFields}><div className={s.formGrid}>
      <label>Adınız soyadınız <span>*</span><input name="fullName" autoComplete="name" placeholder="Ad Soyad" required maxLength={120}/></label>
      <label>İş e-postanız <span>*</span><input name="email" type="email" autoComplete="email" placeholder="ad@sirketiniz.com" required maxLength={160}/></label>
      <label>Şirket adı {mode === "demo" ? <span>*</span> : <small>İsteğe bağlı</small>}<input name="companyName" autoComplete="organization" placeholder="Şirketiniz" required={mode === "demo"} maxLength={160}/></label>
      <label>Telefon <small>İsteğe bağlı</small><input name="phone" type="tel" autoComplete="tel" placeholder="05XX XXX XX XX" maxLength={30}/></label>
    </div><label>{mode === "demo" ? "Öncelikli ihtiyacınız" : "Konu"}<select name="primaryNeed" defaultValue={mode === "demo" ? "Demo Talebi" : "Genel Bilgi"}>{["Demo Talebi", "Genel Bilgi", "Fiyatlandırma", "Finans", "Satış", "Stok ve Depo", "Üretim", "Veri Aktarımı", "Sektörel Çözüm", "Teknik Destek", "Diğer"].map(value => <option key={value}>{value}</option>)}</select></label>
    <label>{mode === "demo" ? "Görüşmede neye odaklanalım?" : "Mesajınız"} {mode === "contact" && <span>*</span>}<textarea name="note" rows={4} placeholder="İşletmenizi ve öncelikli ihtiyacınızı kısaca anlatın…" required={mode === "contact"} maxLength={4000}/></label>
    <input name="contact_fax" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className={s.honeypot}/>
    <p className={s.privacy}>İletişim bilgilerinizin işlenmesine ilişkin <Link href="/kvkk/">KVKK aydınlatma metnini</Link> inceleyebilirsiniz.</p>
    <button type="submit" className={s.primary}>{pending ? "Gönderiliyor…" : mode === "demo" ? "Demo görüşmesi talep et" : "Mesajı gönder"}<ArrowUpRight size={18}/></button>
    </fieldset></form>
  </div>;
}
