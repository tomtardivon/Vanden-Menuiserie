"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function RealProjectsSection() {
  return (
    <section className="py-24 bg-blanc-casse">
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
          </h2>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez nos créations sur mesure qui transforment vos espaces de vie
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Cuisines Sur Mesure",
              description: "Espaces culinaires alliant fonctionnalité et design contemporain",
              image: "/projet/cuisine/cuisine-moderne-electromenager.jpg",
              category: "Cuisine",
              href: "/realisations?category=cuisine"
            },
            {
              title: "Dressings & Placards",
              description: "Solutions de rangement optimisées pour tous les espaces",
              image: "/projet/dressing/dressing-sur-mesure-vue.jpg",
              category: "Dressing",
              href: "/realisations?category=dressing"
            },
            {
              title: "Meubles d'Exception",
              description: "Créations uniques en bois massif pour sublimer votre intérieur",
              image: "/projet/bibliotheque/bibliotheque-complete.jpg",
              category: "Meuble",
              href: "/realisations?category=meuble"
            }
          ].map((project, index) => (
            <motion.a
              key={project.title}
              href={project.href}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group cursor-pointer block"
            >
              <div className="relative h-[400px] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-300" />
                
                <div className="absolute top-4 left-4 px-3 py-1 bg-brun-bois text-white text-sm font-medium rounded-full">
                  {project.category}
                </div>
                
                <div className="absolute bottom-4 right-4 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
                
                <div className="absolute inset-0 p-6 flex flex-col justify-end text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-brun-bois transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-white/90 text-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    {project.description}
                  </p>
                </div>
              </div>
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
            <ArrowUpRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}