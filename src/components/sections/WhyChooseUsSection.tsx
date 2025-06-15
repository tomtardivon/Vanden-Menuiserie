"use client";

import { motion } from "framer-motion";
import { Award, Clock, Users, Wrench, Star, CheckCircle } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "45 ans d'expertise",
    description: "Un savoir-faire artisanal transmis de génération en génération depuis 1978",
    stats: "150+ projets réalisés"
  },
  {
    icon: Wrench,
    title: "Sur-mesure exclusif",
    description: "Chaque création est unique, conçue spécialement pour vos besoins et votre espace",
    stats: "100% personnalisé"
  },
  {
    icon: Clock,
    title: "Respect des délais",
    description: "Engagement ferme sur les délais de livraison avec un suivi rigoureux du planning",
    stats: "Livraison garantie"
  },
  {
    icon: Users,
    title: "Satisfaction client",
    description: "Un accompagnement personnalisé du projet initial jusqu'à la livraison finale",
    stats: "100% de clients satisfaits"
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-brun-bois font-medium mb-3 lg:mb-4 text-base lg:text-lg tracking-wider uppercase">
            Excellence
          </span>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-bleu-marine mb-4 lg:mb-6 leading-tight">
            Pourquoi nous
            <span className="block text-brun-bois">
              choisir ?
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez les valeurs qui font de Vanden Menuiserie votre partenaire de confiance pour tous vos projets
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            
            return (
              <motion.div
                key={feature.title}
                className="group relative bg-gradient-to-br from-gris-perle/30 to-white p-8 lg:p-10 rounded-3xl border border-gris-perle/50 hover:border-brun-bois/30 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
              >
                <div className="flex items-start gap-6">
                  <motion.div
                    className="flex-shrink-0 w-16 h-16 lg:w-20 lg:h-20 bg-brun-bois rounded-2xl flex items-center justify-center shadow-lg"
                    whileHover={{ 
                      scale: 1.1,
                      rotate: 5
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                  </motion.div>

                  <div className="flex-1">
                    <motion.h3
                      className="text-xl lg:text-2xl font-heading font-bold text-bleu-marine mb-3"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {feature.title}
                    </motion.h3>
                    
                    <p className="text-bleu-marine/70 leading-relaxed mb-4">
                      {feature.description}
                    </p>

                    <motion.div
                      className="inline-flex items-center gap-2 px-4 py-2 bg-beige-moderne rounded-full"
                      initial={{ opacity: 0.8 }}
                      whileHover={{ 
                        opacity: 1,
                        scale: 1.05
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <CheckCircle className="w-4 h-4 text-brun-bois" />
                      <span className="text-sm font-medium text-bleu-marine">
                        {feature.stats}
                      </span>
                    </motion.div>
                  </div>
                </div>

                <motion.div
                  className="absolute inset-0 bg-beige-moderne/50 rounded-3xl"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-gradient-to-r from-gris-perle/50 to-white p-8 lg:p-12 rounded-3xl border border-gris-perle/50">
            <motion.div
              className="flex items-center justify-center gap-2 mb-4"
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, rotate: -45 }}
                  whileInView={{ opacity: 1, rotate: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Star className="w-6 h-6 lg:w-8 lg:h-8 fill-gold text-gold" />
                </motion.div>
              ))}
            </motion.div>
            
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-bleu-marine mb-3">
              Une confiance établie
            </h3>
            
            <p className="text-bleu-marine/70 text-lg max-w-2xl mx-auto">
              Rejoignez nos nombreux clients satisfaits qui nous font confiance pour leurs projets de menuiserie sur mesure dans le Var
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};