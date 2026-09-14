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
  themeColor: "#1a0206",
};

export const metadata: Metadata = {
  title: "Arshiya & Farhan — Wedding Celebration",
  description: "Together with their families, Arshiya & Farhan request the honour of your presence at their wedding celebration.",
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
    >
      <body className="min-h-full bg-[#070103] text-[#f7eee4] font-serif overflow-x-hidden antialiased">
        {children}
      </body>
    </html>
  );
}
