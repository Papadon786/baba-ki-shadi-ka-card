"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import GoldDust from "../effects/GoldDust";
import { invitationData } from "@/lib/constants/invitationData";
import { ChevronDown } from "lucide-react";

interface InvitationIntroProps {
  onScrollTriggered?: () => void;
}

export default function InvitationIntro({ onScrollTriggered }: InvitationIntroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal for typography
      gsap.fromTo(
        elementsRef.current.filter(Boolean),
        {
          opacity: 0,
          y: 18,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          stagger: 0.18,
          ease: "power2.out",
          delay: 0.25,
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-between py-12 px-6 overflow-hidden bg-[#160206]"
    >
      {/* Background Frame (Ornate Baroque Chandelier Arch) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/invitation/background/intro_bg.webp"
          alt="Ornate Baroque Wedding Frame"
          fill
          priority
          sizes="480px"
          className="object-cover object-center"
        />
        {/* Subtle center vignette to enhance HTML text contrast */}
        <div className="absolute inset-0 bg-radial from-transparent via-black/25 to-black/60 pointer-events-none" />
      </div>

      <GoldDust count={28} />

      {/* Top spacing placeholder so chandelier at the top is respected */}
      <div className="h-16 sm:h-20 w-full" />

      {/* Central Content Column */}
      <div className="relative z-20 w-full max-w-[340px] sm:max-w-[380px] flex flex-col items-center text-center my-auto py-2 sm:py-4">
        {/* 1. Bismillah Calligraphy */}
        <div ref={addToRefs} className="mb-2 sm:mb-2.5">
          <h1 className="font-amiri text-2xl sm:text-3xl md:text-4xl text-gold-gradient font-bold drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] tracking-wide">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h1>
        </div>

        {/* 2. Small Gold Diamond Flourish */}
        <div ref={addToRefs} className="mb-3.5 sm:mb-5 flex items-center justify-center gap-2 opacity-80">
          <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#dfba73]" />
          <svg width="16" height="16" viewBox="0 0 18 18" fill="none">
            <path
              d="M9 1L11.5 6.5L17 9L11.5 11.5L9 17L6.5 11.5L1 9L6.5 6.5L9 1Z"
              fill="#dfba73"
            />
          </svg>
          <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#dfba73]" />
        </div>

        {/* 3. "WE REQUEST YOUR PRESENCE" */}
        <div ref={addToRefs} className="mb-3 sm:mb-4">
          <p className="font-cinzel text-[10px] sm:text-[12px] uppercase tracking-[0.25em] sm:tracking-[0.3em] text-[#faf1e0] font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.85)]">
            WE REQUEST YOUR PRESENCE
          </p>
        </div>

        {/* 4. Bride Name: Arshiya */}
        <div ref={addToRefs} className="mb-0.5">
          <span className="block font-pinyon text-5xl sm:text-6xl md:text-7xl font-normal text-gold-gradient drop-shadow-[0_4px_14px_rgba(223,186,115,0.4)] px-2 leading-[1.15]">
            {invitationData.couple.bride}
          </span>
        </div>

        {/* 5. DAUGHTER OF */}
        <div ref={addToRefs} className="mb-1.5 sm:mb-2">
          <p className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.22em] text-[#e0cfb0]/85 uppercase font-medium">
            {invitationData.couple.brideTitle}
          </p>
        </div>

        {/* 6. Ampersand (&) */}
        <div ref={addToRefs} className="my-0.5">
          <span className="font-pinyon text-3xl sm:text-4xl text-gold-subtle drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] opacity-90">
            &
          </span>
        </div>

        {/* 7. Groom Name: Farhan */}
        <div ref={addToRefs} className="mb-0.5">
          <span className="block font-pinyon text-5xl sm:text-6xl md:text-7xl font-normal text-gold-gradient drop-shadow-[0_4px_14px_rgba(223,186,115,0.4)] px-2 leading-[1.15]">
            {invitationData.couple.groom}
          </span>
        </div>

        {/* 8. SON OF */}
        <div ref={addToRefs} className="mb-3.5 sm:mb-5">
          <p className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.22em] text-[#e0cfb0]/85 uppercase font-medium">
            {invitationData.couple.groomTitle}
          </p>
        </div>

        {/* 9. AS THEY BEGIN THEIR FOREVER */}
        <div ref={addToRefs} className="mt-0.5">
          <p className="font-cinzel text-[10px] sm:text-[12px] tracking-[0.2em] sm:tracking-[0.22em] text-[#f7ecd5] uppercase font-semibold drop-shadow-[0_2px_6px_rgba(0,0,0,0.9)]">
            {invitationData.couple.tagline}
          </p>
        </div>
      </div>

      {/* 10. SCROLL INDICATOR */}
      <div
        ref={addToRefs}
        className="relative z-20 flex flex-col items-center justify-center pb-2 cursor-pointer group"
        onClick={() => {
          onScrollTriggered?.();
          window.scrollBy({ top: window.innerHeight * 0.8, behavior: "smooth" });
        }}
      >
        <span className="font-cinzel text-[10px] tracking-[0.35em] text-[#dfba73]/80 uppercase mb-2 group-hover:text-[#dfba73] transition-colors duration-300">
          SCROLL
        </span>
        <div className="w-[1px] h-9 bg-gradient-to-b from-[#dfba73] via-[#dfba73]/50 to-transparent relative overflow-hidden">
          <div className="w-full h-1/2 bg-white/80 absolute top-0 animate-[float_2s_ease-in-out_infinite]" />
        </div>
      </div>
    </section>
  );
}
