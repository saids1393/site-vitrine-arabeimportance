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

// Import des images
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
        headers: {
          'Content-Type': 'application/json',
        },
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
    } catch (err) {
      setError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gray-900 overflow-x-hidden">
      {/* Meta SEO */}
      <head>
        <title>Apprendre l’arabe avec la méthode ERPR | Lire et écrire l’arabe facilement</title>
        <meta
          name="description"
          content="Apprenez à lire et écrire l’arabe rapidement avec la méthode ERPR : une méthode innovante basée sur l’écoute, la répétition, la pratique et la régularité. Cours d’arabe en ligne pour débutants et intermédiaires."
        />
        <meta
          name="keywords"
          content="apprendre l’arabe, apprendre à lire l’arabe, apprendre à écrire l’arabe, méthode ERPR, cours d’arabe en ligne, apprendre l’arabe facilement, lire et écrire l’arabe, apprendre l’arabe rapidement, arabe importance"
        />
        <link rel="canonical" href="https://www.arabeimportance.fr" />
      </head>

      {/* Header */}
      <Header scrollToSection={scrollToSection} />

      {/* HERO SECTION */}
      <section id="accueil" className="pt-16 min-h-screen flex items-center bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT TEXT */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center bg-gradient-to-r from-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-700"
              >
                <Star className="w-4 h-4 mr-2" />
                Apprendre l’arabe avec une méthode logique et rapide
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Apprendre à lire et écrire l’arabe avec{' '}
                <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
                  la méthode ERPR
                </span>
              </h1>
              <p className="text-lg text-blue-100 leading-relaxed mb-8">
                Une méthode innovante basée sur les 4 piliers : <strong>Écoute, Répétition, Pratique, Régularité.</strong>{' '}
                Idéale pour débuter ou progresser rapidement dans l’apprentissage de la langue arabe.
              </p>

              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-900 hover:to-blue-950 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl cursor-pointer text-lg"
              >
                S’inscrire maintenant
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Stats */}
              <div className="flex items-center gap-8 mt-12 pt-8 border-t border-blue-700">
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-300 mr-2" />
                  <span className="text-sm text-blue-100">+60 élèves accompagnés</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-blue-300 mr-2" />
                  <span className="text-sm text-blue-100">100% de réussite</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-blue-300 mr-2" />
                  <span className="text-sm text-blue-100">Résultats rapides</span>
                </div>
              </div>
            </motion.div>

            {/* RIGHT SIDE IMAGE */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-gradient-to-r from-blue-900 rounded-2xl shadow-2xl p-8 border border-blue-700">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-white">Progression intelligente</h3>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <span className="text-sm text-blue-100">Progression : 75%</span>
                    <div className="w-full bg-white rounded-full h-2 mt-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5 }}
                        className="bg-gradient-to-r from-blue-900 to-blue-900 h-2 rounded-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION : MÉTHODE ERPR */}
      <section id="methode" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Découvrez la méthode <span className="text-blue-400">ERPR</span> pour apprendre l’arabe efficacement
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12">
            La méthode ERPR (Écoute, Répétition, Pratique, Régularité) est conçue pour apprendre à lire et écrire l’arabe rapidement, de manière fluide et durable.
          </p>
        </div>
      </section>

      {/* SECTION : CONTENU */}
      <section id="contenu" className="py-10 bg-gray-900">
        <ContentSection />
      </section>

      {/* SECTION : CONTACT */}
      <section id="contact" className="py-20 bg-gray-800 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
          Apprenez l’arabe dès aujourd’hui avec la méthode ERPR
        </h2>
        <p className="text-xl text-blue-100 mb-8">
          Offre spéciale : <strong>59€</strong> au lieu de <span className="line-through">89€</span> pour les 25 premiers inscrits.
        </p>

        {!isSubmitted ? (
          <div className="max-w-lg mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Votre adresse email"
              className="flex-1 w-full bg-white px-6 py-4 rounded-xl text-gray-900 text-lg mb-4"
            />
            <button
              onClick={handleEmailSubmit}
              disabled={isLoading}
              className="bg-gradient-to-r from-blue-800 to-blue-900 text-white px-6 py-4 rounded-xl font-semibold text-lg"
            >
              {isLoading ? 'Envoi...' : "S'inscrire"}
            </button>
            {error && <p className="text-red-300 mt-2 text-sm">{error}</p>}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-green-600 text-white px-8 py-4 rounded-xl inline-flex items-center text-lg mt-4"
          >
            <CheckCircle className="mr-2 w-5 h-5" />
            Merci ! Vous recevrez bientôt de nos nouvelles.
          </motion.div>
        )}
      </section>

      {/* FOOTER */}
      <Footer />

{/* SCHEMA.ORG OPTIMISÉ POUR LE SEO */}
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": "Arabe Importance - Apprendre l’arabe avec la méthode ERPR",
      "alternateName": "Apprendre l’arabe en ligne",
      "url": "https://www.arabeimportance.fr",
      "logo": "https://www.arabeimportance.fr/assets/img/logo.png",
      "sameAs": [
        "https://instagram.com/arabeimportance",
        "https://t.me/ArabeImportance"
      ],
      "description":
        "Apprenez l’arabe facilement avec la méthode ERPR : une méthode innovante basée sur l’écoute, la répétition, la pratique et la régularité. Idéale pour apprendre à lire et écrire l’arabe rapidement, même sans base préalable.",
      "founder": {
        "@type": "Person",
        "name": "Pr. Soidroudine",
        "description": "Créateur de la méthode ERPR et fondateur de Arabe Importance, enseignant spécialisé dans l’apprentissage de la langue arabe.",
      },
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "FR"
      },
      "areaServed": "FR",
      "keywords": "apprendre l’arabe, cours d’arabe, méthode ERPR, apprendre à lire l’arabe, apprendre à écrire l’arabe, arabe facile, apprendre l’arabe en ligne",
      "offers": {
        "@type": "Offer",
        "price": "59",
        "priceCurrency": "EUR",
        "availability": "https://schema.org/InStock",
        "url": "https://www.arabeimportance.fr/#contact",
        "description": "Accès à vie à la méthode ERPR pour apprendre à lire et écrire l’arabe, avec plus de 530 audios et un tableau de bord automatisé."
      }
          }),
        }}
      />
    </div>
  );
}
