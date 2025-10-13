// app/page.tsx
import Image from 'next/image';
import ClientHeaderWrapper from './components/ClientHeader';
import Footer from './components/Footer';
import ContentSection from './components/ContentSection';
import EmailForm from './components/EmailForm';
import MotionSection from './components/MotionSection';

import { Volume2, Clock, Brain, Trophy, CheckCircle, Play } from 'lucide-react';
import DashboardImage from '/public/assets/img/dashboard.png';
import SupportImage from '/public/assets/img/support.png';


export const revalidate = 60; 

export default function Home() {


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-slate-200 overflow-x-hidden">
      {/* Header */}
      <ClientHeaderWrapper />
      <main>
        {/* Hero Section */}
        <section id="accueil" className="pt-24 sm:pt-32 min-h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:flex lg:items-center lg:gap-12">
            {/* Left */}
            <MotionSection direction="left" className="lg:w-1/2">
              <h1 className="text-3xl sm:text-5xl lg:text-4xl font-bold text-white mb-6 leading-tight">
                Apprenez l'<span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">arabe</span> avec la<span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent"> méthode ERPR </span>: Niveau de la <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">lecture et de l'écriture</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8">
                Découvrez l'<strong className="text-white">importance de l'arabe</strong> dans votre apprentissage, basé sur <strong className="text-white">Écoute, Répétition, Pratique, Régularité</strong>.
              </p>
            </MotionSection>

            {/* Right */}
            <MotionSection direction="right" delay={0.2} className="lg:w-1/2">
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

        {/* Méthode Section */}
        <section id="méthode" className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Écoute', icon: Volume2, color: 'pink', desc: 'Importance de l\'écoute active.' },
              { title: 'Répétition', icon: Clock, color: 'blue', desc: 'Répétez pour ancrer durablement.' },
              { title: 'Pratique', icon: Brain, color: 'pink', desc: 'Appliquez pour maîtriser.' },
              { title: 'Régularité', icon: Trophy, color: 'blue', desc: 'Progressez jour après jour.' },
            ].map(({ title, icon: Icon, color, desc }, i) => (
              <MotionSection key={i} direction="up" delay={i * 0.2}>
                <div className={`bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-6 shadow-xl border border-pink-500/30`}>
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${color === 'pink' ? 'bg-pink-500' : 'bg-blue-500'}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                  <p className="text-slate-300">{desc}</p>
                </div>
              </MotionSection>
            ))}
          </div>
        </section>

        {/* Illustration Section */}
        <section className="py-20 bg-slate-900/60">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-8">
            {[DashboardImage, SupportImage].map((img, i) => (
              <MotionSection key={i} direction={i % 2 === 0 ? 'left' : 'right'} delay={0.2 * i}>
                <div className="bg-slate-800 rounded-xl p-6 shadow-lg border border-pink-500/20">
                  <div className="aspect-video rounded-lg overflow-hidden mb-4 border border-slate-700">
                    <Image src={img} alt="Illustration" className="object-contain bg-slate-900" />
                  </div>
                </div>
              </MotionSection>
            ))}
          </div>
        </section>

        {/* Contenu Section */}
        <section id="contenu" className="py-10 bg-slate-900/70">
          <ContentSection />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-slate-900/50 text-center">
          <EmailForm />
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
            "name": "Méthode ERPR – Lecture et écriture en arabe",
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
