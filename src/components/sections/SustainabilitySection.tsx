"use client";

import { TextImageSection } from "./TextImageSection";

export function SustainabilitySection() {
  return (
    <TextImageSection
      title="Engagement écologique et durabilité"
      description="Chez Vanden Menuiserie, nous sommes engagés dans une démarche écoresponsable. Nous sélectionnons rigoureusement nos bois issus de forêts gérées durablement et privilégions les fournisseurs locaux. Nos techniques de fabrication minimisent les déchets et nous recyclons 95% de nos chutes. Choisir Vanden, c'est opter pour une menuiserie belle, durable et respectueuse de l'environnement."
      imageSrc="/logo-whitout-background.png"
      imageAlt="Bois durable et écologique"
      imageOnLeft={true}
      backgroundColor="bg-gris-perle"
    />
  );
}