import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Resolves Title Length & Word Repetition penalties.
  title: 'In-Home Medication Reminders for Seniors',
  
  // OPTIMIZATION: 154 characters. Strong local keywords without exceeding the 160 char limit.
  description: 'Ensure safety and consistency with in-home medication reminders for seniors in Westchester, IL. Our caregivers provide gentle, reliable daily prompts.',
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/services/medication-reminders',
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
    title: "In-Home Medication Reminders for Seniors | Benevolence Home Services",
    description: "Ensure safety and consistency with in-home medication reminders for seniors in Westchester, IL.",
    url: "https://www.benevolencehomeservices.com/services/medication-reminders",
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
    title: "In-Home Medication Reminders for Seniors | Benevolence Home Services",
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