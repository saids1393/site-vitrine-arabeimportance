'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import Header from './components/Header';
import logoImage from '@/app/assets/img/logo-arabe-importance-blue.png';
import {
  Volume2,
  Brain,
  Play,
  CheckCircle,
  Sparkles,
  Users,
  Shield,
  Zap,
  Star,
  ChevronDown,
  ChevronUp,
  Clock,
  User,
  UsersRound,
  CircleDollarSign,
  HelpCircle,
  MessageCircle,
  Instagram,
  MessageCircle as TikTokIcon,
  Phone,
  Bot,
  Workflow,
  Plug,
  Menu,
  X,
  ArrowUpRight,
  Video,
} from 'lucide-react';

// Animation variants optimisées - plus rapides et fluides
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05
    }
  }
};

// Composant pour animer les mots - optimisé
function AnimatedText({ text, className }: { text: string; className?: string }) {
  const words = useMemo(() => text.split(' '), [text]);
  return (
    <motion.span
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
      className={className}
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          className="inline-block mr-[0.25em]"
          variants={{
            hidden: { opacity: 0, y: 15 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.3, 
                delay: index * 0.03
              }
            }
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Composant pour les compteurs animés
function AnimatedCounter({ value, suffix = '', prefix = '' }: { value: string; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  
  // Extraire le nombre de la valeur (ex: "60%" -> 60, "3x" -> 3, "99.9%" -> 99.9)
  const numericValue = parseFloat(value.replace(/[^0-9.]/g, ''));
  const hasDecimal = value.includes('.');
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setCount(0); // Reset à chaque fois qu'on entre dans la vue
        } else {
          setIsInView(false);
        }
      },
      { threshold: 0.5 }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => observer.disconnect();
  }, []);
  
  useEffect(() => {
    if (!isInView) return;
    
    const duration = 1500; // durée totale en ms
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [isInView, numericValue]);
  
  const displayValue = hasDecimal ? count.toFixed(1) : Math.floor(count);
  const suffixFromValue = value.replace(/[0-9.]/g, ''); // ex: "%" ou "x"
  
  return (
    <motion.p
      ref={ref}
      className="text-5xl font-bold text-gray-900 mb-2"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.3 }}
    >
      {prefix}{displayValue}{suffixFromValue}{suffix}
    </motion.p>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div 
      className="border border-gray-200 rounded-2xl overflow-hidden bg-white mb-4"
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.25 }}
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-lg">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="w-5 h-5 text-gray-400" />
        </motion.div>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5">
          <p className="text-gray-500 leading-relaxed">{answer}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState<{ name: string; content: string; featured?: boolean } | null>(null);
  const [showContactForm, setShowContactForm] = useState(false);
  const [contactEmail, setContactEmail] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [contactLoading, setContactLoading] = useState(false);
  const [contactError, setContactError] = useState('');

  // Bloquer le scroll quand un popup est ouvert
  useEffect(() => {
    if (selectedTestimonial || showContactForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTestimonial, showContactForm]);

  const handleContactSubmit = async () => {
    if (!contactEmail || !contactMessage) {
      setContactError('Veuillez remplir tous les champs');
      return;
    }
    setContactLoading(true);
    setContactError('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email: contactEmail, 
          message: contactMessage,
          subject: "Nouveau message de contact - ArabeImportance"
        }),
      });
      if (response.ok) {
        setContactSubmitted(true);
        setContactEmail('');
        setContactMessage('');
        setTimeout(() => {
          setContactSubmitted(false);
          setShowContactForm(false);
        }, 3000);
      } else {
        const data = await response.json();
        setContactError(data.message || "Erreur lors de l'envoi du message");
      }
    } catch {
      setContactError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setContactLoading(false);
    }
  };

  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileMenuOpen(false);
  };

  const features = [
    {
      icon: Bot,
      title: '+500 Audios intégrés',
      description: 'Chaque lettre, mot et phrase possède un audio enregistré par l\'enseignant pour une prononciation authentique.',
      bgColor: 'bg-sky-50',
      iconBg: 'bg-sky-500',
    },
    {
      icon: Workflow,
      title: 'Vidéos explicatives',
      description: 'Des tutoriels vidéo détaillés qui vous montrent comment prononcer chaque lettre de l\'alphabet arabe.',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500',
    },
    {
      icon: Plug,
      title: 'Quiz progressifs',
      description: 'Validez vos acquis avec des quiz interactifs et identifiez vos axes d\'amélioration.',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-500',
    },
    {
      icon: Shield,
      title: 'Accompagnement personnalisé',
      description: 'Progression suivie, conseils adaptés à votre niveau, et support continu pour progresser rapidement.',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-pink-500',
    },
    {
      icon: Zap,
      title: 'Méthode ERPR prouvée',
      description: 'Écoute, Répétition, Pratique, Régularité - une méthode testée et approuvée par plusieurs d\'élèves.',
      bgColor: 'bg-lime-50',
      iconBg: 'bg-lime-500',
    },
    {
      icon: Clock,
      title: 'Accès illimité',
      description: 'Apprenez à votre rythme avec un accès complet à tous les contenus, quand vous le souhaitez.',
      bgColor: 'bg-gray-100',
      iconBg: 'bg-gray-500',
    },
  ];

  const testimonials = [
    {
      name: 'Adam',
      content: 'Le prof a été très gentil et patient.',
    },
    {
      name: 'Soilahou',
      content: 'Je recommande ce professeur qui est compétent et sérieux..',
      featured: true,
    },
    {
      name: 'Sasin',
      content: 'Professeur à l\'écoute, bienveillant et passionné. Il s\'adapte au rythme de l\'élève. Son approche claire et structurée facilite la compréhension et la mémorisation. À recommander pour apprendre l\'arabe.',
    },
    {
      name: 'Marwane',
      content: 'J\'ai suivi les cours et al hamdullilah je recommande ce professeur qui est pédagogue, compétent et sérieux,  j\'ai pu apprendre à lire et à écrire, c\'est un professeur qui n\'a pas de mal à s\'adapter à vous en fonction de votre niveau.',
    },
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que la méthode ERPR ?',
      answer: 'ERPR signifie Écoute, Répétition, Pratique, Régularité. C\'est une méthode d\'apprentissage structurée qui permet d\'assimiler efficacement la langue arabe.',
    },
    {
      question: 'Quelle est la différence entre Solo et Coaching ?',
      answer: 'Le plan Solo vous donne accès à tous les contenus pour apprendre en autonomie. Le plan Coaching inclut en plus un accompagnement personnalisé avec des sessions vidéo en direct avec le professeur.',
    },
    {
      question: 'Combien de temps pour apprendre à lire ?',
      answer: 'Avec une pratique régulière de 15-30 minutes par jour, la plupart de nos élèves commencent à lire en 2-3 semaines.',
    },
    {
      question: 'Comment se passent les sessions vidéo ?',
      answer: 'Avec le plan Coaching, vous bénéficiez de sessions en visioconférence avec le professeur pour corriger votre prononciation, répondre à vos questions et vous guider dans votre progression.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Solo',
      description: 'Apprenez en toute autonomie',
      price: '10',
      period: '/mois',
      icon: User,
      features: [
        'Tous les chapitres',
        '+500 audios intégrés',
        'Vidéos explicatives HD',
        'Quiz progressifs',
        'Accès illimité 24h/24',
        'Mises à jour incluses',
      ],
      cta: 'Commencer en Solo',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/checkout',
      highlighted: false,
    },
    {
      name: 'Coaching',
      description: 'Accompagnement personnalisé',
      price: '30',
      period: '/mois',
      icon: Video,
      features: [
        'Tout le contenu Solo',
        'Sessions vidéo avec le professeur',
        'Correction de prononciation',
        'Suivi personnalisé',
        'Google Drive dédié',
        'Support prioritaire',
      ],
      cta: 'Choisir Coaching',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/checkout',
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden w-full max-w-full">
      <Header scrollToSection={scrollToSection} />

      <main>
        <div className="main-container">
          <section id="accueil" className="pt-32 md:pt-40 pb-20 bg-gradient-to-b from-sky-200/30 to-white">
            <div className="section-container">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={staggerContainer}
                  className="lg:w-1/2 text-center lg:text-left"
                >
                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-center justify-center lg:justify-start gap-3 mb-6"
                  >
                    <div className="flex -space-x-2">
                      {[
                        { initial: 'A', bg: 'bg-sky-100', text: 'text-sky-600' },
                        { initial: 'F', bg: 'bg-pink-100', text: 'text-pink-600' },
                        { initial: 'K', bg: 'bg-green-100', text: 'text-green-600' },
                        { initial: 'S', bg: 'bg-indigo-100', text: 'text-indigo-600' },
                      ].map((user, index) => (
                        <motion.div 
                          key={index} 
                          className={`w-10 h-10 rounded-full border-2 border-white ${user.bg} flex items-center justify-center ${user.text} font-bold`}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.1 + index * 0.05, duration: 0.3 }}
                        >
                          {user.initial}
                        </motion.div>
                      ))}
                    </div>
                    <motion.div 
                      className="bg-white/80 backdrop-blur rounded-full px-4 py-1.5 border border-gray-200 cursor-pointer hover:bg-white hover:border-sky-200 transition-colors"
                      initial={{ opacity: 0, x: 15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                      onClick={() => scrollToSection('testimonials')}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="text-sm font-semibold text-gray-900">Plusieurs</span>
                      <span className="text-sm text-gray-500 ml-1">élèves satisfaits</span>
                    </motion.div>
                  </motion.div>

                  <motion.div 
                    variants={fadeInUp}
                    className="flex items-center justify-center lg:justify-start gap-1 mb-6"
                  >
                    {[1, 2, 3, 4, 5].map((i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3 + i * 0.05, duration: 0.2 }}
                      >
                        <Star className="w-5 h-5 fill-sky-400 text-sky-400" />
                      </motion.div>
                    ))}
                    <motion.span 
                      className="ml-2 text-sm font-medium text-gray-600"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.6, duration: 0.2 }}
                    >
                      4.9
                    </motion.span>
                  </motion.div>

                  <motion.div 
                    variants={fadeInUp}
                    className="inline-flex items-center gap-2 bg-sky-100 rounded-full px-4 py-2 mb-6 cursor-pointer hover:bg-sky-200 transition-colors"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => scrollToSection('faq')}
                  >
                   
                    <span className="text-sm font-semibold text-sky-500">Méthode ERPR</span>
                  </motion.div>

                  <motion.h1 
                    variants={fadeInUp}
                    className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
                  >
                    <AnimatedText text="Apprenez l'arabe avec la méthode" />
                    <motion.span 
                      className="text-sky-500 block"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4, duration: 0.3 }}
                    >
                      ERPR
                    </motion.span>
                  </motion.h1>

                  <motion.p 
                    variants={fadeInUp}
                    className="text-lg text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0"
                  >
                    Une plateforme complète pour apprendre à lire, écrire et prononcer l'arabe.
                    Plus de 500 audios enregistrés par un enseignant.
                  </motion.p>

                  <motion.div 
                    variants={fadeInUp}
                    className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                  >
                    <motion.a
                      href="https://methode-erpr-by-arabeimportance.vercel.app/checkout"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-sky-200"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      C'est parti !
                    </motion.a>
                    <motion.a
                      href="#features"
                      className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-full font-semibold transition-all border border-gray-200 flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                    >
                      <Play className="w-4 h-4" />
                      Découvrir
                    </motion.a>
                  </motion.div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="lg:w-1/2"
                >
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-sky-200 rounded-full blur-3xl opacity-60" />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-sky-300 rounded-full blur-3xl opacity-40" />
                    <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-sky-100 rounded-2xl flex items-center justify-center">
                          <Volume2 className="w-7 h-7 text-sky-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">Votre progression</h3>
                          <p className="text-gray-500">Chapitre 1 - Les lettres</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                        <div className="flex justify-between mb-3">
                          <span className="text-gray-500">Progression globale</span>
                          <span className="font-bold text-sky-500">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                          <motion.div 
                            className="bg-gradient-to-r from-sky-500 to-sky-400 h-3 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: "75%" }}
                            transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { icon: Volume2, color: 'sky', label: '+500 Audios' },
                          { icon: Brain, color: 'green', label: 'Quiz' },
                          { icon: Play, color: 'indigo', label: 'Videos' }
                        ].map((item, index) => (
                          <motion.div 
                            key={item.label}
                            className={`bg-${item.color}-50 rounded-xl p-4 text-center`}
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
                            whileHover={{ scale: 1.03, y: -3 }}
                          >
                            <item.icon className={`w-6 h-6 text-${item.color}-500 mx-auto mb-2`} />
                            <span className="text-xs text-gray-600 font-medium">{item.label}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-16 border-t border-gray-100">
            <div className="section-container">
              <motion.div 
                className="grid md:grid-cols-3 gap-8 md:gap-16 text-center"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={staggerContainer}
              >
                <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                  <AnimatedCounter value="3x" />
                  <motion.p 
                    className="text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    Progression plus rapide
                  </motion.p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                  <AnimatedCounter value="60%" />
                  <motion.p 
                    className="text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.15, duration: 0.3 }}
                  >
                    Meilleure mémorisation
                  </motion.p>
                </motion.div>
                <motion.div variants={scaleIn} whileHover={{ scale: 1.05 }}>
                  <AnimatedCounter value="99.9%" />
                  <motion.p 
                    className="text-gray-500"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.3 }}
                  >
                    Taux de satisfaction
                  </motion.p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          <section id="features" className="py-20 border-t border-gray-100">
            <div className="section-container">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="lg:sticky lg:top-32 lg:h-fit">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.3 }}
                    variants={fadeInLeft}
                  >
                    <motion.div 
                      className="flex items-center gap-3 mb-6"
                      variants={fadeInUp}
                    >
                      <motion.div 
                        className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center"
                        whileHover={{ rotate: 15 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Sparkles className="w-5 h-5 text-white" />
                      </motion.div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        <AnimatedText text="Fonctionnalités" />
                      </h2>
                    </motion.div>
                    <motion.p 
                      className="text-gray-500 text-lg leading-relaxed mb-8"
                      variants={fadeInUp}
                    >
                      Tout ce dont vous avez besoin pour maîtriser l'arabe - conçu pour l'efficacité et la fiabilité.
                    </motion.p>

                    <motion.div 
                      className="bg-sky-500 rounded-2xl p-6 text-white"
                      variants={scaleIn}
                      whileHover={{ scale: 1.01 }}
                    >
                      <p className="font-semibold text-lg mb-4">
                        Approuvé par plusieurs élèves apprenant l'arabe.
                      </p>
                      <motion.a
                        href="#testimonials"
                        className="inline-flex items-center gap-2 bg-white text-sky-500 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors"
                        whileHover={{ scale: 1.02, x: 3 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        Voir les témoignages
                        <ArrowUpRight className="w-4 h-4" />
                      </motion.a>
                    </motion.div>
                  </motion.div>
                </div>

                <motion.div 
                  className="space-y-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={staggerContainer}
                >
                  {features.map((feature) => (
                    <motion.div
                      key={feature.title}
                      variants={fadeInRight}
                      whileHover={{ scale: 1.01, x: 5 }}
                      className={`${feature.bgColor} rounded-2xl p-6 cursor-pointer`}
                    >
                      <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-20 border-t border-gray-100">
            <div className="section-container">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    <AnimatedText text="Ce que disent nos élèves" />
                  </h2>
                </div>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  On nous fait confiance pour apprendre l'arabe rapidement et efficacement.
                </p>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={staggerContainer}
              >
                {testimonials.map((testimonial) => (
                  <motion.div
                    key={testimonial.name}
                    variants={fadeInUp}
                    whileHover={{ scale: 1.02, y: -5 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setSelectedTestimonial(testimonial)}
                    className={`rounded-2xl p-6 cursor-pointer flex flex-col h-full ${
                      testimonial.featured
                        ? 'bg-sky-500 text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            testimonial.featured
                              ? 'fill-white text-white'
                              : 'fill-sky-400 text-sky-400'
                          }`}
                        />
                      ))}
                    </div>
                    <p className={`mb-6 leading-relaxed line-clamp-5 flex-grow ${testimonial.featured ? 'text-white' : 'text-gray-600'}`}>
                      {testimonial.content}
                    </p>
                    <div className="flex items-center justify-between gap-2 mt-auto">
                      <div className="flex items-center gap-3 min-w-0 flex-1">
                        <div className={`w-10 h-10 flex-shrink-0 rounded-full flex items-center justify-center text-base font-bold ${
                          testimonial.featured 
                            ? 'bg-white/20 text-white' 
                            : 'bg-sky-100 text-sky-600'
                        }`}>
                          {testimonial.name.charAt(0)}
                        </div>
                        <p className={`font-semibold truncate ${testimonial.featured ? 'text-white' : 'text-gray-900'}`}>
                          {testimonial.name}
                        </p>
                      </div>
                      <span className={`text-xs font-medium flex-shrink-0 ${testimonial.featured ? 'text-white/70' : 'text-sky-500'}`}>
                        Ouvrir →
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          <section id="faq" className="py-20 border-t border-gray-100">
            <div className="section-container">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    <AnimatedText text="Questions fréquentes" />
                  </h2>
                </div>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Tout ce que vous devez savoir sur la méthode ERPR et comment commencer.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  variants={fadeInLeft}
                >
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                      isOpen={openFAQ === index}
                      onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                    />
                  ))}
                </motion.div>

                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.3 }}
                  variants={fadeInRight}
                  className="lg:sticky lg:top-32"
                >
                  <motion.div 
                    className="bg-sky-500 rounded-2xl p-8 text-white"
                    whileHover={{ scale: 1.01 }}
                  >
                    <p className="text-xl font-semibold mb-2">
                      Des questions ? Notre équipe est là pour vous aider.
                    </p>
                    <motion.button
                      onClick={() => setShowContactForm(true)}
                      className="inline-flex items-center gap-2 bg-white text-sky-600 px-6 py-3 rounded-full font-semibold mt-4 hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Nous contacter
                    </motion.button>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="pricing" className="py-20 border-t border-gray-100">
            <div className="section-container">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                variants={fadeInUp}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center">
                    <CircleDollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    <AnimatedText text="Choisissez votre formule" />
                  </h2>
                </div>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Autodidacte ou coaching ? Choisissez l'option qui vous correspond.
                </p>
              </motion.div>

              <motion.div 
                className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2 }}
                variants={staggerContainer}
              >
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    variants={index === 0 ? fadeInLeft : fadeInRight}
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.2 }}
                    className={`rounded-2xl p-8 flex flex-col cursor-pointer ${
                      plan.highlighted
                        ? 'bg-sky-500 text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      plan.highlighted ? 'bg-white/20' : 'bg-sky-50'
                    }`}>
                      <plan.icon className={`w-7 h-7 ${plan.highlighted ? 'text-white' : 'text-sky-500'}`} />
                    </div>

                    <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-base mb-6 ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>

                    <motion.div 
                      className="mb-8"
                      initial={{ scale: 0.9, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      viewport={{ once: false, amount: 0.3 }}
                      transition={{ delay: 0.1, duration: 0.3 }}
                    >
                      <span className={`text-5xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}€
                      </span>
                      <span className={plan.highlighted ? 'text-white/70' : 'text-gray-500'}>
                        {plan.period}
                      </span>
                    </motion.div>

                    <motion.a
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-4 rounded-full font-semibold text-center mb-8 transition-colors text-lg ${
                        plan.highlighted
                          ? 'bg-white text-sky-500 hover:bg-gray-50'
                          : 'bg-sky-500 text-white hover:bg-sky-600'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.cta}
                    </motion.a>

                    <ul className="space-y-4 mt-auto">
                      {plan.features.map((feature, i) => (
                        <motion.li 
                          key={i} 
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: false, amount: 0.3 }}
                          transition={{ delay: i * 0.03, duration: 0.2 }}
                        >
                          <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                            plan.highlighted ? 'text-white' : 'text-sky-500'
                          }`} />
                          <span className={`${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </div>

        <motion.footer 
          className="bg-gradient-to-b from-sky-50 to-sky-100 mt-20 rounded-t-3xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.4 }}
        >
          <div className="section-container py-16 relative z-10">
            <motion.div 
              className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 text-center md:text-left"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start">
                <Link href="/" className="mb-4">
                  <Image
                    src={logoImage}
                    alt="ArabeImportance"
                    width={280}
                    height={80}
                    className="h-14 md:h-16 w-auto"
                  />
                </Link>
                <p className="text-gray-600 max-w-sm">
                  Pour toute question ou demande d'information, n'hésitez pas à nous contacter.
                </p>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start">
                <h4 className="text-sky-500 font-bold uppercase tracking-wider text-sm mb-4">Social</h4>
                <ul className="space-y-3">
                  <li>
                    <a 
                      href="https://instagram.com/arabeimportance" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center md:justify-start gap-2 text-sky-500 hover:text-sky-600 font-medium transition-transform hover:translate-x-1"
                    >
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://tiktok.com/@arabeimportance" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center md:justify-start gap-2 text-sky-500 hover:text-sky-600 font-medium transition-transform hover:translate-x-1"
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a 
                      href="https://wa.me/33XXXXXXXXX" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="flex items-center justify-center md:justify-start gap-2 text-sky-500 hover:text-sky-600 font-medium transition-transform hover:translate-x-1"
                    >
                      <Phone className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-col items-center md:items-start">
                <h4 className="text-sky-500 font-bold uppercase tracking-wider text-sm mb-4">Légal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/cgv" className="text-sky-500 hover:text-sky-600 font-medium transition-transform inline-block hover:translate-x-1">
                      Conditions générales
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal" className="text-sky-500 hover:text-sky-600 font-medium transition-transform inline-block hover:translate-x-1">
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sky-500 hover:text-sky-600 font-medium transition-transform inline-block hover:translate-x-1">
                      Blog
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </motion.div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden w-full">
            <motion.div 
              className="flex items-center gap-2 md:gap-4 text-sky-200/40 mb-[-20px] max-w-full overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-12 md:w-20 h-12 md:h-20 bg-sky-200/30 rounded-xl flex items-center justify-center flex-shrink-0">
                <Sparkles className="w-8 md:w-12 h-8 md:h-12" />
              </div>
              <span className="text-[60px] sm:text-[80px] md:text-[120px] lg:text-[180px] font-bold leading-none truncate">ArabeImportance</span>
            </motion.div>
          </div>
        </motion.footer>
      </main>

      {/* Popup Témoignage */}
      {selectedTestimonial && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setSelectedTestimonial(null)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className={`relative w-full max-w-lg max-h-[80vh] overflow-y-auto rounded-2xl p-6 md:p-8 shadow-2xl ${
              selectedTestimonial.featured
                ? 'bg-sky-500 text-white'
                : 'bg-white'
            }`}
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setSelectedTestimonial(null)}
              className={`absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full transition-colors ${
                selectedTestimonial.featured
                  ? 'hover:bg-white/20 text-white'
                  : 'hover:bg-gray-100 text-gray-500'
              }`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {/* Étoiles */}
            <div className="flex gap-1 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-5 h-5 ${
                    selectedTestimonial.featured
                      ? 'fill-white text-white'
                      : 'fill-sky-400 text-sky-400'
                  }`}
                />
              ))}
            </div>

            {/* Contenu complet */}
            <p className={`leading-relaxed text-base md:text-lg mb-6 ${
              selectedTestimonial.featured ? 'text-white' : 'text-gray-600'
            }`}>
              {selectedTestimonial.content}
            </p>

            {/* Auteur */}
            <div className="flex items-center gap-3 pt-4 border-t border-current/10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${
                selectedTestimonial.featured 
                  ? 'bg-white/20 text-white' 
                  : 'bg-sky-100 text-sky-600'
              }`}>
                {selectedTestimonial.name.charAt(0)}
              </div>
              <p className={`font-semibold ${selectedTestimonial.featured ? 'text-white' : 'text-gray-900'}`}>
                {selectedTestimonial.name}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Popup Formulaire de Contact */}
      {showContactForm && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
          onClick={() => setShowContactForm(false)}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
          
          {/* Modal */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-lg bg-white rounded-2xl p-6 md:p-8 shadow-2xl"
          >
            {/* Bouton fermer */}
            <button
              onClick={() => setShowContactForm(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-500 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>

            {!contactSubmitted ? (
              <>
                <div className="text-center mb-6">
                  <div className="w-12 h-12 bg-sky-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="w-6 h-6 text-sky-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Nous contacter
                  </h3>
                  <p className="text-gray-500">
                    Une question ? Nous vous répondrons rapidement.
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <input
                    type="email"
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Votre adresse email"
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none placeholder-gray-400"
                  />
                  <textarea
                    value={contactMessage}
                    onChange={(e) => setContactMessage(e.target.value)}
                    placeholder="Votre message..."
                    rows={4}
                    className="w-full bg-gray-50 border border-gray-200 text-gray-900 px-4 py-3 rounded-xl focus:ring-2 focus:ring-sky-500 focus:border-transparent outline-none placeholder-gray-400 resize-none"
                  />
                  {contactError && (
                    <p className="text-red-500 text-sm text-center">{contactError}</p>
                  )}
                  <motion.button
                    onClick={handleContactSubmit}
                    disabled={contactLoading}
                    className="w-full bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors disabled:opacity-70 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {contactLoading ? (
                      'Envoi en cours...'
                    ) : (
                      <>
                        Envoyer
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="22" y1="2" x2="11" y2="13"></line>
                          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                      </>
                    )}
                  </motion.button>
                </div>
              </>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
                <p className="text-gray-500">
                  Nous avons bien reçu votre message et vous répondrons très rapidement.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}

