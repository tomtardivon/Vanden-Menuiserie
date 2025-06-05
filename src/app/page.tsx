import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsGallery } from "@/components/sections/ProjectsGallery";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { MaskEffectSection } from "@/components/sections/MaskEffectSection";
import { ThreeDGallerySection } from "@/components/sections/ThreeDGallerySection";
import { HeroParallaxSection } from "@/components/sections/HeroParallaxSection";
import { VelocityScrollSection } from "@/components/sections/VelocityScrollSection";
import { TextRevealSection } from "@/components/sections/TextRevealSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main className="relative">
      <HeroSection />
      <MaskEffectSection />
      <VelocityScrollSection />
      <ServicesSection />
      <TextRevealSection />
      <ProjectsGallery />
      <TestimonialsSection />
      <ThreeDGallerySection />
      <HeroParallaxSection />
      <BeforeAfterSection />
    </main>
  );
}
