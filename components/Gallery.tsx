"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Photo = {
  src: string;
  alt: string;
  caption: string;
  span?: "tall" | "wide" | "square";
};

const PHOTOS: Photo[] = [
  {
    src: "/photos/yvana_anniv.jpg",
    alt: "Yvana sous l'arche de ballons",
    caption: "Le jour des étoiles, déjà rayonnante",
    span: "tall",
  },
  {
    src: "/photos/yvana_blanche.jpg",
    alt: "Yvana en robe blanche près des fleurs",
    caption: "Pure comme un printemps",
    span: "tall",
  },
  {
    src: "/photos/yvana_soleil.jpg",
    alt: "Yvana avec une visière orange",
    caption: "Un sourire qui invente le soleil",
    span: "square",
  },
  {
    src: "/photos/yvana_rouge1.jpg",
    alt: "Yvana en tenue rouge",
    caption: "L'art d'être soi avec audace",
    span: "tall",
  },
  {
    src: "/photos/yvana_rouge2.jpg",
    alt: "Yvana stylée dans le miroir",
    caption: "Reflet d'une élégance naturelle",
    span: "tall",
  },
  {
    src: "/photos/yvana_portrait.jpg",
    alt: "Yvana portrait",
    caption: "Simplement elle, simplement parfaite",
    span: "square",
  },
];

export default function Gallery() {
  const [selected, setSelected] = useState<Photo | null>(null);

  return (
    <section id="galerie" className="relative px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-rose-velvet/60">
            Galerie
          </p>
          <h2 className="font-display text-5xl font-light text-rose-deep md:text-6xl">
            Des fragments de toi
          </h2>
          <p className="mt-4 font-display text-xl italic text-gray-600">
            Chaque photo, un instant volé au temps.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {PHOTOS.map((photo, i) => (
            <motion.button
              key={photo.src}
              type="button"
              onClick={() => setSelected(photo)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className={`group relative cursor-zoom-in overflow-hidden rounded-2xl bg-rose-mist/40 shadow-soft ${
                photo.span === "tall"
                  ? "row-span-2 aspect-[3/5]"
                  : photo.span === "wide"
                  ? "col-span-2 aspect-[2/1]"
                  : "aspect-square"
              }`}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-5 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-lg italic text-white drop-shadow-lg">
                  {photo.caption}
                </p>
              </div>
              <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 opacity-0 backdrop-blur transition-opacity duration-500 group-hover:opacity-100">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#EC407A" strokeWidth="2.5">
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-deep/70 p-6 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-4xl"
            >
              <div className="relative h-[80vh] w-full max-w-3xl overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={selected.src}
                  alt={selected.alt}
                  fill
                  className="object-contain"
                  sizes="80vw"
                />
              </div>
              <p className="mt-4 text-center font-display text-2xl italic text-white">
                {selected.caption}
              </p>
              <button
                type="button"
                onClick={() => setSelected(null)}
                className="absolute right-2 top-2 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-rose-deep transition hover:bg-white"
                aria-label="Fermer"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
