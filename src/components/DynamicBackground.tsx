"use client";

import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";

/**
 * Fixed, lowest-z background that morphs colour as you scroll:
 * obsidian (hero) → midnight blue (journey) → violet (work) → warm plum (gallery) → teal (skills) → obsidian.
 * Three slow-drifting "lava lamp" blobs keep it alive even when idle.
 */
export default function DynamicBackground() {
  const { scrollYProgress } = useScroll();
  const stops = [0, 0.18, 0.4, 0.6, 0.8, 1];

  const base = useTransform(scrollYProgress, stops, ["#06060b", "#070b1f", "#0b0820", "#140a1a", "#05141a", "#06060b"]);
  const a = useTransform(scrollYProgress, stops, ["#6d5dfc", "#3b82f6", "#8b5cf6", "#f59e0b", "#14b8a6", "#6d5dfc"]);
  const b = useTransform(scrollYProgress, stops, ["#22d3ee", "#6366f1", "#ec4899", "#ec4899", "#22d3ee", "#22d3ee"]);
  const c = useTransform(scrollYProgress, stops, ["#f472b6", "#0ea5e9", "#6366f1", "#a855f7", "#34d399", "#f472b6"]);

  const blobA = useMotionTemplate`radial-gradient(circle at center, ${a} 0%, transparent 62%)`;
  const blobB = useMotionTemplate`radial-gradient(circle at center, ${b} 0%, transparent 62%)`;
  const blobC = useMotionTemplate`radial-gradient(circle at center, ${c} 0%, transparent 62%)`;

  return (
    <div className="bg-root" aria-hidden>
      <motion.div className="bg-base" style={{ backgroundColor: base }} />
      <motion.div className="bg-blob bg-blob--a" style={{ background: blobA }} />
      <motion.div className="bg-blob bg-blob--b" style={{ background: blobB }} />
      <motion.div className="bg-blob bg-blob--c" style={{ background: blobC }} />
      <div className="bg-grid" />
      <div className="bg-noise" />
    </div>
  );
}
