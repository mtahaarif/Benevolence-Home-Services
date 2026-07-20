import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Resolves Title Length & Word Repetition penalties.
  title: "Specialized Alzheimer's & Dementia Care",
  
  // OPTIMIZATION: 158 characters. Strong local keywords without exceeding the 160 char limit.
  description: "Benevolence Home Services offers specialized Alzheimer's, dementia, and post-surgery care in Westchester, IL. Compassionate support for complex health needs.",
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/services/specialized-support',
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
    title: "Specialized Alzheimer's & Dementia Care | Benevolence Home Services",
    description: "Compassionate specialized care for Alzheimer's, dementia, and post-surgery recovery in Westchester, IL.",
    url: "https://www.benevolencehomeservices.com/services/specialized-support",
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
    title: "Specialized Alzheimer's & Dementia Care | Benevolence Home Services",
    description: "Compassionate specialized care for Alzheimer's, dementia, and post-surgery recovery in Westchester, IL.",
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