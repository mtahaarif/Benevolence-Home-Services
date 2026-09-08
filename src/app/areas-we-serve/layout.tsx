import type { Metadata } from "next";

export const metadata: Metadata = {
  // Compiles to: "Chicagoland Home Care Areas | Benevolence Home Services" (54 characters)
  title: "Chicagoland Home Care Areas",

  // 154 characters: Fits safely below the 160-character / 1000-pixel cut-off
  description:
    "Explore nurse-led, non-medical home care services from Benevolence Home Services across Cook, DuPage, Lake, and Will Counties in the Chicago metropolitan area.",

  // Relative path automatically resolves with metadataBase to prevent canonical mismatches
  alternates: {
    canonical: "/areas-we-serve",
  },

  keywords: [
    // High-Intent Local Searches
    "home care near me",
    "home care agency near me",
    "caregiver near me",
    "senior care near me",

    // Priority Nearby Focus Markets
    "home care Westchester IL",
    "home care Oak Brook IL",
    "home care Elmhurst IL",
    "senior care La Grange IL",
    "in-home care Western Springs IL",
    "elderly care Oak Park IL",
    "home care Downers Grove IL",
    "senior home care Lombard IL",
    "companion care Hinsdale IL",
    "private duty care Burr Ridge IL",
    "home care Hillside IL",
    "senior care River Forest IL",

    // Regional County Coverage
    "home care service areas Cook County",
    "in-home senior care DuPage County",
    "elderly care services Will County",
    "Lake County senior care",
    "Chicagoland home care service areas",
  ],

  openGraph: {
    title: "Chicagoland Home Care Areas | Benevolence Home Services",
    description:
      "Nurse-led senior home care, companion services, and personalized support across Cook, DuPage, Lake, and Will Counties.",
    url: "https://www.benevolencehomeservices.com/areas-we-serve",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/nh-2411535922U62t38i.webp",
        width: 1200,
        height: 630,
        alt: "Benevolence Home Services Chicagoland Regional Service Area Map",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Chicagoland Home Care Areas | Benevolence Home Services",
    description:
      "Nurse-led in-home elderly care across Cook, DuPage, Lake, and Will Counties.",
    images: ["/nh-2411535922U62t38i.webp"],
  },
};

export default function AreasWeServeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
