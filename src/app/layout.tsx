import type { Metadata } from "next";
import { Inter, Roboto_Slab, Bebas_Neue, Work_Sans } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin", "latin-ext"],
});

const robotoSlab = Roboto_Slab({
  variable: "--font-serif",
  subsets: ["latin", "latin-ext"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin", "latin-ext"],
});

const workSans = Work_Sans({
  variable: "--font-work",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Konstrukcje żelbetowe Tarnów | Niedziela & Kłusek",
  description: "Roboty żelbetowe dla budownictwa przemysłowego i mieszkaniowego. Fundamenty, ściany, stropy, zbiorniki. Zespół specjalistów, 4 województwa. Wycena w 24h.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${inter.variable} ${robotoSlab.variable} ${bebasNeue.variable} ${workSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
