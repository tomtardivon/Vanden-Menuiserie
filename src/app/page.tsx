import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ThreeDGallerySection } from "@/components/sections/ThreeDGallerySection";
import { HeroParallaxSection } from "@/components/sections/HeroParallaxSection";
import { VelocityScrollSection } from "@/components/sections/VelocityScrollSection";
import { TextRevealSection } from "@/components/sections/TextRevealSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { InfiniteTestimonialsSection } from "@/components/sections/InfiniteTestimonialsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { CraftsmanshipSection } from "@/components/sections/CraftsmanshipSection";
import { SustainabilitySection } from "@/components/sections/SustainabilitySection";
import { MaskEffectSection } from "@/components/sections/MaskEffectSection";

export default function Home() {
  return (
    <main className="relative">
      {/* Hero - Introduction (blanc) */}
      <HeroSection />

      {/* Engagement écologique (gris) */}
      <SustainabilitySection />

      <MaskEffectSection />

      {/* Excellence artisanale (blanc) */}
      <CraftsmanshipSection />

      {/* Services offerts (blanc) */}
      <ServicesSection />

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

      {/* Témoignages clients (blanc) */}
      <TestimonialsSection />

      {/* Questions fréquentes (blanc) */}
      <FAQSection />

      {/* Appel à l'action final (noir) */}
      <CTASection />
    </main>
  );
}
