"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function TransformationsSection() {
  return (
    <section className="py-24 bg-blanc-casse">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-6">
            Transformations
          </h2>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez comment nous transformons vos espaces avec créativité et expertise
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Images grid */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-[280px] rounded-2xl overflow-hidden group">
                <Image
                  src="/projet/porte-garage-renovation/porte-garage-avant.jpg"
                  alt="Avant rénovation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Avant
                </div>
              </div>
              <div className="relative h-[200px] rounded-2xl overflow-hidden group">
                <Image
                  src="/projet/dressing-portes-coulissantes/dressing-coulissant-ferme.jpg"
                  alt="Dressing fermé"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-[200px] rounded-2xl overflow-hidden group">
                <Image
                  src="/projet/porte-garage-renovation/porte-garage-apres.jpg"
                  alt="Après rénovation"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Après
                </div>
              </div>
              <div className="relative h-[280px] rounded-2xl overflow-hidden group">
                <Image
                  src="/projet/dressing-portes-coulissantes/dressing-coulissant-ouvert.jpg"
                  alt="Dressing ouvert"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </motion.div>
          
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-heading font-bold text-bleu-marine mb-6">
              Chaque projet, une métamorphose
            </h3>
            
            <p className="text-bleu-marine/70 text-lg mb-8 leading-relaxed">
              Nous redonnons vie à vos espaces en respectant votre style de vie. 
              De la conception à la finition, chaque détail est pensé pour vous offrir 
              un résultat qui dépasse vos attentes.
            </p>
            
            <div className="space-y-4 mb-8">
              {[
                "Étude personnalisée de votre espace",
                "Conception 3D pour visualiser le résultat",
                "Sélection des matériaux nobles",
                "Réalisation avec finitions impeccables"
              ].map((step, index) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-brun-bois rounded-full flex-shrink-0"></div>
                  <span className="text-bleu-marine/80">{step}</span>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="/realisations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-brun-bois text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Voir nos transformations
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}