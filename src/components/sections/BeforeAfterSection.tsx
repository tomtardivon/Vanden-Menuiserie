"use client";
import { Compare } from "@/components/ui/aceternity/compare";
import { motion } from "framer-motion";
import { ArrowRight, Clock, Palette, Hammer } from "lucide-react";

export const BeforeAfterSection = () => {
  const transformations = [
    {
      id: 1,
      title: "Cuisine Design Sur Mesure",
      description: "Transformation complète d'une cuisine en espace design moderne avec finitions haut de gamme",
      before: "/projet/cuisine4/cuisine-design-details.jpg",
      after: "/projet/cuisine4/cuisine-design-vue.jpg",
      location: "Villa contemporaine, Var",
      duration: "4 semaines",
      highlights: [
        "Design épuré et fonctionnel",
        "Finitions artisanales premium",
        "Intégration parfaite des équipements",
        "Matériaux nobles et durables"
      ]
    },
    {
      id: 2,
      title: "Rénovation Porte de Garage",
      description: "Transformation d'une ancienne porte de garage en entrée moderne et sécurisée",
      before: "/projet/porte-garage-renovation/porte-garage-avant.jpg",
      after: "/projet/porte-garage-renovation/porte-garage-apres.jpg",
      location: "Maison individuelle, Draguignan",
      duration: "1 semaine",
      highlights: [
        "Sécurisation renforcée",
        "Isolation thermique améliorée",
        "Design contemporain",
        "Motorisation automatique"
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
            className="inline-block text-bleu-marine/70 font-medium mb-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Avant / Après
          </motion.span>

          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-bleu-marine mb-6">
            La magie de la
            <span className="block text-bleu-marine/70">transformation</span>
          </h2>

          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez comment nous transformons vos espaces existants en lieux d'exception
            grâce à notre savoir-faire artisanal et notre vision créative.
          </p>
        </motion.div>

        <div className="space-y-32">
          {transformations.map((project, index) => (
            <motion.div
              key={project.id}
              className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
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
                  <div className="flex items-center gap-2 text-bleu-marine/70 mb-3">
                    <span className="text-sm font-medium">{project.location}</span>
                  </div>
                  <h3 className="text-3xl lg:text-4xl font-heading font-bold text-bleu-marine mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-bleu-marine/70 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Points forts */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-bleu-marine flex items-center gap-2">
                    <Palette className="w-5 h-5 text-bleu-marine/70" />
                    Points forts de la transformation
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {project.highlights.map((highlight, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center gap-3 text-bleu-marine/70"
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
                  <div className="flex items-center gap-2 text-bleu-marine">
                    <Clock className="w-5 h-5 text-bleu-marine/70" />
                    <span className="font-medium">Durée : {project.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-bleu-marine">
                    <Hammer className="w-5 h-5 text-bleu-marine/70" />
                    <span className="font-medium">Rénovation complète</span>
                  </div>
                </div>

                {/* CTA */}
                <motion.button
                  className="inline-flex items-center gap-3 bg-bleu-marine hover:bg-brun-bois text-white px-6 py-3 rounded-full font-semibold transition-all group"
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
          <div className="bg-gris-perle rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl font-heading font-bold text-bleu-marine mb-6">
              Votre projet de rénovation vous attend
            </h3>
            <p className="text-lg text-bleu-marine/70 mb-8 max-w-2xl mx-auto">
              Que vous souhaitiez rénover entièrement un espace ou simplement lui donner un nouveau souffle,
              nous vous accompagnons de la conception à la réalisation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-bleu-marine hover:bg-brun-bois text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Devis gratuit rénovation
              </motion.button>
              <motion.button
                className="border-2 border-bleu-marine text-bleu-marine hover:bg-bleu-marine hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-all"
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