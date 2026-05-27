"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Mrs. Priya Sharma",
    role: "Principal",
    school: "Delhi Public School, Kolkata",
    quote:
      "Learning Horizons has transformed how our students engage with subjects. The quality of content is unmatched — clear, vibrant, and perfectly aligned with what our teachers need to deliver.",
    rating: 5,
    avatar: "PS",
    color: "from-violet-500 to-purple-600",
  },
  {
    name: "Mr. Rajesh Banerjee",
    role: "Head of Department (Science)",
    school: "St. Xavier's School, West Bengal",
    quote:
      "I've used many publishers' books over my 20-year career, but Learning Horizons stands out for the depth of research and the student-friendly approach. My students actually enjoy reading their textbooks!",
    rating: 5,
    avatar: "RB",
    color: "from-sky-500 to-cyan-600",
  },
  {
    name: "Ms. Ananya Gupta",
    role: "Computer Science Teacher",
    school: "Modern English Academy, Howrah",
    quote:
      "The Computer Science books from Learning Horizons are a game-changer. The step-by-step explanations and colorful illustrations make complex topics approachable for even the youngest learners.",
    rating: 5,
    avatar: "AG",
    color: "from-emerald-500 to-teal-600",
  },
  {
    name: "Mr. Suresh Patel",
    role: "School Administrator",
    school: "Kendriya Vidyalaya, Asansol",
    quote:
      "Partnering with Learning Horizons was one of the best decisions for our school. The team is responsive, the materials arrive on time, and the quality is consistently exceptional.",
    rating: 5,
    avatar: "SP",
    color: "from-rose-500 to-pink-600",
  },
  {
    name: "Dr. Meera Iyer",
    role: "Education Director",
    school: "Sunrise Group of Schools",
    quote:
      "What sets Learning Horizons apart is their genuine commitment to education — not just publishing. They work with teachers to ensure materials are practical, engaging, and truly impactful.",
    rating: 5,
    avatar: "MI",
    color: "from-amber-500 to-orange-600",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const visible = [
    testimonials[(current) % testimonials.length],
    testimonials[(current + 1) % testimonials.length],
    testimonials[(current + 2) % testimonials.length],
  ];

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative section-padding section-bg-testimonials overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full blur-3xl opacity-20"
           style={{ background: "radial-gradient(circle, #818cf8, #c084fc)" }} />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="section-label mb-4 inline-flex">
            <Quote size={12} />
            Testimonials
          </span>
          <h2 className="display-md text-gray-900 dark:text-white mb-4">
            What Educators{" "}
            <span className="gradient-text font-serif italic">Say About Us</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
            Voices from schools across India who trust Learning Horizons to inspire their students every day.
          </p>
        </motion.div>

        {/* Desktop: 3-up carousel */}
        <div className="hidden lg:grid grid-cols-3 gap-6 mb-10">
          {visible.map((t, i) => (
            <motion.div
              key={`${t.name}-${current}-${i}`}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: i === 1 ? 1.03 : 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`glass rounded-3xl p-8 relative ${i === 1 ? "shadow-glass-lg ring-2 ring-indigo-200 dark:ring-indigo-800" : ""}`}
            >
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
                ))}
              </div>
              <Quote size={24} className="text-indigo-200 dark:text-indigo-800 mb-3" />
              <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center text-white text-xs font-bold`}>
                  {t.avatar}
                </div>
                <div>
                  <p className="font-bold text-sm text-gray-900 dark:text-white">{t.name}</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">{t.role}</p>
                  <p className="text-xs text-indigo-600 dark:text-indigo-400">{t.school}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="lg:hidden mb-8">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.4 }}
            className="glass rounded-3xl p-8"
          >
            <div className="flex items-center gap-1 mb-4">
              {Array.from({ length: testimonials[current].rating }).map((_, j) => (
                <Star key={j} size={14} className="text-amber-400 fill-amber-400" />
              ))}
            </div>
            <Quote size={24} className="text-indigo-200 dark:text-indigo-800 mb-3" />
            <p className="text-gray-700 dark:text-gray-200 text-sm leading-relaxed mb-6 italic">
              &ldquo;{testimonials[current].quote}&rdquo;
            </p>
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${testimonials[current].color} flex items-center justify-center text-white text-xs font-bold`}>
                {testimonials[current].avatar}
              </div>
              <div>
                <p className="font-bold text-sm text-gray-900 dark:text-white">{testimonials[current].name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{testimonials[current].role}</p>
                <p className="text-xs text-indigo-600 dark:text-indigo-400">{testimonials[current].school}</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-6">
          <button
            onClick={prev}
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:scale-110 transition-all"
            aria-label="Previous"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`rounded-full transition-all duration-300 ${
                  i === current ? "w-6 h-2 bg-indigo-600" : "w-2 h-2 bg-gray-300 dark:bg-gray-600"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-indigo-600 hover:scale-110 transition-all"
            aria-label="Next"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path d="M0,30 C360,0 720,60 1080,30 C1260,15 1380,40 1440,30 L1440,60 L0,60 Z" className="fill-[#ede9fe] dark:fill-[#1e1b4b]" />
        </svg>
      </div>
    </section>
  );
}
