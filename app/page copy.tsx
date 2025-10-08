'use client';

import { useState } from 'react';
import {
  Play,
  Brain,
  Volume2,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Clock,
  Trophy,
  Headphones,
  Repeat,
  Sparkles,
} from 'lucide-react';

import Header from './components/Header';
import Footer from './components/Footer';

export default function Home() {
  const [email, setEmail] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleEmailSubmit = async () => {
    if (!email || !email.includes('@')) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }

    setIsLoading(true);
    setError('');

    setTimeout(() => {
      setIsSubmitted(true);
      setEmail('');
      setIsLoading(false);
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900">
      {/* HEADER */}
      <Header scrollToSection={scrollToSection} />

      {/* HERO SECTION */}
      <section id="accueil" className="pt-24 sm:pt-32 pb-12 sm:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-400/30 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium mb-4 sm:mb-6">
                <Star className="w-3 h-3 sm:w-4 sm:h-4 mr-2 text-pink-400" />
                Méthode logique et rapide
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                Apprendre à lire et écrire l'arabe avec{' '}
                <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  la méthode ERPR
                </span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-6 sm:mb-8">
                Une méthode innovante basée sur les 4 piliers :{' '}
                <strong className="text-white">Écoute, Répétition, Pratique, Régularité.</strong>{' '}
                Idéale pour débuter ou progresser rapidement dans l'apprentissage de la langue arabe.
              </p>

              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group shadow-lg text-base sm:text-lg"
              >
                S'inscrire maintenant
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-slate-700">
                <div className="flex items-center justify-center sm:justify-start">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300">+60 élèves</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Trophy className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300">100% réussite</span>
                </div>
                <div className="flex items-center justify-center sm:justify-start">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400 mr-2 flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-slate-300">Résultats rapides</span>
                </div>
              </div>
            </div>

            <div className="relative mt-8 lg:mt-0">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-6 sm:p-8 border border-pink-500/30">
                <div className="absolute -top-3 -right-3 w-8 h-8 sm:w-10 sm:h-10 bg-pink-500 rounded-full flex items-center justify-center shadow-lg">
                  <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="space-y-4 sm:space-y-6">
                  <h3 className="text-base sm:text-lg font-semibold text-white">Progression intelligente</h3>
                  <div className="bg-slate-950 rounded-lg p-4">
                    <span className="text-xs sm:text-sm text-slate-300">Progression : 75%</span>
                    <div className="w-full bg-slate-800 rounded-full h-2 mt-2">
                      <div
                        className="bg-gradient-to-r from-pink-500 to-blue-500 h-2 rounded-full"
                        style={{ width: '75%' }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <div className="bg-slate-950 rounded-lg p-3 sm:p-4">
                      <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-pink-400 mb-2" />
                      <p className="text-xs sm:text-sm text-slate-300">Exercices interactifs</p>
                    </div>
                    <div className="bg-slate-950 rounded-lg p-3 sm:p-4">
                      <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mb-2" />
                      <p className="text-xs sm:text-sm text-slate-300">Audio natif</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* METHODE SECTION */}
      <section id="methode" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
              Découvrez la méthode{' '}
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">ERPR</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-slate-300 max-w-3xl mx-auto">
              La méthode ERPR (Écoute, Répétition, Pratique, Régularité) est conçue pour apprendre à lire et écrire
              l'arabe rapidement, de manière fluide et durable.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { Icon: Headphones, color: 'bg-pink-500', title: 'Écoute', desc: 'Immersion totale avec des audios de qualité' },
              { Icon: Repeat, color: 'bg-blue-500', title: 'Répétition', desc: 'Répétez pour ancrer chaque son' },
              { Icon: Brain, color: 'bg-pink-500', title: 'Pratique', desc: 'Exercices adaptés à votre niveau' },
              { Icon: Clock, color: 'bg-blue-500', title: 'Régularité', desc: 'Progressez chaque jour à votre rythme' },
            ].map(({ Icon, color, title, desc }, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800 to-slate-900 p-6 sm:p-8 rounded-2xl shadow-xl border-2 border-pink-500/30 hover:scale-105 transition-transform"
              >
                <div className={`${color} w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 text-center">{title}</h3>
                <p className="text-sm sm:text-base text-slate-300 text-center">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Commencez dès aujourd'hui
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-4 sm:mb-6">
            Offre spéciale : <span className="text-pink-400 font-bold text-2xl sm:text-3xl lg:text-4xl">59€</span>{' '}
            <span className="line-through text-slate-500 text-base sm:text-lg">89€</span>
          </p>
          <p className="text-sm sm:text-base text-slate-400 mb-8 sm:mb-10">Pour les 25 premiers inscrits seulement</p>

          {!isSubmitted ? (
            <div className="max-w-md mx-auto space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="w-full bg-white px-4 sm:px-6 py-3 sm:py-4 rounded-xl text-slate-900 text-base sm:text-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              />
              <button
                onClick={handleEmailSubmit}
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-pink-600 hover:to-blue-600 transition-all shadow-lg disabled:opacity-50"
              >
                {isLoading ? 'Envoi en cours...' : "S'inscrire maintenant"}
              </button>
              {error && <p className="text-pink-400 text-sm mt-2">{error}</p>}
            </div>
          ) : (
            <div className="bg-pink-500/20 border border-pink-500/30 text-white px-6 sm:px-8 py-4 rounded-xl inline-flex items-center text-base sm:text-lg">
              <CheckCircle className="mr-2 w-5 h-5" />
              Merci ! Vous recevrez bientôt de nos nouvelles.
            </div>
          )}
        </div>
      </section>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}
