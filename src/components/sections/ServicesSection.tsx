"use client";
import { motion } from "framer-motion";
import { 
  ChefHat, 
  Home, 
  DoorOpen, 
  Trees,
  ArrowRight,
  Star
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ 
  service, 
  index 
}: { 
  service: any; 
  index: number 
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500"
  >
    {/* Image Container */}
    <div className="relative h-64 overflow-hidden">
      <Image
        src={service.image}
        alt={service.title}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      
      {/* Icon Badge */}
      <div className="absolute top-4 left-4 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center shadow-lg">
        {service.icon}
      </div>
      
      {/* Rating */}
      <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
        <span className="text-sm font-semibold text-gray-900">5.0</span>
      </div>
    </div>
    
    {/* Content */}
    <div className="p-6">
      <h3 className="text-xl font-heading font-bold text-gray-900 mb-3 group-hover:text-wood-dark transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 leading-relaxed mb-4">
        {service.description}
      </p>
      
      {/* Features */}
      <ul className="space-y-2 mb-6">
        {service.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
            <div className="w-1.5 h-1.5 bg-gold rounded-full"></div>
            {feature}
          </li>
        ))}
      </ul>
      
      {/* CTA */}
      <Link
        href={service.href}
        className="inline-flex items-center gap-2 text-wood-dark font-semibold hover:text-gold transition-colors group/cta"
      >
        <span>En savoir plus</span>
        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
      </Link>
    </div>
    
    {/* Hover Effect */}
    <div className="absolute inset-0 bg-gradient-to-t from-wood-dark/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
  </motion.div>
);

export const ServicesSection = () => {
  const services = [
    {
      title: "Cuisines Sur Mesure",
      description: "Conception et réalisation de cuisines équipées personnalisées avec des matériaux nobles et des finitions d'exception",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&auto=format&q=80",
      icon: <ChefHat className="h-6 w-6 text-wood-dark" />,
      href: "/services/cuisine-sur-mesure",
      features: ["Plans 3D détaillés", "Matériaux nobles", "Installation clé en main"]
    },
    {
      title: "Dressing & Placards",
      description: "Solutions de rangement optimisées et design pour tous vos espaces",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=400&auto=format&q=80",
      icon: <Home className="h-6 w-6 text-wood-dark" />,
      href: "/services/dressing-placards",
      features: ["Optimisation espace", "Finitions premium", "Design personnalisé"]
    },
    {
      title: "Escaliers & Garde-Corps",
      description: "Escaliers sur mesure en bois massif, pièces maîtresses de votre intérieur",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=300&h=400&auto=format&q=80",
      icon: <Home className="h-6 w-6 text-wood-dark" />,
      href: "/services/escaliers-bois",
      features: ["Bois nobles", "Poses traditionnelles", "Finitions exceptionnelles"]
    },
    {
      title: "Fenêtres & Portes",
      description: "Menuiseries extérieures performantes et esthétiques pour votre habitat",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=250&auto=format&q=80",
      icon: <DoorOpen className="h-6 w-6 text-wood-dark" />,
      href: "/services/fenetres-portes",
      features: ["Isolation thermique", "Sécurité renforcée", "Design contemporain"]
    },
    {
      title: "Terrasses & Pergolas",
      description: "Aménagements extérieurs en bois pour profiter de votre jardin",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=250&auto=format&q=80",
      icon: <Trees className="h-6 w-6 text-wood-dark" />,
      href: "/services/terrasses-pergolas",
      features: ["Essences résistantes", "Traitement écologique", "Design méditerranéen"]
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête section */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-gray-600 font-medium mb-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Nos Expertises
          </motion.span>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Un savoir-faire
            <span className="block text-gray-600">d'exception</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            De la conception à la pose, chaque projet bénéficie de notre attention 
            méticuleuse aux détails et de notre passion pour l'artisanat de qualité.
          </p>
        </motion.div>

        {/* Grid des services */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Bannière de confiance */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
        >
          <div className="inline-flex items-center gap-8 bg-gradient-to-r from-gray-50 to-gray-100 px-10 py-6 rounded-2xl shadow-lg">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🏆</span>
              <span className="text-gray-900 font-semibold">
                100% de clients satisfaits
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🛡️</span>
              <span className="text-gray-900 font-semibold">
                Garantie décennale
              </span>
            </div>
            <div className="hidden md:block w-px h-8 bg-gray-200"></div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">⚡</span>
              <span className="text-gray-900 font-semibold">
                Devis sous 24h
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};