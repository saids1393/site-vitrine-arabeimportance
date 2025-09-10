import React from 'react';
import { Scale, Calendar, User } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Navigation breadcrumb optionnelle */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="container mx-auto px-4 py-3 max-w-5xl">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <a 
              href="/" 
              className="hover:text-blue-900 transition-colors duration-200"
            >
              Accueil
            </a>
            <span>/</span>
            <span className="text-blue-900 font-medium">{title}</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Header principal */}
        <header className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-900 text-white rounded-xl flex items-center justify-center">
              <Scale className="w-6 h-6" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">{title}</h1>
          </div>
          
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full mb-4"></div>
          
          {subtitle && (
            <p className="text-gray-600 text-lg mb-4">{subtitle}</p>
          )}
          
          {/* Informations de l'entreprise */}
          <div className="inline-flex items-center gap-6 bg-white rounded-xl px-6 py-3 shadow-sm border border-gray-100">
            <div className="flex items-center gap-2 text-blue-900">
              <User className="w-4 h-4" />
              <span className="font-semibold">arabe-importance</span>
            </div>
            <div className="w-px h-4 bg-gray-300"></div>
            <span className="text-gray-600 text-sm">Soidroudine Said</span>
          </div>
        </header>

        {/* Contenu principal */}
        <main className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="p-8 lg:p-12">
            <div className="prose prose-slate prose-lg max-w-none">
              {/* Styles personnalisés pour le contenu */}
              <style jsx>{`
                :global(.prose h2) {
                  @apply text-2xl font-bold text-gray-900 border-b border-gray-200 pb-3 mb-6;
                }
                :global(.prose h3) {
                  @apply text-xl font-semibold text-gray-800 mb-4;
                }
                :global(.prose p) {
                  @apply text-gray-700 leading-relaxed mb-4;
                }
                :global(.prose ul) {
                  @apply space-y-2 mb-6;
                }
                :global(.prose li) {
                  @apply text-gray-700;
                }
                :global(.prose strong) {
                  @apply text-gray-900 font-semibold;
                }
                :global(.prose a) {
                  @apply text-blue-900 hover:text-blue-700 transition-colors duration-200;
                }
                :global(.prose section) {
                  @apply mb-12 last:mb-0;
                }
              `}</style>
              {children}
            </div>
          </div>
        </main>

        {/* Footer avec informations de mise à jour */}
        <footer className="mt-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">
                    Dernière mise à jour
                  </p>
                  <p className="text-sm text-gray-600">{currentDate}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>Document à jour</span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-gray-300"></div>
                <div className="text-xs">
                  Version {new Date().getFullYear()}.{String(new Date().getMonth() + 1).padStart(2, '0')}
                </div>
              </div>
            </div>
          </div>

          {/* Liens utiles */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm">
            <a 
              href="/mentions-legales" 
              className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
            >
              Mentions légales
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href="/cgv" 
              className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
            >
              CGV
            </a>
            <span className="text-gray-300">•</span>
            <a 
              href="/politique-confidentialite" 
              className="text-gray-600 hover:text-blue-900 transition-colors duration-200"
            >
              Politique de confidentialité
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}