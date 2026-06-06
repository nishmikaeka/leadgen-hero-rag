"use client";

import { useState } from "react";
import HeroLeft from "@/components/HeroLeft";
import HeroRight from "@/components/HeroRight";
import FaqModal from "@/components/FaqModal";
import ScrollIndicator from "@/components/ScrollIndicator";
import Image from "next/image";
import Script from "next/script";

export default function Page() {
  const [faqOpen, setFaqOpen] = useState(false);

  return (
    <div
      className="dot-grid min-h-screen relative flex flex-col"
      style={{ backgroundColor: "var(--background)" }}
    >
      {/* ─── HEADER ─── */}
      <header className="absolute top-0 left-0 w-full z-20">
        <div className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          <div className="relative w-7 h-7 opacity-90">
            <Image
              src="/logoB.png"
              alt="Logo"
              fill
              className="object-contain object-left"
              sizes="128px"
              priority
            />
          </div>
          <div className="relative w-8 h-8 overflow-hidden rounded-full">
            <Image
              src="/profile.avif"
              alt="Profile"
              fill
              className="object-cover"
              sizes="128px"
            />
          </div>
        </div>
      </header>

      {/*
       * ─── LAYOUT STRATEGY ───────────────────────────────────────────────
       *
       * DESKTOP (lg+):
       *   Standard 100vh hero. Left = copy. Right = full video, no clip.
       *
       * MOBILE:
       *   We use a single tall column layout.
       *   The hero section is h-screen — only the copy + ~1/3 of the video
       *   peek is visible. The grid naturally overflows below the fold.
       *   No scroll-jacking; the user just scrolls, IntersectionObserver
       *   fires at 66% video visibility and starts playback.
       * ─────────────────────────────────────────────────────────────────
       */}
      <section className="relative lg:h-screen min-h-screen flex flex-col lg:items-center lg:justify-center overflow-visible lg:overflow-hidden">
        <div className="w-full max-w-6xl mx-auto px-6 pt-32 pb-6 lg:pt-0 lg:pb-0">
          <div
            className="
                        grid grid-cols-1 lg:grid-cols-2
                        gap-10 lg:gap-16
                        items-start lg:items-center
                        w-full
                    "
          >
            {/* ── LEFT: Copy + CTA ── */}
            <div className="flex flex-col justify-center min-h-[65vh] lg:min-h-0">
              <HeroLeft onFaqOpen={() => setFaqOpen(true)} />
            </div>

            {/* ── RIGHT: Video ── */}
            <div className="relative flex justify-center lg:justify-start w-full md:w-5/6 lg:w-[90%] xl:w-[85%] mx-auto lg:mx-0">
              {/* Desktop glow ring */}
              <div
                className="absolute inset-0 -z-10 hidden lg:block opacity-20 blur-[60px]"
                style={{ background: "var(--accent)" }}
                aria-hidden="true"
              />

              {/*
                              Mobile: clip wrapper shows only top ~33vh of the video.
                              The CSS class `.mobile-video-peek` applies overflow:hidden + max-height
                              only below lg breakpoint (defined in the <style> block below).
                            */}
              <div className="mobile-video-peek w-full">
                <HeroRight />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Styles ─── */}
      <style>{`
                @keyframes bounce {
                    0%, 100% { transform: translateY(0); }
                    50%       { transform: translateY(7px); }
                }

                /*
                 * Mobile: allow the full video to render so the user can scroll to it.
                 * On desktop (lg+): no clipping.
                 */
                .mobile-video-peek {
                    display: block;
                    width: 100%;
                }
                @media (min-width: 1024px) {
                    .mobile-video-peek {
                    }
                }

                video {
                    clip-path: fill-box;
                    border-radius: 8px; /* Clean edge */
                }
            `}</style>

      {/* ─── SCROLL INDICATOR ─── */}
      <ScrollIndicator />

      {/* ─── FAQ MODAL ─── */}
      <FaqModal isOpen={faqOpen} onClose={() => setFaqOpen(false)} />
    </div>
  );
}
