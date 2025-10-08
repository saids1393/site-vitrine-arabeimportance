'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ContentSection from './components/ContentSection';
import {
  Play,
  Brain,
  Volume2,
  CheckCircle,
  Star,
  Mail,
  ArrowRight,
  Users,
  Clock,
  Trophy,
  User,
  Instagram,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import Header from './components/Header';
import Footer from './components/Footer';

// Images
import DashboardImage from '/public/assets/img/dashboard.png';
import SupportImage from '/public/assets/img/support.png';

export default function Home() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async () => {
    if (!email) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        const data = await response.json();
        setError(data.message || "Erreur lors de l'envoi de l'email");
      }
    } catch {
      setError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-200 overflow-x-hidden">
      {/* Header */}
      <Header scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section id="accueil" className="pt-24 sm:pt-32 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-400/30 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Star className="w-4 h-4 mr-2 text-pink-400" />
                Méthode logique et rapide
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Apprenez à lire et écrire avec{' '}
                <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                  la méthode ERPR
                </span>
              </h1>

              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                Une méthode moderne et progressive basée sur{' '}
                <strong className="text-white">Écoute, Répétition, Pratique, Régularité</strong>.
                Idéale pour apprendre l’arabe rapidement, efficacement et durablement.
              </p>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center group shadow-lg text-lg"
              >
                S'inscrire
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-slate-700">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-pink-400 mr-2" />
                  <span className="text-sm text-slate-300">+60 élèves</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-400 mr-2" />
                  <span className="text-sm text-slate-300">100% réussite</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-pink-400 mr-2" />
                  <span className="text-sm text-slate-300">Résultats rapides</span>
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border border-pink-500/30">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Progression</h3>
                    <div className="w-12 h-12 bg-pink-500/20 rounded-full flex items-center justify-center border border-pink-500/30">
                      <Play className="w-6 h-6 text-pink-400" />
                    </div>
                  </div>

                  <div className="bg-slate-950 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400">Progression</span>
                      <span className="text-sm font-medium text-white">75%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="bg-gradient-to-r from-pink-500 to-blue-500 h-2 rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-slate-950 rounded-lg border border-pink-500/30">
                      <Volume2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <span className="text-xs text-slate-300">+530 audios</span>
                    </div>
                    <div className="text-center p-3 bg-slate-950 rounded-lg border border-pink-500/30">
                      <Brain className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                      <span className="text-xs text-slate-300">Quizs</span>
                    </div>
                    <div className="text-center p-3 bg-slate-950 rounded-lg border border-pink-500/30">
                      <CheckCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <span className="text-xs text-slate-300">Validé</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Méthode */}
      <section id="méthode" className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Découvrez la méthode{' '}
              <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
                ERPR
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Une approche logique et moderne basée sur quatre piliers fondamentaux :{' '}
              <strong className="text-white">Écoute, Répétition, Pratique, Régularité</strong>.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Écoute', icon: Volume2, color: 'pink' },
              { title: 'Répétition', icon: Clock, color: 'blue' },
              { title: 'Pratique', icon: Brain, color: 'pink' },
              { title: 'Régularité', icon: Trophy, color: 'blue' },
            ].map(({ title, icon: Icon, color }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl border border-pink-500/30 hover:scale-105 transition-transform"
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${
                    color === 'pink' ? 'bg-pink-500' : 'bg-blue-500'
                  }`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-slate-300 text-base">
                  {title === 'Écoute'
                    ? 'Tout commence par une bonne oreille.'
                    : title === 'Répétition'
                    ? 'Répétez pour ancrer durablement.'
                    : title === 'Pratique'
                    ? 'Appliquez pour maîtriser.'
                    : 'Progressez jour après jour.'}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Illustration */}
      <section className="py-20 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Illustration de ce qui vous attend
            </h2>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto">
              Une approche visuelle et moderne pour comprendre comment la méthode ERPR transforme votre apprentissage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[{ src: DashboardImage, title: 'Dashboard automatisé', desc: 'Suivi intelligent de la progression.' },
              { src: SupportImage, title: 'Support numérique', desc: 'Exercices audio interactifs.' }].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="bg-slate-800 rounded-xl p-6 shadow-lg border border-pink-500/20"
              >
                <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-slate-700">
                  <Image src={item.src} alt={item.title} className="object-contain bg-slate-900" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contenu */}
      <section id="contenu" className="py-10 bg-slate-900/70">
        <ContentSection />
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-slate-900/50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-white mb-6">
            Offre spéciale pour les 25 premiers inscrits !
          </h2>
          <p className="text-xl text-slate-300 mb-4">
            <span className="text-pink-400 font-bold text-2xl">59€</span> au lieu de{' '}
            <span className="line-through text-slate-500">89€</span>
          </p>
          <p className="text-slate-400 mb-10">
            Accès à vie avec possibilité de paiement en plusieurs fois.
          </p>

          {!isSubmitted ? (
            <div className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 bg-white px-6 py-4 rounded-xl text-slate-900 focus:ring-2 focus:ring-pink-500 outline-none"
                />
                <button
                  onClick={handleEmailSubmit}
                  disabled={isLoading}
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-600 transition-all shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                >
                  {isLoading ? 'Envoi...' : (
                    <>
                      <Mail className="w-5 h-5" />
                      <span>S'inscrire</span>
                    </>
                  )}
                </button>
              </div>
              {error && <p className="text-pink-400 mt-3 text-sm">{error}</p>}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-pink-500/20 border border-pink-500/30 text-white px-8 py-4 rounded-xl inline-flex items-center mt-6"
            >
              <CheckCircle className="mr-2 w-5 h-5" />
              Merci ! Vous recevrez bientôt de nos nouvelles.
            </motion.div>
          )}

          <div className="flex justify-center gap-4 mt-8">
            <Link
              href="https://t.me/ArabeImportance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md"
            >
              <Send className="w-4 h-4" />
              Telegram
            </Link>
            <Link
              href="https://instagram.com/arabeimportance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md"
            >
              <Instagram className="w-4 h-4" />
              Instagram
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
