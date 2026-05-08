"use client";

import { useEffect, useState } from "react";

type Petal = {
  id: number;
  left: number;
  delay: number;
  duration: number;
  size: number;
  rotate: number;
  opacity: number;
};

export default function Petals({ count = 24 }: { count?: number }) {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 15,
      duration: 14 + Math.random() * 12,
      size: 14 + Math.random() * 22,
      rotate: Math.random() * 360,
      opacity: 0.5 + Math.random() * 0.5,
    }));
    setPetals(generated);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {petals.map((p) => (
        <div
          key={p.id}
          className="absolute -top-10"
          style={{
            left: `${p.left}%`,
            animation: `petalFall ${p.duration}s linear ${p.delay}s infinite`,
            opacity: p.opacity,
          }}
        >
          <svg
            width={p.size}
            height={p.size}
            viewBox="0 0 24 24"
            style={{ transform: `rotate(${p.rotate}deg)` }}
          >
            <defs>
              <radialGradient id={`petalGrad${p.id}`} cx="50%" cy="40%">
                <stop offset="0%" stopColor="#FFE4EC" />
                <stop offset="60%" stopColor="#F8BBD0" />
                <stop offset="100%" stopColor="#F48FB1" />
              </radialGradient>
            </defs>
            <path
              d="M12 2 C 16 6, 18 12, 12 22 C 6 12, 8 6, 12 2 Z"
              fill={`url(#petalGrad${p.id})`}
            />
          </svg>
        </div>
      ))}

      <style jsx>{`
        @keyframes petalFall {
          0% {
            transform: translateY(-10vh) translateX(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          50% {
            transform: translateY(50vh) translateX(40px) rotate(180deg);
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(110vh) translateX(-40px) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
