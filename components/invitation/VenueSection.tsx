"use client";

import { useState } from "react";
import { invitationData } from "@/lib/constants/invitationData";
import { ExternalLink, MapPin, Navigation, Copy, Check } from "lucide-react";

export default function VenueSection() {
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const handleCopy = (address: string, idx: number) => {
    navigator.clipboard.writeText(address);
    setCopiedIdx(idx);
    setTimeout(() => {
      setCopiedIdx(null);
    }, 2500);
  };

  return (
    <section className="relative w-full py-16 px-5 flex flex-col items-center overflow-hidden theme-light-maroon border-t border-[#dfba73]/35">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#dfba73]/[0.10] rounded-full blur-[90px] pointer-events-none" />

      {/* Title */}
      <p className="font-cinzel text-[10px] tracking-[0.32em] text-[#dfba73]/90 uppercase font-semibold text-center mb-1.5">
        THE CELEBRATION GROUNDS
      </p>
      <h2 className="font-pinyon text-4xl sm:text-5xl text-gold-gradient font-bold text-center mb-8 drop-shadow-[0_2px_12px_rgba(223,186,115,0.35)]">
        Venues &amp; Directions
      </h2>

      {/* Venues Grid */}
      <div className="w-full max-w-[390px] flex flex-col gap-6">
        {invitationData.venues.map((venue, idx) => (
          <div
            key={idx}
            className="relative p-5 sm:p-6 rounded-[24px] card-light-maroon border border-[#dfba73]/50 flex flex-col gap-3.5 shadow-[0_16px_45px_rgba(0,0,0,0.65)] group"
          >
            {/* Subtle Corner Brackets */}
            <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t border-l border-[#dfba73]/50 pointer-events-none" />
            <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t border-r border-[#dfba73]/50 pointer-events-none" />

            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[9px] font-cinzel font-semibold tracking-widest text-[#dfba73] uppercase inline-block px-2.5 py-0.5 rounded-full bg-[#3d0612]/70 border border-[#dfba73]/30 mb-1.5">
                  {venue.event}
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#faf2e4]">
                  {venue.name}
                </h3>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#450715] to-[#25030b] flex items-center justify-center text-[#dfba73] shrink-0 border border-[#dfba73]/40 shadow-md">
                <MapPin className="w-4 h-4" />
              </div>
            </div>

            <p className="font-cormorant text-sm text-[#e5d5c5] italic leading-relaxed">
              {venue.description}
            </p>

            <div className="pt-3 flex items-center justify-between border-t border-[#dfba73]/20 flex-wrap gap-2.5">
              <div className="flex items-center gap-1.5 text-xs font-cinzel text-[#d4b58e] tracking-wide">
                <Navigation className="w-3.5 h-3.5 text-[#dfba73] shrink-0" />
                <span>{venue.location}</span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleCopy(`${venue.name}, ${venue.location}`, idx)}
                  className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full bg-[#200308] hover:bg-[#32050e] text-[#dfba73]/90 text-[10px] font-cinzel tracking-wider uppercase border border-[#dfba73]/30 hover:border-[#dfba73] transition-all cursor-pointer"
                >
                  {copiedIdx === idx ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-300">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>

                <a
                  href={venue.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#400613] to-[#5a091b] hover:from-[#5a091b] hover:to-[#700c22] text-[#dfba73] text-[11px] font-cinzel font-semibold tracking-wider uppercase border border-[#dfba73]/50 hover:border-[#dfba73] transition-all cursor-pointer shadow-md active:scale-98"
                >
                  <span>Google Maps</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
