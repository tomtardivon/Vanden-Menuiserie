import { Metadata } from "next";
import { AboutPageContent } from "./AboutPageContent";

export const metadata: Metadata = {
  title: "À propos | Vanden Menuiserie - Artisan Menuisier depuis 1985",
  description: "Découvrez l'histoire de Vanden Menuiserie, artisan menuisier dans le Var depuis 1985. Savoir-faire traditionnel et technologies modernes au service de vos projets.",
  keywords: "histoire vanden menuiserie, artisan menuisier var, menuiserie traditionnelle, savoir-faire menuisier",
};

export default function AboutPage() {
  return <AboutPageContent />;
}