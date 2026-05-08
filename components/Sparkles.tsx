"use client";

import { useEffect, useState } from "react";

type Spark = {
  id: number;
  top: number;
  left: number;
  size: number;
  delay: number;
  duration: number;
};

export default function Sparkles({ count = 30 }: { count?: number }) {
  const [sparks, setSparks] = useState<Spark[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: count }, (_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: 2 + Math.random() * 4,
      delay: Math.random() * 5,
      duration: 2 + Math.random() * 4,
    }));
    setSparks(generated);
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparks.map((s) => (
        <div
          key={s.id}
          className="absolute"
          style={{
            top: `${s.top}%`,
            left: `${s.left}%`,
            width: `${s.size}px`,
            height: `${s.size}px`,
            background: "radial-gradient(circle, #fff 0%, #F8BBD0 50%, transparent 70%)",
            borderRadius: "50%",
            boxShadow: `0 0 ${s.size * 4}px rgba(244, 143, 177, 0.8)`,
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
          }}
        />
      ))}

      <style jsx>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0; transform: scale(0.5); }
          50% { opacity: 1; transform: scale(1.4); }
        }
      `}</style>
    </div>
  );
}
