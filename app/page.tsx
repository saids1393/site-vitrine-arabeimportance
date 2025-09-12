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
  Monitor,
  Edit3,
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
      {/* Header */}
      <Header scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section id="accueil" className="pt-16 min-h-screen flex items-center bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
                Méthode logique qui va vers l'essentiel
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Apprenez à lire et écrire avec{' '}
                <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
                  la méthode ERPR
                </span>
              </h1>
              <div className="mb-8">
                <h2 className="text-xl text-white mb-4 font-medium">
                  Écoute – Répétition – Pratique – Régularité
                </h2>
                <p className="text-lg text-blue-100 leading-relaxed">
                  Une méthode conçue pour apprendre à lire et écrire l'arabe rapidement. Grâce à une approche qui va à l'essentiel pour maintenir la régularité, une répétition guidée et un rythme adapté,
                  <strong className="text-white"> la réussite devient inévitable</strong>.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button
                  onClick={() => scrollToSection('contact')}
                  className="bg-gradient-to-r from-blue-900 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-900 hover:to-blue-950 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl cursor-pointer text-lg"
                >
                  Rejoindre la liste d'attente
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-8 mt-12 pt-8 border-t border-blue-700"
              >
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
                  <span className="text-sm text-blue-100">Résultats rapidement</span>
                </div>
              </motion.div>
            </motion.div>
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
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Chapitres</h3>
                    <div className="w-12 h-12 bg-blue-700/50 rounded-full flex items-center justify-center border border-blue-500">
                      <Play className="w-6 h-6 text-blue-200" />
                    </div>
                  </div>
                  <div className="bg-gray-900 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-blue-100">Progression</span>
                      <span className="text-sm font-medium text-white">75%</span>
                    </div>
                    <div className="w-full bg-white rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="bg-gradient-to-r from-blue-900 to-blue-900 h-2 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-gray-900 rounded-lg border border-blue-600">
                      <Volume2 className="w-6 h-6 text-blue-200 mx-auto mb-2" />
                      <span className="text-xs text-blue-100">+530 audios cliquables</span>
                    </div>
                    <div className="text-center p-3 bg-gray-900 rounded-lg border border-blue-600">
                      <Brain className="w-6 h-6 text-blue-200 mx-auto mb-2" />
                      <span className="text-xs text-blue-100">Quizs</span>
                    </div>
                    <div className="text-center p-3 bg-gray-900 rounded-lg border border-blue-600">
                      <CheckCircle className="w-6 h-6 text-blue-200 mx-auto mb-2" />
                      <span className="text-xs text-blue-100">Validé</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full opacity-30"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full opacity-30"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Method Section */}
      <section id="méthode" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Qu'est-ce que la méthode <span className="bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent">ERPR</span> ?
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-12 leading-relaxed">
              Une approche logique basée sur quatre piliers fondamentaux pour une réussite garantie, disponible via une application web automatisée, comprenant plus de 530 audios intégrés à travers les lettres, mots et phrases cliquables à l'infini, ainsi que l'envoi automatisé de vos devoirs.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {[
              {
                title: '🎯 E – Écoute',
                description: 'Tout commence par une bonne oreille',
                icon: Volume2,
                color: 'blue',
                delay: 0
              },
              {
                title: '🎯 R – Répétition',
                description: 'La clé pour ancrer les bases durablement',
                icon: Clock,
                color: 'blue',
                delay: 0.2
              },
              {
                title: '🎯 P – Pratique',
                description: 'Appliquer pour maîtriser',
                icon: Brain,
                color: 'blue',
                delay: 0.4
              },
              {
                title: '🎯 R – Régularité',
                description: 'De la discipline fréquente pour garder tout au frais',
                icon: Trophy,
                color: 'blue',
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl hover:bg-gray-600 transition-all duration-300 border border-gray-600"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-lg text-blue-100 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
          {/* About Creator */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gray-700 rounded-2xl p-8 border border-gray-600"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Comment est née la méthode ERPR ?
                </h3>
                <p className="text-lg text-blue-100 leading-relaxed mb-6">
                  Après plusieurs années d'enseignement de la langue arabe et une observation attentive des réussites et des échecs des apprenants, j'ai remarqué un point commun essentiel : ceux qui réussissaient appliquaient naturellement les principes de la méthode ERPR.
                  À l'inverse, ceux qui échouaient négligeaient au moins un de ces piliers fondamentaux.
                  C'est en partant de ce constat que j'ai travaillé sans relâche à créer une méthode simple, structurée et centrée sur l'essentiel — pour aider chaque élève à être à l'écoute, motivé à répéter, pratiquer et rester régulier, d'où l'acronyme ERPR.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold text-lg">Pr. Soidroudine</h4>
                    <p className="text-blue-200 text-sm">Créateur de la marque arabe-importance et de la méthode ERPR</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-600 rounded-xl p-6 border border-gray-500">
                <h4 className="text-lg font-semibold text-white mb-4">Qui suis-je ?</h4>
                <div className="text-lg text-blue-100 space-y-3">
                  <p>
                    Je m'appelle Soidroudine. Autodidacte passionné, j'ai consacré plusieurs années à l'apprentissage de la langue arabe.
                  </p>
                  <p>
                    Mon parcours m'a mené au Caire où j'ai étudié au centre Merkez Al-Ibaanah, puis sous la direction du Cheikh Mahmoud Ash-Shafi'î.
                  </p>
                  <p>
                    Fort de cette expérience, j'enseigne désormais et accompagne de nombreux élèves vers la réussite, certains poursuivant même leurs études jusqu'en Égypte.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Illustration Section */}
      <section className="py-15 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Illustration de ce qui vous attend !
            </h2>
            <p className="text-lg sm:text-xl text-blue-200 max-w-2xl mx-auto leading-relaxed">
              Une approche visuelle pour comprendre comment notre méthode transforme votre apprentissage.
            </p>
          </motion.div>

          {/* Image Cards */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700 flex-1 flex flex-col">
                <div className="aspect-video overflow-hidden mb-4 rounded-md border border-blue-700/30">
                  <Image
                    src={DashboardImage}
                    alt="Dashboard étudiant"
                    className="w-full h-full object-contain bg-gray-900"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Dashboard étudiant automatisé</h3>
                <p className="text-blue-200 text-base leading-relaxed mt-auto">
                  Suivi du temps passé sur les chapitres, progression graphique hebdomadaire et mensuelle, suivi automatique de vos avancées et mises à jour régulières.
                </p>
              </div>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex"
            >
              <div className="bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-700 flex-1 flex flex-col">
                <div className="aspect-video overflow-hidden mb-4 rounded-md border border-blue-700/30">
                  <Image
                    src={SupportImage}
                    alt="Support numérique dynamique"
                    className="w-full h-full object-contain bg-gray-900"
                  />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Support numérique automatisé</h3>
                <p className="text-blue-200 text-base leading-relaxed mt-auto">
                  Support dynamique et automatisé : suivi de votre progression, devoirs adaptés et 530 audios cliquables à l'infini.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>



      {/* Content Section */}
      <section id="contenu" className="py-10 bg-gray-900">
        <ContentSection />
      </section>

   <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Places limitées pour une gestion optimale, déblocage tous les 1 à 2 mois
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
            Soyez les premiers à être notifiés lors de sa sortie.
            Rejoindre la liste d'attente pour être notifié du lancement en bénéficiant d'une place limitée à seulement 89€ accès à vie !
          </p>

          {!isSubmitted ? (
            <div className="max-w-full sm:max-w-lg mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre adresse email"
                  className="flex-1 w-full bg-white px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none text-lg"
                />
           <button
  onClick={handleEmailSubmit}
  disabled={isLoading}
  className="sm:w-auto bg-gradient-to-r from-blue-800 to-blue-900 text-white px-4 py-4 rounded-xl font-semibold hover:from-blue-900 hover:to-blue-950 transition-colors duration-300 flex items-center justify-center gap-2 group whitespace-nowrap disabled:opacity-70 cursor-pointer text-lg"
>
  {isLoading ? (
    <span>Envoi...</span>
  ) : (
    <>
      <Mail className="w-5 h-5" />
      <span>Rejoindre</span>
      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
    </>
  )}
</button>

              </div>
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

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 mt-6"
          >
            <p className="text-blue-100 text-lg text-center max-w-md leading-relaxed">
              🎁 Rejoindre la liste d'attente dès maintenant et soyez <strong className="text-white">les premiers à être notifiés de sa sortie avec une place limitée pour une gestion optimale de l'accompagnement.</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="https://t.me/ArabeImportance"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg text-lg"
              >
                <Send className="w-5 h-5" />
                <span className="text-sm font-medium">Rejoindre Telegram</span>
              </Link>
              <Link
                href="https://instagram.com/arabeimportance"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-800 to-blue-900 hover:from-blue-900 hover:to-blue-950 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg text-lg"
              >
                <Instagram className="w-5 h-5" />
                <span className="text-sm font-medium">Suivre Instagram</span>
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}