import type { Metadata } from 'next';

export const metadata: Metadata = {
  // OPTIMIZATION: Hits the exact length requirement. layout.tsx will append " | Benevolence Home Services".
  title: 'Senior Meal Preparation Services',
  
  // OPTIMIZATION: 153 characters. Captures strong local keywords without truncation.
  description: 'Discover customized in-home senior meal preparation services in Westchester, IL. We provide fresh, balanced, and nutritious meals for older adults.',
  
  // OPTIMIZATION: Resolves "Canonical link points to a different page" warning
  alternates: {
    canonical: 'https://www.benevolencehomeservices.com/services/meal-preparation',
  },
  
  // OPTIMIZATION: High-value local keyword matrix specifically targeting meal preparation intent
  keywords: [
    "Senior meal preparation services Westchester IL",
    "In-home cooking for elderly Chicagoland",
    "Nutritious meal prep for seniors Cook County",
    "Elderly nutrition support DuPage County",
    "Custom meal planning for seniors",
    "Feeding assistance at home Illinois"
  ],
  
  openGraph: {
    title: "Senior Meal Preparation Services | Benevolence Home Services",
    description: "Discover customized in-home senior meal preparation services in Westchester, IL.",
    url: "https://www.benevolencehomeservices.com/services/meal-preparation",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2242925031Ui50a8e.webp", // Specific Hero Image for this service
        width: 1200,
        height: 630,
        alt: "Nutritious and balanced home cooked meal preparation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senior Meal Preparation Services | Benevolence Home Services",
    description: "Discover customized in-home senior meal preparation services in Westchester, IL.",
    images: ["/nh-2242925031Ui50a8e.webp"],
  }
};

export default function MealPreparationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}