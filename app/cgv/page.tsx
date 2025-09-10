import React from 'react';
import { 
  FileText, 
  Euro, 
  Key, 
  RotateCcw, 
  Shield, 
  Copyright, 
  Scale 
} from 'lucide-react';

interface ArticleProps {
  number: number;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

const Article: React.FC<ArticleProps> = ({ number, title, icon, children }) => (
  <article className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-8">
    <div className="flex items-center gap-4 mb-6">
      <div className="flex items-center justify-center w-12 h-12 bg-blue-900 text-white rounded-lg">
        <span className="text-lg font-bold">{number}</span>
      </div>
      <div className="flex items-center gap-3 flex-1">
        <div className="w-6 h-6 text-blue-900">
          {icon}
        </div>
        <h2 className="text-xl font-bold text-gray-900">
          Article {number} – {title}
        </h2>
      </div>
    </div>
    <div className="ml-16">
      {children}
    </div>
  </article>
);

interface HighlightBoxProps {
  type: 'info' | 'warning' | 'success';
  children: React.ReactNode;
}

const HighlightBox: React.FC<HighlightBoxProps> = ({ type, children }) => {
  const styles = {
    info: 'bg-blue-50 border-blue-200 text-blue-900',
    warning: 'bg-amber-50 border-amber-200 text-amber-900',
    success: 'bg-green-50 border-green-200 text-green-900'
  };

  return (
    <div className={`p-4 rounded-lg border-2 ${styles[type]}`}>
      {children}
    </div>
  );
};

interface PaymentMethodProps {
  methods: string[];
}

const PaymentMethods: React.FC<PaymentMethodProps> = ({ methods }) => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
    {methods.map((method, index) => (
      <div 
        key={index}
        className="bg-gray-50 rounded-lg p-3 text-center text-sm font-medium text-gray-700 border border-gray-200"
      >
        {method}
      </div>
    ))}
  </div>
);

interface FeatureListProps {
  items: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ items }) => (
  <ul className="space-y-3">
    {items.map((item, index) => (
      <li key={index} className="flex items-start gap-3">
        <div className="w-2 h-2 bg-blue-900 rounded-full mt-3 flex-shrink-0"></div>
        <span className="text-gray-700 leading-relaxed">{item}</span>
      </li>
    ))}
  </ul>
);

export default function CGVPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* En-tête */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Conditions Générales de Vente
          </h1>
          <div className="w-24 h-1 bg-blue-900 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 text-lg">
            Plateforme d'apprentissage <span className="font-semibold text-blue-900">arabe-importance</span>
          </p>
        </header>

        {/* Article 1 – Objet */}
        <Article number={1} title="Objet" icon={<FileText className="w-full h-full" />}>
          <HighlightBox type="info">
            <p className="text-lg leading-relaxed">
              Les présentes conditions régissent la vente d'un accès à la plateforme{' '}
              <strong className="text-blue-900">arabe-importance</strong> permettant l'apprentissage 
              de la lecture et de l'écriture en arabe via des supports numériques, vidéos et exercices.
            </p>
          </HighlightBox>
        </Article>

        {/* Article 2 – Prix et paiement */}
        <Article number={2} title="Prix et paiement" icon={<Euro className="w-full h-full" />}>
          <div className="space-y-6">
            <FeatureList items={[
              "Les prix sont indiqués en euros (€) toutes taxes comprises.",
              "Le paiement est exigible immédiatement à la commande.",
              "Une facture est envoyée par email après paiement."
            ]} />
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Modes de paiement acceptés</h3>
              <PaymentMethods methods={["Carte bancaire","Autres*"]} />
              <p className="text-sm text-gray-500 mt-2 italic">* À adapter selon vos moyens de paiement</p>
            </div>
          </div>
        </Article>

        {/* Article 3 – Accès au service */}
        <Article number={3} title="Accès au service" icon={<Key className="w-full h-full" />}>
          <div className="space-y-4">
            <HighlightBox type="success">
              <div className="flex items-center gap-3">
                <div className="text-2xl">🔑</div>
                <div>
                  <h3 className="font-semibold text-lg">Accès à vie</h3>
                  <p>Pendant toute la durée d'exploitation de la plateforme par l'éditeur</p>
                </div>
              </div>
            </HighlightBox>
            
            <HighlightBox type="warning">
              <div className="flex items-center gap-3">
                <div className="text-2xl">⚠️</div>
                <div>
                  <h3 className="font-semibold">Identifiants personnels</h3>
                  <p>Les identifiants fournis sont strictement personnels et le partage est interdit.</p>
                </div>
              </div>
            </HighlightBox>
          </div>
        </Article>

        {/* Article 4 – Droit de rétractation */}
        <Article number={4} title="Droit de rétractation" icon={<RotateCcw className="w-full h-full" />}>
          <div className="space-y-4">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <div className="text-3xl">📅</div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    Délai légal de 14 jours
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    Conformément au Code de la consommation, le client dispose d'un délai de 14 jours 
                    pour exercer son droit de rétractation.
                  </p>
                </div>
              </div>
            </div>
            
            <HighlightBox type="warning">
              <h3 className="font-semibold mb-2">⚠️ Exception importante</h3>
              <p>
                Si le client accède immédiatement au contenu numérique et reconnaît expressément 
                sa renonciation à ce droit (case à cocher), le droit de rétractation est perdu.
              </p>
            </HighlightBox>
          </div>
        </Article>

        {/* Article 5 – Garanties légales */}
        <Article number={5} title="Garanties légales" icon={<Shield className="w-full h-full" />}>
          <div className="bg-green-50 rounded-lg p-6 border-2 border-green-200">
            <div className="flex items-center gap-4">
              <div className="text-4xl">🛡️</div>
              <div>
                <h3 className="text-lg font-semibold text-green-900 mb-2">
                  Protection du consommateur
                </h3>
                <p className="text-green-800">
                  Le vendeur est tenu aux garanties légales de conformité et des vices cachés.
                </p>
              </div>
            </div>
          </div>
        </Article>

        {/* Article 6 – Propriété intellectuelle */}
        <Article number={6} title="Propriété intellectuelle" icon={<Copyright className="w-full h-full" />}>
          <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-900">
            <div className="flex items-start gap-4">
              <div className="text-3xl">©️</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Droits d'auteur protégés
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Tous les contenus disponibles sur la plateforme sont la propriété exclusive de{' '}
                  <strong className="text-blue-900">l'entreprise arabe-importance</strong>. 
                  Toute reproduction ou diffusion non autorisée est strictement interdite.
                </p>
              </div>
            </div>
          </div>
        </Article>

        {/* Article 9 – Droit applicable et litiges */}
        <Article number={9} title="Droit applicable et litiges" icon={<Scale className="w-full h-full" />}>
          <div className="space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                  <span>🇫🇷</span> Droit français
                </h3>
                <p className="text-blue-800">
                  Les présentes conditions sont régies par le droit français.
                </p>
              </div>
              
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="font-semibold text-green-900 mb-2 flex items-center gap-2">
                  <span>🤝</span> Médiation
                </h3>
                <p className="text-green-800">
                  En cas de litige, une recherche amiable sera effectuée avant toute action judiciaire.
                </p>
              </div>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4">
              <p className="text-gray-700 text-center">
                <strong>Tribunal compétent :</strong> Tribunaux français
              </p>
            </div>
          </div>
        </Article>

        {/* Footer */}
        <footer className="text-center pt-8 border-t border-gray-200">
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <p className="text-gray-600 mb-2">
              <strong>Date d'entrée en vigueur :</strong> {new Date().toLocaleDateString('fr-FR')}
            </p>
            <p className="text-sm text-gray-500">
              Ces conditions générales de vente peuvent être modifiées à tout moment. 
              Les modifications entrent en vigueur dès leur publication.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}