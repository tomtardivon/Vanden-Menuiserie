"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { motion } from "framer-motion";

export const ThreeDGallerySection = () => {
  const images = [
    "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1600585152915-d208bec867a1?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1569949381669-ecf31ae8e613?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?w=600&h=400&auto=format&q=80",
    "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=400&auto=format&q=80",
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold text-bleu-marine mb-6">
            Galerie 3D
            <span className="block text-bleu-marine/70">de nos créations</span>
          </h2>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Explorez nos réalisations sous tous les angles. 
            Chaque projet raconte une histoire unique.
          </p>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        <ThreeDMarquee 
          images={images} 
          className="bg-gray-950/5 ring-1 ring-neutral-300/10"
        />
      </motion.div>
    </section>
  );
};