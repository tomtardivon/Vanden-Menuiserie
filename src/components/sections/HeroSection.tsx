"use client";
import { Spotlight } from "@/components/ui/aceternity/spotlight";
import { TextGenerateEffect } from "@/components/ui/aceternity/text-generate-effect";
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { motion } from "framer-motion";
import { Phone, ArrowRight, Star } from "lucide-react";

export const HeroSection = () => {
  return (
    <div className="min-h-screen w-full rounded-md flex md:items-center md:justify-center bg-white antialiased bg-grid-black/[0.02] relative overflow-hidden pt-20">
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#D4AF37" />
      
      {/* Background grain texture */}
      <div className="absolute inset-0 wood-grain opacity-30"></div>
      
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <div className="text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full px-4 py-2 mb-8"
          >
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-sm font-medium text-gray-900">
              100% d'avis 5 étoiles
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-900 font-heading"
          >
            Vanden Menuiserie
          </motion.h1>
          
          <TypewriterEffectSmooth 
            words={[
              { text: "Artisan", className: "text-gray-600" },
              { text: "Menuisier", className: "text-gray-600" },
              { text: "dans", className: "text-gray-600" },
              { text: "le", className: "text-gray-600" },
              { text: "Var", className: "text-wood-dark font-bold" },
              { text: "depuis", className: "text-gray-600" },
              { text: "1985", className: "text-gold font-bold" }
            ]}
            className="mt-4 justify-center"
            cursorClassName="bg-gold"
          />

          {/* Animated subtitle */}
          <TextGenerateEffect 
            words="Créateur de meubles sur mesure, cuisines équipées et aménagements intérieurs d'exception" 
            className="text-center mt-6 max-w-4xl mx-auto text-lg md:text-xl [&>div>div]:!text-gray-600"
          />

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
            className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <div className="flex items-center gap-2 text-gray-900">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">07 62 14 43 40</span>
            </div>
            <div className="hidden sm:block w-px h-6 bg-gray-200"></div>
            <div className="text-gray-600">
              <span>📧 vandenmenuiserie@gmail.com</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 bg-black hover:bg-gray-900 text-white rounded-full font-semibold text-lg shadow-lg transition-all duration-300 flex items-center gap-3"
            >
              Devis Gratuit 24h
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-black text-black hover:bg-black hover:text-white rounded-full font-semibold text-lg transition-all duration-300"
            >
              Découvrir nos Réalisations
            </motion.button>
          </motion.div>

          {/* Zone d'intervention */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="mt-12 text-center"
          >
            <p className="text-gray-600 text-sm">
              <span className="font-semibold">Zone d'intervention :</span> Toulon, Hyères, Fréjus, La Seyne-sur-Mer, Draguignan et tout le Var
            </p>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-gray-600 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};