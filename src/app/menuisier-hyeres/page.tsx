import { Metadata } from 'next';
import { HyeresPageContent } from '@/components/pages/HyeresPageContent';

export const metadata: Metadata = {
  title: "Menuisier à Hyères (83400) | Vanden Menuiserie - Devis Gratuit",
  description: "Vanden Menuiserie, votre menuisier professionnel à Hyères. Cuisines sur mesure, terrasses bois, meubles d'exception. 38 ans d'expérience dans le Var. Devis gratuit ☎ 07 62 14 43 40",
  keywords: [
    "menuisier hyères",
    "cuisine sur mesure hyères",
    "terrasse bois hyères",
    "menuiserie hyères",
    "artisan menuisier hyères",
    "ébéniste hyères",
    "dressing hyères",
    "villa hyères"
  ],
  openGraph: {
    title: "Menuisier Hyères - Vanden Menuiserie",
    description: "Artisan menuisier à Hyères depuis 1985. Spécialisé en villas de standing, terrasses bois et meubles sur mesure.",
    images: ["/og/menuisier-hyeres.jpg"],
    url: "https://vanden-menuiserie.fr/menuisier-hyeres",
  },
  alternates: {
    canonical: "https://vanden-menuiserie.fr/menuisier-hyeres",
  },
};

export default function MenuisierHyeres() {
  return <HyeresPageContent />;
}