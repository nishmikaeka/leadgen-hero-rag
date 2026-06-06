"use client";

import { useState, useEffect } from "react";

export default function ScrollIndicator() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator after scrolling down 200px
      // This ensures it disappears once video content becomes visible
      if (window.scrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed bottom-8 left-1/2 -translate-x-1/2 z-10 lg:hidden
        transition-opacity duration-300 pointer-events-none
        ${isVisible ? "opacity-100" : "opacity-0"}
      `}
    >
      <div className="flex flex-col items-center gap-2">
        <style>{`
          @keyframes scroll-bounce {
            0%, 100% {
              transform: translateY(0);
              opacity: 1;
            }
            50% {
              transform: translateY(8px);
              opacity: 0.5;
            }
          }

          .scroll-arrow {
            animation: scroll-bounce 2s infinite;
          }
        `}</style>

        {/* Down arrow icon */}
        <svg
          className="scroll-arrow"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ color: "#a0a0a0" }}
        >
          <path
            d="M12 5V19M12 19L5 12M12 19L19 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Optional text label */}
        <span
          style={{
            fontSize: "11px",
            color: "#a0a0a0",
            fontFamily: "var(--font-inter)",
            fontWeight: 500,
            letterSpacing: "0.5px",
          }}
        >
          Scroll to explore
        </span>
      </div>
    </div>
  );
}
