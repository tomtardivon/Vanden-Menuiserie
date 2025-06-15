"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { 
  ChefHat, 
  Home, 
  DoorOpen, 
  Trees,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

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

  const nextService = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
  };

  const prevService = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-24 bg-gradient-to-b from-gris-perle/30 via-white to-gris-perle/30">
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

        {/* Carrousel Horizontal */}
        <div className="relative">
          <motion.div 
            className="overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex transition-transform duration-500 ease-in-out"
              animate={{ x: `${-currentIndex * 100}%` }}
            >
              {services.map((service, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl mx-4">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative h-56 lg:h-96">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-bleu-marine/50 lg:hidden" />
                      </div>

                      <div className="p-6 lg:p-10 flex flex-col justify-center">
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 }}
                          className="inline-flex items-center gap-2 lg:gap-3 mb-4 lg:mb-6"
                        >
                          <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-brun-bois/20 to-gold/20 rounded-xl lg:rounded-2xl flex items-center justify-center">
                            {service.icon}
                          </div>
                          <span className="text-xs lg:text-sm font-medium text-brun-bois uppercase tracking-wider">
                            Expertise {index + 1}
                          </span>
                        </motion.div>

                        <motion.h3
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.4 }}
                          className="text-2xl lg:text-3xl xl:text-4xl font-heading font-bold text-bleu-marine mb-3 lg:mb-4 leading-tight"
                        >
                          {service.title}
                        </motion.h3>

                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 }}
                          className="text-bleu-marine/70 leading-relaxed mb-4 lg:mb-6 text-sm lg:text-base"
                        >
                          {service.description}
                        </motion.p>

                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="space-y-2 lg:space-y-3 mb-6 lg:mb-8"
                        >
                          {service.features.map((feature: string, idx: number) => (
                            <motion.div
                              key={idx}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.7 + idx * 0.1 }}
                              className="flex items-center gap-2 lg:gap-3"
                            >
                              <div className="w-6 lg:w-8 h-[1px] bg-gold" />
                              <span className="text-xs lg:text-sm text-bleu-marine/80">{feature}</span>
                            </motion.div>
                          ))}
                        </motion.div>

                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.8 }}
                        >
                          <Link
                            href={service.href}
                            className="group inline-flex items-center gap-2 lg:gap-3 text-brun-bois font-semibold hover:text-gold transition-colors text-sm lg:text-base"
                          >
                            <span>Explorer ce service</span>
                            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-brun-bois group-hover:text-white transition-all">
                              <ArrowUpRight className="w-3 h-3 lg:w-4 lg:h-4" />
                            </div>
                          </Link>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Contrôles */}
          <div className="flex items-center justify-between mt-8">
            <button
              onClick={prevService}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow group"
            >
              <ChevronLeft className="w-5 h-5 text-bleu-marine group-hover:text-brun-bois transition-colors" />
            </button>

            {/* Indicateurs */}
            <div className="flex gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex 
                      ? 'bg-brun-bois scale-125' 
                      : 'bg-gris-perle hover:bg-brun-bois/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextService}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow group"
            >
              <ChevronRight className="w-5 h-5 text-bleu-marine group-hover:text-brun-bois transition-colors" />
            </button>
          </div>
        </div>

        {/* CTA final */}
        <motion.div
          className="mt-24 lg:mt-32 text-center"
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