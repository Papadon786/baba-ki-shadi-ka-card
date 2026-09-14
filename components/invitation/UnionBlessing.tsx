"use client";

import { invitationData } from "@/lib/constants/invitationData";

export default function UnionBlessing() {
  return (
    <section className="relative w-full py-14 sm:py-16 px-4 sm:px-6 flex flex-col items-center text-center overflow-hidden bg-white border-y-2 border-[#dfba73]/50">
      {/* Subtle warm ambient gold radial accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#dfba73]/10 rounded-full blur-[90px] pointer-events-none" />

      {/* Decorative Royal Parchment Plaque */}
      <div className="relative z-10 w-full max-w-[380px] p-6 sm:p-8 rounded-3xl bg-[#fdfcf9] border-2 border-[#dfba73]/60 shadow-[0_10px_35px_rgba(180,140,60,0.14)] flex flex-col items-center">
        {/* Top Gold Crest Flourish */}
        <div className="mb-3.5 opacity-95">
          <svg
            width="80"
            height="24"
            viewBox="0 0 80 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="drop-shadow-[0_1px_3px_rgba(180,140,60,0.3)]"
          >
            <path
              d="M40 2C38 6 32 10 22 10C15 10 8 6 2 2M40 2C42 6 48 10 58 10C65 10 72 6 78 2"
              stroke="#b88d38"
              strokeWidth="1.3"
              strokeLinecap="round"
            />
            <path
              d="M40 0L42.5 5.5L48 8L42.5 10.5L40 16L37.5 10.5L32 8L37.5 5.5L40 0Z"
              fill="#b88d38"
            />
            <circle cx="22" cy="10" r="2" fill="#b88d38" />
            <circle cx="58" cy="10" r="2" fill="#b88d38" />
            <circle cx="12" cy="7" r="1.2" fill="#b88d38" opacity="0.7" />
            <circle cx="68" cy="7" r="1.2" fill="#b88d38" opacity="0.7" />
          </svg>
        </div>

        {/* Subtitle */}
        <p className="font-cinzel text-[11px] tracking-[0.28em] text-[#801024] uppercase font-bold mb-2">
          SACRED UNION &amp; BLESSINGS
        </p>

        {/* Headline: "A love written in the stars" */}
        <h2 className="font-pinyon text-4xl sm:text-5xl text-[#6b0d1e] font-normal mb-5 drop-shadow-[0_1px_2px_rgba(107,13,30,0.15)]">
          {invitationData.couple.openingQuote}
        </h2>

        {/* Subtle Gold Rule */}
        <div className="w-24 h-[1.5px] bg-gradient-to-r from-transparent via-[#b88d38] to-transparent mb-5" />

        {/* Blessing Text */}
        <p className="font-cormorant text-lg sm:text-xl leading-relaxed text-[#2f1418] font-medium italic mb-6 max-w-[310px]">
          &ldquo;{invitationData.couple.blessingText}&rdquo;
        </p>

        {/* Couple Signatures: Arshiya & Farhan */}
        <div className="flex items-center justify-center gap-3 mt-1 py-2 px-6 rounded-full bg-[#f8f3ea] border border-[#dfba73]/70 shadow-xs">
          <span className="font-pinyon text-3xl sm:text-4xl text-[#7a1224] font-normal">
            {invitationData.couple.bride}
          </span>
          <span className="font-cormorant text-xl text-[#a07428] font-normal italic">&amp;</span>
          <span className="font-pinyon text-3xl sm:text-4xl text-[#7a1224] font-normal">
            {invitationData.couple.groom}
          </span>
        </div>

        {/* Bottom Flourish */}
        <div className="mt-5 opacity-80">
          <svg width="40" height="10" viewBox="0 0 40 10" fill="none">
            <path d="M20 1L22 5L20 9L18 5L20 1Z" fill="#b88d38" />
            <circle cx="10" cy="5" r="1.5" fill="#b88d38" />
            <circle cx="30" cy="5" r="1.5" fill="#b88d38" />
            <path d="M0 5H8M32 5H40" stroke="#b88d38" strokeWidth="1" />
          </svg>
        </div>
      </div>
    </section>
  );
}
