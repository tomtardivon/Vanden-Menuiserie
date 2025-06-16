import { Metadata } from 'next';
import { FrejusPageContent } from '@/components/pages/FrejusPageContent';

export const metadata: Metadata = {
  title: "Menuisier à Fréjus (83600) | Vanden Menuiserie - Devis Gratuit",
  description: "Vanden Menuiserie, votre menuisier professionnel à Fréjus. Maisons contemporaines, bibliothèques, agencements modernes. 3 ans d'expérience dans le Var. Devis gratuit ☎ 07 62 14 43 40",
  keywords: [
    "menuisier fréjus",
    "cuisine sur mesure fréjus",
    "bibliothèque fréjus",
    "menuiserie fréjus",
    "artisan menuisier fréjus",
    "ébéniste fréjus",
    "agencement fréjus",
    "design moderne fréjus"
  ],
  openGraph: {
    title: "Menuisier Fréjus - Vanden Menuiserie",
    description: "Artisan menuisier à Fréjus depuis 2022. Spécialisé en maisons contemporaines, bibliothèques et agencements modernes.",
    images: ["/og/menuisier-frejus.jpg"],
    url: "https://vanden-menuiserie.fr/menuisier-frejus",
  },
  alternates: {
    canonical: "https://vanden-menuiserie.fr/menuisier-frejus",
  },
};

export default function MenuisierFrejus() {
  return <FrejusPageContent />;
}