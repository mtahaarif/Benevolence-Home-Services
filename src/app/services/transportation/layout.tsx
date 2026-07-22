import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION FIX: Shortened to fit under the strict 580px visual limit. 
  // "Senior Transportation & Travel | Benevolence Home Services" fits perfectly.
  title: "Senior Transportation & Travel",
  
  // OPTIMIZATION: 143 characters. Strong local keywords, perfectly under the 160 char limit.
  description: "Discover safe and reliable senior transportation and companion travel support in Westchester, IL. We provide door-to-door mobility assistance.",
  
  alternates: {
    // OPTIMIZATION FIX: Removed "www." to match the root domain configuration 
    // detected by the SEO crawler and prevent the canonical mismatch error.
    canonical: 'https://benevolencehomeservices.com/services/transportation',
  },
  
  // OPTIMIZATION: Keyword matrix targeting mobility and transportation care intent in local counties
  keywords: [
    "Senior transportation Westchester IL",
    "Elderly escort services Chicago",
    "Companion travel support Cook County",
    "Mobility assistance DuPage County",
    "Medical appointment transportation",
    "In-home care travel help Illinois"
  ],
  
  openGraph: {
    title: "Senior Transportation & Travel | Benevolence Home Services",
    description: "Discover safe and reliable senior transportation and companion travel support in Westchester, IL.",
    // OPTIMIZATION FIX: Removed "www." to match canonical structure.
    url: "https://benevolencehomeservices.com/services/transportation",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/transportation.jpg", // Specific Hero Image for this service
        width: 1200,
        height: 630,
        alt: "Safe physical mobility assistance and transit support for seniors",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Transportation & Travel | Benevolence Home Services",
    description: "Discover safe and reliable senior transportation and companion travel support in Westchester, IL.",
    images: ["/transportation.jpg"],
  }
};

export default function TransportationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}