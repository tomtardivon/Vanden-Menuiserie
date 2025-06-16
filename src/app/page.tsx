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

// Nouvelles sections avec vraies images
import { RealProjectsSection } from "@/components/sections/RealProjectsSection";
import { TrustSection } from "@/components/sections/TrustSection";
import { ExcellenceSection } from "@/components/sections/ExcellenceSection";
import { TransformationsSection } from "@/components/sections/TransformationsSection";
import { VillesSection } from "@/components/sections/VillesSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero - Introduction */}
      <HeroSection />

      {/* NOUVELLES SECTIONS AVEC VRAIES IMAGES */}
      {/* Ils nous font confiance - avec vraies stats */}
      <TrustSection />

      {/* Nos Réalisations - avec vraies images projet */}
      <RealProjectsSection />

      {/* Excellence & Tradition - avec vraies images détails */}
      <ExcellenceSection />

      {/* Transformations - avec vraies images avant/après */}
      <TransformationsSection />

      {/* Nos villes d'intervention - Var */}
      <VillesSection />

      {/* SECTIONS ORIGINALES */}
      {/* Engagement écologique (gris) */}
      {/*  <SustainabilitySection /> */}

      <MaskEffectSection />

      {/* Services offerts (blanc) */}
      {/*       <ServicesSection /> */}

      {/* Excellence artisanale */}
      {/*       <CraftsmanshipSection /> */}

      {/* Section projets épurée */}
      {/*       <ProjectsSection /> */}

      {/* Section "Pourquoi nous choisir" */}
      <WhyChooseUsSection />

      {/* Section "Notre processus" */}
      <ProcessSection />

      {/* Section "Nos matériaux" */}
      {/*  <MaterialsSection /> */}

      {/* Vision et valeurs (gris) */}
      {/*     <TextRevealSection /> */}

      {/* Statistiques et expertise (blanc) */}
      <VelocityScrollSection />

      {/* Projets récents (gris) */}
      {/*       <ProjectsGallery />
 */}
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