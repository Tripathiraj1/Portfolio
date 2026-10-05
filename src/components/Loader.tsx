"use client";

import { AnimatePresence, animate, motion } from "framer-motion";
import { useEffect, useState } from "react";

/** Intro counter that exits by collapsing into a circle, revealing the site. */
export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: 1.3,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setCount(Math.round(v)),
      onComplete: () => setTimeout(() => setDone(true), 150),
    });
    return () => controls.stop();
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="loader"
          initial={{ clipPath: "circle(150% at 50% 50%)" }}
          exit={{ clipPath: "circle(0% at 50% 50%)" }}
          transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="loader-mark">UT</div>
          <div className="loader-bar">
            <motion.span style={{ scaleX: count / 100 }} />
          </div>
          <div className="loader-count">{String(count).padStart(3, "0")}</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
