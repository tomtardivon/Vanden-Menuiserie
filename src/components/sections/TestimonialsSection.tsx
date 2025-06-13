"use client";

import { motion } from "framer-motion";
import { Star, Quote, User, MapPin } from "lucide-react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Marie Dubois",
    location: "Hyères",
    rating: 5,
    text: "Mattias a réalisé notre cuisine sur mesure avec un professionnalisme remarquable. Le résultat dépasse nos attentes ! Chaque détail a été pensé avec soin.",
    project: "Cuisine sur mesure",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b142?auto=format&q=80&w=150&h=150"
  },
  {
    id: 2,
    name: "Pierre Laurent",
    location: "Toulon",
    rating: 5,
    text: "Travail d'une qualité exceptionnelle pour notre escalier en chêne. L'équipe est ponctuelle, soigneuse et très professionnelle. Je recommande vivement !",
    project: "Escalier en chêne massif",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&q=80&w=150&h=150"
  },
  {
    id: 3,
    name: "Sophie Martin",
    location: "Fréjus",
    rating: 5,
    text: "Mattias a transformé notre salon avec une bibliothèque sur mesure magnifique. Son expertise et ses conseils ont fait toute la différence.",
    project: "Bibliothèque sur mesure",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&q=80&w=150&h=150"
  },
  {
    id: 4,
    name: "Jean-Luc Moreau",
    location: "La Seyne-sur-Mer",
    rating: 5,
    text: "Des fenêtres en bois de qualité exceptionnelle ! L'isolation est parfaite et l'esthétique sublime. Un artisan passionné qui livre un travail parfait.",
    project: "Fenêtres bois sur mesure",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&q=80&w=150&h=150"
  },
  {
    id: 5,
    name: "Catherine Rousseau",
    location: "Draguignan",
    rating: 5,
    text: "Notre dressing est maintenant parfaitement organisé grâce à Mattias. Il a su optimiser chaque centimètre avec intelligence et goût.",
    project: "Dressing sur mesure",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=80&w=150&h=150"
  },
  {
    id: 6,
    name: "Michel Blanc",
    location: "Six-Fours-les-Plages",
    rating: 5,
    text: "Terrasse en bois exotique posée avec un soin remarquable. Le devis était précis, les délais respectés. Un professionnel de confiance !",
    project: "Terrasse en bois exotique",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&q=80&w=150&h=150"
  }
];

const TestimonialCard = ({ testimonial, index }: { testimonial: any; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
  >
    {/* Header avec avatar et infos */}
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
        <div className="absolute inset-0 flex items-center justify-center bg-gris-perle">
          <User className="w-6 h-6 text-bleu-marine/50" />
        </div>
      </div>
      
      <div className="flex-1">
        <h4 className="font-semibold text-bleu-marine">{testimonial.name}</h4>
        <div className="flex items-center gap-1 text-sm text-bleu-marine/60">
          <MapPin className="w-3 h-3" />
          {testimonial.location}
        </div>
      </div>
      
      {/* Rating */}
      <div className="flex gap-0.5">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
    </div>
    
    {/* Quote icon */}
    <div className="mb-3">
      <Quote className="w-6 h-6 text-gray-300 group-hover:text-gold transition-colors" />
    </div>
    
    {/* Testimonial text */}
    <p className="text-bleu-marine/70 leading-relaxed mb-4">
      "{testimonial.text}"
    </p>
    
    {/* Project tag */}
    <div className="inline-block px-3 py-1 bg-gris-perle rounded-full text-xs font-medium text-bleu-marine/70">
      {testimonial.project}
    </div>
  </motion.div>
);

export const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
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
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-bleu-marine mb-6">
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
              <div className="text-3xl font-bold text-bleu-marine mb-2">35</div>
              <div className="text-bleu-marine/70 text-sm">Années d'expérience</div>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-bold mb-4">
            Rejoignez nos clients satisfaits
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Parlons de votre projet et créons ensemble quelque chose d'exceptionnel 
            qui dépassera vos attentes.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-bleu-marine px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Demander un devis gratuit
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};