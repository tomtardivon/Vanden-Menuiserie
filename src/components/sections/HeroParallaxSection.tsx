"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const HeroParallaxSection = () => {
  const products = [
    {
      title: "Cuisine moderne en chêne",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Dressing sur mesure",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Bibliothèque intégrée",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Escalier en bois massif",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Terrasse extérieure",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Meuble TV personnalisé",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Bureau home office",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Porte d'entrée sculptée",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Parquet chevron",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Salle de bain zen",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Pergola extérieure",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Aménagement combles",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Cave à vin sur mesure",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Claustra décorative",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&h=400&auto=format&q=80",
    },
    {
      title: "Verrière atelier",
      link: "#",
      thumbnail: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&auto=format&q=80",
    },
  ];

  return <HeroParallax products={products} />;
};