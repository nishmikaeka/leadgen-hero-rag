"use client";

import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Once user scrolls past threshold, hide forever
      if (window.scrollY > 150) {
        setHasScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Only show if user hasn't scrolled yet
  if (hasScrolled) {
    return null;
  }

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-10 lg:hidden
        pointer-events-none
      `}
    >
      <div className="flex flex-col items-center gap-2">
        <style>{`
          @keyframes chevron-bounce {
            0%, 100% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(10px);
              opacity: 0.6;
            }
          }

          .chevron-icon {
            animation: chevron-bounce 2.5s infinite;
          }
        `}</style>

        {/* Chevron down icon from lucide */}
        <svg
          className="chevron-icon"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#999999" }}
        >
          <polyline
            points="6 9 12 15 18 9"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Text label */}
        <span
          style={{
            fontSize: "10px",
            color: "#999999",
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            letterSpacing: "0.5px",
            marginTop: "4px",
          }}
        >
          Scroll to see
        </span>
      </div>
    </div>
  );
}
