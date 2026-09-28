import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Newsreader } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "DOMMY — Independent Global Journalism & Investigations",
  description:
    "DOMMY is an authoritative global news organization providing daily verified reporting on international diplomacy, economic policy, conflict intelligence, technology infrastructure, and investigative journalism.",
  keywords: [
    "DOMMY",
    "breaking news",
    "world news",
    "investigative journalism",
    "international diplomacy",
    "conflict reporting",
    "cybersecurity news",
    "global markets",
    "technology policy",
  ],
  authors: [{ name: "DOMMY Editorial Board" }],
  openGraph: {
    title: "DOMMY — Independent Global Journalism & Investigations",
    description:
      "Verified field reporting, foreign correspondence, and investigative series from DOMMY news bureaus.",
    type: "website",
    locale: "en_US",
    siteName: "DOMMY",
  },
  twitter: {
    card: "summary_large_image",
    title: "DOMMY — Independent Global Journalism & Investigations",
    description:
      "Verified field reporting, foreign correspondence, and investigative series from DOMMY news bureaus.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${newsreader.variable} scroll-smooth`}>
      <body className="min-h-screen bg-white text-neutral-900 font-sans flex flex-col antialiased selection:bg-red-900 selection:text-white">
        <Header />
        <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
