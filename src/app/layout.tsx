import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import "./globals.css";
import { SiteChrome } from "@/components/site-shell";

const quicksand = Quicksand({
  variable: "--font-quicksand",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.benevolencehomeservices.com"),
  // FIX 1: Use relative self-referencing canonical "./" so nested routes don't inherit "/"
  alternates: {
    canonical: "./",
  },
  // FIX 2: Template pattern ensuring pages with custom titles append the brand cleanly
  title: {
    default: "Benevolence Home Services | Home Care in Westchester, IL",
    template: "%s | Benevolence Home Services",
  },
  description:
    "Benevolence Home Services provides nurse-led, compassionate home care and staffing solutions in Westchester, IL, serving seniors across Chicagoland.",
  keywords: [
    "Home care in Westchester IL",
    "Nurse-led home care agency",
    "Senior companion care Chicagoland",
    "In-home senior care Cook County",
    "Private duty nursing Illinois",
    "Alzheimer's and dementia care",
    "Respite care for family caregivers",
    "Healthcare staffing agency Illinois",
    "Non-medical home care DuPage County",
    "Elderly care services Will County",
    "Faith-based senior care",
    "Live-in caregiver Chicago suburbs",
    "Light housekeeping for seniors",
    "Post-hospital recovery care at home",
  ],
  openGraph: {
    title: "Benevolence Home Services | Nurse-Led Senior Care",
    description:
      "Nurse-led, faith-based home care and professional staffing options providing premium personal care, companionship, and clinical consistency.",
    url: "https://www.benevolencehomeservices.com",
    siteName: "Benevolence Home Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/footer-logo.png",
        width: 800,
        height: 600,
        alt: "Benevolence Home Services Corporate Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Benevolence Home Services | Nurse-Led Senior Care",
    description:
      "Premium nurse-led home care and healthcare staffing solutions across five Chicagoland counties.",
    images: ["/footer-logo.png"],
  },
  icons: {
    icon: "/footer-logo.png",
    shortcut: "/footer-logo.png",
    apple: "/footer-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${quicksand.variable} h-full antialiased`}>
      <head>
        <link
          rel="preload"
          as="image"
          href="/1.webp"
          type="image/webp"
          fetchPriority="high"
        />
      </head>
      <body className="min-h-full flex flex-col font-sans bg-white text-slate-900 relative selection:bg-[#0c3e72] selection:text-white">
        <div className="absolute top-0 left-0 right-0 h-1 bg-[color:var(--border)] z-50" />
        <SiteChrome>
          {children}
        </SiteChrome>
      </body>
    </html>
  );
}