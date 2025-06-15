"use client";

import { motion } from "framer-motion";
import { MessageCircle, Lightbulb, Hammer, ArrowRight, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    subtitle: "Échange et analyse",
    description: "Nous discutons de vos besoins, visitons votre espace et analysons la faisabilité de votre projet. Un devis détaillé vous est remis sous 48h.",
    features: [
      "Visite gratuite à domicile",
      "Écoute de vos besoins",
      "Devis détaillé sous 48h"
    ],
    duration: "1-2 jours"
  },
  {
    number: "02", 
    icon: Lightbulb,
    title: "Conception",
    subtitle: "Design et planification",
    description: "Notre équipe conçoit votre projet sur mesure avec des plans 3D détaillés. Nous sélectionnons ensemble les matériaux et validons chaque détail.",
    features: [
      "Plans 3D détaillés",
      "Sélection des matériaux",
      "Validation de chaque détail"
    ],
    duration: "3-5 jours"
  },
  {
    number: "03",
    icon: Hammer,
    title: "Réalisation", 
    subtitle: "Fabrication et pose",
    description: "Fabrication en atelier avec un suivi rigoureux, puis installation chez vous par nos artisans qualifiés. Livraison dans les délais convenus.",
    features: [
      "Fabrication en atelier",
      "Installation par nos artisans",
      "Respect des délais"
    ],
    duration: "1-4 semaines"
  }
];

export const ProcessSection = () => {
  return (
    <section className="py-16 lg:py-24 bg-gris-perle">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-brun-bois font-medium mb-3 lg:mb-4 text-base lg:text-lg tracking-wider uppercase">
            Processus
          </span>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-bleu-marine mb-4 lg:mb-6 leading-tight">
            Notre méthode
            <span className="block text-brun-bois">
              éprouvée
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            De l'idée à la réalisation, découvrez les 3 étapes de notre processus pour concrétiser votre projet
          </p>
        </motion.div>

        <div className="relative">
          {/* Ligne de connexion */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-brun-bois via-gold to-brun-bois transform -translate-y-1/2 z-0" />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {steps.map((step, index) => {
              const Icon = step.icon;
              
              return (
                <motion.div
                  key={step.number}
                  className="relative group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <div className="bg-white rounded-3xl p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-500 border border-gris-perle/30 hover:border-brun-bois/30 relative overflow-hidden">
                    {/* Numéro d'étape - Background */}
                    <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-gris-perle/20 to-gris-perle/10 rounded-full flex items-center justify-center">
                      <span className="text-6xl font-heading font-bold text-gris-perle/30">
                        {step.number}
                      </span>
                    </div>

                    {/* Icône */}
                    <motion.div
                      className="w-16 h-16 lg:w-20 lg:h-20 bg-brun-bois rounded-2xl flex items-center justify-center mb-6 shadow-lg relative z-10"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="w-8 h-8 lg:w-10 lg:h-10 text-white" />
                    </motion.div>

                    {/* Numéro et titre */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-2xl font-heading font-bold text-brun-bois">
                          {step.number}
                        </span>
                        <motion.h3
                          className="text-xl lg:text-2xl font-heading font-bold text-bleu-marine"
                          whileHover={{ x: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {step.title}
                        </motion.h3>
                      </div>
                      <p className="text-brun-bois font-medium">
                        {step.subtitle}
                      </p>
                    </div>

                    {/* Description */}
                    <p className="text-bleu-marine/70 leading-relaxed mb-6">
                      {step.description}
                    </p>

                    {/* Caractéristiques */}
                    <div className="space-y-3 mb-6">
                      {step.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + idx * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-brun-bois flex-shrink-0" />
                          <span className="text-sm text-bleu-marine/70">
                            {feature}
                          </span>
                        </motion.div>
                      ))}
                    </div>

                    {/* Durée */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-gradient-to-r from-brun-bois to-gold rounded-full" />
                        <span className="text-sm font-medium text-bleu-marine">
                          Durée : {step.duration}
                        </span>
                      </div>

                      {index < steps.length - 1 && (
                        <motion.div
                          className="hidden lg:flex items-center gap-2 text-brun-bois"
                          animate={{ x: [0, 5, 0] }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        >
                          <ArrowRight className="w-5 h-5" />
                        </motion.div>
                      )}
                    </div>

                    {/* Hover effect */}
                    <motion.div
                      className="absolute inset-0 bg-beige-moderne/50 rounded-3xl"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>

                  {/* Flèche mobile */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="lg:hidden flex justify-center mt-6"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <div className="w-8 h-8 bg-brun-bois rounded-full flex items-center justify-center">
                        <ArrowRight className="w-4 h-4 text-white rotate-90" />
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <div className="bg-white p-8 lg:p-12 rounded-3xl shadow-lg border border-gris-perle/30">
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-bleu-marine mb-4">
              Prêt à démarrer votre projet ?
            </h3>
            <p className="text-bleu-marine/70 text-lg mb-6 max-w-2xl mx-auto">
              Contactez-nous dès aujourd'hui pour une consultation gratuite et commençons ensemble la réalisation de votre projet sur mesure
            </p>
            <motion.button
              className="bg-gradient-to-r from-brun-bois to-gold text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Démarrer mon projet
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};