"use client";

import { TextImageSection } from "./TextImageSection";

export function CraftsmanshipSection() {
  return (
    <TextImageSection
      title="L'excellence artisanale"
      description="Depuis 2022, Vanden Menuiserie allie tradition et innovation pour créer des espaces uniques. Notre équipe de maîtres artisans perpétue un savoir-faire ancestral tout en intégrant les technologies les plus modernes. Chaque projet est une œuvre unique, réalisée avec passion et précision pour transformer vos rêves en réalité."
      imageSrc="/logo-with-background.png"
      imageAlt="Atelier de menuiserie Vanden"
      imageOnLeft={false}
      backgroundColor="bg-white"
    />
  );
}