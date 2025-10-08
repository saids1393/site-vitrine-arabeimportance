// app/layout.tsx - VERSION SIMPLIFIÉE SANS VÉRIFICATION
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Méthode ERPR - Apprentissage de la lecture et de l'écriture",
  description: "Découvrez la méthode ERPR, une approche efficace et logique pour l'apprentissage de la lecture et de l'écriture en arabe.",
  metadataBase: new URL("https://arabe-importance.vercel.app"),
  // SUPPRIMEZ TOUTE LA SECTION verification
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        {/* AUCUN META TAG DE VÉRIFICATION */}
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