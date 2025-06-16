"use client";
import { motion } from "framer-motion";
import { ArrowUpRight, Phone } from "lucide-react";

export function PremiumCTASection() {
  return (
    <section className="py-24 bg-gris-perle">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-bleu-marine rounded-3xl p-12 text-center text-white overflow-hidden"
        >
          {/* Texture décorative d'arrière-plan */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(255, 255, 255, 0.1) 10px,
                  rgba(255, 255, 255, 0.1) 20px
                )`
              }}
            />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-xl">🏗️</span>
              <span className="text-sm font-medium">Menuiserie Premium</span>
            </div>

            <h3 className="text-4xl font-heading font-bold mb-4">
              Prêt à transformer votre intérieur ?
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Obtenez un devis gratuit et découvrez comment nos artisans peuvent créer 
              des meubles sur mesure qui subliment votre espace de vie.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-bleu-marine px-8 py-4 rounded-full font-bold hover:bg-beige-moderne transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <ArrowUpRight className="w-5 h-5 inline mr-2" />
                Devis gratuit
              </a>
              <a
                href="tel:+33123456789"
                className="border-2 border-white text-white hover:bg-white hover:text-bleu-marine px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <Phone className="w-5 h-5 inline mr-2" />
                Nous appeler
              </a>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm">
                © 2024 Vanden Menuiserie • Artisans du Var depuis 2022
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}