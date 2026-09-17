"use client";

import { useState } from "react";
import { invitationData } from "@/lib/constants/invitationData";
import { Calendar, Share2, PhoneCall, Phone, Copy, Check } from "lucide-react";

export default function FinalSection() {
  const [copiedContactIdx, setCopiedContactIdx] = useState<number | null>(null);

  const handleCopyContact = (number: string, idx: number) => {
    navigator.clipboard.writeText(number);
    setCopiedContactIdx(idx);
    setTimeout(() => {
      setCopiedContactIdx(null);
    }, 2500);
  };
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
      <div className="w-full max-w-[360px] grid grid-cols-2 gap-3 mb-10">
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

      {/* Contact Numbers Royal Card */}
      <div className="w-full max-w-[360px] p-5 rounded-[24px] bg-gradient-to-br from-[#ffffff] via-[#fbf6ee] to-[#f4ebe0] border-2 border-[#dfba73]/70 shadow-[0_12px_35px_rgba(92,18,34,0.12)] flex flex-col items-center mb-10 relative">
        {/* Ornate Corner Accents */}
        <div className="absolute top-2.5 left-2.5 w-3.5 h-3.5 border-t-2 border-l-2 border-[#dfba73]/70 pointer-events-none" />
        <div className="absolute top-2.5 right-2.5 w-3.5 h-3.5 border-t-2 border-r-2 border-[#dfba73]/70 pointer-events-none" />
        <div className="absolute bottom-2.5 left-2.5 w-3.5 h-3.5 border-b-2 border-l-2 border-[#dfba73]/70 pointer-events-none" />
        <div className="absolute bottom-2.5 right-2.5 w-3.5 h-3.5 border-b-2 border-r-2 border-[#dfba73]/70 pointer-events-none" />

        {/* Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-[#5c1222] text-[#dfba73] border border-[#dfba73]/60 mb-2">
          <PhoneCall className="w-3 h-3 text-[#dfba73]" />
          <span className="font-cinzel text-[10px] tracking-[0.25em] font-bold uppercase">
            CONTACT NUMBERS
          </span>
        </div>

        <p className="font-cormorant text-xs sm:text-sm text-[#682433] italic font-medium mb-3.5 text-center leading-snug">
          For directions, queries or warm wishes, please feel free to call:
        </p>

        {/* Contact Numbers List */}
        <div className="w-full flex flex-col gap-2.5">
          {invitationData.contacts.map((contact, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-2 px-3 rounded-xl bg-[#ffffff]/90 border border-[#dfba73]/50 shadow-xs hover:border-[#dfba73] transition-all group"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-full bg-[#5c1222]/10 flex items-center justify-center text-[#5c1222] group-hover:bg-[#5c1222] group-hover:text-[#dfba73] transition-colors shrink-0">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="font-cinzel text-xs sm:text-sm font-bold text-[#380812] tracking-wider">
                  {contact.display}
                </span>
              </div>

              <div className="flex items-center gap-1.5 shrink-0">
                <button
                  onClick={() => handleCopyContact(contact.display, idx)}
                  className="p-1.5 rounded-lg text-[#783545] hover:text-[#380812] hover:bg-[#faf2e4] transition-colors cursor-pointer"
                  title="Copy number"
                >
                  {copiedContactIdx === idx ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
                <a
                  href={`tel:${contact.number}`}
                  className="inline-flex items-center gap-1 py-1 px-2.5 rounded-lg bg-gradient-to-r from-[#4a0d1b] to-[#6a1628] hover:from-[#5c1222] hover:to-[#7c1d33] text-[#dfba73] text-[10px] font-cinzel font-bold tracking-wider uppercase shadow-xs transition-all cursor-pointer active:scale-95"
                >
                  <PhoneCall className="w-2.5 h-2.5" />
                  <span>Call</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Couple Signature Closing Plaque */}
      <div className="flex flex-col items-center">
        <p className="font-cinzel text-[10px] tracking-[0.28em] text-[#5c1222] uppercase font-bold mb-2">
          {invitationData.closing.subheading}
        </p>
        <div className="flex flex-col items-center justify-center my-1 text-center px-4 w-full">
          <span className="font-pinyon text-3xl sm:text-4xl md:text-[42px] text-[#380812] font-bold drop-shadow-[0_1px_2px_rgba(92,18,34,0.15)] leading-tight">
            {invitationData.couple.groom}
          </span>
          <div className="flex items-center justify-center gap-3 my-2">
            <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-r from-transparent via-[#dfba73] to-[#dfba73]/80" />
            <span className="font-pinyon text-4xl sm:text-5xl text-[#5c1222] font-bold drop-shadow-[0_2px_8px_rgba(92,18,34,0.2)] leading-none select-none px-1">
              &amp;
            </span>
            <span className="w-10 sm:w-14 h-[1.5px] bg-gradient-to-l from-transparent via-[#dfba73] to-[#dfba73]/80" />
          </div>
          <span className="font-pinyon text-3xl sm:text-4xl md:text-[42px] text-[#380812] font-bold drop-shadow-[0_1px_2px_rgba(92,18,34,0.15)] leading-tight">
            {invitationData.couple.bride}
          </span>
        </div>
        <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#dfba73] to-transparent my-3.5" />
        <span className="font-cinzel text-[9px] tracking-[0.32em] text-[#783545] font-bold uppercase">
          SATURDAY, 12TH DECEMBER 2026 • KANPUR, INDIA
        </span>
      </div>
    </section>
  );
}
