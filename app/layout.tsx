import Footer from "@/components/layout/Footer/Footer";
import Navbar from "@/components/layout/Navbar/Navbar";
import Schema from "@/components/seo/Schema";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const janna = localFont({
  src: [
    {
      path: "../public/fonts/janna/Janna-LT-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/janna/Janna-LT-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-janna",
  display: "swap",
});



export const metadata: Metadata = {
  title: {
    default: "مكتب حسن محمد فقيه للاستشارات الهندسية",
    template: "%s | مكتب حسن محمد فقيه",
  },
  description:
    "مكتب حسن محمد فقيه للاستشارات الهندسية يقدم حلولًا هندسية متكاملة تشمل التصميم المعماري، التخطيط العمراني، وإدارة المشاريع وفق أعلى معايير الجودة.",
  keywords: [
    "مكتب استشارات هندسية",
    "استشارات هندسية",
    "تصميم معماري",
    "إدارة مشاريع",
    "مكتب هندسي في السعودية",
    "التخطيط العمراني",
  ],
  authors: [{ name: "Hassan Mohammed Faqih" }],
  creator: "مكتب حسن محمد فقيه",
  publisher: "مكتب حسن محمد فقيه",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "مكتب حسن محمد فقيه للاستشارات الهندسية",
    description:
      "حلول هندسية مبتكرة ومستدامة في التصميم المعماري وإدارة المشاريع.",
    url: "https://www.fagih.com/",
    siteName: "مكتب حسن محمد فقيه",
    locale: "ar_SA",
    type: "website",
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={janna.variable}>
      <body>
        <Schema />
        <Navbar />
        <div className="bg-bg">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
