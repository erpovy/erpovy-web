import type { Metadata } from "next";
import { InnerPage } from "@/components/InnerPage";
import { ModuleCatalog } from "@/components/InnerPageInteractive";
import s from "@/components/InnerPages.module.css";
export const metadata: Metadata = {
    title: "Erpovy Modülleri | Muhasebe, Finans, CRM, Stok ve WMS Depo",
    description: "Muhasebe, finans, satış, satın alma, WMS depo, üretim ve CRM modüllerini keşfedin. İhtiyacınıza uygun modülleri seçerek işletmenizi tek merkezden yönetin.",
    alternates: {
        canonical: "https://www.erpovy.com/moduller",
    },
};
export default function Page() {
    return (<InnerPage label="Modüller" title="Her işin bir parçası." accent="Hepsi aynı düzenin içinde." description="Finanstan depoya, satıştan üretime. İhtiyacınız olan modülleri keşfedin; işletmenize uygun çalışma alanını birlikte oluşturalım."><section className={s.content}><div className={s.container}><ModuleCatalog /></div></section></InnerPage>);
}
