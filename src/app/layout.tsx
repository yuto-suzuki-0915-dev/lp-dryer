import type { Metadata } from "next";
import {
  Allura,
  Cormorant_Garamond,
  Noto_Serif_JP,
  Shippori_Mincho,
} from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const fvSignature = Allura({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fv-signature",
});

const fvSerif = Noto_Serif_JP({
  weight: "variable",
  display: "swap",
  variable: "--font-fv-serif",
  preload: false,
  fallback: ["Yu Mincho", "serif"],
});

const fvFeatureLatin = Cormorant_Garamond({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fv-feature-latin",
});

const fvFeatureJapanese = Shippori_Mincho({
  weight: "600",
  display: "swap",
  variable: "--font-fv-feature-japanese",
  preload: false,
  fallback: ["Yu Mincho", "serif"],
});

export const metadata: Metadata = {
  title: "AIRFOLD DUO | ELNORA",
  description: "旅先でも、いつもの髪を。AIRFOLD DUO。",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <body
        className={`${fvSerif.variable} ${fvSignature.variable} ${fvFeatureLatin.variable} ${fvFeatureJapanese.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
