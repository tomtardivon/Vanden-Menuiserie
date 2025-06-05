"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, User } from "lucide-react";

export function RealisationsPageContent() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full min-h-screen bg-white pt-20 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez une sélection de nos plus belles créations, 
            témoignages de notre savoir-faire et de notre passion pour l'excellence.
          </p>
        </motion.div>
      </div>
      
      <Carousel items={cards} />
      
      {/* Statistics Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "150+", label: "Projets réalisés" },
              { number: "100%", label: "Clients satisfaits" },
              { number: "35", label: "Années d'expérience" },
              { number: "10", label: "Ans de garantie" }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const ProjectContent = ({ project }: { project: any }) => {
  return (
    <div className="space-y-8">
      {/* Project Images Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {project.images.map((img: string, index: number) => (
          <div key={index} className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src={img}
              alt={`${project.title} - Image ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>

      {/* Project Details */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h3 className="text-2xl font-semibold mb-6">Détails du projet</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="font-medium">Durée</p>
              <p className="text-gray-600">{project.duration}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="font-medium">Localisation</p>
              <p className="text-gray-600">{project.location}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <User className="w-5 h-5 text-gray-400 mt-1" />
            <div>
              <p className="font-medium">Type</p>
              <p className="text-gray-600">{project.type}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-gray-600 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Matériaux utilisés</h4>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((material: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white rounded-full text-sm text-gray-700"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="bg-white rounded-xl p-6 mt-6">
              <p className="text-gray-600 italic mb-4">
                "{project.testimonial.text}"
              </p>
              <p className="font-medium text-sm">
                — {project.testimonial.author}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    category: "Cuisine",
    title: "Cuisine moderne en chêne massif",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&auto=format&q=80",
    content: <ProjectContent project={{
      title: "Cuisine moderne en chêne massif",
      images: [
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=800&h=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=800&h=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1565727729156-8c9bc792065a?w=800&h=600&auto=format&q=80"
      ],
      duration: "3 semaines",
      location: "Villa à Hyères",
      type: "Rénovation complète",
      description: "Réalisation complète d'une cuisine haut de gamme avec îlot central et cave à vin intégrée. Design contemporain alliant fonctionnalité et esthétique. L'îlot central multifonction intègre une plaque de cuisson, un espace repas et de nombreux rangements.",
      materials: ["Chêne massif", "Quartz Calacatta", "Inox brossé", "Verre trempé"],
      testimonial: {
        text: "Mattias a transformé notre cuisine en un véritable espace de vie. La qualité du travail est exceptionnelle, chaque détail a été pensé avec soin.",
        author: "Marie et Pierre D."
      }
    }} />,
  },
  {
    category: "Escalier",
    title: "Escalier suspendu design",
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&auto=format&q=80",
    content: <ProjectContent project={{
      title: "Escalier suspendu design",
      images: [
        "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1519947486511-46149fa0a254?w=800&h=600&auto=format&q=80"
      ],
      duration: "4 semaines",
      location: "Maison moderne à Toulon",
      type: "Construction neuve",
      description: "Création d'un escalier suspendu avec structure en acier et marches en bois massif. Le garde-corps en verre apporte légèreté et modernité à l'ensemble.",
      materials: ["Hêtre massif", "Acier thermolaqué", "Verre feuilleté"],
      testimonial: {
        text: "Un escalier qui est devenu la pièce maîtresse de notre intérieur. Un vrai travail d'artiste !",
        author: "Sophie M."
      }
    }} />,
  },
  {
    category: "Dressing",
    title: "Dressing luxe avec éclairage LED",
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&auto=format&q=80",
    content: <ProjectContent project={{
      title: "Dressing luxe avec éclairage LED",
      images: [
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=800&h=600&auto=format&q=80"
      ],
      duration: "2 semaines",
      location: "Appartement à Fréjus",
      type: "Aménagement",
      description: "Dressing sur mesure avec solutions de rangement optimisées, tiroirs soft-close et éclairage LED intégré avec détecteur de mouvement.",
      materials: ["MDF laqué", "Miroirs", "LED intégrées", "Aluminium"],
      testimonial: {
        text: "Un dressing parfaitement pensé qui a transformé notre chambre. Chaque centimètre est optimisé.",
        author: "Laurent B."
      }
    }} />,
  },
  {
    category: "Terrasse",
    title: "Terrasse en bois exotique avec pergola",
    src: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&auto=format&q=80",
    content: <ProjectContent project={{
      title: "Terrasse en bois exotique avec pergola",
      images: [
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1506126279646-a697353d3166?w=800&h=600&auto=format&q=80"
      ],
      duration: "2 semaines",
      location: "Villa avec vue mer à La Seyne",
      type: "Aménagement extérieur",
      description: "Création d'une terrasse en bois exotique IPÉ avec pergola bioclimatique. Éclairage LED intégré et système de brumisation pour les chaudes soirées d'été.",
      materials: ["Bois IPÉ", "Aluminium", "LED étanches", "Visserie inox"],
      testimonial: {
        text: "Notre terrasse est devenue notre pièce préférée. Parfaite pour profiter de la vue mer !",
        author: "Famille Rossi"
      }
    }} />,
  },
  {
    category: "Bibliothèque",
    title: "Bibliothèque murale sur mesure",
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&auto=format&q=80",
    content: <ProjectContent project={{
      title: "Bibliothèque murale sur mesure",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=800&h=600&auto=format&q=80"
      ],
      duration: "3 semaines",
      location: "Maison de maître à Draguignan",
      type: "Aménagement intérieur",
      description: "Bibliothèque sur mesure du sol au plafond avec échelle coulissante. Intégration d'un bureau et d'espaces de rangement cachés.",
      materials: ["Noyer français", "Laiton", "Cuir", "Verre"],
      testimonial: {
        text: "Une bibliothèque digne d'un château ! Le travail du bois est remarquable.",
        author: "Jean-Paul V."
      }
    }} />,
  },
  {
    category: "Cave à vin",
    title: "Cave à vin climatisée",
    src: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&auto=format&q=80",
    content: <ProjectContent project={{
      title: "Cave à vin climatisée",
      images: [
        "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&auto=format&q=80",
        "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=800&h=600&auto=format&q=80"
      ],
      duration: "4 semaines",
      location: "Villa à Saint-Tropez",
      type: "Aménagement spécialisé",
      description: "Cave à vin sur mesure avec système de climatisation, hygrométrie contrôlée et casiers modulables pour 500 bouteilles.",
      materials: ["Chêne vieilli", "Pierre naturelle", "Verre", "Acier"],
      testimonial: {
        text: "Une cave exceptionnelle qui met en valeur notre collection. Un vrai bijou !",
        author: "Philippe R."
      }
    }} />,
  }
];