"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface TextImageSectionProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  imageOnLeft?: boolean;
  backgroundColor?: string;
}

export function TextImageSection({
  title,
  description,
  imageSrc,
  imageAlt,
  imageOnLeft = false,
  backgroundColor = "bg-white",
}: TextImageSectionProps) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {imageOnLeft ? (
            <>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">{title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
            </>
          ) : (
            <>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-gray-900">{title}</h2>
                <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
              >
                <Image
                  src={imageSrc}
                  alt={imageAlt}
                  fill
                  className="object-cover"
                />
              </motion.div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}