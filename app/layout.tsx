import type { Metadata } from "next";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import styles from "./page.module.css";
import PageTop from "./_components/PageTop";
import { Noto_Sans_JP } from "next/font/google";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";

export const metadata: Metadata = {
  metadataBase: new URL("https://corporate-site-copy.vercel.app"),
  title: {
    template: "%s | 企業サイト",
    default: "企業サイト",
  },
  description:
    "無料コーディング練習所の企業サイトをNext.jsで作成したサイトです。",
  openGraph: {
    title: "企業サイト",
    description:
      "無料コーディング練習所の企業サイトをNext.jsで作成したサイトです。",
    images: ["/ogp.png"],
  },
  alternates: {
    canonical: "https://corporate-site-copy.vercel.app",
  },
};

config.autoAddCss = false;

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-family-base",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={notoSansJP.variable}>
      <body>
        <div className="layout">
          <Header />
          <main className="content">{children}</main>
          <Footer />
          <div className={styles.pageTop}>
            <PageTop />
          </div>
        </div>
      </body>
    </html>
  );
}
