'use client';
import React from 'react';
import Link from 'next/link';
import { Mail, MapPin, Building, User, Briefcase, Sparkles, Instagram, Phone } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="flex-shrink-0 w-5 h-5 text-sky-500 mt-1">
      {icon}
    </div>
    <div>
      <span className="text-gray-500 text-sm font-medium">{label} :</span>
      <div className="text-gray-900 font-semibold">{value}</div>
    </div>
  </div>
);

interface SectionProps {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ title, icon, children }) => (
  <motion.section 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 mb-8"
  >
    <div className="flex items-center gap-3 mb-6">
      <div className="w-10 h-10 bg-sky-500 rounded-xl flex items-center justify-center text-white">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    {children}
  </motion.section>
);

export default function LegalPage() {
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header scrollToSection={scrollToSection} />

      <main>
        <div className="main-container">
          {/* Hero */}
          <section className="pt-32 md:pt-40 pb-16 bg-gradient-to-b from-sky-50/50 to-white">
            <div className="section-container">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-flex items-center gap-2 bg-sky-100 rounded-full px-4 py-2 mb-6">
                  <Building className="w-4 h-4 text-sky-500" />
                  <span className="text-sm font-semibold text-sky-500">Informations légales</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Mentions légales
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  Informations légales obligatoires concernant ArabeImportance
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contenu */}
          <section className="py-16">
            <div className="section-container max-w-4xl mx-auto">
              {/* Éditeur du site */}
              <Section 
                title="Éditeur du site" 
                icon={<Building className="w-5 h-5" />}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <ContactItem 
                      icon={<User className="w-5 h-5" />}
                      label="Nom"
                      value="Soidroudine"
                    />
                    <ContactItem 
                      icon={<Building className="w-5 h-5" />}
                      label="Statut"
                      value="Entrepreneur individuel (micro-entreprise)"
                    />
                    <ContactItem 
                      icon={<Briefcase className="w-5 h-5" />}
                      label="Nom commercial"
                      value="arabe-importance"
                    />
                  </div>
                  <div>
                    <ContactItem 
                      icon={<Building className="w-5 h-5" />}
                      label="N° SIRET"
                      value="927 599 183 00021"
                    />
                    <ContactItem 
                      icon={<Building className="w-5 h-5" />}
                      label="Code APE"
                      value="4791B"
                    />
                  </div>
                </div>
                
                <div className="border-t border-gray-100 pt-6 mt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Coordonnées</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <ContactItem 
                        icon={<MapPin className="w-5 h-5" />}
                        label="Adresse"
                        value="Seine-Saint-Denis (93), France"
                      />
                    </div>
                    <div>
                      <ContactItem 
                        icon={<Mail className="w-5 h-5" />}
                        label="Email"
                        value={
                          <a 
                            href="mailto:arabeimportance@gmail.com"
                            className="text-sky-500 hover:text-sky-600 transition-colors duration-200 hover:underline"
                          >
                            arabeimportance@gmail.com
                          </a>
                        }
                      />
                    </div>
                  </div>
                </div>
              </Section>

              {/* Directeur de la publication */}
              <Section 
                title="Directeur de la publication" 
                icon={<User className="w-5 h-5" />}
              >
                <div className="bg-sky-50 rounded-xl p-6">
                  <p className="text-gray-900 font-semibold text-lg">Soidroudine</p>
                </div>
              </Section>

              {/* Responsable éditorial */}
              <Section 
                title="Responsable éditorial" 
                icon={<User className="w-5 h-5" />}
              >
                <div className="bg-sky-50 rounded-xl p-6">
                  <p className="text-gray-900 leading-relaxed">
                    Soidroudine, responsable du contenu publié sur le site.
                  </p>
                </div>
              </Section>

              {/* Activité */}
              <Section 
                title="Activité" 
                icon={<Briefcase className="w-5 h-5" />}
              >
                <div className="bg-gradient-to-r from-sky-50 to-sky-100 rounded-xl p-6">
                  <p className="text-gray-900 leading-relaxed mb-4">
                    Le site ArabeImportance propose :
                  </p>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>l'accès à des contenus éducatifs en ligne (vidéos, ressources et supports) dédiés à la découverte et à la pratique de la langue arabe littéraire ;</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span>des prestations d'accompagnement et de soutien linguistique, destinées à aider les utilisateurs en cas de difficulté rencontrée lors de l'utilisation des contenus proposés, ainsi qu'un suivi individualisé de leur engagement.</span>
                    </li>
                  </ul>
                  <div className="mt-6 p-4 bg-white/50 rounded-lg border border-sky-200">
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Les prestations proposées relèvent de l'accompagnement éducatif et linguistique. Elles ne constituent pas des actions de formation professionnelle au sens de l'article L6313-1 du Code du travail et ne donnent lieu à aucune certification, attestation ou validation officielle des acquis.
                    </p>
                  </div>
                </div>
              </Section>

              {/* Date de mise à jour */}
              <div className="text-center pt-8">
                <p className="text-gray-500 text-sm">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-sky-50 to-sky-100 mt-20 rounded-t-3xl relative overflow-hidden">
          <div className="section-container py-16 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8">
              <div>
                <Link href="/" className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 bg-sky-500 rounded-lg flex items-center justify-center">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-sky-500">ArabeImportance</span>
                </Link>
                <p className="text-gray-600 max-w-sm">
                  Pour toute question ou demande d'information, n'hésitez pas à nous contacter.
                </p>
              </div>

              <div>
                <h4 className="text-sky-500 font-bold uppercase tracking-wider text-sm mb-4">Social</h4>
                <ul className="space-y-3">
                  <li>
                    <a href="https://instagram.com/arabeimportance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium">
                      <Instagram className="w-5 h-5" />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a href="https://tiktok.com/@arabeimportance" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium">
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                      </svg>
                      TikTok
                    </a>
                  </li>
                  <li>
                    <a href="https://wa.me/33XXXXXXXXX" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sky-500 hover:text-sky-600 font-medium">
                      <Phone className="w-5 h-5" />
                      WhatsApp
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="text-sky-500 font-bold uppercase tracking-wider text-sm mb-4">Légal</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/cgv" className="text-sky-500 hover:text-sky-600 font-medium">
                      Conditions générales
                    </Link>
                  </li>
                  <li>
                    <Link href="/legal" className="text-sky-500 hover:text-sky-600 font-medium">
                      Mentions légales
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="text-sky-500 hover:text-sky-600 font-medium">
                      Blog
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex items-end justify-center pointer-events-none select-none overflow-hidden">
            <div className="flex items-center gap-4 text-sky-200/40 mb-[-20px]">
              <div className="w-20 h-20 bg-sky-200/30 rounded-xl flex items-center justify-center">
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
