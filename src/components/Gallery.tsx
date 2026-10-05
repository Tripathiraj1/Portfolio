"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useCallback, useState } from "react";
import { gallery } from "@/data/portfolio";
import { asset, originFromEvent, type Origin } from "@/lib/utils";
import CircleTransition from "./CircleTransition";

type Item = (typeof gallery)[number];

/** Masonry gallery of dashboards & architecture visuals; each opens a circle-reveal lightbox. */
export default function Gallery() {
  const [active, setActive] = useState<Item | null>(null);
  const [origin, setOrigin] = useState<Origin>({ x: 0, y: 0 });
  const close = useCallback(() => setActive(null), []);

  return (
    <section id="gallery" className="section gallery">
      <div className="section-head">
        <span className="section-index mono">04 / Visuals</span>
        <motion.h2 className="section-title" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
          Dashboards, diagrams <span className="gradient-text">&amp; data stories.</span>
        </motion.h2>
      </div>

      <div className="masonry">
        {gallery.map((g, i) => (
          <motion.button
            key={g.src}
            id={`gallery-${i}`}
            className={`masonry-item${"tall" in g && g.tall ? " is-tall" : ""}`}
            onClick={(e) => {
              setOrigin(originFromEvent(e));
              setActive(g);
            }}
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: (i % 2) * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            data-cursor="View"
          >
            <Image src={asset(g.src)} alt={g.title} fill sizes="(max-width: 768px) 100vw, 50vw" />
            <span className="masonry-caption">
              <strong>{g.title}</strong>
              <small>{g.caption}</small>
            </span>
          </motion.button>
        ))}
      </div>

      <CircleTransition open={!!active} origin={origin} onClose={close} label={active?.title ?? "Image"} style={{ background: "rgba(5,5,10,0.97)" }}>
        {active && (
          <figure className="lightbox">
            <Image src={asset(active.src)} alt={active.title} width={1376} height={768} />
            <figcaption>
              <strong>{active.title}</strong>
              <span>{active.caption}</span>
            </figcaption>
          </figure>
        )}
      </CircleTransition>
    </section>
  );
}
