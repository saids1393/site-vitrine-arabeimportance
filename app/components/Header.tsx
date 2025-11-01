'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logoUrl from '../assets/img/logo-arabe-importance-white.png';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

interface MenuItem {
  label: string;
  sectionId?: string;
  href?: string;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAbonnementsPage = pathname === '/abonnements';

  const menuItems: MenuItem[] = isAbonnementsPage
    ? [
      { label: 'Accueil', href: '/' },

    ]
    : [
      { label: 'Accueil', sectionId: 'accueil' },
      { label: 'Méthode', sectionId: 'méthode' },
      { label: 'Contenu', sectionId: 'contenu' },
      { label: 'Tarif', sectionId: 'tarif' },
      { label: 'Contact', sectionId: 'contact' },


    ];

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white/5 backdrop-blur-md z-50 border-b border-white/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            {/* Logo */}
            <Link href="/" className="flex items-center cursor-pointer">
              <Image
                src={logoUrl}
                alt="Logo"
                width={130}
                height={30}
                className="object-contain"
              />
            </Link>
          </motion.div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {menuItems.map((item, index) => (
              item.href ? (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="text-white hover:text-blue-300 transition-colors font-medium cursor-pointer text-lg"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ) : (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => scrollToSection(item.sectionId!)}
                  className="text-white hover:text-blue-300 transition-colors font-medium cursor-pointer text-lg"
                >
                  {item.label}
                </motion.button>
              )
            ))}
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://methode-erpr-by-arabeimportance.vercel.app/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-pink-500 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-pink-600 hover:to-blue-600 transition-all shadow-lg"
            >
              S'inscrire
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="https://methode-erpr-by-arabeimportance.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-slate-800 text-white px-6 py-2 rounded-lg font-semibold hover:bg-slate-700 transition-all border border-slate-700"
            >
              Connexion
            </motion.a>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} className="text-white" /> : <Menu size={24} className="text-white" />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-2 flex flex-col items-center">
            {menuItems.map((item) => (
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full max-w-xs text-center px-4 py-3 text-white hover:text-blue-300 hover:bg-white/10 rounded-md transition-colors cursor-pointer text-lg"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.sectionId!)}
                  className="w-full max-w-xs text-center px-4 py-3 text-white hover:text-blue-300 hover:bg-white/10 rounded-md transition-colors cursor-pointer text-lg"
                >
                  {item.label}
                </button>
              )
            ))}
            <a
              href="https://methode-erpr-by-arabeimportance.vercel.app/checkout"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full max-w-xs text-center px-4 py-3 bg-gradient-to-r from-pink-500 to-blue-500 text-white rounded-md font-semibold hover:from-pink-600 hover:to-blue-600 transition-all"
            >
              S'inscrire
            </a>
            <a
              href="https://methode-erpr-by-arabeimportance.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className="w-full max-w-xs text-center px-4 py-3 bg-slate-800 text-white rounded-md font-semibold hover:bg-slate-700 transition-all border border-slate-700"
            >
              Connexion
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
}