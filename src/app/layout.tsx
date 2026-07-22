import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/site-shell";
import { GoogleTagManager } from '@next/third-parties/google';

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
    // Instructs Next.js to dynamically render absolute canonical URLs seamlessly
    canonical: "/", 
  },
  title: {
    // OPTIMIZED: Exactly 56 characters. Stays under the 580-pixel limit.
    default: "Benevolence Home Services | Home Care in Westchester, IL",
    // OPTIMIZED: Shortened template prevents the "Word Repetition" and "Title too long" penalties on subpages
    template: "%s | Benevolence Home Services",
  },
  // OPTIMIZED: 151 characters. Safely under the 160 character / 1000 pixel cutoff limit.
  description:
    "Benevolence Home Services provides nurse-led, compassionate home care and staffing solutions in Westchester, IL, serving seniors across Chicagoland.",
  // OPTIMIZED: Highly expanded matrix targeting your specific services and local county territories
  keywords: [
    "Home care in Westchester IL",
    "Nurse-led home care agency",
    "Senior companion care Chicagoland",
    "In-home senior care Cook County",
    "Private duty nursing Illinois",
    "Alzheimer's and dementia care",
    "Respite care for family caregivers",
    "Healthcare staffing agency Illinois",
    "Non-medical home care DuPage County",
    "Elderly care services Will County",
    "Faith-based senior care",
    "Live-in caregiver Chicago suburbs",
    "Light housekeeping for seniors",
    "Post-hospital recovery care at home"
  ],
  openGraph: {
    title: "Benevolence Home Services | Nurse-Led Senior Care",
    description: "Nurse-led, faith-based home care and professional staffing options providing premium personal care, companionship, and clinical consistency.",
    url: "https://www.benevolencehomeservices.com",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/footer-logo.png",
        width: 800,
        height: 600,
        alt: "Benevolence Home Services Corporate Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benevolence Home Services | Nurse-Led Senior Care",
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
      {/* NOTE: Replace 'GTM-XXXXXXX' below with your actual Google Tag Manager container ID 
        when you are ready to track conversions and analytics.
      */}
      <GoogleTagManager gtmId="GTM-XXXXXXX" />
    </html>
  );
}