import { Metadata } from 'next';
import { ToulonPageContent } from '@/components/pages/ToulonPageContent';

export const metadata: Metadata = {
  title: "Menuisier à Toulon (83000) | Vanden Menuiserie - Devis Gratuit",
  description: "Vanden Menuiserie, votre menuisier professionnel à Toulon. Cuisines sur mesure, escaliers, fenêtres. 3 ans d'expérience dans le Var. Devis gratuit ☎ 07 62 14 43 40",
  keywords: [
    "menuisier toulon",
    "cuisine sur mesure toulon",
    "escalier bois toulon",
    "menuiserie toulon",
    "artisan menuisier toulon",
    "ébéniste toulon",
    "dressing toulon",
    "fenêtre bois toulon"
  ],
  openGraph: {
    title: "Menuisier Toulon - Vanden Menuiserie",
    description: "Artisan menuisier à Toulon depuis 2022. Spécialisé en cuisines sur mesure, escaliers et menuiseries.",
    images: ["/og/menuisier-toulon.jpg"],
    url: "https://vanden-menuiserie.fr/menuisier-toulon",
  },
  alternates: {
    canonical: "https://vanden-menuiserie.fr/menuisier-toulon",
  },
};

export default function MenuisierToulon() {
  return <ToulonPageContent />;
}