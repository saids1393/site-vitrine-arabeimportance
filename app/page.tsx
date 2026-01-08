'use client';
import { useState } from 'react';
import Image from 'next/image';
import ClientHeaderWrapper from './components/ClientHeader';
import Footer from './components/Footer';
import MotionSection from './components/MotionSection';
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
  Bot,
  Workflow,
  Plug,
  Clock,
  Award,
  HeadphonesIcon,
} from 'lucide-react';

function CounterAnimation({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  return (
    <span className="text-4xl md:text-5xl font-bold text-gray-900">
      {target}{suffix}
    </span>
  );
}

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white">
      <button
        onClick={onClick}
        className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  );
}

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  const [billingPeriod, setBillingPeriod] = useState<'monthly' | 'yearly'>('monthly');

  const features = [
    {
      icon: Volume2,
      title: '+500 Audios integres',
      description: 'Chaque lettre, mot et phrase possede un audio enregistre par l\'enseignant pour une prononciation authentique.',
      color: 'orange',
    },
    {
      icon: Play,
      title: 'Videos explicatives',
      description: 'Des tutoriels video detailles qui vous montrent comment prononcer chaque lettre de l\'alphabet arabe.',
      color: 'green',
    },
    {
      icon: Brain,
      title: 'Quiz progressifs',
      description: 'Validez vos acquis avec des quiz interactifs et identifiez vos axes d\'amelioration.',
      color: 'indigo',
    },
    {
      icon: Users,
      title: 'Accompagnement personnalise',
      description: 'Progression suivie, conseils adaptes a votre niveau, et support continu pour progresser rapidement.',
      color: 'pink',
    },
    {
      icon: Shield,
      title: 'Methode ERPR prouvee',
      description: 'Ecoute, Repetition, Pratique, Regularite - une methode testee et approuvee par des centaines d\'eleves.',
      color: 'lime',
    },
    {
      icon: Zap,
      title: 'Acces illimite',
      description: 'Apprenez a votre rythme avec un acces complet a tous les contenus, quand vous le souhaitez.',
      color: 'gray',
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed B.',
      handle: '@ahmed_b',
      content: 'Une methode tres claire et motivante. J\'ai enfin reussi a lire en arabe apres des annees d\'echec avec d\'autres methodes.',
      rating: 5,
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    {
      name: 'Fatima L.',
      handle: '@fatima_l',
      content: 'Ideal pour les debutants. L\'approche ERPR m\'a vraiment aidee a progresser. Les audios sont d\'une qualite exceptionnelle.',
      rating: 5,
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
      featured: true,
    },
    {
      name: 'Karim M.',
      handle: '@karim_m',
      content: 'Le suivi personnalise fait toute la difference. Je recommande vivement cette plateforme a tous ceux qui veulent apprendre l\'arabe.',
      rating: 5,
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
  ];

  const faqs = [
    {
      question: 'Qu\'est-ce que la methode ERPR ?',
      answer: 'ERPR signifie Ecoute, Repetition, Pratique, Regularite. C\'est une methode d\'apprentissage structuree qui permet d\'assimiler efficacement la langue arabe en combinant l\'ecoute active, la repetition reguliere, la pratique quotidienne et la constance dans l\'apprentissage.',
    },
    {
      question: 'Dois-je avoir des connaissances prealables en arabe ?',
      answer: 'Non, aucune connaissance prealable n\'est requise. Notre methode est specialement concue pour les debutants complets. Nous partons de zero et vous accompagnons jusqu\'a la maitrise de la lecture et de l\'ecriture.',
    },
    {
      question: 'Combien de temps faut-il pour apprendre a lire l\'arabe ?',
      answer: 'Avec une pratique reguliere de 15-30 minutes par jour, la plupart de nos eleves commencent a lire leurs premiers mots en 2-3 semaines et maitrisent les bases de la lecture en 2-3 mois.',
    },
    {
      question: 'L\'essai gratuit de 7 jours est-il vraiment gratuit ?',
      answer: 'Oui, absolument. Vous avez acces a tout le contenu du premier chapitre pendant 7 jours, sans carte bancaire et sans engagement. A la fin de l\'essai, vous decidez si vous souhaitez continuer.',
    },
    {
      question: 'Comment fonctionne l\'accompagnement personnalise ?',
      answer: 'Avec l\'abonnement premium, vous beneficiez d\'un suivi de votre progression, de corrections personnalisees de vos exercices via Google Drive, et d\'un support continu pour repondre a toutes vos questions.',
    },
    {
      question: 'Puis-je annuler mon abonnement a tout moment ?',
      answer: 'Oui, vous pouvez annuler votre abonnement a tout moment. Il n\'y a aucun engagement de duree et vous conservez l\'acces jusqu\'a la fin de votre periode payee.',
    },
  ];

  const pricingPlans = [
    {
      name: 'Essai Gratuit',
      price: '0',
      period: '',
      description: 'Decouvrez la methode ERPR',
      features: [
        'Chapitre 1 complet (8 lecons)',
        '+100 audios integres',
        'Quiz de validation',
        'Acces 7 jours',
      ],
      cta: 'Commencer gratuitement',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/signup-free',
      highlighted: false,
    },
    {
      name: 'Premium',
      price: billingPeriod === 'monthly' ? '19' : '15',
      period: '/mois',
      description: 'L\'experience complete',
      features: [
        'Tous les chapitres',
        '+500 audios integres',
        'Videos explicatives HD',
        'Quiz progressifs',
        'Accompagnement personnalise',
        'Google Drive dedie',
        'Support prioritaire',
      ],
      cta: 'S\'abonner maintenant',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/checkout',
      highlighted: true,
    },
    {
      name: 'Acces a vie',
      price: '89',
      period: '',
      description: 'Paiement unique',
      features: [
        'Tout le contenu Premium',
        'Acces illimite a vie',
        'Mises a jour incluses',
        'Accompagnement 1 an',
      ],
      cta: 'Obtenir l\'acces',
      href: 'https://methode-erpr-by-arabeimportance.vercel.app/checkout',
      highlighted: false,
    },
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      <ClientHeaderWrapper />

      <main>
        <section id="accueil" className="pt-24 md:pt-32 pb-20 hero-gradient relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
              <MotionSection direction="left" className="lg:w-1/2 text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start gap-3 mb-6">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
                      >
                        <Image
                          src={`https://images.pexels.com/photos/${2379004 + i * 100}/pexels-photo-${2379004 + i * 100}.jpeg?auto=compress&cs=tinysrgb&w=50`}
                          alt="User"
                          width={32}
                          height={32}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="glass-morphism rounded-full px-4 py-1.5 flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-700">500+</span>
                    <span className="text-sm text-gray-500">eleves satisfaits</span>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start gap-1 mb-6">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-5 h-5 fill-orange-400 text-orange-400" />
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">4.9/5</span>
                </div>

                <div className="inline-flex items-center gap-2 bg-orange-100 rounded-full px-5 py-2 mb-6">
                  <Sparkles className="w-4 h-4 text-orange-500" />
                  <span className="text-sm font-semibold text-orange-700">Methode ERPR</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                  Apprenez l'arabe avec la{' '}
                  <span className="text-gradient-orange">methode ERPR</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Une plateforme complete pour apprendre a lire, ecrire et prononcer l'arabe.
                  Plus de 500 audios enregistres par un enseignant, specialement concu pour les debutants.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a
                    href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-center"
                  >
                    Essayer gratuitement
                  </a>
                  <a
                    href="#features"
                    className="btn-secondary text-center flex items-center justify-center gap-2"
                  >
                    <Play className="w-4 h-4" />
                    Decouvrir
                  </a>
                </div>
              </MotionSection>

              <MotionSection direction="right" delay={0.2} className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute -top-4 -left-4 w-20 h-20 bg-orange-200 rounded-full blur-2xl opacity-60" />
                  <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-orange-300 rounded-full blur-3xl opacity-40" />

                  <div className="relative bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8">
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                          <Volume2 className="w-6 h-6 text-orange-500" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">Progression</h3>
                          <p className="text-sm text-gray-500">Chapitre 1</p>
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      </div>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-sm text-gray-500">Votre progression</span>
                        <span className="text-sm font-semibold text-orange-500">75%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-orange-400 h-2 rounded-full transition-all duration-1000"
                          style={{ width: '75%' }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      <div className="bg-orange-50 rounded-xl p-3 text-center">
                        <Volume2 className="w-5 h-5 text-orange-500 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">+500 audios</span>
                      </div>
                      <div className="bg-green-50 rounded-xl p-3 text-center">
                        <Brain className="w-5 h-5 text-green-500 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Quiz</span>
                      </div>
                      <div className="bg-blue-50 rounded-xl p-3 text-center">
                        <Play className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                        <span className="text-xs text-gray-600">Videos</span>
                      </div>
                    </div>
                  </div>
                </div>
              </MotionSection>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white border-y border-gray-100">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
              <MotionSection direction="up" className="text-center">
                <CounterAnimation target={3} suffix="x" />
                <p className="text-gray-600 mt-2">Plus rapide que les methodes traditionnelles</p>
              </MotionSection>
              <MotionSection direction="up" delay={0.1} className="text-center">
                <CounterAnimation target={500} suffix="+" />
                <p className="text-gray-600 mt-2">Audios enregistres par l'enseignant</p>
              </MotionSection>
              <MotionSection direction="up" delay={0.2} className="text-center">
                <CounterAnimation target={98} suffix="%" />
                <p className="text-gray-600 mt-2">Taux de satisfaction des eleves</p>
              </MotionSection>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <MotionSection direction="left">
                  <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                    Fonctionnalites
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                    Tout ce dont vous avez besoin pour maitriser l'arabe
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Notre plateforme combine des outils modernes et une methode prouvee
                    pour vous offrir une experience d'apprentissage complete et efficace.
                  </p>

                  <div className="bg-orange-50 rounded-2xl p-6 border border-orange-100">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center">
                        <HeadphonesIcon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">Besoin d'aide ?</h3>
                        <p className="text-sm text-gray-500">Notre equipe est la pour vous</p>
                      </div>
                    </div>
                    <a
                      href="mailto:contact@arabeimportance.fr"
                      className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
                    >
                      Contactez-nous
                    </a>
                  </div>
                </MotionSection>
              </div>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <MotionSection key={feature.title} direction="right" delay={index * 0.1}>
                    <div className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow card-shadow-hover transition-all hover:-translate-y-1">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 feature-icon-${feature.color}`}>
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </MotionSection>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
            <MotionSection direction="up" className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                La Methode
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                La methode ERPR en 4 etapes
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Une approche structuree et efficace pour maitriser l'arabe
              </p>
            </MotionSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { letter: 'E', title: 'Ecoute', desc: 'Ecoutez attentivement les audios pour memoriser les sons', icon: Volume2 },
                { letter: 'R', title: 'Repetition', desc: 'Repetez pour ancrer durablement dans votre memoire', icon: Clock },
                { letter: 'P', title: 'Pratique', desc: 'Appliquez vos connaissances avec des exercices', icon: Brain },
                { letter: 'R', title: 'Regularite', desc: 'Progressez jour apres jour avec constance', icon: Award },
              ].map((item, index) => (
                <MotionSection key={item.title} direction="up" delay={index * 0.1}>
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 card-shadow text-center h-full">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-orange-200">
                      <span className="text-2xl font-bold text-white">{item.letter}</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm">{item.desc}</p>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
            <MotionSection direction="up" className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                Temoignages
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                Ce que disent nos eleves
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Des centaines d'eleves ont deja transforme leur apprentissage de l'arabe
                grace a la methode ERPR
              </p>
            </MotionSection>

            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <MotionSection key={testimonial.name} direction="up" delay={index * 0.1}>
                  <div
                    className={`rounded-2xl p-6 h-full ${
                      testimonial.featured
                        ? 'bg-gradient-to-br from-orange-500 to-orange-400 text-white'
                        : 'bg-white border border-gray-100 card-shadow'
                    }`}
                  >
                    <div className="flex gap-1 mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-4 h-4 ${
                            testimonial.featured
                              ? 'fill-white text-white'
                              : 'fill-orange-400 text-orange-400'
                          }`}
                        />
                      ))}
                    </div>
                    <p
                      className={`mb-6 leading-relaxed ${
                        testimonial.featured ? 'text-white/90' : 'text-gray-600'
                      }`}
                    >
                      "{testimonial.content}"
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
                        <p
                          className={`font-semibold ${
                            testimonial.featured ? 'text-white' : 'text-gray-900'
                          }`}
                        >
                          {testimonial.name}
                        </p>
                        <p
                          className={`text-sm ${
                            testimonial.featured ? 'text-white/70' : 'text-gray-500'
                          }`}
                        >
                          {testimonial.handle}
                        </p>
                      </div>
                    </div>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
            <MotionSection direction="up" className="text-center mb-16">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                FAQ
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                Questions frequentes
              </h2>
            </MotionSection>

            <div className="max-w-3xl mx-auto space-y-4">
              {faqs.map((faq, index) => (
                <MotionSection key={index} direction="up" delay={index * 0.05}>
                  <FAQItem
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === index}
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  />
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-20 md:py-32">
          <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
            <MotionSection direction="up" className="text-center mb-12">
              <span className="text-orange-500 font-semibold text-sm uppercase tracking-wide">
                Tarifs
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
                Choisissez votre formule
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                Commencez gratuitement et evoluez selon vos besoins
              </p>

              <div className="inline-flex items-center bg-gray-100 rounded-full p-1">
                <button
                  onClick={() => setBillingPeriod('monthly')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    billingPeriod === 'monthly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Mensuel
                </button>
                <button
                  onClick={() => setBillingPeriod('yearly')}
                  className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                    billingPeriod === 'yearly'
                      ? 'bg-white text-gray-900 shadow-sm'
                      : 'text-gray-600'
                  }`}
                >
                  Annuel
                  <span className="ml-2 text-xs text-orange-500">-20%</span>
                </button>
              </div>
            </MotionSection>

            <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
              {pricingPlans.map((plan, index) => (
                <MotionSection key={plan.name} direction="up" delay={index * 0.1}>
                  <div
                    className={`rounded-2xl p-6 md:p-8 h-full flex flex-col ${
                      plan.highlighted
                        ? 'bg-gradient-to-br from-orange-500 to-orange-400 text-white shadow-xl shadow-orange-200 scale-105'
                        : 'bg-white border border-gray-200'
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="bg-white/20 rounded-full px-4 py-1 text-sm font-semibold w-fit mb-4">
                        Populaire
                      </div>
                    )}
                    <h3
                      className={`text-xl font-semibold mb-2 ${
                        plan.highlighted ? 'text-white' : 'text-gray-900'
                      }`}
                    >
                      {plan.name}
                    </h3>
                    <p
                      className={`text-sm mb-4 ${
                        plan.highlighted ? 'text-white/80' : 'text-gray-500'
                      }`}
                    >
                      {plan.description}
                    </p>
                    <div className="mb-6">
                      <span
                        className={`text-4xl font-bold ${
                          plan.highlighted ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {plan.price}EUR
                      </span>
                      {plan.period && (
                        <span
                          className={plan.highlighted ? 'text-white/70' : 'text-gray-500'}
                        >
                          {plan.period}
                        </span>
                      )}
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle
                            className={`w-5 h-5 flex-shrink-0 ${
                              plan.highlighted ? 'text-white' : 'text-orange-500'
                            }`}
                          />
                          <span
                            className={`text-sm ${
                              plan.highlighted ? 'text-white/90' : 'text-gray-600'
                            }`}
                          >
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <a
                      href={plan.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-full py-3 rounded-full font-semibold text-center transition-all ${
                        plan.highlighted
                          ? 'bg-white text-orange-500 hover:bg-gray-50'
                          : 'bg-gray-900 text-white hover:bg-gray-800'
                      }`}
                    >
                      {plan.cta}
                    </a>
                  </div>
                </MotionSection>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-orange-500 to-orange-400">
          <div className="max-w-4xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32 text-center">
            <MotionSection direction="up">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Pret a commencer votre apprentissage ?
              </h2>
              <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
                Rejoignez plus de 500 eleves qui ont deja transforme leur apprentissage
                de l'arabe avec la methode ERPR.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-500 px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all shadow-lg"
                >
                  Essayer gratuitement - 7 jours
                </a>
                <a
                  href="https://methode-erpr-by-arabeimportance.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 text-white px-8 py-3 rounded-full font-semibold hover:bg-white/30 transition-all border border-white/30"
                >
                  Se connecter
                </a>
              </div>
            </MotionSection>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
