import Image from 'next/image';
import ClientHeaderWrapper from './components/ClientHeader';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';
import MotionSection from './components/MotionSection';
// import VideoBackground from './components/Videobackground';
import EmailForm from './components/EmailForm';

import { Volume2, Clock, Brain, Trophy, CheckCircle, Sparkles, Music, Play, User, Heart, Globe, Briefcase, Shield, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-200 overflow-x-hidden">
      <ClientHeaderWrapper />

      <main>
        {/* Hero Section */}
        <section id="accueil" className="pt-10 sm:pt-20 min-h-screen flex items-center relative overflow-hidden">
          {/* <VideoBackground /> */}

          <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12 relative z-10">
            {/* Left */}
            <MotionSection direction="left" className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-semibold text-white">Nouvelle plateforme éducative</span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
               Méthode ERPR
              </h1>

              <h2 className="text-xl text-slate-300 mb-8 leading-relaxed">
                Une plateforme complète pour apprendre à lire, écrire et prononcer l'arabe. <span className="text-pink-400 font-semibold">Plus de 500 audios enregistrés par un enseignant, spécialement conçu pour les débutants.</span>
              </h2>
              <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-2xl p-6 mb-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-3xl font-bold text-white">0€</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">7 jours gratuit</h3>
                    <p className="text-sm text-slate-300">Sans carte bancaire • Sans engagement</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  Essayer maintenant – Gratuit 100%
                </a>
                <a
                  href="https://methode-erpr-by-arabeimportance.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 text-center"
                >
                  Se connecter
                </a>
              </div>
            </MotionSection>

            {/* Right */}
            <MotionSection direction="right" delay={0.2} className="lg:w-1/2">
              <div className="relative bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-2xl shadow-2xl p-8 border border-pink-500/30 mt-10">
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

                  {/* Progress Bar */}
                  <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-lg p-4">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm text-slate-400">Progression</span>
                      <span className="text-sm font-medium text-white">75%</span>
                    </div>
                    <div className="w-full bg-slate-800 rounded-full h-2">
                      <MotionSection>
                        <div className="bg-gradient-to-r from-pink-500 to-blue-500 h-2 rounded-full" style={{ width: '75%' }} />
                      </MotionSection>
                    </div>
                  </div>

                  {/* Statistiques */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center p-3 bg-slate-950 rounded-lg border border-pink-500/30">
                      <Volume2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <span className="text-xs text-slate-300">+500 audios</span>
                    </div>
                    <div className="text-center p-3 bg-slate-950 rounded-lg border border-pink-500/30">
                      <Brain className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                      <span className="text-xs text-slate-300">Quiz interactifs</span>
                    </div>
                    <div className="text-center p-3 bg-slate-950 rounded-lg border border-pink-500/30">
                      <CheckCircle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                      <span className="text-xs text-slate-300">Apprentissage validé</span>
                    </div>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Méthode Section */}
        <section id="méthode" className="py-20 bg-gradient-to-r from-black-500/10 to-black-500/10 border-y border-pink-500/30">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
              Méthode <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">ERPR </span>?
              </h2>
            </MotionSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: 'Écoute', icon: Volume2, color: 'pink', desc: 'Importance de l\'écoute active pour mémoriser.' },
                { title: 'Répétition', icon: Clock, color: 'blue', desc: 'Répétez pour ancrer durablement.' },
                { title: 'Pratique', icon: Brain, color: 'pink', desc: 'Appliquez pour maîtriser parfaitement.' },
                { title: 'Régularité', icon: Trophy, color: 'blue', desc: 'Progressez jour après jour avec constance.' },
              ].map(({ title, icon: Icon, color, desc }, i) => (
                <MotionSection key={i} direction="up" delay={i * 0.2}>
                  <div className={`bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl p-6 shadow-xl h-full`}>
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color === 'pink' ? 'bg-pink-500' : 'bg-blue-500'}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                    <p className="text-slate-300">{desc}</p>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* Audio Feature Section */}
        <section id="audio-feature" className="py-20 bg-gradient-to-r from-black-500/10 to-black-500/10 border-y border-pink-500/30">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/50 rounded-full px-6 py-3 mb-6">
                  <Music className="w-5 h-5 text-pink-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wide">Point fort</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Audios intégrés <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">illimités</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Une approche moderne : chaque lettre, mot et phrase est accompagnée d'un <strong className="text-white">audio enregistré par l'enseignant</strong>.
                  Plus de 500 enregistrements pour apprendre avec une prononciation authentique et claire.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { title: 'Lettres', icon: Volume2, desc: 'Cliquez sur chaque lettre pour écouter sa prononciation claire et précise.' },
                  { title: 'Mots', icon: Volume2, desc: 'Cliquez sur chaque mot pour écouter sa prononciation claire et précise.' },
                  { title: 'Phrases', icon: Volume2, desc: 'Cliquez sur chaque phrase pour écouter sa prononciation claire et précise.' },
                ].map(({ title, icon: Icon, desc }, i) => (
                  <div key={i} className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl p-8 hover:border-pink-500/60 transition-all transform hover:-translate-y-2">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3 text-center">{title}</h3>
                    <p className="text-slate-300 text-center">{desc}</p>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <div className="inline-block bg-slate-950 border border-pink-500/30 rounded-2xl p-8 max-w-2xl">
                  <CheckCircle className="w-12 h-12 text-pink-400 mx-auto mb-4" />
                  <p className="text-lg text-white font-semibold">
                    Cette méthode interactive vous permet d'écouter, répéter et progresser à votre rythme, aussi souvent que vous le souhaitez.
                  </p>
                </div>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Support & Accompaniment Section */}
        <section id="support" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30 rounded-full px-6 py-3 mb-6">
                  <Heart className="w-5 h-5 text-pink-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wide">Vous n'êtes jamais seul</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Accompagnement <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">personnalisé sur mesure</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Avec votre accès premium, bénéficiez d'un suivi continu et d'une méthode adaptée à votre progression
                </p>
              </div>
            </MotionSection>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: 'Progression Surveillée',
                  desc: 'Votre parcours d\'apprentissage est suivi en temps réel. Nous analysons vos avancées et ajustons les contenus pour maximiser votre efficacité.',
                  icon: Trophy,
                  highlight: true
                },
                {
                  title: 'Google Drive Personnel',
                  subtitle: 'Stockage de vos rendus',
                  desc: 'Vos rendus sont stockés en toute sécurité sur un Google Drive personnel',
                  icon: Briefcase,
                  highlight: true
                },
                {
                  title: 'Support Continu',
                  desc: 'Des questions ? Des blocages ? On est là pour vous. Conseils, motivations et solutions adaptées à vos besoins spécifiques.',
                  icon: User,
                  highlight: true
                },
              ].map(({ title, subtitle, desc, icon: Icon, highlight }, i) => (
                <MotionSection key={i} direction="up" delay={i * 0.15}>
                  <div className={`relative rounded-2xl p-8 border transition-all transform hover:-translate-y-2 ${highlight
                      ? 'bg-gradient-to-br from-pink-500/20 to-blue-500/20 border-pink-500/50 shadow-xl shadow-pink-500/10'
                      : 'bg-gradient-to-r from-pink-500/10 to-blue-500/10 border-pink-500/30'
                    }`}>
                 
                    <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                    {subtitle && <p className="text-pink-300 font-semibold text-sm mb-3">{subtitle}</p>}
                    <p className="text-slate-300 leading-relaxed">{desc}</p>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* Target Audience & Key Features - SELLING POINTS */}
        <section id="cible" className="py-20 bg-gradient-to-r from-black-500/10 to-black-500/10 border-y border-pink-500/30">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30 rounded-full px-6 py-3 mb-6">
                  <Trophy className="w-5 h-5 text-pink-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wide">Conçu pour vous</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Pour les <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">débutants et avancés</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Une plateforme pensée spécialement pour ceux qui veulent apprendre l'arabe de zéro, à leur rythme, sans frustration
                </p>
              </div>
            </MotionSection>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: '+500 Audios intégrés',
                  subtitle: 'Prononciation authentique',
                  desc: 'Chaque lettre, mot et phrase possède un audio enregistré par l\'enseignant. Écoutez une prononciation claire, précise et authentique autant de fois que vous le souhaitez.',
                  icon: Volume2,
                  highlight: true
                },
                {
                  title: 'Vidéos explicatives',
                  subtitle: 'Comprendre chaque lettre',
                  desc: 'Des tutoriels vidéo détaillés qui vous montrent comment prononcer chaque lettre de l\'alphabet arabe. Visuel + auditif = apprentissage plus efficace.',
                  icon: Play,
                  highlight: true
                },
                {
                  title: 'Accompagnement personnalisé',
                  subtitle: 'Vous n\'êtes jamais seul',
                  desc: 'Progression suivie, conseils adaptés à votre niveau, et support continu pour surmonter vos blocages et progresser rapidement.',
                  icon: Brain,
                  highlight: true
                },
              ].map(({ title, subtitle, desc, icon: Icon, highlight }, i) => (
                <MotionSection key={i} direction="up" delay={i * 0.15}>
                  <div className={`relative rounded-2xl p-8 border transition-all transform hover:-translate-y-2 ${highlight
                      ? 'bg-gradient-to-br from-pink-500/20 to-blue-500/20 border-pink-500/50 shadow-xl shadow-pink-500/10'
                      : 'bg-gradient-to-r from-pink-500/10 to-blue-500/10 border-pink-500/30'
                    }`}>
                    {highlight && (
                      <div className="absolute -top-3 -right-3 px-4 py-1 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full text-white text-xs font-bold">
                        ⭐ Essentiel
                      </div>
                    )}
                    <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
                    <p className="text-pink-300 font-semibold text-sm mb-3">{subtitle}</p>
                    <p className="text-slate-300 leading-relaxed">{desc}</p>
                  </div>
                </MotionSection>
              ))}
            </div>

            {/* Stats/Benefits Row */}
            <MotionSection direction="up" delay={0.3}>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    stat: '100%',
                    label: 'Conçu pour les débutants',
                    desc: 'Aucune connaissance préalable requise. Du zéro jusqu\'à maîtriser la lecture et l\'écriture.'
                  },
                  {
                    stat: '∞',
                    label: 'Apprentissage à votre rythme',
                    desc: 'Accès à vie à la plateforme. Répétez, écoutez et pratiquez autant que vous le souhaitez, quand vous le souhaitez.'
                  },
                ].map(({ stat, label, desc }, i) => (
                  <div key={i} className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl p-8 text-center">
                    <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent mb-3">
                      {stat}
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">{label}</h4>
                    <p className="text-slate-300">{desc}</p>
                  </div>
                ))}
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Pourquoi Apprendre l'Arabe Section */}
        <section id="pourquoi-apprendre" className="py-20 bg-gradient-to-r from-black-500/10 to-black-500/10 border-y border-pink-500/30">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <div className="text-center mb-12">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Pourquoi apprendre <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">l'arabe</span> ?
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  Découvrez les raisons qui font de l'arabe une langue essentielle dans le monde d'aujourd'hui
                </p>
              </div>
            </MotionSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: 'Une langue universelle',
                  icon: Globe,
                  desc: 'Parlée par plus de 400 millions de personnes à travers le monde, l\'arabe est la 5ème langue la plus parlée.'
                },
                {
                  title: 'Richesse culturelle',
                  icon: Sparkles,
                  desc: 'Accédez à une civilisation millénaire, à la littérature, la poésie et à une sagesse ancestrale inépuisable.'
                },
                {
                  title: 'Opportunités professionnelles',
                  icon: Briefcase,
                  desc: 'L\'arabe ouvre les portes à des carrières internationales dans les affaires, la diplomatie et les médias.'
                },
                {
                  title: 'Patrimoine spirituel',
                  icon: Heart,
                  desc: 'Comprenez le Coran et les textes religieux dans leur langue originelle, une expérience profonde et authentique.'
                },
              ].map(({ title, icon: Icon, desc }, i) => (
                <MotionSection key={i} direction="up" delay={i * 0.15}>
                  <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl p-6 h-full hover:border-pink-500/60 transition-all transform hover:-translate-y-2">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-3">{title}</h3>
                    <p className="text-slate-300 text-sm leading-relaxed">{desc}</p>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* About Creator - Biographie */}
        <section id="biographie" className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Left - Story */}
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    Comment est née <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">la méthode ERPR</span> ?
                  </h2>
                  <p className="text-slate-300 leading-relaxed mb-8">
                    Après plusieurs années d'enseignement de la langue arabe et une observation attentive des réussites et des échecs des apprenants, j'ai remarqué un point commun essentiel : ceux qui réussissaient appliquaient naturellement les principes de la méthode ERPR.
                    À l'inverse, ceux qui échouaient négligeaient au moins un de ces piliers fondamentaux.
                    C'est en partant de ce constat que j'ai travaillé sans relâche à créer une méthode simple, structurée et centrée sur l'essentiel — pour aider chaque élève à être à l'écoute, motivé à répéter, pratiquer et rester régulier.
                  </p>

                  <div className="flex items-center gap-4 p-6 bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl">
                    <div className="w-14 h-14 bg-gradient-to-r from-pink-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <User className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">Prof. Soidroudine</h4>
                      <p className="text-slate-400">Créateur de la méthode ERPR</p>
                    </div>
                  </div>
                </div>

                {/* Right - Bio */}
                <MotionSection direction="right" delay={0.2}>
                  <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 rounded-2xl p-8 border border-pink-500/30 h-full">
                    <h3 className="text-2xl font-semibold text-white mb-6">Qui suis-je ?</h3>
                    <div className="text-slate-300 space-y-4 leading-relaxed">
                      <p>
                        Je m'appelle Soidroudine. Autodidacte passionné, j'ai consacré plusieurs années à l'apprentissage de la langue arabe.
                      </p>
                      <p>
                        Mon parcours m'a mené au Caire où j'ai étudié au centre Merkez Al-Ibaanah, puis sous la direction du Cheikh Mahmoud Ash-Shafi'î.
                      </p>
                      <p>
                        Fort de cette expérience, j'enseigne désormais et accompagne de nombreux élèves vers la réussite, certains poursuivant même leurs études jusqu'en Égypte.
                      </p>
                      <p className="pt-2 border-t border-pink-500/30">
                        La création de la méthode ERPR représente mon engagement envers chaque apprenant : offrir un chemin clair, efficace et motivant pour maîtriser l'arabe.
                      </p>
                    </div>
                  </div>
                </MotionSection>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Contenu Section */}
        <section id="contenu" className="py-20">
          <ContentSection />
        </section>

        {/* Gallery Section with 4 Images */}
        <section className="py-20 bg-gradient-to-r from-black-500/10 to-black-500/10 border-y border-pink-500/30">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Une plateforme <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">moderne<br />
                  automatisée et dynamique</span>
              </h2>
            </MotionSection>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { src: '/assets/img/canvaDestock.png', title: 'Tableau de bord sur PC' },
                { src: '/assets/img/canvaDestockCours2.PNG', title: 'Page d\'apprentissage dynamique' },
                { src: '/assets/img/mobile5.png', title: 'Tableau de bord mobile' },
                { src: '/assets/img/mobile6.png', title: 'Page d\'apprentissage dynamique mobile' },
              ].map((item, i) => (
                <MotionSection key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1 * i}>
                  <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl p-6 shadow-xl hover:border-pink-500/40 transition-all transform hover:-translate-y-2">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-slate-700">
                      <Image
                        src={item.src}
                        alt={item.title}
                        width={800}
                        height={450}
                        className="object-contain w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center">{item.title}</h3>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final Section - Essai Gratuit SEULEMENT */}
        <section
          id="essai-gratuit"
          className="py-20 bg-gradient-to-r from-black-500/10 to-black-500/10 border-y border-pink-500/30"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <MotionSection direction="up">
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                  Prêt à commencer votre apprentissage ?
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Testez la méthode ERPR pendant 7 jours sans aucun risque
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-12">
                {/* Card 1: Ce que vous recevrez */}
                <div className="group">
                  <div className="bg-gradient-to-br from-slate-900 to-slate-800 border-2 border-pink-500/30 rounded-3xl p-8 h-full hover:border-pink-500/60 transition-all transform hover:-translate-y-2 shadow-xl">
                    <div className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
                      ✨ Accès Immédiat
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-8">
                      Vous recevrez
                    </h3>

                    <div className="space-y-4">
                       <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Bonus : Chapitre avant la méthode</p>
                          <p className="text-slate-400 text-sm">comprendre l'ERPR et comment les mettre en pratique</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Chapitre 1 Complet avec 8 leçons</p>
                          <p className="text-slate-400 text-sm">Maîtrise des lettres arabes et prononciation</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Plus de 500 Audios</p>
                          <p className="text-slate-400 text-sm">Audios intégrés dans le support numérique</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Aucune Carte Bancaire</p>
                          <p className="text-slate-400 text-sm">Zéro données à fournir</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-semibold">Accès Automatique</p>
                          <p className="text-slate-400 text-sm">Se bloque après 7 jours</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: CTA + Engagement */}
                <div className="group">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 border-2 border-green-500/50 rounded-3xl p-8 h-full flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2">
                    <div>
                      <div className="inline-block bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full mb-6">
                        🎁 7 Jours Gratuits
                      </div>
                      
                      <h3 className="text-2xl font-bold text-white mb-4">
                        Sans Engagement
                      </h3>

                      <div className="space-y-3 mb-8">
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <p className="text-slate-200">Décidez après l'essai</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <p className="text-slate-200">Accès complet pendant 7 jours</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                          <p className="text-slate-200">Se bloque automatiquement après</p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <a
                        href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:from-green-600 hover:to-emerald-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                      >
                        Essayer Gratuitement
                      </a>
                      <p className="text-center text-sm text-slate-300 italic">
                        Sans engagement – Décidez plus tard
                      </p>

                      {/* Options de paiement discrets */}
                      <div className="pt-4 border-t border-green-500/30 mt-4">
                        <p className="text-xs text-slate-400 text-center mb-3 font-semibold">
                          Débloquer l'accès complet
                        </p>
                        <a
                          href="https://methode-erpr-by-arabeimportance.vercel.app/checkout"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block bg-gradient-to-r from-blue-500/80 to-purple-500/80 hover:from-blue-600 hover:to-purple-600 text-white text-xs font-bold py-2 px-3 rounded-lg transition-all text-center"
                        >
                          ✨ Accès complet directement code promo : ERPR15
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Bonus */}
              <div className="text-center">
                <div className="inline-block bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl px-8 py-6 max-w-2xl">
                  <p className="text-slate-300">
                    <span className="text-pink-300 font-semibold">✨ Après vos 7 jours :</span> Continuez votre progression avec un <span className="text-white font-semibold">accompagnement personnalisé</span>, un <span className="text-white font-semibold">Google Drive dédié</span>, et un <span className="text-white font-semibold">support continu</span>
                  </p>
                </div>
              </div>
            </MotionSection>
          </div>
        </section>
        <EmailForm />
      </main>
      <Footer />
    </div>
  );
}