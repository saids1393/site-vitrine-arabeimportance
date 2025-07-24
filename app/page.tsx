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
  User
} from 'lucide-react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEmailSubmit = () => {
    if (email) {
      setIsSubmitted(true);
      setEmail('');
      setTimeout(() => setIsSubmitted(false), 3000);
    }
  };

  const menuItems = [
    { label: 'Accueil', sectionId: 'accueil' },
    { label: 'Méthode', sectionId: 'méthode' },
    { label: 'Contenu', sectionId: 'contenu' },
    { label: 'Contact', sectionId: 'contact' }
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
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">E</span>
              </div>
              <span className="text-2xl font-bold text-white">ERPR</span>
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
                  className="text-gray-300 hover:text-blue-400 transition-colors font-medium"
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
                  className="w-full max-w-xs text-center px-4 py-3 text-gray-300 hover:text-blue-400 hover:bg-gray-800 rounded-md transition-colors"
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
                  Une méthode conçue pour apprendre à lire et écrire l'arabe rapidement.
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
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl"
                >
                  Souscrire dès maintenant
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
                  <span className="text-sm text-gray-400">99% de réussite</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-green-600 mr-2" />
                  <span className="text-sm text-gray-400">Résultats en quelques semaines</span>
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
                      <span className="text-xs text-gray-400">Audio</span>
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
              Une approche logique basée sur quatre piliers fondamentaux pour une réussite garantie
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
              Contenu complet et innovant
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Chaque chapitre contient tout ce dont vous avez besoin pour progresser rapidement et va à l'essentiel !
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: '1 Vidéo par Chapitre',
                description: 'Chaque chapitre commence par une vidéo explicative complète avec sous-titres en arabe et français, animée par des professeurs natifs.',
                icon: Play,
                features: ['1 vidéo HD par chapitre', 'Sous-titres bilingues', 'Professeurs natifs', 'Explications détaillées']
              },
              {
                title: '5 Quiz par Chapitre',
                description: 'Chaque chapitre contient 5 quiz progressifs pour valider vos acquis et identifier vos points d\'amélioration.',
                icon: Brain,
                features: ['5 quiz par chapitre', 'Difficulté progressive', 'Feedback instantané', 'Suivi des résultats']
              },
              {
                title: 'Audio Interactif',
                description: 'Introduction audio explicative au clic de chaque lettre arabe avec prononciation native et suivi de progression.',
                icon: Volume2,
                features: ['Audio par lettre', 'Prononciation native', 'Clic interactif', 'Suivi progression']
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
                La méthode ERPR sera disponible au prix de <strong className="text-white">64,99€</strong> avec un accès à vie
                incluant toutes les vidéos, quiz, audios interactifs et un accompagnement personnalisé.
                Souscrivez dès maintenant pour être averti de sa sortie et bénéficier de <strong className="text-blue-400">10% de réduction supplémentaire</strong>,
                soit <strong className="text-white">58,49€</strong> et être averti d'une démo gratuite.
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
                      Audio interactif pour chaque lettre
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
                      Accès à vie
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Email Collection Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Le premier module sera gratuit
            </h2>
            <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto">
              Soyez les premiers à commencer lors de sa sortie.
              Inscrivez-vous pour être averti du lancement, accéder gratuitement au premier module et bénéficier de 10% de réduction supplémentaire.
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
                    className="bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center group whitespace-nowrap"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Souscrire
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
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

            <p className="text-blue-200 text-sm mt-6">
              🎁 Souscrivez dès maintenant et soyez <strong>les premiers à être avertis de sa sortie avec 10% de réduction et en plus de la démo gratuite de la première partie de la méthode</strong>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400 text-sm">
              &copy; 2025 <span className="text-white font-medium">son_importance</span>. Tous droits réservés.
            </p>
          </div>
        </div>
      </footer>

    </div>
  );
}