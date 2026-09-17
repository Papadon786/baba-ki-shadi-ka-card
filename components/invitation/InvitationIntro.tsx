"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import GoldDust from "../effects/GoldDust";
import { invitationData } from "@/lib/constants/invitationData";
import { Sparkles } from "lucide-react";

interface InvitationIntroProps {
  onScrollTriggered?: () => void;
}

export default function InvitationIntro({ onScrollTriggered }: InvitationIntroProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const elementsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        elementsRef.current.filter(Boolean),
        {
          opacity: 0,
          y: 16,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.0,
          stagger: 0.12,
          ease: "power2.out",
          delay: 0.15,
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
      className="relative w-full min-h-[100dvh] flex flex-col items-center justify-between py-8 px-4 sm:px-6 overflow-hidden theme-pearl-white border-b-2 border-[#dfba73]/40"
    >
      {/* Decorative Gold Leaf Floating Particles */}
      <GoldDust count={20} />

      {/* Hanging Lantern Left */}
      <div className="absolute top-0 left-3 sm:left-5 z-20 pointer-events-none hidden xs:flex flex-col items-center">
        <div className="w-[1px] h-14 bg-gradient-to-b from-[#b88d38] to-[#dfba73]" />
        <div className="relative w-6 h-12 text-[#dfba73] drop-shadow-[0_4px_12px_rgba(223,186,115,0.7)] animate-float">
          <svg viewBox="0 0 24 48" fill="none" className="w-full h-full">
            <path d="M12 0V6M7 6H17L19 12H5L7 6Z" stroke="#b88d38" strokeWidth="1.2" fill="#dfba73" fillOpacity="0.4" />
            <path d="M5 12L7 30L12 36L17 30L19 12H5Z" stroke="#b88d38" strokeWidth="1.2" fill="url(#lanternGlow1)" />
            <circle cx="12" cy="22" r="3" fill="#fff5d6" className="animate-pulse" />
            <path d="M10 36H14L12 42L10 36Z" fill="#b88d38" />
            <defs>
              <linearGradient id="lanternGlow1" x1="5" y1="12" x2="19" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fef3c7" stopOpacity="0.9" />
                <stop stopColor="#dfba73" stopOpacity="0.7" />
                <stop stopColor="#78350f" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Hanging Lantern Right */}
      <div className="absolute top-0 right-3 sm:right-5 z-20 pointer-events-none hidden xs:flex flex-col items-center">
        <div className="w-[1px] h-20 bg-gradient-to-b from-[#b88d38] to-[#dfba73]" />
        <div className="relative w-6 h-12 text-[#dfba73] drop-shadow-[0_4px_12px_rgba(223,186,115,0.7)] animate-float" style={{ animationDelay: "1.2s" }}>
          <svg viewBox="0 0 24 48" fill="none" className="w-full h-full">
            <path d="M12 0V6M7 6H17L19 12H5L7 6Z" stroke="#b88d38" strokeWidth="1.2" fill="#dfba73" fillOpacity="0.4" />
            <path d="M5 12L7 30L12 36L17 30L19 12H5Z" stroke="#b88d38" strokeWidth="1.2" fill="url(#lanternGlow2)" />
            <circle cx="12" cy="22" r="3" fill="#fff5d6" className="animate-pulse" />
            <path d="M10 36H14L12 42L10 36Z" fill="#b88d38" />
            <defs>
              <linearGradient id="lanternGlow2" x1="5" y1="12" x2="19" y2="36" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fef3c7" stopOpacity="0.9" />
                <stop stopColor="#dfba73" stopOpacity="0.7" />
                <stop stopColor="#78350f" stopOpacity="0.8" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Ornate Islamic Royal Arch Parchment Frame */}
      <div className="relative z-10 w-full max-w-[390px] rounded-[32px] p-5 sm:p-6 card-pearl-white border-2 border-[#dfba73]/60 shadow-[0_16px_50px_rgba(92,18,34,0.12),0_2px_12px_rgba(223,186,115,0.25)] flex flex-col items-center text-center my-auto">
        {/* Ornate Corner Arabesques */}
        <div className="absolute top-3 left-3 w-5 h-5 border-t-2 border-l-2 border-[#dfba73] pointer-events-none" />
        <div className="absolute top-3 right-3 w-5 h-5 border-t-2 border-r-2 border-[#dfba73] pointer-events-none" />
        <div className="absolute bottom-3 left-3 w-5 h-5 border-b-2 border-l-2 border-[#dfba73] pointer-events-none" />
        <div className="absolute bottom-3 right-3 w-5 h-5 border-b-2 border-r-2 border-[#dfba73] pointer-events-none" />

        {/* 1. Bismillah Calligraphy */}
        <div ref={addToRefs} className="mb-2 flex flex-col items-center">
          <div className="relative w-[160px] sm:w-[180px] h-[75px] sm:h-[82px] drop-shadow-[0_3px_10px_rgba(184,141,56,0.4)]">
            <Image
              src="/invitation/ornaments/bismillah_gold.png"
              alt="Bismillahir Rahmanir Raheem"
              fill
              priority
              sizes="180px"
              className="object-contain"
            />
          </div>
        </div>

        {/* 2. WITH THE BLESSINGS OF ALLAH ALMIGHTY */}
        <div ref={addToRefs} className="mb-2.5">
          <p className="font-cinzel text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-[#5c1222] font-bold">
            {invitationData.host.withBlessings}
          </p>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73] to-transparent mx-auto mt-1" />
        </div>

        {/* 3. Host Family Invitation Text */}
        <div ref={addToRefs} className="mb-3.5 max-w-[310px]">
          <h3 className="font-cormorant text-base sm:text-lg font-bold text-[#380812] leading-snug italic">
            {invitationData.host.family}
          </h3>
          <p className="font-cormorant text-xs sm:text-sm text-[#682433] leading-tight italic mt-1">
            {invitationData.host.requestText}
          </p>
        </div>

        {/* 4. DAWAT-E-WALIMA Grand Cartouche Banner */}
        <div ref={addToRefs} className="w-full mb-3">
          <div className="relative mx-auto py-2 px-5 rounded-2xl bg-gradient-to-r from-[#4a0d1b] via-[#6a1628] to-[#4a0d1b] border-2 border-[#dfba73] shadow-[0_6px_20px_rgba(74,13,27,0.35)] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73] shrink-0" />
            <span className="font-cinzel text-lg sm:text-xl md:text-2xl font-black tracking-[0.2em] text-gold-gradient uppercase drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
              {invitationData.host.occasion}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73] shrink-0" />
          </div>
        </div>

        {/* 5. Relation Label */}
        <div ref={addToRefs} className="mb-1">
          <p className="font-cormorant text-sm sm:text-base italic text-[#783545] font-medium">
            — {invitationData.host.relation} —
          </p>
        </div>

        {/* 6. Groom Name & Title */}
        <div ref={addToRefs} className="mb-2">
          <span className="block font-pinyon text-4xl sm:text-5xl text-[#5c1222] font-bold leading-[1.15] drop-shadow-[0_1px_2px_rgba(92,18,34,0.15)]">
            {invitationData.couple.groom}
          </span>
          <p className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.24em] text-[#783545] uppercase font-bold mt-0.5">
            {invitationData.couple.groomTitle}
          </p>
        </div>

        {/* 7. WITH Connector */}
        <div ref={addToRefs} className="my-1">
          <span className="inline-block px-3 py-0.5 rounded-full border border-[#dfba73] bg-[#fffcf7] text-[10px] font-cinzel font-bold tracking-[0.3em] text-[#5c1222] uppercase shadow-xs">
            WITH
          </span>
        </div>

        {/* 8. Bride Name & Title */}
        <div ref={addToRefs} className="mb-3.5">
          <span className="block font-pinyon text-4xl sm:text-5xl text-[#5c1222] font-bold leading-[1.15] drop-shadow-[0_1px_2px_rgba(92,18,34,0.15)]">
            {invitationData.couple.bride}
          </span>
          <p className="font-cinzel text-[9px] sm:text-[10px] tracking-[0.24em] text-[#783545] uppercase font-bold mt-0.5">
            {invitationData.couple.brideTitle}
          </p>
        </div>

        {/* 9. Date & Time Foil Box */}
        <div ref={addToRefs} className="w-full mb-3">
          <div className="py-2 px-3 rounded-xl border border-[#dfba73] bg-gradient-to-r from-[#fcf7ee] via-[#fffdf9] to-[#fcf7ee] shadow-xs">
            <p className="font-cinzel text-xs sm:text-sm font-bold text-[#380812] tracking-wider">
              {invitationData.host.primaryDate}
            </p>
            <p className="font-cinzel text-[11px] font-semibold text-[#6a1628] tracking-widest mt-0.5">
              Time: {invitationData.host.primaryTime}
            </p>
          </div>
        </div>

        {/* 10. Venue Highlight Box */}
        <div ref={addToRefs} className="w-full mb-3">
          <span className="font-cinzel text-[9px] tracking-[0.3em] text-[#8c6a28] uppercase font-bold block mb-0.5">
            VENUE
          </span>
          <h4 className="font-cinzel text-base sm:text-lg font-black text-[#380812] tracking-wide">
            {invitationData.host.primaryVenue}
          </h4>
          <p className="font-cinzel text-[11px] text-[#6a1628] tracking-wider font-semibold">
            {invitationData.host.primaryVenueCity}
          </p>
        </div>

        {/* 11. Mosque Silhouettes & Islamic Dome Art */}
        <div ref={addToRefs} className="w-full pt-2 flex flex-col items-center border-t border-[#dfba73]/30">
          <svg
            viewBox="0 0 300 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full max-w-[260px] h-12 opacity-85"
          >
            {/* Mosque Center Dome */}
            <path
              d="M150 6C142 18 135 24 135 38H165C165 24 158 18 150 6Z"
              fill="#dfba73"
              fillOpacity="0.4"
              stroke="#b88d38"
              strokeWidth="1.2"
            />
            <path d="M150 2V6M148 2H152" stroke="#8c6a28" strokeWidth="1.2" />
            {/* Side Domes */}
            <path
              d="M115 16C109 25 104 30 104 38H126C126 30 121 25 115 16Z"
              fill="#dfba73"
              fillOpacity="0.3"
              stroke="#b88d38"
              strokeWidth="1"
            />
            <path
              d="M185 16C179 25 174 30 174 38H196C196 30 191 25 185 16Z"
              fill="#dfba73"
              fillOpacity="0.3"
              stroke="#b88d38"
              strokeWidth="1"
            />
            {/* Minarets */}
            <rect x="80" y="12" width="6" height="26" fill="#dfba73" fillOpacity="0.35" stroke="#b88d38" strokeWidth="1" />
            <path d="M83 4L80 12H86L83 4Z" fill="#b88d38" />
            <rect x="214" y="12" width="6" height="26" fill="#dfba73" fillOpacity="0.35" stroke="#b88d38" strokeWidth="1" />
            <path d="M217 4L214 12H220L217 4Z" fill="#b88d38" />
            {/* Base platform */}
            <line x1="20" y1="38" x2="280" y2="38" stroke="#dfba73" strokeWidth="1.5" />
            <line x1="10" y1="41" x2="290" y2="41" stroke="#b88d38" strokeWidth="1" strokeOpacity="0.6" />
          </svg>
        </div>
      </div>

      {/* 12. SCROLL INDICATOR */}
      <div
        ref={addToRefs}
        className="relative z-20 flex flex-col items-center justify-center pt-3 pb-1 cursor-pointer group"
        onClick={() => {
          onScrollTriggered?.();
          window.scrollBy({ top: window.innerHeight * 0.85, behavior: "smooth" });
        }}
      >
        <span className="font-cinzel text-[9px] tracking-[0.35em] text-[#5c1222] font-bold uppercase mb-1 group-hover:text-[#8c1d34] transition-colors duration-300">
          SCROLL TO EXPLORE
        </span>
        <div className="flex flex-col items-center">
          <div className="w-[1.5px] h-8 bg-gradient-to-b from-[#5c1222] via-[#dfba73] to-transparent relative overflow-hidden">
            <div className="w-full h-1/2 bg-[#5c1222] absolute top-0 animate-[float_2s_ease-in-out_infinite]" />
          </div>
          <div className="w-1.5 h-1.5 rotate-45 border-b border-r border-[#5c1222] -mt-0.5" />
        </div>
      </div>
    </section>
  );
}
