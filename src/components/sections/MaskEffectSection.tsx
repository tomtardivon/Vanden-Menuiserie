"use client";
import { MaskContainer } from "@/components/ui/svg-mask-effect";

export const MaskEffectSection = () => {
  return (
    <section className="relative">
      <MaskContainer
        revealText={
          <div className="max-w-4xl mx-auto text-center px-4">
            <p className="text-4xl md:text-6xl font-heading font-bold text-gray-900">
              Vanden Menuiserie
            </p>
            <p className="text-xl md:text-2xl mt-4 text-gray-600">
              L'excellence du bois au service de vos projets
            </p>
            <div className="mt-8">
              <p className="text-lg text-gray-700 leading-relaxed">
                Depuis 1985, nous transformons vos idées en réalisations uniques.
                Chaque création est le fruit d'un savoir-faire transmis de génération
                en génération, alliant techniques traditionnelles et innovations modernes.
              </p>
            </div>
          </div>
        }
        className="h-[60vh] bg-gradient-to-b from-gray-50 to-white"
      >
        <span className="text-5xl md:text-7xl font-heading font-bold text-white">
          Découvrez l'art <br /> de la menuiserie
        </span>
      </MaskContainer>
    </section>
  );
};