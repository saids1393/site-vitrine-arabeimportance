import React from 'react';
import { Mail, Phone, MapPin, Building, User, Server, Briefcase } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
  value: string | React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label, value }) => (
  <div className="flex items-start gap-3 mb-4">
    <div className="flex-shrink-0 w-5 h-5 text-blue-900 mt-1">
      {icon}
    </div>
    <div>
      <span className="text-gray-600 text-sm font-medium">{label} :</span>
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
  <section className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
    <div className="flex items-center gap-3 mb-6">
      <div className="w-8 h-8 text-blue-900">
        {icon}
      </div>
      <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
    </div>
    {children}
  </section>
);

export default function LegalPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* En-tête */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Mentions légales
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Informations légales obligatoires
          </p>
        </header>

        {/* Éditeur du site */}
        <Section 
          title="Éditeur du site" 
          icon={<Building className="w-full h-full" />}
        >
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <ContactItem 
                icon={<User />}
                label="Nom"
                value="Soidroudine"
              />
              <ContactItem 
                icon={<Building />}
                label="Statut"
                value="Entrepreneur individuel (Micro-entreprise)"
              />
              <ContactItem 
                icon={<Briefcase />}
                label="Nom commercial"
                value="arabe-importance"
              />
            </div>
            <div>
              <ContactItem 
                icon={<Building />}
                label="N° SIRET"
                value="927 599 183 00021"
              />
              <ContactItem 
                icon={<Building />}
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
                  icon={<MapPin />}
                  label="Adresse"
                  value="Seine St Denis (93), France"
                />
              </div>
              <div>
                <ContactItem 
                  icon={<Mail />}
                  label="Email"
                  value={
                    <a 
                      href="mailto:soidroudinesaid51@gmail.com"
                      className="text-blue-900 hover:text-blue-700 transition-colors duration-200 hover:underline"
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
          icon={<User className="w-full h-full" />}
        >
          <div className="bg-gray-50 rounded-lg p-6">
            <p className="text-gray-900 font-semibold text-lg">Soidroudine</p>
            <p className="text-gray-600 mt-2">
              Responsable éditorial du contenu publié sur le site
            </p>
          </div>
        </Section>

        {/* Hébergeur */}
        <Section 
          title="Hébergeur" 
          icon={<Server className="w-full h-full" />}
        >
          <div className="bg-blue-50 rounded-lg p-6">
            <ContactItem 
              icon={<Building />}
              label="Hébergeur"
              value="Vercel, Inc."
            />
            <ContactItem 
              icon={<MapPin />}
              label="Adresse"
              value="340 S Lemon Ave #4133, Walnut, CA 91789, USA"
            />
            <p className="text-sm text-gray-500 mt-4 italic">
              * Remplacez par l'hébergeur réel si différent
            </p>
          </div>
        </Section>

        {/* Activité */}
        <Section 
          title="Activité" 
          icon={<Briefcase className="w-full h-full" />}
        >
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
            <p className="text-gray-900 leading-relaxed text-lg">
              Création et vente de programmes pédagogiques en ligne pour l'apprentissage 
              de la langue arabe littéraire.
            </p>
          </div>
        </Section>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <p className="text-gray-500 text-sm">
            Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}
          </p>
        </footer>
      </div>
    </div>
  );
}