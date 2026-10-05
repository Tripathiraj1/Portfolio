"use client";

import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { CSSProperties, MouseEvent } from "react";
import type { Project } from "@/data/portfolio";
import { asset } from "@/lib/utils";
import { ArrowIcon } from "./Icons";

type Props = { project: Project; index: number; onOpen: (e: MouseEvent<HTMLElement>) => void };

/** 3D-tilting project card with a pointer-following glare. */
export default function ProjectCard({ project: p, index, onOpen }: Props) {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rotateX = useSpring(useTransform(my, [0, 1], [8, -8]), { stiffness: 200, damping: 20 });
  const rotateY = useSpring(useTransform(mx, [0, 1], [-8, 8]), { stiffness: 200, damping: 20 });
  const glareX = useTransform(mx, (v) => `${v * 100}%`);
  const glareY = useTransform(my, (v) => `${v * 100}%`);

  return (
    <motion.article
      id={`project-${p.id}`}
      className="project-card"
      style={{ rotateX, rotateY, "--a1": p.accent, "--a2": p.accent2, "--gx": glareX, "--gy": glareY } as unknown as CSSProperties}
      onPointerMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - r.left) / r.width);
        my.set((e.clientY - r.top) / r.height);
      }}
      onPointerLeave={() => {
        mx.set(0.5);
        my.set(0.5);
      }}
      onClick={onOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), onOpen(e as unknown as MouseEvent<HTMLElement>))}
      tabIndex={0}
      role="button"
      aria-label={`Open ${p.title}`}
      data-cursor="Open"
    >
      <div className="project-media">
        {p.image ? (
          <Image src={asset(p.image)} alt={`${p.title} preview`} fill sizes="(max-width: 768px) 85vw, 460px" />
        ) : (
          <div className="project-art" aria-hidden>
            <span>{p.title.split(" ").map((w) => w[0]).join("").slice(0, 3)}</span>
          </div>
        )}
        {p.live && (
          <span className="live-badge">
            <span className="pulse-dot" /> Live
          </span>
        )}
      </div>
      <div className="project-body">
        <div className="project-top">
          <span className="mono project-num">{String(index + 1).padStart(2, "0")}</span>
          <span className="project-cat">{p.category}</span>
        </div>
        <h3>{p.title}</h3>
        <p className="project-tagline">{p.tagline}</p>
        <div className="tag-row">
          {p.stack.slice(0, 4).map((s) => (
            <span className="tag" key={s}>{s}</span>
          ))}
        </div>
        <span className="project-open">
          Explore <ArrowIcon width={16} height={16} />
        </span>
      </div>
      <div className="project-glare" aria-hidden />
    </motion.article>
  );
}
