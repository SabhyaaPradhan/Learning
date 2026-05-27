"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [particles, setParticles] = useState<{x: number, y: number, duration: number, delay: number}[]>([]);

  useEffect(() => {
    // Generate particles on client
    setParticles(Array.from({ length: 12 }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2,
    })));

    // Animate progress
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setLoading(false), 400);
          return 100;
        }
        return p + Math.random() * 15 + 5;
      });
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-100%" }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          className="page-loader"
        >
          {/* Logo area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            {/* Animated book icon */}
            <div className="w-20 h-20 mx-auto mb-6 relative">
              <div className="absolute inset-0 rounded-2xl"
                   style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}>
                <svg viewBox="0 0 80 80" className="w-full h-full p-5" fill="none">
                  <motion.rect
                    x="10" y="15" width="28" height="50" rx="3"
                    fill="rgba(255,255,255,0.3)"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{ transformOrigin: "bottom" }}
                  />
                  <motion.rect
                    x="42" y="15" width="28" height="50" rx="3"
                    fill="rgba(255,255,255,0.5)"
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{ transformOrigin: "bottom" }}
                  />
                  <line x1="38" y1="18" x2="42" y2="18" stroke="white" strokeWidth="2" />
                  <line x1="38" y1="25" x2="42" y2="25" stroke="white" strokeWidth="2" />
                  <line x1="38" y1="32" x2="42" y2="32" stroke="white" strokeWidth="2" />
                </svg>
              </div>
              {/* Glow */}
              <div className="absolute inset-0 rounded-2xl blur-xl opacity-60"
                   style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }} />
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="font-display font-bold text-2xl text-white mb-1"
            >
              Learning Horizons
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-indigo-300 text-sm"
            >
              Empowering Young Minds
            </motion.p>
          </motion.div>

          {/* Progress bar */}
          <div className="w-64 mt-10">
            <div className="flex justify-between text-xs text-indigo-400 mb-2">
              <span>Loading</span>
              <span>{Math.min(Math.round(progress), 100)}%</span>
            </div>
            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{
                  background: "linear-gradient(90deg, #4f46e5, #7c3aed, #06b6d4)",
                  width: `${Math.min(progress, 100)}%`,
                  transition: "width 0.08s ease-out",
                }}
              />
            </div>
          </div>

          {/* Floating particles in preloader */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {particles.map((p, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 rounded-full bg-indigo-400/40"
                initial={{
                  x: p.x,
                  y: p.y,
                }}
                animate={{
                  y: [null, p.y - 200, null],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  delay: p.delay,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
