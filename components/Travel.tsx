"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const JOURNEYS = [
  {
    src: "/photos/yvana_mer.jpg",
    titre: "Face à la Méditerranée",
    lieu: "Malte",
    texte:
      "Quand le bleu du ciel rencontre celui de la mer, et qu'au milieu, ton sourire fait pencher la balance.",
  },
  {
    src: "/photos/yvana_malte.jpg",
    titre: "Ruelles dorées",
    lieu: "Valette, Malte",
    texte:
      "Tu as marché là où l'histoire respire. Et même les pierres ont rougi de ton passage.",
  },
  {
    src: "/photos/yvana_quad.jpg",
    titre: "Liberté au coucher de soleil",
    lieu: "Au bout du monde",
    texte:
      "Les aventures n'attendent pas. Tu fonces, tu vis, tu dévores l'horizon. Et le soleil applaudit.",
  },
];

export default function Travel() {
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
            Tes voyages
          </p>
          <h2 className="font-display text-5xl font-light text-rose-deep md:text-6xl">
            Les pays qui t&apos;ont rencontrée
          </h2>
          <p className="mt-4 font-display text-xl italic text-gray-600">
            ont gardé un peu de toi.
          </p>
        </motion.div>

        <div className="space-y-32">
          {JOURNEYS.map((journey, i) => (
            <motion.div
              key={journey.src}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.2 }}
              className={`flex flex-col items-center gap-10 md:gap-16 ${
                i % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
              }`}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className="relative w-full md:w-1/2"
              >
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-rose-blush/40 to-gold-soft/30 blur-2xl" />
                <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-rose">
                  <Image
                    src={journey.src}
                    alt={journey.titre}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              </motion.div>

              <div className="w-full md:w-1/2">
                <p className="mb-3 flex items-center gap-3 text-sm uppercase tracking-[0.3em] text-rose-velvet">
                  <span className="block h-px w-8 bg-rose-petal" />
                  {journey.lieu}
                </p>
                <h3 className="mb-6 font-display text-4xl font-light text-rose-deep md:text-5xl">
                  {journey.titre}
                </h3>
                <p className="font-display text-xl font-light leading-relaxed text-gray-700 md:text-2xl">
                  {journey.texte}
                </p>
                <div className="mt-8 flex items-center gap-3 text-rose-petal">
                  <span className="text-2xl">✦</span>
                  <span className="block h-px flex-1 max-w-[120px] bg-gradient-to-r from-rose-petal to-transparent" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
