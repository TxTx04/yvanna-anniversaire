"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Quote() {
  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative order-2 md:order-1"
          >
            <div className="absolute -inset-6 rounded-3xl bg-gradient-to-tr from-gold-soft/30 via-rose-blush/30 to-rose-mist/40 blur-3xl" />
            <div className="relative aspect-[3/4] overflow-hidden rounded-3xl shadow-rose">
              <Image
                src="/photos/yvana_anniv.jpg"
                alt="Yvana sous l'arche de ballons"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-deep/40 via-transparent to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <svg
              className="mb-6 h-16 w-16 text-rose-petal"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
            </svg>

            <p className="font-display text-3xl font-light italic leading-tight text-rose-deep md:text-4xl lg:text-5xl">
              Il y a des personnes qui passent dans nos vies, et il y a celles
              qui restent. Et il y a toi,
              <span className="text-rose-velvet">
                {" "}
                qui inscris ton prénom dans nos cœurs
              </span>{" "}
              en lettres dorées.
            </p>

            <div className="mt-10 flex items-center gap-4">
              <span className="block h-px w-12 bg-rose-petal" />
              <span className="font-script text-3xl text-rose-velvet">
                Pour toi, ma sœur
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
