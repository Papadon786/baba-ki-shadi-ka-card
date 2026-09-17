"use client";

import { invitationData } from "@/lib/constants/invitationData";
import { Sparkles } from "lucide-react";

export default function DressCodeSection() {
  const swatches = [
    { name: "Rose Petal", color: "#e8b4b8", border: "rgba(232, 180, 184, 0.6)" },
    { name: "Champagne", color: "#dfba73", border: "rgba(223, 186, 115, 0.8)" },
    { name: "Emerald", color: "#164e3f", border: "rgba(22, 78, 63, 0.7)" },
    { name: "Ruby Velvet", color: "#7a1122", border: "rgba(122, 17, 34, 0.7)" },
    { name: "Midnight", color: "#1b243b", border: "rgba(27, 36, 59, 0.7)" },
  ];

  return (
    <section className="relative w-full py-16 px-5 flex flex-col items-center text-center overflow-hidden theme-pearl-white border-t border-[#dfba73]/35">
      {/* Royal Card Plaque */}
      <div className="relative z-10 w-full max-w-[390px] p-6 sm:p-8 rounded-[26px] card-pearl-white flex flex-col items-center shadow-[0_16px_50px_rgba(92,18,34,0.12)] border-2 border-[#dfba73]/60">
        {/* Ornate corner brackets */}
        <div className="absolute top-2.5 left-2.5 w-3 h-3 border-t-2 border-l-2 border-[#dfba73] pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-3 h-3 border-t-2 border-r-2 border-[#dfba73] pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-3 h-3 border-b-2 border-l-2 border-[#dfba73] pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-3 h-3 border-b-2 border-r-2 border-[#dfba73] pointer-events-none" />

        <div className="inline-flex items-center gap-2 mb-2">
          <Sparkles className="w-3 h-3 text-[#5c1222]" />
          <span className="font-cinzel text-[10px] tracking-[0.3em] text-[#5c1222] uppercase font-bold">
            {invitationData.dressCode.title}
          </span>
          <Sparkles className="w-3 h-3 text-[#5c1222]" />
        </div>

        <h2 className="font-pinyon text-4xl sm:text-5xl text-[#380812] font-bold mb-2 drop-shadow-[0_1px_3px_rgba(92,18,34,0.15)]">
          {invitationData.dressCode.theme}
        </h2>

        <p className="font-cormorant text-base italic text-[#5c1222] max-w-[310px] mb-6 font-semibold leading-relaxed">
          {invitationData.dressCode.note}
        </p>

        {/* Luxury Jewel Swatches */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap mb-6">
          {swatches.map((swatch, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 group cursor-default">
              <div className="relative p-0.5 rounded-full border-2 border-[#dfba73] shadow-[0_4px_12px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-300">
                <div
                  className="w-8 h-8 rounded-full shadow-inner relative overflow-hidden"
                  style={{ backgroundColor: swatch.color }}
                >
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-transparent to-white/40 pointer-events-none" />
                </div>
              </div>
              <span className="font-cinzel text-[9px] tracking-wider text-[#5c1222] uppercase font-bold">
                {swatch.name}
              </span>
            </div>
          ))}
        </div>

        {/* Traditional Attire Inspiration Guide */}
        <div className="w-full pt-4 border-t border-[#dfba73]/40 flex flex-col gap-2 text-left">
          <div className="flex items-start gap-2.5">
            <span className="text-[#5c1222] font-cinzel text-xs font-bold shrink-0">✦</span>
            <p className="font-cormorant text-xs sm:text-sm text-[#380812] italic leading-relaxed">
              <strong className="font-cinzel text-[10px] uppercase tracking-wider not-italic text-[#5c1222] mr-1">Ladies:</strong>
              Festive Lehengas, Shararas, Ghararas &amp; Anarkalis in pastel or jewel tones.
            </p>
          </div>
          <div className="flex items-start gap-2.5">
            <span className="text-[#5c1222] font-cinzel text-xs font-bold shrink-0">✦</span>
            <p className="font-cormorant text-xs sm:text-sm text-[#380812] italic leading-relaxed">
              <strong className="font-cinzel text-[10px] uppercase tracking-wider not-italic text-[#5c1222] mr-1">Gentlemen:</strong>
              Sherwanis, Bandhgalas, Indo-Western suits &amp; classic Kurta Pajamas.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
