"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { ChefHat, Home, DoorOpen, Trees, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const ServicesSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      title: "Cuisines Sur Mesure",
      description: "Conception et réalisation de cuisines équipées personnalisées",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&auto=format&q=80",
      icon: <ChefHat className="h-8 w-8" />,
      href: "/services/cuisine-sur-mesure",
      className: "col-span-2 row-span-2",
      features: ["Plans 3D", "Matériaux nobles", "Installation clé en main"]
    },
    {
      title: "Dressing & Placards",
      description: "Solutions de rangement optimisées",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&auto=format&q=80",
      icon: <Home className="h-8 w-8" />,
      href: "/services/dressing-placards",
      className: "col-span-1 row-span-1",
      features: ["Optimisation", "Design sur mesure"]
    },
    {
      title: "Escaliers & Garde-Corps",
      description: "Escaliers sur mesure en bois massif",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=400&h=400&auto=format&q=80",
      icon: <Home className="h-8 w-8" />,
      href: "/services/escaliers-bois",
      className: "col-span-1 row-span-2",
      features: ["Bois nobles", "Finitions exceptionnelles"]
    },
    {
      title: "Fenêtres & Portes",
      description: "Menuiseries extérieures performantes",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=400&auto=format&q=80",
      icon: <DoorOpen className="h-8 w-8" />,
      href: "/services/fenetres-portes",
      className: "col-span-1 row-span-1",
      features: ["Isolation thermique", "Sécurité"]
    },
    {
      title: "Terrasses & Pergolas",
      description: "Aménagements extérieurs en bois",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&auto=format&q=80",
      icon: <Trees className="h-8 w-8" />,
      href: "/services/terrasses-pergolas",
      className: "col-span-2 row-span-1",
      features: ["Essences résistantes", "Design méditerranéen"]
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-brun-bois font-medium mb-4 text-lg tracking-wider">
            NOS EXPERTISES
          </span>
          
          <h2 className="text-5xl lg:text-7xl font-heading font-bold text-bleu-marine mb-6">
            Un savoir-faire
            <span className="block text-brun-bois">
              d'exception
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-4 grid-rows-3 gap-6 h-[800px]">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className={cn(
                "relative group overflow-hidden rounded-3xl cursor-pointer",
                service.className
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="absolute inset-0">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                <motion.div
                  className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white"
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    rotate: hoveredIndex === index ? 360 : 0
                  }}
                  transition={{ duration: 0.6 }}
                >
                  {service.icon}
                </motion.div>

                <div>
                  <motion.h3
                    className="text-2xl lg:text-3xl font-heading font-bold text-white mb-2"
                    animate={{
                      x: hoveredIndex === index ? 10 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-white/80 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0,
                      y: hoveredIndex === index ? 0 : 20
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {service.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0
                    }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {service.features.map((feature, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs text-white">
                        {feature}
                      </span>
                    ))}
                  </motion.div>

                  <Link href={service.href} className="inline-flex items-center gap-2 text-white font-semibold group/link">
                    <span>Découvrir</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-2" />
                  </Link>
                </div>
              </div>

              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-brun-bois/20 to-gold/20"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: hoveredIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};