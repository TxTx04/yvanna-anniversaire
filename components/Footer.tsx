"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden px-6 pb-12 pt-20">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="rounded-3xl bg-gradient-to-br from-rose-deep via-rose-velvet to-rose-petal p-12 text-center shadow-rose md:p-16"
        >
          <div className="mb-6 flex justify-center">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
              className="opacity-80"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>

          <p className="font-display text-3xl font-light italic text-white md:text-4xl">
            Que ces 25 ans ne soient que le début
          </p>
          <p className="mt-2 font-display text-3xl font-light italic text-rose-mist md:text-4xl">
            d&apos;une vie immense.
          </p>

          <div className="my-10 flex items-center justify-center gap-3">
            <span className="block h-px w-16 bg-white/40" />
            <span className="text-2xl text-white/80">✦</span>
            <span className="block h-px w-16 bg-white/40" />
          </div>

          <p className="font-script text-5xl text-white md:text-6xl">
            Avec tout mon amour,
          </p>
          <p className="mt-3 text-sm uppercase tracking-[0.5em] text-rose-mist">
            Ton petit frère chéri
          </p>
          <p className="mt-1 font-display text-2xl font-light text-white">
            TETIO TSAGUE
          </p>
        </motion.div>

        <p className="mt-10 text-center text-xs uppercase tracking-[0.4em] text-rose-velvet/60">
          Site offert avec amour · 08 Mai 2026
        </p>
      </div>
    </footer>
  );
}
