import Link from 'next/link';
import { Send, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/80 text-white py-12 border-t border-pink-500/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">
            Prêt à commencer votre apprentissage ?
          </h3>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto">
            Accédez à la plateforme et inscrivez-vous dès maintenant pour bénéficier de{' '}
            <span className="text-pink-400 font-semibold">-15% de réduction</span> pendant 3 semaines !
          </p>
        </div>

        <div className="border-t border-slate-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm mb-4 md:mb-0">
              &copy; 2025 <span className="text-white font-medium">Arabe importance</span>. Tous droits réservés.
            </p>

            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
              <div className="flex space-x-4">
                <Link
                  href="/cgv"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Conditions générales
                </Link>
                <Link
                  href="/legal"
                  className="text-slate-400 hover:text-white transition-colors text-sm"
                >
                  Mentions légales
                </Link>
              </div>

              <div className="hidden sm:block h-4 w-px bg-slate-700"></div>

              <div className="flex space-x-4">
                <Link
                  href="https://t.me/ArabeImportance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-400 transition-colors"
                >
                  <Send className="w-5 h-5" />
                </Link>
                <Link
                  href="https://instagram.com/arabeimportance"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}