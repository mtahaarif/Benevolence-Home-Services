import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION FIX: Shortened base title. Next.js appends " | Benevolence Home Services".
  // "Home Care Careers" + Brand Suffix fits perfectly under the 580px visual limit.
  title: 'Home Care Careers',
  
  description: 'Join our growing care team. Explore rewarding home care careers and caregiver jobs at Benevolence Home Services in Westchester and Chicagoland.',
  
  alternates: {
    // OPTIMIZATION FIX: Removed "www." to match the root domain configuration 
    // detected by the SEO crawler and prevent the canonical mismatch error.
    canonical: 'https://benevolencehomeservices.com/careers',
  },
  
  keywords: [
    "Home care careers Westchester IL",
    "Caregiver jobs Chicago suburbs",
    "CNA jobs DuPage County",
    "Hiring caregivers Cook County",
    "Nurse-led agency jobs Illinois",
    "Companion care jobs Near Me"
  ],
  
  openGraph: {
    title: "Home Care Careers | Benevolence Home Services",
    description: "Join our growing care team. Explore rewarding home care careers and caregiver jobs in Westchester and Chicagoland.",
    url: "https://benevolencehomeservices.com/careers",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-1637163589-1.webp",
        width: 1200,
        height: 630,
        alt: "Caregivers standing together representing home care careers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Care Careers | Benevolence Home Services",
    description: "Explore rewarding caregiver jobs at Benevolence Home Services.",
    images: ["/nh-1637163589-1.webp"],
  }
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}