"use client";

import { VelocityScroll } from "@/components/ui/scroll-based-velocity";
import { motion } from "framer-motion";

export function VelocityScrollSection() {
  return (
    <section className="py-24 bg-beige-moderne overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-16">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-bleu-marine mb-4">
            Excellence & Tradition
          </h2>
          <p className="text-xl text-bleu-marine/70">
            Plus de 35 ans d&apos;expertise artisanale
          </p>
        </motion.div>
      </div>

      <VelocityScroll
        defaultVelocity={1}
        numRows={2}
        className=""
      >
        MENUISERIE D&apos;ART • TRADITION • EXCELLENCE • SUR MESURE • CRÉATION UNIQUE • SAVOIR-FAIRE • BOIS NOBLE • ARTISANAT LOCAL •

      </VelocityScroll>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-beige-moderne z-10"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-beige-moderne z-10"></div>
        
{/*         <VelocityScroll
          defaultVelocity={2}
          numRows={1}
        >
          FENÊTRES • PORTES • ESCALIERS • CUISINES • DRESSING • PLACARDS •
        </VelocityScroll> */}
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-4xl font-bold text-bleu-marine mb-2">500+</h3>
            <p className="text-bleu-marine/70">Projets réalisés</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-4xl font-bold text-bleu-marine mb-2">35</h3>
            <p className="text-bleu-marine/70">Années d'expérience</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-4xl font-bold text-bleu-marine mb-2">100%</h3>
            <p className="text-bleu-marine/70">Clients satisfaits</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="text-4xl font-bold text-bleu-marine mb-2">10</h3>
            <p className="text-bleu-marine/70">Artisans qualifiés</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}