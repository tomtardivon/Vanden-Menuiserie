"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChefHat, Home, DoorOpen, Trees, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const ServicesSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [progress, setProgress] = useState(0);

  const services = [
    {
      title: "Cuisines Sur Mesure",
      subtitle: "L'art de la cuisine personnalisée",
      description: "Conception et réalisation de cuisines équipées personnalisées avec des matériaux nobles et des finitions d'exception",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&auto=format&q=80",
      icon: <ChefHat className="h-8 w-8" />,
      href: "/services/cuisine-sur-mesure",
      features: ["Plans 3D détaillés", "Matériaux nobles", "Installation clé en main", "Garantie 10 ans"],
      color: "from-brun-bois/20 to-gold/20"
    },
    {
      title: "Dressing & Placards",
      subtitle: "Optimisation et élégance",
      description: "Solutions de rangement optimisées et design pour tous vos espaces",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1200&h=800&auto=format&q=80",
      icon: <Home className="h-8 w-8" />,
      href: "/services/dressing-placards",
      features: ["Optimisation espace", "Finitions premium", "Design personnalisé", "Aménagement sur mesure"],
      color: "from-bleu-marine/20 to-brun-bois/20"
    },
    {
      title: "Escaliers & Garde-Corps",
      subtitle: "Pièces maîtresses architecturales",
      description: "Escaliers sur mesure en bois massif, véritables œuvres d'art",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=1200&h=800&auto=format&q=80",
      icon: <Home className="h-8 w-8" />,
      href: "/services/escaliers-bois",
      features: ["Bois nobles", "Poses traditionnelles", "Finitions exceptionnelles", "Design unique"],
      color: "from-gold/20 to-brun-bois/20"
    },
    {
      title: "Fenêtres & Portes",
      subtitle: "Performance et esthétique",
      description: "Menuiseries extérieures performantes et esthétiques pour votre habitat",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=800&auto=format&q=80",
      icon: <DoorOpen className="h-8 w-8" />,
      href: "/services/fenetres-portes",
      features: ["Isolation thermique", "Sécurité renforcée", "Design contemporain", "Économies d'énergie"],
      color: "from-brun-bois/20 to-bleu-marine/20"
    },
    {
      title: "Terrasses & Pergolas",
      subtitle: "Espaces de vie extérieurs",
      description: "Aménagements extérieurs en bois pour profiter de votre jardin",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&h=800&auto=format&q=80",
      icon: <Trees className="h-8 w-8" />,
      href: "/services/terrasses-pergolas",
      features: ["Essences résistantes", "Traitement écologique", "Design méditerranéen", "Durabilité garantie"],
      color: "from-vert-nature/20 to-brun-bois/20"
    }
  ];

  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 100);

    return () => {
      clearInterval(interval);
      clearInterval(progressInterval);
    };
  }, [currentIndex, isAutoPlay, services.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + services.length) % services.length);
    setProgress(0);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % services.length);
    setProgress(0);
  };

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brun-bois font-medium mb-4 text-lg">
            NOS EXPERTISES
          </span>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-bleu-marine">
            Un savoir-faire d'exception
          </h2>
        </motion.div>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className="order-2 lg:order-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className={`inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r ${services[currentIndex].color} mb-6`}
                >
                  {services[currentIndex].icon}
                  <span className="text-sm font-semibold text-bleu-marine">
                    Service {currentIndex + 1}/{services.length}
                  </span>
                </motion.div>

                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-3xl lg:text-4xl font-heading font-bold text-bleu-marine mb-2"
                >
                  {services[currentIndex].title}
                </motion.h3>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-xl text-brun-bois mb-4"
                >
                  {services[currentIndex].subtitle}
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-bleu-marine/70 leading-relaxed mb-8"
                >
                  {services[currentIndex].description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="grid grid-cols-2 gap-4 mb-8"
                >
                  {services[currentIndex].features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-gold rounded-full" />
                      <span className="text-sm text-bleu-marine/80">{feature}</span>
                    </div>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                >
                  <Link
                    href={services[currentIndex].href}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-brun-bois text-white rounded-full font-semibold hover:bg-brun-bois/90 transition-colors"
                  >
                    <span>Découvrir ce service</span>
                    <ChevronRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>

              <div className="order-1 lg:order-2 relative h-[400px] lg:h-[500px]">
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="relative h-full rounded-3xl overflow-hidden shadow-2xl"
                >
                  <Image
                    src={services[currentIndex].image}
                    alt={services[currentIndex].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </motion.div>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.8, type: "spring" }}
                  className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold/20 rounded-full blur-3xl"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-between mt-12">
            <div className="flex items-center gap-4">
              <button
                onClick={goToPrevious}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-5 h-5 text-bleu-marine" />
              </button>

              <button
                onClick={goToNext}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-5 h-5 text-bleu-marine" />
              </button>

              <button
                onClick={() => setIsAutoPlay(!isAutoPlay)}
                className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow ml-2"
              >
                {isAutoPlay ? (
                  <Pause className="w-5 h-5 text-bleu-marine" />
                ) : (
                  <Play className="w-5 h-5 text-bleu-marine" />
                )}
              </button>
            </div>

            <div className="flex items-center gap-2">
              {services.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className="relative w-16 h-1.5 bg-gris-perle rounded-full overflow-hidden"
                >
                  {index === currentIndex && (
                    <motion.div
                      className="absolute inset-0 bg-brun-bois"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                    />
                  )}
                  {index < currentIndex && (
                    <div className="absolute inset-0 bg-brun-bois" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};