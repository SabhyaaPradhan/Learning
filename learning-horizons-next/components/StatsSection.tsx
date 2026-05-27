"use client";

import { useRef } from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { School, Users, BookOpen, Award, TrendingUp } from "lucide-react";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Schools",
    sublabel: "Across India",
    icon: School,
    color: "#7c3aed",
    bgLight: "#f5f3ff",
    bgDark: "rgba(124,58,237,0.15)",
  },
  {
    value: 1,
    suffix: "M+",
    label: "Students",
    sublabel: "Inspired & Empowered",
    icon: Users,
    color: "#0ea5e9",
    bgLight: "#f0f9ff",
    bgDark: "rgba(14,165,233,0.15)",
  },
  {
    value: 25,
    suffix: "+",
    label: "Subjects",
    sublabel: "Covered Comprehensively",
    icon: BookOpen,
    color: "#10b981",
    bgLight: "#f0fdf4",
    bgDark: "rgba(16,185,129,0.15)",
  },
  {
    value: 100,
    suffix: "+",
    label: "Publications",
    sublabel: "Published & Counting",
    icon: Award,
    color: "#f59e0b",
    bgLight: "#fffbeb",
    bgDark: "rgba(245,158,11,0.15)",
  },
];

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const Icon = stat.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="relative group"
    >
      <div
        className="glass rounded-2xl text-center transition-all duration-500 hover:-translate-y-2"
        style={{ padding: "2.5rem 1.5rem" }}
      >
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5"
          style={{ background: stat.bgLight }}
        >
          <Icon size={28} style={{ color: stat.color }} />
        </div>

        {/* Counter */}
        <div className="flex items-baseline justify-center gap-0.5 mb-2">
          {inView && (
            <CountUp
              start={0}
              end={stat.value}
              duration={2.5}
              delay={0.2}
              className="font-display font-black"
              style={{ fontSize: "clamp(2.5rem, 5vw, 3.5rem)", color: stat.color }}
            />
          )}
          <span
            className="font-display font-black"
            style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", color: stat.color }}
          >
            {stat.suffix}
          </span>
        </div>

        <h3 className="font-bold text-lg text-gray-900 mb-1">{stat.label}</h3>
        <p className="text-sm text-gray-500">{stat.sublabel}</p>

        {/* Animated underline bar */}
        <div
          className="mt-5 h-0.5 w-0 group-hover:w-3/4 rounded-full transition-all duration-700 mx-auto"
          style={{ background: `linear-gradient(90deg, ${stat.color}, transparent)` }}
        />
      </div>

      {/* Subtle glow on hover */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          boxShadow: `0 20px 60px ${stat.color}22`,
        }}
      />
    </motion.div>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section
      id="stats"
      ref={ref}
      className="relative section-padding section-bg-stats overflow-hidden"
    >
      {/* Background blobs */}
      <div
        className="absolute top-10 left-10 w-64 h-64 rounded-full blur-3xl opacity-20 animate-blob pointer-events-none"
        style={{ background: "radial-gradient(circle, #c084fc, #818cf8)" }}
      />
      <div
        className="absolute bottom-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-20 animate-blob-slow pointer-events-none"
        style={{ background: "radial-gradient(circle, #67e8f9, #a5f3fc)" }}
      />

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
          style={{ textAlign: "center" }}
        >
          <span className="section-label mb-5" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
            <TrendingUp size={12} />
            Our Impact
          </span>
          <h2
            className="display-md text-gray-900 mb-4"
            style={{ textAlign: "center" }}
          >
            Numbers That Tell Our{" "}
            <span className="gradient-text font-serif italic">Story</span>
          </h2>
          <p
            className="text-gray-600 max-w-xl"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            A decade of dedication to educational excellence, reflected in the
            lives we&apos;ve touched across India&apos;s classrooms.
          </p>
        </motion.div>

        {/* ── Stats Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ paddingTop: "20px", paddingBottom: "20px" }}>
          {stats.map((stat, i) => (
            <StatCard key={stat.label} stat={stat} index={i} />
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 text-center"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          <div className="inline-flex items-center gap-3 glass rounded-2xl px-6 py-4" style={{ padding: "12px" }}>
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <p className="text-sm font-medium text-gray-700">
              Trusted by educators and schools across{" "}
              <span className="gradient-text font-bold">every state in India</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path
            d="M0,0 C480,60 960,20 1440,40 L1440,60 L0,60 Z"
            className="fill-[#ede9fe]"
          />
        </svg>
      </div>
    </section>
  );
}
