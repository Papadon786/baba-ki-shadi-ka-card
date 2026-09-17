"use client";

import { invitationData } from "@/lib/constants/invitationData";
import { Calendar, Share2 } from "lucide-react";

export default function FinalSection() {
  const handleShareWhatsApp = () => {
    const text = `✨ Dawat-e-Walima & Royal Wedding Invitation ✨\n\n${invitationData.host.family} request the pleasure of your gracious presence and blessings on the joyous occasion of the *DAWAT-E-WALIMA* of their grandson\n\n*${invitationData.couple.groom}*\n(Son of Late Mohammad Nayeem Khan)\nwith\n*${invitationData.couple.bride}*\n(Daughter of Mr. Mohd Anees)\n\n📅 ${invitationData.host.primaryDate} at ${invitationData.host.primaryTime}\n📍 ${invitationData.host.primaryVenue}, ${invitationData.host.primaryVenueCity}\n\nView the interactive luxury wedding card: ${window.location.href}`;
    window.open(`https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`, "_blank");
  };

  const handleAddToCalendar = () => {
    const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
      "Dawat-e-Walima: Mohammad Farhan Khan & Arshiya Anees"
    )}&dates=20261212T143000Z/20261212T183000Z&details=${encodeURIComponent(
      "Dawat-e-Walima of Mohammad Farhan Khan & Arshiya Anees. Hosted by The Family of Late Haji Mohammad Shahzade Khan."
    )}&location=${encodeURIComponent("Shivam Palace, Keshavpuram, Kanpur")}`;
    window.open(calendarUrl, "_blank");
  };

  return (
    <section className="relative w-full py-16 sm:py-20 px-5 flex flex-col items-center text-center overflow-hidden theme-pearl-white border-t border-[#dfba73]/35 text-[#2b0b12]">
      {/* Ambient warm candlelight glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#dfba73]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Top Gold Crest Flourish */}
      <div className="mb-3 opacity-95">
        <svg
          width="74"
          height="22"
          viewBox="0 0 70 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-[0_2px_8px_rgba(223,186,115,0.4)]"
        >
          <path
            d="M35 2C33.5 5 28 8 20 8C14 8 8 5 4 2M35 2C36.5 5 42 8 50 8C56 8 62 5 66 2"
            stroke="#5c1222"
            strokeWidth="1.3"
            strokeLinecap="round"
          />
          <circle cx="35" cy="10" r="2" fill="#5c1222" />
        </svg>
      </div>

      {/* Subheading */}
      <p className="font-cinzel text-[10px] tracking-[0.32em] text-[#5c1222] uppercase font-bold mb-1.5">
        {invitationData.closing.title}
      </p>

      {/* Main Heading */}
      <h2 className="font-pinyon text-4xl sm:text-5xl md:text-6xl text-[#380812] font-bold mb-3 drop-shadow-[0_1px_3px_rgba(92,18,34,0.15)]">
        {invitationData.closing.heading}
      </h2>

      <p className="font-cormorant text-base sm:text-lg italic text-[#5c1222] max-w-[340px] mb-8 font-semibold leading-relaxed">
        &ldquo;{invitationData.closing.message}&rdquo;
      </p>

      {/* Quick Action Share & Calendar Buttons */}
      <div className="w-full max-w-[360px] grid grid-cols-2 gap-3 mb-12">
        <button
          onClick={handleShareWhatsApp}
          className="py-3 px-3 rounded-2xl bg-gradient-to-r from-[#4a0d1b] to-[#6a1628] text-[#dfba73] hover:from-[#5c1222] hover:to-[#7c1d33] text-xs font-cinzel font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98 border border-[#dfba73]/60"
        >
          <Share2 className="w-4 h-4 text-[#dfba73]" />
          <span>Share Invite</span>
        </button>
        <button
          onClick={handleAddToCalendar}
          className="py-3 px-3 rounded-2xl bg-gradient-to-r from-[#4a0d1b] to-[#6a1628] text-[#dfba73] hover:from-[#5c1222] hover:to-[#7c1d33] text-xs font-cinzel font-semibold tracking-wider uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md active:scale-98 border border-[#dfba73]/60"
        >
          <Calendar className="w-4 h-4 text-[#dfba73]" />
          <span>Add to Cal</span>
        </button>
      </div>

      {/* Couple Signature Closing Plaque */}
      <div className="flex flex-col items-center">
        <p className="font-cinzel text-[10px] tracking-[0.28em] text-[#5c1222] uppercase font-bold mb-1">
          {invitationData.closing.subheading}
        </p>
        <div className="flex items-center justify-center gap-2.5 my-2 flex-wrap text-center px-4">
          <span className="font-pinyon text-3xl sm:text-4xl md:text-5xl text-[#380812] font-bold drop-shadow-[0_1px_2px_rgba(92,18,34,0.15)]">
            {invitationData.couple.groom}
          </span>
          <span className="font-cormorant text-xl text-[#8c6a28] italic font-bold">&amp;</span>
          <span className="font-pinyon text-3xl sm:text-4xl md:text-5xl text-[#380812] font-bold drop-shadow-[0_1px_2px_rgba(92,18,34,0.15)]">
            {invitationData.couple.bride}
          </span>
        </div>
        <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73] to-transparent my-3" />
        <span className="font-cinzel text-[9px] tracking-[0.32em] text-[#783545] font-bold uppercase">
          SATURDAY, 12TH DECEMBER 2026 • KANPUR, INDIA
        </span>
      </div>
    </section>
  );
}
