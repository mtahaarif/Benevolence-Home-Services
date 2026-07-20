import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Perfectly tailored title length. Next.js appends " | Benevolence Home Services".
  title: 'Illinois Senior Care Resources',
  
  // OPTIMIZATION: 154 characters. Avoids truncation while maintaining dense keywords.
  description: 'Explore our curated list of Illinois senior care resources, planning guides, and public health portals to help your family navigate elder care safely.',
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/resources',
  },
  
  keywords: [
    "Illinois senior care resources",
    "Elder care planning Chicago",
    "Public health portals Illinois",
    "Senior care guides Westchester",
    "Aging at home resources Cook County",
    "Medicare assistance Illinois"
  ],
  
  openGraph: {
    title: "Illinois Senior Care Resources | Benevolence Home Services",
    description: "Explore our curated list of Illinois senior care resources, planning guides, and public health portals.",
    url: "https://www.benevolencehomeservices.com/resources",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-23119104148Uam2713.webp", // Specific Resources Hero Image
        width: 1200,
        height: 630,
        alt: "Happy elderly couple reviewing senior care resources together",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Illinois Senior Care Resources | Benevolence Home Services",
    description: "Explore our curated list of Illinois senior care resources and planning guides.",
    images: ["/nh-23119104148Uam2713.webp"],
  }
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}