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

// Script to prevent FOUC (Flash of Unstyled Content) when loading theme
const themeScript = `
  (function() {
    try {
      var theme = localStorage.getItem('theme');
      var validThemes = ['minimal', 'industrial', 'sunny'];
      if (theme && validThemes.indexOf(theme) !== -1) {
        document.documentElement.setAttribute('data-theme', theme);
        if (theme === 'industrial') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      } else {
        document.documentElement.setAttribute('data-theme', 'industrial');
        document.documentElement.classList.add('dark');
      }
    } catch (e) {}
  })();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl" className="dark" data-theme="industrial" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${robotoSlab.variable} ${bebasNeue.variable} ${workSans.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
