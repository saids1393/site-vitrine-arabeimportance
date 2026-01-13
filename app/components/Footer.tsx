'use client';
import Link from 'next/link';
import { Send, Instagram, Twitter, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-orange-50 to-orange-100 rounded-t-3xl">
      <div className="max-w-7xl mx-auto px-4 md:px-16 lg:px-24 xl:px-32 pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-gray-900">
                Arabe<span className="text-orange-500">Importance</span>
              </span>
            </Link>
            <p className="text-gray-600 mb-6 max-w-md leading-relaxed">
              Apprenez l'arabe avec la methode ERPR. Une approche simple, progressive
              et efficace pour maitriser la lecture et l'ecriture en arabe.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://t.me/ArabeImportance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 hover:shadow-md transition-all"
              >
                <Send className="w-5 h-5" />
              </Link>
              <Link
                href="https://instagram.com/arabeimportance"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 hover:shadow-md transition-all"
              >
                <Instagram className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 hover:shadow-md transition-all"
              >
                <Twitter className="w-5 h-5" />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-orange-500 hover:shadow-md transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Navigation</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/#features" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Fonctionnalites
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Temoignages
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Tarifs
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/cgv" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Conditions generales
                </Link>
              </li>
              <li>
                <Link href="/legal" className="text-gray-600 hover:text-orange-500 transition-colors">
                  Mentions legales
                </Link>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-orange-200"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              2025 Arabe Importance. Tous droits reserves.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-gray-500 text-sm">Besoin d'aide ?</span>
              <a
                href="mailto:contact@arabeimportance.fr"
                className="text-orange-500 hover:text-orange-600 font-medium text-sm"
              >
                Contactez-nous
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
