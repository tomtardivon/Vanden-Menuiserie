import { Metadata } from "next";
import { ServicesPageContent } from "./ServicesPageContent";

export const metadata: Metadata = {
  title: "Services | Vanden Menuiserie - Menuisier dans le Var",
  description: "Découvrez nos services de menuiserie sur mesure : cuisines, dressings, escaliers, terrasses. Artisan menuisier professionnel dans le Var depuis 1985.",
  keywords: "services menuiserie, cuisine sur mesure, dressing, escalier bois, terrasse, menuisier var",
};

export default function ServicesPage() {
  return <ServicesPageContent />;
}