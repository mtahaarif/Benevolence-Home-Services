import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION FIX: Shortened to fit under the strict 580px visual limit. 
  // "In-Home Medication Reminders | Benevolence Home Services" fits perfectly.
  title: 'In-Home Medication Reminders',
  
  // OPTIMIZATION: 154 characters. Strong local keywords without exceeding the 160 char limit.
  // The SEO tool marked this description's length as "perfect" (925/1000 pixels).
  description: 'Ensure safety and consistency with in-home medication reminders for seniors in Westchester, IL. Our caregivers provide gentle, reliable daily prompts.',
  
  alternates: {
    // OPTIMIZATION FIX: Removed "www." to match the root domain configuration 
    // detected by the SEO crawler and prevent the canonical mismatch error.
    canonical: 'https://benevolencehomeservices.com/services/medication-reminders',
  },
  
  // OPTIMIZATION: Keyword matrix targeting medication adherence intent in local counties
  keywords: [
    "In-home medication reminders Westchester IL",
    "Senior medication prompts Chicagoland",
    "Caregiver medication assistance Cook County",
    "Elderly health routine support DuPage County",
    "Reminders for seniors Illinois",
    "Home care routine monitoring"
  ],
  
  openGraph: {
    title: "In-Home Medication Reminders | Benevolence Home Services",
    description: "Ensure safety and consistency with in-home medication reminders for seniors in Westchester, IL.",
    // OPTIMIZATION FIX: Removed "www." to match canonical structure.
    url: "https://benevolencehomeservices.com/services/medication-reminders",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2371714204U3a085e.webp", // Specific Hero Image for this service
        width: 1200,
        height: 630,
        alt: "Caregiver helping senior manage prescription timeline accurately",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "In-Home Medication Reminders | Benevolence Home Services",
    description: "Ensure safety and consistency with in-home medication reminders for seniors in Westchester, IL.",
    images: ["/nh-2371714204U3a085e.webp"],
  }
};

export default function MedicationRemindersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}