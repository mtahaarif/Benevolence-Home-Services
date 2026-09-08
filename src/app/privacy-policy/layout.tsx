import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy & Security",
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
    // A nested `openGraph` object replaces the root one outright rather than
    // merging into it, so the shared og:image has to be restated here. Without
    // it this was the only route shipping an incomplete Open Graph card.
    images: [
      {
        url: "/footer-logo.png",
        width: 800,
        height: 600,
        alt: "Benevolence Home Services Corporate Logo",
      },
    ],
  },
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}