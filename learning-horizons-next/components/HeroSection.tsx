"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, BookOpen, GraduationCap, Sparkles } from "lucide-react";
import dynamic from "next/dynamic";

const ParticleBackground = dynamic(() => import("./ParticleBackground"), {
  ssr: false,
});

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.4,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.4, 0, 0.2, 1] as const },
  },
};

const floatingBook = {
  initial: { y: 0, rotate: -6 },
  animate: {
    y: [-15, 5, -15],
    rotate: [-6, -3, -6],
    transition: { duration: 6, repeat: Infinity, ease: "easeInOut" as const },
  },
};

const floatingBook2 = {
  initial: { y: 0, rotate: 8 },
  animate: {
    y: [10, -10, 10],
    rotate: [8, 12, 8],
    transition: { duration: 8, repeat: Infinity, ease: "easeInOut" as const, delay: 1 },
  },
};

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToBooks = () => {
    document.querySelector("#books")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative pt-20 pb-20 overflow-hidden min-h-[90vh] lg:min-h-screen flex flex-col"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#fdf8f0] via-[#ede9fe] to-[#e0f2fe] dark:from-[#0f0f23] dark:via-[#1e1b4b] dark:to-[#0c1a2e] transition-colors duration-500" />

      {/* Blob accents */}
      <div className="blob blob-1 -z-10 opacity-30 dark:opacity-10" />
      <div className="blob blob-2 -z-10 opacity-30 dark:opacity-10" />
      <div className="blob blob-3 -z-10 opacity-30 dark:opacity-10" />

      {/* Particle canvas */}
      <ParticleBackground />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(79,70,229,1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(79,70,229,1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating book mockups */}
      <div className="absolute right-[5%] top-[15%] hidden xl:block z-10 pointer-events-none">
        <motion.div
          variants={floatingBook}
          initial="initial"
          animate="animate"
          className="relative"
        >
          <div className="w-40 h-52 rounded-xl shadow-2xl overflow-hidden"
               style={{ background: "linear-gradient(135deg, #4f46e5, #7c3aed)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-white">
              <BookOpen size={32} className="mb-3 opacity-80" />
              <div className="text-xs font-bold text-center opacity-90">ASIA GROWING WITH ENGLISH</div>
              <div className="text-xs opacity-60 mt-1">Book 1</div>
            </div>
            <div className="absolute inset-y-0 left-0 w-3 bg-black/20" />
          </div>
          <div className="absolute -bottom-2 -right-2 w-full h-full rounded-xl -z-10"
               style={{ background: "linear-gradient(135deg, #7c3aed, #06b6d4)", opacity: 0.4 }} />
        </motion.div>
      </div>

      <div className="absolute right-[12%] top-[55%] hidden xl:block z-10 pointer-events-none">
        <motion.div
          variants={floatingBook2}
          initial="initial"
          animate="animate"
        >
          <div className="w-32 h-44 rounded-xl shadow-xl overflow-hidden"
               style={{ background: "linear-gradient(135deg, #06b6d4, #0ea5e9)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-white">
              <GraduationCap size={24} className="mb-2 opacity-80" />
              <div className="text-xs font-bold text-center opacity-90">COMPUTER SCIENCE</div>
              <div className="text-xs opacity-60 mt-1">Class 6</div>
            </div>
            <div className="absolute inset-y-0 left-0 w-2 bg-black/20" />
          </div>
        </motion.div>
      </div>

      {/* Third floating book */}
      <div className="absolute left-[4%] bottom-[20%] hidden xl:block z-10 pointer-events-none">
        <motion.div
          initial={{ y: 0, rotate: 5 }}
          animate={{ y: [-12, 8, -12], rotate: [5, 9, 5] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" as const, delay: 2 }}
        >
          <div className="w-28 h-36 rounded-xl shadow-xl overflow-hidden"
               style={{ background: "linear-gradient(135deg, #f59e0b, #ef4444)" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center p-3 text-white">
              <Sparkles size={20} className="mb-2 opacity-80" />
              <div className="text-xs font-bold text-center opacity-90">ACTIVITY BOOK</div>
              <div className="text-xs opacity-60 mt-1">Grade 3</div>
            </div>
            <div className="absolute inset-y-0 left-0 w-2 bg-black/20" />
          </div>
        </motion.div>
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="section-container relative z-10 my-auto w-full hero-content-padding"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          {/* Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <span className="section-label">
              <Sparkles size={12} />
              Educational Publishing Excellence
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1 variants={itemVariants} className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-[1.15] mb-8 tracking-tight text-gray-900 dark:text-white">
            Empowering <span className="gradient-text font-serif italic font-normal pr-2">Young Minds</span>
            <br />
            Through Quality Learning
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={itemVariants}
            className="text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-xl leading-relaxed"
          >
            Creating engaging educational books for schools across India — where
            innovation meets curriculum, and every page inspires a future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-4 hero-custom-mt"
          >
            <button onClick={scrollToBooks} className="btn-primary group">
              <span>Explore Books</span>
              <ArrowRight
                size={16}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
            <button onClick={scrollToContact} className="btn-outline">
              Partner With Us
            </button>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 pt-8 border-t border-gray-200/50 dark:border-white/10 hero-custom-mt"
          >
            {[
              { value: "500+", label: "Schools" },
              { value: "1M+", label: "Students" },
              { value: "100+", label: "Publications" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-xs text-gray-400 dark:text-gray-500 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-indigo-500 to-transparent"
        />
      </motion.div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path
            d="M0,40 C360,60 720,20 1080,40 C1260,50 1380,45 1440,40 L1440,60 L0,60 Z"
            className="fill-[#fdf8f0] dark:fill-[#0a0a1a]"
          />
        </svg>
      </div>
    </section>
  );
}
