"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { projects, projectCategories, type Project } from "@/data/projects";
import { Calendar, MapPin, Eye, Filter } from "lucide-react";
import { cn } from "@/lib/utils";

export const ProjectsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const filteredProjects = selectedCategory === 'tous' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-bleu-marine mb-4">
            Tous nos projets
          </h2>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez l'ensemble de nos réalisations classées par catégorie
          </p>
        </motion.div>

        {/* Filtres par catégorie */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-full font-medium transition-all",
                selectedCategory === category.id
                  ? "bg-bleu-marine text-white"
                  : "bg-gris-perle text-bleu-marine hover:bg-bleu-marine/10"
              )}
            >
              <Filter className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Grille de projets */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Image principale */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-bleu-marine/60" />
                
                {/* Badge catégorie */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-bleu-marine">
                    {projectCategories.find(cat => cat.id === project.category)?.label}
                  </span>
                </div>

                {/* Badge featured */}
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-gold/90 backdrop-blur-sm rounded-full text-sm font-medium text-white">
                      Recommandé
                    </span>
                  </div>
                )}

                {/* Overlay avec bouton */}
                <motion.div
                  className="absolute inset-0 bg-bleu-marine/80 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <button className="flex items-center gap-2 px-6 py-3 bg-white text-bleu-marine rounded-full font-semibold hover:bg-gris-perle transition-colors">
                    <Eye className="w-4 h-4" />
                    Voir le projet
                  </button>
                </motion.div>
              </div>

              {/* Contenu */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-bleu-marine mb-2 group-hover:text-brun-bois transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-bleu-marine/70 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Galerie d'images miniatures */}
                {project.images.length > 1 && (
                  <div className="flex gap-2 mb-4">
                    {project.images.slice(1, 4).map((image, imgIndex) => (
                      <div key={imgIndex} className="relative w-12 h-12 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${project.title} - ${imgIndex + 2}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                    {project.images.length > 4 && (
                      <div className="w-12 h-12 rounded-lg bg-bleu-marine/10 flex items-center justify-center">
                        <span className="text-xs font-medium text-bleu-marine">
                          +{project.images.length - 4}
                        </span>
                      </div>
                    )}
                  </div>
                )}

                {/* Métadonnées */}
                <div className="flex items-center justify-between text-sm text-bleu-marine/60">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>2024</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>Var (83)</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Message si aucun projet */}
        {filteredProjects.length === 0 && (
          <motion.div
            className="text-center py-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-xl text-bleu-marine/70">
              Aucun projet trouvé dans cette catégorie
            </p>
          </motion.div>
        )}

        {/* Compteur de projets */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-bleu-marine/70">
            {filteredProjects.length} projet{filteredProjects.length > 1 ? 's' : ''} 
            {selectedCategory !== 'tous' && (
              <span> dans la catégorie "{projectCategories.find(cat => cat.id === selectedCategory)?.label}"</span>
            )}
          </p>
        </motion.div>
      </div>
    </section>
  );
};