import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Resolves Title Length & Word Repetition. Fits perfectly under the 580 pixel limit.
  title: 'Senior Companion Care Services',
  
  // OPTIMIZATION: 153 characters. Strongly localized and fits safely under the 160-character truncation limit.
  description: 'Discover compassionate senior companion care services in Westchester, IL. We provide meaningful social engagement and assistance across Chicagoland.',
  
  // OPTIMIZATION: Resolves the "Canonical link points to a different page" error
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/services/companionship',
  },
  
  // OPTIMIZATION: High-value local keyword matrix specifically targeting companionship intent
  keywords: [
    "Senior Companion Care Services in Westchester IL",
    "Elderly companionship Cook County",
    "In-home companion DuPage County",
    "Caregiver companionship Illinois",
    "Social engagement for seniors",
    "Veterans companion care"
  ],
  
  openGraph: {
    title: "Senior Companion Care Services | Benevolence Home Services",
    description: "Discover compassionate senior companion care services in Westchester, IL.",
    url: "https://www.benevolencehomeservices.com/services/companionship",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-23828104413Umet879.webp", // Specific Hero Image for this service
        width: 1200,
        height: 630,
        alt: "Caregiver engaging in friendly conversation with a senior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Companion Care Services | Benevolence Home Services",
    description: "Discover compassionate senior companion care services in Westchester, IL.",
    images: ["/nh-23828104413Umet879.webp"],
  }
};

export default function CompanionshipLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}