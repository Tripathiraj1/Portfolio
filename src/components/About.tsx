"use client";

import { animate, motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile, stats } from "@/data/portfolio";

function Counter({ value, decimals, prefix = "", suffix = "" }: { value: number; decimals: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const c = animate(0, value, { duration: 1.6, ease: [0.22, 1, 0.36, 1], onUpdate: setN });
    return () => c.stop();
  }, [inView, value]);

  return (
    <span ref={ref}>
      {prefix}
      {n.toFixed(decimals)}
      {suffix}
    </span>
  );
}

const terminal = [
  { cmd: "whoami", out: "utkarsh — machine learning engineer @ ADA Global" },
  { cmd: "cat focus.txt", out: "forecasting · prediction · LLM apps · MLOps" },
  { cmd: "ls stack/", out: "python/  sql/  django/  fastapi/  postgres/  xgboost/  mlflow/  docker/" },
  { cmd: "git log --oneline -1", out: "feat: shipping production ML, one pipeline at a time" },
];

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="section-head">
        <span className="section-index mono">01 / About</span>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Engineer by training.<br />
          <span className="gradient-text">Builder by habit.</span>
        </motion.h2>
      </div>

      <div className="about-grid">
        <motion.div className="about-copy" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }}>
          <p>{profile.summary}</p>
          <p className="muted">Currently obsessed with:</p>
          <div className="pill-row">
            {profile.passions.map((p) => (
              <span className="pill" key={p}>{p}</span>
            ))}
          </div>
        </motion.div>

        <motion.div className="terminal glass" initial={{ opacity: 0, y: 40, rotate: 2 }} whileInView={{ opacity: 1, y: 0, rotate: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.9 }}>
          <div className="terminal-bar">
            <i /><i /><i />
            <span className="mono">~/utkarsh — zsh</span>
          </div>
          <div className="terminal-body mono">
            {terminal.map((t, i) => (
              <motion.div key={t.cmd} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 + i * 0.35 }}>
                <p><span className="t-prompt">➜</span> <span className="t-path">~</span> {t.cmd}</p>
                <p className="t-out">{t.out}</p>
              </motion.div>
            ))}
            <p><span className="t-prompt">➜</span> <span className="t-path">~</span> <span className="t-caret" /></p>
          </div>
        </motion.div>
      </div>

      <div className="stats">
        {stats.map((s, i) => (
          <motion.div className="stat glass" key={s.label} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.6 }}>
            <strong className="stat-value">
              <Counter value={s.value} decimals={s.decimals} prefix={s.prefix} suffix={s.suffix} />
            </strong>
            <span className="stat-label">{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
