"use client";

import { motion } from "framer-motion";

const QUALITIES = [
  {
    icon: "✦",
    titre: "Lumineuse",
    texte:
      "Tu entres dans une pièce et la lumière change. C'est un don, et tu en uses sans même le savoir.",
  },
  {
    icon: "♥",
    titre: "Chaleureuse",
    texte:
      "Avec toi, on se sent en sécurité. Tu écoutes vraiment, tu enlaces fort, tu réconfortes en silence.",
  },
  {
    icon: "✿",
    titre: "Joyeuse",
    texte:
      "Ton rire est contagieux. Il pardonne les mauvais jours et invente les beaux moments.",
  },
  {
    icon: "❀",
    titre: "Élégante",
    texte:
      "Tu portes la grâce comme on porte un parfum. Naturellement, sans effort, partout où tu vas.",
  },
  {
    icon: "✧",
    titre: "Aventureuse",
    texte:
      "Tu n'attends pas que la vie vienne à toi. Tu pars, tu explores, tu collectionnes les horizons.",
  },
  {
    icon: "❤",
    titre: "Aimante",
    texte:
      "Tu aimes profondément, fidèlement. Et ceux qui ont la chance d'être aimés par toi le savent.",
  },
];

export default function Qualities() {
  return (
    <section className="relative px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-20 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-rose-velvet/60">
            Qui tu es
          </p>
          <h2 className="font-display text-5xl font-light text-rose-deep md:text-6xl">
            Tout ce que tu es,
          </h2>
          <p className="mt-2 font-display text-3xl italic text-rose-velvet md:text-4xl">
            en six mots qui ne suffisent pas.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {QUALITIES.map((q, i) => (
            <motion.div
              key={q.titre}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group relative overflow-hidden rounded-2xl border border-rose-blush/30 bg-white/60 p-8 shadow-soft backdrop-blur-md transition-shadow hover:shadow-rose"
            >
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-rose-mist/40 blur-2xl transition-all duration-500 group-hover:bg-rose-blush/40" />
              <div className="relative">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-mist to-rose-blush text-3xl text-rose-velvet shadow-soft">
                  {q.icon}
                </div>
                <h3 className="mb-3 font-display text-3xl font-light text-rose-deep">
                  {q.titre}
                </h3>
                <p className="font-display text-lg font-light leading-relaxed text-gray-700">
                  {q.texte}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
