"use client";
import { motion } from "framer-motion";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { projects } from "@/data/projects";
import { TestimonialsSection } from "../sections/TestimonialsSection";
import { FAQSection } from "../sections/FAQSection";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ToulonPageContent() {
  return (
    <main className="relative pt-18">
      {/* Hero Section Toulon */}
      <section className="relative min-h-screen flex items-center bg-white overflow-hidden">
        {/* Background with city image */}
        <div className="absolute inset-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/villes/toulon/toulon.jpg')`,
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="absolute inset-0 bg-bleu-marine/60" />
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-white">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-6 py-3 mb-8"
            >
              <div className="w-3 h-3 bg-brun-bois rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">📍 Toulon, Var (83000)</span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-5xl md:text-8xl font-heading font-bold mb-6 leading-tight"
            >
              Menuisier
              <span className="block text-brun-bois">à Toulon</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed max-w-3xl"
            >
              <span className="text-brun-bois font-semibold">38 ans d'expertise</span> au service des Toulonnais.
              Créateur de cuisines sur mesure, escaliers nobles et menuiseries d'exception.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-brun-bois hover:bg-brun-bois text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl transition-all group"
              >
                Devis Gratuit à Toulon
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.button>

              <motion.a
                href="tel:0762144340"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 backdrop-blur-md border border-white/30 text-white hover:bg-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all text-center"
              >
                ☎ 07 62 14 43 40
              </motion.a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-white/20"
            >
              {[
                { number: "38", label: "Ans d'expérience" },
                { number: "500+", label: "Projets à Toulon" },
                { number: "100%", label: "Clients satisfaits" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-brun-bois mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>


      {/* Nos Réalisations Section - Only 3 projects */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-bleu-marine mb-6">
              Nos Réalisations
              <span className="block text-brun-bois">à Toulon</span>
            </h2>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Découvrez quelques-unes de nos plus belles créations toulonnaises
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.filter(p => p.featured).slice(0, 3).map((project, index) => (
              <motion.a
                key={project.title}
                href={`/projet/${project.id}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer block"
              >
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
                  <div
                    className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-700 group-hover:scale-110"
                    style={{
                      backgroundImage: `url('${project.images[0]}')`,
                    }}
                  />
                  <div className="absolute inset-0 bg-bleu-marine/60" />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-brun-bois text-white text-sm font-medium rounded-full">
                    {project.category}
                  </div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-white text-xl">→</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-bleu-marine mb-3 group-hover:text-brun-bois transition-colors">
                  {project.title}
                </h3>
                <p className="text-bleu-marine/70 leading-relaxed">
                  {project.description}
                </p>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/realisations"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-bleu-marine text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-brun-bois transition-all"
            >
              Voir toutes nos réalisations
              <span className="text-xl">→</span>
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* Témoignages clients */}
      <TestimonialsSection />

      {/* Autres villes Section */}
      <section className="py-24 bg-gris-perle">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-6">
              Nos Services dans le Var
            </h2>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Découvrez nos réalisations dans d'autres villes du département
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                city: "Hyères",
                description: "Villas de standing et terrasses bois",
                image: "/villes/hyeres/hyères.jpg",
                href: "/menuisier-hyeres"
              },
              {
                city: "Fréjus",
                description: "Maisons contemporaines et design moderne",
                image: "/villes/frejus/frejus.jpg",
                href: "/menuisier-frejus"
              },
              {
                city: "Draguignan",
                description: "Restaurations et savoir-faire traditionnel",
                image: "/villes/draguignan/draguignan.jpg",
                href: "/menuisier-draguignan"
              }
            ].map((ville, index) => (
              <motion.a
                key={ville.city}
                href={ville.href}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group cursor-pointer block"
              >
                <div className="relative h-[300px] rounded-2xl overflow-hidden mb-6">
                  <Image
                    src={ville.image}
                    alt={`${ville.city} - Vue de la ville`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-300" />

                  <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                    <div className="flex justify-end">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                        <ArrowUpRight className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl font-bold mb-2 group-hover:text-brun-bois transition-colors">
                        {ville.city}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {ville.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Questions fréquentes */}
      <FAQSection />


      {/* Schema LocalBusiness pour Toulon */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Carpenter",
            "name": "Vanden Menuiserie",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Toulon",
              "addressRegion": "Var",
              "postalCode": "83000",
              "addressCountry": "FR"
            },
            "serviceArea": {
              "@type": "City",
              "name": "Toulon"
            },
            "telephone": "+33762144340",
            "url": "https://vanden-menuiserie.fr/menuisier-toulon",
            "priceRange": "€€€",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "5",
              "reviewCount": "50"
            }
          })
        }}
      />
    </main>
  );
}