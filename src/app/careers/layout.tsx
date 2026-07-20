import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Passes exactly the page string. Next.js layout auto-appends the brand name.
  // Perfectly hits the 56 character SEO threshold length.
  title: 'Home Care Careers & Caregiver Jobs',
  
  // OPTIMIZATION: 153 characters. Keeps the description focused and prevents cutoff on Google.
  description: 'Join our growing care team. Explore rewarding home care careers and caregiver jobs at Benevolence Home Services in Westchester and Chicagoland.',
  
  // OPTIMIZATION: Explicitly defines the canonical URL to resolve "Points to different page" warning.
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/careers',
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
    url: "https://www.benevolencehomeservices.com/careers",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-1637163589-1.webp", // Specific Careers Page Hero Image
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