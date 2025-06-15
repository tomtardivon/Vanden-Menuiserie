"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowLeft, Calendar, MapPin, User, Tag } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectPageContentProps {
  project: Project;
}

export function ProjectPageContent({ project }: ProjectPageContentProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

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

  return (
    <main className="relative pt-18">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center bg-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Back Button */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8"
            >
              <Link
                href="/realisations"
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 text-white hover:bg-white/20 transition-all"
              >
                <ArrowLeft className="w-4 h-4" />
                Retour aux réalisations
              </Link>
            </motion.div>

            {/* Category Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 bg-brun-bois rounded-full px-6 py-3 mb-6"
            >
              <Tag className="w-4 h-4" />
              <span className="text-sm font-medium">{getCategoryLabel(project.category)}</span>
            </motion.div>
            
            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-7xl font-heading font-bold mb-6 leading-tight"
            >
              {project.title}
            </motion.h1>
            
            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl"
            >
              {project.description}
            </motion.p>

            {/* Project Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/20"
            >
              <div className="flex items-center gap-3">
                <Calendar className="w-5 h-5 text-brun-bois" />
                <div>
                  <div className="text-sm text-white/70">Durée</div>
                  <div className="font-semibold">3-4 semaines</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-brun-bois" />
                <div>
                  <div className="text-sm text-white/70">Localisation</div>
                  <div className="font-semibold">Var (83)</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-brun-bois" />
                <div>
                  <div className="text-sm text-white/70">Type</div>
                  <div className="font-semibold">Sur mesure</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-6">
              Galerie du projet
            </h2>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Découvrez chaque détail de cette réalisation exceptionnelle
            </p>
          </motion.div>

          {/* Main Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[600px] rounded-3xl overflow-hidden mb-8"
          >
            <Image
              src={project.images[currentImageIndex]}
              alt={`${project.title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover"
            />
            
            {/* Navigation */}
            {project.images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </>
            )}

            {/* Image Counter */}
            <div className="absolute bottom-6 right-6 bg-black/50 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentImageIndex + 1} / {project.images.length}
            </div>
          </motion.div>

          {/* Thumbnails */}
          {project.images.length > 1 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
            >
              {project.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-24 rounded-xl overflow-hidden transition-all ${
                    currentImageIndex === index
                      ? "ring-4 ring-brun-bois scale-105"
                      : "opacity-70 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`Miniature ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bleu-marine">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl md:text-5xl font-heading font-bold mb-6">
              Un projet similaire en tête ?
            </h3>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Contactez-nous pour une consultation gratuite et donnons vie à vos idées
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brun-bois text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brun-bois/90 transition-all"
              >
                Demander un devis gratuit
              </motion.a>
              
              <motion.a
                href="tel:0762144340"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/20 transition-all"
              >
                ☎ 07 62 14 43 40
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}