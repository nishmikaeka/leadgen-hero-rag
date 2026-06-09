"use client";

import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

const desktopBullets = [
  { label: "100% Data Privacy", text: "" },
  { label: "Zero Hallucinations", text: "" },
  { label: "24/7 Automation", text: "" },
];

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ flexShrink: 0 }}
  >
    <path
      d="M4.5 8.2L6.5 10.3L11.5 5.5"
      stroke="var(--accent-dark)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const mobileBullets = ["Data Privacy", "No Hallucinations", "24/7 Workflows"];

interface HeroLeftProps {
  onFaqOpen: () => void;
}

export default function HeroLeft({ onFaqOpen }: HeroLeftProps) {
  return (
    <div className="flex flex-col gap-5 items-center lg:items-start text-center lg:text-left w-full max-w-lg mx-auto lg:mx-0">
      {/* Badge */}
      <motion.div {...fadeUp(0)}>
        <span
          style={{
            border: "1px solid var(--accent)",
            background: "rgba(184,245,60,0.1)",
            color: "var(--accent-dark)",
            fontSize: "9px",
            letterSpacing: "0.12em",
            fontFamily: "var(--font-inter)",
            fontWeight: 600,
            textTransform: "uppercase",
            padding: "4px 10px",
            borderRadius: "0px",
            display: "inline-block",
          }}
        >
          Custom AI Chatbots
        </span>
      </motion.div>

      {/* Headline — Reduced size */}
      <motion.h1
        {...fadeUp(0.1)}
        style={{
          fontFamily: "var(--font-display)",
          fontWeight: 650,
          lineHeight: 1.1,
          color: "var(--foreground)",
          fontSize: "clamp(42px, 4vw, 46px)",
        }}
      >
        Turn Your Docs
        <br />
        Into a 24/7 AI
        <br />
        <span
          style={{
            display: "inline-block",
            background: "var(--accent)",
            color: "var(--foreground)",
            padding: "2px 11px",
            borderRadius: "0px",
            transform: "rotate(-1.2deg)",
            transformOrigin: "center",
            marginLeft: "6px",
          }}
        >
          Assistant.
        </span>
      </motion.h1>

      <motion.ul {...fadeUp(0.3)} className="hidden lg:flex flex-row gap-4">
        {desktopBullets.map(({ label }) => (
          <li key={label} className="flex items-center gap-1.5">
            <CheckIcon />
            <span
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "var(--foreground)",
                fontFamily: "var(--font-inter)",
                whiteSpace: "nowrap",
              }}
            >
              {label}
            </span>
          </li>
        ))}
      </motion.ul>

      {/* Mobile bullets */}
      <motion.div {...fadeUp(0.3)} className="lg:hidden w-full max-w-sm px-4">
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2.5">
          {mobileBullets.map((label) => (
            <div key={label} className="flex items-center gap-1.5">
              <CheckIcon />
              <span
                style={{
                  fontSize: "clamp(11px, 1.5vw, 12px)",
                  fontWeight: 600,
                  color: "var(--foreground)",
                  fontFamily: "var(--font-inter)",
                  whiteSpace: "nowrap",
                }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA + Have Questions */}
      <motion.div
        {...fadeUp(0.4)}
        className="flex flex-col gap-2 pt-1 items-center lg:items-start"
      >
        <a
          id="fiverr-cta-btn"
          href="https://www.fiverr.com/s/38D2rla"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            background: "var(--foreground)",
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "13px",
            padding: "12px 28px",
            borderRadius: "0px",
            textDecoration: "none",
            transition: "background 0.2s ease, color 0.2s ease",
            fontFamily: "var(--font-inter)",
            width: "fit-content",
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--accent)";
            el.style.color = "var(--foreground)";
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget;
            el.style.background = "var(--foreground)";
            el.style.color = "#ffffff";
          }}
        >
          Place an Order on Fiverr →
        </a>

        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "11px",
            fontFamily: "var(--font-inter)",
          }}
        >
          Starts at $100 · Delivered in 3–5 days
        </p>

        {/* Have Questions — low contrast, below CTA */}
        <button
          id="faq-trigger-btn"
          onClick={onFaqOpen}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            fontFamily: "var(--font-inter)",
            fontSize: "11px",
            color: "rgba(0, 0, 0, 0.4)",
            textDecoration: "underline",
            textDecorationColor: "rgba(0, 0, 0, 0.4)",
            textUnderlineOffset: "3px",
            padding: "0",
            transition: "color 0.15s ease, text-decoration-color 0.15s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "rgba(0, 0, 0, 0.8)";
            e.currentTarget.style.textDecorationColor = "rgba(0, 0, 0, 0.8)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "rgba(0, 0, 0, 0.4)";
            e.currentTarget.style.textDecorationColor = "rgba(0, 0, 0, 0.4)";
          }}
        >
          Have questions?
        </button>
      </motion.div>
    </div>
  );
}
