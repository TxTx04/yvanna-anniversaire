"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Letter() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-rose-velvet/60">
            Une lettre
          </p>
          <h2 className="font-display text-5xl font-light text-rose-deep md:text-6xl">
            Mots de ton petit frère
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.2 }}
          className="relative"
        >
          <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-rose-mist via-white to-rose-whisper opacity-80 blur-2xl" />

          <div className="relative overflow-hidden rounded-[2rem] border border-rose-blush/30 bg-white/70 p-10 shadow-rose backdrop-blur-xl md:p-16">
            <svg
              className="absolute -left-6 -top-6 h-24 w-24 text-rose-blush/40"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>

            <div className="grid items-center gap-12 md:grid-cols-3">
              <motion.div
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: -3 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.3 }}
                className="md:col-span-1"
              >
                <div className="relative mx-auto aspect-[3/4] w-56 overflow-hidden rounded-2xl border-4 border-white shadow-rose">
                  <Image
                    src="/photos/tetio.jpg"
                    alt="TETIO, ton petit frère"
                    fill
                    className="object-cover"
                    sizes="224px"
                  />
                </div>
                <p className="mt-4 text-center font-script text-3xl text-rose-velvet">
                  TETIO
                </p>
                <p className="text-center text-sm uppercase tracking-[0.3em] text-rose-velvet/60">
                  Ton petit frère chéri
                </p>
              </motion.div>

              <div className="space-y-5 font-display text-xl font-light leading-relaxed text-gray-700 md:col-span-2 md:text-2xl">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                  className="font-script text-3xl text-rose-velvet md:text-4xl"
                >
                  Ma chère Yvana,
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Il y a vingt cinq ans, tu as posé tes pas sur cette terre. Et
                  depuis, sans le savoir, tu illumines la nôtre.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Tu es belle, oui. Mais surtout, tu es lumineuse. Ton rire
                  remplit les pièces, ta joie déborde, ta présence rassure. Tu
                  es de ces personnes que la vie a faites pour adoucir le monde.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.1 }}
                >
                  Cette année, je voulais t&apos;offrir quelque chose qui te
                  ressemble. Pas un objet qui s&apos;use, mais un endroit qui
                  garde. Un petit coin d&apos;internet rien qu&apos;à toi, où
                  ton sourire est en haut de la page, où chaque pétale qui
                  tombe murmure ton prénom.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.3 }}
                >
                  Que tes 25 ans soient à ton image. Doux, libres, lumineux.
                  Que la vie te rende au centuple ce que tu nous donnes chaque
                  jour.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  className="pt-2 italic text-rose-deep"
                >
                  Je t&apos;aime tellement, Nanouchka.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.7 }}
                  className="pt-4 font-script text-4xl text-rose-velvet"
                >
                  Ton petit frère chéri,
                  <br />
                  TETIO TSAGUE
                </motion.p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
