"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BookOpen, Target, Users, HeartHandshake, CheckCircle2 } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Quality Content",
    description:
      "Meticulously crafted books that blend academic rigor with engaging storytelling for young learners.",
    color: "from-violet-500 to-purple-600",
    lightColor: "bg-violet-50 dark:bg-violet-950/30",
    iconColor: "text-violet-600 dark:text-violet-400",
  },
  {
    icon: Target,
    title: "Curriculum-Aligned",
    description:
      "Every publication precisely mapped to national and state board syllabi for seamless classroom integration.",
    color: "from-sky-500 to-cyan-600",
    lightColor: "bg-sky-50 dark:bg-sky-950/30",
    iconColor: "text-sky-600 dark:text-sky-400",
  },
  {
    icon: Users,
    title: "Student-Centric",
    description:
      "Designed with the learner at the heart — intuitive layouts, vivid illustrations, and age-appropriate language.",
    color: "from-emerald-500 to-teal-600",
    lightColor: "bg-emerald-50 dark:bg-emerald-950/30",
    iconColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    icon: HeartHandshake,
    title: "Teacher Support",
    description:
      "Comprehensive teacher guides, answer keys, and supplementary materials to empower educators.",
    color: "from-rose-500 to-pink-600",
    lightColor: "bg-rose-50 dark:bg-rose-950/30",
    iconColor: "text-rose-600 dark:text-rose-400",
  },
];

const highlights = [
  "Trusted by 500+ schools across India",
  "Aligned with CBSE, ICSE & State Boards",
  "Award-winning editorial team",
  "Printed on eco-friendly materials",
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    show: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.12,
        duration: 0.7,
        ease: [0.4, 0, 0.2, 1] as const,
      },
    }),
  };

  return (
    <section
      id="about"
      ref={ref}
      className="relative section-padding section-bg-about overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-10" style={{ background: "radial-gradient(circle, #c084fc, #818cf8)" }} />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-10" style={{ background: "radial-gradient(circle, #67e8f9, #a5f3fc)" }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <span className="section-label mb-4 inline-flex">Our Story</span>
          <h2 className="display-md text-gray-900 dark:text-white mb-6">
            Shaping the Future of{" "}
            <span className="gradient-text font-serif italic">Indian Education</span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Learning Horizons was born from a simple belief: every child deserves access to
            educational materials that not only inform but inspire. Based in West Bengal, we
            publish books that bridge the gap between academic excellence and genuine love for learning.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Mission text + highlights */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass rounded-3xl p-8 mb-8" style={{ border: "25px solid var(--glass-border)" }}>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base">
                Our mission goes beyond publishing books — we aim to contribute to the
                growth of India's educational system by providing resources that are both
                innovative and comprehensive. By focusing on curriculum-based content, we
                support schools in delivering a robust education to students from all
                backgrounds.
              </p>
              <p className="text-gray-700 dark:text-gray-200 leading-relaxed text-base mt-4">
                Through Learning Horizons, we strive to make a lasting impact on education
                in India, empowering the next generation with knowledge, skills, and the
                confidence to thrive in an ever-changing world.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3" style={{ marginTop: "30px" }}>
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300"
                >
                  <CheckCircle2 size={18} className="text-indigo-500 flex-shrink-0" />
                  <span className="text-sm font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {features.map((feat, i) => {
              const Icon = feat.icon;
              return (
                <motion.div
                  key={feat.title}
                  custom={i}
                  variants={cardVariants}
                  initial="hidden"
                  animate={inView ? "show" : "hidden"}
                  className="feature-card group cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                >
                  <div className={`w-14 h-14 rounded-2xl ${feat.lightColor} flex items-center justify-center mb-5`}>
                    <Icon size={24} className={feat.iconColor} />
                  </div>
                  <h3 className="font-bold text-gray-900 dark:text-white mb-3 text-base">
                    {feat.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {feat.description}
                  </p>
                  {/* Bottom gradient bar */}
                  <div className={`h-0.5 mt-5 rounded-full bg-gradient-to-r ${feat.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,30 C480,60 960,0 1440,30 L1440,60 L0,60 Z" className="fill-[#e0f2fe] dark:fill-[#0c1a2e]" />
        </svg>
      </div>
    </section>
  );
}
