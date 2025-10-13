import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Méthode ERPR – Apprentissage de la lecture et de l’écriture en arabe",
    template: "%s | Arabe Importance"
  },
  description:
    "Apprenez la lecture et l’écriture en arabe grâce à la méthode ERPR : une approche simple, progressive et logique fondée sur l’écoute, la répétition, la pratique et la régularité. Cours d’arabe en ligne accessibles à tous les niveaux.",
  keywords:
    "apprendre l'arabe, cours arabe en ligne, arabe facile, méthode arabe, méthode ERPR, arabe importance, lecture arabe, écriture arabe, alphabétisation arabe, apprendre à lire en arabe, apprendre à écrire en arabe, apprendre alphabet arabe, cours d'arabe débutant, apprentissage arabe en ligne",
  authors: [{ name: "Arabe Importance" }],
  creator: "Arabe Importance",
  publisher: "Arabe Importance",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://arabeimportance.fr/",
    siteName: "Arabe Importance – Méthode ERPR",
    title: "Apprendre l’arabe facilement avec la méthode ERPR",
    description:
      "Découvrez la méthode ERPR, un apprentissage logique et progressif de la lecture et de l’écriture en arabe pour débutants, autodidactes et enfants.",
    images: [
      {
        url: "https://arabeimportance.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Méthode ERPR - Apprentissage de la lecture et de l'écriture en arabe",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apprendre l’arabe avec la méthode ERPR – Arabe Importance",
    description:
      "Une méthode simple, logique et progressive pour maîtriser la lecture et l’écriture en arabe, à votre rythme.",
    images: ["https://arabeimportance.fr/og-image.jpg"],
  },
  alternates: {
    canonical: "https://arabeimportance.fr/",
  },
  verification: {
    google: "jd5X4FA2YA9yn-36R-X2tVQaCsfoC0Jok4bIBaIEqwI",
  },
  metadataBase: new URL("https://arabeimportance.fr"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <head>
        {/* Favicon & manifest */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        {/* Thème et responsive */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* ✅ Données structurées globales : Organization + WebSite */}
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Arabe Importance",
                "url": "https://arabeimportance.fr",
                "logo": "https://arabeimportance.fr/icon-512.png",
                "description":
                  "Plateforme d’apprentissage de la langue arabe : lecture, écriture et compréhension grâce à la méthode ERPR.",
                "sameAs": [
                  "https://instagram.com/arabeimportance",
                  "https://www.facebook.com/arabeimportance",
                  "https://t.me/ArabeImportance"
                ],
                "founder": {
                  "@type": "Person",
                  "name": "Méthode ERPR",
                  "jobTitle": "Formateur en langue arabe"
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "WebSite",
                "name": "Arabe Importance",
                "url": "https://arabeimportance.fr",
                "potentialAction": {
                  "@type": "SearchAction",
                  "target": "https://arabeimportance.fr/recherche?q={search_term_string}",
                  "query-input": "required name=search_term_string",
                },
              },
            ]),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
