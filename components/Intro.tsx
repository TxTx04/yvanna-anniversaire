"use client";

import { motion } from "framer-motion";

const VERSES = [
  "Il y a des âmes qui ne marchent pas, elles dansent.",
  "Il y a des rires qui ne s'entendent pas, ils éclairent.",
  "Il y a des sourires qui ne se voient pas, ils réchauffent.",
  "Yvana est de celles là.",
];

export default function Intro() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="divider-ornament mb-12"
        >
          <span>✦</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-12 font-display text-4xl font-light italic text-rose-deep md:text-5xl"
        >
          À toi, ma cousine, ma sœur.
        </motion.h2>

        <div className="space-y-6">
          {VERSES.map((verse, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.25 }}
              className={`font-display text-2xl font-light leading-relaxed md:text-3xl ${
                i === VERSES.length - 1
                  ? "pt-4 italic text-rose-velvet"
                  : "text-gray-700"
              }`}
            >
              {verse}
            </motion.p>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="divider-ornament mt-12"
        >
          <span>✦</span>
        </motion.div>
      </div>
    </section>
  );
}
