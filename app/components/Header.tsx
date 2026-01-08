'use client';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isAbonnementsPage = pathname === '/abonnements';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems: MenuItem[] = isAbonnementsPage
    ? [{ label: 'Accueil', href: '/' }]
    : [
        { label: 'Accueil', sectionId: 'accueil' },
        { label: 'Fonctionnalites', sectionId: 'features' },
        { label: 'Temoignages', sectionId: 'testimonials' },
        { label: 'Tarifs', sectionId: 'pricing' },
      ];

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32">
        <div className="flex justify-between items-center h-16 md:h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center cursor-pointer">
              <span className="text-xl md:text-2xl font-bold text-gray-900">
                Arabe<span className="text-orange-500">Importance</span>
              </span>
            </Link>
          </motion.div>

          <nav className="hidden md:flex items-center gap-8">
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
                    className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
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
                  className="text-gray-600 hover:text-orange-500 transition-colors font-medium"
                >
                  {item.label}
                </motion.button>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              href="https://methode-erpr-by-arabeimportance.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-orange-500 transition-colors font-medium px-4 py-2"
            >
              Se connecter
            </motion.a>
            <motion.a
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Commencer
            </motion.a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X size={24} className="text-gray-900" />
            ) : (
              <Menu size={24} className="text-gray-900" />
            )}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-white border-t border-gray-100"
        >
          <div className="px-4 py-4 space-y-2 flex flex-col">
            {menuItems.map((item) => (
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.sectionId!)}
                  className="px-4 py-3 text-left text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
                >
                  {item.label}
                </button>
              )
            ))}
            <div className="pt-4 border-t border-gray-100 space-y-2">
              <a
                href="https://methode-erpr-by-arabeimportance.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-gray-700 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors font-medium"
              >
                Se connecter
              </a>
              <a
                href="https://methode-erpr-by-arabeimportance.vercel.app/signup-free"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-full font-semibold text-center"
              >
                Commencer
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
