// components/ContentSection.tsx
'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Play,
  Brain,
  Volume2,
  CheckCircle,
  Monitor,
  Edit3,
  Send,
  Users,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

interface Feature {
  title: string;
  description: string;
  icon: any;
  features: string[];
}

const ContentSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [isMobile, setIsMobile] = useState(false);

  const features: Feature[] = [
    {
      title: "Vidéos par chapitre",
      description: "Vidéos explicatives complète en français",
      icon: Play,
      features: ["Vidéos HD", "Explications détaillées"],
    },
    {
      title: "Quizs progressifs",
      description: "Validez vos acquis et identifiez vos axes d'amélioration.",
      icon: Brain,
      features: [
        "Quizs de questions par chapitre",
        "Difficulté progressive",
        "Suivi des résultats",
      ],
    },
    {
      title: "Audio Interactif",
      description: "Chaque lettre et mot en arabe avec un audio cliquable en illimité.",
      icon: Volume2,
      features: [
        "Plus de 530 audios cliquables",
        "Audio par lettre",
        "Audio par mot",
        "Audio par phrase",
      ],
    },
    {
      title: "Support numérique dynamique",
      description: "Un accompagnement fluide et rapide.",
      icon: Monitor,
      features: ["Accessible pour tout appareil", "Mises à jour continues"],
    },
    {
      title: "Exercices pratiques",
      description: "Appliquez vos connaissances avec des exercices ciblés.",
      icon: Edit3,
      features: ["Corrections", "Situation réelle"],
    },
    {
      title: "Devoirs automatisés",
      description: "Recevez vos devoirs automatiquement.",
      icon: Send,
      features: ["Devoirs pratique", "Devoirs qualitatifs"],
    },
    {
      title: "Accompagnement individuel",
      description: "Un suivi humain via WhatsApp & support 7j/7.",
      icon: Users,
      features: ["Coaching personnalisé", "Réponse rapide"],
    },
  ];

  // Responsivité
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSlidesToShow(3);
        setIsMobile(false);
      } else if (window.innerWidth >= 768) {
        setSlidesToShow(2);
        setIsMobile(false);
      } else {
        setSlidesToShow(1);
        setIsMobile(true);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxSlides = Math.max(0, features.length - slidesToShow);

  const nextSlide = () => setCurrentSlide(prev => (prev >= maxSlides ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide(prev => (prev <= 0 ? maxSlides : prev - 1));
  const goToSlide = (index: number) => setCurrentSlide(index);

  // Auto-slide
  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [currentSlide, maxSlides]);

  return (
    <section id="contenu" className="py-20 bg-slate-900/70 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
            Contenu complet et simple
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Chaque chapitre contient tout ce dont vous avez besoin pour progresser rapidement et va à l'essentiel, avec plus de 530 audios cliquables en illimité !
          </p>
        </motion.div>

        {/* Slider */}
        <div className="relative">
          {!isMobile && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/70 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-pink-500/30"
                aria-label="Slide précédent"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-slate-800/70 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 border border-pink-500/30"
                aria-label="Slide suivant"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div className="overflow-hidden mx-0 sm:mx-12">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)` }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className={`flex-shrink-0 px-3 ${
                    slidesToShow === 1 ? 'w-full' : slidesToShow === 2 ? 'w-1/2' : 'w-1/3'
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-slate-800/60 backdrop-blur-xl rounded-xl p-8 hover:bg-slate-700 transition-colors duration-300 border border-pink-500/20 shadow-lg h-full">
                    <div className="w-16 h-16 bg-gradient-to-r from-pink-400 to-blue-400 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-lg text-slate-300 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.features.map((item, i) => (
                        <li key={i} className="flex items-center text-slate-300 text-sm sm:text-base">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-6 md:mt-8 space-x-2">
            {Array.from({ length: maxSlides + 1 }, (_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-pink-400 scale-125'
                    : 'bg-gray-600 hover:bg-pink-400'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Pricing Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-slate-800/60 backdrop-blur-xl border border-pink-500/30 rounded-2xl p-8 shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">
              Accès complet à la méthode ERPR
            </h3>

            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              La méthode ERPR sera disponible au prix de{" "}
              <strong className="bg-gradient-to-r from-pink-400 to-blue-300 bg-clip-text text-transparent">
                89€
              </strong>{" "}
              dû à un accès à vie et à la maintenance de l'application. Elle inclut vidéos, quiz, audios interactifs, devoirs automatisés, exercices pratiques et un accompagnement individuel via WhatsApp.
            </p>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Ce qui vous attend :</h4>
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300 text-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Support numérique dynamique
                  </li>
                  <li className="flex items-center text-slate-300 text-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Vidéo explicative par chapitre
                  </li>
                  <li className="flex items-center text-slate-300 text-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Exercices pratiques
                  </li>
                  <li className="flex items-center text-slate-300 text-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Plusieurs quiz progressifs par chapitre
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center text-slate-300 text-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Plus de 530 audios cliquables en illimité
                  </li>
                  <li className="flex items-center text-slate-300 text-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Suivi de progression graphique hebdomadaire et mensuel
                  </li>
                  <li className="flex items-center text-slate-300 text-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Devoirs automatisés
                  </li>
                  <li className="flex items-center text-slate-300 text-lg">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                    Accompagnement via WhatsApp & Support H24
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContentSection;
