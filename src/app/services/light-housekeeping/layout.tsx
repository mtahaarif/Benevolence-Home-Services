import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Hits the exact length requirement. layout.tsx will append " | Benevolence Home Services".
  // The SEO tool marked this title's length as "perfect" (535/580 pixels).
  title: 'Light Housekeeping Services',
  
  // OPTIMIZATION FIX: Shortened slightly to ensure it falls strictly under the 1000 pixel visual limit
  // while retaining all core keywords and location data.
  description: 'Benevolence Home Services provides light housekeeping and senior homemaker services in Westchester, IL, ensuring a safe and clean environment.',
  
  alternates: {
    // OPTIMIZATION FIX: Removed "www." to match the root domain configuration 
    // detected by the SEO crawler and prevent the canonical mismatch error.
    canonical: 'https://benevolencehomeservices.com/services/light-housekeeping',
  },
  
  // OPTIMIZATION: High-value local keyword matrix specifically targeting homemaker intent
  keywords: [
    "Light housekeeping services Westchester IL",
    "Senior homemaker DuPage County",
    "Elderly housekeeping Chicagoland",
    "In-home cleaning assistance Cook County",
    "Organizing for seniors Illinois",
    "Home making services for veterans"
  ],
  
  openGraph: {
    title: "Light Housekeeping Services | Benevolence Home Services",
    description: "Benevolence Home Services provides light housekeeping and senior homemaker services in Westchester, IL, ensuring a safe and clean environment.",
    // OPTIMIZATION FIX: Removed "www." to match canonical structure.
    url: "https://benevolencehomeservices.com/services/light-housekeeping",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2172630013U9i2e14.webp", // Specific Hero Image for this service
        width: 1200,
        height: 630,
        alt: "Caregiver keeping living spaces tidy and organized",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Light Housekeeping Services | Benevolence Home Services",
    description: "Benevolence Home Services provides customized in-home light housekeeping and senior homemaker services.",
    images: ["/nh-2172630013U9i2e14.webp"],
  }
};

export default function LightHousekeepingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}