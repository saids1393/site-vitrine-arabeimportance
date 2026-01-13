import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Urbanist } from "next/font/google";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: {
    default: "Arabe Importance – Apprendre l'arabe avec la méthode ERPR",
    template: "%s | Arabe Importance"
  },
  description:
    "Apprenez la lecture et l'écriture en arabe grâce à la méthode ERPR : une approche simple, progressive et logique fondée sur l'écoute, la répétition, la pratique et la régularité. Cours d'arabe en ligne accessibles à tous les niveaux.",
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
    title: "Apprendre l'arabe facilement avec la méthode ERPR",
    description:
      "Découvrez la méthode ERPR, un apprentissage logique et progressif de la lecture et de l'écriture en arabe pour débutants, autodidactes et enfants.",
    images: [
      {
        url: "https://arabeimportance.fr/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arabe Importance - Apprentissage de la langue arabe avec la méthode ERPR",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apprendre l'arabe avec la méthode ERPR – Arabe Importance",
    description:
      "Une méthode simple, logique et progressive pour maîtriser la lecture et l'écriture en arabe, à votre rythme.",
    images: ["https://arabeimportance.fr/og-image.jpg"],
  },
  alternates: {
    canonical: "https://arabeimportance.fr/",
  },
  verification: {
    google: "AnPTHJcOSVhBUGxLxLjIC_HgisZajhrO2jNsAARDr4k",
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

           {/* ✅ Script Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-BDSV1FW0VH"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-BDSV1FW0VH');
          `}
        </Script>

        {/* ✅ Données structurées globales : Organization + WebSite + Course */}
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
                  "Plateforme d'apprentissage de la langue arabe : lecture, écriture et compréhension grâce à la méthode ERPR.",
                "sameAs": [
                  "https://instagram.com/arabeimportance",
                  "https://www.facebook.com/arabeimportance",
                  "https://t.me/ArabeImportance"
                ],
                "founder": {
                  "@type": "Person",
                  "name": "Soidroudine",
                  "jobTitle": "Créateur de la méthode ERPR"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "contactType": "Customer Service",
                  "email": "contact@arabeimportance.fr"
                }
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
              {
                "@context": "https://schema.org",
                "@type": "Course",
                "name": "Méthode ERPR – Lecture et écriture en arabe",
                "description": "Cours complet et progressif pour apprendre la lecture et l'écriture en arabe. Basé sur la méthode ERPR : Écoute, Répétition, Pratique, Régularité. Spécialement conçu pour les débutants et adultes avec +500 audios intégrés et vidéos explicatives.",
                "url": "https://arabeimportance.fr",
                "image": "https://arabeimportance.fr/og-image.jpg",
                "provider": {
                  "@type": "Organization",
                  "name": "Arabe Importance",
                  "url": "https://arabeimportance.fr",
                  "logo": "https://arabeimportance.fr/icon-512.png"
                },
                "instructor": {
                  "@type": "Person",
                  "name": "Soidroudine",
                  "description": "Créateur de la méthode ERPR, expert en enseignement de la langue arabe"
                },
                "inLanguage": "fr",
                "educationalLevel": "Beginner",
                "learningResourceType": "Cours interactif en ligne",
                "courseMode": "Online",
                "duration": "P1M",
                "keywords": "Arabe Importance, méthode ERPR, apprendre l'arabe, apprendre l'arabe pour débutants, cours arabe en ligne, arabe facile, lecture arabe, écriture arabe, prononciation arabe authentique, alphabet arabe, +500 audios intégrés, vidéos explicatives arabe, apprentissage interactif arabe, cours particuliers arabe, classe virtuelle arabe, feedback personnalisé, arabe littéraire, arabe standard, MSA, grammaire arabe progressive, conjugaison arabe, vocabulaire arabe, apprendre à lire arabe, apprendre à écrire arabe, arabe pour adultes, arabe pour enfants, méthode ERPR écoute répétition, programme complet arabe, formation arabe en ligne, cours arabe débutant, arabe niveau A1, arabe niveau A2, apprendre arabe rapidement, apprendre arabe facilement, certification arabe, exercices arabe interactifs, quiz arabe, coachingment personnalisé arabe, tutorat arabe en ligne, prix cours arabe, arabe Importance vs concurrents, meilleure plateforme arabe, alternative Larabefacile, alternative AlifBee, alternative Busuu, alternative Preply",
                "audience": {
                  "@type": "Audience",
                  "audienceType": "Débutants, adultes, autodidactes"
                },
                "aggregateRating": {
                  "@type": "AggregateRating",
                  "ratingValue": "4.9",
                  "ratingCount": "327",
                  "bestRating": "5",
                  "worstRating": "1"
                },
                "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Ahmed B."
                    },
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5"
                    },
                    "reviewBody": "Une méthode très claire et motivante. J'ai enfin réussi à lire en arabe !"
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Fatima L."
                    },
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5"
                    },
                    "reviewBody": "Idéal pour les débutants. L'approche ERPR m'a vraiment aidée à progresser."
                  }
                ],
                "offers": {
                  "@type": "Offer",
                  "url": "https://arabeimportance.fr/checkout",
                  "price": "75.65",
                  "priceCurrency": "EUR",
                  "availability": "https://schema.org/InStock",
                  "validFrom": "2025-11-04",
                  "validThrough": "2025-11-25",
                  "priceValidUntil": "2025-11-25"
                },
                "hasCourseInstance": [
                  {
                    "@type": "CourseInstance",
                    "url": "https://arabeimportance.fr/checkout",
                    "courseMode": "Online",
                    "inLanguage": "fr",
                    "endDate": "2025-11-25"
                  }
                ]
              }
            ]),
          }}
        />
      </head>
      <body className={`${urbanist.className} antialiased`}>{children}</body>
    </html>
  );
}
