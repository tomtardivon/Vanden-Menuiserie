"use client";

import { TextReveal } from "@/components/ui/text-reveal";
import { motion } from "framer-motion";

export function TextRevealSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-lg text-gray-600 font-medium">Notre Vision</span>
        </motion.div>
      </div>

      <TextReveal className="font-heading">
        Nous transformons le bois en œuvres d'art fonctionnelles qui subliment votre quotidien
      </TextReveal>

      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🌳</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Matériaux Nobles</h3>
            <p className="text-gray-600">
              Sélection rigoureuse des essences de bois pour garantir durabilité et esthétique
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Finitions Parfaites</h3>
            <p className="text-gray-600">
              Attention méticuleuse aux détails pour des réalisations d'exception
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏠</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Solutions Sur Mesure</h3>
            <p className="text-gray-600">
              Chaque projet est unique et adapté à vos besoins spécifiques
            </p>
          </motion.div>
        </div>
      </div>

      <TextReveal className="font-heading">
        Chaque pièce raconte une histoire d'excellence artisanale et de passion du métier
      </TextReveal>
      
      <div className="max-w-4xl mx-auto px-4 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-3xl p-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Prêt à donner vie à vos projets ?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Discutons ensemble de vos idées et créons quelque chose d'exceptionnel
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-shadow"
          >
            Demander un devis gratuit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}