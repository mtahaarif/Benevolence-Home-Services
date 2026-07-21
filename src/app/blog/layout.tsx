import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Perfectly aligns with your layout.tsx template for a 56 character title.
  title: 'Senior Care & Wellness Blog',
  
  // OPTIMIZATION: 154 characters. Keeps the description focused and safely prevents cutoff on Google.
  description: 'Explore The Benevolence Senior Care & Wellness Blog for expert articles, local elder care guidance, and practical planning tips for family caregivers.',
  
  alternates: {
    // OPTIMIZATION FIX: Removed "www." to match the root domain configuration 
    // detected by the SEO crawler and prevent the canonical mismatch error.
    canonical: 'https://benevolencehomeservices.com/blog',
  },
  
  keywords: [
    "Senior care blog Westchester IL",
    "Family caregiver advice Chicago",
    "Elder care tips Illinois",
    "Dementia care strategies",
    "Home care education Cook County",
    "Senior wellness guidance"
  ],
  
  openGraph: {
    title: "Senior Care & Wellness Blog | Benevolence Home Services",
    description: "Explore The Benevolence Senior Care & Wellness Blog for expert articles and local elder care guidance.",
    url: "https://benevolencehomeservices.com/blog",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/non-home-banner.jpg", // The Blog Hero Image
        width: 1200,
        height: 630,
        alt: "Senior reading an informative book safely at home",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Care & Wellness Blog | Benevolence Home Services",
    description: "Explore our expert articles and practical planning tips for family caregivers.",
    images: ["/non-home-banner.jpg"],
  }
};

export default function BlogDirectoryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}