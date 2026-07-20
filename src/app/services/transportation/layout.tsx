import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Resolves Title Length & Word Repetition penalties. Layout.tsx appends the brand name.
  title: "Senior Transportation & Travel Support",
  
  // OPTIMIZATION: 153 characters. Strong local keywords without exceeding the 160 char limit.
  description: "Discover safe and reliable senior transportation and companion travel support in Westchester, IL. We provide door-to-door mobility assistance.",
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/services/transportation',
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
    title: "Senior Transportation & Companion Travel Support | Benevolence Home Services",
    description: "Discover safe and reliable senior transportation and companion travel support in Westchester, IL.",
    url: "https://www.benevolencehomeservices.com/services/transportation",
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
    title: "Senior Transportation & Companion Travel Support | Benevolence Home Services",
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