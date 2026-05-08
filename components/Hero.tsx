"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const NAME_LETTERS = "Yvana".split("");

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 pb-32">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-radial from-rose-blush/40 via-rose-mist/20 to-transparent blur-3xl" />
        <div className="absolute right-10 top-20 h-64 w-64 rounded-full bg-rose-blush/30 blur-3xl animate-float-slow" />
        <div className="absolute left-10 bottom-32 h-80 w-80 rounded-full bg-gold-soft/20 blur-3xl animate-float-slow" />
      </motion.div>

      <div className="relative z-10 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-rose-velvet/70"
        >
          <span className="block h-px w-12 bg-rose-blush" />
          <span>08 Mai 2026</span>
          <span className="block h-px w-12 bg-rose-blush" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="font-display text-2xl font-light italic text-rose-deep/70 md:text-3xl"
        >
          Joyeux Anniversaire,
        </motion.p>

        <h1 className="mt-2 flex flex-wrap justify-center font-display text-7xl font-light leading-none md:text-9xl lg:text-[12rem]">
          {NAME_LETTERS.map((letter, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 80, rotateX: -90 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: 0.9,
                delay: 1 + i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block bg-gradient-to-br from-rose-deep via-rose-velvet to-rose-petal bg-clip-text text-transparent"
              style={{ paddingRight: letter === "a" ? "0.05em" : 0 }}
            >
              {letter}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 2 }}
          className="my-6 flex items-center gap-4"
        >
          <span className="block h-px w-16 bg-gradient-to-r from-transparent to-rose-petal" />
          <span className="font-script text-5xl text-rose-velvet md:text-6xl">
            25 ans
          </span>
          <span className="block h-px w-16 bg-gradient-to-l from-transparent to-rose-petal" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.4 }}
          className="max-w-xl font-display text-xl font-light leading-relaxed text-rose-deep/80 md:text-2xl"
        >
          Madjoufang Tedayem Yvana Nanouchka,
          <br />
          <span className="text-rose-velvet">vingt cinq printemps de pure lumière.</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 2.8 }}
          className="mt-12"
        >
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-rose-petal via-rose-blush to-gold-soft opacity-60 blur-2xl animate-glow" />
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-white shadow-rose md:h-96 md:w-96">
              <Image
                src="/photos/yvana_rire.jpg"
                alt="Yvana lumineuse"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 288px, 384px"
              />
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 pointer-events-none"
            >
              <svg viewBox="0 0 100 100" className="h-full w-full opacity-50">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -45, 0 a 45,45 0 1,1 90,0 a 45,45 0 1,1 -90,0"
                    fill="none"
                  />
                </defs>
                <text fontSize="4.2" fill="#AD1457" fontFamily="serif" letterSpacing="3">
                  <textPath href="#circlePath">
                    ✦ joyeux anniversaire yvana ✦ joyeux anniversaire yvana ✦
                  </textPath>
                </text>
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3.5 }}
          className="mt-16 flex flex-col items-center gap-2 text-rose-velvet/60"
        >
          <span className="font-display text-sm uppercase tracking-[0.4em]">
            Fais défiler
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <svg width="20" height="32" viewBox="0 0 20 32" fill="none">
              <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" />
              <circle cx="10" cy="10" r="2" fill="currentColor" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
