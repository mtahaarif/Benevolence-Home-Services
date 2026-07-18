import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/site-shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

// GLOBAL SEO ENGINE: Resolves missing canonicals, OG tags, and Twitter audit warnings instantly
export const metadata: Metadata = {
  metadataBase: new URL("https://www.benevolencehomeservices.com"),
  alternates: {
    canonical: "./", // Instructs Next.js to dynamically render absolute canonical URLs for every subpage path
  },
  title: {
    default: "Benevolence Home Services and Staffing Agency | Home Care in Westchester, IL",
    template: "%s | Benevolence Home Services and Staffing Agency",
  },
  description:
    "Benevolence Home Services and Staffing Agency is a nurse-led, faith-based home care agency committed to compassionate, non-medical support for seniors and families across Cook, DuPage, Kane, Lake, and Will Counties.",
  keywords: [
    "home care Westchester IL",
    "senior staffing agency Chicago suburbs",
    "nurse-led home care",
    "companionship for seniors",
    "personal care assistance",
    "healthcare staffing Illinois"
  ],
  openGraph: {
    title: "Benevolence Home Services and Staffing Agency",
    description: "Nurse-led, faith-based home care and professional staffing options providing premium personal care, companionship, and clinical consistency.",
    url: "https://www.benevolencehomeservices.com",
    siteName: "Benevolence Home Services and Staffing Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/footer-logo.png",
        width: 800,
        height: 600,
        alt: "Benevolence Home Services and Staffing Agency Corporate Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benevolence Home Services and Staffing Agency",
    description: "Premium nurse-led home care and healthcare staffing solutions across five Chicagoland counties.",
    images: ["/footer-logo.png"],
  },
  icons: {
    icon: "/footer-logo.png",
    shortcut: "/footer-logo.png",
    apple: "/footer-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans bg-slate-50 text-slate-900">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}