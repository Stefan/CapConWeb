import type { Metadata } from "next";
import { connection } from "next/server";
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
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://capconhq.com",
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

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  await connection();

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
