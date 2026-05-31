"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function HeroRight() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Desktop: autoplay immediately (browser allows muted autoplay)
    if (window.innerWidth >= 1024) {
      video.play().catch(() => {
        /* silently ignore */
      });
      return;
    }

    // Mobile: IntersectionObserver — start playing when 66% of the video is in viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            video.play().catch(() => { });
          } else {
            video.pause();
          }
        });
      },
      {
        threshold: 0.66,
        // Slightly generous root margin so it fires just before 2/3 hits the viewport
        rootMargin: "0px 0px -5% 0px",
      },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div {...fadeUp(0.5)} className="relative w-full">
      {/* Video card */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          overflow: "hidden",
          backgroundColor: "transparent",
          /* Add a border radius if needed, otherwise just keep it hidden */
        }}
      >
        <video
          ref={videoRef}
          src="/demo5.mp4"
          loop
          muted
          playsInline
          autoPlay
          preload="metadata"
          aria-label="Product demo video"
          style={{
            display: "block",
            width: "calc(100% + 4px)",
            minWidth: "calc(100% + 4px)",
            height: "auto",
            margin: "-2px",
            objectFit: "cover",
            backgroundColor: "transparent",
            clipPath: "fill-box",
          }}
        />
      </div>
    </motion.div>
  );
}
