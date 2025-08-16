'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
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
  Menu,
  X,
  User,
  AlertCircle,
  Instagram,
  Send,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logoUrl from './assets/img/logo-son-importance.png';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  const menuItems = [
    { label: 'Accueil', sectionId: 'accueil' },
    { label: 'Méthode', sectionId: 'méthode' },
    { label: 'Contenu', sectionId: 'contenu' },
    { label: 'Notification', sectionId: 'contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-2"
            >
              {/* Logo */}
              <Link href="/" className="flex items-center cursor-pointer">
                <Image
                  src={logoUrl}
                  alt="Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <div className="flex flex-col ml-3">
                  <span className="text-xl text-white font-bold">
                    Son importance
                  </span>
                  <span className="text-sm text-white opacity-70 font-normal">
                    L'importance de la langue arabe
                  </span>
                </div>
              </Link>
            </motion.div>
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              {menuItems.map((item, index) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium cursor-pointer"
                >
                  {item.label}
                </motion.button>
              ))}
            </nav>
            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-gray-900 border-t border-gray-700"
          >
            <div className="px-4 py-4 space-y-1 flex flex-col items-center">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.sectionId)}
                  className="w-full max-w-xs text-center px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors cursor-pointer"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Hero Section */}
      <section id="accueil" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
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
                className="inline-flex items-center bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-700/50"
              >
                <Star className="w-4 h-4 mr-2" />
                Méthode logique qui va vers l'essentiel
              </motion.div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Apprenez à lire et écrire avec{' '}
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  la méthode ERPR
                </span>
              </h1>
              <div className="mb-8">
                <h2 className="text-xl text-gray-300 mb-4 font-medium">
                  Écoute – Répétition – Pratique – Régularité
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed">
                  Une méthode conçue pour apprendre à lire et écrire l'arabe rapidement, incluant le niveau Tajwid et en préparation.
                  Grâce à une approche qui va à l'essentiel pour maintenir la régularité, une répétition guidée et un rythme adapté,
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
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl cursor-pointer"
                >
                  Être notifié dès maintenant
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="flex items-center gap-8 mt-12 pt-8 border-t border-gray-700"
              >
                <div className="flex items-center">
                  <Users className="w-5 h-5 text-blue-600 mr-2" />
                  <span className="text-sm text-gray-400">+60 élèves accompagnés</span>
                </div>
                <div className="flex items-center">
                  <Trophy className="w-5 h-5 text-purple-500 mr-2" />
                  <span className="text-sm text-gray-400">100% de réussite</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-400">Résultats rapidement</span>
                </div>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              <div className="relative bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-700">
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-5 h-5 text-white" />
                </div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">Chaque chapitre</h3>
                    <div className="w-12 h-12 bg-blue-900/30 rounded-full flex items-center justify-center border border-blue-700/50">
                      <Play className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="bg-gray-700 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Progression</span>
                      <span className="text-sm font-medium text-white">75%</span>
                    </div>
                    <div className="w-full bg-gray-600 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '75%' }}
                        transition={{ duration: 1.5, delay: 1 }}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-blue-900/20 rounded-lg border border-blue-700/30">
                      <Volume2 className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                      <span className="text-xs text-gray-400">+530 audios cliquables</span>
                    </div>
                    <div className="text-center p-3 bg-purple-900/20 rounded-lg border border-purple-700/30">
                      <Brain className="w-6 h-6 text-purple-600 mx-auto mb-2" />
                      <span className="text-xs text-gray-400">Quiz</span>
                    </div>
                    <div className="text-center p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                      <CheckCircle className="w-6 h-6 text-green-600 mx-auto mb-2" />
                      <span className="text-xs text-gray-400">Validé</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-8 -left-8 w-16 h-16 bg-gradient-to-r from-purple-400 to-blue-500 rounded-full opacity-20"
              />
              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-8 -right-8 w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
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
              Qu'est-ce que la méthode <span className="text-blue-600">ERPR</span> ?
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto mb-12">
              Une approche logique basée sur quatre piliers fondamentaux pour une réussite garantie, disponible dans une application web automatisée avec envoi de devoirs à chaque fin de chapitre.
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
                color: 'purple',
                delay: 0.2
              },
              {
                title: '🎯 P – Pratique',
                description: 'Appliquer pour maîtriser',
                icon: Brain,
                color: 'green',
                delay: 0.4
              },
              {
                title: '🎯 R – Régularité',
                description: 'De la discipline fréquente pour garder tout au frais',
                icon: Trophy,
                color: 'yellow',
                delay: 0.6
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: item.delay }}
                viewport={{ once: true }}
                className="bg-gray-700 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-600"
              >
                <div className={`w-12 h-12 bg-${item.color}-900/30 rounded-lg flex items-center justify-center mb-4 border border-${item.color}-700/50`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.description}</p>
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
                <p className="text-gray-400 leading-relaxed mb-6">
                  Après plusieurs années d'enseignement de la langue arabe et une observation attentive des réussites et des échecs des apprenants, j'ai remarqué un point commun essentiel : ceux qui réussissaient appliquaient naturellement les principes de la méthode ERPR.
                  À l'inverse, ceux qui échouaient négligeaient au moins un de ces piliers fondamentaux.
                  C'est en partant de ce constat que j'ai travaillé sans relâche à créer une méthode simple, structurée et centrée sur l'essentiel — pour aider chaque élève à être à l'écoute, motivé à répéter, pratiquer et rester régulier, d'où l'acronyme ERPR.
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <User className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">son_importance</h4>
                    <p className="text-gray-400 text-sm">Créateur de la méthode ERPR</p>
                  </div>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl p-6 border border-gray-600">
                <h4 className="text-lg font-semibold text-white mb-4">Qui suis-je ?</h4>
                <div className="text-gray-400 space-y-3">
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

      {/* Content Section */}
      <section id="contenu" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Contenu complet et simple
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Chaque chapitre contient tout ce dont vous avez besoin pour progresser rapidement et va à l'essentiel, avec plus de 530 audios cliquables en illimité !
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: '1 Vidéo par chapitre',
                description: 'Chaque chapitre a une vidéo explicative complète en français',
                icon: Play,
                features: [
                  '1 vidéo HD par chapitre',
                  'Explications détaillées'
                ]
              },
              {
                title: '1 quiz composé de 5 questions par chapitre',
                description: 'Chaque chapitre contient 1 quiz composé de 5 questions progressives pour valider vos acquis et identifier vos axes d\'amélioration.',
                icon: Brain,
                features: [
                  '1 quiz de 5 questions par chapitre',
                  'Difficulté progressive',
                  'Suivi des résultats'
                ]
              },
              {
                title: 'Audio Interactif',
                description: "Chaque lettre et chaque mot en arabe sont accompagnés d'un audio accessible d'un simple clic, avec prononciation et suivi automatique de votre progression.",
                icon: Volume2,
                features: [
                  'Plus de 530 audios cliquables',
                  'Audio par lettre',
                  'Audio par mot',
                  'Clic interactif',
                  'Progression automatisée'
                ]
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-800 rounded-xl p-8 hover:bg-gray-700 transition-colors duration-300 border border-gray-700"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, i) => (
                    <li key={i} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          {/* Pricing Information */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-gray-800 rounded-2xl p-8 border border-gray-700 max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-6">
                Accès complet à la méthode ERPR
              </h3>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                La méthode ERPR sera disponible au prix de <strong className="text-white">80€</strong> avec un accès à vie
                incluant toutes les vidéos, quiz, audios interactifs et un accompagnement personnalisé.
                Inscrivez-vous dès maintenant pour être notifié de sa sortie et bénéficier d'une <strong className="text-red-400">place limitée pour une gestion optimale de l'accompagnement</strong>,
                déblocage tous les 1 à 2 mois pour les actifs sur mon canal Telegram, et être averti d'une démo gratuite.
              </p>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Contenu inclus :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      1 vidéo explicative par chapitre
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      5 quiz progressifs par chapitre
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Plus de 530 audios cliquables en illimité
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Services inclus :</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Suivi de progression personnalisé
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Accompagnement personnalisé
                    </li>
                    <li className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      Support H24
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Collection Section */}
      <section id="contact" className="py-20 bg-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Places limitées pour une gestion optimale, déblocage tous les 1 à 2 mois pour les actifs sur mon canal Telegram
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Soyez les premiers à commencer lors de sa sortie.
              Inscrivez-vous pour être notifié du lancement et bénéficier d'une place limitée à seulement 80€
            </p>
            {!isSubmitted ? (
              <div className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Votre adresse email"
                      className="w-full bg-white px-6 py-4 rounded-xl text-gray-900 placeholder-gray-500 border-0 focus:ring-4 focus:ring-blue-300 focus:outline-none"
                    />
                  </div>
                  <button
                    onClick={handleEmailSubmit}
                    disabled={isLoading}
                    className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center group whitespace-nowrap disabled:opacity-70 cursor-pointer"
                  >
                    {isLoading ? (
                      <span>Envoi...</span>
                    ) : (
                      <>
                        <Mail className="mr-2 w-5 h-5" />
                        Être notifié
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
                {error && <p className="text-red-200 mt-2 text-sm">{error}</p>}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-green-500 text-white px-8 py-4 rounded-xl inline-flex items-center"
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
              <p className="text-gray-300 text-sm text-center max-w-md">
                🎁 Inscrivez-vous dès maintenant et soyez <strong>les premiers à être notifiés de sa sortie avec une place limitée pour une gestion optimale de l'accompagnement et en plus de la démo gratuite de la première partie de la méthode</strong>
              </p>
              <div className="flex gap-4">
                <Link
                  href="https://t.me/son_importance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg"
                >
                  <Send className="w-5 h-5" />
                  <span className="text-sm font-medium">Rejoindre Telegram</span>
                </Link>
                <Link
                  href="https://instagram.com/son_importance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors shadow-md hover:shadow-lg"
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
      <footer className="bg-gray-900 text-white py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              &copy; 2025 <span className="text-white font-medium">son_importance</span>. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <Link href="https://t.me/son_importance" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com/son_importance" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
