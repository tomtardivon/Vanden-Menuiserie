"use client";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChefHat,
  Home,
  DoorOpen,
  Hammer,
  Layers,
  ArrowRight,
  Check,
  Star,
  Quote,
  Calendar,
  MapPin,
  Award,
  X,
  ZoomIn
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Spotlight } from "@/components/ui/aceternity/spotlight";

const services = [
  {
    id: "cuisine",
    title: "Cuisines sur mesure",
    subtitle: "L'art de vivre à la française",
    description: "Conception et réalisation de cuisines équipées personnalisées alliant fonctionnalité et esthétique. Chaque cuisine est unique, pensée selon vos habitudes de vie et vos goûts.",
    icon: <ChefHat className="w-8 h-8" />,
    images: [
      "/projet/cuisine/cuisine-moderne-ilot.jpg",
      "/projet/cuisine2/cuisine-contemporaine-vue-generale.jpg",
      "/projet/cuisine3/cuisine-familiale-ensemble.jpg"
    ],
    mainImage: "/projet/cuisine/cuisine-moderne-ilot.jpg",
    features: [
      "Conception 3D avec plans détaillés",
      "Matériaux nobles : chêne massif, quartz, granit",
      "Électroménager haut de gamme intégré",
      "Îlot central multifonction",
      "Éclairage LED sous meubles",
      "Installation clé en main",
      "Garantie 10 ans pièces et main d'œuvre"
    ],
    process: [
      "Visite technique et prise de mesures",
      "Conception 3D personnalisée",
      "Choix des matériaux et finitions",
      "Fabrication en atelier",
      "Installation et mise en service"
    ],
    duration: "3-4 semaines",
    priceRange: "À partir de 8 000€",
    testimonial: {
      text: "Notre cuisine a été transformée en véritable espace de vie familial. Mattias a su allier nos contraintes techniques à nos envies esthétiques.",
      author: "Famille Martin",
      location: "Hyères"
    }
  },
  {
    id: "dressing",
    title: "Dressings & Placards",
    subtitle: "Optimisation et élégance",
    description: "Solutions de rangement sur mesure pour optimiser chaque centimètre. Dressings walk-in, placards intégrés et aménagements intelligents avec finitions soignées.",
    icon: <Home className="w-8 h-8" />,
    images: [
      "/projet/dressing/dressing-sur-mesure-vue.jpg",
      "/projet/dressing3/dressing-moderne-led.jpg",
      "/projet/placard/placard-ouvert.jpg"
    ],
    mainImage: "/projet/dressing/dressing-sur-mesure-vue.jpg",
    features: [
      "Optimisation maximale de l'espace",
      "Éclairage LED avec détecteur de mouvement",
      "Tiroirs à fermeture douce",
      "Penderies modulables",
      "Miroirs intégrés",
      "Accessoires de rangement premium",
      "Finitions personnalisées"
    ],
    process: [
      "Analyse de vos besoins de rangement",
      "Étude d'optimisation 3D",
      "Sélection des aménagements",
      "Fabrication sur mesure",
      "Pose et réglages finaux"
    ],
    duration: "2-3 semaines",
    priceRange: "À partir de 3 500€",
    testimonial: {
      text: "Un dressing parfaitement pensé qui a révolutionné notre organisation quotidienne. Chaque détail a été étudié.",
      author: "Sophie et Laurent",
      location: "Fréjus"
    }
  },
  {
    id: "portes",
    title: "Portes & Cloisons",
    subtitle: "Style et fonctionnalité",
    description: "Portes intérieures et extérieures, cloisons décoratifs, portes coulissantes et battantes. Du style traditionnel au design contemporain.",
    icon: <DoorOpen className="w-8 h-8" />,
    images: [
      "/projet/porte-style-verriere/porte-verriere-vue.jpg",
      "/projet/porte-galandage/porte-galandage-ouverte.jpg",
      "/projet/portes-interieures/porte-interieure-chambre.jpg"
    ],
    mainImage: "/projet/porte-style-verriere/porte-verriere-vue.jpg",
    features: [
      "Portes style verrière industrielle",
      "Portes à galandage gain de place",
      "Bois massif ou composite",
      "Vitrages sur mesure",
      "Quincaillerie haut de gamme",
      "Isolation thermique et phonique",
      "Finitions personnalisées"
    ],
    process: [
      "Relevé de mesures précis",
      "Choix du style et des matériaux",
      "Fabrication en atelier",
      "Préparation des ouvertures",
      "Pose et réglages"
    ],
    duration: "1-2 semaines",
    priceRange: "À partir de 800€",
    testimonial: {
      text: "La porte verrière a complètement transformé notre intérieur en apportant luminosité et modernité.",
      author: "Marie-Claire",
      location: "Toulon"
    }
  },
  {
    id: "meubles",
    title: "Meubles sur mesure",
    subtitle: "Créations uniques",
    description: "Bibliothèques, meubles TV, bureaux, commodes, meubles de salle de bain... Chaque meuble est conçu spécifiquement pour votre espace et vos besoins.",
    icon: <Hammer className="w-8 h-8" />,
    images: [
      "/projet/bibliotheque/bibliotheque-complete.jpg",
      "/projet/meuble-vasque/meuble-vasque-moderne.jpg",
      "/projet/cave-a-vins-sur-mesure/cave-vins-vue-ensemble.jpg"
    ],
    mainImage: "/projet/bibliotheque/bibliotheque-complete.jpg",
    features: [
      "Bibliothèques du sol au plafond",
      "Meubles de salle de bain étanches",
      "Caves à vin climatisées",
      "Bureaux ergonomiques",
      "Bois massif français",
      "Finitions artisanales",
      "Intégration parfaite"
    ],
    process: [
      "Définition du projet ensemble",
      "Dessins techniques détaillés",
      "Sélection des essences de bois",
      "Usinage et assemblage",
      "Livraison et installation"
    ],
    duration: "3-5 semaines",
    priceRange: "À partir de 2 500€",
    testimonial: {
      text: "La bibliothèque sur mesure s'intègre parfaitement dans notre salon comme si elle avait toujours été là.",
      author: "Jean-Pierre",
      location: "Draguignan"
    }
  },
  {
    id: "parquet",
    title: "Parquets & Sols",
    subtitle: "Chaleur et authenticité",
    description: "Pose de parquets massifs, contrecollés et stratifiés. Ponçage, vitrification et rénovation de parquets anciens. Plinthes et finitions assorties.",
    icon: <Layers className="w-8 h-8" />,
    images: [
      "/projet/parquet-65m2/parquet-salon.jpg",
      "/projet/parquet-65m2/parquet-detail-pose.jpg",
      "/projet/parquet-65m2/parquet-vue-ensemble.jpg"
    ],
    mainImage: "/projet/parquet-65m2/parquet-salon.jpg",
    features: [
      "Parquet chêne massif français",
      "Pose clouée traditionnelle ou collée",
      "Plinthes et barres de seuil assorties",
      "Finitions huilées ou vitrifiées",
      "Ponçage et rénovation",
      "Respect des normes DTU",
      "Garantie décennale"
    ],
    process: [
      "Préparation du support",
      "Acclimatation du parquet",
      "Pose selon technique choisie",
      "Ponçage progressif",
      "Application des finitions"
    ],
    duration: "1-2 semaines",
    priceRange: "À partir de 60€/m²",
    testimonial: {
      text: "Le parquet a donné une âme à notre maison. La pose est impeccable et le rendu magnifique.",
      author: "Famille Rossi",
      location: "La Seyne-sur-Mer"
    }
  },
  {
    id: "agencement",
    title: "Agencements commerciaux",
    subtitle: "Espaces professionnels",
    description: "Aménagement de commerces, bureaux, restaurants. Comptoirs, présentoirs, rayonnages et mobilier professionnel sur mesure.",
    icon: <Award className="w-8 h-8" />,
    images: [
      "/projet/tabac-monaco/tabac-monaco-comptoir.jpg",
      "/projet/tabac/tabac-comptoir-principal.jpg",
      "/projet/tabac-monaco/tabac-monaco-ensemble.jpg"
    ],
    mainImage: "/projet/tabac-monaco/tabac-monaco-comptoir.jpg",
    features: [
      "Comptoirs et banques d'accueil",
      "Présentoirs et vitrines",
      "Rayonnages modulaires",
      "Mobilier aux normes ERP",
      "Finitions résistantes",
      "Éclairage professionnel intégré",
      "Installation en horaires adaptés"
    ],
    process: [
      "Analyse des contraintes métier",
      "Conception fonctionnelle",
      "Respect des normes en vigueur",
      "Fabrication adaptée à l'usage",
      "Installation et mise en service"
    ],
    duration: "3-6 semaines",
    priceRange: "Sur devis",
    testimonial: {
      text: "L'agencement de notre bureau de tabac est à la fois fonctionnel et élégant. Un travail de professionnel.",
      author: "Gérant tabac",
      location: "Monaco"
    }
  }
];

const processSteps = [
  {
    number: "01",
    title: "Rencontre & Étude",
    description: "Visite sur site, analyse de vos besoins et contraintes techniques"
  },
  {
    number: "02",
    title: "Conception",
    description: "Plans 3D, choix des matériaux et validation du projet ensemble"
  },
  {
    number: "03",
    title: "Fabrication",
    description: "Usinage en atelier avec des machines à commande numérique"
  },
  {
    number: "04",
    title: "Installation",
    description: "Pose soignée sur site avec finitions et nettoyage complet"
  }
];

// Composant de compteur animé
const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      const easeOutCubic = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOutCubic * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, hasStarted]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      onAnimationComplete={() => setHasStarted(true)}
      className="text-3xl md:text-4xl font-bold text-bleu-marine font-heading"
    >
      {count}{suffix}
    </motion.div>
  );
};

// Composant de modale pour les images
const ImageModal = ({
  isOpen,
  onClose,
  images,
  currentIndex,
  title
}: {
  isOpen: boolean;
  onClose: () => void;
  images: string[];
  currentIndex: number;
  title: string;
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(currentIndex);

  useEffect(() => {
    setSelectedImageIndex(currentIndex);
  }, [currentIndex]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.5, opacity: 0 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gris-perle">
            <h3 className="text-2xl font-heading font-bold text-bleu-marine">{title}</h3>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gris-perle rounded-full transition-colors"
            >
              <X className="w-6 h-6 text-bleu-marine" />
            </button>
          </div>

          {/* Image principale */}
          <div className="relative h-[60vh]">
            <Image
              src={images[selectedImageIndex]}
              alt={`${title} - Image ${selectedImageIndex + 1}`}
              fill
              className="object-cover"
            />
          </div>

          {/* Miniatures */}
          <div className="p-6 border-t border-gris-perle">
            <div className="flex gap-4 overflow-x-auto">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative w-20 h-20 rounded-lg overflow-hidden cursor-pointer border-2 transition-colors ${selectedImageIndex === index ? 'border-brun-bois' : 'border-transparent'
                    }`}
                  onClick={() => setSelectedImageIndex(index)}
                >
                  <Image
                    src={image}
                    alt={`${title} - Miniature ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export function ServicesPageContent() {
  const [selectedService, setSelectedService] = useState("cuisine");
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);
  const [mainImageIndex, setMainImageIndex] = useState(0);

  const currentService = services.find(s => s.id === selectedService) || services[0];

  // Reset main image when service changes
  useEffect(() => {
    setMainImageIndex(0);
  }, [selectedService]);

  const openModal = (imageIndex: number) => {
    setModalImageIndex(imageIndex);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleThumbnailClick = (index: number) => {
    setMainImageIndex(index + 1); // +1 because main image is index 0
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 pt-32 md:pt-28 bg-white overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="#D4AF37"
        />

        {/* Background grain texture */}
        <div className="absolute inset-0 wood-grain opacity-30"></div>

        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-beige-moderne border border-gris-perle rounded-full px-4 py-2 mb-8"
            >
              <Award className="w-4 h-4 text-brun-bois" />
              <span className="text-sm font-medium text-bleu-marine">
                EXPERTISE ARTISANALE
              </span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 text-bleu-marine">
              Nos Services
              <span className="block text-brun-bois">
                sur mesure
              </span>
            </h1>
            <p className="text-xl text-bleu-marine/70 max-w-4xl mx-auto leading-relaxed">
              De la conception à la réalisation, nous transformons vos espaces avec
              passion et savoir-faire. Chaque projet est unique, chaque création reflète votre personnalité.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {[
              { number: 6, label: "Services", suffix: "" },
              { number: 150, label: "Projets", suffix: "+" },
              { number: 35, label: "Ans d'expérience", suffix: "" },
              { number: 10, label: "Ans de garantie", suffix: "" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="space-y-2"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <AnimatedCounter end={stat.number} suffix={stat.suffix} duration={2000} />
                <div className="text-sm text-bleu-marine/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Navigation */}
      <section className="py-16 bg-gris-perle">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {services.map((service, index) => (
              <motion.button
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedService(service.id)}
                className={`flex items-center gap-3 px-6 py-3 rounded-full font-medium transition-all duration-300 ${selectedService === service.id
                    ? "bg-bleu-marine text-white shadow-lg"
                    : "bg-white text-bleu-marine hover:bg-bleu-marine/10 border border-white"
                  }`}
              >
                <motion.div
                  animate={{ rotate: selectedService === service.id ? 360 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {service.icon}
                </motion.div>
                <span className="hidden sm:inline">{service.title}</span>
              </motion.button>
            ))}
          </motion.div>

          {/* Service Detail */}
          <motion.div
            key={selectedService}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"
          >
            {/* Images */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="relative h-[400px] rounded-2xl overflow-hidden group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                onClick={() => openModal(mainImageIndex)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${selectedService}-${mainImageIndex}`}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={currentService.images[mainImageIndex]}
                      alt={currentService.title}
                      fill
                      className="object-cover"
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                <motion.div
                  className="absolute top-4 left-4"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <span className="px-3 py-1 bg-white/90 rounded-full text-sm font-medium text-bleu-marine">
                    {currentService.title}
                  </span>
                </motion.div>

                <motion.div
                  className="absolute top-4 right-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                    <ZoomIn className="w-5 h-5 text-white" />
                  </div>
                </motion.div>
              </motion.div>

              <motion.div
                className="grid grid-cols-3 gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {currentService.images.slice(1).map((image, index) => (
                  <motion.div
                    key={index}
                    className={`relative h-24 rounded-lg overflow-hidden cursor-pointer border-2 transition-all duration-300 ${mainImageIndex === index + 1 ? 'border-brun-bois shadow-lg' : 'border-transparent'
                      }`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleThumbnailClick(index)}
                    onMouseEnter={() => setHoveredImage(index)}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <Image
                      src={image}
                      alt={`${currentService.title} ${index + 2}`}
                      fill
                      className="object-cover"
                    />
                    <motion.div
                      className="absolute inset-0 bg-brun-bois/20 flex items-center justify-center"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: hoveredImage === index ? 1 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <ZoomIn className="w-4 h-4 text-brun-bois" />
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 border border-gris-perle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <motion.h2
                  className="text-4xl font-heading font-bold text-bleu-marine mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  {currentService.title}
                </motion.h2>
                <motion.p
                  className="text-lg text-brun-bois font-medium mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  {currentService.subtitle}
                </motion.p>
                <motion.p
                  className="text-bleu-marine/70 leading-relaxed"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  {currentService.description}
                </motion.p>
              </motion.div>

              {/* Features */}
              <motion.div
                className="bg-beige-moderne rounded-2xl p-6 border border-gris-perle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h3 className="text-xl font-semibold text-bleu-marine mb-4">
                  Ce qui est inclus
                </h3>
                <div className="grid grid-cols-1 gap-3">
                  {currentService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                    >
                      <Check className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-bleu-marine/70">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Testimonial */}
              <motion.div
                className="bg-gris-perle rounded-2xl p-6 border border-gris-perle"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                >
                  <Quote className="w-8 h-8 text-brun-bois mb-4" />
                </motion.div>
                <motion.p
                  className="text-bleu-marine/70 italic mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  "{currentService.testimonial.text}"
                </motion.p>
                <motion.div
                  className="flex items-center gap-2 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.0 }}
                >
                  <span className="font-medium text-bleu-marine">
                    {currentService.testimonial.author}
                  </span>
                  <span className="text-bleu-marine/50">•</span>
                  <span className="text-bleu-marine/70">
                    {currentService.testimonial.location}
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Modern geometric background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-beige-moderne rounded-full opacity-30"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-gris-perle rounded-full opacity-40"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-bleu-marine mb-6">
              Comment nous
              <span className="block text-brun-bois">
                travaillons ensemble
              </span>
            </h2>
            <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
              De l'idée à la réalisation, découvrez notre approche artisanale
            </p>
          </motion.div>

          {/* Modern Process Flow */}
          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`flex items-center gap-8 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}
              >
                {/* Step Card */}
                <div className="flex-1 bg-white rounded-3xl p-8 shadow-xl border border-gris-perle group hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-brun-bois rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {step.number}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-heading font-bold text-bleu-marine mb-3 group-hover:text-brun-bois transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-bleu-marine/70 text-lg leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Large Number */}
                <div className="hidden lg:block flex-shrink-0">
                  <div className="w-32 h-32 rounded-full border-4 border-beige-moderne flex items-center justify-center">
                    <span className="text-6xl font-heading font-bold text-brun-bois/30">
                      {step.number}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Centered CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-20"
          >
            <div className="inline-flex items-center gap-4 bg-bleu-marine text-white px-8 py-4 rounded-full hover:bg-brun-bois transition-all duration-300 cursor-pointer group">
              <span className="font-semibold text-lg">Commençons votre projet</span>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-brun-bois relative overflow-hidden">
        {/* Dynamic background elements */}
        <div className="absolute inset-0">
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-gold rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-beige-moderne rounded-full opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white rounded-full opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                  <Star className="w-4 h-4 text-gold" />
                  <span className="text-sm font-medium text-white">VOTRE PROJET NOUS ATTEND</span>
                </div>
                
                <h2 className="text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
                  Donnons vie à
                  <span className="block text-gold">
                    votre vision
                  </span>
                </h2>
                
                <p className="text-xl text-white/90 leading-relaxed">
                  Chaque projet commence par une conversation. Partagez-nous votre vision, 
                  nous la transformerons en réalité avec notre savoir-faire artisanal.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Link
                  href="/contact"
                  className="group bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 border border-white/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gold rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-gold transition-colors duration-300">
                        Rendez-vous gratuit
                      </h3>
                      <p className="text-sm text-white/80">
                        Consultation sur site
                      </p>
                    </div>
                  </div>
                </Link>

                <Link
                  href="tel:0762144340"
                  className="group bg-white/15 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/25 transition-all duration-300 border border-white/30"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-bleu-marine rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-lg">📞</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-gold transition-colors duration-300">
                        07 62 14 43 40
                      </h3>
                      <p className="text-sm text-white/80">
                        Appelez-nous maintenant
                      </p>
                    </div>
                  </div>
                </Link>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative bg-white/15 backdrop-blur-sm rounded-3xl p-8 border border-white/30">
                <div className="space-y-6">
                  <div className="text-center space-y-4">
                    <div className="w-20 h-20 bg-gold rounded-2xl flex items-center justify-center mx-auto">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-white">
                      Garantie Excellence
                    </h3>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-white/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gold">35+</div>
                      <div className="text-sm text-white/80">Ans d'expérience</div>
                    </div>
                    <div className="bg-white/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gold">150+</div>
                      <div className="text-sm text-white/80">Projets réalisés</div>
                    </div>
                    <div className="bg-white/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gold">10</div>
                      <div className="text-sm text-white/80">Ans de garantie</div>
                    </div>
                    <div className="bg-white/15 rounded-xl p-4">
                      <div className="text-2xl font-bold text-gold">100%</div>
                      <div className="text-sm text-white/80">Satisfaction</div>
                    </div>
                  </div>

                  <div className="text-center pt-4">
                    <div className="flex justify-center gap-1 mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                      ))}
                    </div>
                    <p className="text-sm text-white/80 italic">
                      "Un artisan d'exception qui a transformé notre maison"
                    </p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold rounded-full opacity-60 animate-bounce"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-beige-moderne rounded-full opacity-70 animate-bounce" style={{ animationDelay: '0.5s' }}></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Modal */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        images={currentService.images}
        currentIndex={modalImageIndex}
        title={currentService.title}
      />
    </div>
  );
}