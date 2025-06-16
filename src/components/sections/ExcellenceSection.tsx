"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { Star, ArrowUpRight } from "lucide-react";
import { GridPattern } from "@/components/ui/grid-pattern";

export function ExcellenceSection() {
  return (
    <section className="py-24 bg-gris-perle relative overflow-hidden">
      <GridPattern
        className="opacity-20"
        cellSize="30px"
        strokeWidth="1px"
        color="#1E2B39"
        fade={true}
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 mb-6">
              <Star className="w-5 h-5 text-brun-bois" />
              <span className="text-sm font-medium text-bleu-marine">Excellence Artisanale</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-6">
              Tradition & Innovation
            </h2>
            
            <p className="text-xl text-bleu-marine/70 mb-8 leading-relaxed">
              Depuis 2022, nous perpétuons l'art de la menuiserie avec des techniques 
              traditionnelles enrichies par les innovations modernes. Chaque création 
              reflète notre passion pour le beau travail.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mb-8">
              {[
                { title: "Bois Nobles", desc: "Chêne, noyer, hêtre massifs" },
                { title: "Sur Mesure", desc: "Adapté à vos besoins" },
                { title: "Finitions", desc: "Détails soignés" },
                { title: "Garantie", desc: "10 ans sur nos créations" }
              ].map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-4"
                >
                  <h4 className="font-semibold text-bleu-marine mb-1">{item.title}</h4>
                  <p className="text-sm text-bleu-marine/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.a
              href="/a-propos"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 bg-bleu-marine text-white px-6 py-3 rounded-full font-semibold transition-all"
            >
              Notre histoire
              <ArrowUpRight className="w-4 h-4" />
            </motion.a>
          </motion.div>
          
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="space-y-4">
              <div className="relative h-[250px] rounded-2xl overflow-hidden">
                <Image
                  src="/projet/cuisine2/cuisine-contemporaine-finitions.jpg"
                  alt="Finitions de qualité"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[200px] rounded-2xl overflow-hidden">
                <Image
                  src="/projet/meuble-vasque/meuble-vasque-moderne.jpg"
                  alt="Meuble sur mesure"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-[200px] rounded-2xl overflow-hidden">
                <Image
                  src="/projet/dressing3/dressing-moderne-details.jpg"
                  alt="Détails de fabrication"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-[250px] rounded-2xl overflow-hidden">
                <Image
                  src="/projet/parquet-65m2/parquet-detail-pose.jpg"
                  alt="Pose de parquet"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}