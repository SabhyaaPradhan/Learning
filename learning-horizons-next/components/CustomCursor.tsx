"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const ringX = useMotionValue(-100);
  const ringY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);

  const ringSpringConfig = { damping: 30, stiffness: 200 };
  const ringSX = useSpring(ringX, ringSpringConfig);
  const ringSY = useSpring(ringY, ringSpringConfig);

  const isExpanded = useRef(false);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.matches("a, button, [data-cursor-expand]")) {
        isExpanded.current = true;
      }
    };

    const handleMouseOut = () => {
      isExpanded.current = false;
    };

    window.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, [cursorX, cursorY, ringX, ringY]);

  return (
    <div className="custom-cursor hidden lg:block" aria-hidden="true">
      {/* Dot */}
      <motion.div
        className="cursor-dot"
        style={{ x: springX, y: springY }}
      />
      {/* Ring */}
      <motion.div
        className="cursor-ring"
        style={{ x: ringSX, y: ringSY }}
      />
    </div>
  );
}
