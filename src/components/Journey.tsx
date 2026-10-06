"use client";

import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { useRef, useState, type CSSProperties } from "react";
import { journey, type Chapter } from "@/data/portfolio";

function ChapterCard({ c, i, total }: { c: Chapter; i: number; total: number }) {
  const [open, setOpen] = useState(false);
  const side = i % 2 === 0 ? "left" : "right";
  const chapterNum = String(total - i).padStart(2, "0");

  return (
    <div className={`chapter chapter--${side}`} style={{ "--accent": c.accent } as CSSProperties}>
      <motion.span
        className="chapter-node"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
        transition={{ type: "spring", stiffness: 300, damping: 18 }}
      />
      <motion.article
        className="chapter-card glass"
        initial={{ opacity: 0, x: side === "left" ? -80 : 80, rotate: side === "left" ? -3 : 3 }}
        whileInView={{ opacity: 1, x: 0, rotate: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="chapter-meta">
          <span className="chapter-num mono">Chapter {chapterNum}</span>
          <span className="chapter-date mono">{c.date}</span>
        </div>
        <h3>{c.title}</h3>
        <p className="chapter-org">
          {c.org} <span>· {c.place}</span>
        </p>
        <p className="chapter-story">{c.story}</p>

        <AnimatePresence initial={false}>
          {open && (
            <motion.ul
              className="chapter-details"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              {c.details.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <div className="chapter-foot">
          <div className="tag-row">
            {c.tags.map((t) => (
              <span className="tag" key={t}>{t}</span>
            ))}
          </div>
          <button id={`chapter-toggle-${i}`} className="chapter-toggle" onClick={() => setOpen((o) => !o)} aria-expanded={open} data-cursor={open ? "Less" : "More"}>
            {open ? "Less" : "Details"}
            <motion.span animate={{ rotate: open ? 45 : 0 }}>+</motion.span>
          </button>
        </div>
      </motion.article>
    </div>
  );
}

export default function Journey() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 65%", "end 55%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 25 });

  return (
    <section id="journey" className="section journey">
      <div className="section-head center">
        <span className="section-index mono">02 / Journey[ : : -1]</span>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          From first <span className="gradient-text">print()</span> to production.
        </motion.h2>
        <p className="section-sub">Scroll to follow the path. Tap any chapter for the details.</p>
      </div>

      <div className="timeline" ref={ref}>
        <div className="timeline-track" />
        <motion.div className="timeline-fill" style={{ scaleY }} />
        {journey.map((c, i) => (
          <ChapterCard c={c} i={i} total={journey.length} key={c.title} />
        ))}
      </div>
    </section>
  );
}
