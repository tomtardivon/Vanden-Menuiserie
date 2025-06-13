"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ChefHat, Home, DoorOpen, Trees, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Card3D = ({ service, index }: { service: any; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      className="relative h-[450px] w-full perspective-1000"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="relative h-full w-full rounded-3xl overflow-hidden bg-gradient-to-br from-white to-gris-perle shadow-2xl transform-gpu transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)]">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-white/10" />
        
        <div className="relative h-48 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 transform-gpu"
            style={{
              transform: isHovered ? "scale(1.1) translateZ(50px)" : "scale(1) translateZ(0)"
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          <motion.div
            className="absolute top-4 left-4 w-14 h-14 bg-white/90 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-xl"
            animate={{
              rotate: isHovered ? 360 : 0,
              scale: isHovered ? 1.1 : 1
            }}
            transition={{ duration: 0.6 }}
            style={{ transformStyle: "preserve-3d", translateZ: 60 }}
          >
            {service.icon}
          </motion.div>

          <motion.div
            className="absolute top-4 right-4"
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: isHovered ? 1 : 0,
              scale: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <Sparkles className="w-6 h-6 text-gold" />
          </motion.div>
        </div>

        <div className="p-8">
          <motion.h3
            className="text-2xl font-heading font-bold text-bleu-marine mb-3"
            style={{
              transformStyle: "preserve-3d",
              translateZ: isHovered ? 30 : 0
            }}
          >
            {service.title}
          </motion.h3>
          
          <motion.p
            className="text-bleu-marine/70 mb-6 leading-relaxed"
            style={{
              transformStyle: "preserve-3d",
              translateZ: isHovered ? 20 : 0
            }}
          >
            {service.description}
          </motion.p>

          <motion.div
            className="flex flex-wrap gap-2 mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {service.features.map((feature: string, idx: number) => (
              <motion.span
                key={idx}
                className="px-3 py-1 bg-gradient-to-r from-brun-bois/10 to-gold/10 rounded-full text-xs text-bleu-marine font-medium"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                {feature}
              </motion.span>
            ))}
          </motion.div>

          <Link
            href={service.href}
            className="inline-flex items-center gap-2 text-brun-bois font-semibold hover:text-gold transition-colors group"
          >
            <span>En savoir plus</span>
            <motion.span
              animate={{ x: isHovered ? 5 : 0 }}
              transition={{ duration: 0.2 }}
            >
              →
            </motion.span>
          </Link>
        </div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brun-bois to-gold"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ transformOrigin: "left" }}
        />
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const services = [
    {
      title: "Cuisines Sur Mesure",
      description: "Conception et réalisation de cuisines équipées personnalisées avec des matériaux nobles",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=300&auto=format&q=80",
      icon: <ChefHat className="h-7 w-7 text-brun-bois" />,
      href: "/services/cuisine-sur-mesure",
      features: ["Plans 3D", "Matériaux nobles", "Installation"]
    },
    {
      title: "Dressing & Placards",
      description: "Solutions de rangement optimisées et design pour tous vos espaces",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=400&auto=format&q=80",
      icon: <Home className="h-7 w-7 text-brun-bois" />,
      href: "/services/dressing-placards",
      features: ["Optimisation", "Design", "Sur mesure"]
    },
    {
      title: "Escaliers & Garde-Corps",
      description: "Escaliers sur mesure en bois massif, pièces maîtresses de votre intérieur",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=300&h=400&auto=format&q=80",
      icon: <Home className="h-7 w-7 text-brun-bois" />,
      href: "/services/escaliers-bois",
      features: ["Bois nobles", "Tradition", "Excellence"]
    },
    {
      title: "Fenêtres & Portes",
      description: "Menuiseries extérieures performantes et esthétiques pour votre habitat",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=250&auto=format&q=80",
      icon: <DoorOpen className="h-7 w-7 text-brun-bois" />,
      href: "/services/fenetres-portes",
      features: ["Isolation", "Sécurité", "Design"]
    },
    {
      title: "Terrasses & Pergolas",
      description: "Aménagements extérieurs en bois pour profiter de votre jardin",
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=400&h=250&auto=format&q=80",
      icon: <Trees className="h-7 w-7 text-brun-bois" />,
      href: "/services/terrasses-pergolas",
      features: ["Résistance", "Écologie", "Méditerranéen"]
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block text-brun-bois/80 font-medium mb-4 text-lg tracking-widest uppercase"
            initial={{ opacity: 0, letterSpacing: "0.1em" }}
            whileInView={{ opacity: 1, letterSpacing: "0.2em" }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            Nos Expertises
          </motion.span>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-bleu-marine mb-6">
            Un savoir-faire
            <motion.span 
              className="block"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              d'exception
            </motion.span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card3D key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
        >
          <Link
            href="/services"
            className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-brun-bois to-brun-bois/90 text-white rounded-full font-semibold text-lg hover:shadow-2xl transition-all duration-300"
          >
            <span>Découvrir tous nos services</span>
            <motion.span
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              →
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};