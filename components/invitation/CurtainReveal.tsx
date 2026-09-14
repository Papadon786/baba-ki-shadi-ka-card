"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import AmbientGlow from "../effects/AmbientGlow";
import GoldDust from "../effects/GoldDust";
import { animationConstants } from "@/lib/constants/animations";

interface CurtainRevealProps {
  onRevealComplete: () => void;
}

export default function CurtainReveal({ onRevealComplete }: CurtainRevealProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const leftCurtainRef = useRef<HTMLDivElement | null>(null);
  const rightCurtainRef = useRef<HTMLDivElement | null>(null);
  const tapPromptRef = useRef<HTMLDivElement | null>(null);
  const anticipationRef = useRef<HTMLDivElement | null>(null);
  const bloomRef = useRef<HTMLDivElement | null>(null);
  const wowStageRef = useRef<HTMLDivElement | null>(null);

  const handleOpen = () => {
    if (isAnimating || isOpened) return;
    setIsAnimating(true);

    const tl = gsap.timeline({
      onComplete: () => {
        setIsOpened(true);
        // Hold WOW state briefly for cinematic grandeur before transitioning
        gsap.delayedCall(animationConstants.wowHoldDuration, () => {
          onRevealComplete();
        });
      },
    });

    // 1. Fade & scale out "tap to open"
    tl.to(tapPromptRef.current, {
      opacity: 0,
      scale: animationConstants.tapFadeScale,
      duration: animationConstants.tapFadeDuration,
      ease: "power2.in",
    });

    // 2. Anticipation dip (slight darkening)
    tl.to(
      anticipationRef.current,
      {
        opacity: 0.45,
        duration: 0.2,
        ease: "power1.inOut",
      },
      "-=0.1"
    );

    // 3. Golden light slit burst
    tl.fromTo(
      bloomRef.current,
      { scaleX: 0.05, opacity: 0 },
      {
        scaleX: 1.8,
        opacity: animationConstants.bloomPeakOpacity,
        duration: 0.65,
        ease: "power2.inOut",
      },
      "-=0.05"
    );

    // 4. Velvet curtains physically slide apart with gentle skew/gather
    tl.to(
      leftCurtainRef.current,
      {
        xPercent: -100,
        skewY: -animationConstants.curtainSkew,
        scaleX: animationConstants.curtainGatherScale,
        duration: animationConstants.curtainSplitDuration,
        ease: animationConstants.curtainEase,
      },
      "-=0.55"
    );

    tl.to(
      rightCurtainRef.current,
      {
        xPercent: 100,
        skewY: animationConstants.curtainSkew,
        scaleX: animationConstants.curtainGatherScale,
        duration: animationConstants.curtainSplitDuration,
        ease: animationConstants.curtainEase,
      },
      "<"
    );

    // 5. WOW stage camera zoom-in & gentle brightness settling
    tl.fromTo(
      wowStageRef.current,
      {
        scale: animationConstants.wowRevealScaleFrom,
        filter: "brightness(1.25)",
      },
      {
        scale: animationConstants.wowRevealScaleTo,
        filter: "brightness(1.0)",
        duration: 1.5,
        ease: "power2.out",
      },
      "<"
    );

    // 6. Light bloom dissipates as curtains clear
    tl.to(
      bloomRef.current,
      {
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.5"
    );

    tl.to(
      anticipationRef.current,
      {
        opacity: 0,
        duration: 0.4,
      },
      "<"
    );
  };

  return (
    <section
      ref={containerRef}
      onClick={handleOpen}
      onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpen()}
      tabIndex={0}
      role="button"
      aria-label="Open wedding invitation"
      className="relative w-full h-[100dvh] overflow-hidden select-none cursor-pointer bg-[#0a0104] focus:outline-none"
    >
      {/* ========================================================================= */}
      {/* LAYER 1: UNDERNEATH — THE GRAND WOW STAGE REVEAL                         */}
      {/* ========================================================================= */}
      <div
        ref={wowStageRef}
        className="absolute inset-0 w-full h-full will-change-transform z-0"
      >
        <Image
          src="/invitation/reveal/wow_stage.webp"
          alt="Royal Wedding Stage"
          fill
          priority
          sizes="480px"
          className="object-cover object-center"
        />
        {/* Soft gold light vignette on stage */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* ========================================================================= */}
      {/* LAYER 2: INTERIOR LIGHT BLOOM / CENTER SLIT RAY                           */}
      {/* ========================================================================= */}
      <div
        ref={bloomRef}
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[180px] pointer-events-none opacity-0 z-20 will-change-transform"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(255, 235, 175, 0.95) 45%, #ffffff 50%, rgba(255, 235, 175, 0.95) 55%, transparent 100%)",
          filter: "blur(18px)",
        }}
      />

      {/* ========================================================================= */}
      {/* LAYER 3: PHYSICAL VELVET CURTAINS (LEFT & RIGHT PANELS)                   */}
      {/* ========================================================================= */}
      {/* Left Curtain Panel */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 bottom-0 left-0 w-1/2 overflow-hidden z-10 will-change-transform origin-left"
      >
        <div className="relative w-[200%] h-full">
          <Image
            src="/invitation/opening/closed_clean.webp"
            alt="Left curtain"
            fill
            priority
            sizes="480px"
            className="object-cover object-left"
          />
        </div>
        {/* Physical fold seam shadow on the right edge */}
        <div className="absolute top-0 bottom-0 right-0 w-6 bg-gradient-to-l from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Right Curtain Panel */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 bottom-0 right-0 w-1/2 overflow-hidden z-10 will-change-transform origin-right"
      >
        <div className="relative w-[200%] h-full -left-[100%]">
          <Image
            src="/invitation/opening/closed_clean.webp"
            alt="Right curtain"
            fill
            priority
            sizes="480px"
            className="object-cover object-left"
          />
        </div>
        {/* Physical fold seam shadow on the left edge */}
        <div className="absolute top-0 bottom-0 left-0 w-6 bg-gradient-to-r from-black/60 to-transparent pointer-events-none" />
      </div>

      {/* Anticipation darkening overlay */}
      <div
        ref={anticipationRef}
        className="absolute inset-0 bg-black pointer-events-none opacity-0 z-15"
      />

      {/* ========================================================================= */}
      {/* LAYER 4: AMBIENT ATMOSPHERE & GOLD DUST PARTICLES                         */}
      {/* ========================================================================= */}
      <AmbientGlow />
      <GoldDust count={32} />

      {/* ========================================================================= */}
      {/* LAYER 5: LIVE HTML/CSS "TAP TO OPEN" PROMPT + QUICK SKIP                  */}
      {/* ========================================================================= */}
      {/* Top-Right Quick Skip Button */}
      <div className="absolute top-6 right-6 z-50 pointer-events-auto">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onRevealComplete();
          }}
          className="px-3.5 py-1.5 rounded-full bg-black/40 hover:bg-black/70 text-[#dfba73] text-[11px] font-cinzel tracking-widest uppercase border border-[#dfba73]/40 hover:border-[#dfba73] backdrop-blur-xs transition-all cursor-pointer shadow-lg active:scale-95"
        >
          Skip Intro →
        </button>
      </div>

      <div
        ref={tapPromptRef}
        className="absolute inset-0 z-30 flex flex-col items-center justify-center pointer-events-auto cursor-pointer"
        onClick={handleOpen}
      >
        <div className="animate-breathing flex flex-col items-center justify-center px-8 py-5 rounded-full bg-[#180206]/50 border border-[#dfba73]/30 backdrop-blur-xs shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
          {/* Top Baroque Gold Crest */}
          <div className="mb-2 opacity-90">
            <svg
              width="68"
              height="20"
              viewBox="0 0 68 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]"
            >
              <path
                d="M34 2C32.5 5 28 8 20 8C14 8 8 5 4 2M34 2C35.5 5 40 8 48 8C54 8 60 5 64 2"
                stroke="#dfba73"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
              <path
                d="M34 0C32.8 3.5 29 6 25 7C29 8 32.8 10.5 34 14C35.2 10.5 39 8 43 7C39 6 35.2 3.5 34 0Z"
                fill="#dfba73"
              />
              <circle cx="20" cy="8" r="1.5" fill="#dfba73" />
              <circle cx="48" cy="8" r="1.5" fill="#dfba73" />
              <circle cx="12" cy="6" r="1" fill="#dfba73" opacity="0.7" />
              <circle cx="56" cy="6" r="1" fill="#dfba73" opacity="0.7" />
            </svg>
          </div>

          {/* Main "tap to open" text */}
          <h2 className="font-cormorant text-2xl sm:text-3xl font-normal tracking-[0.2em] text-[#faf3e3] lowercase drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
            tap to open
          </h2>

          {/* Bottom Flourish Separator Line */}
          <div className="mt-2.5 flex items-center gap-2 opacity-85">
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#dfba73]" />
            <svg
              width="24"
              height="10"
              viewBox="0 0 24 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 1L14 5L12 9L10 5L12 1Z"
                fill="#dfba73"
              />
              <circle cx="5" cy="5" r="1.2" fill="#dfba73" />
              <circle cx="19" cy="5" r="1.2" fill="#dfba73" />
            </svg>
            <span className="w-10 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#dfba73]" />
          </div>
        </div>
      </div>
    </section>
  );
}
