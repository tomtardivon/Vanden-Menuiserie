"use client";
import { Compare } from "@/components/ui/aceternity/compare";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Palette, Hammer } from "lucide-react";

export const BeforeAfterSection = () => {
  const transformations = [
    {
      id: 1,
      title: "Transformation Cuisine Complète",
      description: "Rénovation d'une cuisine des années 80 en espace moderne et fonctionnel",
      before: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&auto=format&q=80",
      after: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&auto=format&q=80",
      location: "Maison familiale, Toulon",
      duration: "3 semaines",
      highlights: [
        "Optimisation de l'espace",
        "Matériaux nobles",
        "Éclairage LED intégré",
        "Électroménager encastré"
      ]
    },
    {
      id: 2,
      title: "Rénovation Escalier Ancien",
      description: "Restauration d'un escalier en bois avec création de rangements sous l'escalier",
      before: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=600&auto=format&q=80",
      after: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=500&h=600&auto=format&q=80",
      location: "Maison de ville, Hyères",
      duration: "2 semaines",
      highlights: [
        "Restauration des marches",
        "Création de rangements",
        "Finition cire traditionnelle",
        "Garde-corps sur mesure"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-gray-600 font-medium mb-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Avant / Après
          </motion.span>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            La magie de la
            <span className="block text-gray-600">transformation</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez comment nous transformons vos espaces existants en lieux d'exception 
            grâce à notre savoir-faire artisanal et notre vision créative.
          </p>
        </motion.div>

        <div className="space-y-32">
          {transformations.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              {/* Compare Component */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <Compare
                  firstImage={project.before}
                  secondImage={project.after}
                  className="h-[500px] md:h-[600px] w-full"
                  slideMode="hover"
                  showHandlebar={true}
                  autoplay={true}
                  autoplayDuration={6000}
                />
              </div>
              
              {/* Content */}
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}>
                <div>
                  <div className="flex items-center gap-2 text-gray-600 mb-3">
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-gray-900 mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Points forts */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gray-900 flex items-center gap-2">
                    <Palette className="w-5 h-5 text-gray-600" />
                    Points forts de la transformation
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 text-gray-600"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + idx * 0.1 }}
                      >
                        <div className="w-2 h-2 bg-gray-900 rounded-full flex-shrink-0"></div>
                        <span className="text-sm">{highlight}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Durée */}
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2 text-gray-900">
                    <Clock className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Durée : {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-900">
                    <Hammer className="w-5 h-5 text-gray-600" />
                    <span className="font-medium">Rénovation complète</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="inline-flex items-center gap-3 bg-black hover:bg-gray-900 text-white px-6 py-3 rounded-full font-semibold transition-all group"
                  whileHover={{ scale: 1.05, x: 5 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Voir le projet complet
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA général */}
        <motion.div
          className="text-center mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-heading font-bold text-gray-900 mb-6">
              Votre projet de rénovation vous attend
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Que vous souhaitiez rénover entièrement un espace ou simplement lui donner un nouveau souffle, 
              nous vous accompagnons de la conception à la réalisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Devis gratuit rénovation
              </motion.button>
              <motion.button
                className="border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Voir plus de transformations
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};