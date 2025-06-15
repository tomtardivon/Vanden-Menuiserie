"use client";

import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-24 bg-bleu-marine relative overflow-hidden">
      {/* Pattern de fond */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-white"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
            Prêt à concrétiser votre projet ?
          </h2>
          <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
            Transformons ensemble vos idées en réalisations d'exception.
            Contactez-nous pour une consultation gratuite.
          </p>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-beige-moderne text-bleu-marine px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3"
            >
              Demander un devis gratuit
              <ArrowRight className="w-5 h-5" />
            </motion.a>

            <motion.a
              href="tel:0494123456"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-beige-moderne hover:text-bleu-marine transition-all inline-flex items-center gap-3"
            >
              <Phone className="w-5 h-5" />
              07 62 14 43 40
            </motion.a>
          </div>

          {/*           <div className="grid md:grid-cols-3 gap-8 mt-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-beige-moderne/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📐</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Étude personnalisée</h3>
              <p className="text-white/80">Conseils d'expert adaptés à vos besoins</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-beige-moderne/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Plans 3D offerts</h3>
              <p className="text-white/80">Visualisez votre projet avant réalisation</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-beige-moderne/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-bold text-xl mb-2">Garantie 10 ans</h3>
              <p className="text-white/80">Qualité et durabilité assurées</p>
            </motion.div>
          </div> */}
        </motion.div>
      </div>
    </section>
  );
};
