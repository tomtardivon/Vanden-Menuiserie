"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Quels types de bois utilisez-vous pour vos réalisations ?",
    answer: "Nous travaillons avec une large gamme d'essences de bois : chêne, hêtre, frêne, noyer et des bois exotiques comme le teck ou l'ipé pour les terrasses. Chaque essence est sélectionnée selon vos besoins et votre budget."
  },
  {
    question: "Combien de temps prend la réalisation d'un projet sur mesure ?",
    answer: "Le délai varie selon la complexité du projet. En général : 2-3 semaines pour un meuble simple, 3-4 semaines pour une cuisine complète, et 4-6 semaines pour des projets plus complexes comme un escalier."
  },
  {
    question: "Proposez-vous un service de conception 3D ?",
    answer: "Oui, nous réalisons des plans 3D détaillés pour tous nos projets sur mesure. Cela vous permet de visualiser votre projet avant sa réalisation et d'apporter des modifications si nécessaire."
  },
  {
    question: "Intervenez-vous sur toute la région PACA ?",
    answer: "Nous intervenons principalement dans le Var : Toulon, Hyères, Fréjus, La Seyne-sur-Mer, Draguignan et leurs environs. Pour des projets spécifiques, nous pouvons étudier des interventions plus éloignées."
  },
  {
    question: "Quelle garantie offrez-vous sur vos réalisations ?",
    answer: "Nous offrons une garantie de 10 ans sur la structure de nos réalisations et de 2 ans sur les finitions. Notre savoir-faire artisanal garantit des créations durables."
  },
  {
    question: "Comment se déroule la première consultation ?",
    answer: "La première consultation est gratuite. Nous nous déplaçons chez vous pour discuter de votre projet, prendre les mesures et vous conseiller sur les meilleures solutions adaptées à vos besoins et votre budget."
  }
];

const FAQItem = ({ faq, index }: { faq: typeof faqs[0]; index: number }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full p-6 flex items-center justify-between text-left group"
      >
        <h3 className="text-lg font-semibold text-bleu-marine pr-4 group-hover:text-brun-bois transition-colors">
          {faq.question}
        </h3>
        <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-gris-doux flex items-center justify-center transition-all ${isOpen ? 'bg-bleu-marine' : ''}`}>
          <ChevronDown 
            className={`w-5 h-5 transition-transform ${isOpen ? 'rotate-180 text-white' : 'text-bleu-marine/70'}`}
          />
        </div>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <p className="px-6 pb-6 text-bleu-marine/70 leading-relaxed">{faq.answer}</p>
      </motion.div>
    </motion.div>
  );
};

export const FAQSection = () => {
  return (
    <section className="py-24 bg-gris-perle">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-bleu-marine mb-4">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-bleu-marine/70">
            Tout ce que vous devez savoir sur nos services
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-bleu-marine/70 mb-4">Vous avez d'autres questions ?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-bleu-marine text-white px-6 py-3 rounded-full font-semibold hover:bg-brun-bois transition-colors"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  );
};