'use client';
import { motion } from 'framer-motion';
import {
  Star,
  ArrowRight,
  Volume2,
  GraduationCap,
  MessageSquare,
} from 'lucide-react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Abonnements() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const offers = [
    {
      title: 'Tajwid - Lire comme un Imam',
      price: '7',
      priceUnit: '/heure',
      icon: Volume2,
      color: 'bg-gradient-to-br from-orange-500 to-orange-400',
      features: [
        'Correction de sourate Al-Fatiha en entier',
        'Apprentissage des bases du Tajwid',
        'Maitrise du souffle et de la melodie'
      ]
    },
    {
      title: 'Maitrise Complete de l\'Arabe',
      price: '10',
      priceUnit: '/heure',
      icon: GraduationCap,
      color: 'bg-gradient-to-br from-gray-800 to-gray-900',
      features: [
        'Le vocabulaire et la conjugaison',
        'La grammaire (Nahw)',
        'Le Sarf et Al-Balaghah'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <Header scrollToSection={scrollToSection} />

      <section className="pt-32 pb-20">
        <div className="max-w-5xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center bg-orange-100 text-orange-700 px-4 py-2 rounded-full text-sm font-semibold mb-6"
            >
              <Star className="w-4 h-4 mr-2" />
              Pour les plus avances
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Formations{' '}
              <span className="text-gradient-orange">avancees</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Deux formations d'excellence pour les etudiants avances souhaitant perfectionner leurs competences en arabe et en Tajwid.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 border border-gray-200 card-shadow hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 ${offer.color} rounded-xl flex items-center justify-center mr-4`}>
                      <offer.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{offer.title}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-gray-900">{offer.price}EUR</div>
                    <div className="text-sm text-gray-500">{offer.priceUnit}</div>
                  </div>
                </div>

                <ul className="space-y-3">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-4 mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Comment proceder ?
              </h3>

              <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Contactez-nous en precisant <strong className="text-gray-900">le rythme par semaine en terme d'heures</strong> et <strong className="text-gray-900">les jours exacts avec les horaires disponibles</strong>.
                Le professeur reviendra vers vous rapidement.
              </p>

              <a
                href="https://wa.me/201022767532?text=Bonjour, je souhaite m'inscrire a une formation avancee."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="mr-2 w-5 h-5" />
                WhatsApp
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
