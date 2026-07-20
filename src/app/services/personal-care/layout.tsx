import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Hits the exact length requirement. layout.tsx will append " | Benevolence Home Services".
  title: 'In-Home Personal Care Services',
  
  // OPTIMIZATION: 153 characters. Captures strong local keywords without truncation.
  description: 'Benevolence Home Services provides dignified in-home personal care assistance in Westchester, IL, ensuring comfort, safety, and independence for seniors.',
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/services/personal-care',
  },
  
  keywords: [
    "In-Home Personal Care Assistance",
    "Personal care for seniors Westchester IL",
    "Bathing and grooming assistance Chicagoland",
    "Senior hygiene care Cook County",
    "Mobility assistance DuPage County",
    "Veterans care Westchester"
  ],
  
  openGraph: {
    title: "In-Home Personal Care Services | Benevolence Home Services",
    description: "Dignified in-home personal care assistance for seniors and veterans in Westchester, IL.",
    url: "https://www.benevolencehomeservices.com/services/personal-care",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2411535922U62t38i.webp", // Specific Hero Image for this service
        width: 1200,
        height: 630,
        alt: "Caregiver providing professional personal care support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Home Personal Care Services | Benevolence Home Services",
    description: "Dignified in-home personal care assistance for seniors in Westchester, IL.",
    images: ["/nh-2411535922U62t38i.webp"],
  }
};

export default function PersonalCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}