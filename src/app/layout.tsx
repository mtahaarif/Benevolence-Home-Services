import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Swapped out Manrope/Fraunces
import "./globals.css";
import { SiteChrome } from "@/components/site-shell";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Benevolence Home Services",
    template: "%s | Benevolence Home Services",
  },
  description:
    "Benevolence Home Services is a nurse-led, faith-based home care website built in Next.js.",
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
    // Inject the new font variables here
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}