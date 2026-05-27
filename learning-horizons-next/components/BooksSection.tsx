"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import TiltedCard from "./TiltedCard";

const categories = [
  { id: "all", label: "All Books" },
  { id: "primary", label: "Primary Education" },
  { id: "secondary", label: "Secondary Education" },
  { id: "activity", label: "Activity Books" },
  { id: "digital", label: "Digital Learning" },
];

const books = [
  {
    id: 1,
    title: "Asia Growing with English",
    subtitle: "Book 1",
    category: "primary",
    image: "/images/Asia Growing with English-01.jpg",
    bgColor: "#4f46e5",
    subject: "English Language",
    level: "Grade 1",
    badge: "Bestseller",
  },
  {
    id: 2,
    title: "Asia Growing with English",
    subtitle: "Book 2",
    category: "primary",
    image: "/images/Asia Growing with English-02.jpg",
    bgColor: "#0ea5e9",
    subject: "English Language",
    level: "Grade 2",
    badge: "New Edition",
  },
  {
    id: 3,
    title: "Asia Growing with English",
    subtitle: "Book 4",
    category: "secondary",
    image: "/images/Asia Growing with English-4.jpg",
    bgColor: "#10b981",
    subject: "English Language",
    level: "Grade 4",
  },
  {
    id: 4,
    title: "Asia Growing with English",
    subtitle: "Book 5",
    category: "secondary",
    image: "/images/Asia Growing with English-5.jpg",
    bgColor: "#f43f5e",
    subject: "English Language",
    level: "Grade 5",
  },
  {
    id: 5,
    title: "Computer Science",
    subtitle: "Class 2",
    category: "primary",
    image: "/images/asia class 2.jpg",
    bgColor: "#f59e0b",
    subject: "Computer Science",
    level: "Grade 2",
    badge: "Popular",
  },
  {
    id: 6,
    title: "Computer Science",
    subtitle: "Class 6",
    category: "secondary",
    image: "/images/asia class 6.jpg",
    bgColor: "#6366f1",
    subject: "Computer Science",
    level: "Grade 6",
  },
  {
    id: 7,
    title: "Computer Science",
    subtitle: "Class 4",
    category: "primary",
    image: "/images/asian class 4.jpg",
    bgColor: "#a855f7",
    subject: "Computer Science",
    level: "Grade 4",
  },
  {
    id: 8,
    title: "Interactive Activity Book",
    subtitle: "Primary Level",
    category: "activity",
    image: "/images/img-1.avif",
    bgColor: "#22c55e",
    subject: "Multi-Subject",
    level: "Grade 1–3",
    badge: "New",
  },
];

function BookOverlay({ book }: { book: typeof books[0] }) {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        padding: "1.25rem 1rem 1rem",
        background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
        borderRadius: "0 0 15px 15px",
        display: "flex",
        flexDirection: "column",
        gap: "0.4rem",
      }}
    >
      {book.badge && (
        <span
          style={{
            display: "inline-block",
            padding: "2px 10px",
            borderRadius: "999px",
            fontSize: "10px",
            fontWeight: 700,
            background: "rgba(255,255,255,0.95)",
            color: book.bgColor,
            width: "fit-content",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          {book.badge}
        </span>
      )}
      <p
        style={{
          color: "#ffffff",
          fontWeight: 700,
          fontSize: "0.9rem",
          lineHeight: 1.3,
          margin: 0,
          textShadow: "0 1px 3px rgba(0,0,0,0.5)",
        }}
      >
        {book.title}
      </p>
      <p
        style={{
          color: "rgba(255,255,255,0.75)",
          fontSize: "0.75rem",
          margin: 0,
        }}
      >
        {book.subtitle} · {book.level}
      </p>
      <span
        style={{
          display: "inline-block",
          padding: "3px 10px",
          borderRadius: "999px",
          fontSize: "10px",
          fontWeight: 600,
          background: book.bgColor,
          color: "#fff",
          width: "fit-content",
          marginTop: "2px",
        }}
      >
        {book.subject}
      </span>
    </div>
  );
}

export default function BooksSection() {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  const filtered =
    activeCategory === "all"
      ? books
      : books.filter((b) => b.category === activeCategory);

  return (
    <section
      id="books"
      ref={ref}
      className="relative section-padding section-bg-books overflow-hidden"
    >
      {/* Decoration blobs */}
      <div
        className="absolute top-20 right-0 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c084fc, #818cf8)" }}
      />
      <div
        className="absolute bottom-40 left-0 w-56 h-56 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #67e8f9, #a5f3fc)" }}
      />

      <div className="section-container relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
          style={{ textAlign: "center" }}
        >
          <span
            className="section-label mb-5"
            style={{ display: "inline-flex" }}
          >
            Our Publications
          </span>
          <h2
            className="display-md text-gray-900 mb-4"
            style={{ textAlign: "center" }}
          >
            Books That{" "}
            <span className="gradient-text font-serif italic">
              Inspire &amp; Educate
            </span>
          </h2>
          <p
            className="text-gray-600 max-w-xl"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            Explore our comprehensive range of educational publications designed
            for students across all grades and subjects.
          </p>
        </motion.div>

        {/* ── Category Filters ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12 publications-padding"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`category-btn-padding rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-indigo-600 text-white shadow-glow-blue"
                  : "glass text-gray-600 hover:border-indigo-300 hover:text-indigo-600"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* ── Book Grid with TiltedCard ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 justify-items-center publications-padding"
          >
            {filtered.map((book, i) => (
              <motion.div
                key={book.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.4, delay: i * 0.07 }}
                className="w-full flex justify-center"
              >
                <TiltedCard
                  imageSrc={book.image}
                  altText={`${book.title} - ${book.subtitle}`}
                  captionText={`${book.title} · ${book.level}`}
                  containerHeight="320px"
                  containerWidth="100%"
                  imageHeight="320px"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.06}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={<BookOverlay book={book} />}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
        </motion.div>
      </div>


    </section>
  );
}
