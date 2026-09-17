import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  alternates: {
    canonical: "/",
  },
  title: siteConfig.title,
  description: siteConfig.description,
  icons: {
    icon: siteConfig.favicon,
    apple: siteConfig.favicon,
  },
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    siteName: siteConfig.name,
    locale: "tr_TR",
    type: "website",
  },
  verification: {
    google: "0OWX5ykprHZwXA4F26sVsZ5onERPJaOBwY1TU2MdEh0",
    other: {
      "seovy-verification": "seovy-site-verification=z8EKJXBoIWtyUOta77HBKDQhqns680wV",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="google-site-verification" content="0OWX5ykprHZwXA4F26sVsZ5onERPJaOBwY1TU2MdEh0" />
        <meta name="seovy-verification" content="seovy-site-verification=z8EKJXBoIWtyUOta77HBKDQhqns680wV" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&subset=latin,latin-ext&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#e2f1f9] text-[#070d1c] antialiased selection:bg-[#1992d1] selection:text-white">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#070d1c] focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none"
        >
          Ana içeriğe atla
        </a>
        <div id="main-content" className="flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
