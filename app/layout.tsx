import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Méthode ERPR - Apprentissage de la lecture et de l'écriture",
  description: "Découvrez la méthode ERPR, une approche efficace et logique pour l'apprentissage de la lecture et de l'écriture en arabe.",
  // ... gardez le reste de votre metadata ...
  verification: {
    google: "EFVn1wZRZLHfrXZ7_hVKJCXx-rrqdruaSlRxfQi8TO4", // ← GARDER SEULEMENT CELUI-CI
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
        {/* SUPPRIMEZ cette ligne - elle crée un doublon ! */}
        {/* <meta name="google-site-verification" content="EFVn1wZRZLHfrXZ7_hVKJCXx-rrqdruaSlRxfQi8TO4" /> */}
        
        {/* Gardez le reste */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}