import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Hits the exact length requirement. layout.tsx will append " | Benevolence Home Services".
  title: 'Light Housekeeping Services',
  
  // OPTIMIZATION: 154 characters. Captures strong local keywords without truncation.
  description: 'Benevolence Home Services provides light housekeeping and senior homemaker services in Westchester, IL. We ensure a safe, clean, and organized environment.',
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/services/light-housekeeping',
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
    description: "Discover customized in-home light housekeeping and senior homemaker services in Westchester, IL.",
    url: "https://www.benevolencehomeservices.com/services/light-housekeeping",
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
    description: "Discover customized in-home light housekeeping and senior homemaker services in Westchester, IL.",
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