import React from 'react';
import { Scale, Calendar, User, Sparkles, Twitter, Linkedin, Instagram } from 'lucide-react';
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
      <header className="bg-white/95 backdrop-blur-md border-b border-gray-100 sticky top-0 z-10">
        <div className="section-container">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ArabeImportance</span>
            </Link>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link
                href="/"
                className="hover:text-orange-500 transition-colors font-medium"
              >
                Accueil
              </Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{title}</span>
            </div>
          </div>
        </div>
      </header>

      <main>
        <div className="main-container">
          <div className="section-container py-12">
            <header className="text-center mb-12">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
              </div>

              {subtitle && (
                <p className="text-gray-500 text-lg mb-4">{subtitle}</p>
              )}

              <div className="inline-flex items-center gap-4 bg-orange-50 rounded-xl px-6 py-3">
                <div className="flex items-center gap-2 text-orange-500">
                  <User className="w-4 h-4" />
                  <span className="font-semibold">Arabe Importance</span>
                </div>
                <div className="w-px h-4 bg-orange-200"></div>
                <span className="text-gray-600 text-sm">Soidroudine</span>
              </div>
            </header>

            <div className="bg-white rounded-2xl border border-gray-200 p-8 lg:p-12">
              <div className="prose prose-slate prose-lg max-w-none
                prose-headings:text-gray-900 prose-headings:font-bold
                prose-h2:text-2xl prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-3 prose-h2:mb-6
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

            <div className="mt-8 bg-orange-50 rounded-xl p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="flex items-center gap-3">
                  <Calendar className="w-5 h-5 text-orange-500" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Derniere mise a jour</p>
                    <p className="text-sm text-gray-600">{currentDate}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-500">Document a jour</span>
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
              <Link href="/legal" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Mentions legales
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/cgv" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                CGV
              </Link>
              <span className="text-gray-300">|</span>
              <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors font-medium">
                Retour a l'accueil
              </Link>
            </div>
          </div>
        </div>

        <footer className="bg-gradient-to-b from-orange-50 to-orange-100 mt-20 rounded-t-3xl relative overflow-hidden">
          <div className="section-container py-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-orange-500">ArabeImportance</span>
                </Link>
                <p className="text-gray-600 max-w-sm">
                  Pour toute question ou demande d'information, n'hesitez pas a nous contacter.
                </p>
              </div>

              <div>
                <h4 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-4">Social</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
                      <Twitter className="w-5 h-5" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
                      <Linkedin className="w-5 h-5" />
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/arabeimportance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
            <div className="flex items-center gap-4 text-orange-200/40 mb-[-20px]">
              <div className="w-20 h-20 bg-orange-200/30 rounded-xl flex items-center justify-center">
                <Sparkles className="w-12 h-12" />
              </div>
              <span className="text-[120px] md:text-[180px] font-bold leading-none">ArabeImportance</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
