"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

type Candle = { id: number; lit: boolean };

export default function Wishes() {
  const [candles, setCandles] = useState<Candle[]>(
    Array.from({ length: 25 }, (_, i) => ({ id: i, lit: true })),
  );
  const [confetti, setConfetti] = useState(false);

  const litCount = candles.filter((c) => c.lit).length;
  const allBlown = litCount === 0;

  const blowCandle = (id: number) => {
    setCandles((prev) =>
      prev.map((c) => (c.id === id ? { ...c, lit: false } : c)),
    );
  };

  const blowAll = () => {
    setCandles((prev) => prev.map((c) => ({ ...c, lit: false })));
    setConfetti(true);
    setTimeout(() => setConfetti(false), 4500);
  };

  const relight = () => {
    setCandles((prev) => prev.map((c) => ({ ...c, lit: true })));
    setConfetti(false);
  };

  return (
    <section className="relative overflow-hidden px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm uppercase tracking-[0.4em] text-rose-velvet/60">
            Le rituel
          </p>
          <h2 className="font-display text-5xl font-light text-rose-deep md:text-6xl">
            Souffle tes 25 bougies
          </h2>
          <p className="mt-4 font-display text-xl italic text-gray-600">
            Fais un vœu, et clique sur chaque flamme.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative mx-auto max-w-3xl"
        >
          <div className="relative rounded-t-[120px] bg-gradient-to-b from-rose-blush via-rose-mist to-white px-8 pt-20 pb-16 shadow-rose">
            <div className="absolute -top-2 left-1/2 h-4 w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-transparent via-white to-transparent" />

            <div className="grid grid-cols-5 gap-x-3 gap-y-6 md:grid-cols-5">
              {candles.map((candle) => (
                <button
                  type="button"
                  key={candle.id}
                  onClick={() => blowCandle(candle.id)}
                  className="group flex flex-col items-center transition"
                  aria-label={`Bougie ${candle.id + 1}`}
                >
                  <AnimatePresence>
                    {candle.lit && (
                      <motion.div
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, y: -30, scale: 0 }}
                        transition={{ duration: 0.4 }}
                        className="relative mb-1 h-6 w-3"
                      >
                        <div className="absolute inset-x-0 bottom-0 mx-auto h-5 w-3 origin-bottom animate-pulse rounded-full bg-gradient-to-t from-amber-500 via-yellow-300 to-white blur-[1px]" />
                        <div className="absolute inset-x-0 bottom-0 mx-auto h-3 w-1.5 origin-bottom rounded-full bg-gradient-to-t from-orange-500 to-yellow-200" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <div
                    className={`h-12 w-2.5 rounded-sm transition-all md:h-14 ${
                      candle.lit
                        ? "bg-gradient-to-b from-rose-petal via-rose-blush to-rose-velvet shadow-md group-hover:shadow-lg"
                        : "bg-gradient-to-b from-rose-blush/40 to-rose-velvet/30 opacity-60"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="relative -mt-1 rounded-b-3xl bg-gradient-to-b from-white via-rose-whisper to-rose-mist px-8 py-12">
            <div className="text-center font-script text-5xl text-rose-velvet">
              Joyeux 25 ans Yvana
            </div>
          </div>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-4">
          <p className="font-display text-xl text-rose-deep">
            {allBlown
              ? "Tous tes vœux ont pris leur envol. ✦"
              : `${litCount} bougie${litCount > 1 ? "s" : ""} à souffler.`}
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <button
              type="button"
              onClick={blowAll}
              className="rounded-full bg-gradient-to-r from-rose-velvet to-rose-petal px-8 py-3 font-medium uppercase tracking-[0.2em] text-white shadow-rose transition hover:scale-105"
            >
              Tout souffler
            </button>
            <button
              type="button"
              onClick={relight}
              className="rounded-full border border-rose-petal/40 bg-white px-8 py-3 font-medium uppercase tracking-[0.2em] text-rose-deep transition hover:bg-rose-whisper"
            >
              Rallumer
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {confetti && <Confetti />}
      </AnimatePresence>
    </section>
  );
}

function Confetti() {
  const pieces = Array.from({ length: 80 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    delay: Math.random() * 0.6,
    duration: 2 + Math.random() * 2,
    rotate: Math.random() * 360,
    color: ["#EC407A", "#F48FB1", "#F8BBD0", "#FFFFFF", "#C9A87C", "#AD1457"][
      i % 6
    ],
    size: 8 + Math.random() * 8,
  }));

  return (
    <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {pieces.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -20, x: 0, rotate: 0, opacity: 1 }}
          animate={{
            y: "110vh",
            x: (Math.random() - 0.5) * 200,
            rotate: p.rotate * 4,
            opacity: 0,
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            ease: "easeOut",
          }}
          className="absolute rounded-sm"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.4}px`,
            background: p.color,
          }}
        />
      ))}
    </div>
  );
}
