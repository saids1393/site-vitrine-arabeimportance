'use client';
import { motion } from 'framer-motion';
import {
  Star,
  Mail,
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
      title: 'Tajwîd - Lire comme un Imam',
      price: '7€',
      priceUnit: '/heure',
      icon: Volume2,
      color: 'from-emerald-800 to-emerald-900',
      features: [
        'Correction de sourate Al-Fatiha en entier',
        'Apprentissage des bases du Tajwîd',
        'Maîtrise du souffle et de la mélodie'
      ]
    },
    {
      title: 'Maîtrise Complète de l\'Arabe',
      price: '10€',
      priceUnit: '/heure',
      icon: GraduationCap,
      color: 'from-blue-800 to-blue-900',
      features: [
        'Le vocabulaire et la conjugaison',
        'La grammaire (Nahw)',
        'Le Sarf et Al-Balâghah'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-black/80 overflow-x-hidden">
      {/* Header */}
      <Header scrollToSection={scrollToSection} />

      {/* Hero Section */}
      <section className="pt-16 min-h-screen flex items-center bg-black/80">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
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
              className="inline-flex items-center bg-gradient-to-r from-blue-900 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 border border-blue-700"
            >
              <Star className="w-4 h-4 mr-2" />
              Pour les plus avancés
            </motion.div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Formations{' '}
              <span className="bg-gradient-to-r from-blue-800 to-blue-900 bg-clip-text text-transparent">
                avancées
              </span>
            </h1>
            
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
              Deux formations d'excellence pour les étudiants avancés souhaitant perfectionner leurs compétences en arabe et en Tajwîd.
            </p>
          </motion.div>

          {/* Offers Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16 bg-black/80">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-black/80  rounded-2xl p-8 border border-gray-600 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center">
                    <div className={`w-16 h-16 bg-gradient-to-r ${offer.color} rounded-xl flex items-center justify-center mr-4`}>
                      <offer.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-1">{offer.title}</h3>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-white">{offer.price}</div>
                    <div className="text-sm text-blue-200">{offer.priceUnit}</div>
                  </div>
                </div>

                <ul className="space-y-3 text-lg">
                  {offer.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-4 mt-3 flex-shrink-0"></div>
                      <span className="text-blue-100">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center "
          >
            <div className="bg-black/80 rounded-2xl p-8 border border-gray-600 shadow-md">
              <h3 className="text-3xl font-bold text-white mb-6">
                Comment procéder ?
              </h3>
              
              <p className="text-xl text-blue-100 mb-12 leading-relaxed max-w-3xl mx-auto">
                Contactez-nous en précisant <strong className="text-white">le rythme par semaine en terme d'heures</strong> et <strong className="text-white">les jours exacts avec les horaires disponibles</strong>. 
                Le professeur reviendra vers vous rapidement.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
                
                
                <a
                  href="https://wa.me/201022767532?text=Bonjour, je souhaite m'inscrire à une formation avancée."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-xl text-lg"
                >
                  <MessageSquare className="mr-2 w-5 h-5" />
                  WhatsApp
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
}