"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { 
  ChefHat, 
  Home, 
  DoorOpen, 
  Trees,
  ArrowUpRight,
  Plus
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ServicesSection = () => {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);

  const services = [
    {
      title: "Cuisines Sur Mesure",
      description: "Conception et réalisation de cuisines équipées personnalisées avec des matériaux nobles et des finitions d'exception",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&auto=format&q=80",
      icon: <ChefHat className="h-6 w-6 text-brun-bois" />,
      href: "/services/cuisine-sur-mesure",
      features: ["Plans 3D détaillés", "Matériaux nobles", "Installation clé en main"]
    },
    {
      title: "Dressing & Placards",
      description: "Solutions de rangement optimisées et design pour tous vos espaces",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&auto=format&q=80",
      icon: <Home className="h-6 w-6 text-brun-bois" />,
      href: "/services/dressing-placards",
      features: ["Optimisation espace", "Finitions premium", "Design personnalisé"]
    },
    {
      title: "Escaliers & Garde-Corps",
      description: "Escaliers sur mesure en bois massif, pièces maîtresses de votre intérieur",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=800&h=600&auto=format&q=80",
      icon: <Home className="h-6 w-6 text-brun-bois" />,
      href: "/services/escaliers-bois",
      features: ["Bois nobles", "Poses traditionnelles", "Finitions exceptionnelles"]
    },
    {
      title: "Fenêtres & Portes",
      description: "Menuiseries extérieures performantes et esthétiques pour votre habitat",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&auto=format&q=80",
      icon: <DoorOpen className="h-6 w-6 text-brun-bois" />,
      href: "/services/fenetres-portes",
      features: ["Isolation thermique", "Sécurité renforcée", "Design contemporain"]
    },
    {
      title: "Terrasses & Pergolas",
      description: "Aménagements extérieurs en bois pour profiter de votre jardin",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&auto=format&q=80",
      icon: <Trees className="h-6 w-6 text-brun-bois" />,
      href: "/services/terrasses-pergolas",
      features: ["Essences résistantes", "Traitement écologique", "Design méditerranéen"]
    }
  ];

  return (
    <section className="relative py-16 lg:py-24 bg-gradient-to-b from-gris-perle/30 via-white to-gris-perle/30">
      <div className="relative max-w-6xl mx-auto px-4">
        {/* En-tête */}
        <motion.div
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[1px] bg-brun-bois mx-auto mb-6"
          />
          
          <span className="inline-block text-brun-bois font-medium mb-3 text-base lg:text-lg">
            NOS EXPERTISES
          </span>
          
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-heading font-bold text-bleu-marine mb-4 lg:mb-6 leading-tight">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Un savoir-faire
            </motion.span>
            <motion.span
              className="block text-brun-bois"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              d'exception
            </motion.span>
          </h2>

          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 80 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-brun-bois mx-auto mt-6"
          />
        </motion.div>

        {/* Grid Compacte avec Expansion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${
                expandedCard === index ? 'md:col-span-2 lg:col-span-3' : ''
              }`}
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
              layout
            >
              <div className={`${expandedCard === index ? 'grid lg:grid-cols-2 gap-0' : ''}`}>
                {/* Image */}
                <div className={`relative overflow-hidden ${expandedCard === index ? 'h-64 lg:h-auto' : 'h-48'}`}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-bleu-marine/60" />
                  
                  {/* Icon Badge */}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
                    {service.icon}
                  </div>
                  
                  {/* Expand Button */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                    <motion.div
                      animate={{ rotate: expandedCard === index ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Plus className="w-5 h-5 text-bleu-marine" />
                    </motion.div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-bleu-marine mb-3 group-hover:text-brun-bois transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className={`text-bleu-marine/70 leading-relaxed mb-4 ${
                    expandedCard === index ? '' : 'line-clamp-2'
                  }`}>
                    {service.description}
                  </p>
                  
                  {/* Features - Visible seulement quand expandé */}
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2 mb-6"
                    >
                      {service.features.map((feature: string, idx: number) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-gold rounded-full"></div>
                          <span className="text-sm text-bleu-marine/80">{feature}</span>
                        </div>
                      ))}
                    </motion.div>
                  )}
                  
                  {/* CTA - Visible seulement quand expandé */}
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.2 }}
                    >
                      <Link
                        href={service.href}
                        className="inline-flex items-center gap-2 text-brun-bois font-semibold hover:text-gold transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <span>Explorer ce service</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instructions */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-bleu-marine/60">
            Cliquez sur une carte pour voir les détails
          </p>
        </motion.div>

        {/* CTA final */}
        <motion.div
          className="mt-16 lg:mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-xl lg:text-2xl text-bleu-marine/70 mb-6 lg:mb-8">
            Prêt à transformer votre espace ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-3 lg:gap-4 px-6 lg:px-8 py-3 lg:py-4 bg-bleu-marine text-white rounded-full font-semibold text-base lg:text-lg hover:bg-bleu-marine/90 transition-colors"
          >
            <span>Démarrer votre projet</span>
            <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};