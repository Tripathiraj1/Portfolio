"use client";

import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import Magnetic from "./Magnetic";
import { GithubIcon, LinkedinIcon, MailIcon } from "./Icons";

const START = 1.6; // wait for the loader to clear
const ease = [0.22, 1, 0.36, 1] as const;

const chips = [
  { label: "Python", x: "-8%", y: "8%", depth: 1.4 },
  { label: "XGBoost", x: "78%", y: "2%", depth: 0.9 },
  { label: "MLflow", x: "88%", y: "62%", depth: 1.6 },
  {label: "FastAPI", x: "-14%", y: "70%", depth: 1.1 },
  { label: "Django", x: "40%", y: "96%", depth: 0.7 },
  { label: "LLMs", x: "30%", y: "-10%", depth: 1.8 },
];

function Chip({ label, x, y, depth, mx, my, i }: (typeof chips)[number] & { mx: MotionValue<number>; my: MotionValue<number>; i: number }) {
  const tx = useTransform(mx, (v) => v * depth * 60);
  const ty = useTransform(my, (v) => v * depth * 60);
  return (
    <motion.span
      className="orb-chip"
      style={{ left: x, top: y, x: tx, y: ty }}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: START + 0.6 + i * 0.08, duration: 0.6, ease }}
    >
      {label}
    </motion.span>
  );
}

function SplitWord({ word, delay, className }: { word: string; delay: number; className?: string }) {
  return (
    <span className={`split-word ${className ?? ""}`} aria-hidden>
      {word.split("").map((ch, i) => (
        <span className="split-mask" key={i}>
          <motion.span
            className="split-char"
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ delay: delay + i * 0.04, duration: 0.9, ease }}
          >
            {ch}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

export default function Hero() {
  const [role, setRole] = useState(0);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotX = useSpring(useTransform(my, [-0.5, 0.5], [14, -14]), { stiffness: 120, damping: 18 });
  const rotY = useSpring(useTransform(mx, [-0.5, 0.5], [-14, 14]), { stiffness: 120, damping: 18 });
  const smx = useSpring(mx, { stiffness: 80, damping: 20 });
  const smy = useSpring(my, { stiffness: 80, damping: 20 });

  useEffect(() => {
    const t = setInterval(() => setRole((r) => (r + 1) % profile.roles.length), 2600);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      onPointerMove={(e) => {
        mx.set(e.clientX / window.innerWidth - 0.5);
        my.set(e.clientY / window.innerHeight - 0.5);
      }}
    >
      <div className="hero-copy">
        <motion.p className="eyebrow" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: START, duration: 0.7 }}>
          <span className="pulse-dot" /> {profile.location} · Open to opportunities
        </motion.p>

        <h1 className="hero-title" aria-label={profile.name}>
          <SplitWord word={profile.first} delay={START + 0.1} />
          <SplitWord word={profile.last} delay={START + 0.35} className="outline" />
        </h1>

        <motion.div className="hero-role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: START + 0.8 }}>
          <span className="mono">&gt;_</span>
          <span className="role-window">
            <AnimatePresence mode="wait">
              <motion.span
                key={role}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                exit={{ y: "-100%", opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                className="gradient-text"
              >
                {profile.roles[role]}
              </motion.span>
            </AnimatePresence>
          </span>
        </motion.div>

        <motion.p className="hero-lede" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: START + 0.95, duration: 0.7 }}>
          I turn raw data into production systems — forecasting engines, prediction models, LLM assistants and the APIs &amp; dashboards that put them to work.
        </motion.p>

        <motion.div className="hero-actions" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: START + 1.1, duration: 0.7 }}>
          <Magnetic href="#journey" id="hero-journey" className="btn btn--primary" cursor="Go">
            Start the journey <span aria-hidden>↓</span>
          </Magnetic>
          <Magnetic href="#work" id="hero-work" className="btn btn--ghost">
            See my work
          </Magnetic>
          <div className="hero-socials">
            <a id="hero-github" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon /></a>
            <a id="hero-linkedin" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon /></a>
            <a id="hero-email" href={`https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`} target="_blank" rel="noopener noreferrer" aria-label="Gmail"><MailIcon /></a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: START + 0.2, duration: 1.2, ease }}
      >
        <motion.div className="orb-stage" style={{ rotateX: rotX, rotateY: rotY }}>
          <div className="orb-ring orb-ring--1" />
          <div className="orb-ring orb-ring--2" />
          <div className="orb">
            <div className="orb-inner">
              {profile.avatar ? (
                <Image
                  src={asset(profile.avatar)}
                  alt={profile.name}
                  fill
                  className="orb-avatar"
                  sizes="350px"
                  priority
                />
              ) : (
                <>
                  <span className="orb-mono">UT</span>
                  <span className="orb-sub mono">ml.engineer()</span>
                </>
              )}
            </div>
          </div>
          {chips.map((c, i) => (
            <Chip key={c.label} {...c} i={i} mx={smx} my={smy} />
          ))}
        </motion.div>
      </motion.div>

      <motion.a href="#about" className="scroll-cue" id="hero-scroll" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: START + 1.5 }} aria-label="Scroll to about">
        <span className="scroll-cue-line" />
        <span className="mono">scroll</span>
      </motion.a>
    </section>
  );
}
