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
        { label: 'Avancée', href: '/abonnements' }
      ]
    : [
        { label: 'Accueil', sectionId: 'accueil' },
        { label: 'Méthode', sectionId: 'méthode' },
        { label: 'Contenu', sectionId: 'contenu' },
        { label: "S'inscrire", sectionId: 'contact' },
        { label: 'Avancée', href: '/abonnements' }
      ];

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-md z-50 border-b border-gray-700 shadow-sm">
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
          <nav className="hidden md:flex space-x-8">
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
          className="md:hidden bg-gray-800 border-t border-gray-700"
        >
          <div className="px-4 py-4 space-y-1 flex flex-col items-center">
            {menuItems.map((item) => (
              item.href ? (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full max-w-xs text-center px-4 py-3 text-white hover:text-blue-300 hover:bg-gray-700 rounded-md transition-colors cursor-pointer text-lg"
                >
                  {item.label}
                </Link>
              ) : (
                <button
                  key={item.label}
                  onClick={() => handleMenuClick(item.sectionId!)}
                  className="w-full max-w-xs text-center px-4 py-3 text-white hover:text-blue-300 hover:bg-gray-700 rounded-md transition-colors cursor-pointer text-lg"
                >
                  {item.label}
                </button>
              )
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}