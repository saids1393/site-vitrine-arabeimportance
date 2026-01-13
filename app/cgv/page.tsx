'use client';
import React from 'react';
import Link from 'next/link';
import { FileText, Sparkles, Instagram, Phone, AlertTriangle, CreditCard, Key, RotateCcw, Shield, BookOpen, Database, Scale } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '../components/Header';

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
      <h2 className="text-xl font-bold text-gray-900">{title}</h2>
    </div>
    {children}
  </motion.section>
);

const WarningBox: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 my-4 flex items-start gap-3">
    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
    <p className="text-amber-800 text-sm leading-relaxed">{children}</p>
  </div>
);

export default function CGVPage() {
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
                  <FileText className="w-4 h-4 text-sky-500" />
                  <span className="text-sm font-semibold text-sky-500">Document légal</span>
                </div>
                <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                  Conditions Générales de Vente
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                  Conditions d'utilisation et de vente de la plateforme ArabeImportance
                </p>
              </motion.div>
            </div>
          </section>

          {/* Contenu */}
          <section className="py-16">
            <div className="section-container max-w-4xl mx-auto">
              
              {/* Article 1 */}
              <Section 
                title="Article 1 – Champ d'application et objet" 
                icon={<FileText className="w-5 h-5" />}
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les présentes Conditions Générales de Vente (CGV) régissent l'accès et l'utilisation de la plateforme ArabeImportance, éditée par Soidroudine, entrepreneur individuel.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  La plateforme propose :
                </p>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>l'accès à des contenus éducatifs numériques (vidéos, ressources, supports) relatifs à la langue arabe littéraire ;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>selon la formule choisie, un accompagnement linguistique de soutien, destiné à aider l'utilisateur en cas de difficulté rencontrée lors de l'utilisation des contenus.</span>
                  </li>
                </ul>
                <WarningBox>
                  Les prestations proposées ne constituent pas des actions de formation professionnelle au sens de l'article L6313-1 du Code du travail, et ne donnent lieu à aucune certification, attestation ou validation officielle des acquis.
                </WarningBox>
              </Section>

              {/* Article 2 */}
              <Section 
                title="Article 2 – Offres et abonnements" 
                icon={<CreditCard className="w-5 h-5" />}
              >
                <div className="space-y-6">
                  <div className="bg-sky-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2.1 Abonnement « Solo » – 10 €</h3>
                    <p className="text-gray-700 mb-3">Cet abonnement donne accès :</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>aux contenus éducatifs numériques disponibles sur la plateforme ;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>à l'utilisation personnelle des ressources proposées.</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-3 text-sm italic">Aucun accompagnement individualisé n'est inclus.</p>
                  </div>

                  <div className="bg-gradient-to-r from-sky-50 to-sky-100 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">2.2 Abonnement « Accompagnement » – 30 €</h3>
                    <p className="text-gray-700 mb-3">Cet abonnement inclut :</p>
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>l'accès aux contenus éducatifs numériques ;</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>un accompagnement linguistique de soutien, pouvant inclure :</span>
                      </li>
                    </ul>
                    <ul className="space-y-2 text-gray-700 ml-6 mt-2">
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>assistance en cas de difficulté sur un contenu précis,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>réponses aux questions,</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span>suivi d'engagement basé sur l'utilisation de la plateforme.</span>
                      </li>
                    </ul>
                    <p className="text-gray-600 mt-4 text-sm italic">Cet accompagnement vise uniquement à soutenir la progression personnelle, sans évaluation officielle ni validation des acquis.</p>
                  </div>
                </div>
              </Section>

              {/* Article 3 */}
              <Section 
                title="Article 3 – Prix et modalités de paiement" 
                icon={<CreditCard className="w-5 h-5" />}
              >
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Les prix sont indiqués en euros (€), toutes taxes comprises.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Le paiement est exigible immédiatement lors de la souscription à l'abonnement.</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4 mb-2">Modes de paiement acceptés :</p>
                <ul className="space-y-2 text-gray-700 ml-4">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 bg-sky-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Carte bancaire via une solution de paiement sécurisée.</span>
                  </li>
                </ul>
                <p className="text-gray-700 mt-4">Une facture est transmise par voie électronique après validation du paiement.</p>
              </Section>

              {/* Article 4 */}
              <Section 
                title="Article 4 – Accès aux services" 
                icon={<Key className="w-5 h-5" />}
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'accès à la plateforme est accordé :
                </p>
                <ul className="space-y-3 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>pendant la durée de l'abonnement souscrit ;</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>tant que la plateforme est exploitée par l'éditeur.</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  Les identifiants de connexion sont strictement personnels. Tout partage ou utilisation frauduleuse peut entraîner la suspension ou la résiliation de l'accès, sans remboursement.
                </p>
              </Section>

              {/* Article 5 */}
              <Section 
                title="Article 5 – Droit de rétractation" 
                icon={<RotateCcw className="w-5 h-5" />}
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  Conformément aux articles L221-18 et suivants du Code de la consommation, le client dispose d'un délai de 14 jours à compter de la souscription pour exercer son droit de rétractation.
                </p>
                <WarningBox>
                  <strong>Exception légale</strong><br />
                  En validant son inscription et en accédant immédiatement aux contenus numériques, le client :
                  <ul className="mt-2 space-y-1">
                    <li>• reconnaît que l'exécution du service commence immédiatement ;</li>
                    <li>• accepte expressément la perte de son droit de rétractation, conformément à l'article L221-28 du Code de la consommation.</li>
                  </ul>
                </WarningBox>
              </Section>

              {/* Article 6 */}
              <Section 
                title="Article 6 – Responsabilité" 
                icon={<Shield className="w-5 h-5" />}
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les contenus proposés ont une vocation éducative et de soutien personnel.
                </p>
                <p className="text-gray-700 leading-relaxed mb-2">L'éditeur ne garantit :</p>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>aucun résultat,</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>aucun niveau atteint,</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-sky-500 rounded-full mt-2 flex-shrink-0"></span>
                    <span>aucune progression mesurable.</span>
                  </li>
                </ul>
                <p className="text-gray-700 leading-relaxed">
                  L'utilisateur demeure seul responsable de l'usage qu'il fait des contenus et de son rythme d'apprentissage.
                </p>
              </Section>

              {/* Article 7 */}
              <Section 
                title="Article 7 – Propriété intellectuelle" 
                icon={<BookOpen className="w-5 h-5" />}
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  L'ensemble des contenus (vidéos, textes, supports, interface) est protégé par le droit de la propriété intellectuelle.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Toute reproduction, diffusion, modification ou exploitation sans autorisation écrite est strictement interdite.
                </p>
              </Section>

              {/* Article 8 */}
              <Section 
                title="Article 8 – Données personnelles" 
                icon={<Database className="w-5 h-5" />}
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les données personnelles sont collectées et traitées uniquement dans le cadre du fonctionnement de la plateforme, conformément à la réglementation en vigueur (RGPD).
                </p>
                <p className="text-gray-700 leading-relaxed">
                  L'utilisateur dispose d'un droit d'accès, de rectification et de suppression de ses données.
                </p>
              </Section>

              {/* Article 9 */}
              <Section 
                title="Article 9 – Droit applicable et litiges" 
                icon={<Scale className="w-5 h-5" />}
              >
                <p className="text-gray-700 leading-relaxed mb-4">
                  Les présentes CGV sont régies par le droit français.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  En cas de litige, une solution amiable sera recherchée en priorité.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  À défaut, les tribunaux français compétents seront seuls habilités à trancher le litige.
                </p>
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
