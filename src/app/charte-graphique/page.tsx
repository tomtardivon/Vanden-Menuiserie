"use client";
import { motion } from "framer-motion";
import { DotPattern } from "@/components/ui/dot-pattern";
import { CrossPattern } from "@/components/ui/cross-pattern";
import { GridPattern } from "@/components/ui/grid-pattern";
import { PlusPattern } from "@/components/ui/plus-pattern";
import { HexagonalPattern } from "@/components/ui/hexagonal-pattern";
import { WavePattern } from "@/components/ui/wave-pattern";
import { OrganicPattern } from "@/components/ui/organic-pattern";
import { GridBeam } from "@/components/ui/grid-beam";
import { Copy, Download, Palette, Type, Layout, Layers } from "lucide-react";

export default function CharteGraphiquePage() {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const colors = [
    // Palette principale actuelle
    { name: "Blanc pur", hex: "#FFFFFF", css: "bg-white", usage: "Sections importantes, Hero, Témoignages", category: "Actuelle" },
    { name: "Beige moderne", hex: "#F8F5F0", css: "bg-beige-moderne", usage: "Sections chaleureuses, Services, À propos", category: "Actuelle" },
    { name: "Gris perle", hex: "#F8F9FA", css: "bg-gris-perle", usage: "Sections techniques, Projets, Stats, FAQ", category: "Actuelle" },
    { name: "Bleu marine", hex: "#1E2B39", css: "bg-bleu-marine", usage: "CTA, Footer, Navigation, Textes", category: "Actuelle" },
    { name: "Brun bois", hex: "#A67C52", css: "bg-brun-bois", usage: "Accents, Hover, Boutons secondaires", category: "Actuelle" },

    // Palette originale du cahier des charges
    { name: "Beige clair", hex: "#F5F1E6", css: "bg-beige-clair", usage: "Fond principal très doux (CDC)", category: "Originale CDC" },
    { name: "Gris doux", hex: "#E8E8E8", css: "bg-gris-doux", usage: "Sections, icônes secondaires (CDC)", category: "Originale CDC" },
    { name: "Blanc cassé", hex: "#FEFEFE", css: "bg-blanc-casse", usage: "Hover léger, contrepoints visuels (CDC)", category: "Originale CDC" },

    // Couleurs supplémentaires inspirées bois/nature
    { name: "Chêne naturel", hex: "#D2B48C", css: "bg-chene-naturel", usage: "Textures bois, éléments naturels", category: "Extension" },
    { name: "Noyer foncé", hex: "#8B6F47", css: "bg-noyer-fonce", usage: "Accents premium, bois noble", category: "Extension" },
    { name: "Lin naturel", hex: "#F4F0E8", css: "bg-lin-naturel", usage: "Backgrounds très doux", category: "Extension" },
    { name: "Terre cuite", hex: "#A0522D", css: "bg-terre-cuite", usage: "Accent chaleureux, terracotta", category: "Extension" },
    { name: "Vert sauge", hex: "#9CAF88", css: "bg-vert-sauge", usage: "Nature, éco-responsable", category: "Extension" },
    { name: "Crème vanille", hex: "#F7F3E9", css: "bg-creme-vanille", usage: "Soft backgrounds premium", category: "Extension" }
  ];

  const typography = [
    { name: "Playfair Display", class: "font-heading", example: "Vanden Menuiserie", usage: "Titres principaux, Headers, Signatures", description: "Serif élégant, style éditorial" },
/*     { name: "Inter", class: "font-sans", example: "Artisan menuisier depuis 2022", usage: "Texte courant, Interface", description: "Sans-serif moderne et lisible" },
    { name: "Lora", class: "font-serif", example: "Savoir-faire artisanal", usage: "Citations, Témoignages", description: "Serif chaleureux pour les contenus éditoriaux" }, */
/*     { name: "Cormorant Garamond", class: "font-serif", example: "Menuiserie d'Exception", usage: "Titres prestigieux (Option CDC)", description: "Serif classique et raffiné" },
 */    { name: "Mono", class: "font-mono", example: "SIREN: 920 023 363", usage: "Données techniques, Code", description: "Monospace pour les informations précises" }
  ];

  return (
    <div className="min-h-screen pt-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-gris-perle rounded-full px-4 py-2 mb-6">
            <Palette className="w-5 h-5 text-bleu-marine" />
            <span className="text-sm font-medium text-bleu-marine">Design System</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-bleu-marine mb-6">
            Charte Graphique
          </h1>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Guide complet de l'identité visuelle de Vanden Menuiserie.
            Couleurs, typographies, patterns et composants.
          </p>
        </motion.div>

        {/* Navigation rapide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {[
            { icon: Palette, label: "Couleurs", id: "colors" },
            { icon: Type, label: "Typographie", id: "typography" },
            { icon: Layout, label: "Patterns", id: "patterns" },
            { icon: Layers, label: "Composants", id: "components" }
          ].map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-2 px-4 py-2 bg-gris-perle hover:bg-beige-moderne text-bleu-marine rounded-full transition-all duration-300 hover:scale-105"
            >
              <item.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{item.label}</span>
            </a>
          ))}
        </motion.div>

        {/* COULEURS */}
        <section id="colors" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-bleu-marine mb-4 flex items-center gap-3">
              <Palette className="w-8 h-8" />
              Palette de Couleurs
            </h2>
            <p className="text-bleu-marine/70 text-lg">
              Notre palette de 4 couleurs principales + 2 couleurs d'accent pour une identité cohérente.
            </p>
          </motion.div>

          {/* Organisation par catégories */}
          {["Actuelle", "Originale CDC", "Extension"].map((category, catIndex) => (
            <div key={category} className="mb-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIndex * 0.2 }}
                className="mb-8"
              >
                <h3 className="text-2xl font-heading font-bold text-bleu-marine mb-2 flex items-center gap-3">
                  {category === "Actuelle" && "🎨"}
                  {category === "Originale CDC" && "📋"}
                  {category === "Extension" && "🌿"}
                  Palette {category}
                </h3>
                <p className="text-bleu-marine/60">
                  {category === "Actuelle" && "Couleurs actuellement utilisées sur le site"}
                  {category === "Originale CDC" && "Couleurs de votre cahier des charges original"}
                  {category === "Extension" && "Couleurs inspirées bois/nature pour enrichir la palette"}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {colors.filter(color => color.category === category).map((color, index) => (
                  <motion.div
                    key={color.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="bg-white rounded-2xl border shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
                      {/* Échantillon couleur avec texture décorative */}
                      <div
                        className="h-32 relative overflow-hidden"
                        style={{ backgroundColor: color.hex }}
                      >
                        {/* Texture décorative bois subtile */}
                        <div className="absolute inset-0 opacity-10">
                          <div
                            className="w-full h-full"
                            style={{
                              backgroundImage: `repeating-linear-gradient(
                                90deg,
                                transparent,
                                transparent 1px,
                                rgba(139, 69, 19, 0.1) 1px,
                                rgba(139, 69, 19, 0.1) 2px
                              )`
                            }}
                          />
                        </div>

                        {/* Overlay d'action */}
                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gradient-to-t from-black/30 to-transparent flex items-center justify-center">
                          <button
                            onClick={() => copyToClipboard(color.hex)}
                            className="bg-white/95 hover:bg-white text-bleu-marine px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 shadow-lg transform hover:scale-105 transition-all"
                          >
                            <Copy className="w-3 h-3" />
                            Copier
                          </button>
                        </div>

                        {/* Badge catégorie */}
                        <div className="absolute top-2 right-2">
                          <span className="bg-white/20 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-full font-medium">
                            {category}
                          </span>
                        </div>
                      </div>

                      {/* Informations enrichies */}
                      <div className="p-6">
                        <h3 className="font-heading font-bold text-lg text-bleu-marine mb-2 flex items-center justify-between">
                          {color.name}
                          <div className="w-6 h-6 rounded-full border-2 border-white shadow-md" style={{ backgroundColor: color.hex }}></div>
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between items-center">
                            <span className="text-bleu-marine/70 font-medium">HEX:</span>
                            <code className="font-mono bg-gris-perle hover:bg-beige-moderne px-3 py-1 rounded-full text-bleu-marine cursor-pointer transition-colors">
                              {color.hex}
                            </code>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-bleu-marine/70 font-medium">CSS:</span>
                            <code className="font-mono bg-gris-perle hover:bg-beige-moderne px-3 py-1 rounded-full text-bleu-marine cursor-pointer transition-colors">
                              {color.css}
                            </code>
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gris-perle">
                          <p className="text-xs text-bleu-marine/60 font-bold tracking-wide uppercase mb-2">Usage recommandé:</p>
                          <p className="text-sm text-bleu-marine/80 leading-relaxed">{color.usage}</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* TYPOGRAPHIE */}
        <section id="typography" className="mb-20 bg-gris-perle rounded-3xl p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-bleu-marine mb-4 flex items-center gap-3">
              <Type className="w-8 h-8" />
              Typographie
            </h2>
            <p className="text-bleu-marine/70 text-lg">
              Système typographique basé sur 3 familles de polices pour tous les usages.
            </p>
          </motion.div>

          <div className="space-y-8">
            {typography.map((font, index) => (
              <motion.div
                key={font.name}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group overflow-hidden relative"
              >
                {/* Élément décoratif d'arrière-plan */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="w-full h-full bg-gradient-to-br from-brun-bois to-transparent rounded-full transform rotate-12 scale-150"></div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6 items-center relative">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="font-heading font-bold text-xl text-bleu-marine">
                        {font.name}
                      </h3>
                      {font.name === "Playfair Display" && (
                        <span className="bg-gradient-to-r from-brun-bois to-gold text-white text-xs px-2 py-1 rounded-full font-bold">
                          ✨ ACTUELLE
                        </span>
                      )}
                      {font.name.includes("Cormorant") && (
                        <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full font-bold">
                          CDC
                        </span>
                      )}
                    </div>
                    <code className="font-mono bg-gris-perle hover:bg-beige-moderne px-3 py-1 rounded-full text-bleu-marine text-sm transition-colors cursor-pointer">
                      {font.class}
                    </code>
                    <p className="text-bleu-marine/60 text-sm mt-3 font-medium">{font.usage}</p>
                    <p className="text-bleu-marine/50 text-xs mt-2 italic">{font.description}</p>
                  </div>
                  <div className="lg:col-span-2">
                    <div className={`${font.class} space-y-3`}>
                      <div className="text-4xl md:text-5xl font-bold text-bleu-marine leading-tight">
                        {font.example}
                      </div>
                      <div className="text-2xl font-semibold text-bleu-marine/80">
                        {font.example}
                      </div>
                      <div className="text-lg text-bleu-marine/70">
                        {font.example}
                      </div>
                      <div className="text-base text-bleu-marine/60">
                        {font.example}
                      </div>
                      <div className="text-sm text-bleu-marine/50">
                        {font.example}
                      </div>

                      {/* Démonstration de styles pour Playfair */}
                      {font.name === "Playfair Display" && (
                        <div className="pt-4 border-t border-gris-perle">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-bleu-marine">
                            <div>
                              <p className="text-xs text-bleu-marine/60 mb-1 font-bold uppercase tracking-wide">Regular</p>
                              <p className={`${font.class} text-lg`}>Savoir-faire artisanal</p>
                            </div>
                            <div>
                              <p className="text-xs text-bleu-marine/60 mb-1 font-bold uppercase tracking-wide">Italic</p>
                              <p className={`${font.class} text-lg italic`}>Création sur mesure</p>
                            </div>
                            <div>
                              <p className="text-xs text-bleu-marine/60 mb-1 font-bold uppercase tracking-wide">Black</p>
                              <p className={`${font.class} text-lg font-black`}>Menuiserie d'Art</p>
                            </div>
                            <div>
                              <p className="text-xs text-bleu-marine/60 mb-1 font-bold uppercase tracking-wide">Small Caps</p>
                              <p className={`${font.class} text-lg font-semibold`} style={{ fontVariant: 'small-caps' }}>Pierrefeu-du-Var</p>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Section décorative des tailles standardisées */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-beige-moderne to-white rounded-2xl p-8 shadow-lg border-2 border-dashed border-brun-bois/20"
            >
              <h4 className="font-heading font-bold text-xl text-bleu-marine mb-6 flex items-center gap-2">
                📏 Échelle Typographique Standardisée
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { label: "Display", size: "text-6xl", example: "Hero" },
                  { label: "H1", size: "text-4xl", example: "Page Title" },
                  { label: "H2", size: "text-2xl", example: "Section" },
                  { label: "H3", size: "text-xl", example: "Subsection" },
                  { label: "Body Large", size: "text-lg", example: "Lead text" },
                  { label: "Body", size: "text-base", example: "Paragraph" },
                  { label: "Small", size: "text-sm", example: "Caption" },
                  { label: "Tiny", size: "text-xs", example: "Meta" }
                ].map((type) => (
                  <div key={type.label} className="text-center">
                    <p className="text-xs text-bleu-marine/60 mb-2 font-bold uppercase tracking-wide">{type.label}</p>
                    <div className={`font-heading ${type.size} text-bleu-marine font-bold mb-1`}>
                      {type.example}
                    </div>
                    <code className="text-xs text-bleu-marine/50 font-mono">{type.size}</code>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* PATTERNS */}
        <section id="patterns" className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-bleu-marine mb-4 flex items-center gap-3">
              <Layout className="w-8 h-8" />
              Patterns de Fond
            </h2>
            <p className="text-bleu-marine/70 text-lg">
              Patterns SVG optimisés de qualité professionnelle pour enrichir vos arrière-plans avec subtilité.
            </p>
          </motion.div>

          {/* Patterns sur blanc */}
          <div className="mb-12">
            <h3 className="text-2xl font-heading font-bold text-bleu-marine mb-6">
              🎨 Patterns Premium - Fonds clairs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dots",
                  description: "Points SVG haute qualité",
                  props: { dotSize: 1.2, gap: 15, dotColor: "#1E2B39", fade: true, opacity: 0.3 },
                  render: (props: any) => <DotPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Cross",
                  description: "Croix Hero Patterns",
                  props: { crossSize: 40, crossColor: "#1E2B39", fade: true, opacity: 0.25 },
                  render: (props: any) => <CrossPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Grid",
                  description: "Grille vectorielle nette",
                  props: { cellSize: "25px", strokeWidth: "1px", color: "#1E2B39", fade: true, opacity: 0.3 },
                  render: (props: any) => <GridPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Plus",
                  description: "Pattern plus sophistiqué",
                  props: { plusSize: 60, plusColor: "#1E2B39", fade: true, opacity: 0.2 },
                  render: (props: any) => <PlusPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Hexagonal",
                  description: "Géométrie hexagonale",
                  props: { size: 40, color: "#1E2B39", variant: "outline", fade: true, opacity: 0.15 },
                  render: (props: any) => <HexagonalPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Wave",
                  description: "Ondulations organiques",
                  props: { amplitude: 20, frequency: 80, color: "#1E2B39", variant: "sine", fade: true, opacity: 0.2 },
                  render: (props: any) => <WavePattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Wood",
                  description: "Texture bois naturel",
                  props: { scale: 60, color: "#A67C52", variant: "wood", fade: true, opacity: 0.12 },
                  render: (props: any) => <OrganicPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Beam",
                  description: "Faisceaux animés",
                  props: { color: "#A67C52", variant: "vertical", speed: 3, className: "opacity-40" },
                  render: (props: any) => <GridBeam {...props}><div /></GridBeam> // eslint-disable-line @typescript-eslint/no-explicit-any
                }
              ].map((pattern, index) => (
                <motion.div
                  key={pattern.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white rounded-xl border min-h-[200px] overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  {pattern.render(pattern.props)}
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="font-heading font-bold text-bleu-marine mb-2">
                        {pattern.name}
                      </h4>
                      <p className="text-sm text-bleu-marine/70">
                        {pattern.description}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`<${pattern.name}Pattern ${Object.entries(pattern.props).map(([key, value]) => `${key}={${JSON.stringify(value)}}`).join(' ')} />`)}
                      className="self-start mt-4 bg-bleu-marine/10 hover:bg-bleu-marine/20 text-bleu-marine px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all"
                    >
                      Copier SVG
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Patterns sur sombre */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-bleu-marine mb-6">
              ✨ Patterns Premium - Fonds sombres
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Dots Gold",
                  description: "Points dorés élégants",
                  props: { dotSize: 1.5, gap: 18, dotColor: "#D4AF37", fade: false, opacity: 0.6 },
                  render: (props: any) => <DotPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Cross Bois",
                  description: "Croix ton bois",
                  props: { crossSize: 40, crossColor: "#A67C52", fade: false, opacity: 0.5 },
                  render: (props: any) => <CrossPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Grid White",
                  description: "Grille blanc pur",
                  props: { cellSize: "20px", strokeWidth: "1px", color: "#FFFFFF", fade: false, opacity: 0.4 },
                  render: (props: any) => <GridPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Plus Copper",
                  description: "Plus cuivré",
                  props: { plusSize: 50, plusColor: "#B87333", fade: false, opacity: 0.4 },
                  render: (props: any) => <PlusPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Hex Honey",
                  description: "Hexagones miel",
                  props: { size: 35, color: "#FFD700", variant: "honeycomb", fade: false, opacity: 0.3 },
                  render: (props: any) => <HexagonalPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Wave Cream",
                  description: "Vagues crème",
                  props: { amplitude: 15, frequency: 70, color: "#F5F5DC", variant: "organic", fade: false, opacity: 0.25 },
                  render: (props: any) => <WavePattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Marble",
                  description: "Marbre naturel",
                  props: { scale: 50, color: "#E8E8E8", variant: "marble", fade: false, opacity: 0.2 },
                  render: (props: any) => <OrganicPattern {...props} /> // eslint-disable-line @typescript-eslint/no-explicit-any
                },
                {
                  name: "Beam Cross",
                  description: "Faisceaux croisés",
                  props: { color: "#FFD700", variant: "cross", speed: 4, className: "opacity-60" },
                  render: (props: any) => <GridBeam {...props}><div /></GridBeam> // eslint-disable-line @typescript-eslint/no-explicit-any
                }
              ].map((pattern, index) => (
                <motion.div
                  key={`dark-${pattern.name}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative rounded-xl min-h-[200px] overflow-hidden group hover:shadow-lg transition-all duration-300"
                  style={{ backgroundColor: '#1E2B39' }}
                >
                  {pattern.render(pattern.props)}
                  <div className="relative z-10 p-6 flex flex-col justify-between h-full">
                    <div>
                      <h4 className="font-heading font-bold text-white mb-2">
                        {pattern.name}
                      </h4>
                      <p className="text-sm text-white/70">
                        {pattern.description}
                      </p>
                    </div>
                    <button
                      onClick={() => copyToClipboard(`<${pattern.name.split(' ')[0]}Pattern ${Object.entries(pattern.props).map(([key, value]) => `${key}={${JSON.stringify(value)}}`).join(' ')} />`)}
                      className="self-start mt-4 bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-full text-xs font-medium opacity-0 group-hover:opacity-100 transition-all"
                    >
                      Copier SVG
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPOSANTS */}
        <section id="components" className="mb-20 bg-beige-moderne rounded-3xl p-8 lg:p-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-bleu-marine mb-4 flex items-center gap-3">
              <Layers className="w-8 h-8" />
              Composants & Éléments
            </h2>
            <p className="text-bleu-marine/70 text-lg">
              Éléments d'interface standardisés pour une cohérence parfaite.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Boutons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="font-heading font-bold text-bleu-marine mb-4">Boutons</h4>
              <div className="space-y-3">
                <button className="w-full bg-bleu-marine hover:bg-brun-bois text-white px-6 py-3 rounded-full font-semibold transition-all">
                  Primaire
                </button>
                <button className="w-full border-2 border-bleu-marine text-bleu-marine hover:bg-bleu-marine hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
                  Secondaire
                </button>
                <button className="w-full bg-gris-perle hover:bg-beige-moderne text-bleu-marine px-6 py-3 rounded-full font-semibold transition-all">
                  Subtle
                </button>
              </div>
            </motion.div>

            {/* Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="font-heading font-bold text-bleu-marine mb-4">Cards</h4>
              <div className="space-y-4">
                <div className="bg-gris-perle rounded-xl p-4">
                  <h5 className="font-semibold text-bleu-marine mb-2">Titre</h5>
                  <p className="text-sm text-bleu-marine/70">Description du contenu...</p>
                </div>
                <div className="border border-gris-perle rounded-xl p-4 hover:border-bleu-marine/30 transition-colors">
                  <h5 className="font-semibold text-bleu-marine mb-2">Card bordée</h5>
                  <p className="text-sm text-bleu-marine/70">Avec bordure subtile...</p>
                </div>
              </div>
            </motion.div>

            {/* Badges */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-6 shadow-lg"
            >
              <h4 className="font-heading font-bold text-bleu-marine mb-4">Badges & Tags</h4>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  <span className="bg-bleu-marine text-white px-3 py-1 rounded-full text-sm font-medium">
                    Primaire
                  </span>
                  <span className="bg-brun-bois text-white px-3 py-1 rounded-full text-sm font-medium">
                    Accent
                  </span>
                  <span className="bg-gris-perle text-bleu-marine px-3 py-1 rounded-full text-sm font-medium">
                    Neutre
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-bleu-marine text-bleu-marine px-3 py-1 rounded-full text-sm font-medium">
                    Outlined
                  </span>
                  <span className="border border-brun-bois text-brun-bois px-3 py-1 rounded-full text-sm font-medium">
                    Accent Out
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ÉLÉMENTS DÉCORATIFS & LUXE */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-heading font-bold text-bleu-marine mb-4 flex items-center gap-3">
              ✨ Éléments Décoratifs & Luxe
            </h2>
            <p className="text-bleu-marine/70 text-lg">
              Éléments visuels pour une identité premium et artisanale.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Textures bois */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h4 className="font-heading font-bold text-bleu-marine mb-4">🌳 Textures Bois</h4>
              <div className="space-y-4">
                <div className="h-16 rounded-lg relative overflow-hidden" style={{ backgroundColor: '#D2B48C' }}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(90deg, 
                      rgba(139, 69, 19, 0.1) 0px, 
                      transparent 1px, 
                      transparent 3px, 
                      rgba(139, 69, 19, 0.1) 4px)`
                  }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-bleu-marine font-medium text-sm">Veinage chêne</span>
                  </div>
                </div>
                <div className="h-16 rounded-lg relative overflow-hidden" style={{ backgroundColor: '#8B6F47' }}>
                  <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(45deg, 
                      rgba(139, 69, 19, 0.2) 0px, 
                      transparent 2px, 
                      transparent 6px, 
                      rgba(139, 69, 19, 0.2) 8px)`
                  }}></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-medium text-sm">Noyer premium</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Ornements */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h4 className="font-heading font-bold text-bleu-marine mb-4">🎨 Ornements</h4>
              <div className="space-y-6 text-center">
                <div className="text-4xl text-brun-bois">⚜</div>
                <div className="flex justify-center items-center gap-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-brun-bois"></div>
                  <div className="w-2 h-2 bg-brun-bois rounded-full"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-brun-bois"></div>
                </div>
                <div className="text-2xl text-brun-bois">❋ ✦ ❋</div>
                <div className="border-t border-dashed border-brun-bois/30 pt-4">
                  <span className="text-xs text-bleu-marine/60 font-mono tracking-wider">VANDEN</span>
                </div>
              </div>
            </motion.div>

            {/* Effets premium */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gradient-to-br from-bleu-marine to-bleu-marine/80 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all text-white"
            >
              <h4 className="font-heading font-bold mb-4">✨ Effets Premium</h4>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <span className="text-sm text-white">Glassmorphism</span>
                </div>
                <div className="bg-gradient-to-r from-brun-bois to-gold text-white rounded-lg p-3 shadow-lg">
                  <span className="text-sm font-bold">Gradient Gold</span>
                </div>
                <div className="border-2 border-white/30 rounded-lg p-3 hover:border-white/60 transition-colors">
                  <span className="text-sm">Bordures élégantes</span>
                </div>
              </div>
            </motion.div>

            {/* Spacing & Grilles */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-gris-perle rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h4 className="font-heading font-bold text-bleu-marine mb-4">📐 Spacing System</h4>
              <div className="space-y-3">
                {[2, 4, 6, 8, 12, 16, 20, 24].map((space) => (
                  <div key={space} className="flex items-center gap-3">
                    <div
                      className="bg-brun-bois rounded"
                      style={{ width: `${space * 2}px`, height: '8px' }}
                    ></div>
                    <span className="text-xs font-mono text-bleu-marine">{space * 4}px</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Icônes métier */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h4 className="font-heading font-bold text-bleu-marine mb-4">🔨 Icônes Métier</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="p-3 bg-gris-perle rounded-lg hover:bg-beige-moderne transition-colors">
                  <div className="text-2xl mb-1">🪚</div>
                  <span className="text-xs text-bleu-marine">Scie</span>
                </div>
                <div className="p-3 bg-gris-perle rounded-lg hover:bg-beige-moderne transition-colors">
                  <div className="text-2xl mb-1">🔨</div>
                  <span className="text-xs text-bleu-marine">Marteau</span>
                </div>
                <div className="p-3 bg-gris-perle rounded-lg hover:bg-beige-moderne transition-colors">
                  <div className="text-2xl mb-1">📐</div>
                  <span className="text-xs text-bleu-marine">Équerre</span>
                </div>
                <div className="p-3 bg-gris-perle rounded-lg hover:bg-beige-moderne transition-colors">
                  <div className="text-2xl mb-1">🪵</div>
                  <span className="text-xs text-bleu-marine">Bois</span>
                </div>
                <div className="p-3 bg-gris-perle rounded-lg hover:bg-beige-moderne transition-colors">
                  <div className="text-2xl mb-1">🏠</div>
                  <span className="text-xs text-bleu-marine">Maison</span>
                </div>
                <div className="p-3 bg-gris-perle rounded-lg hover:bg-beige-moderne transition-colors">
                  <div className="text-2xl mb-1">✨</div>
                  <span className="text-xs text-bleu-marine">Craft</span>
                </div>
              </div>
            </motion.div>

            {/* Signatures & Labels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-beige-moderne rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all"
            >
              <h4 className="font-heading font-bold text-bleu-marine mb-4">🏷️ Labels Premium</h4>
              <div className="space-y-4">
                <div className="bg-bleu-marine text-white px-4 py-2 rounded-full text-center">
                  <span className="text-sm font-bold tracking-wide">SUR MESURE</span>
                </div>
                <div className="border-2 border-brun-bois text-brun-bois px-4 py-2 rounded-full text-center">
                  <span className="text-sm font-bold">ARTISANAL</span>
                </div>
                <div className="bg-gradient-to-r from-brun-bois to-gold text-white px-4 py-2 rounded-full text-center">
                  <span className="text-sm font-bold">PREMIUM</span>
                </div>
                <div className="bg-white border border-gris-doux text-bleu-marine px-4 py-2 rounded-full text-center">
                  <span className="text-sm font-bold">DEPUIS 2022</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer de la charte */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative bg-bleu-marine rounded-3xl p-12 text-center text-white overflow-hidden"
        >
          {/* Texture décorative d'arrière-plan */}
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `repeating-linear-gradient(
                  45deg,
                  transparent,
                  transparent 10px,
                  rgba(255, 255, 255, 0.1) 10px,
                  rgba(255, 255, 255, 0.1) 20px
                )`
              }}
            />
          </div>

          <div className="relative">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6">
              <span className="text-xl">🎨</span>
              <span className="text-sm font-medium">Design System Complet</span>
            </div>

            <h3 className="text-4xl font-heading font-bold mb-4">
              Charte Graphique Vanden Menuiserie
            </h3>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto text-lg">
              Cette charte garantit une identité visuelle cohérente et professionnelle
              sur tous les supports de communication. Artisanat moderne, élégance intemporelle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-bleu-marine px-8 py-4 rounded-full font-bold hover:bg-beige-moderne transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <Download className="w-5 h-5 inline mr-2" />
                Télécharger PDF
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-bleu-marine px-8 py-4 rounded-full font-bold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                <span className="mr-2">🔗</span>
                Partager la charte
              </button>
            </div>

            <div className="mt-8 pt-8 border-t border-white/20">
              <p className="text-white/60 text-sm">
                © 2024 Vanden Menuiserie • Design System v2.0 • Mattias Vandenkoornhuyse
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}