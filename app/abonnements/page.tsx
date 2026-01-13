'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Star,
  ArrowRight,
  Volume2,
  GraduationCap,
  MessageSquare,
  Sparkles,
  Menu,
  X,
  Twitter,
  Linkedin,
  Instagram,
} from 'lucide-react';
import { useState } from 'react';

export default function Abonnements() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const offers = [
    {
      title: 'Tajwid - Lire comme un Imam',
      price: '7',
      priceUnit: '/heure',
      icon: Volume2,
      bgColor: 'bg-blue-50',
      iconBg: 'bg-blue-500',
      features: [
        'Correction de sourate Al-Fatiha en entier',
        'Apprentissage des bases du Tajwid',
        'Maitrise du souffle et de la melodie'
      ]
    },
    {
      title: 'Maitrise Complete de l\'Arabe',
      price: '10',
      priceUnit: '/heure',
      icon: GraduationCap,
      bgColor: 'bg-emerald-50',
      iconBg: 'bg-emerald-500',
      features: [
        'Le vocabulaire et la conjugaison',
        'La grammaire (Nahw)',
        'Le Sarf et Al-Balaghah'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="section-container">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ArabeImportance</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Accueil</Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://methode-erpr-by-arabeimportance.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 hover:bg-blue-800 text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
              >
                Commencer
              </a>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="section-container flex flex-col gap-4">
              <Link href="/" className="text-gray-600 hover:text-gray-900 font-medium py-2">Accueil</Link>
              <a
                href="https://methode-erpr-by-arabeimportance.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Commencer
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <div className="main-container">
          <section className="pt-32 pb-20">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"
              >
                <div className="inline-flex items-center gap-2 bg-blue-100 rounded-full px-4 py-2 mb-6">
                  <Star className="w-4 h-4 text-blue-500" />
                  <span className="text-sm font-semibold text-blue-900">Pour les plus avances</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Formations{' '}
                  <span className="text-blue-500">avancees</span>
                </h1>

                <p className="text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
                  Deux formations d'excellence pour les etudiants avances souhaitant perfectionner leurs competences en arabe et en Tajwid.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 mb-16">
                {offers.map((offer, index) => (
                  <motion.div
                    key={offer.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`${offer.bgColor} rounded-2xl p-8`}
                  >
                    <div className="flex items-center justify-between mb-8">
                      <div className="flex items-center gap-4">
                        <div className={`w-14 h-14 ${offer.iconBg} rounded-xl flex items-center justify-center`}>
                          <offer.icon className="w-7 h-7 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-gray-900">{offer.price}EUR</div>
                        <div className="text-sm text-gray-500">{offer.priceUnit}</div>
                      </div>
                    </div>

                    <ul className="space-y-3">
                      {offer.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center"
              >
                <div className="bg-violet-500 rounded-2xl p-8 text-white max-w-2xl mx-auto">
                  <h3 className="text-2xl font-bold mb-4">Comment proceder ?</h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Contactez-nous en precisant le rythme par semaine et les jours avec les horaires disponibles. Le professeur reviendra vers vous rapidement.
                  </p>
                  <a
                    href="https://wa.me/201022767532?text=Bonjour, je souhaite m'inscrire a une formation avancee."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-violet-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    WhatsApp
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            </div>
          </section>
        </div>

        <footer className="bg-gradient-to-b from-blue-50 to-blue-100 mt-20 rounded-t-3xl relative overflow-hidden">
          <div className="section-container py-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-blue-500">ArabeImportance</span>
                </Link>
                <p className="text-gray-600 max-w-sm">
                  Pour toute question ou demande d'information, n'hesitez pas a nous contacter.
                </p>
              </div>

              <div>
                <h4 className="text-blue-500 font-bold uppercase tracking-wider text-sm mb-4">Social</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium">
                      <Twitter className="w-5 h-5" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium">
                      <Linkedin className="w-5 h-5" />
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/arabeimportance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-blue-500 hover:text-blue-800 font-medium">
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
            <div className="flex items-center gap-4 text-blue-200/40 mb-[-20px]">
              <div className="w-20 h-20 bg-blue-200/30 rounded-xl flex items-center justify-center">
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
