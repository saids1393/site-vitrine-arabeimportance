import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Méthode ERPR - Apprentissage de la lecture et de l'écriture",
  description: "Découvrez la méthode ERPR, une approche efficace et logique pour l'apprentissage de la lecture et de l'écriture en arabe. Application web automatisée pour progresser à votre rythme.",
  keywords: "méthode ERPR, apprentissage lecture arabe, apprendre à lire, cours arabe, lecture rythmée, écriture arabe, méthode lecture",
  authors: [{ name: "Méthode ERPR" }],
  creator: "Méthode ERPR",
  publisher: "Méthode ERPR",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://arabe-importance.vercel.app/",
    siteName: "Méthode ERPR",
    title: "Méthode ERPR - Apprentissage de la lecture et de l'écriture",
    description: "Découvrez la méthode ERPR, une approche efficace et logique pour l'apprentissage de la lecture et de l'écriture en arabe.",
    images: [
      {
        url: "https://arabe-importance.vercel.app/og-image.jpg", // À créer
        width: 1200,
        height: 630,
        alt: "Méthode ERPR - Apprentissage de la lecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Méthode ERPR - Apprentissage de la lecture et de l'écriture",
    description: "Application web automatisée pour apprendre à lire et écrire avec la méthode ERPR",
    images: ["https://arabe-importance.vercel.app/og-image.jpg"], // À créer
  },
  alternates: {
    canonical: "https://arabe-importance.vercel.app/",
  },
  verification: {
    google: "jd5X4FA2YA9yn-36R-X2tVQaCsfoC0Jok4bIBaIEqwI",
  },
  metadataBase: new URL("https://arabe-importance.vercel.app"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Thème mobile */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}