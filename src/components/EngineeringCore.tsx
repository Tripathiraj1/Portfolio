"use client";

import Image from "next/image";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useCallback, useEffect, useRef, useState, type MouseEvent } from "react";
import { projects, type Project } from "@/data/portfolio";
import { asset, originFromEvent, type Origin } from "@/lib/utils";
import CircleTransition from "./CircleTransition";
import ProjectCard from "./ProjectCard";
import { ArrowIcon } from "./Icons";

/** Sticky, scroll-jacked horizontal track of projects. Vertical scroll → horizontal motion. */
export default function EngineeringCore() {
  const section = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);
  const [active, setActive] = useState<Project | null>(null);
  const [origin, setOrigin] = useState<Origin>({ x: 0, y: 0 });

  useEffect(() => {
    const el = track.current;
    if (!el) return;
    const measure = () => setDistance(Math.max(0, el.scrollWidth - window.innerWidth));
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: section, offset: ["start start", "end end"] });
  const rawX = useTransform(scrollYProgress, (v) => -v * distance);
  const x = useSpring(rawX, { stiffness: 140, damping: 30, mass: 0.4 });
  const bar = useSpring(scrollYProgress, { stiffness: 140, damping: 30 });

  const open = (p: Project) => (e: MouseEvent<HTMLElement>) => {
    setOrigin(originFromEvent(e));
    setActive(p);
  };
  const close = useCallback(() => setActive(null), []);

  return (
    <>
      <section id="work" ref={section} className="work" style={{ height: `calc(100vh + ${distance}px)` }}>
        <div className="work-sticky">
          <div className="work-head">
            <div>
              <span className="section-index mono">03 / Engineering Core</span>
              <h2 className="section-title">
                Things I&apos;ve <span className="gradient-text">built &amp; shipped</span>
              </h2>
            </div>
            <div className="work-progress" aria-hidden>
              <motion.span style={{ scaleX: bar }} />
            </div>
          </div>

          <motion.div className="work-track" ref={track} style={{ x }}>
            {projects.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} onOpen={open(p)} />
            ))}
            <div className="work-end">
              <p className="mono">More on</p>
              <a id="work-github" href="https://github.com/Tripathiraj1" target="_blank" rel="noopener noreferrer" data-cursor="GitHub">
                GitHub <ArrowIcon width={28} height={28} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <CircleTransition
        open={!!active}
        origin={origin}
        onClose={close}
        label={active?.title ?? "Project"}
        style={active ? { background: `radial-gradient(120% 120% at 0% 0%, ${active.accent}33, transparent 50%), radial-gradient(120% 120% at 100% 100%, ${active.accent2}33, transparent 50%), #07070d` } : undefined}
      >
        {active && (
          <div className="detail">
            <div className="detail-head">
              <span className="detail-cat mono" style={{ color: active.accent }}>
                {active.category}
                {active.live && " · Live"}
              </span>
              <h2>{active.title}</h2>
              <p className="detail-summary">{active.summary}</p>
            </div>
            <div className="detail-grid">
              <div className="detail-media" style={{ borderColor: `${active.accent}55` }}>
                {active.image ? (
                  <Image src={asset(active.image)} alt={`${active.title} visual`} width={1376} height={768} />
                ) : (
                  <div className="project-art project-art--lg" style={{ background: `linear-gradient(135deg, ${active.accent}, ${active.accent2})` }}>
                    <span>{active.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}</span>
                  </div>
                )}
              </div>
              <div className="detail-info">
                <h3 className="mono">What I did</h3>
                <ul>
                  {active.highlights.map((h, i) => (
                    <motion.li key={h} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.6 + i * 0.1 }}>
                      <span style={{ background: active.accent }} />
                      {h}
                    </motion.li>
                  ))}
                </ul>
                <h3 className="mono">Stack</h3>
                <div className="tag-row">
                  {active.stack.map((s) => (
                    <span className="tag" key={s}>{s}</span>
                  ))}
                </div>
                {active.link && (
                  <a id="detail-link" className="btn btn--primary detail-link" href={active.link.href} target="_blank" rel="noopener noreferrer" data-cursor="Visit">
                    {active.link.label} <ArrowIcon width={16} height={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </CircleTransition>
    </>
  );
}
