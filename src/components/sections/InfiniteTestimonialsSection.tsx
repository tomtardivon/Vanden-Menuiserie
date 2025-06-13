"use client";
 
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
 
export function InfiniteTestimonialsSection() {
  return (
    <section className="py-24 bg-gris-perle">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Découvrez les témoignages de nos clients satisfaits
          </p>
        </div>
        
        <div className="h-[40rem] rounded-md flex flex-col antialiased bg-transparent items-center justify-center relative overflow-hidden">
          <InfiniteMovingCards
            items={testimonials}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </section>
  );
}
 
const testimonials = [
  {
    quote: "Mattias a transformé notre cuisine en un véritable espace de vie. La qualité du travail est exceptionnelle, chaque détail a été pensé avec soin. Nous recommandons vivement Vanden Menuiserie.",
    name: "Marie et Pierre D.",
    title: "Cuisine sur mesure - Hyères",
  },
  {
    quote: "Un escalier qui est devenu la pièce maîtresse de notre intérieur. Un vrai travail d'artiste ! Le professionnalisme et la passion de Mattias sont remarquables.",
    name: "Sophie M.",
    title: "Escalier suspendu - Toulon",
  },
  {
    quote: "Un dressing parfaitement pensé qui a transformé notre chambre. Chaque centimètre est optimisé. Service impeccable du début à la fin du projet.",
    name: "Laurent B.",
    title: "Dressing sur mesure - Fréjus",
  },
  {
    quote: "Notre terrasse est devenue notre pièce préférée. Parfaite pour profiter de la vue mer ! Travail soigné et matériaux de qualité exceptionnelle.",
    name: "Famille Rossi",
    title: "Terrasse bois - La Seyne",
  },
  {
    quote: "Une bibliothèque digne d'un château ! Le travail du bois est remarquable. Mattias a su concrétiser parfaitement notre vision.",
    name: "Jean-Paul V.",
    title: "Bibliothèque - Draguignan",
  },
  {
    quote: "Une cave exceptionnelle qui met en valeur notre collection. Un vrai bijou ! L'expertise technique et le sens esthétique sont au rendez-vous.",
    name: "Philippe R.",
    title: "Cave à vin - Saint-Tropez",
  },
];