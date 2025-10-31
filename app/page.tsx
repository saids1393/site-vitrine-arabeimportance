import Image from 'next/image';
import ClientHeaderWrapper from './components/ClientHeader';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';
import MotionSection from './components/MotionSection';
import VideoBackground from './components/Videobackground';

import { Volume2, Clock, Brain, Trophy, CheckCircle, Sparkles, Music, Play } from 'lucide-react';
import DashboardImage from '/public/assets/img/dashboard.png';
import SupportImage from '/public/assets/img/support.png';

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-slate-200 overflow-x-hidden">
      <ClientHeaderWrapper />

      <main>
   {/* Hero Section */}
    <section id="accueil" className="pt-24 sm:pt-32 min-h-screen flex items-center relative overflow-hidden">
  <VideoBackground />
  
  <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12 relative z-10">
            {/* Left */}
            <MotionSection direction="left" className="lg:w-1/2">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-semibold text-white">Nouvelle plateforme disponible</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                Apprenez l'<span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">arabe</span> autrement
              </h1>

              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                La première plateforme avec <span className="text-pink-400 font-semibold">audio intégré</span> sur chaque lettre, mot et phrase. Basée sur la méthode <strong className="text-white">ERPR</strong> : Écoute, Répétition, Pratique, Régularité.
              </p>

              <div className="bg-gradient-to-r from-pink-500/10 to-blue-500/10 border border-pink-500/30 rounded-2xl p-6 mb-8">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-white">75,65€</span>
                  <span className="text-2xl text-slate-400 line-through">89€</span>
                  <span className="bg-pink-500 text-white text-sm font-bold px-3 py-1 rounded-full">-15%</span>
                </div>
                <p className="text-slate-300 text-sm mb-3">
                  Offre de lancement valable 3 semaines
                </p>
                <p className="text-blue-300 text-sm font-medium">
                  Paiement en 2 fois disponible
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://arabeimportance.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-pink-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-center"
                >
                  S'inscrire maintenant
                </a>
                <a
                  href="https://arabeimportance.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-slate-800 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-slate-700 transition-all border border-slate-700 text-center"
                >
                  Connexion
                </a>
              </div>
            </MotionSection>


            {/* Right */}
            <MotionSection direction="right" delay={0.2} className="lg:w-1/2">
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl p-8 border border-pink-500/30 mt-10">
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
                  <div className="bg-slate-950 rounded-lg p-4">
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
            </MotionSection>
          </div>
        </section>

        {/* Audio Feature Section - EXCLUSIVE */}
        <section id="audio-feature" className="py-20 bg-gradient-to-r from-pink-500/10 to-blue-500/10 border-y border-pink-500/30">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-pink-500/20 border border-pink-500/50 rounded-full px-6 py-3 mb-6">
                  <Music className="w-5 h-5 text-pink-400" />
                  <span className="text-sm font-bold text-white uppercase tracking-wide">Fonctionnalité Exclusive</span>
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Audio intégré <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">illimité</span>
                </h2>
                <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                  La seule plateforme au monde offrant un audio cliquable sur <strong className="text-white">chaque lettre, chaque mot, chaque phrase</strong>. Apprenez en écoutant, où que vous soyez.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { title: 'Lettres', icon: Volume2, desc: 'Cliquez sur chaque lettre pour entendre sa prononciation parfaite' },
                  { title: 'Mots', icon: Volume2, desc: 'Écoutez la prononciation complète de tous les mots' },
                  { title: 'Phrases', icon: Volume2, desc: 'Phrases complètes avec audio natif pour une immersion totale' },
                ].map(({ title, icon: Icon, desc }, i) => (
                  <div key={i} className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-pink-500/30 hover:border-pink-500/60 transition-all transform hover:-translate-y-2">
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
                    Cette innovation unique vous permet d'apprendre à votre rythme, en répétant autant de fois que nécessaire, sans limite.
                  </p>
                </div>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* méthode Section */}
        <section id="méthode" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                La méthode <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">ERPR</span>
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
                  <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl border border-pink-500/30 h-full`}>
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

        {/* Gallery Section with 4 Images */}
        <section className="py-20 bg-slate-900/60">
          <div className="max-w-7xl mx-auto px-6">
            <MotionSection direction="up">
              <h2 className="text-4xl font-bold text-white text-center mb-12">
                Découvrez la <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">plateforme</span>
              </h2>
            </MotionSection>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { img: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Interface intuitive' },
                { img: 'https://images.pexels.com/photos/5905857/pexels-photo-5905857.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Apprentissage progressif' },
                { img: 'https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Exercices interactifs' },
                { img: 'https://images.pexels.com/photos/5905492/pexels-photo-5905492.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Suivi de progression' },
              ].map((item, i) => (
                <MotionSection key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.1 * i}>
                  <div className="bg-slate-800 rounded-2xl p-6 shadow-xl border border-pink-500/20 hover:border-pink-500/40 transition-all transform hover:-translate-y-2">
                    <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-slate-700">
                <img
                        src={item.img}
                        alt={item.title}
                        width={800}
                        height={450}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-white text-center">{item.title}</h3>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & CTA Section */}
        <section id="tarif" className="py-20 bg-gradient-to-br from-slate-900 to-blue-950">
          <div className="max-w-5xl mx-auto px-6">
            <MotionSection direction="up">
              <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-10 border border-pink-500/30 shadow-2xl">
                <div className="text-center mb-8">
                  <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                    Commencez votre apprentissage
                  </h2>
                  <p className="text-xl text-slate-300">
                    Rejoignez la plateforme la plus innovante pour apprendre l'arabe
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div className="bg-slate-950 rounded-2xl p-8 border border-pink-500/30">
                    <h3 className="text-2xl font-bold text-white mb-6">Tarif unique</h3>
                    <div className="flex items-baseline gap-3 mb-4">
                      <span className="text-5xl font-bold text-white">75,65€</span>
                      <span className="text-3xl text-slate-400 line-through">89€</span>
                    </div>
                    <div className="bg-pink-500/20 border border-pink-500/50 rounded-lg px-4 py-3 mb-6">
                      <p className="text-pink-300 font-semibold">
                        Économisez 15% - Offre valable 3 semaines
                      </p>
                      <p className="text-slate-400 text-sm">
                        À partir du 02/11/2025
                      </p>
                    </div>
                    <ul className="space-y-3 text-slate-300">
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <span>Accès illimité à tous les contenus</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <span>Audio sur chaque lettre, mot et phrase</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <span>Méthode ERPR complète</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-pink-400 flex-shrink-0" />
                        <span>Support et mises à jour</span>
                      </li>
                    </ul>
                  </div>

                  <div className="flex flex-col justify-center">
                    <div className="bg-blue-500/20 border border-blue-500/50 rounded-2xl p-6 mb-6">
                      <h4 className="text-xl font-semibold text-white mb-3">
                        Paiement facilité
                      </h4>
                      <p className="text-slate-300 mb-2">
                        Paiement en <strong className="text-white">2 fois sans frais</strong>
                      </p>
                      <p className="text-blue-300 text-sm">
                        2 x 37,82€
                      </p>
                    </div>

                    <a
                      href="https://arabeimportance.fr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-5 rounded-xl font-bold text-xl hover:from-pink-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 mb-4 text-center block"
                    >
                      S'inscrire maintenant
                    </a>

                    <p className="text-center text-slate-400 text-sm">
                      Accès immédiat après inscription
                    </p>
                  </div>
                </div>
              </div>
            </MotionSection>
          </div>
        </section>

        {/* Contenu Section */}
        <section id="contenu" className="py-20 bg-slate-900/70">
          <ContentSection />
        </section>
      </main>

      {/* ✅ Données structurées “Course” pour Google Education */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "méthode ERPR – Lecture et écriture en arabe",
            "description":
              "Cours complet et progressif pour apprendre la lecture et l’écriture en arabe. Basé sur la méthode ERPR : Écoute, Répétition, Pratique, Régularité.",
            "provider": {
              "@type": "Organization",
              "name": "Arabe Importance",
              "url": "https://arabeimportance.fr",
              "logo": "https://arabeimportance.fr/icon-512.png"
            },
            "inLanguage": "fr",
            "educationalLevel": "Beginner",
            "audience": {
              "@type": "Audience",
              "audienceType": "Débutants, autodidactes, enfants et adultes"
            },
            "duration": "P1M",
            "learningResourceType": "Cours interactif en ligne",
            "keywords": [
              "apprendre l'arabe",
              "cours arabe",
              "méthode ERPR",
              "lecture arabe",
              "écriture arabe",
              "alphabet arabe",
              "arabe facile",
              "arabe importance"
            ],
            "offers": {
              "@type": "Offer",
              "price": "59.00",
              "priceCurrency": "EUR",
              "availability": "https://schema.org/InStock",
              "url": "https://arabeimportance.fr",
              "validFrom": "2025-10-13"
            },
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "327"
            },
            "review": [
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Ahmed B." },
                "reviewBody":
                  "Une méthode très claire et motivante. J’ai enfin réussi à lire en arabe !",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
              },
              {
                "@type": "Review",
                "author": { "@type": "Person", "name": "Fatima L." },
                "reviewBody":
                  "Idéal pour les débutants. L’approche ERPR m’a vraiment aidée à progresser.",
                "reviewRating": { "@type": "Rating", "ratingValue": "5" }
              }
            ]
          }),
        }}
      />

      <Footer />
    </div>
  );
}
