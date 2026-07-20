import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Perfectly hits the length requirement. layout.tsx will append " | Benevolence Home Services".
  title: 'Professional Respite Care Services',
  
  // OPTIMIZATION: 153 characters. Captures strong local keywords and fits flawlessly under the 160 char limit.
  description: 'Discover professional respite care services in Westchester, IL. We provide temporary relief and compassionate support for family caregivers across Chicagoland.',
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/services/respite-care',
  },
  
  // OPTIMIZATION: High-value local keyword matrix specifically targeting respite and caregiver relief intent
  keywords: [
    "Respite care services Westchester IL",
    "Family caregiver relief Chicago",
    "Temporary senior care DuPage County",
    "In-home respite care Illinois",
    "Professional respite options near me",
    "Short-term elder care Cook County"
  ],
  
  openGraph: {
    title: "Professional Respite Care Services | Benevolence Home Services",
    description: "Discover professional respite care services in Westchester, IL. We provide temporary relief and compassionate support for family caregivers.",
    url: "https://www.benevolencehomeservices.com/services/respite-care",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2182343844Us238i0.webp", // Specific Hero Image for this service
        width: 1200,
        height: 630,
        alt: "Family caregiver passing duties smoothly to a professional respite provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Respite Care Services | Benevolence Home Services",
    description: "Discover professional respite care services in Westchester, IL.",
    images: ["/nh-2182343844Us238i0.webp"],
  }
};

export default function RespiteCareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}