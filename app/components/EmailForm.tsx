'use client';

import { useState } from 'react';
import { Mail, CheckCircle, Send, Instagram } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function EmailForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    if (!email || !message) {
      setError('Veuillez remplir tous les champs');
      return;
    }
    setIsLoading(true);
    setError('');
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          email, 
          message,
          subject: "Une question ? Besoin d'en savoir plus ?"
        }),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setEmail('');
        setMessage('');
        setTimeout(() => setIsSubmitted(false), 3000);
      } else {
        const data = await response.json();
        setError(data.message || "Erreur lors de l'envoi du message");
      }
    } catch {
      setError("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-black-500/10 to-black-500/10 border-y border-pink-500/30">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >

        </motion.div>

        {/* Contact Form */}
        {!isSubmitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Une question ? Besoin d'en savoir plus ?
              </h3>
              <p className="text-slate-300">
                Contactez-nous et nous vous répondrons dans les plus brefs délais
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre adresse email"
                className="bg-slate-900 border border-slate-700 text-white px-6 py-4 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none placeholder-slate-500"
                aria-label="Votre adresse email"
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message..."
                rows={4}
                className="bg-slate-900 border border-slate-700 text-white px-6 py-4 rounded-xl focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none placeholder-slate-500 resize-none"
                aria-label="Votre message"
              />
              <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-8 py-4 rounded-xl font-bold hover:from-pink-600 hover:to-blue-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1 disabled:opacity-70 flex items-center justify-center gap-2 min-w-[160px] self-end"
                aria-label="Envoyer votre message"
              >
                {isLoading ? (
                  'Envoi...'
                ) : (
                  <>
                    <Mail className="w-5 h-5" />
                    <span>Envoyer</span>
                  </>
                )}
              </button>
            </div>
            {error && <p className="text-pink-400 text-center text-sm" role="alert">{error}</p>}
            
            <p className="text-slate-400 text-sm text-center">
              Nous vous répondrons dans les plus brefs délais.
            </p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-gradient-to-r from-pink-500/20 to-blue-500/20 border border-pink-500/30 text-white px-8 py-6 rounded-2xl text-center max-w-md mx-auto"
            role="alert"
          >
            <CheckCircle className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Message envoyé !</h3>
            <p className="text-slate-300">
              Nous avons bien reçu votre message et vous répondrons très rapidement.
            </p>
          </motion.div>
        )}

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-6">Suivez-nous pour plus de contenu sur l'apprentissage de l'arabe</p>
          
          <nav className="flex justify-center gap-4" aria-label="Réseaux sociaux">
            <Link
              href="https://t.me/ArabeImportance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Rejoindre notre canal Telegram"
            >
              <Send className="w-5 h-5" />
              Telegram
            </Link>
            <Link
              href="https://instagram.com/arabeimportance"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-blue-500 hover:from-pink-600 hover:to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              aria-label="Suivre sur Instagram"
            >
              <Instagram className="w-5 h-5" />
              Instagram
            </Link>
          </nav>
        </motion.div>
      </div>
    </section>
  );
}