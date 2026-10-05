"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/portfolio";
import Magnetic from "./Magnetic";
import { ArrowIcon, GithubIcon, LinkedinIcon, MailIcon, WhatsappIcon } from "./Icons";

export default function Contact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${profile.email}`;
  const mailtoUrl = `mailto:${profile.email}`;
  const whatsappUrl = `https://wa.me/${profile.phone.replace(/[^0-9]/g, "")}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
    } catch {
      // fallback
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      setMenuOpen(false);
    }, 1400);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <section id="contact" className="section contact">
      <span className="section-index mono">06 / Contact</span>
      <motion.h2 className="contact-title" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
        Let&apos;s build something <span className="gradient-text">intelligent.</span>
      </motion.h2>
      <p className="section-sub">Open to ML engineering, backend and GenAI roles — or just a good conversation about models in production.</p>

      <div className="contact-actions">
        <Magnetic href={gmailUrl} id="contact-say-hello" className="contact-orb" cursor="Gmail" strength={0.45} external>
          <span>Say hello</span>
          <ArrowIcon width={22} height={22} />
        </Magnetic>
      </div>

      <div className="contact-row">
        <div className="email-wrapper" ref={menuRef}>
          <button
            id="contact-email-btn"
            className={`contact-chip${menuOpen ? " is-active" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            data-cursor="Options"
            aria-expanded={menuOpen}
          >
            <MailIcon width={18} height={18} />
            <span>Email</span>
            <motion.span animate={{ rotate: menuOpen ? 180 : 0 }} transition={{ duration: 0.3 }} style={{ fontSize: "0.75rem", opacity: 0.7 }}>
              ▼
            </motion.span>
          </button>

          <AnimatePresence>
            {menuOpen && (
              <motion.div
                className="email-popover"
                initial={{ opacity: 0, y: 12, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.94 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="popover-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="popover-icon">✉️</span>
                  <span>Send via Gmail</span>
                </a>
                <a
                  href={mailtoUrl}
                  className="popover-item"
                  onClick={() => setMenuOpen(false)}
                >
                  <span className="popover-icon">📬</span>
                  <span>Open Mail App</span>
                </a>
                <button
                  type="button"
                  className="popover-item"
                  onClick={handleCopy}
                >
                  <span className="popover-icon">{copied ? "✓" : "📋"}</span>
                  <span>{copied ? "Copied to Clipboard!" : "Copy Email Address"}</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <a id="contact-whatsapp" className="contact-chip" href={whatsappUrl} target="_blank" rel="noopener noreferrer" data-cursor="WhatsApp">
          <WhatsappIcon width={18} height={18} />
          <span>WhatsApp Me</span>
        </a>

        <a id="contact-github" className="contact-chip icon" href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon width={18} height={18} /></a>
        <a id="contact-linkedin" className="contact-chip icon" href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon width={18} height={18} /></a>
      </div>

      <footer className="footer">
        <span>© {new Date().getFullYear()} {profile.name}</span>
        <a id="footer-top" href="#home" data-cursor="Top">Back to top ↑</a>
      </footer>
    </section>
  );
}
