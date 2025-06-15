"use client";

import { motion } from "framer-motion";
import { Star, MapPin, Calendar, ArrowRight, Eye, Award } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { featuredProjects } from "@/data/projects";
import Link from "next/link";

export const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  
  const projects = featuredProjects.slice(0, 6).map((project, index) => {
    const categoryLabels: Record<string, string> = {
      'cuisine': 'Cuisine',
      'dressing': 'Dressing', 
      'placard': 'Placard',
      'porte': 'Porte',
      'meuble': 'Meuble',
      'parquet': 'Parquet',
      'autre': 'Agencement'
    };

    const locations = [
      "Villa privée, Hyères",
      "Appartement, Fréjus", 
      "Maison moderne, Toulon",
      "Villa vue mer, La Seyne",
      "Maison de maître, Draguignan",
      "Villa, Saint-Tropez"
    ];

    return {
      ...project,
      category: categoryLabels[project.category] || project.category,
      location: locations[index % locations.length],
      image: project.images[0]
    };
  });

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
            Portfolio
          </span>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-bleu-marine mb-4 lg:mb-6 leading-tight">
            Nos réalisations
            <span className="block text-brun-bois">
              d'exception
            </span>
          </h2>
          
          <p className="text-lg lg:text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez quelques-unes de nos créations sur mesure qui témoignent de notre savoir-faire artisanal
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64 lg:h-80 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <motion.div
                    className="px-3 py-1 bg-white/90 backdrop-blur-md rounded-full"
                    animate={{
                      scale: hoveredProject === project.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs font-medium text-bleu-marine">{project.category}</span>
                  </motion.div>

                  {project.featured && (
                    <motion.div
                      className="w-8 h-8 bg-gold/90 backdrop-blur-md rounded-full flex items-center justify-center"
                      animate={{
                        rotate: hoveredProject === project.id ? 360 : 0
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-4 h-4 text-white" />
                    </motion.div>
                  )}
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <motion.div
                    className="flex items-center gap-2 mb-2"
                    animate={{
                      x: hoveredProject === project.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="w-4 h-4 text-white/80" />
                    <span className="text-sm text-white/80">{project.location}</span>
                  </motion.div>

                  <motion.h3
                    className="text-lg lg:text-xl font-heading font-bold text-white leading-tight"
                    animate={{
                      y: hoveredProject === project.id ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>
                </div>

                <motion.div
                  className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                  animate={{
                    scale: hoveredProject === project.id ? 1.1 : 1,
                    rotate: hoveredProject === project.id ? 90 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <Eye className="w-5 h-5 text-white" />
                </motion.div>
              </div>

              <div className="p-6">
                <motion.p
                  className="text-bleu-marine/70 text-sm leading-relaxed mb-4"
                  initial={{ opacity: 0.7 }}
                  animate={{
                    opacity: hoveredProject === project.id ? 1 : 0.7
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {project.description}
                </motion.p>

                <motion.div
                  className="flex items-center justify-between"
                  animate={{
                    y: hoveredProject === project.id ? -2 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <span className="text-xs text-bleu-marine/60 font-medium">Voir le projet</span>
                  <motion.div
                    animate={{
                      x: hoveredProject === project.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-4 h-4 text-brun-bois" />
                  </motion.div>
                </motion.div>
              </div>

              <motion.div
                className="absolute inset-0 bg-beige-moderne rounded-2xl lg:rounded-3xl"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredProject === project.id ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <Link href="/tous-nos-projets">
            <motion.button
              className="group bg-bleu-marine hover:bg-brun-bois text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg transition-colors duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center gap-3">
                Découvrir tous nos projets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};