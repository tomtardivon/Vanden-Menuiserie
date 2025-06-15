"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const HeroParallaxSection = () => {
  const products = [
    {
      title: "Cuisine moderne en chêne",
      link: "#",
      thumbnail: "/projet/cuisine3/cuisine-familiale-ensemble.jpg",
    },
    {
      title: "Dressing sur mesure",
      link: "#",
      thumbnail: "/projet/dressing2/dressing-chambre-ensemble.jpg",
    },
    {
      title: "Bibliothèque intégrée",
      link: "#",
      thumbnail: "/projet/bibliotheque/bibliotheque-complete.jpg",
    },
    {
      title: "Porte style verrière",
      link: "#",
      thumbnail: "/projet/porte-style-verriere/porte-verriere-vue.jpg",
    },
    {
      title: "Placard dressing",
      link: "#",
      thumbnail: "/projet/placard-dressing/placard-dressing-complet.jpg",
    },
    {
      title: "Meuble vasque suspendu",
      link: "#",
      thumbnail: "/projet/meuble-vasque-miroir/meuble-vasque-ensemble.jpg",
    },
    {
      title: "Cuisine contemporaine",
      link: "#",
      thumbnail: "/projet/cuisine4/cuisine-design-vue.jpg",
    },
    {
      title: "Porte d'entrée bois vitrée",
      link: "#",
      thumbnail: "/projet/porte-bois-vitree/porte-vitree-ensemble.jpg",
    },
    {
      title: "Parquet massif",
      link: "#",
      thumbnail: "/projet/parquet-65m2/parquet-vue-ensemble.jpg",
    },
    {
      title: "Agencement tabac",
      link: "#",
      thumbnail: "/projet/tabac/tabac-vue-ensemble.jpg",
    },
    {
      title: "Dressing avec éclairage LED",
      link: "#",
      thumbnail: "/projet/dressing3/dressing-moderne-led.jpg",
    },
    {
      title: "Meubles hauts cuisine",
      link: "#",
      thumbnail: "/projet/meubles-haut-cuisine/meubles-hauts-ouverts.jpg",
    },
    {
      title: "Cave à vin sur mesure",
      link: "#",
      thumbnail: "/projet/cave-a-vins-sur-mesure/cave-vins-complete.jpg",
    },
    {
      title: "Porte à galandage",
      link: "#",
      thumbnail: "/projet/porte-galandage/porte-galandage-ouverte.jpg",
    },
    {
      title: "Portes extérieures",
      link: "#",
      thumbnail: "/projet/portes-exterieures/porte-exterieure-principale.jpg",
    },
  ];

  return (
    <div className="bg-beige-moderne">
      <HeroParallax products={products} />
    </div>
  );
};
