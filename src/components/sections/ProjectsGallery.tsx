"use client";
import { motion } from "framer-motion";
import { Star, MapPin, Calendar, ArrowRight, Eye, Award } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

const ProjectContent = ({ 
  title, 
  location, 
  description, 
  materials,
  duration,
  testimonial 
}: {
  title: string;
  location: string;
  description: string;
  materials: string[];
  duration: string;
  testimonial?: { text: string; author: string; rating: number };
}) => (
  <div className="bg-gris-perle dark:bg-neutral-900 p-8 rounded-t-3xl">
    <div className="flex items-center gap-2 text-bleu-marine/70 mb-3">
      <MapPin className="w-4 h-4" />
      <span className="text-sm font-medium">{location}</span>
    </div>
    
    <h3 className="font-heading font-bold text-3xl text-bleu-marine mb-4">
      {title}
    </h3>
    
    <p className="text-bleu-marine/70 mb-6 leading-relaxed">
      {description}
    </p>
    
    {/* Matériaux */}
    <div className="mb-6">
      <h4 className="font-semibold text-bleu-marine mb-3">Matériaux utilisés</h4>
      <div className="flex flex-wrap gap-2">
        {materials.map((material, idx) => (
          <span 
            key={idx}
            className="text-xs px-3 py-2 rounded-full bg-gris-perle border border-gray-200 text-bleu-marine"
          >
            {material}
          </span>
        ))}
      </div>
    </div>
    
    {/* Durée */}
    <div className="flex items-center gap-2 text-bleu-marine/70 mb-6">
      <Calendar className="w-4 h-4" />
      <span className="text-sm">Durée de réalisation : {duration}</span>
    </div>
    
    {/* Témoignage */}
    {testimonial && (
      <div className="bg-gris-perle rounded-xl p-4 mb-6">
        <div className="flex mb-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-bleu-marine/70 italic mb-2">
          "{testimonial.text}"
        </p>
        <p className="text-xs text-bleu-marine/70 font-medium">
          {testimonial.author}
        </p>
      </div>
    )}
    
    <motion.button
      className="inline-flex items-center gap-2 text-bleu-marine font-semibold hover:text-brun-bois transition-colors"
      whileHover={{ x: 5 }}
    >
      Voir plus de détails
      <ArrowRight className="w-4 h-4" />
    </motion.button>
  </div>
);

export const ProjectsGallery = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects = [
    {
      id: 1,
      title: "Cuisine Contemporaine en Chêne Massif",
      category: "Cuisine",
      location: "Villa privée, Hyères", 
      description: "Réalisation complète d'une cuisine haut de gamme avec îlot central et cave à vin intégrée.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&auto=format&q=80",
      materials: ["Chêne massif", "Quartz Calacatta", "Inox brossé"],
      duration: "3 semaines",
      className: "col-span-2 row-span-2",
      featured: true
    },
    {
      id: 2,
      title: "Dressing Sur Mesure",
      category: "Rangement",
      location: "Appartement, Fréjus",
      description: "Optimisation d'un espace réduit avec solutions innovantes.",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&auto=format&q=80",
      materials: ["MDF laqué", "Miroirs", "LED"],
      duration: "2 semaines",
      className: "col-span-1 row-span-1"
    },
    {
      id: 3,
      title: "Escalier Suspendu Design",
      category: "Escalier",
      location: "Maison moderne, Toulon",
      description: "Escalier suspendu avec structure acier et marches bois massif.",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&auto=format&q=80",
      materials: ["Hêtre massif", "Acier", "Verre"],
      duration: "4 semaines",
      className: "col-span-1 row-span-2"
    },
    {
      id: 4,
      title: "Terrasse Bois Exotique",
      category: "Extérieur",
      location: "Villa vue mer, La Seyne",
      description: "Terrasse IPÉ avec pergola bioclimatique et éclairage LED.",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&auto=format&q=80",
      materials: ["Bois IPÉ", "Aluminium", "LED"],
      duration: "2 semaines",
      className: "col-span-1 row-span-1"
    },
    {
      id: 5,
      title: "Bibliothèque Sur Mesure",
      category: "Mobilier",
      location: "Maison de maître, Draguignan",
      description: "Bibliothèque du sol au plafond avec échelle coulissante.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&auto=format&q=80",
      materials: ["Noyer français", "Laiton", "Cuir"],
      duration: "3 semaines",
      className: "col-span-2 row-span-1"
    },
    {
      id: 6,
      title: "Cave à Vin Climatisée",
      category: "Cave",
      location: "Villa, Saint-Tropez",
      description: "Cave 500 bouteilles avec climatisation et hygrométrie.",
      image: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&auto=format&q=80",
      materials: ["Chêne vieilli", "Pierre", "Verre"],
      duration: "4 semaines",
      className: "col-span-1 row-span-1"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-gris-perle/50 via-white to-gris-perle/30">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block text-brun-bois font-medium mb-3 lg:mb-4 text-base lg:text-lg tracking-wider">
            PORTFOLIO
          </span>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-bleu-marine mb-4 lg:mb-6 leading-tight">
            Nos réalisations
            <span className="block bg-gradient-to-r from-brun-bois to-gold bg-clip-text text-transparent">
              d'exception
            </span>
          </h2>
          
          <div className="flex justify-center gap-6 lg:gap-8 mt-8 lg:mt-12">
            {[
              { number: '150+', label: 'Projets' },
              { number: '100%', label: 'Satisfaits' },
              { number: '15', label: 'Années' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="text-2xl lg:text-3xl xl:text-4xl font-bold text-bleu-marine font-heading">{stat.number}</div>
                <div className="text-xs lg:text-sm text-bleu-marine/70 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 lg:grid-rows-4 gap-4 lg:gap-6 h-[600px] lg:h-[800px]">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className={cn(
                "relative group overflow-hidden rounded-2xl lg:rounded-3xl cursor-pointer",
                // Responsive grid classes
                index === 0 ? "col-span-2 row-span-2" : // Premier projet - grand
                index === 2 ? "col-span-1 row-span-2" : // Troisième projet - haut
                index === 4 ? "col-span-2 row-span-1" : // Cinquième projet - large
                "col-span-1 row-span-1" // Autres projets - standard
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="absolute inset-0">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <div className="absolute inset-0 p-4 lg:p-6 flex flex-col justify-between">
                <div className="flex items-start justify-between">
                  <motion.div
                    className="px-2 lg:px-3 py-1 bg-white/10 backdrop-blur-md rounded-full"
                    animate={{
                      scale: hoveredProject === project.id ? 1.05 : 1
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="text-xs font-medium text-white">{project.category}</span>
                  </motion.div>

                  {project.featured && (
                    <motion.div
                      className="w-6 h-6 lg:w-8 lg:h-8 bg-gold/20 backdrop-blur-md rounded-full flex items-center justify-center"
                      animate={{
                        rotate: hoveredProject === project.id ? 360 : 0
                      }}
                      transition={{ duration: 0.6 }}
                    >
                      <Award className="w-3 h-3 lg:w-4 lg:h-4 text-gold" />
                    </motion.div>
                  )}
                </div>

                <div>
                  <motion.div
                    className="flex items-center gap-1 lg:gap-2 mb-1 lg:mb-2"
                    animate={{
                      x: hoveredProject === project.id ? 5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <MapPin className="w-3 h-3 lg:w-4 lg:h-4 text-white/80" />
                    <span className="text-xs lg:text-sm text-white/80 truncate">{project.location}</span>
                  </motion.div>

                  <motion.h3
                    className="text-sm lg:text-lg xl:text-xl font-heading font-bold text-white mb-1 lg:mb-2 leading-tight"
                    animate={{
                      y: hoveredProject === project.id ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.title}
                  </motion.h3>

                  <motion.p
                    className="text-white/80 text-xs lg:text-sm mb-2 lg:mb-4 line-clamp-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      y: hoveredProject === project.id ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-1 lg:gap-2 mb-2 lg:mb-4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {project.materials.slice(0, 2).map((material, idx) => (
                      <span key={idx} className="px-1.5 lg:px-2 py-0.5 lg:py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                        {material}
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex items-center justify-between"
                    animate={{
                      y: hoveredProject === project.id ? 0 : 10,
                      opacity: hoveredProject === project.id ? 1 : 0.8
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-1 lg:gap-2">
                      <Calendar className="w-3 h-3 lg:w-4 lg:h-4 text-white/80" />
                      <span className="text-xs lg:text-sm text-white/80">{project.duration}</span>
                    </div>

                    <motion.div
                      className="w-6 h-6 lg:w-8 lg:h-8 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                      whileHover={{ scale: 1.1 }}
                    >
                      <Eye className="w-3 h-3 lg:w-4 lg:h-4 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brun-bois/20 to-gold/20"
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
          <motion.button
            className="group bg-bleu-marine hover:bg-brun-bois text-white px-6 lg:px-8 py-3 lg:py-4 rounded-full font-semibold text-base lg:text-lg shadow-lg transition-colors"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-2 lg:gap-3">
              Voir tous nos projets
              <ArrowRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};