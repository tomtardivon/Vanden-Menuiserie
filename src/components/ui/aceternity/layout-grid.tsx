"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

type Card = {
  id: number;
  content: React.ReactNode | string;
  className: string;
  thumbnail: string;
};

export const LayoutGrid = ({ cards }: { cards: Card[] }) => {
  // Debug: Add console logs
  console.log("LayoutGrid rendering with cards:", cards?.length || 0);
  console.log("Cards data:", cards);
  
  const [selected, setSelected] = useState<Card | null>(null);

  const handleClick = (card: Card) => {
    setSelected(card);
  };

  const handleOutsideClick = () => {
    setSelected(null);
  };

  if (!cards || cards.length === 0) {
    console.warn("LayoutGrid: No cards provided");
    return (
      <div className="w-full min-h-[400px] flex items-center justify-center text-gray-500">
        <div className="text-center">
          <div className="text-6xl mb-4">🏗️</div>
          <p className="text-xl">Aucun projet à afficher</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {cards.map((card) => {
          console.log("Rendering card:", card.id, "with className:", card.className);
          return (
            <div key={`card-container-${card.id}`} className={cn(card.className, "min-h-[300px]")}>
              <motion.div
                onClick={() => handleClick(card)}
                className={cn(
                  "relative overflow-hidden bg-white rounded-xl cursor-pointer shadow-lg",
                  "h-full min-h-[300px] group"
                )}
                layoutId={`card-${card.id}`}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <BlurImage card={card} />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-2xl mb-2">👁️</div>
                    <p className="text-sm font-medium">Voir le projet</p>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
      
      <AnimatePresence>
        {selected && (
          <div className="fixed inset-0 h-full w-full flex items-center justify-center z-50">
            <motion.div
              onClick={handleOutsideClick}
              className="bg-black opacity-80 absolute inset-0 h-full w-full cursor-pointer"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              layoutId={`card-${selected.id}`}
              className="w-full max-w-5xl h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden relative"
            >
              <motion.div className="relative">
                <BlurImage card={selected} />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="p-4"
              >
                {selected?.content}
              </motion.div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const BlurImage = ({ card }: { card: Card }) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  
  // Debug: Add console log for image loading
  console.log("BlurImage rendering for card:", card.id, "thumbnail:", card.thumbnail);
  
  return (
    <div className="relative w-full h-full min-h-[300px]">
      {!error ? (
        <Image
          src={card.thumbnail}
          fill
          onLoad={() => {
            console.log("Image loaded successfully for card:", card.id);
            setLoaded(true);
          }}
          onError={(e) => {
            console.error("Image failed to load for card:", card.id, "error:", e);
            setError(true);
          }}
          className={cn(
            "object-cover transition duration-500",
            loaded ? "opacity-100" : "opacity-50"
          )}
          alt={`Projet #${card.id}`}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      ) : (
        <div className="absolute inset-0 h-full w-full bg-gradient-to-br from-gray-200 to-gray-400 flex items-center justify-center">
          <div className="text-center text-gray-600">
            <div className="text-4xl mb-2">🏠</div>
            <div className="text-sm font-medium">Projet #{card.id}</div>
            <div className="text-xs mt-1 opacity-75">Image non disponible</div>
          </div>
        </div>
      )}
      
      {/* Loading state */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gray-100 animate-pulse flex items-center justify-center">
          <div className="text-center text-gray-400">
            <div className="animate-spin w-8 h-8 border-4 border-gray-300 border-t-gray-600 rounded-full mx-auto mb-2"></div>
            <div className="text-sm">Chargement...</div>
          </div>
        </div>
      )}
    </div>
  );
};