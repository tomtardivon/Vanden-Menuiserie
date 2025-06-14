"use client";
import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { CrossPattern } from "@/components/ui/cross-pattern";
import { GridPattern } from "@/components/ui/grid-pattern";
import { GridBeam } from "@/components/ui/grid-beam";

export default function TestCouleursPage() {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-heading font-bold text-center mb-12 text-bleu-marine">
          Test des 3 Palettes de Couleurs
        </h1>

        {/* Option 1 - Élégance minimaliste */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-bleu-marine">
            Option 1 - Élégance minimaliste
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-8 rounded-lg border min-h-[200px]">
              <h3 className="font-semibold mb-4" style={{ color: '#1E2B39' }}>Blanc pur #FFFFFF</h3>
              <p style={{ color: '#1E2B39' }}>
                Sections principales : Hero, Services, Témoignages...
                Un blanc parfaitement pur et éclatant.
              </p>
            </div>
            <div style={{ backgroundColor: '#F8F9FA' }} className="p-8 rounded-lg min-h-[200px]">
              <h3 className="font-semibold mb-4" style={{ color: '#1E2B39' }}>Gris perle #F8F9FA</h3>
              <p style={{ color: '#1E2B39' }}>
                Sections alternées : très subtil, évoque la modernité 
                et la sophistication minimaliste.
              </p>
            </div>
            <div style={{ backgroundColor: '#1E2B39' }} className="p-8 rounded-lg min-h-[200px]">
              <h3 className="font-semibold mb-4 text-white">Bleu marine #1E2B39</h3>
              <p className="text-white">
                Section CTA finale : élégant, professionnel,
                inspire confiance et sérieux.
              </p>
            </div>
          </div>
        </div>

        {/* Option 2 - Beige moderne */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-bleu-marine">
            Option 2 - Beige moderne
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-8 rounded-lg border min-h-[200px]">
              <h3 className="font-semibold mb-4" style={{ color: '#1E2B39' }}>Blanc pur #FFFFFF</h3>
              <p style={{ color: '#1E2B39' }}>
                Base claire et nette, met en valeur le contenu
                avec une pureté absolue.
              </p>
            </div>
            <div style={{ backgroundColor: '#F8F5F0' }} className="p-8 rounded-lg min-h-[200px]">
              <h3 className="font-semibold mb-4" style={{ color: '#1E2B39' }}>Beige moderne #F8F5F0</h3>
              <p style={{ color: '#1E2B39' }}>
                Contemporain et raffiné, évoque les matériaux
                naturels sans être rustique.
              </p>
            </div>
            <div style={{ backgroundColor: '#1E2B39' }} className="p-8 rounded-lg min-h-[200px]">
              <h3 className="font-semibold mb-4 text-white">Bleu marine #1E2B39</h3>
              <p className="text-white">
                Contraste parfait avec les tons chauds,
                apporte structure et professionnalisme.
              </p>
            </div>
          </div>
        </div>

        {/* Option 3 - Beige chaleureux */}
        <div className="mb-20">
          <h2 className="text-2xl font-semibold mb-8 text-bleu-marine">
            Option 3 - Beige chaleureux
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-8 rounded-lg border min-h-[200px]">
              <h3 className="font-semibold mb-4" style={{ color: '#1E2B39' }}>Blanc pur #FFFFFF</h3>
              <p style={{ color: '#1E2B39' }}>
                Clarté maximale pour les sections importantes,
                contraste parfait avec le beige.
              </p>
            </div>
            <div style={{ backgroundColor: '#F9F6F1' }} className="p-8 rounded-lg min-h-[200px]">
              <h3 className="font-semibold mb-4" style={{ color: '#1E2B39' }}>Beige sable #F9F6F1</h3>
              <p style={{ color: '#1E2B39' }}>
                Chaleureux comme les copeaux de bois,
                évoque parfaitement l'artisanat menuisier.
              </p>
            </div>
            <div style={{ backgroundColor: '#1E2B39' }} className="p-8 rounded-lg min-h-[200px]">
              <h3 className="font-semibold mb-4 text-white">Bleu marine #1E2B39</h3>
              <p className="text-white">
                Ancre la palette dans le professionnalisme,
                équilibre la chaleur du beige.
              </p>
            </div>
          </div>
        </div>

        {/* NOUVELLE OPTION - 4 couleurs */}
        <div className="mb-20 border-2 border-yellow-400 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-8 text-bleu-marine bg-yellow-100 p-4 rounded">
            🌟 NOUVELLE OPTION - Palette 4 couleurs (RECOMMANDÉE)
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-6 rounded-lg border min-h-[180px]">
              <h3 className="font-semibold mb-3" style={{ color: '#1E2B39' }}>Blanc pur #FFFFFF</h3>
              <p className="text-sm" style={{ color: '#1E2B39' }}>
                Sections importantes : Hero, Témoignages principales
              </p>
            </div>
            <div style={{ backgroundColor: '#F8F5F0' }} className="p-6 rounded-lg min-h-[180px]">
              <h3 className="font-semibold mb-3" style={{ color: '#1E2B39' }}>Beige moderne #F8F5F0</h3>
              <p className="text-sm" style={{ color: '#1E2B39' }}>
                Sections chaleureuses : Services, À propos
              </p>
            </div>
            <div style={{ backgroundColor: '#F8F9FA' }} className="p-6 rounded-lg min-h-[180px]">
              <h3 className="font-semibold mb-3" style={{ color: '#1E2B39' }}>Gris perle #F8F9FA</h3>
              <p className="text-sm" style={{ color: '#1E2B39' }}>
                Sections techniques : Projets, Stats, FAQ
              </p>
            </div>
            <div style={{ backgroundColor: '#1E2B39' }} className="p-6 rounded-lg min-h-[180px]">
              <h3 className="font-semibold mb-3 text-white">Bleu marine #1E2B39</h3>
              <p className="text-sm text-white">
                CTA, Footer : impact maximum
              </p>
            </div>
          </div>

          {/* Simulation alternance 4 couleurs */}
          <h3 className="text-xl font-semibold mb-6 text-bleu-marine">
            Simulation alternance complète du site :
          </h3>
          <div className="space-y-1">
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-4 text-center border-l-4 border-green-500">
              <h4 style={{ color: '#1E2B39' }}>1. Hero Section - Blanc pur (Impact maximum)</h4>
            </div>
            <div style={{ backgroundColor: '#F8F5F0' }} className="p-4 text-center border-l-4 border-orange-500">
              <h4 style={{ color: '#1E2B39' }}>2. Présentation entreprise - Beige moderne (Chaleureux)</h4>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-4 text-center border-l-4 border-green-500">
              <h4 style={{ color: '#1E2B39' }}>3. Services - Blanc pur (Lisibilité max)</h4>
            </div>
            <div style={{ backgroundColor: '#F8F9FA' }} className="p-4 text-center border-l-4 border-blue-500">
              <h4 style={{ color: '#1E2B39' }}>4. Vision & valeurs - Gris perle (Moderne)</h4>
            </div>
            <div style={{ backgroundColor: '#F8F5F0' }} className="p-4 text-center border-l-4 border-orange-500">
              <h4 style={{ color: '#1E2B39' }}>5. Statistiques - Beige moderne (Confiance)</h4>
            </div>
            <div style={{ backgroundColor: '#F8F9FA' }} className="p-4 text-center border-l-4 border-blue-500">
              <h4 style={{ color: '#1E2B39' }}>6. Projets récents - Gris perle (Portfolio)</h4>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-4 text-center border-l-4 border-green-500">
              <h4 style={{ color: '#1E2B39' }}>7. Avant/Après - Blanc pur (Focus contenu)</h4>
            </div>
            <div style={{ backgroundColor: '#F8F5F0' }} className="p-4 text-center border-l-4 border-orange-500">
              <h4 style={{ color: '#1E2B39' }}>8. Portfolio parallax - Beige moderne (Artistic)</h4>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-4 text-center border-l-4 border-green-500">
              <h4 style={{ color: '#1E2B39' }}>9. Témoignages - Blanc pur (Crédibilité)</h4>
            </div>
            <div style={{ backgroundColor: '#F8F9FA' }} className="p-4 text-center border-l-4 border-blue-500">
              <h4 style={{ color: '#1E2B39' }}>10. FAQ - Gris perle (Informatif)</h4>
            </div>
            <div style={{ backgroundColor: '#1E2B39' }} className="p-4 text-center border-l-4 border-red-500">
              <h4 className="text-white">11. CTA Final - Bleu marine (ACTION !)</h4>
            </div>
          </div>
        </div>

        {/* PATTERNS DE FOND - Nouvelle section */}
        <div className="mb-20 border-2 border-purple-400 p-8 rounded-lg">
          <h2 className="text-3xl font-semibold mb-8 text-bleu-marine bg-purple-100 p-4 rounded">
            🎨 PATTERNS DE FOND - Exemples avec votre charte graphique
          </h2>
          
          {/* Patterns avec blanc */}
          <h3 className="text-xl font-semibold mb-6 text-bleu-marine">
            Blanc pur avec patterns subtils :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="relative bg-white rounded-lg min-h-[200px] border overflow-hidden">
              <DotPattern 
                size={1.5} 
                spacing={25} 
                color="#1E2B39" 
                fade={true}
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Dots Pattern</h4>
                <p className="text-sm text-bleu-marine/70">Points subtils bleu marine</p>
              </div>
            </div>
            
            <div className="relative bg-white rounded-lg min-h-[200px] border overflow-hidden">
              <CrossPattern 
                size={1} 
                spacing={30} 
                color="#1E2B39" 
                fade={true}
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Cross Pattern</h4>
                <p className="text-sm text-bleu-marine/70">Croix discrètes bleu marine</p>
              </div>
            </div>
            
            <div className="relative bg-white rounded-lg min-h-[200px] border overflow-hidden">
              <GridPattern 
                size={25} 
                strokeWidth={1} 
                color="#1E2B39" 
                fade={true}
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Grid Pattern</h4>
                <p className="text-sm text-bleu-marine/70">Grille fine bleu marine</p>
              </div>
            </div>
            
            <div className="relative bg-white rounded-lg min-h-[200px] border overflow-hidden">
              <GridBeam className="opacity-30">
                <div />
              </GridBeam>
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Grid Beam</h4>
                <p className="text-sm text-bleu-marine/70">Faisceaux animés</p>
              </div>
            </div>
          </div>

          {/* Patterns avec beige moderne */}
          <h3 className="text-xl font-semibold mb-6 text-bleu-marine">
            Beige moderne avec patterns :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#F8F5F0' }}>
              <DotPattern 
                className="opacity-25" 
                size={2} 
                spacing={20} 
                color="#1E2B39" 
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Dots + Beige</h4>
                <p className="text-sm text-bleu-marine/70">Chaleureux et moderne</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#F8F5F0' }}>
              <CrossPattern 
                className="opacity-20" 
                size={1.5} 
                spacing={25} 
                color="#1E2B39" 
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Croix + Beige</h4>
                <p className="text-sm text-bleu-marine/70">Artisanal et raffiné</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#F8F5F0' }}>
              <GridPattern 
                className="opacity-25" 
                size={20} 
                strokeWidth={1} 
                color="#8B4513" 
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Grid + Brun</h4>
                <p className="text-sm text-bleu-marine/70">Grille brun sur beige</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#F8F5F0' }}>
              <DotPattern 
                className="opacity-30" 
                size={3} 
                spacing={15} 
                color="#D4A574" 
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Dots Or</h4>
                <p className="text-sm text-bleu-marine/70">Points dorés subtils</p>
              </div>
            </div>
          </div>

          {/* Patterns avec gris perle */}
          <h3 className="text-xl font-semibold mb-6 text-bleu-marine">
            Gris perle avec patterns techniques :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>
              <GridPattern 
                className="opacity-30" 
                size={15} 
                strokeWidth={0.5} 
                color="#1E2B39" 
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Grid Fine</h4>
                <p className="text-sm text-bleu-marine/70">Parfait pour portfolios</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>
              <DotPattern 
                className="opacity-25" 
                size={1} 
                spacing={30} 
                color="#6B7280" 
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Dots Gris</h4>
                <p className="text-sm text-bleu-marine/70">Moderne et épuré</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>
              <CrossPattern 
                className="opacity-15" 
                size={0.8} 
                spacing={35} 
                color="#9CA3AF" 
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Croix Tech</h4>
                <p className="text-sm text-bleu-marine/70">Style technique</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#F8F9FA' }}>
              <GridPattern 
                className="opacity-20" 
                size={40} 
                strokeWidth={2} 
                color="#E5E7EB" 
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-bleu-marine">Grid Large</h4>
                <p className="text-sm text-bleu-marine/70">Espacement généreux</p>
              </div>
            </div>
          </div>

          {/* Patterns avec bleu marine */}
          <h3 className="text-xl font-semibold mb-6 text-bleu-marine">
            Bleu marine avec patterns lumineux :
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#1E2B39' }}>
              <DotPattern 
                size={3} 
                spacing={20} 
                color="#FFFFFF" 
                fade={false}
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-white">Dots Blancs</h4>
                <p className="text-sm text-white/70">Contraste maximum</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#1E2B39' }}>
              <GridPattern 
                size={15} 
                strokeWidth={2} 
                color="#FFFFFF" 
                fade={false}
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-white">Grid Blanc</h4>
                <p className="text-sm text-white/70">Élégant et pro</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#1E2B39' }}>
              <CrossPattern 
                size={3} 
                spacing={20} 
                color="#FFD700" 
                fade={false}
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-white">Croix Or</h4>
                <p className="text-sm text-white/70">Luxe et prestance</p>
              </div>
            </div>
            
            <div className="relative rounded-lg min-h-[200px] overflow-hidden" style={{ backgroundColor: '#1E2B39' }}>
              <DotPattern 
                size={2} 
                spacing={25} 
                color="#00FFFF" 
                fade={false}
              />
              <div className="relative z-10 p-6">
                <h4 className="font-semibold mb-2 text-white">Dots Cyan</h4>
                <p className="text-sm text-white/70">Contraste électrique</p>
              </div>
            </div>
          </div>
        </div>

        {/* Simulation alternance 3 couleurs pour comparaison */}
        <div>
          <h2 className="text-2xl font-semibold mb-8 text-bleu-marine">
            Comparaison - Option 3 couleurs (Beige chaleureux)
          </h2>
          <div className="space-y-1">
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-4 text-center">
              <h4 style={{ color: '#1E2B39' }}>Hero Section - Blanc pur</h4>
            </div>
            <div style={{ backgroundColor: '#F9F6F1' }} className="p-4 text-center">
              <h4 style={{ color: '#1E2B39' }}>Services Section - Beige sable</h4>
            </div>
            <div style={{ backgroundColor: '#FFFFFF' }} className="p-4 text-center">
              <h4 style={{ color: '#1E2B39' }}>Témoignages - Blanc pur</h4>
            </div>
            <div style={{ backgroundColor: '#F9F6F1' }} className="p-4 text-center">
              <h4 style={{ color: '#1E2B39' }}>Projets - Beige sable</h4>
            </div>
            <div style={{ backgroundColor: '#1E2B39' }} className="p-4 text-center">
              <h4 className="text-white">CTA Final - Bleu marine</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}