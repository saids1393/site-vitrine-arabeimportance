'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
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
  Award,
  Rocket,
  User,
  UsersRound,
  CircleDollarSign,
  HelpCircle,
  MessageCircle,
  Twitter,
  Linkedin,
  Instagram,
  Bot,
  Workflow,
  Plug,
  Menu,
  X,
  ArrowUpRight,
} from 'lucide-react';

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden bg-white mb-4">
      <button
        onClick={onClick}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900 text-lg">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-gray-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-gray-400" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-5">
          <p className="text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
      title: '+500 Audios integres',
      description: 'Chaque lettre, mot et phrase possede un audio enregistre par l\'enseignant pour une prononciation authentique.',
      bgColor: 'bg-orange-50',
      iconBg: 'bg-orange-500',
    },
    {
      icon: Workflow,
      title: 'Videos explicatives',
      description: 'Des tutoriels video detailles qui vous montrent comment prononcer chaque lettre de l\'alphabet arabe.',
      bgColor: 'bg-green-50',
      iconBg: 'bg-green-500',
    },
    {
      icon: Plug,
      title: 'Quiz progressifs',
      description: 'Validez vos acquis avec des quiz interactifs et identifiez vos axes d\'amelioration.',
      bgColor: 'bg-indigo-50',
      iconBg: 'bg-indigo-500',
    },
    {
      icon: Shield,
      title: 'Accompagnement personnalise',
      description: 'Progression suivie, conseils adaptes a votre niveau, et support continu pour progresser rapidement.',
      bgColor: 'bg-pink-50',
      iconBg: 'bg-pink-500',
    },
    {
      icon: Zap,
      title: 'Methode ERPR prouvee',
      description: 'Ecoute, Repetition, Pratique, Regularite - une methode testee et approuvee par des centaines d\'eleves.',
      bgColor: 'bg-lime-50',
      iconBg: 'bg-lime-500',
    },
    {
      icon: Clock,
      title: 'Acces illimite',
      description: 'Apprenez a votre rythme avec un acces complet a tous les contenus, quand vous le souhaitez.',
      bgColor: 'bg-gray-100',
      iconBg: 'bg-gray-500',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed B.',
      handle: '@ahmed_b',
      content: 'Une methode tres claire et motivante. J\'ai enfin reussi a lire en arabe apres des annees d\'echec avec d\'autres methodes.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Fatima L.',
      handle: '@fatima_l',
      content: 'Ideal pour les debutants. L\'approche ERPR m\'a vraiment aidee a progresser. Les audios sont d\'une qualite exceptionnelle.',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      featured: true,
    },
    {
      name: 'Karim M.',
      handle: '@karim_m',
      content: 'Le suivi personnalise fait toute la difference. Je recommande vivement cette plateforme a tous ceux qui veulent apprendre.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que la methode ERPR ?',
      answer: 'ERPR signifie Ecoute, Repetition, Pratique, Regularite. C\'est une methode d\'apprentissage structuree qui permet d\'assimiler efficacement la langue arabe.',
    },
    {
      question: 'Dois-je avoir des connaissances prealables ?',
      answer: 'Non, aucune connaissance prealable n\'est requise. Notre methode est specialement concue pour les debutants complets.',
    },
    {
      question: 'Combien de temps pour apprendre a lire ?',
      answer: 'Avec une pratique reguliere de 15-30 minutes par jour, la plupart de nos eleves commencent a lire en 2-3 semaines.',
    },
    {
      question: 'L\'essai gratuit est-il vraiment gratuit ?',
      answer: 'Oui, absolument. Vous avez acces a tout le contenu du premier chapitre pendant 7 jours, sans carte bancaire.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Gratuit',
      description: 'Decouvrez la methode ERPR',
      price: '0',
      period: '/mois',
      icon: Rocket,
      features: ['Chapitre 1 complet', '+100 audios', 'Quiz de validation', 'Acces 7 jours'],
      cta: 'Commencer',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/signup-free',
      highlighted: false,
    },
    {
      name: 'Starter',
      description: 'Pour bien demarrer votre apprentissage',
      price: billingPeriod === 'monthly' ? '19' : '15',
      period: '/mois',
      icon: User,
      features: ['Tous les chapitres', '+300 audios', 'Videos explicatives', 'Quiz progressifs'],
      cta: 'Commencer',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/checkout',
      highlighted: false,
    },
    {
      name: 'Pro',
      description: 'Pour une progression optimale',
      price: billingPeriod === 'monthly' ? '49' : '39',
      period: '/mois',
      icon: UsersRound,
      features: ['Tout Starter inclus', '+500 audios', 'Accompagnement', 'Google Drive dedie'],
      cta: 'Passer a Pro',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/checkout',
      highlighted: false,
    },
    {
      name: 'Enterprise',
      description: 'Acces complet a vie',
      price: '149',
      period: '',
      icon: User,
      features: ['Tout Pro inclus', 'Acces a vie', 'Support prioritaire', 'Mises a jour incluses'],
      cta: 'Nous contacter',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/checkout',
      highlighted: true,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="section-container">
          <div className="flex justify-between items-center h-16 md:h-20">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">ArabeImportance</span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('accueil')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Accueil</button>
              <button onClick={() => scrollToSection('features')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Fonctionnalites</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Temoignages</button>
              <button onClick={() => scrollToSection('pricing')} className="text-gray-600 hover:text-gray-900 font-medium transition-colors">Tarifs</button>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <a
                href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
              >
                Commencer
              </a>
            </div>

            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4">
            <div className="section-container flex flex-col gap-4">
              <button onClick={() => scrollToSection('accueil')} className="text-left text-gray-600 hover:text-gray-900 font-medium py-2">Accueil</button>
              <button onClick={() => scrollToSection('features')} className="text-left text-gray-600 hover:text-gray-900 font-medium py-2">Fonctionnalites</button>
              <button onClick={() => scrollToSection('testimonials')} className="text-left text-gray-600 hover:text-gray-900 font-medium py-2">Temoignages</button>
              <button onClick={() => scrollToSection('pricing')} className="text-left text-gray-600 hover:text-gray-900 font-medium py-2">Tarifs</button>
              <a
                href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold text-center"
              >
                Commencer
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <div className="main-container">
          <section id="accueil" className="pt-32 md:pt-40 pb-20 bg-gradient-to-b from-orange-50/50 to-white">
            <div className="section-container">
              <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="lg:w-1/2 text-center lg:text-left"
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                    <div className="flex -space-x-2">
                      {[2379004, 774909, 1222271, 1239291].map((id) => (
                        <div key={id} className="w-10 h-10 rounded-full border-2 border-white overflow-hidden">
                          <Image
                            src={`https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=100`}
                            alt="User"
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="bg-white/80 backdrop-blur rounded-full px-4 py-1.5 border border-gray-200">
                      <span className="text-sm font-semibold text-gray-900">500+</span>
                      <span className="text-sm text-gray-500 ml-1">eleves satisfaits</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-center lg:justify-start gap-1 mb-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                    ))}
                    <span className="ml-2 text-sm font-medium text-gray-600">4.9</span>
                  </div>

                  <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-4 py-2 mb-6">
                    <Sparkles className="w-4 h-4 text-orange-500 -rotate-12" />
                    <span className="text-sm font-semibold text-orange-700">Methode ERPR</span>
                  </div>

                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                    Apprenez l'arabe avec la methode{' '}
                    <span className="text-orange-500">ERPR</span>
                  </h1>

                  <p className="text-lg text-gray-500 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                    Une plateforme complete pour apprendre a lire, ecrire et prononcer l'arabe.
                    Plus de 500 audios enregistres par un enseignant.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                    <a
                      href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3.5 rounded-full font-semibold transition-all shadow-lg shadow-orange-200"
                    >
                      Essayer gratuitement
                    </a>
                    <a
                      href="#features"
                      className="bg-white hover:bg-gray-50 text-gray-700 px-8 py-3.5 rounded-full font-semibold transition-all border border-gray-200 flex items-center justify-center gap-2"
                    >
                      <Play className="w-4 h-4" />
                      Decouvrir
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="lg:w-1/2"
                >
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-orange-200 rounded-full blur-3xl opacity-60" />
                    <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-40" />
                    <div className="relative bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center">
                          <Volume2 className="w-7 h-7 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 text-lg">Votre progression</h3>
                          <p className="text-gray-500">Chapitre 1 - Les lettres</p>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-2xl p-5 mb-6">
                        <div className="flex justify-between mb-3">
                          <span className="text-gray-500">Progression globale</span>
                          <span className="font-bold text-orange-500">75%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-3">
                          <div className="bg-gradient-to-r from-orange-500 to-orange-400 h-3 rounded-full w-3/4" />
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-orange-50 rounded-xl p-4 text-center">
                          <Volume2 className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                          <span className="text-xs text-gray-600 font-medium">500+ Audios</span>
                        </div>
                        <div className="bg-green-50 rounded-xl p-4 text-center">
                          <Brain className="w-6 h-6 text-green-500 mx-auto mb-2" />
                          <span className="text-xs text-gray-600 font-medium">Quiz</span>
                        </div>
                        <div className="bg-indigo-50 rounded-xl p-4 text-center">
                          <Play className="w-6 h-6 text-indigo-500 mx-auto mb-2" />
                          <span className="text-xs text-gray-600 font-medium">Videos</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section className="py-16 border-t border-gray-100">
            <div className="section-container">
              <div className="grid md:grid-cols-3 gap-8 md:gap-16 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="text-5xl font-bold text-gray-900 mb-2">3x</p>
                  <p className="text-gray-500">Progression plus rapide</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-5xl font-bold text-gray-900 mb-2">60%</p>
                  <p className="text-gray-500">Meilleure memorisation</p>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <p className="text-5xl font-bold text-gray-900 mb-2">99.9%</p>
                  <p className="text-gray-500">Taux de satisfaction</p>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="features" className="py-20 border-t border-gray-100">
            <div className="section-container">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
                <div className="lg:sticky lg:top-32 lg:h-fit">
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Fonctionnalites</h2>
                    </div>
                    <p className="text-gray-500 text-lg leading-relaxed mb-8">
                      Tout ce dont vous avez besoin pour maitriser l'arabe - concu pour l'efficacite et la fiabilite.
                    </p>

                    <div className="bg-orange-500 rounded-2xl p-6 text-white">
                      <p className="font-semibold text-lg mb-4">
                        Approuve par des centaines d'eleves apprenant l'arabe.
                      </p>
                      <a
                        href="#testimonials"
                        className="inline-flex items-center gap-2 bg-white text-orange-500 px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-gray-50 transition-colors"
                      >
                        Voir les temoignages
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    </div>
                  </motion.div>
                </div>

                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className={`${feature.bgColor} rounded-2xl p-6`}
                    >
                      <div className={`w-12 h-12 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4`}>
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section id="testimonials" className="py-20 border-t border-gray-100">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-16"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ce que disent nos eleves</h2>
                </div>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Des centaines d'eleves font confiance a la methode ERPR pour apprendre l'arabe efficacement.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-2xl p-6 ${
                      testimonial.featured
                        ? 'bg-orange-500 text-white'
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
                              : 'fill-orange-400 text-orange-400'
                          }`}
                        />
                      ))}
                    </div>
                    <p className={`mb-6 leading-relaxed ${testimonial.featured ? 'text-white' : 'text-gray-600'}`}>
                      {testimonial.content}
                    </p>
                    <div className="flex items-center gap-3">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={48}
                        height={48}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div>
                        <p className={`font-semibold ${testimonial.featured ? 'text-white' : 'text-gray-900'}`}>
                          {testimonial.name}
                        </p>
                        <p className={`text-sm ${testimonial.featured ? 'text-white/70' : 'text-gray-500'}`}>
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 border-t border-gray-100">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <HelpCircle className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Questions frequentes</h2>
                </div>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto">
                  Tout ce que vous devez savoir sur la methode ERPR et comment commencer.
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-2 gap-8 items-start">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
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
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:sticky lg:top-32"
                >
                  <div className="bg-violet-500 rounded-2xl p-8 text-white">
                    <p className="text-xl font-semibold mb-2">
                      Des questions ? Notre equipe est la pour vous aider.
                    </p>
                    <a
                      href="mailto:contact@arabeimportance.fr"
                      className="inline-flex items-center gap-2 bg-white text-violet-600 px-6 py-3 rounded-full font-semibold mt-4 hover:bg-gray-50 transition-colors"
                    >
                      Nous contacter
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          <section id="pricing" className="py-20 border-t border-gray-100">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12"
              >
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-orange-500 rounded-xl flex items-center justify-center">
                    <CircleDollarSign className="w-5 h-5 text-white" />
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Tarifs simples et transparents</h2>
                </div>
                <p className="text-gray-500 text-lg max-w-2xl mx-auto mb-8">
                  Choisissez la formule qui vous convient - evoluez selon vos besoins.
                </p>

                <div className="inline-flex items-center bg-orange-50 rounded-full p-1 relative">
                  <button
                    onClick={() => setBillingPeriod('monthly')}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      billingPeriod === 'monthly'
                        ? 'bg-orange-500 text-white'
                        : 'text-orange-600'
                    }`}
                  >
                    Mensuel
                  </button>
                  <button
                    onClick={() => setBillingPeriod('yearly')}
                    className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all ${
                      billingPeriod === 'yearly'
                        ? 'bg-orange-500 text-white'
                        : 'text-orange-600'
                    }`}
                  >
                    Annuel
                  </button>
                  <span className="absolute -top-3 -right-4 text-xs font-bold text-green-600">20% OFF</span>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {pricingPlans.map((plan, index) => (
                  <motion.div
                    key={plan.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`rounded-2xl p-6 flex flex-col ${
                      plan.highlighted
                        ? 'bg-orange-500 text-white'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                      plan.highlighted ? 'bg-white/20' : 'bg-orange-50'
                    }`}>
                      <plan.icon className={`w-6 h-6 ${plan.highlighted ? 'text-white' : 'text-orange-500'}`} />
                    </div>

                    <h3 className={`text-lg font-bold mb-1 ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                      {plan.name}
                    </h3>
                    <p className={`text-sm mb-4 ${plan.highlighted ? 'text-white/80' : 'text-gray-500'}`}>
                      {plan.description}
                    </p>

                    <div className="mb-6">
                      <span className={`text-4xl font-bold ${plan.highlighted ? 'text-white' : 'text-gray-900'}`}>
                        {plan.price}EUR
                      </span>
                      <span className={plan.highlighted ? 'text-white/70' : 'text-gray-500'}>
                        {plan.period}
                      </span>
                    </div>

                    <a
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full font-semibold text-center mb-6 transition-colors ${
                        plan.highlighted
                          ? 'bg-white text-orange-500 hover:bg-gray-50'
                          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                      }`}
                    >
                      {plan.cta}
                    </a>

                    <ul className="space-y-3 mt-auto">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 flex-shrink-0 ${
                            plan.highlighted ? 'text-white' : 'text-orange-500'
                          }`} />
                          <span className={`text-sm ${plan.highlighted ? 'text-white/90' : 'text-gray-600'}`}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <footer className="bg-gradient-to-b from-orange-50 to-orange-100 mt-20 rounded-t-3xl relative overflow-hidden">
          <div className="section-container py-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-orange-500">ArabeImportance</span>
                </Link>
                <p className="text-gray-600 max-w-sm">
                  Pour toute question ou demande d'information, n'hesitez pas a nous contacter.
                </p>
              </div>

              <div>
                <h4 className="text-orange-500 font-bold uppercase tracking-wider text-sm mb-4">Social</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="#" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
                      <Twitter className="w-5 h-5" />
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
                      <Linkedin className="w-5 h-5" />
                      Linkedin
                    </a>
                  </li>
                  <li>
                    <a href="https://instagram.com/arabeimportance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-orange-500 hover:text-orange-600 font-medium">
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
            <div className="flex items-center gap-4 text-orange-200/40 mb-[-20px]">
              <div className="w-20 h-20 bg-orange-200/30 rounded-xl flex items-center justify-center">
                <Sparkles className="w-12 h-12" />
              </div>
              <span className="text-[120px] md:text-[180px] font-bold leading-none">ArabeImportance</span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}
