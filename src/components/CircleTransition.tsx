"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type CSSProperties, type ReactNode } from "react";
import type { Origin } from "@/lib/utils";

type Props = {
  open: boolean;
  origin: Origin;
  onClose: () => void;
  label: string;
  style?: CSSProperties;
  children: ReactNode;
};

const ease = [0.76, 0, 0.24, 1] as const;

/** Full-screen overlay revealed by a circle that grows from the click point (clip-path). */
export default function CircleTransition({ open, origin, onClose, label, style, children }: Props) {
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  const at = `${origin.x}px ${origin.y}px`;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="circle-overlay"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          style={style}
          initial={{ clipPath: `circle(0% at ${at})` }}
          animate={{ clipPath: `circle(150% at ${at})` }}
          exit={{ clipPath: `circle(0% at ${at})` }}
          transition={{ duration: 0.85, ease }}
        >
          <button id="overlay-close" className="overlay-close" onClick={onClose} data-cursor="Close" aria-label="Close">
            <span />
            <span />
          </button>
          <motion.div
            className="overlay-inner"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 0.35, duration: 0.7, ease } }}
            exit={{ opacity: 0, y: 20, transition: { duration: 0.2 } }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
