"use client";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import Link from "next/link";
import { LinkPreview } from "@/components/ui/link-preview";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    { name: "Cuisines sur mesure", href: "/services" },
    { name: "Dressings & Placards", href: "/services" },
    { name: "Escaliers", href: "/services" },
    { name: "Terrasses & Pergolas", href: "/services" },
  ];

  const zones = [
    { name: "Menuisier Toulon", href: "/menuisier-toulon" },
    { name: "Menuisier Hyères", href: "/menuisier-hyeres" },
    { name: "Menuisier Fréjus", href: "/menuisier-frejus" },
  ];

  const links = [
    { name: "Accueil", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Réalisations", href: "/realisations" },
    { name: "À propos", href: "/a-propos" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-bleu-marine text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-bleu-marine/70 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">V</span>
              </div>
              <span className="font-heading font-bold text-xl">Vanden Menuiserie</span>
            </div>
            <p className="text-white/70 mb-4 text-sm">
              Artisan menuisier dans le Var.
            </p>
            <div className="flex space-x-3">
              <a 
                href="https://facebook.com/vandenmenuiserie" 
                className="w-8 h-8 bg-bleu-marine/30 rounded-full flex items-center justify-center hover:bg-brun-bois transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com/vandenmenuiserie" 
                className="w-8 h-8 bg-bleu-marine/30 rounded-full flex items-center justify-center hover:bg-brun-bois transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Navigation rapide */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-semibold text-base mb-4">Navigation</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {links.map((link) => (
                <Link 
                  key={link.name}
                  href={link.href}
                  className="text-white/70 hover:text-white transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Contact compact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-semibold text-base mb-4">Contact</h3>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-white/50" />
                <a 
                  href="tel:0762144340"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  07 62 14 43 40
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-white/50" />
                <a 
                  href="mailto:contact@vanden-menuiserie.fr"
                  className="text-white/70 hover:text-brun-bois transition-colors text-xs"
                >
                  contact@vanden-menuiserie.fr
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-white/50" />
                <span className="text-white/70 text-xs">
                  Var (83) - Toulon, Hyères, Fréjus
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-bleu-marine/50 bg-bleu-marine/90">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center text-xs">
            <p className="text-white/50 mb-2 md:mb-0">
              © {currentYear} Vanden Menuiserie. Tous droits réservés.
            </p>
            <div className="flex space-x-4">
              <Link href="/mentions-legales" className="text-white/50 hover:text-white transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-white/50 hover:text-white transition-colors">
                Confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}