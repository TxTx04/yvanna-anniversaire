"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

type Shot = {
  src: string;
  alt: string;
  caption: string;
};

const SHOTS: Shot[] = [
  {
    src: "/photos/yvana_25ans_portrait.jpg",
    alt: "Yvana sourire main joue, soirée",
    caption: "Vingt cinq ans, et un sourire qui dit tout",
  },
  {
    src: "/photos/yvana_25ans_lasepia.jpg",
    alt: "Yvana à La Sepia, robe rouge",
    caption: "Reine de la soirée, simplement assise",
  },
  {
    src: "/photos/yvana_25ans_eclat.jpg",
    alt: "Yvana de profil dans la rue, sourire éclatant",
    caption: "La nuit s'arrête quand tu te retournes",
  },
  {
    src: "/photos/yvana_25ans_rire.jpg",
    alt: "Yvana qui rit, main devant la bouche",
    caption: "Un rire volé, le plus précieux des cadeaux",
  },
  {
    src: "/photos/yvana_25ans_danse.jpg",
    alt: "Yvana qui rit en marchant",
    caption: "Tu marches, tu ris, la ville danse derrière toi",
  },
  {
    src: "/photos/yvana_25ans_pudeur.jpg",
    alt: "Yvana, main devant le visage",
    caption: "Même pudique, tu illumines la rue",
  },
];

export default function Soiree() {
  const [selected, setSelected] = useState<Shot | null>(null);

  return (
    <section
      id="soiree"
      className="relative overflow-hidden px-6 py-32"
      style={{
        background:
          "linear-gradient(180deg, #FFF5F8 0%, #FCE4EC 50%, #FFF5F8 100%)",
      }}
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-rose-velvet/10 blur-3xl" />
        <div className="absolute -right-20 bottom-20 h-96 w-96 rounded-full bg-gold-soft/20 blur-3xl" />
        <div className="absolute left-1/2 top-1/3 h-64 w-64 -translate-x-1/2 rounded-full bg-rose-blush/30 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="block h-px w-12 bg-gradient-to-r from-transparent to-rose-petal" />
            <span className="font-script text-2xl text-rose-velvet">
              16 mai 2026
            </span>
            <span className="block h-px w-12 bg-gradient-to-l from-transparent to-rose-petal" />
          </div>
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-rose-velvet/60">
            La soirée
          </p>
          <h2 className="font-display text-5xl font-light text-rose-deep md:text-6xl">
            La nuit de tes vingt cinq ans
          </h2>
          <p className="mx-auto mt-6 max-w-2xl font-display text-xl italic leading-relaxed text-gray-700">
            Une robe rouge, une ville endormie, des lumières complices.
            Quelque chose dans l&apos;air te disait que ce soir, c&apos;était pour toi.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-3 md:gap-4">
          <motion.button
            type="button"
            onClick={() => setSelected(SHOTS[0])}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 1 }}
            whileHover={{ y: -6 }}
            className="group relative col-span-12 row-span-2 cursor-zoom-in overflow-hidden rounded-3xl shadow-rose md:col-span-7 aspect-[4/5]"
          >
            <Image
              src={SHOTS[0].src}
              alt={SHOTS[0].alt}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 60vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/80 via-rose-deep/10 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-left">
              <p className="font-display text-2xl italic text-white drop-shadow-lg md:text-3xl">
                {SHOTS[0].caption}
              </p>
            </div>
          </motion.button>

          <div className="col-span-12 grid grid-cols-2 gap-3 md:col-span-5 md:gap-4">
            {SHOTS.slice(1, 5).map((shot, i) => (
              <motion.button
                key={shot.src}
                type="button"
                onClick={() => setSelected(shot)}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                whileHover={{ y: -6 }}
                className="group relative aspect-[3/4] cursor-zoom-in overflow-hidden rounded-2xl shadow-soft"
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute bottom-0 left-0 right-0 translate-y-4 p-4 text-left opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="font-display text-base italic leading-snug text-white drop-shadow-lg">
                    {shot.caption}
                  </p>
                </div>
              </motion.button>
            ))}
          </div>

          <motion.button
            type="button"
            onClick={() => setSelected(SHOTS[5])}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ y: -6 }}
            className="group relative col-span-12 aspect-[16/7] cursor-zoom-in overflow-hidden rounded-3xl shadow-rose"
          >
            <Image
              src={SHOTS[5].src}
              alt={SHOTS[5].alt}
              fill
              className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-rose-deep/70 via-transparent to-rose-deep/40" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-center md:text-left">
              <p className="font-script text-3xl text-white drop-shadow-lg md:text-4xl">
                {SHOTS[5].caption}
              </p>
            </div>
          </motion.button>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.4 }}
          className="mx-auto mt-16 max-w-3xl text-center font-display text-2xl italic leading-relaxed text-rose-deep md:text-3xl"
        >
          Et si on pouvait mettre une nuit en bouteille,
          <br />
          ce serait celle là.
        </motion.p>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-rose-deep/80 p-6 backdrop-blur-md"
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
