"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { certifications, skillGroups, skills, type SkillGroup } from "@/data/portfolio";

export default function Skills() {
  const [group, setGroup] = useState<SkillGroup>("All");
  const visible = group === "All" ? skills : skills.filter((s) => s.group === group);

  return (
    <section id="skills" className="section skills">
      <div className="section-head center">
        <span className="section-index mono">05 / Toolkit</span>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          The <span className="gradient-text">stack</span> behind the work.
        </motion.h2>
      </div>


      <div className="skill-tabs" role="tablist" aria-label="Skill categories">
        {skillGroups.map((g) => (
          <button key={g} id={`skill-tab-${g.replace(/\W+/g, "-").toLowerCase()}`} role="tab" aria-selected={group === g} className={group === g ? "is-active" : ""} onClick={() => setGroup(g)}>
            {group === g && <motion.span layoutId="skill-pill" className="skill-pill" transition={{ type: "spring", stiffness: 400, damping: 32 }} />}
            <span>{g}</span>
          </button>
        ))}
      </div>

      <motion.div layout className="skill-grid">
        <AnimatePresence mode="popLayout">
          {visible.map((s) => (
            <motion.span
              layout
              key={s.name}
              className={`skill skill--${s.group.replace(/\W+/g, "").toLowerCase()}`}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              transition={{ type: "spring", stiffness: 400, damping: 28 }}
              whileHover={{ y: -4, scale: 1.06 }}
            >
              {s.name}
            </motion.span>
          ))}
        </AnimatePresence>
      </motion.div>

      <div className="certs">
        {certifications.map((c, i) => (
          <motion.div key={c} className="cert glass" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
            <span className="cert-icon">✦</span>
            {c}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
