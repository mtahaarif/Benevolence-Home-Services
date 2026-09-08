import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Security Commitment",
  description:
    "Review the privacy practices, statutory protections, and data security standards of Benevolence Home Services in Westchester, Illinois.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy & Security Commitment | Benevolence Home Services",
    description:
      "Learn how Benevolence Home Services collects, protects, and handles personal data and client care records.",
    url: "https://www.benevolencehomeservices.com/privacy-policy",
    type: "website",
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}