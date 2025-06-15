import { Metadata } from "next";
import { ProjectsGrid } from "@/components/sections/ProjectsGrid";

export const metadata: Metadata = {
  title: "Tous nos projets | Vanden Menuiserie - Réalisations sur mesure dans le Var",
  description: "Découvrez l'ensemble de nos réalisations : cuisines, dressings, placards, portes, meubles sur mesure et pose de parquet dans le Var (83). Plus de 150 projets réalisés.",
  keywords: [
    "projets menuiserie Var",
    "réalisations menuiserie 83",
    "portfolio menuiserie",
    "projets cuisine sur mesure",
    "projets dressing",
    "menuiserie Toulon",
    "menuiserie Hyères",
    "menuiserie Fréjus"
  ],
  openGraph: {
    title: "Tous nos projets | Vanden Menuiserie",
    description: "Plus de 150 projets de menuiserie sur mesure réalisés dans le Var. Cuisines, dressings, placards, portes et meubles.",
    images: ["/projet/cuisine/cuisine-moderne-ilot.jpg"]
  }
};

export default function TousNosProjetsPage() {
  return (
    <main className="min-h-screen bg-white pt-20">
      <div className="max-w-7xl mx-auto px-4 pt-20 pb-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-bleu-marine mb-6">
            Tous nos projets
          </h1>
          <p className="text-xl text-bleu-marine/70 max-w-4xl mx-auto leading-relaxed">
            Explorez notre portfolio complet de réalisations sur mesure. 
            Chaque projet reflète notre engagement envers l'excellence et notre passion pour l'artisanat du bois.
          </p>
        </div>
      </div>
      
      <ProjectsGrid />
    </main>
  );
}