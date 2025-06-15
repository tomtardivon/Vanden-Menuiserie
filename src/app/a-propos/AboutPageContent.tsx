"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Calendar, Heart, Shield, Users, Wrench } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Passion du métier",
    description: "Chaque projet est une nouvelle opportunité de créer quelque chose d'unique et de beau."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Qualité garantie",
    description: "Nous utilisons uniquement des matériaux nobles et offrons une garantie décennale."
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Écoute client",
    description: "Votre satisfaction est notre priorité. Nous travaillons main dans la main avec vous."
  },
  {
    icon: <Wrench className="w-8 h-8" />,
    title: "Savoir-faire",
    description: "35 ans d'expérience et de perfectionnement dans l'art de la menuiserie."
  }
];

const milestones = [
  { year: "1985", event: "Création de Vanden Menuiserie par Jean Vanden" },
  { year: "1995", event: "Première extension de l'atelier à Toulon" },
  { year: "2005", event: "Mattias Vanden rejoint l'entreprise familiale" },
  { year: "2015", event: "Modernisation complète des équipements" },
  { year: "2023", event: "Plus de 1000 projets réalisés dans le Var" }
];

export function AboutPageContent() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="py-20 pt-32 md:pt-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
              Notre Histoire
            </h1>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Trois générations de passion pour le bois. 
              Découvrez l'histoire de Vanden Menuiserie, artisan menuisier dans le Var.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-heading font-bold mb-6">
                Une entreprise familiale depuis 1985
              </h2>
              <div className="space-y-4 text-bleu-marine/70 leading-relaxed">
                <p>
                  Vanden Menuiserie est née de la passion de Jean Vanden pour le travail du bois. 
                  Installé à Toulon en 1985, il a commencé dans un petit atelier avec une vision simple : 
                  créer des pièces uniques qui durent dans le temps.
                </p>
                <p>
                  Aujourd'hui, c'est son fils Mattias qui perpétue cette tradition d'excellence. 
                  Formé aux techniques traditionnelles tout en maîtrisant les outils modernes, 
                  il allie savoir-faire ancestral et innovation pour créer des œuvres d'exception.
                </p>
                <p>
                  Avec plus de 1000 projets réalisés dans tout le Var, nous sommes fiers d'avoir 
                  contribué à embellir les intérieurs de nos clients, toujours avec la même passion 
                  et le même souci du détail qu'au premier jour.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=800&h=600&auto=format&q=80"
                alt="Mattias Vanden dans l'atelier"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-gris-perle">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Nos Valeurs</h2>
            <p className="text-xl text-bleu-marine/70">
              Les principes qui guident notre travail au quotidien
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gris-perle rounded-full mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-bleu-marine/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">Notre Parcours</h2>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200" />
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "justify-start" : "justify-end"
                }`}
              >
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="bg-white/80 backdrop-blur p-6 rounded-xl shadow-md">
                    <div className="text-2xl font-bold text-bleu-marine mb-2">{milestone.year}</div>
                    <p className="text-bleu-marine/70">{milestone.event}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gold rounded-full border-4 border-white" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gris-perle">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6">L'Équipe</h2>
            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=400&h=400&auto=format&q=80"
                alt="Mattias Vanden"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Mattias Vanden</h3>
            <p className="text-bleu-marine/70 mb-6">Maître Artisan Menuisier</p>
            <p className="text-bleu-marine/70 max-w-2xl mx-auto leading-relaxed">
              "Mon objectif est de perpétuer la tradition familiale tout en innovant constamment. 
              Chaque projet est unique et mérite toute notre attention. C'est cette philosophie 
              qui guide mon travail au quotidien et qui fait la réputation de Vanden Menuiserie."
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bleu-marine">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-heading font-bold mb-6 text-white">
              Écrivons ensemble votre histoire
            </h2>
            <p className="text-xl text-white/80 mb-10">
              Confiez-nous votre projet et bénéficiez de notre expertise
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-bleu-marine rounded-full hover:bg-beige-moderne transition-colors"
            >
              Commencer mon projet
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}