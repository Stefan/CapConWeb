import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { PRODUCT_NAME } from "@/lib/brand";

import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://capcon.io",
  ),
  title: PRODUCT_NAME,
  icons: {
    icon: [
      { url: "/brand/capcon-icon.png", type: "image/png" },
      { url: "/brand/capcon-mark.svg", type: "image/svg+xml" },
    ],
    apple: "/brand/capcon-icon.png",
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
      <body
        suppressHydrationWarning
        className="min-h-screen font-sans antialiased"
      >
        {children}
      </body>
    </html>
  );
}
