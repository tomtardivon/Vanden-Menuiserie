"use client";
import { motion } from "framer-motion";
import { Users, Award, MapPin, Calendar } from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";

export function TrustSection() {
  return (
    <section className="py-24 bg-gris-perle relative overflow-hidden">
      <DotPattern
        className="opacity-30"
        dotSize={1.5}
        gap={40}
        dotColor="#1E2B39"
        fade={true}
      />
      <div className="max-w-7xl mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-bleu-marine/70 max-w-3xl mx-auto">
            Plus de 150 familles nous ont fait confiance pour transformer leur intérieur
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { icon: <Users className="w-8 h-8 mx-auto mb-3 text-brun-bois" />, number: "150+", label: "Clients satisfaits" },
            { icon: <Award className="w-8 h-8 mx-auto mb-3 text-brun-bois" />, number: "5⭐", label: "Note moyenne" },
            { icon: <MapPin className="w-8 h-8 mx-auto mb-3 text-brun-bois" />, number: "12", label: "Villes du Var" },
            { icon: <Calendar className="w-8 h-8 mx-auto mb-3 text-brun-bois" />, number: "2022", label: "Depuis" }
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-2xl p-6 group-hover:shadow-lg transition-all duration-300">
                {stat.icon}
                <div className="text-3xl md:text-4xl font-bold text-bleu-marine mb-2">
                  {stat.number}
                </div>
                <div className="text-bleu-marine/70 text-sm">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}