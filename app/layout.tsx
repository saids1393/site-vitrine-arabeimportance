// app/layout.tsx (sur l'ancien domaine)
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Redirection...',
  other: {
    'google-site-verification': 'EFVn1wZRZLHfrXZ7_hVKJCXx-rrqdruaSlRxfQi8TO4',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head />
      <body>{children}</body>
    </html>
  );
}