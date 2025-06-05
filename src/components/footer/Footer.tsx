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
    <footer className="bg-gray-900 text-white">
      {/* Section principale */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo et description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-wood-dark to-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <span className="font-heading font-bold text-2xl">Vanden Menuiserie</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Artisan menuisier dans le Var depuis 1985. Spécialisé dans la création de menuiseries sur mesure d&apos;exception.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/vandenmenuiserie" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="https://instagram.com/vandenmenuiserie" 
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="font-heading font-bold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="font-heading font-bold text-lg mb-6">Nos Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link 
                    href={service.href}
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="font-heading font-bold text-lg mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="tel:0762144340"
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    07 62 14 43 40
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <a 
                    href="mailto:contact@vanden-menuiserie.fr"
                    className="text-gray-300 hover:text-gold transition-colors"
                  >
                    contact@vanden-menuiserie.fr
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-300">
                    Var (83) - Toulon, Hyères, Fréjus
                  </span>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                <div>
                  <span className="text-gray-300">
                    Lun-Ven : 8h-18h
                  </span>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Zones d'intervention */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <h3 className="font-heading font-bold text-lg mb-6 text-center">Zones d&apos;intervention</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {zones.map((zone) => (
              <Link
                key={zone.name}
                href={zone.href}
                className="px-4 py-2 bg-gray-800 rounded-full text-sm text-gray-300 hover:bg-gold hover:text-white transition-all"
              >
                {zone.name}
              </Link>
            ))}
          </div>
        </motion.div>

        {/* Ressources utiles avec LinkPreview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 pt-8 border-t border-gray-800"
        >
          <h3 className="font-heading font-bold text-lg mb-6 text-center">Ressources & Partenaires</h3>
          <div className="text-gray-300 text-center max-w-3xl mx-auto">
            Nous travaillons avec les meilleurs fournisseurs de matériaux nobles. Découvrez{" "}
            <LinkPreview url="https://www.bois.com" className="font-bold text-gold">
              Bois.com
            </LinkPreview>{" "}
            pour des essences de qualité et{" "}
            <LinkPreview url="https://www.lapeyre.fr" className="font-bold text-gold">
              Lapeyre
            </LinkPreview>{" "}
            pour l'inspiration déco. Notre certification{" "}
            <LinkPreview url="https://www.qualibat.com" className="font-bold text-gold">
              Qualibat
            </LinkPreview>{" "}
            garantit notre excellence.
          </div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-gray-400 text-sm mb-4 md:mb-0"
            >
              © {currentYear} Vanden Menuiserie. Tous droits réservés.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex space-x-6 text-sm"
            >
              <Link href="/mentions-legales" className="text-gray-400 hover:text-gold transition-colors">
                Mentions légales
              </Link>
              <Link href="/politique-confidentialite" className="text-gray-400 hover:text-gold transition-colors">
                Confidentialité
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}