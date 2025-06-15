"use client";

import { motion } from "framer-motion";
import { Leaf, Shield, Award, Sparkles, TreePine, Hammer } from "lucide-react";
import Image from "next/image";

const materials = [
  {
    name: "Chêne massif",
    description: "Le bois noble par excellence, résistant et intemporel",
    properties: ["Durabilité exceptionnelle", "Grain naturel unique", "Patine avec le temps"],
    origin: "Forêts françaises certifiées",
    icon: TreePine,
    color: "from-amber-600 to-yellow-700"
  },
  {
    name: "Hêtre premium",
    description: "Bois clair et homogène, idéal pour les finitions modernes",
    properties: ["Surface lisse", "Facilité d'entretien", "Stabilité dimensionnelle"],
    origin: "Forêts européennes",
    icon: Leaf,
    color: "from-emerald-600 to-green-700"
  },
  {
    name: "Noyer français",
    description: "Essence précieuse aux veines chocolat exceptionnelles",
    properties: ["Veinage unique", "Toucher soyeux", "Prestige et élégance"],
    origin: "Périgord et Lot",
    icon: Award,
    color: "from-amber-800 to-orange-900"
  },
  {
    name: "MDF haute qualité",
    description: "Support technique pour laquages et placages haut de gamme",
    properties: ["Surface parfaite", "Stabilité optimale", "Finitions premium"],
    origin: "Fabrication européenne",
    icon: Shield,
    color: "from-slate-600 to-gray-700"
  }
];

const certifications = [
  {
    name: "PEFC",
    description: "Gestion durable des forêts",
    icon: TreePine
  },
  {
    name: "FSC",
    description: "Forêts responsables",
    icon: Leaf
  },
  {
    name: "CE",
    description: "Conformité européenne",
    icon: Shield
  },
  {
    name: "Qualité FR",
    description: "Savoir-faire français",
    icon: Award
  }
];

export const MaterialsSection = () => {
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
            Matériaux
          </span>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-bleu-marine mb-4 lg:mb-6 leading-tight">
            L'excellence du
            <span className="block text-brun-bois">
              bois noble
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Nous sélectionnons rigoureusement nos essences pour vous offrir des créations durables et authentiques
          </p>
        </motion.div>

        {/* Grille des matériaux */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {materials.map((material, index) => {
            const Icon = material.icon;
            
            return (
              <motion.div
                key={material.name}
                className="group relative bg-gradient-to-br from-gris-perle/30 to-white rounded-3xl p-8 lg:p-10 border border-gris-perle/50 hover:border-brun-bois/30 transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -8 }}
              >
                {/* Pattern de fond */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-brun-bois/10 to-transparent transform rotate-12 scale-150" />
                </div>

                <div className="relative z-10">
                  {/* Header avec icône */}
                  <div className="flex items-start justify-between mb-6">
                    <motion.div
                      className={`w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br ${material.color} rounded-2xl flex items-center justify-center shadow-lg`}
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </motion.div>

                    <motion.div
                      className="px-3 py-1 bg-beige-moderne rounded-full"
                      whileHover={{ scale: 1.05 }}
                    >
                      <span className="text-xs font-medium text-brun-bois">
                        Premium
                      </span>
                    </motion.div>
                  </div>

                  {/* Nom et description */}
                  <motion.h3
                    className="text-xl lg:text-2xl font-heading font-bold text-bleu-marine mb-3"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {material.name}
                  </motion.h3>
                  
                  <p className="text-bleu-marine/70 leading-relaxed mb-6">
                    {material.description}
                  </p>

                  {/* Propriétés */}
                  <div className="space-y-3 mb-6">
                    {material.properties.map((property, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.15 + idx * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gradient-to-r from-brun-bois to-gold rounded-full flex-shrink-0" />
                        <span className="text-sm text-bleu-marine/70">
                          {property}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Origine */}
                  <div className="flex items-center gap-2 text-brun-bois">
                    <Sparkles className="w-4 h-4" />
                    <span className="text-sm font-medium">
                      Origine : {material.origin}
                    </span>
                  </div>
                </div>

                {/* Hover effect */}
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

        {/* Section certifications et engagements */}
        <motion.div
          className="bg-gradient-to-br from-gris-perle/50 to-white rounded-3xl p-8 lg:p-12 border border-gris-perle/50"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="text-center mb-8 lg:mb-12">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-bleu-marine mb-4">
              Nos engagements qualité
            </h3>
            <p className="text-bleu-marine/70 text-lg max-w-2xl mx-auto">
              Nous privilégions des matériaux certifiés et traçables pour garantir durabilité et respect de l'environnement
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {certifications.map((cert, index) => {
              const Icon = cert.icon;
              
              return (
                <motion.div
                  key={cert.name}
                  className="text-center group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <motion.div
                    className="w-16 h-16 lg:w-20 lg:h-20 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-gris-perle/30 mx-auto mb-4 group-hover:border-brun-bois/30 transition-colors"
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 10px 25px rgba(0,0,0,0.15)"
                    }}
                  >
                    <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-brun-bois" />
                  </motion.div>
                  
                  <h4 className="font-heading font-bold text-bleu-marine mb-1">
                    {cert.name}
                  </h4>
                  
                  <p className="text-sm text-bleu-marine/70">
                    {cert.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Message final */}
          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-white rounded-full shadow-md border border-gris-perle/30">
              <Hammer className="w-5 h-5 text-brun-bois" />
              <span className="text-bleu-marine font-medium">
                45 ans d'expertise dans la sélection des meilleurs bois
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};