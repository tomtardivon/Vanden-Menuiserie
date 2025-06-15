"use client";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image";
import { motion } from "framer-motion";
import { Calendar, MapPin, User } from "lucide-react";
import { projects } from "@/data/projects";

export function RealisationsPageContent() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full min-h-screen bg-white pt-20 pb-20">
      <div className="max-w-7xl mx-auto px-4 pt-20 md:pt-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6">
            Nos Réalisations
          </h1>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez une sélection de nos plus belles créations, 
            témoignages de notre savoir-faire et de notre passion pour l'excellence.
          </p>
        </motion.div>
      </div>
      
      <Carousel items={cards} />
      
      {/* Statistics Section */}
      <section className="py-24 bg-bleu-marine">
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
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white/70">{stat.label}</div>
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
      <div className="bg-gris-perle rounded-2xl p-8">
        <h3 className="text-2xl font-semibold mb-6">Détails du projet</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-bleu-marine/50 mt-1" />
            <div>
              <p className="font-medium">Durée</p>
              <p className="text-bleu-marine/70">{project.duration}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <MapPin className="w-5 h-5 text-bleu-marine/50 mt-1" />
            <div>
              <p className="font-medium">Localisation</p>
              <p className="text-bleu-marine/70">{project.location}</p>
            </div>
          </div>
          
          <div className="flex items-start space-x-3">
            <User className="w-5 h-5 text-bleu-marine/50 mt-1" />
            <div>
              <p className="font-medium">Type</p>
              <p className="text-bleu-marine/70">{project.type}</p>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h4 className="font-semibold mb-2">Description</h4>
            <p className="text-bleu-marine/70 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Matériaux utilisés</h4>
            <div className="flex flex-wrap gap-2">
              {project.materials.map((material: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-beige-moderne rounded-full text-sm text-bleu-marine/80"
                >
                  {material}
                </span>
              ))}
            </div>
          </div>

          {project.testimonial && (
            <div className="bg-beige-moderne rounded-xl p-6 mt-6">
              <p className="text-bleu-marine/70 italic mb-4">
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

const data = projects.map((project, index) => {
  const locations = [
    "Villa à Hyères",
    "Maison moderne à Toulon", 
    "Appartement à Fréjus",
    "Villa à La Seyne",
    "Maison de maître à Draguignan",
    "Villa à Saint-Tropez",
    "Résidence privée à Cannes",
    "Maison contemporaine à Nice"
  ];

  const durations = {
    'cuisine': "3 semaines",
    'dressing': "2 semaines",
    'porte': "1 semaine", 
    'meuble': "3 semaines",
    'parquet': "2 semaines",
    'placard': "1 semaine",
    'autre': "4 semaines"
  };

  const materials = {
    'cuisine': ["Chêne massif", "Quartz", "Inox brossé", "Verre trempé"],
    'dressing': ["MDF laqué", "Miroirs", "LED intégrées", "Aluminium"],
    'porte': ["Bois massif", "Acier thermolaqué", "Verre trempé", "Quincaillerie premium"],
    'meuble': ["Bois massif", "Pierre naturelle", "Verre", "Acier"],
    'parquet': ["Chêne massif", "Plinthes assorties", "Barres de seuil", "Sous-couche isolante"],
    'placard': ["MDF", "Soft-close", "LED", "Aluminium"],
    'autre': ["Matériaux premium", "Finitions haut de gamme", "Quincaillerie sur mesure", "LED"]
  };

  const testimonials = [
    { text: "Mattias a transformé notre espace en un véritable lieu de vie. La qualité du travail est exceptionnelle, chaque détail a été pensé avec soin.", author: "Marie et Pierre D." },
    { text: "Cette réalisation a complètement transformé notre intérieur. Elle apporte style et fonctionnalité !", author: "Sophie M." },
    { text: "Un travail parfaitement pensé qui a transformé notre maison. Chaque centimètre est optimisé.", author: "Laurent B." },
    { text: "Un travail soigné et rapide. Le résultat donne une tout autre dimension à notre maison !", author: "Famille Rossi" },
    { text: "Une réalisation digne d'un château ! Le travail du bois est remarquable.", author: "Jean-Paul V." },
    { text: "Une création exceptionnelle qui met en valeur notre espace. Un vrai bijou !", author: "Philippe R." },
    { text: "Un savoir-faire exceptionnel et un résultat à la hauteur de nos attentes.", author: "Catherine L." },
    { text: "Nous sommes ravis du résultat, c'est exactement ce que nous imaginions.", author: "Marc et Anne T." }
  ];

  const categoryLabels: Record<string, string> = {
    'cuisine': 'Cuisine',
    'dressing': 'Dressing', 
    'placard': 'Placard',
    'porte': 'Porte',
    'meuble': 'Meuble',
    'parquet': 'Parquet',
    'autre': 'Agencement'
  };

  return {
    category: categoryLabels[project.category] || project.category,
    title: project.title,
    src: project.images[0],
    content: <ProjectContent project={{
      title: project.title,
      images: project.images,
      duration: durations[project.category] || "2 semaines",
      location: locations[index % locations.length],
      type: project.category === 'cuisine' ? 'Rénovation complète' : 
            project.category === 'dressing' ? 'Aménagement' :
            project.category === 'porte' ? 'Installation sur mesure' :
            project.category === 'meuble' ? 'Création sur mesure' :
            project.category === 'parquet' ? 'Pose de parquet' :
            project.category === 'placard' ? 'Aménagement' :
            'Aménagement spécialisé',
      description: project.description,
      materials: materials[project.category] || materials.autre,
      testimonial: testimonials[index % testimonials.length]
    }} />
  };
});