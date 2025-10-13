import Link from 'next/link';
import { Send, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-5 border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-blue-200 text-lg mb-4 md:mb-0">
            &copy; 2025 <span className="text-white font-medium">Arabe importance</span>. Tous droits réservés.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6">
            {/* Liens légaux */}
            <div className="flex space-x-4">
              <Link 
                href="/cgv" 
                className="text-blue-200 hover:text-white transition-colors text-sm"
              >
                Conditions générales
              </Link>
              <Link 
                href="/legal" 
                className="text-blue-200 hover:text-white transition-colors text-sm"
              >
                Mentions légales
              </Link>
            </div>
            
            {/* Séparateur visuel */}
            <div className="hidden sm:block h-4 w-px bg-gray-600"></div>
            
            {/* Liens sociaux */}
            <div className="flex space-x-4">
              <Link href="https://t.me/ArabeImportance" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Send className="w-5 h-5" />
              </Link>
              <Link href="https://instagram.com/arabeimportance" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}