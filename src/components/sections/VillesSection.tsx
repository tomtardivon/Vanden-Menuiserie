"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MapPin, Users, Home } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";

export function VillesSection() {
  return (
    <section className="py-24 bg-gris-perle relative overflow-hidden">
      <DotPattern
        className="opacity-20"
        dotSize={1.5}
        gap={35}
        dotColor="#1E2B39"
        fade={true}
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6">
            <MapPin className="w-5 h-5 text-brun-bois" />
            <span className="text-sm font-medium text-bleu-marine">Zone d'intervention</span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-bleu-marine mb-6">
            Partout dans le Var
          </h2>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            De Toulon à Draguignan, en passant par la côte varoise, nous intervenons 
            dans tout le département pour vos projets de menuiserie sur mesure.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              city: "Toulon",
              description: "Préfecture du Var",
              projects: "35+ projets",
              speciality: "Appartements et maisons de ville",
              image: "/villes/toulon/toulon.jpg",
              href: "/menuisier-toulon",
              highlight: "Centre urbain"
            },
            {
              city: "Hyères",
              description: "Côte varoise",
              projects: "25+ projets", 
              speciality: "Villas et résidences de standing",
              image: "/villes/hyeres/hyères.jpg",
              href: "/menuisier-hyeres",
              highlight: "Bord de mer"
            },
            {
              city: "Draguignan",
              description: "Haut Var",
              projects: "20+ projets",
              speciality: "Maisons de caractère et restaurations",
              image: "/villes/draguignan/draguignan.jpg", 
              href: "/menuisier-draguignan",
              highlight: "Patrimoine"
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
              <div className="relative h-[450px] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                {/* Background image */}
                <Image
                  src={ville.image}
                  alt={`${ville.city} - Menuisier Vanden`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20 group-hover:from-black/90 transition-all duration-300" />

                {/* Content overlay */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between text-white">
                  {/* Top section - Badge et projets */}
                  <div className="flex justify-between items-start">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-3 py-1 text-sm font-medium">
                      {ville.highlight}
                    </div>
                    <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Bottom section - Infos ville */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-3xl font-heading font-bold mb-2 group-hover:text-brun-bois transition-colors">
                        {ville.city}
                      </h3>
                      <p className="text-white/90 text-sm font-medium mb-1">{ville.description}</p>
                      <p className="text-white/80 text-sm">{ville.speciality}</p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center gap-4 pt-3 border-t border-white/20">
                      <div className="flex items-center gap-2">
                        <Home className="w-4 h-4 text-white/80" />
                        <span className="text-sm font-medium">{ville.projects}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-white/80" />
                        <span className="text-sm">Clients satisfaits</span>
                      </div>
                    </div>

                    {/* Lien vers page ville */}
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-white group-hover:text-brun-bois transition-colors">
                        <span>Découvrir nos réalisations</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Zone de couverture complète */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white rounded-3xl p-8 lg:p-12 shadow-lg text-center"
        >
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-heading font-bold text-bleu-marine mb-6">
              Intervention dans tout le département du Var
            </h3>
            <p className="text-lg text-bleu-marine/70 mb-8 leading-relaxed">
              Notre équipe intervient sur l'ensemble du territoire varois. 
              Que vous soyez en ville, sur la côte ou dans l'arrière-pays, 
              nous nous déplaçons gratuitement pour étudier votre projet.
            </p>
            
            {/* Liste des villes */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {[
                "Toulon", "Hyères", "Draguignan", "Fréjus", "La Seyne-sur-Mer", 
                "Six-Fours-les-Plages", "Sanary-sur-Mer", "Bandol", "Saint-Cyr-sur-Mer", 
                "Ollioules", "La Valette", "Le Pradet", "Carqueiranne", "La Garde"
              ].map((city) => (
                <span 
                  key={city} 
                  className="px-4 py-2 bg-gris-perle text-bleu-marine rounded-full text-sm font-medium hover:bg-beige-moderne transition-colors"
                >
                  {city}
                </span>
              ))}
            </div>

            <div className="grid md:grid-cols-3 gap-6 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
                className="p-4"
              >
                <MapPin className="w-8 h-8 text-brun-bois mx-auto mb-3" />
                <h4 className="font-semibold text-bleu-marine mb-2">Déplacement gratuit</h4>
                <p className="text-sm text-bleu-marine/70">Dans tout le Var pour l'étude de votre projet</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.9 }}
                className="p-4"
              >
                <Home className="w-8 h-8 text-brun-bois mx-auto mb-3" />
                <h4 className="font-semibold text-bleu-marine mb-2">80+ projets</h4>
                <p className="text-sm text-bleu-marine/70">Réalisés dans l'ensemble du département</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 }}
                className="p-4"
              >
                <Users className="w-8 h-8 text-brun-bois mx-auto mb-3" />
                <h4 className="font-semibold text-bleu-marine mb-2">Proximité</h4>
                <p className="text-sm text-bleu-marine/70">Un artisan local qui connaît le territoire</p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}