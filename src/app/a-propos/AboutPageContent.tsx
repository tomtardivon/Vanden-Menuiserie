"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Award, ArrowRight, Phone, Heart, Shield, Users, Wrench, MapPin, Calendar, Quote } from "lucide-react";
import Link from "next/link";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";

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
    description: "38 ans d'expérience et de perfectionnement dans l'art de la menuiserie."
  }
];

const milestones = [
  { 
    year: "1985", 
    event: "Création de Vanden Menuiserie par Jean Vanden",
    description: "L'aventure commence dans un petit atelier à Toulon avec des outils traditionnels et une passion immense pour le bois."
  },
  { 
    year: "1995", 
    event: "Première extension de l'atelier à Toulon",
    description: "Face au succès croissant, Jean Vanden agrandit son atelier pour diversifier les services et accueillir des projets plus ambitieux."
  },
  { 
    year: "2005", 
    event: "Mattias Vanden rejoint l'entreprise familiale",
    description: "Fort de sa formation en ébénisterie, il apporte un souffle moderne tout en respectant la tradition."
  },
  { 
    year: "2015", 
    event: "Modernisation complète des équipements",
    description: "Acquisition de machines CNC et logiciels 3D pour une précision inégalée tout en conservant le travail manuel d'exception."
  },
  { 
    year: "2023", 
    event: "Plus de 1000 projets réalisés dans le Var",
    description: "L'entreprise familiale continue d'innover tout en préservant les valeurs qui font sa réputation depuis 38 ans."
  }
];

const testimonials = [
  {
    name: "Sophie Martin",
    location: "Hyères",
    rating: 5,
    text: "Mattias a transformé notre cuisine en un véritable espace de vie familial. Le travail est d'une qualité exceptionnelle.",
    project: "Cuisine sur mesure",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b142?auto=format&q=80&w=150&h=150"
  },
  {
    name: "Jean-Pierre Dubois",
    location: "Toulon", 
    rating: 5,
    text: "Un dressing parfaitement optimisé qui a révolutionné notre organisation quotidienne. Chaque détail compte.",
    project: "Dressing sur mesure",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&q=80&w=150&h=150"
  },
  {
    name: "Marie Rousseau",
    location: "Fréjus",
    rating: 5,
    text: "La bibliothèque sur mesure s'intègre parfaitement dans notre salon. Un travail d'artisan passionné.",
    project: "Bibliothèque",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&q=80&w=150&h=150"
  }
];

export function AboutPageContent() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 md:pt-28 bg-white overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#D4AF37"
        />

        <div className="absolute inset-0 wood-grain opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-beige-moderne/80 backdrop-blur-sm border border-gris-perle rounded-full px-4 py-2 mb-8"
            >
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-sm font-medium text-bleu-marine">
                NOTRE HISTOIRE
              </span>
            </motion.div>

            <h1 className="text-4xl md:text-7xl font-heading font-bold mb-6 text-bleu-marine">
              À propos de
              <span className="block text-brun-bois">
                Vanden Menuiserie
              </span>
            </h1>
            
            <TextGenerateEffect
              words="Depuis 1985, nous transformons vos espaces avec passion et savoir-faire. Découvrez l'histoire d'une entreprise familiale dédiée à l'excellence artisanale."
              className="text-center max-w-4xl mx-auto text-lg md:text-xl text-bleu-marine/70"
            />
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: "38", label: "Ans d'expérience", suffix: "" },
              { number: "1000", label: "Projets réalisés", suffix: "+" },
              { number: "100", label: "Clients satisfaits", suffix: "%" },
              { number: "10", label: "Ans de garantie", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-heading font-bold text-bleu-marine">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-sm text-bleu-marine/70">{stat.label}</div>
              </motion.div>
            ))}
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
              <motion.span 
                className="inline-block text-bleu-marine/70 font-medium mb-4 text-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                Notre Histoire
              </motion.span>
              
              <h2 className="text-4xl font-heading font-bold mb-6 text-bleu-marine">
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
            <motion.span 
              className="inline-block text-bleu-marine/70 font-medium mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Nos Valeurs
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-6">
              Les principes qui nous
              <span className="block text-bleu-marine/70">guident</span>
            </h2>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Découvrez les valeurs qui définissent notre approche artisanale 
              et notre relation avec nos clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gris-perle rounded-full mb-4 group-hover:bg-bleu-marine group-hover:text-white transition-colors">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-bleu-marine group-hover:text-brun-bois transition-colors">{value.title}</h3>
                <p className="text-bleu-marine/70 leading-relaxed">{value.description}</p>
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
            <motion.span 
              className="inline-block text-bleu-marine/70 font-medium mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Notre Parcours
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-6">
              Une histoire de
              <span className="block text-bleu-marine/70">passion</span>
            </h2>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Découvrez l'évolution de notre entreprise familiale à travers les décennies
            </p>
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
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="text-2xl font-bold text-bleu-marine mb-2">{milestone.year}</div>
                    <h3 className="text-lg font-semibold text-bleu-marine mb-2">{milestone.event}</h3>
                    <p className="text-bleu-marine/70 text-sm">{milestone.description}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-brun-bois rounded-full border-4 border-white shadow-lg" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gris-perle">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.span 
              className="inline-block text-bleu-marine/70 font-medium mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              L'Équipe
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-12">
              L'artisan derrière
              <span className="block text-bleu-marine/70">chaque création</span>
            </h2>
            
            <div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=400&h=400&auto=format&q=80"
                alt="Mattias Vanden"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2 text-bleu-marine">Mattias Vanden</h3>
            <p className="text-brun-bois mb-6 font-medium">Maître Artisan Menuisier</p>
            <div className="max-w-2xl mx-auto">
              <Quote className="w-8 h-8 text-bleu-marine/30 mb-4 mx-auto" />
              <p className="text-bleu-marine/70 leading-relaxed italic text-lg">
                "Mon objectif est de perpétuer la tradition familiale tout en innovant constamment. 
                Chaque projet est unique et mérite toute notre attention. C'est cette philosophie 
                qui guide mon travail au quotidien et qui fait la réputation de Vanden Menuiserie."
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              className="inline-block text-bleu-marine/70 font-medium mb-4 text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Témoignages
            </motion.span>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-6">
              Ils nous font
              <span className="block text-bleu-marine/70">confiance</span>
            </h2>
            
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              Découvrez les retours de nos clients qui ont fait appel à notre expertise 
              pour leurs projets de menuiserie sur mesure.
            </p>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-16"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-bleu-marine mb-2">100%</div>
                <div className="text-bleu-marine/70 text-sm">Clients satisfaits</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bleu-marine mb-2">5.0★</div>
                <div className="text-bleu-marine/70 text-sm">Note moyenne</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bleu-marine mb-2">150+</div>
                <div className="text-bleu-marine/70 text-sm">Avis positifs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-bleu-marine mb-2">38</div>
                <div className="text-bleu-marine/70 text-sm">Années d'expérience</div>
              </div>
            </div>
          </motion.div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gris-perle">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </div>
                  
                  <div className="flex-1">
                    <h4 className="font-semibold text-bleu-marine">{testimonial.name}</h4>
                    <div className="flex items-center gap-1 text-sm text-bleu-marine/60">
                      <MapPin className="w-3 h-3" />
                      {testimonial.location}
                    </div>
                  </div>
                  
                  <div className="flex gap-0.5">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
                
                <div className="mb-3">
                  <Quote className="w-6 h-6 text-gray-300 group-hover:text-brun-bois transition-colors" />
                </div>
                
                <p className="text-bleu-marine/70 leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                
                <div className="inline-block px-3 py-1 bg-gris-perle rounded-full text-xs font-medium text-bleu-marine/70">
                  {testimonial.project}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-bleu-marine relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6">
              Écrivons ensemble votre histoire
            </h2>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl mx-auto">
              Transformons ensemble vos idées en réalisations d'exception.
              Contactez-nous pour une consultation gratuite.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-beige-moderne text-bleu-marine px-8 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all inline-flex items-center gap-3"
              >
                Demander un devis gratuit
                <ArrowRight className="w-5 h-5" />
              </motion.a>

              <motion.a
                href="tel:0762144340"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-beige-moderne hover:text-bleu-marine transition-all inline-flex items-center gap-3"
              >
                <Phone className="w-5 h-5" />
                07 62 14 43 40
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}