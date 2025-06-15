import { Metadata } from 'next';
import { DraguignanPageContent } from '@/components/pages/DraguignanPageContent';

export const metadata: Metadata = {
  title: "Menuisier à Draguignan (83300) | Vanden Menuiserie - Devis Gratuit",
  description: "Vanden Menuiserie, votre menuisier professionnel à Draguignan. Restaurations d'époque, escaliers nobles, créations patrimoniales. 38 ans d'expérience dans le Var. Devis gratuit ☎ 07 62 14 43 40",
  keywords: [
    "menuisier draguignan",
    "escalier draguignan",
    "restauration draguignan",
    "menuiserie draguignan",
    "artisan menuisier draguignan",
    "ébéniste draguignan",
    "patrimoine draguignan",
    "maison de maître draguignan"
  ],
  openGraph: {
    title: "Menuisier Draguignan - Vanden Menuiserie",
    description: "Artisan menuisier à Draguignan depuis 1985. Spécialisé en restaurations d'époque, escaliers nobles et créations patrimoniales.",
    images: ["/og/menuisier-draguignan.jpg"],
    url: "https://vanden-menuiserie.fr/menuisier-draguignan",
  },
  alternates: {
    canonical: "https://vanden-menuiserie.fr/menuisier-draguignan",
  },
};

export default function MenuisierDraguignan() {
  return <DraguignanPageContent />;
}