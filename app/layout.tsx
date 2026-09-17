import type { Metadata, Viewport } from "next";
import { Cinzel, Cormorant_Garamond, Pinyon_Script, Amiri } from "next/font/google";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const pinyon = Pinyon_Script({
  variable: "--font-pinyon",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic", "latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#5c1222",
};

export const metadata: Metadata = {
  title: "Dawat-e-Walima • Mohammad Farhan Khan & Arshiya Anees",
  description:
    "The Family of Late Haji Mohammad Shahzade Khan request the pleasure of your gracious presence at the Dawat-e-Walima of Mohammad Farhan Khan & Arshiya Anees on Saturday, 12th December 2026 at Shivam Palace, Keshavpuram, Kanpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${pinyon.variable} ${amiri.variable} h-full antialiased selection:bg-amber-900 selection:text-amber-100`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full bg-[#070103] text-[#f7eee4] font-serif overflow-x-hidden antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
