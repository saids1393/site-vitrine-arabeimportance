// components/EmailForm.tsx
'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Send, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleEmailSubmit = async () => {
    if (!email) {
      setError('Veuillez entrer une adresse email valide');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        const data = await response.json();
        setError(data.message || "Erreur lors de l'envoi de l'email");
      }
    } catch {
      setError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900/50 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <header className="mb-10">
          <h2 className="text-4xl sm:text-4xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-white mb-6">
            Rejoignez-nous et découvrez <span className="bg-gradient-to-r from-pink-400 to-blue-400 bg-clip-text text-transparent">la puissance de l'ERPR</span>
          </h2>
          <p className="text-xl text-slate-300 mb-4">Offre spéciale pour les 25 premiers inscrits !</p>
          <p className="text-xl text-slate-300 mb-4">
            <span className="text-pink-400 font-bold text-2xl">59€</span> au lieu de <span className="line-through text-slate-500">89€</span>
          </p>
          <p className="text-slate-400">
            Accès à vie avec possibilité de paiement en plusieurs fois. Comprenez l'importance d'investir dans votre apprentissage de l'arabe.
          </p>
        </header>

        {!isSubmitted ? (
          <div className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="flex-1 bg-white px-6 py-4 rounded-xl text-slate-900 focus:ring-2 focus:ring-pink-500 outline-none"
                aria-label="Adresse email pour inscription"
              />
              <button
                onClick={handleEmailSubmit}
                disabled={isLoading}
                className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-4 rounded-xl font-semibold hover:from-pink-600 hover:to-blue-600 transition-all shadow-lg disabled:opacity-70 flex items-center justify-center gap-2"
                aria-label="S'inscrire à la méthode ERPR"
              >
                {isLoading ? 'Envoi...' : (
                  <>
                    <Mail className="w-5 h-5" />
                    <span>S'inscrire</span>
                  </>
                )}
              </button>
            </div>
            {error && <p className="text-pink-400 mt-3 text-sm" role="alert">{error}</p>}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-pink-500/20 border border-pink-500/30 text-white px-8 py-4 rounded-xl inline-flex items-center mt-6"
            role="alert"
          >
            <CheckCircle className="mr-2 w-5 h-5" />
            Merci ! Vous recevrez bientôt de nos nouvelles.
          </motion.div>
        )}

        <nav className="flex justify-center gap-4 mt-8" aria-label="Réseaux sociaux">
          <Link
            href="https://t.me/ArabeImportance"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md"
            aria-label="Rejoindre notre canal Telegram"
          >
            <Send className="w-4 h-4" />
            Telegram
          </Link>
          <Link
            href="https://instagram.com/arabeimportance"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-4 py-3 rounded-lg flex items-center gap-2 text-sm font-medium shadow-md"
            aria-label="Suivre sur Instagram"
          >
            <Instagram className="w-4 h-4" />
            Instagram
          </Link>
        </nav>
      </div>
    </section>
  );
}
