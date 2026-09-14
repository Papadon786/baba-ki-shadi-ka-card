"use client";

import { invitationData } from "@/lib/constants/invitationData";
import { Calendar, Share2 } from "lucide-react";

export default function FinalSection() {
  const handleShareWhatsApp = () => {
    const text = `✨ Royal Wedding Invitation ✨\n\nTogether with their families, *Arshiya & Farhan* request the honour of your presence at their wedding celebration!\n\n📅 8, 10 & 12 December 2026\n📍 Kanpur, Uttar Pradesh\n\nView the interactive luxury wedding invitation: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleAddToCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Arshiya & Farhan Wedding Celebration"
    )}&dates=20261208T083000Z/20261212T183000Z&details=${encodeURIComponent(
      "Wedding Celebration of Arshiya & Farhan. Reception at Shivam Palace, Keshavpuram, Kanpur."
    )}&location=${encodeURIComponent("Shivam Palace, Keshavpuram, Kanpur")}`;
    window.open(calendarUrl, "_blank");
  };

  return (
    <section className="relative w-full py-16 px-6 flex flex-col items-center text-center overflow-hidden bg-gradient-to-b from-[#120104] via-[#180206] to-[#0a0103] text-[#f7eee4]">
      {/* Top Gold Crest Flourish */}
      <div className="mb-4 opacity-90">
        <svg
          width="70"
          height="20"
          viewBox="0 0 70 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M35 2C33.5 5 28 8 20 8C14 8 8 5 4 2M35 2C36.5 5 42 8 50 8C56 8 62 5 66 2"
            stroke="#dfba73"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
          <circle cx="35" cy="10" r="2" fill="#dfba73" />
        </svg>
      </div>

      {/* Subheading */}
      <p className="font-cinzel text-[11px] tracking-[0.3em] text-[#dfba73]/80 uppercase font-semibold mb-2">
        {invitationData.closing.title}
      </p>

      {/* Main Heading */}
      <h2 className="font-pinyon text-5xl sm:text-6xl text-gold-gradient font-normal mb-3 drop-shadow-[0_2px_12px_rgba(223,186,115,0.35)]">
        {invitationData.closing.heading}
      </h2>

      <p className="font-cormorant text-base sm:text-lg italic text-[#e0cfbe] max-w-[340px] mb-8 font-normal leading-relaxed">
        &ldquo;{invitationData.closing.message}&rdquo;
      </p>

      {/* Quick Action Share & Calendar Buttons */}
      <div className="w-full max-w-[340px] grid grid-cols-2 gap-3 mb-12">
        <button
          onClick={handleShareWhatsApp}
          className="py-3 px-3 rounded-2xl royal-card text-[#dfba73] hover:border-[#dfba73] hover:bg-[#2c050f] text-xs font-cinzel font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98"
        >
          <Share2 className="w-3.5 h-3.5" />
          <span>Share Invite</span>
        </button>
        <button
          onClick={handleAddToCalendar}
          className="py-3 px-3 rounded-2xl royal-card text-[#dfba73] hover:border-[#dfba73] hover:bg-[#2c050f] text-xs font-cinzel font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98"
        >
          <Calendar className="w-3.5 h-3.5" />
          <span>Add to Cal</span>
        </button>
      </div>

      {/* Couple Signature Closing */}
      <div className="flex flex-col items-center">
        <p className="font-cinzel text-[11px] tracking-[0.25em] text-[#dfba73]/80 uppercase mb-2">
          {invitationData.closing.subheading}
        </p>
        <div className="flex items-center justify-center gap-3 my-2">
          <span className="font-pinyon text-4xl sm:text-5xl text-gold-gradient drop-shadow-[0_2px_10px_rgba(223,186,115,0.3)]">
            {invitationData.couple.bride}
          </span>
          <span className="font-cormorant text-2xl text-[#dfba73]/80 italic">&amp;</span>
          <span className="font-pinyon text-4xl sm:text-5xl text-gold-gradient drop-shadow-[0_2px_10px_rgba(223,186,115,0.3)]">
            {invitationData.couple.groom}
          </span>
        </div>
        <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73]/50 to-transparent my-3" />
        <span className="font-cinzel text-[10px] tracking-[0.3em] text-[#dfba73]/60 uppercase">
          DECEMBER 2026 • KANPUR, INDIA
        </span>
      </div>
    </section>
  );
}
