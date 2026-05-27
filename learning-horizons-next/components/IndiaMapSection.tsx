"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { MapPin, Globe } from "lucide-react";

// Simplified India map states with approximate paths
// Using a simplified SVG representation
const stateData = [
  { id: "wb", name: "West Bengal", x: 67, y: 47, active: true, schools: 180 },
  { id: "mh", name: "Maharashtra", x: 32, y: 55, active: true, schools: 95 },
  { id: "ka", name: "Karnataka", x: 33, y: 68, active: true, schools: 65 },
  { id: "tn", name: "Tamil Nadu", x: 38, y: 76, active: true, schools: 55 },
  { id: "dl", name: "Delhi", x: 42, y: 28, active: true, schools: 48 },
  { id: "gj", name: "Gujarat", x: 23, y: 43, active: true, schools: 32 },
  { id: "rj", name: "Rajasthan", x: 32, y: 33, active: true, schools: 28 },
  { id: "up", name: "Uttar Pradesh", x: 48, y: 35, active: false, schools: 0 },
  { id: "mp", name: "Madhya Pradesh", x: 40, y: 45, active: false, schools: 0 },
  { id: "ap", name: "Andhra Pradesh", x: 42, y: 65, active: false, schools: 0 },
  { id: "od", name: "Odisha", x: 58, y: 55, active: false, schools: 0 },
  { id: "ts", name: "Telangana", x: 42, y: 60, active: false, schools: 0 },
  { id: "ke", name: "Kerala", x: 33, y: 78, active: false, schools: 0 },
  { id: "pb", name: "Punjab", x: 37, y: 22, active: false, schools: 0 },
  { id: "hr", name: "Haryana", x: 40, y: 26, active: false, schools: 0 },
];

export default function IndiaMapSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="reach"
      ref={ref}
      className="relative section-padding section-bg-map overflow-hidden"
    >
      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="section-label mb-4 inline-flex">
              <Globe size={12} />
              Our Reach
            </span>
            <h2 className="display-md text-gray-900 dark:text-white mb-6">
              Spreading Knowledge{" "}
              <span className="gradient-text font-serif italic">Across India</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
              From the plains of West Bengal to the coasts of Karnataka, Learning
              Horizons' books are in classrooms across the nation. We're committed
              to making quality education accessible in every corner of India.
            </p>

            {/* State list */}
            <div className="grid grid-cols-2 gap-3">
              {stateData.filter(s => s.active).map((state, i) => (
                <motion.div
                  key={state.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-center gap-2 glass rounded-xl px-3 py-2"
                  style={{ borderWidth: "8px" }}
                >
                  <MapPin size={12} className="text-indigo-500 flex-shrink-0" />
                  <div>
                    <p className="text-xs font-semibold text-gray-800 dark:text-white">{state.name}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{state.schools}+ schools</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Stylized India Map */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            {/* Map container */}
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Background circle */}
              <div className="absolute inset-0 rounded-full"
                   style={{ background: "radial-gradient(circle, rgba(99,102,241,0.1), rgba(99,102,241,0.02))" }} />

              {/* Stylized India silhouette using a simplified path */}
              <svg
                viewBox="0 0 100 110"
                className="w-full h-full"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* India outline - simplified */}
                <path
                  d="M35,8 L42,6 L52,7 L60,10 L65,15 L70,14 L75,18 L78,25 L80,32 
                     L78,38 L80,45 L76,52 L72,58 L70,65 L65,70 L62,76 L58,82 
                     L54,86 L50,90 L47,86 L43,80 L38,74 L34,68 L30,62 L26,56 
                     L22,50 L20,43 L22,36 L24,30 L26,24 L28,18 L30,12 Z"
                  fill="rgba(99,102,241,0.08)"
                  stroke="rgba(99,102,241,0.3)"
                  strokeWidth="0.8"
                />

                {/* Animated pulse dots for active states */}
                {stateData.filter(s => s.active).map((state) => (
                  <g key={state.id}>
                    {/* Outer pulse ring */}
                    <circle
                      cx={state.x}
                      cy={state.y}
                      r="4"
                      fill="rgba(99,102,241,0.2)"
                    >
                      <animate
                        attributeName="r"
                        values="3;6;3"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="0.8;0;0.8"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                    {/* Inner dot */}
                    <circle
                      cx={state.x}
                      cy={state.y}
                      r="2.5"
                      fill="#4f46e5"
                    />
                    {/* Label */}
                    <text
                      x={state.x + 4}
                      y={state.y + 1}
                      fontSize="3"
                      fill="currentColor"
                      className="text-gray-600 dark:text-gray-300"
                      fontFamily="Inter, sans-serif"
                    >
                      {state.name}
                    </text>
                  </g>
                ))}

                {/* Inactive state dots */}
                {stateData.filter(s => !s.active).map((state) => (
                  <circle
                    key={state.id}
                    cx={state.x}
                    cy={state.y}
                    r="1.5"
                    fill="rgba(156,163,175,0.5)"
                  />
                ))}
              </svg>

              {/* Connection lines overlay */}
              <div className="absolute inset-0 pointer-events-none">
                <svg viewBox="0 0 100 110" className="w-full h-full opacity-20">
                  {stateData.filter(s => s.active).map((state, i) => {
                    const wb = stateData.find(s => s.id === "wb")!;
                    return i > 0 ? (
                      <line
                        key={state.id}
                        x1={wb.x} y1={wb.y}
                        x2={state.x} y2={state.y}
                        stroke="#4f46e5"
                        strokeWidth="0.3"
                        strokeDasharray="1,1"
                      />
                    ) : null;
                  })}
                </svg>
              </div>

              {/* Center label */}
              <div className="absolute top-4 left-4 glass rounded-2xl p-3" style={{ borderWidth: "8px" }}>
                <p className="text-xs font-bold gradient-text">Active Presence</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{stateData.filter(s => s.active).length} states</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,40 C720,0 1080,60 1440,20 L1440,60 L0,60 Z" style={{ fill: "var(--skyblue)" }} />
        </svg>
      </div>
    </section>
  );
}
