"use client";
import { motion } from "framer-motion";
import { Star, MapPin, Calendar, ArrowRight } from "lucide-react";
import Image from "next/image";

const ProjectContent = ({ 
  title, 
  location, 
  description, 
  materials,
  duration,
  testimonial 
}: {
  title: string;
  location: string;
  description: string;
  materials: string[];
  duration: string;
  testimonial?: { text: string; author: string; rating: number };
}) => (
  <div className="bg-white dark:bg-neutral-900 p-8 rounded-t-3xl">
    <div className="flex items-center gap-2 text-gray-600 mb-3">
      <MapPin className="w-4 h-4" />
      <span className="text-sm font-medium">{location}</span>
    </div>
    
    <h3 className="font-heading font-bold text-3xl text-gray-900 mb-4">
      {title}
    </h3>
    
    <p className="text-gray-600 mb-6 leading-relaxed">
      {description}
    </p>
    
    {/* Matériaux */}
    <div className="mb-6">
      <h4 className="font-semibold text-gray-900 mb-3">Matériaux utilisés</h4>
      <div className="flex flex-wrap gap-2">
        {materials.map((material, idx) => (
          <span 
            key={idx}
            className="text-xs px-3 py-2 rounded-full bg-gray-50 border border-gray-200 text-gray-900"
          >
            {material}
          </span>
        ))}
      </div>
    </div>
    
    {/* Durée */}
    <div className="flex items-center gap-2 text-gray-600 mb-6">
      <Calendar className="w-4 h-4" />
      <span className="text-sm">Durée de réalisation : {duration}</span>
    </div>
    
    {/* Témoignage */}
    {testimonial && (
      <div className="bg-gray-50 rounded-xl p-4 mb-6">
        <div className="flex mb-2">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-sm text-gray-600 italic mb-2">
          "{testimonial.text}"
        </p>
        <p className="text-xs text-gray-600 font-medium">
          {testimonial.author}
        </p>
      </div>
    )}
    
    <motion.button
      className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-gray-700 transition-colors"
      whileHover={{ x: 5 }}
    >
      Voir plus de détails
      <ArrowRight className="w-4 h-4" />
    </motion.button>
  </div>
);

export const ProjectsGallery = () => {
  // Debug: Add console log to check if component renders
  console.log("ProjectsGallery component rendering");
  
  const projects = [
    {
      id: 1,
      content: (
        <ProjectContent
          title="Cuisine Contemporaine en Chêne Massif"
          location="Villa privée, Hyères"
          description="Réalisation complète d'une cuisine haut de gamme avec îlot central et cave à vin intégrée. Design contemporain alliant fonctionnalité et esthétique."
          materials={["Chêne massif", "Quartz Calacatta", "Inox brossé", "Laque mate"]}
          duration="3 semaines"
          testimonial={{
            text: "Mattias a su transformer notre vision en réalité. Un travail d'une précision remarquable.",
            author: "Marie & Pierre D.",
            rating: 5
          }}
        />
      ),
      className: "md:col-span-2",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&auto=format&q=80",
    },
    {
      id: 2,
      content: (
        <ProjectContent
          title="Dressing Sur Mesure avec Miroirs"
          location="Appartement, Fréjus"
          description="Optimisation d'un espace réduit avec solutions de rangement innovantes et miroirs intégrés pour agrandir visuellement l'espace."
          materials={["MDF laqué", "Miroirs", "LED intégrées", "Aluminium"]}
          duration="2 semaines"
          testimonial={{
            text: "Un dressing parfaitement pensé qui optimise chaque centimètre disponible.",
            author: "Laurent B.",
            rating: 5
          }}
        />
      ),
      className: "col-span-1",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&auto=format&q=80",
    },
    {
      id: 3,
      content: (
        <ProjectContent
          title="Escalier Suspendu Design"
          location="Maison moderne, Toulon"
          description="Création d'un escalier suspendu avec structure en acier et marches en bois massif. Le garde-corps en verre apporte légèreté et modernité."
          materials={["Hêtre massif", "Acier thermolaqué", "Verre feuilleté"]}
          duration="4 semaines"
          testimonial={{
            text: "Un escalier qui est devenu la pièce maîtresse de notre intérieur. Un vrai travail d'artiste !",
            author: "Sophie M.",
            rating: 5
          }}
        />
      ),
      className: "col-span-1",
      thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=600&auto=format&q=80",
    },
    {
      id: 4,
      content: (
        <ProjectContent
          title="Terrasse en Bois Exotique"
          location="Villa avec vue mer, La Seyne-sur-Mer"
          description="Création d'une terrasse en bois exotique IPÉ avec pergola bioclimatique. Éclairage LED intégré et système de brumisation."
          materials={["Bois IPÉ", "Aluminium", "LED étanches", "Visserie inox"]}
          duration="2 semaines"
          testimonial={{
            text: "Notre terrasse est devenue notre pièce préférée. Parfaite pour profiter de la vue mer !",
            author: "Famille Rossi",
            rating: 5
          }}
        />
      ),
      className: "md:col-span-2",
      thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&h=600&auto=format&q=80",
    },
    {
      id: 5,
      content: (
        <ProjectContent
          title="Bibliothèque Murale Sur Mesure"
          location="Maison de maître, Draguignan"
          description="Bibliothèque sur mesure du sol au plafond avec échelle coulissante. Intégration d'un bureau et d'espaces de rangement cachés."
          materials={["Noyer français", "Laiton", "Cuir", "Verre"]}
          duration="3 semaines"
          testimonial={{
            text: "Une bibliothèque digne d'un château ! Le travail du bois est remarquable.",
            author: "Jean-Paul V.",
            rating: 5
          }}
        />
      ),
      className: "col-span-1",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600&auto=format&q=80",
    },
    {
      id: 6,
      content: (
        <ProjectContent
          title="Cave à Vin Climatisée"
          location="Villa, Saint-Tropez"
          description="Cave à vin sur mesure avec système de climatisation, hygrométrie contrôlée et casiers modulables pour 500 bouteilles."
          materials={["Chêne vieilli", "Pierre naturelle", "Verre", "Acier"]}
          duration="4 semaines"
          testimonial={{
            text: "Une cave exceptionnelle qui met en valeur notre collection. Un vrai bijou !",
            author: "Philippe R.",
            rating: 5
          }}
        />
      ),
      className: "col-span-1",
      thumbnail: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?w=800&h=600&auto=format&q=80",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* En-tête avec stats */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span 
            className="inline-block text-gray-600 font-medium mb-4 text-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Portfolio
          </motion.span>
          
          <h2 className="text-4xl lg:text-6xl font-heading font-bold text-gray-900 mb-6">
            Nos réalisations
            <span className="block text-gray-600">d'exception</span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Découvrez une sélection de nos plus belles créations, chacune unique et adaptée aux besoins spécifiques de nos clients.
          </p>
          
          {/* Statistiques impressionnantes */}
          <div className="flex justify-center gap-12 mt-12">
            {[
              { number: '150+', label: 'Projets réalisés' },
              { number: '100%', label: 'Clients satisfaits' },
              { number: '35', label: 'Années d\'expérience' },
              { number: '5★', label: 'Note moyenne' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <div className="text-3xl lg:text-4xl font-bold text-gray-900 font-heading">{stat.number}</div>
                <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Grid des projets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer ${project.className === "md:col-span-2" ? "md:col-span-2" : ""}`}
              whileHover={{ y: -10 }}
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.thumbnail}
                  alt={`Projet ${project.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                {/* Badge projet */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-sm font-semibold text-gray-900">Projet #{project.id}</span>
                </div>
                
                {/* Overlay avec titre au survol */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">
                      {project.content.props.title}
                    </h3>
                    <p className="text-sm text-gray-200">
                      {project.content.props.location}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contenu preview */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-600 mb-3">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">{project.content.props.location}</span>
                </div>
                
                <h3 className="font-heading font-bold text-xl text-gray-900 mb-3 group-hover:text-wood-dark transition-colors">
                  {project.content.props.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 line-clamp-2">
                  {project.content.props.description}
                </p>
                
                {/* Matériaux */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.content.props.materials.slice(0, 3).map((material: string, idx: number) => (
                    <span 
                      key={idx}
                      className="text-xs px-2 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-900"
                    >
                      {material}
                    </span>
                  ))}
                  {project.content.props.materials.length > 3 && (
                    <span className="text-xs px-2 py-1 rounded-full bg-gray-50 border border-gray-200 text-gray-900">
                      +{project.content.props.materials.length - 3}
                    </span>
                  )}
                </div>
                
                {/* Durée */}
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm">Durée : {project.content.props.duration}</span>
                </div>
                
                {/* CTA */}
                <motion.div
                  className="flex items-center gap-2 text-gray-900 font-semibold hover:text-gold transition-colors group/cta"
                  whileHover={{ x: 5 }}
                >
                  <span>Voir plus de détails</span>
                  <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* CTA pour voir plus */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
        >
          <motion.button
            className="group bg-black hover:bg-gray-900 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center gap-3">
              Voir tous nos projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};