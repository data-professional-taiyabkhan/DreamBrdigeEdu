import type { Metadata } from "next";
import { DM_Serif_Display, Outfit } from "next/font/google";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const dmSerif = DM_Serif_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "DreamBridge Edu — Your Bridge to Global Education",
    template: "%s | DreamBridge Edu",
  },
  description:
    "Expert overseas education consultants helping students study abroad in the UK, Canada, Germany, Australia & more. Scholarship support, visa guidance, and end-to-end placement services.",
  keywords: [
    "study abroad consultants",
    "overseas education consultants",
    "scholarships for international students",
    "study in UK",
    "study in Canada",
    "study in Germany",
    "study in Australia",
    "study in New Zealand",
    "international education consultancy",
    "university placement services",
  ],
  openGraph: {
    title: "DreamBridge Edu — Your Bridge to Global Education",
    description:
      "Expert overseas education consultants. 500+ students placed across 40+ countries with a 95% visa success rate.",
    type: "website",
    locale: "en_GB",
    url: "https://dreambridgeedu.com",
    siteName: "DreamBridge Edu",
  },
  twitter: {
    card: "summary_large_image",
    title: "DreamBridge Edu — Your Bridge to Global Education",
    description:
      "Expert overseas education consultants. Scholarship & visa support for students worldwide.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${dmSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans overflow-x-hidden">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
