import { Metadata } from 'next';
import { LaSeyneSurMerPageContent } from '@/components/pages/LaSeyneSurMerPageContent';

export const metadata: Metadata = {
  title: "Menuisier à La Seyne-sur-Mer (83500) | Vanden Menuiserie - Devis Gratuit",
  description: "Vanden Menuiserie, votre menuisier professionnel à La Seyne-sur-Mer. Mobilier sur mesure, agencements, projets d'exception. 3 ans d'expérience dans le Var. Devis gratuit ☎ 07 62 14 43 40",
  keywords: [
    "menuisier la seyne sur mer",
    "cuisine sur mesure la seyne",
    "mobilier la seyne",
    "menuiserie la seyne",
    "artisan menuisier la seyne",
    "ébéniste la seyne",
    "agencement la seyne",
    "meuble sur mesure la seyne"
  ],
  openGraph: {
    title: "Menuisier La Seyne-sur-Mer - Vanden Menuiserie",
    description: "Artisan menuisier à La Seyne-sur-Mer depuis 2022. Spécialisé en mobilier sur mesure, agencements et projets d'exception.",
    images: ["/og/menuisier-la-seyne-sur-mer.jpg"],
    url: "https://vanden-menuiserie.fr/menuisier-la-seyne-sur-mer",
  },
  alternates: {
    canonical: "https://vanden-menuiserie.fr/menuisier-la-seyne-sur-mer",
  },
};

export default function MenuisierLaSeyneSurMer() {
  return <LaSeyneSurMerPageContent />;
}