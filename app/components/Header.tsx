'use client';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import logoImage from '@/app/assets/img/logo-arabe-importance-blue.png';

interface HeaderProps {
  scrollToSection: (sectionId: string) => void;
}

interface MenuItem {
  label: string;
  sectionId?: string;
  href?: string;
}

export default function Header({ scrollToSection }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isAbonnementsPage = pathname === '/abonnements';

  const menuItems: MenuItem[] = isAbonnementsPage
    ? [{ label: 'Accueil', href: '/' }]
    : [
        { label: 'Accueil', sectionId: 'accueil' },
        { label: 'Fonctionnalités', sectionId: 'features' },
        { label: 'Témoignages', sectionId: 'testimonials' },
        { label: 'Tarifs', sectionId: 'pricing' },
      ];

  const handleMenuClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Header Desktop */}
      <header className="hidden md:block fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
        <div className="section-container">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <Image
                src={logoImage}
                alt="ArabeImportance"
                width={300}
                height={100}
                className="h-14 w-auto"
              />
            </Link>

            <nav className="flex items-center gap-8">
              {menuItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => scrollToSection(item.sectionId!)}
                    className="text-gray-600 hover:text-gray-900 font-medium transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </nav>

            <a
              href="https://methode-erpr-by-arabeimportance.vercel.app/checkout"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-2.5 rounded-full font-semibold transition-colors"
            >
              Commencer
            </a>
          </div>
        </div>
      </header>

      {/* Header Mobile */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-50 px-4 pt-4">
        <div className="relative rounded-xl border transition-colors duration-300 bg-sky-500/60 backdrop-blur-xl border-white/10 px-4 py-3 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image
              src={logoImage}
              alt="ArabeImportance"
              width={200}
              height={60}
              className="h-8 w-auto brightness-0 invert"
            />
          </Link>

          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 rounded-xl transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="relative rounded-xl border transition-colors duration-300 bg-sky-500/60 backdrop-blur-xl border-white/10 mt-2 py-4 px-4">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                item.href ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-white/80 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-xl transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.label}
                    onClick={() => handleMenuClick(item.sectionId!)}
                    className="text-left text-white/80 hover:text-white hover:bg-white/10 font-medium py-3 px-4 rounded-xl transition-colors cursor-pointer"
                  >
                    {item.label}
                  </button>
                )
              ))}
              <a
                href="https://methode-erpr-by-arabeimportance.vercel.app/checkout"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-sky-500 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold text-center mt-2 transition-colors"
              >
                Commencer
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
