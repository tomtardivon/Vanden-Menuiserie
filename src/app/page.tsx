import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { HeroParallaxSection } from "@/components/sections/HeroParallaxSection";
import { VelocityScrollSection } from "@/components/sections/VelocityScrollSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CraftsmanshipSection } from "@/components/sections/CraftsmanshipSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { MaterialsSection } from "@/components/sections/MaterialsSection";
import { SustainabilitySection } from "@/components/sections/SustainabilitySection";
import { MaskEffectSection } from "@/components/sections/MaskEffectSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero - Introduction */}
      <HeroSection />
      {/* Engagement écologique (gris) */}
      <SustainabilitySection />

      <MaskEffectSection />


      {/* Services offerts (blanc) */}
      <ServicesSection />

      {/* Excellence artisanale */}
      <CraftsmanshipSection />

      {/* Section projets épurée */}
      <ProjectsSection />

      {/* Section "Pourquoi nous choisir" */}
      <WhyChooseUsSection />

      {/* Section "Notre processus" */}
      <ProcessSection />

      {/* Section "Nos matériaux" */}
      <MaterialsSection />


      {/* Vision et valeurs (gris) */}
      {/*     <TextRevealSection /> */}

      {/* Statistiques et expertise (blanc) */}
      <VelocityScrollSection />

      {/* Projets récents (gris) */}
      <ProjectsGallery />

      {/* Avant/Après transformations (blanc) */}
      <BeforeAfterSection />

      {/* Portfolio avec parallax (gris) */}
      <HeroParallaxSection />

      {/* Témoignages clients */}
      <TestimonialsSection />

      {/* Questions fréquentes */}
      <FAQSection />

      {/* Appel à l'action final */}
      <CTASection />
    </main>
  );
}
