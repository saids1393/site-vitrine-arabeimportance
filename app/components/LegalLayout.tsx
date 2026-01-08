import React from 'react';
import { Scale, Calendar, User } from 'lucide-react';
import Link from 'next/link';

interface LegalLayoutProps {
  title: string;
  children: React.ReactNode;
  subtitle?: string;
  lastUpdate?: string;
}

export default function LegalLayout({
  title,
  children,
  subtitle,
  lastUpdate
}: LegalLayoutProps) {
  const currentDate = lastUpdate || new Date().toLocaleDateString('fr-FR');

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 max-w-5xl">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold text-gray-900">
              Arabe<span className="text-orange-500">Importance</span>
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link
                href="/"
                className="hover:text-orange-500 transition-colors duration-200"
              >
                Accueil
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{title}</span>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-xl flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          </div>

          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-orange-400 mx-auto rounded-full mb-4"></div>

          {subtitle && (
            <p className="text-gray-600 text-lg mb-4">{subtitle}</p>
          )}

          <div className="inline-flex items-center gap-6 bg-gray-50 rounded-xl px-6 py-3 border border-gray-100">
            <div className="flex items-center gap-2 text-orange-500">
              <User className="w-4 h-4" />
              <span className="font-semibold">Arabe Importance</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="text-gray-600 text-sm">Soidroudine</span>
          </div>
        </header>

        <main className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="prose prose-slate prose-lg max-w-none
              prose-headings:text-gray-900
              prose-h2:text-2xl prose-h2:font-bold prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3 prose-h2:mb-6
              prose-h3:text-xl prose-h3:font-semibold prose-h3:mb-4
              prose-p:text-gray-600 prose-p:leading-relaxed
              prose-ul:space-y-2
              prose-li:text-gray-600
              prose-strong:text-gray-900 prose-strong:font-semibold
              prose-a:text-orange-500 prose-a:no-underline hover:prose-a:text-orange-600
            ">
              {children}
            </div>
          </div>
        </main>

        <footer className="mt-8">
          <div className="bg-gray-50 rounded-xl border border-gray-100 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Derniere mise a jour
                  </p>
                  <p className="text-sm text-gray-600">{currentDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Document a jour</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <Link
              href="/legal"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              Mentions legales
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/cgv"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              CGV
            </Link>
            <span className="text-gray-300">|</span>
            <Link
              href="/"
              className="text-gray-600 hover:text-orange-500 transition-colors duration-200"
            >
              Retour a l'accueil
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}
