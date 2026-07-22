import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION FIX: Shortened to fit under the strict 580px visual limit. 
  // "Alzheimer's & Dementia Care | Benevolence Home Services" fits perfectly and captures the exact intent.
  title: "Alzheimer's & Dementia Care",
  
  // OPTIMIZATION FIX: Adjusted wording to fit under the 1000 pixel visual limit while maintaining 
  // the exact local SEO value and primary keywords.
  description: "Expert Alzheimer's, dementia, and post-surgery care in Westchester, IL. Compassionate in-home support for complex health needs.",
  
  alternates: {
    // OPTIMIZATION FIX: Removed "www." to match the root domain configuration 
    // detected by the SEO crawler and prevent the canonical mismatch error.
    canonical: 'https://benevolencehomeservices.com/services/specialized-support',
  },
  
  // OPTIMIZATION: Keyword matrix targeting complex care intent in local counties
  keywords: [
    "Alzheimer's care Westchester IL",
    "Dementia care Chicago suburbs",
    "Post-surgery recovery care Cook County",
    "Palliative support Illinois",
    "Chronic condition home care",
    "Specialized senior care DuPage County"
  ],
  
  openGraph: {
    title: "Alzheimer's & Dementia Care | Benevolence Home Services",
    description: "Expert Alzheimer's, dementia, and post-surgery care in Westchester, IL. Compassionate in-home support for complex health needs.",
    // OPTIMIZATION FIX: Removed "www." to match canonical structure.
    url: "https://benevolencehomeservices.com/services/specialized-support",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2212833857U072s1e.webp", // Specific Hero Image for this service
        width: 1200,
        height: 630,
        alt: "Healthcare professional providing attentive, specialized support",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alzheimer's & Dementia Care | Benevolence Home Services",
    description: "Expert Alzheimer's, dementia, and post-surgery care in Westchester, IL.",
    images: ["/nh-2212833857U072s1e.webp"],
  }
};

export default function SpecializedSupportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}