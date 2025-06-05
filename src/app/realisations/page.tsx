import { Metadata } from "next";
import { RealisationsPageContent } from "./RealisationsPageContent";

export const metadata: Metadata = {
  title: "Réalisations | Vanden Menuiserie - Portfolio de nos créations",
  description: "Découvrez nos réalisations de menuiserie sur mesure : cuisines, escaliers, dressings, terrasses. Portfolio de projets d'exception dans le Var.",
  keywords: "réalisations menuiserie, portfolio menuisier, projets menuiserie var, cuisine sur mesure réalisations",
};

export default function RealisationsPage() {
  return <RealisationsPageContent />;
}