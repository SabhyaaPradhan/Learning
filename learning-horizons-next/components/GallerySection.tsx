"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ZoomIn, Images } from "lucide-react";

const galleryImages = [
  { src: "/images/img-1.avif", alt: "Learning in action", caption: "Classroom Excellence", tall: true },
  { src: "/images/img-2.avif", alt: "Students learning", caption: "Young Learners", tall: false },
  { src: "/images/img-3.avif", alt: "Educational materials", caption: "Quality Materials", tall: false },
  { src: "/images/about1.avif", alt: "School partnership", caption: "Partner Schools", tall: true },
  { src: "/images/img-4.avif", alt: "Books and learning", caption: "Our Publications", tall: false },
  { src: "/images/about2.avif", alt: "Teacher support", caption: "Teacher Resources", tall: false },
  { src: "/images/img-5.avif", alt: "Educational success", caption: "Student Success", tall: true },
  { src: "/images/about3.avif", alt: "School events", caption: "School Events", tall: false },
  { src: "/images/about4.avif", alt: "Learning journey", caption: "The Journey", tall: false },
  { src: "/images/work1.avif", alt: "Our works", caption: "Our Work", tall: false },
  { src: "/images/work2.avif", alt: "Publications", caption: "New Releases", tall: true },
  { src: "/images/about6.avif", alt: "Community", caption: "Community Impact", tall: false },
];

function LightboxModal({
  image,
  onClose,
}: {
  image: typeof galleryImages[0];
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/85 backdrop-blur-xl" />
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 28 }}
        className="relative z-10 max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3]">
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
            sizes="90vw"
          />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
          <p className="text-white font-bold text-lg">{image.caption}</p>
        </div>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 backdrop-blur-sm flex items-center justify-center text-white hover:bg-black/70 transition-colors"
        >
          <X size={18} />
        </button>
      </motion.div>
    </motion.div>
  );
}

function GalleryItem({
  img,
  index,
  inView,
  onClick,
}: {
  img: typeof galleryImages[0];
  index: number;
  inView: boolean;
  onClick: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay: index * 0.07 }}
      className="relative group cursor-pointer rounded-2xl overflow-hidden mb-4"
      onClick={onClick}
    >
      <div
        className="relative overflow-hidden"
        style={{ aspectRatio: img.tall ? "3/4" : "4/3" }}
      >
        <Image
          src={img.src}
          alt={img.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-108"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/75 via-indigo-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-350 flex flex-col items-center justify-end p-5">
          <ZoomIn size={26} className="text-white mb-2 drop-shadow" />
          <p className="text-white text-sm font-bold drop-shadow">{img.caption}</p>
        </div>
      </div>
    </motion.div>
  );
}

export default function GallerySection() {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  // Split into 3 columns for masonry
  const col1 = galleryImages.filter((_, i) => i % 3 === 0);
  const col2 = galleryImages.filter((_, i) => i % 3 === 1);
  const col3 = galleryImages.filter((_, i) => i % 3 === 2);

  return (
    <section
      id="gallery"
      ref={ref}
      className="relative section-padding section-bg-gallery overflow-hidden"
    >
      {/* Background decoration */}
      <div
        className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #c084fc, #818cf8)" }}
      />
      <div
        className="absolute bottom-20 left-10 w-56 h-56 rounded-full blur-3xl opacity-15 pointer-events-none"
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
          <span
            className="section-label mb-5"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}
          >
            <Images size={12} />
            Gallery
          </span>
          <h2
            className="display-md text-gray-900 mb-4"
            style={{ textAlign: "center" }}
          >
            Moments of{" "}
            <span className="gradient-text font-serif italic">Learning &amp; Joy</span>
          </h2>
          <p
            className="text-gray-600 max-w-xl"
            style={{ margin: "0 auto", textAlign: "center" }}
          >
            A visual story of classrooms transformed, students inspired, and
            knowledge shared across India&apos;s schools.
          </p>
        </motion.div>

        {/* ── Masonry Grid ── */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
          style={{ paddingTop: "20px", paddingBottom: "20px" }}
        >
          {/* Column 1 */}
          <div className="flex flex-col">
            {col1.map((img, i) => (
              <GalleryItem
                key={img.src}
                img={img}
                index={i * 3}
                inView={inView}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Column 2 — offset down on md+ */}
          <div className="flex flex-col md:mt-10">
            {col2.map((img, i) => (
              <GalleryItem
                key={img.src}
                img={img}
                index={i * 3 + 1}
                inView={inView}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex flex-col">
            {col3.map((img, i) => (
              <GalleryItem
                key={img.src}
                img={img}
                index={i * 3 + 2}
                inView={inView}
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <LightboxModal image={selectedImage} onClose={() => setSelectedImage(null)} />
        )}
      </AnimatePresence>

      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0 wave-divider">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ height: "60px" }}>
          <path
            d="M0,30 C720,60 1080,10 1440,30 L1440,60 L0,60 Z"
            style={{ fill: "var(--lavender)" }}
          />
        </svg>
      </div>
    </section>
  );
}
