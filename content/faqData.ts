export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const FAQ_DATA: FaqItem[] = [
  {
    id: "faq-1",
    question: "Erpovy kimler için tasarlandı?",
    answer:
      "Satış, finans, stok, üretim ve ekip süreçlerini ortak bir yapı içinde takip etmek isteyen işletmeler için modüler bir ERP yaklaşımı sunar. Uygun kullanım kapsamını işletmenizin ihtiyaçlarına göre değerlendirebiliriz.",
  },
  {
    id: "faq-2",
    question: "Bütün modülleri kullanmak zorunda mıyım?",
    answer:
      "Erpovy modüler bir yapıya sahiptir. Kullanılacak modüller ve ticari kapsam, ihtiyaç değerlendirmesinde netleştirilir.",
  },
  {
    id: "faq-3",
    question: "Mevcut verilerimizi aktarabilir miyiz?",
    answer:
      "Veri aktarımının kapsamı, mevcut dosyalarınızın ve kullandığınız sistemin yapısına bağlıdır. Demo talebinizde veri aktarımı ihtiyacınızı belirtebilirsiniz.",
  },
  {
    id: "faq-4",
    question: "Hangi sistemlerle entegre olabilir?",
    answer:
      "Bağlantı seçenekleri kullanılan sisteme ve yapılandırmaya göre değerlendirilir. İhtiyaç duyduğunuz pazaryeri, e-ticaret veya diğer bağlantıları demo görüşmesinde paylaşabilirsiniz.",
  },
  {
    id: "faq-5",
    question: "Ekibimiz için farklı yetkiler tanımlanabilir mi?",
    answer:
      "Kullanıcı yetkilendirme yapısı üzerinden çalışma kapsamı düzenlenebilir. İhtiyacınız olan rol ve erişim senaryolarını demoda inceleyebilirsiniz.",
  },
  {
    id: "faq-6",
    question: "Fiyatlandırma nasıl belirleniyor?",
    answer:
      "Modül ve kullanım ihtiyaçlarınız değerlendirildikten sonra size uygun ticari kapsam paylaşılır.",
  },
  {
    id: "faq-7",
    question: "Demoda neler göreceğim?",
    answer:
      "İşletmenizin önceliklerine göre ilgili modülleri ve örnek iş akışlarını inceleyebilirsiniz. Bu sayfadaki ürün görselleri temsili veriler içerir.",
  },
];
