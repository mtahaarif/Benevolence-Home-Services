import type { Metadata } from "next";

export const metadata: Metadata = {
  // Title template in root layout appends "| Benevolence Home Services"
  // Compiles to: "Home Care Service Areas in Chicagoland | Benevolence Home Services" (67 chars / ~540px)
  title: "Home Care Service Areas in Chicagoland",

  // 154 characters: Fits safely below the 160-character / 1000-pixel cut-off
  description:
    "Explore nurse-led, non-medical home care services from Benevolence Home Services across Cook, DuPage, Lake, and Will Counties in the Chicago metropolitan area.",

  alternates: {
    canonical: "https://www.benevolencehomeservices.com/areas-we-serve",
  },

  keywords: [
    "Home care service areas Illinois",
    "In-home senior care Cook County",
    "Home care agency DuPage County",
    "Elderly care services Will County",
    "Lake County senior care",
    "Westchester IL home care",
    "Oak Brook home care providers",
    "Naperville senior companion care",
    "Chicagoland home health care agencies",
    "Nurse-led home care Illinois",
  ],

  openGraph: {
    title: "Home Care Service Areas | Benevolence Home Services",
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
    title: "Home Care Service Areas | Benevolence Home Services",
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