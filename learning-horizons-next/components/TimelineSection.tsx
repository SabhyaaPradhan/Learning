"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Clock, Flag, Rocket, BookOpen, Globe, Award, Users, Sparkles } from "lucide-react";

const milestones = [
  {
    year: "2010",
    title: "The Beginning",
    description: "Learning Horizons was founded in West Bengal with a vision to make quality educational books accessible to every student in India.",
    icon: Flag,
    color: "from-violet-500 to-purple-600",
    accent: "#7c3aed",
    side: "left",
  },
  {
    year: "2013",
    title: "First Major Publication",
    description: "Launched our first comprehensive Computer Science series for primary grades, which quickly became a favourite across Bengali schools.",
    icon: BookOpen,
    color: "from-sky-500 to-cyan-600",
    accent: "#0ea5e9",
    side: "right",
  },
  {
    year: "2016",
    title: "English Language Series",
    description: "Introduced the award-winning 'Asia Growing with English' series — now used in hundreds of schools across Eastern India.",
    icon: Globe,
    color: "from-emerald-500 to-teal-600",
    accent: "#10b981",
    side: "left",
  },
  {
    year: "2018",
    title: "100+ Publications Milestone",
    description: "Celebrated our 100th publication and expanded our editorial team to bring more subjects and grade levels to students.",
    icon: Award,
    color: "from-amber-500 to-orange-600",
    accent: "#f59e0b",
    side: "right",
  },
  {
    year: "2021",
    title: "National Expansion",
    description: "Expanded partnerships to schools in Maharashtra, Karnataka, Tamil Nadu, and Delhi — reaching students in 7 states.",
    icon: Users,
    color: "from-rose-500 to-pink-600",
    accent: "#f43f5e",
    side: "left",
  },
  {
    year: "2024",
    title: "1 Million Students",
    description: "Reached the incredible milestone of 1 million students learning from Learning Horizons books across India.",
    icon: Sparkles,
    color: "from-indigo-500 to-violet-600",
    accent: "#6366f1",
    side: "right",
  },
  {
    year: "Today",
    title: "The Horizon Ahead",
    description: "Continuing to innovate with digital learning materials, interactive content, and deeper partnerships with educators nationwide.",
    icon: Rocket,
    color: "from-fuchsia-500 to-purple-600",
    accent: "#a855f7",
    side: "left",
  },
];

export default function TimelineSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative section-padding section-bg-timeline overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-20 left-10 w-64 h-64 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c084fc, #818cf8)" }}
      />
      <div
        className="absolute bottom-20 right-10 w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #67e8f9, #a5f3fc)" }}
      />

      <div className="section-container relative z-10">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20"
          style={{ textAlign: "center" }}
        >
          <span
            className="section-label mb-5"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <Clock size={12} />
            Our Journey
          </span>
          <h2
            className="display-md text-gray-900 mb-4"
            style={{ textAlign: "center" }}
          >
            A Story Written{" "}
            <span className="gradient-text font-serif italic">Year by Year</span>
          </h2>
          <p
            className="text-gray-600 max-w-xl"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Every milestone is a testament to our commitment to educational excellence and
            our passion for shaping young minds.
          </p>
        </motion.div>

        {/* ── Timeline ── */}
        <div className="relative">
          {/* Center vertical line — desktop only */}
          <div className="timeline-line hidden md:block" />

          <div className="flex flex-col gap-10">
            {milestones.map((m, i) => {
              const Icon = m.icon;
              const isLeft = i % 2 === 0; // strictly alternate by index

              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.12 }}
                  className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-4 md:gap-6"
                >
                  {/* Left column */}
                  <div className={isLeft ? "block" : "hidden md:block"}>
                    {isLeft && <TimelineCard m={m} Icon={Icon} isLeft={true} />}
                  </div>

                  {/* Center dot — desktop only */}
                  <div
                    className="hidden md:flex flex-shrink-0 w-10 h-10 rounded-full items-center justify-center z-10"
                    style={{
                      background: `linear-gradient(135deg, ${m.accent}, #4f46e5)`,
                      boxShadow: `0 0 0 4px white, 0 0 0 6px ${m.accent}44`,
                    }}
                  >
                    <div className="w-3 h-3 rounded-full bg-white" />
                  </div>

                  {/* Right column */}
                  <div className={!isLeft ? "block" : "hidden md:block"}>
                    {!isLeft && <TimelineCard m={m} Icon={Icon} isLeft={false} />}
                  </div>

                  {/* Mobile fallback — show card full width below on small screens */}
                  <div className="md:hidden col-span-1">
                    {!isLeft && <TimelineCard m={m} Icon={Icon} isLeft={false} />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path
            d="M0,20 C480,60 960,0 1440,40 L1440,60 L0,60 Z"
            style={{ fill: "var(--skyblue)" }}
          />
        </svg>
      </div>
    </section>
  );
}

function TimelineCard({
  m,
  Icon,
  isLeft,
}: {
  m: typeof milestones[0];
  Icon: React.ElementType;
  isLeft: boolean;
}) {
  return (
    <div
      className="glass rounded-2xl group hover:shadow-glass-lg transition-all duration-500 hover:-translate-y-1"
      style={{ padding: "1.75rem 1.5rem" }}
    >
      {/* Year + icon row */}
      <div
        className="flex items-center gap-3 mb-4"
        style={{ flexDirection: isLeft ? "row-reverse" : "row", justifyContent: isLeft ? "flex-end" : "flex-start" }}
      >
        <div
          className={`w-9 h-9 rounded-xl bg-gradient-to-br ${m.color} flex items-center justify-center flex-shrink-0`}
        >
          <Icon size={16} className="text-white" />
        </div>
        <span
          className="text-xs font-black tracking-widest uppercase"
          style={{ color: m.accent }}
        >
          {m.year}
        </span>
      </div>

      {/* Title */}
      <h3
        className="font-bold text-lg text-gray-900 mb-2"
        style={{ textAlign: isLeft ? "right" : "left" }}
      >
        {m.title}
      </h3>

      {/* Description */}
      <p
        className="text-sm text-gray-600 leading-relaxed"
        style={{ textAlign: isLeft ? "right" : "left" }}
      >
        {m.description}
      </p>

      {/* Bottom accent bar on hover */}
      <div
        className={`h-0.5 mt-4 bg-gradient-to-r ${m.color} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
      />
    </div>
  );
}
