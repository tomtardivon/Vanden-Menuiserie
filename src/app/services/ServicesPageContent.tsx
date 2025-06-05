"use client";
import { motion } from "framer-motion";
import { ChefHat, Home, Layers, Trees, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "Cuisines sur mesure",
    description: "Conception et réalisation de cuisines équipées personnalisées avec des matériaux nobles et des finitions d'exception. Chaque cuisine est unique et adaptée à vos besoins.",
    icon: <ChefHat className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&auto=format&q=80",
    features: [
      "Conception 3D personnalisée",
      "Matériaux premium (bois massif, quartz, granit)",
      "Installation clé en main",
      "Garantie 10 ans",
      "Électroménager haut de gamme"
    ],
    href: "/services/cuisines"
  },
  {
    id: 2,
    title: "Dressing & Placards",
    description: "Solutions de rangement optimisées et design pour tous vos espaces. Dressings sur mesure, placards intégrés et aménagements intelligents.",
    icon: <Home className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&auto=format&q=80",
    features: [
      "Optimisation maximale de l'espace",
      "Éclairage LED intégré",
      "Systèmes coulissants silencieux",
      "Finitions personnalisées",
      "Accessoires de rangement premium"
    ],
    href: "/services/dressing"
  },
  {
    id: 3,
    title: "Escaliers & Garde-corps",
    description: "Escaliers sur mesure en bois massif, véritables pièces maîtresses de votre intérieur. Design contemporain ou traditionnel.",
    icon: <Layers className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&auto=format&q=80",
    features: [
      "Bois nobles sélectionnés",
      "Design sur mesure",
      "Garde-corps sécurisés",
      "Finitions artisanales",
      "Conformité aux normes"
    ],
    href: "/services/escaliers"
  },
  {
    id: 4,
    title: "Terrasses & Pergolas",
    description: "Aménagements extérieurs en bois pour profiter pleinement de votre jardin. Terrasses durables et pergolas élégantes.",
    icon: <Trees className="w-12 h-12" />,
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&auto=format&q=80",
    features: [
      "Bois exotiques résistants",
      "Traitement écologique",
      "Structure garantie 10 ans",
      "Design méditerranéen",
      "Éclairage extérieur intégré"
    ],
    href: "/services/terrasses"
  }
];

export function ServicesPageContent() {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30 z-10" />
        <Image
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=1920&h=800&auto=format&q=80"
          alt="Atelier menuiserie"
          fill
          className="object-cover"
          priority
        />
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Nos Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200"
          >
            Excellence artisanale pour tous vos projets de menuiserie
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group"
              >
                <Link href={service.href} className="block">
                  <div className="relative h-[400px] overflow-hidden rounded-2xl mb-8">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-8 left-8 text-white">
                      {service.icon}
                    </div>
                  </div>

                  <h3 className="text-3xl font-heading font-bold mb-4 group-hover:text-gray-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center text-black font-semibold group-hover:gap-4 transition-all">
                    En savoir plus
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
              Prêt à concrétiser votre projet ?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Contactez-nous pour un devis gratuit et personnalisé
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Demander un devis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="tel:0762144340"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-black text-black rounded-full hover:bg-black hover:text-white transition-all"
              >
                07 62 14 43 40
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}