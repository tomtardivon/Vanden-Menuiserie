"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ChefHat, Home, DoorOpen, Trees, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ServiceCard = ({ service, index }: { service: any; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

  return (
    <motion.div
      ref={cardRef}
      style={{ y, opacity, scale }}
      className="sticky top-24"
    >
      <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">
        <div className="grid md:grid-cols-2 gap-0">
          <div className="relative h-64 md:h-auto">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-bleu-marine/50 md:hidden" />
          </div>

          <div className="p-8 lg:p-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-brun-bois/20 to-gold/20 rounded-2xl flex items-center justify-center">
                {service.icon}
              </div>
              <span className="text-sm font-medium text-brun-bois uppercase tracking-wider">
                Expertise {index + 1}
              </span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + index * 0.1 }}
              className="text-3xl lg:text-4xl font-heading font-bold text-bleu-marine mb-4"
            >
              {service.title}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1 }}
              className="text-bleu-marine/70 leading-relaxed mb-6"
            >
              {service.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + index * 0.1 }}
              className="space-y-3 mb-8"
            >
              {service.features.map((feature: string, idx: number) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 + index * 0.1 + idx * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-[1px] bg-gold" />
                  <span className="text-sm text-bleu-marine/80">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 + index * 0.1 }}
            >
              <Link
                href={service.href}
                className="group inline-flex items-center gap-3 text-brun-bois font-semibold hover:text-gold transition-colors"
              >
                <span>Explorer ce service</span>
                <div className="w-10 h-10 rounded-full border-2 border-current flex items-center justify-center group-hover:bg-brun-bois group-hover:text-white transition-all">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"]
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

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
    <section ref={sectionRef} className="relative py-24">
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gris-perle/30 via-white to-gris-perle/30"
        style={{
          y: backgroundY,
          opacity: backgroundOpacity
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="h-[1px] bg-brun-bois mx-auto mb-8"
          />
          
          <span className="inline-block text-brun-bois font-medium mb-4 text-lg">
            NOS EXPERTISES
          </span>
          
          <h2 className="text-5xl lg:text-7xl font-heading font-bold text-bleu-marine mb-6">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Un savoir-faire
            </motion.span>
            <motion.span
              className="block text-transparent bg-clip-text bg-gradient-to-r from-brun-bois to-gold"
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
            whileInView={{ width: 120 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-[1px] bg-brun-bois mx-auto mt-8"
          />
        </motion.div>

        <div className="space-y-32">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-32 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-2xl text-bleu-marine/70 mb-8">
            Prêt à transformer votre espace ?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-4 px-8 py-4 bg-bleu-marine text-white rounded-full font-semibold text-lg hover:bg-bleu-marine/90 transition-colors"
          >
            <span>Démarrer votre projet</span>
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};