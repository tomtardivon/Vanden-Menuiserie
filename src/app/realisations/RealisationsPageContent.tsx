"use client";
import React, { useState, useMemo } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, MapPin, User, ArrowUpRight, X, ChevronLeft, ChevronRight } from "lucide-react";
import { projects, projectCategories } from "@/data/projects";
import { cn } from "@/lib/utils";
import { DotPattern } from "@/components/ui/dot-pattern";

export function RealisationsPageContent() {
  const [selectedCategory, setSelectedCategory] = useState('tous');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const filteredProjects = useMemo(() => {
    const filtered = selectedCategory === 'tous' ? projects : projects.filter(project => project.category === selectedCategory);
    return showAll ? filtered : filtered.slice(0, 6);
  }, [selectedCategory, showAll]);

  const allFilteredProjects = useMemo(() => {
    return selectedCategory === 'tous' ? projects : projects.filter(project => project.category === selectedCategory);
  }, [selectedCategory]);

  const projectsCount = useMemo(() => {
    const counts: Record<string, number> = { tous: projects.length };
    projects.forEach(project => {
      counts[project.category] = (counts[project.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div className="w-full min-h-screen bg-white pt-20">
      {/* Hero Section - BLANC */}
      <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez une sélection de nos plus belles créations,
            témoignages de notre savoir-faire et de notre passion pour l&apos;excellence.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                setSelectedCategory(category.id);
                setShowAll(false);
              }}
              className={cn(
                "px-6 py-3 rounded-full font-medium transition-all duration-300",
                "hover:scale-105 hover:shadow-lg",
                selectedCategory === category.id
                  ? "bg-bleu-marine text-white shadow-xl"
                  : "bg-gris-perle text-bleu-marine hover:bg-beige-moderne"
              )}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-70">
                ({projectsCount[category.id] || 0})
              </span>
            </button>
          ))}
        </motion.div>
      </div>

      {/* Projects Grid - BLANC */}
      <div className="max-w-7xl mx-auto px-4">
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => {
                  setSelectedProject(project);
                  setCurrentImageIndex(0);
                }}
              >
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-4">
                  <Image
                    src={project.images[0]}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bleu-marine/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-sm mb-2">{getCategoryLabel(project.category)}</p>
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <ArrowUpRight className="w-5 h-5 text-bleu-marine" />
                  </div>
                </div>
                <div className="px-2">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-brun-bois transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-bleu-marine/70 line-clamp-2">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show More Button */}
        {!showAll && allFilteredProjects.length > 6 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex justify-center mt-12"
          >
            <button
              onClick={() => setShowAll(true)}
              className="px-8 py-4 bg-bleu-marine text-white rounded-full font-medium hover:bg-bleu-marine/90 transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              Voir plus de réalisations ({allFilteredProjects.length - 6} restantes)
            </button>
          </motion.div>
        )}
      </div>

      {/* Process Section - GRIS avec dots */}
      <section className="py-24 bg-gris-perle relative overflow-hidden mt-24">
        <DotPattern
          className="opacity-40"
          size={2}
          spacing={30}
          color="#1E2B39"
        />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Notre Processus de Création
            </h2>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Découvrez les étapes qui nous permettent de donner vie à vos projets
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Étude & Conception",
                description: "Analyse de vos besoins, prise de mesures et création des plans détaillés"
              },
              {
                step: "02",
                title: "Sélection des Matériaux",
                description: "Choix des essences de bois et matériaux adaptés à votre projet"
              },
              {
                step: "03",
                title: "Fabrication Artisanale",
                description: "Réalisation en atelier avec un savoir-faire traditionnel et des outils modernes"
              },
              {
                step: "04",
                title: "Installation & Finitions",
                description: "Pose soignée chez vous et finitions pour un résultat parfait"
              }
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-sm group-hover:shadow-lg transition-all duration-300 border border-bleu-marine/5">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-bleu-marine text-white rounded-full flex items-center justify-center text-lg font-bold mr-4">
                      {process.step}
                    </div>
                    <h3 className="text-xl font-semibold text-bleu-marine">{process.title}</h3>
                  </div>
                  <p className="text-bleu-marine/70 leading-relaxed">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Projets par Zone Section - BLANC */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Nos Réalisations dans le Var
            </h2>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Découvrez nos projets réalisés dans tout le département du Var
            </p>
          </motion.div>

          {/* Carte des zones */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {[
              {
                city: "Toulon",
                count: "25+",
                projects: ["Cuisines modernes", "Dressings optimisés", "Rénovations complètes"],
                highlight: "Spécialité appartements",
                color: "from-bleu-marine to-bleu-marine/80",
                href: "/menuisier-toulon",
                image: "/villes/toulon/toulon.jpg"
              },
              {
                city: "Hyères",
                count: "20+",
                projects: ["Villas de standing", "Terrasses bois", "Meubles sur mesure"],
                highlight: "Expertise résidentiel haut de gamme",
                color: "from-brun-bois to-brun-bois/80",
                href: "/menuisier-hyeres",
                image: "/villes/hyeres/hyères.jpg"
              },
              {
                city: "Fréjus",
                count: "15+",
                projects: ["Maisons contemporaines", "Bibliothèques", "Agencements"],
                highlight: "Design moderne",
                color: "from-bleu-marine/80 to-brun-bois/60",
                href: "/menuisier-frejus",
                image: "/villes/frejus/frejus.jpg"
              },
              {
                city: "La Seyne-sur-Mer",
                count: "12+",
                projects: ["Projets familiaux", "Rangements optimisés", "Espaces enfants"],
                highlight: "Solutions famille",
                color: "from-bleu-marine/60 to-brun-bois/40",
                image: "/villes/la-seyne/Port_de_La_Seyne-sur-Mer.JPG"
              },
              {
                city: "Draguignan",
                count: "18+",
                projects: ["Maisons de maître", "Escaliers nobles", "Restaurations"],
                highlight: "Savoir-faire traditionnel",
                color: "from-brun-bois/80 to-bleu-marine/60",
                image: "/villes/draguignan/draguignan.jpg"
              },
              {
                city: "Autres communes",
                count: "30+",
                projects: ["Six-Fours", "Sanary", "Bandol", "Saint-Cyr"],
                highlight: "Intervention dans tout le Var",
                color: "from-bleu-marine/70 to-brun-bois/50",
                image: "/villes/toulon/toulon2.jpg"
              }
            ].map((zone, index) => {
              const CardComponent = zone.href ? motion.a : motion.div;
              return (
                <CardComponent
                  key={zone.city}
                  {...(zone.href && { href: zone.href })}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.98 }}
                  className="group cursor-pointer block"
                >
                  <div className="relative h-[400px] rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                    {/* Background image */}
                    <Image
                      src={zone.image}
                      alt={`${zone.city} - Vue de la ville`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-300" />
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                      {/* Top section - Badge and count */}
                      <div className="flex justify-between items-start">
                        <div className={`px-4 py-2 rounded-full bg-gradient-to-r ${zone.color} text-white text-sm font-bold shadow-lg`}>
                          {zone.count} projets
                        </div>
                        {zone.href && (
                          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <ArrowUpRight className="w-5 h-5 text-white" />
                          </div>
                        )}
                      </div>
                      
                      {/* Bottom section - City info */}
                      <div className="space-y-4">
                        <div>
                          <h3 className="text-2xl font-bold mb-2 group-hover:text-brun-bois transition-colors">{zone.city}</h3>
                          <p className="text-white/90 text-sm font-medium mb-3">{zone.highlight}</p>
                        </div>
                        
                        {/* Projects list */}
                        <div className="space-y-2">
                          {zone.projects.slice(0, 3).map((project, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              <div className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0 opacity-80"></div>
                              <span className="text-white/80">{project}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Clickable indicator */}
                        {zone.href && (
                          <div className="pt-3 border-t border-white/20">
                            <div className="flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brun-bois transition-colors">
                              <span>Découvrir nos réalisations</span>
                              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </CardComponent>
              );
            })}
          </div>

          {/* Zone de couverture */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-bleu-marine rounded-3xl p-8 text-white text-center"
          >
            <h3 className="text-2xl font-bold mb-4 text-white">Zone d&apos;intervention : Tout le Var</h3>
            <p className="text-white mb-6 max-w-2xl mx-auto">
              Nous intervenons dans tout le département du Var, de Toulon à Draguignan,
              en passant par la côte varoise. Déplacement gratuit pour l&apos;étude de votre projet.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {["Toulon", "Hyères", "Fréjus", "La Seyne", "Draguignan", "Six-Fours", "Sanary", "Bandol", "Saint-Cyr", "Ollioules"].map((city) => (
                <span key={city} className="px-3 py-1 bg-white text-bleu-marine rounded-full font-medium">{city}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>


      {/* Statistics Section - GRIS avec dots */}
      <section className="py-24 bg-gris-perle relative overflow-hidden">
        <DotPattern
          className="opacity-30"
          size={1.5}
          spacing={40}
          color="#1E2B39"
        />
        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-bleu-marine mb-4">
              Nos Réalisations en Chiffres
            </h2>
            <p className="text-bleu-marine/70 text-lg">
              La confiance de nos clients se mesure en projets réussis
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: projects.filter(p => p.category === 'cuisine').length.toString(), label: "Cuisines réalisées" },
              { number: projects.filter(p => p.category === 'dressing').length.toString(), label: "Dressings créés" },
              { number: projects.filter(p => p.category === 'meuble').length.toString(), label: "Meubles sur mesure" },
              { number: "10 ans", label: "Garantie offerte" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
                  <div className="text-3xl md:text-4xl font-bold text-bleu-marine mb-2">
                    {stat.number}
                  </div>
                  <div className="text-bleu-marine/70 text-sm">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section avec design card arrondie */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center bg-bleu-marine rounded-3xl p-12 text-white relative overflow-hidden"
          >
            {/* Pattern dots directement en SVG */}
            <div className="absolute inset-0">
              <svg width="100%" height="100%" className="absolute inset-0">
                <defs>
                  <pattern
                    id="cta-dots-pattern"
                    x="0"
                    y="0"
                    width="30"
                    height="30"
                    patternUnits="userSpaceOnUse"
                  >
                    <circle
                      cx="15"
                      cy="15"
                      r="2"
                      fill="#ffffff"
                      opacity="0.15"
                    />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-dots-pattern)" />
              </svg>
            </div>
            <div className="relative z-10">
              <h3 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Rejoignez nos clients satisfaits
              </h3>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Parlons de votre projet et créons ensemble quelque chose d&apos;exceptionnel
                qui dépassera vos attentes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <motion.a
                  href="/contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white text-bleu-marine px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
                >
                  Demander un devis gratuit
                  <ArrowUpRight className="w-5 h-5" />
                </motion.a>

                <motion.a
                  href="tel:0494123456"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/20 transition-all"
                >
                  <Calendar className="w-5 h-5" />
                  04 94 12 34 56
                </motion.a>
              </div>

              {/* Avantages en version compacte */}
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
                >
                  <MapPin className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Étude gratuite</h4>
                  <p className="text-white/80 text-sm">Conseils personnalisés pour votre projet</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
                >
                  <User className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Suivi dédié</h4>
                  <p className="text-white/80 text-sm">Un interlocuteur unique de A à Z</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="bg-white/5 backdrop-blur-sm rounded-2xl p-6"
                >
                  <Calendar className="w-8 h-8 text-white mx-auto mb-3" />
                  <h4 className="font-semibold text-lg mb-2">Garantie 10 ans</h4>
                  <p className="text-white/80 text-sm">Qualité et durabilité assurées</p>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white/95 backdrop-blur-md z-10 p-6 border-b border-gris-perle">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-brun-bois font-medium mb-1">
                      {getCategoryLabel(selectedProject.category)}
                    </p>
                    <h2 className="text-3xl font-bold text-bleu-marine">
                      {selectedProject.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="w-12 h-12 rounded-full bg-gris-perle hover:bg-bleu-marine hover:text-white transition-colors flex items-center justify-center"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6">
                {/* Main Image Gallery */}
                <div className="relative h-[500px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={selectedProject.images[currentImageIndex]}
                    alt={`${selectedProject.title} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />

                  {/* Navigation Arrows */}
                  {selectedProject.images.length > 1 && (
                    <>
                      <button
                        onClick={() => setCurrentImageIndex((prev) =>
                          prev === 0 ? selectedProject.images.length - 1 : prev - 1
                        )}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronLeft className="w-6 h-6" />
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex((prev) =>
                          prev === selectedProject.images.length - 1 ? 0 : prev + 1
                        )}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                      >
                        <ChevronRight className="w-6 h-6" />
                      </button>
                    </>
                  )}

                  {/* Image Counter */}
                  <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                    {currentImageIndex + 1} / {selectedProject.images.length}
                  </div>
                </div>

                {/* Thumbnails */}
                {selectedProject.images.length > 1 && (
                  <div className="flex gap-2 mb-8 overflow-x-auto pb-2">
                    {selectedProject.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={cn(
                          "relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0",
                          "transition-all duration-300",
                          currentImageIndex === index
                            ? "ring-2 ring-brun-bois scale-105"
                            : "opacity-70 hover:opacity-100"
                        )}
                      >
                        <Image
                          src={image}
                          alt={`Miniature ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}

                {/* Project Details */}
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Description */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Description du projet</h3>
                    <p className="text-bleu-marine/70 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    {/* Project Info */}
                    <div className="space-y-4">
                      <ProjectDetail
                        icon={<Calendar className="w-5 h-5" />}
                        label="Durée"
                        value={getProjectDuration(selectedProject.category)}
                      />
                      <ProjectDetail
                        icon={<MapPin className="w-5 h-5" />}
                        label="Localisation"
                        value={getProjectLocation(projects.indexOf(selectedProject))}
                      />
                      <ProjectDetail
                        icon={<User className="w-5 h-5" />}
                        label="Type de projet"
                        value={getProjectType(selectedProject.category)}
                      />
                    </div>
                  </div>

                  {/* Materials & Testimonial */}
                  <div>
                    <h3 className="text-2xl font-semibold mb-4">Matériaux utilisés</h3>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {getProjectMaterials(selectedProject.category).map((material, index) => (
                        <span
                          key={index}
                          className="px-4 py-2 bg-beige-moderne rounded-full text-sm text-bleu-marine/80"
                        >
                          {material}
                        </span>
                      ))}
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gris-perle rounded-2xl p-6">
                      <p className="text-bleu-marine/70 italic mb-4 text-lg">
                        &ldquo;{getProjectTestimonial(projects.indexOf(selectedProject)).text}&rdquo;
                      </p>
                      <p className="font-medium text-brun-bois">
                        — {getProjectTestimonial(projects.indexOf(selectedProject)).author}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Helper Components
const ProjectDetail = ({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) => (
  <div className="flex items-start space-x-3">
    <div className="text-brun-bois mt-1">{icon}</div>
    <div>
      <p className="font-medium text-bleu-marine">{label}</p>
      <p className="text-bleu-marine/70">{value}</p>
    </div>
  </div>
);

// Helper Functions
const getCategoryLabel = (category: string): string => {
  const labels: Record<string, string> = {
    'cuisine': 'Cuisine',
    'dressing': 'Dressing',
    'placard': 'Placard',
    'porte': 'Porte',
    'meuble': 'Meuble',
    'parquet': 'Parquet',
    'autre': 'Agencement'
  };
  return labels[category] || category;
};

const getProjectDuration = (category: string): string => {
  const durations: Record<string, string> = {
    'cuisine': "3 semaines",
    'dressing': "2 semaines",
    'porte': "1 semaine",
    'meuble': "3 semaines",
    'parquet': "2 semaines",
    'placard': "1 semaine",
    'autre': "4 semaines"
  };
  return durations[category] || "2 semaines";
};

const getProjectLocation = (index: number): string => {
  const locations = [
    "Villa à Hyères",
    "Maison moderne à Toulon",
    "Appartement à Fréjus",
    "Villa à La Seyne",
    "Maison de maître à Draguignan",
    "Villa à Saint-Tropez",
    "Résidence privée à Cannes",
    "Maison contemporaine à Nice"
  ];
  return locations[index % locations.length];
};

const getProjectType = (category: string): string => {
  const types: Record<string, string> = {
    'cuisine': 'Rénovation complète',
    'dressing': 'Aménagement sur mesure',
    'porte': 'Installation',
    'meuble': 'Création sur mesure',
    'parquet': 'Pose et finition',
    'placard': 'Aménagement intérieur',
    'autre': 'Projet spécialisé'
  };
  return types[category] || 'Projet sur mesure';
};

const getProjectMaterials = (category: string): string[] => {
  const materials: Record<string, string[]> = {
    'cuisine': ["Chêne massif", "Quartz", "Inox brossé", "Verre trempé"],
    'dressing': ["MDF laqué", "Miroirs", "LED intégrées", "Aluminium"],
    'porte': ["Bois massif", "Acier thermolaqué", "Verre sécurit", "Quincaillerie premium"],
    'meuble': ["Bois massif", "Pierre naturelle", "Verre", "Acier"],
    'parquet': ["Chêne massif", "Plinthes assorties", "Barres de seuil", "Sous-couche isolante"],
    'placard': ["MDF", "Soft-close", "LED", "Aluminium"],
    'autre': ["Matériaux premium", "Finitions haut de gamme", "Quincaillerie sur mesure", "LED"]
  };
  return materials[category] || materials.autre;
};

const getProjectTestimonial = (index: number): { text: string; author: string } => {
  const testimonials = [
    { text: "Mattias a transformé notre espace en un véritable lieu de vie. La qualité du travail est exceptionnelle.", author: "Marie et Pierre D." },
    { text: "Cette réalisation a complètement transformé notre intérieur. Style et fonctionnalité parfaits!", author: "Sophie M." },
    { text: "Un travail parfaitement pensé qui a transformé notre maison. Chaque détail compte.", author: "Laurent B." },
    { text: "Un travail soigné et rapide. Le résultat donne une tout autre dimension à notre espace!", author: "Famille Rossi" },
    { text: "Une réalisation digne d'un château! Le travail du bois est remarquable.", author: "Jean-Paul V." },
    { text: "Une création exceptionnelle qui sublime notre intérieur. Un vrai bijou!", author: "Philippe R." },
    { text: "Un savoir-faire exceptionnel et un résultat à la hauteur de nos attentes.", author: "Catherine L." },
    { text: "Nous sommes ravis du résultat, c'est exactement ce que nous imaginions.", author: "Marc et Anne T." }
  ];
  return testimonials[index % testimonials.length];
};