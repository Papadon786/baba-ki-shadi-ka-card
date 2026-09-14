"use client";

import { invitationData } from "@/lib/constants/invitationData";
import { Sparkles } from "lucide-react";

export default function DressCodeSection() {
  const swatches = [
    { name: "Pastel Rose", color: "#e8b4b8" },
    { name: "Champagne Gold", color: "#e2c792" },
    { name: "Royal Emerald", color: "#1b4d3e" },
    { name: "Deep Ruby", color: "#721121" },
    { name: "Midnight Navy", color: "#1c2541" },
  ];

  return (
    <section className="relative w-full py-16 px-6 flex flex-col items-center text-center overflow-hidden bg-gradient-to-b from-[#150206] via-[#1a0208] to-[#120104]">
      {/* Royal Card Plaque */}
      <div className="relative z-10 w-full max-w-[380px] p-6 sm:p-8 rounded-3xl royal-card flex flex-col items-center shadow-[0_12px_35px_rgba(0,0,0,0.7)]">
        <div className="inline-flex items-center gap-2 mb-2">
          <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
          <span className="font-cinzel text-[11px] tracking-[0.3em] text-[#dfba73]/90 uppercase font-semibold">
            {invitationData.dressCode.title}
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
        </div>

        <h2 className="font-pinyon text-4xl sm:text-5xl text-gold-gradient font-normal mb-3 drop-shadow-[0_2px_10px_rgba(223,186,115,0.3)]">
          {invitationData.dressCode.theme}
        </h2>

        <p className="font-cormorant text-base italic text-[#e6d3c0] max-w-[300px] mb-7 font-normal leading-relaxed">
          {invitationData.dressCode.note}
        </p>

        {/* Luxury Jewel Swatches */}
        <div className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap">
          {swatches.map((swatch, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1.5 group">
              <div
                className="w-8 h-8 rounded-full shadow-[0_4px_12px_rgba(0,0,0,0.6)] border-2 border-[#dfba73]/60 transition-all duration-300 group-hover:scale-115 group-hover:border-[#dfba73] group-hover:shadow-[0_0_12px_rgba(223,186,115,0.5)]"
                style={{ backgroundColor: swatch.color }}
              />
              <span className="font-cinzel text-[9px] tracking-wider text-[#d4bca9] uppercase">
                {swatch.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
