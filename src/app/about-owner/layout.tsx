import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Sets a highly relevant, unique page title. Next.js will auto-append the brand name.
  title: 'Get to Know the Owner',
  
  // OPTIMIZATION: 153 characters. Captures strong local keywords and fits flawlessly under the 160 char limit.
  description: 'Get to know Katrina Turman, the visionary founder of Benevolence Home Services. We provide nurse-led, compassionate senior home care in Westchester, IL.',
  
  alternates: {
    // OPTIMIZATION FIX: Resolves the severe Canonical mismatch error where the page was pointing back to the homepage root.
    canonical: 'https://benevolencehomeservices.com/about-owner',
  },
  
  keywords: [
    "Home care owner Westchester IL",
    "Katrina Turman RN",
    "Nurse-led home care Chicagoland",
    "Senior care agency founder Illinois",
    "Faith-based caregiving Cook County",
    "Medical staffing solutions DuPage County"
  ],
  
  openGraph: {
    title: "Get to Know the Owner | Benevolence Home Services",
    description: "Get to know Katrina Turman, the visionary founder of Benevolence Home Services.",
    url: "https://benevolencehomeservices.com/about-owner",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "profile",
    images: [
      {
        url: "/katrina.webp",
        width: 800,
        height: 1000,
        alt: "Katrina Turman, Founder and Owner of Benevolence Home Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get to Know the Owner | Benevolence Home Services",
    description: "Get to know Katrina Turman, the visionary founder of Benevolence Home Services.",
    images: ["/katrina.webp"],
  }
};

export default function AboutOwnerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}