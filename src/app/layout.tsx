import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { GoogleTagsHead } from "@/components/analytics/google-tags-head";
import { PRODUCT_NAME } from "@/lib/brand";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const googleSiteVerification =
  process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION?.trim() || undefined;

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://capconhq.com",
  ),
  title: PRODUCT_NAME,
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      suppressHydrationWarning
      data-scroll-behavior="smooth"
      className={`${inter.variable} scroll-smooth`}
    >
      <head>
        <GoogleTagsHead />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
