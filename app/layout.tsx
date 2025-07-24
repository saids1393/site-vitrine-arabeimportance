import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Méthode ERPR",
  description: "Cours d'apprentissage de lecture et d'écriture avec une méthode efficace et logique",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
