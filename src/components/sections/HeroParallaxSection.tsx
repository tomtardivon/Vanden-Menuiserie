"use client";
import { HeroParallax } from "@/components/ui/hero-parallax";

export const HeroParallaxSection = () => {
  const products = [
    {
      title: "Cuisine moderne en chêne",
      link: "#",
      thumbnail:
        "/projet/cuisine3/476817238_613627321614418_4615603404071204971_n.jpg",
    },
    {
      title: "Dressing sur mesure",
      link: "#",
      thumbnail:
        "/projet/dressing2/480538904_622253694085114_680365040648911009_n.jpg",
    },
    {
      title: "Bibliothèque intégrée",
      link: "#",
      thumbnail:
        "/projet/bibliothèque/476825774_612087235101760_8821014214908137278_n.jpg",
    },
    {
      title: "Porte style verrière",
      link: "#",
      thumbnail:
        "/projet/porte style verrière/476807615_612083191768831_8610442048184547110_n.jpg",
    },
    {
      title: "Placard dressing",
      link: "#",
      thumbnail:
        "/projet/placard dressing/474570361_600928522884298_4949368071245917949_n.jpg",
    },
    {
      title: "Meuble vasque suspendu",
      link: "#",
      thumbnail:
        "/projet/Montage et pose d'un meuble vasque suspendu et miroir/468422874_560750720235412_6331762406400830758_n.jpg",
    },
    {
      title: "Cuisine contemporaine",
      link: "#",
      thumbnail:
        "/projet/cuisine4/475716544_606828588960958_2115149815697978324_n.jpg",
    },
    {
      title: "Porte d'entrée bois vitrée",
      link: "#",
      thumbnail:
        "/projet/porte-bois-vitree/481976422_635117799465370_8392529013082885935_n.jpg",
    },
    {
      title: "Parquet massif",
      link: "#",
      thumbnail:
        "/projet/Pose de 65m2de parquet avec plinthes et barre de seuil/468433430_560749653568852_2496613854934014702_n.jpg",
    },
    {
      title: "Agencement tabac",
      link: "#",
      thumbnail:
        "/projet/tabac/480855537_625536693756814_4142290280310242889_n.jpg",
    },
    {
      title: "Dressing avec éclairage LED",
      link: "#",
      thumbnail:
        "/projet/dressing3/474533814_601468062830344_6621574874631471001_n.jpg",
    },
    {
      title: "Meubles hauts cuisine",
      link: "#",
      thumbnail:
        "/projet/meubles haut cuisine/480646070_622261720750978_4860030057873131362_n.jpg",
    },
    {
      title: "Cave à vin sur mesure",
      link: "#",
      thumbnail:
        "/projet/cave a vins sur mesure/482071285_633511616292655_860457708729144469_n.jpg",
    },
    {
      title: "Porte à galandage",
      link: "#",
      thumbnail:
        "/projet/porte à galandage/485723147_643902435253573_7708038306749014808_n.jpg",
    },
    {
      title: "Portes extérieures",
      link: "#",
      thumbnail:
        "/projet/portes extérieures/476776224_614347501542400_2400875005439647793_n.jpg",
    },
  ];

  return (
    <div className="bg-beige-moderne">
      <HeroParallax products={products} />
    </div>
  );
};
