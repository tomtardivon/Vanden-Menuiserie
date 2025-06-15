"use client";
import { motion, useAnimationControls } from "framer-motion";
import { useState, useEffect } from "react";
import { ChefHat, Home, DoorOpen, Trees, Sparkles, Eye, Heart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const controls = useAnimationControls();

  const services = [
    {
      title: "Cuisines Sur Mesure",
      description: "Conception et réalisation de cuisines équipées personnalisées avec des matériaux nobles et des finitions d'exception",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&auto=format&q=80",
      icon: <ChefHat className="h-6 w-6" />,
      href: "/services/cuisine-sur-mesure",
      features: ["Plans 3D détaillés", "Matériaux nobles", "Installation clé en main"],
      stats: { projects: "500+", satisfaction: "100%", years: "15 ans" },
      accent: "from-amber-500 to-orange-500"
    },
    {
      title: "Dressing & Placards",
      description: "Solutions de rangement optimisées et design pour tous vos espaces",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&auto=format&q=80",
      icon: <Home className="h-6 w-6" />,
      href: "/services/dressing-placards",
      features: ["Optimisation espace", "Finitions premium", "Design personnalisé"],
      stats: { projects: "300+", satisfaction: "98%", years: "12 ans" },
      accent: "from-purple-500 to-pink-500"
    },
    {
      title: "Escaliers & Garde-Corps",
      description: "Escaliers sur mesure en bois massif, pièces maîtresses de votre intérieur",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&h=800&auto=format&q=80",
      icon: <Home className="h-6 w-6" />,
      href: "/services/escaliers-bois",
      features: ["Bois nobles", "Poses traditionnelles", "Finitions exceptionnelles"],
      stats: { projects: "200+", satisfaction: "100%", years: "20 ans" },
      accent: "from-blue-500 to-cyan-500"
    },
    {
      title: "Fenêtres & Portes",
      description: "Menuiseries extérieures performantes et esthétiques pour votre habitat",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=800&auto=format&q=80",
      icon: <DoorOpen className="h-6 w-6" />,
      href: "/services/fenetres-portes",
      features: ["Isolation thermique", "Sécurité renforcée", "Design contemporain"],
      stats: { projects: "800+", satisfaction: "99%", years: "25 ans" },
      accent: "from-green-500 to-emerald-500"
    },
    {
      title: "Terrasses & Pergolas",
      description: "Aménagements extérieurs en bois pour profiter de votre jardin",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=800&auto=format&q=80",
      icon: <Trees className="h-6 w-6" />,
      href: "/services/terrasses-pergolas",
      features: ["Essences résistantes", "Traitement écologique", "Design méditerranéen"],
      stats: { projects: "150+", satisfaction: "100%", years: "10 ans" },
      accent: "from-teal-500 to-green-500"
    }
  ];

  useEffect(() => {
    controls.start({
      y: [0, -10, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    });
  }, [controls]);

  return (
    <section className="py-24 bg-gradient-to-b from-white via-gris-perle/20 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            animate={controls}
          >
            <Sparkles className="w-5 h-5 text-gold" />
            <span className="text-brun-bois font-medium text-lg uppercase tracking-wider">
              Nos Expertises
            </span>
            <Sparkles className="w-5 h-5 text-gold" />
          </motion.div>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-bleu-marine mb-6">
            Un savoir-faire
            <span className="block">d'exception</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                onMouseEnter={() => {
                  setSelectedService(index);
                  setIsHovering(true);
                }}
                onMouseLeave={() => setIsHovering(false)}
                onClick={() => setSelectedService(index)}
                className={`
                  relative p-6 rounded-2xl cursor-pointer transition-all duration-500
                  ${selectedService === index 
                    ? 'bg-white shadow-2xl scale-105' 
                    : 'bg-white/50 hover:bg-white hover:shadow-xl'
                  }
                `}
              >
                <div className="flex items-center gap-4">
                  <motion.div
                    className={`
                      w-14 h-14 rounded-2xl flex items-center justify-center
                      bg-gradient-to-br ${service.accent} text-white
                    `}
                    animate={{
                      rotate: selectedService === index ? 360 : 0,
                      scale: selectedService === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    {service.icon}
                  </motion.div>

                  <div className="flex-1">
                    <h3 className="text-xl font-heading font-bold text-bleu-marine mb-1">
                      {service.title}
                    </h3>
                    <p className="text-sm text-bleu-marine/70 line-clamp-1">
                      {service.description}
                    </p>
                  </div>

                  <motion.div
                    animate={{
                      x: selectedService === index ? 0 : -10,
                      opacity: selectedService === index ? 1 : 0.5
                    }}
                    className="text-brun-bois"
                  >
                    →
                  </motion.div>
                </div>

                {selectedService === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-4 pt-4 border-t border-gris-perle"
                  >
                    <div className="flex gap-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4 text-bleu-marine/50" />
                        <span className="text-bleu-marine/70">{service.stats.projects}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500/50" />
                        <span className="text-bleu-marine/70">{service.stats.satisfaction}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-gold/50" />
                        <span className="text-bleu-marine/70">{service.stats.years}</span>
                      </div>
                    </div>
                  </motion.div>
                )}

                {selectedService === index && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${service.accent} opacity-5 rounded-2xl`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </motion.div>
            ))}
          </div>

          <div className="relative h-[600px]">
            <motion.div
              className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl"
              animate={{
                scale: isHovering ? 1.02 : 1
              }}
              transition={{ duration: 0.3 }}
            >
              <Image
                src={services[selectedService].image}
                alt={services[selectedService].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </motion.div>

            <motion.div
              className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-2xl p-6 shadow-xl"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h4 className="text-xl font-heading font-bold text-bleu-marine mb-3">
                {services[selectedService].title}
              </h4>
              
              <p className="text-bleu-marine/70 text-sm mb-4">
                {services[selectedService].description}
              </p>

              <div className="grid grid-cols-3 gap-3 mb-4">
                {services[selectedService].features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + idx * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-2 h-2 bg-gold rounded-full mx-auto mb-1" />
                    <span className="text-xs text-bleu-marine/80">{feature}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                href={services[selectedService].href}
                className={`
                  inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-semibold
                  bg-gradient-to-r ${services[selectedService].accent} hover:shadow-lg transition-all
                `}
              >
                <span>Explorer ce service</span>
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </Link>
            </motion.div>

            <motion.div
              className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-gold/30 to-brun-bois/30 rounded-full blur-3xl"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};