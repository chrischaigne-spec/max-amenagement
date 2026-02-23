import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Max Aménagement | Rénovation, Terrasses & Aménagement — Ouest Lyonnais",
  description:
    "Max Aménagement, artisan spécialiste de la rénovation intérieure, terrasses, aménagement extérieur et maçonnerie dans les Monts du Lyonnais, l'Ouest Lyonnais et la Loire. Devis gratuit à Aveize (69).",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="antialiased">
        <SmoothScroll />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
