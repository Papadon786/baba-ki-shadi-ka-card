"use client";

import { invitationData } from "@/lib/constants/invitationData";
import { Sparkles } from "lucide-react";

export default function UnionBlessing() {
  return (
    <section className="relative w-full py-16 sm:py-20 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden theme-light-maroon border-t border-[#dfba73]/35">
      {/* Warm ambient gold candlelight radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[#dfba73]/[0.10] rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] bg-[#a8243c]/20 rounded-full blur-[90px] pointer-events-none animate-flicker" />

      {/* Decorative Royal Gilded Mount Card in Light Maroon */}
      <div className="relative z-10 w-full max-w-[390px] p-6 sm:p-8 rounded-[28px] card-light-maroon border-2 border-[#dfba73]/50 shadow-[0_16px_50px_rgba(0,0,0,0.65),inset_0_1px_20px_rgba(223,186,115,0.15)] flex flex-col items-center">
        {/* Ornate Gold Filigree Corners */}
        <div className="absolute top-2.5 left-2.5 w-4 h-4 border-t-2 border-l-2 border-[#dfba73]/70 rounded-tl-sm pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-4 h-4 border-t-2 border-r-2 border-[#dfba73]/70 rounded-tr-sm pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-4 h-4 border-b-2 border-l-2 border-[#dfba73]/70 rounded-bl-sm pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-4 h-4 border-b-2 border-r-2 border-[#dfba73]/70 rounded-br-sm pointer-events-none" />

        {/* Top Royal Crest Flourish */}
        <div className="mb-3 opacity-95">
          <svg
            width="86"
            height="26"
            viewBox="0 0 80 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_2px_8px_rgba(223,186,115,0.4)]"
          >
            <path
              d="M40 2C38 6 32 10 22 10C15 10 8 6 2 2M40 2C42 6 48 10 58 10C65 10 72 6 78 2"
              stroke="#dfba73"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M40 0L42.5 5.5L48 8L42.5 10.5L40 16L37.5 10.5L32 8L37.5 5.5L40 0Z"
              fill="#dfba73"
            />
            <circle cx="22" cy="10" r="1.8" fill="#dfba73" />
            <circle cx="58" cy="10" r="1.8" fill="#dfba73" />
            <circle cx="12" cy="7" r="1.2" fill="#dfba73" opacity="0.8" />
            <circle cx="68" cy="7" r="1.2" fill="#dfba73" opacity="0.8" />
          </svg>
        </div>

        {/* Subtitle Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#3d0612]/80 border border-[#dfba73]/50 mb-3.5">
          <Sparkles className="w-2.5 h-2.5 text-[#dfba73]" />
          <p className="font-cinzel text-[9px] tracking-[0.3em] text-[#dfba73] uppercase font-bold">
            SACRED UNION &amp; BLESSINGS
          </p>
          <Sparkles className="w-2.5 h-2.5 text-[#dfba73]" />
        </div>

        {/* Quranic Ayah Section (Surah An-Naba 78:8) */}
        <div className="mb-3.5 flex flex-col items-center">
          <p
            dir="rtl"
            lang="ar"
            className="font-amiri text-3xl sm:text-[34px] leading-relaxed text-gold-gradient font-bold drop-shadow-[0_2px_10px_rgba(223,186,115,0.4)] tracking-wide mb-1 select-none"
          >
            {invitationData.couple.quranVerse.arabic}
          </p>
          <p className="font-cormorant text-base sm:text-lg text-[#faf2e4] font-semibold italic tracking-wide">
            &ldquo;{invitationData.couple.quranVerse.translation}&rdquo;
          </p>
          <p className="font-cinzel text-[10px] tracking-[0.25em] text-[#dfba73]/85 uppercase font-medium mt-0.5">
            ({invitationData.couple.quranVerse.surah})
          </p>
        </div>

        {/* Subtle Gold Divider */}
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73]/60 to-transparent mb-3.5" />

        {/* Headline: "Join us for the union of two souls." */}
        <h2 className="font-pinyon text-3xl sm:text-4xl text-gold-gradient font-bold mb-4 drop-shadow-[0_2px_12px_rgba(223,186,115,0.35)] leading-tight max-w-[320px]">
          {invitationData.couple.openingQuote}
        </h2>

        {/* Subtle Gold Rule */}
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73] to-transparent mb-5" />

        {/* Blessing Text */}
        <p className="font-cormorant text-lg sm:text-xl leading-relaxed text-[#faf2e4] font-medium italic mb-6 max-w-[320px]">
          &ldquo;{invitationData.couple.blessingText}&rdquo;
        </p>

        {/* Couple Signatures Plaque */}
        <div className="flex items-center justify-center gap-2.5 py-2 px-6 rounded-full bg-gradient-to-r from-[#3d0914] via-[#5c1222] to-[#3d0914] border border-[#dfba73]/60 shadow-[0_4px_16px_rgba(0,0,0,0.5)]">
          <span className="font-pinyon text-2xl sm:text-3xl text-gold-gradient font-bold">
            {invitationData.couple.groomShort}
          </span>
          <span className="font-cormorant text-lg text-[#dfba73]/80 font-normal italic">&amp;</span>
          <span className="font-pinyon text-2xl sm:text-3xl text-gold-gradient font-bold">
            {invitationData.couple.brideShort}
          </span>
        </div>

        {/* Bottom Flourish */}
        <div className="mt-6 opacity-75">
          <svg width="48" height="12" viewBox="0 0 40 10" fill="none">
            <path d="M20 1L22 5L20 9L18 5L20 1Z" fill="#dfba73" />
            <circle cx="10" cy="5" r="1.4" fill="#dfba73" />
            <circle cx="30" cy="5" r="1.4" fill="#dfba73" />
            <path d="M0 5H8M32 5H40" stroke="#dfba73" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
