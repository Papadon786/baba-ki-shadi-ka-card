"use client";

import { invitationData } from "@/lib/constants/invitationData";
import { ExternalLink, MapPin, Navigation } from "lucide-react";

export default function VenueSection() {
  return (
    <section className="relative w-full py-16 px-5 flex flex-col items-center overflow-hidden bg-gradient-to-b from-[#140105] via-[#1a0208] to-[#150206]">
      {/* Decorative ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#dfba73]/5 rounded-full blur-[90px] pointer-events-none" />

      {/* Title */}
      <p className="font-cinzel text-[11px] tracking-[0.3em] text-[#dfba73]/80 uppercase font-semibold text-center mb-2">
        THE CELEBRATION GROUNDS
      </p>
      <h2 className="font-pinyon text-5xl text-gold-gradient font-normal text-center mb-8 drop-shadow-[0_2px_12px_rgba(223,186,115,0.3)]">
        Venues &amp; Directions
      </h2>

      {/* Venues Grid */}
      <div className="w-full max-w-[390px] flex flex-col gap-6">
        {invitationData.venues.map((venue, idx) => (
          <div
            key={idx}
            className="relative p-5 sm:p-6 rounded-3xl royal-card flex flex-col gap-3 shadow-[0_12px_35px_rgba(0,0,0,0.7)]"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <span className="text-[10px] font-cinzel font-semibold tracking-widest text-[#dfba73] uppercase block mb-1">
                  {venue.event}
                </span>
                <h3 className="font-cinzel text-lg sm:text-xl font-bold text-[#faf2e4]">
                  {venue.name}
                </h3>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#3c0512] flex items-center justify-center text-[#dfba73] shrink-0 border border-[#dfba73]/40 shadow-md">
                <MapPin className="w-4 h-4" />
              </div>
            </div>

            <p className="font-cormorant text-sm text-[#e0cfbe] italic leading-relaxed">
              {venue.description}
            </p>

            <div className="pt-3 flex items-center justify-between border-t border-[#dfba73]/20 flex-wrap gap-2">
              <div className="flex items-center gap-1.5 text-xs font-cinzel text-[#d4b58e] tracking-wide">
                <Navigation className="w-3.5 h-3.5 text-[#dfba73]" />
                <span>{venue.location}</span>
              </div>
              <a
                href={venue.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#3d0612] to-[#55081a] hover:from-[#55081a] hover:to-[#6d0a21] text-[#dfba73] text-[11px] font-cinzel font-semibold tracking-wider uppercase border border-[#dfba73]/40 hover:border-[#dfba73] transition-all cursor-pointer shadow-md active:scale-98"
              >
                <span>Google Maps</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
