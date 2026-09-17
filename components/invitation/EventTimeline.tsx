"use client";

import { useRef, useState, useEffect } from "react";
import { invitationData } from "@/lib/constants/invitationData";
import StackingCards, { StackingCardItem } from "@/components/ui/stacking-cards";
import { Clock, MapPin, Sparkles, Calendar, ArrowDown } from "lucide-react";

export default function EventTimeline() {
  const sectionRef = useRef<HTMLElement>(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cardThemes = [
    {
      // Card 1: Milad & Manjha (Royal Light Maroon Velvet & Gold)
      cardBg:
        "bg-gradient-to-br from-[#52101e] via-[#3a0814] to-[#26040c] text-[#faf2e4] border-2 border-[#dfba73] shadow-[0_18px_50px_rgba(74,13,27,0.35)]",
      badgeBg: "bg-[#380712] border-[#dfba73]/60 text-gold-gradient",
      titleColor: "text-gold-gradient",
      subtextColor: "text-[#ecdccb]",
      innerCardBg: "bg-[#28050e]/85 border-[#dfba73]/35",
      pillBg: "bg-[#450917] text-[#dfba73] border-[#dfba73]/50",
      accentColor: "#dfba73",
      stepNum: "01",
      shortName: "Milad & Manjha",
      dateLabel: "8 Dec",
    },
    {
      // Card 2: The Barat (Luxury Pearl White & Royal Gold)
      cardBg:
        "bg-gradient-to-br from-[#ffffff] via-[#fbf6ef] to-[#f4ede1] text-[#2b0b12] border-2 border-[#dfba73] shadow-[0_18px_50px_rgba(92,18,34,0.15)]",
      badgeBg: "bg-[#5c1222] border-[#dfba73]/70 text-[#dfba73]",
      titleColor: "text-[#380812]",
      subtextColor: "text-[#682433]",
      innerCardBg: "bg-[#ffffff] border-[#dfba73]/50 shadow-xs",
      pillBg: "bg-[#5c1222] text-[#dfba73] border-[#dfba73]/60",
      accentColor: "#5c1222",
      stepNum: "02",
      shortName: "The Barat",
      dateLabel: "10 Dec",
    },
    {
      // Card 3: Reception & Walima (Grand Light Maroon & Radiant Gold)
      cardBg:
        "bg-gradient-to-br from-[#5c1222] via-[#420a17] to-[#2e050f] text-[#faf2e4] border-2 border-[#dfba73] shadow-[0_20px_55px_rgba(74,13,27,0.4)]",
      badgeBg: "bg-[#380712] border-[#dfba73]/60 text-gold-gradient",
      titleColor: "text-gold-gradient",
      subtextColor: "text-[#ecdccb]",
      innerCardBg: "bg-[#2c050f]/85 border-[#dfba73]/35",
      pillBg: "bg-[#4a0918] text-[#dfba73] border-[#dfba73]/50",
      accentColor: "#dfba73",
      stepNum: "03",
      shortName: "Walima",
      dateLabel: "12 Dec",
    },
  ];

  // Track scroll position inside timeline section to highlight active day pill
  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;
      
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));

      if (progress < 0.35) {
        setActiveCardIndex(0);
      } else if (progress < 0.70) {
        setActiveCardIndex(1);
      } else {
        setActiveCardIndex(2);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Click handler to smoothly scroll to a specific day in the stack
  const scrollToDay = (idx: number) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const scrollTop = window.scrollY + rect.top;
    const totalScrollable = rect.height - window.innerHeight;

    // Targets: Card 0 -> 5%, Card 1 -> 48%, Card 2 -> 88%
    const targetProgress = idx === 0 ? 0.05 : idx === 1 ? 0.48 : 0.88;
    const destination = scrollTop + totalScrollable * targetProgress;

    window.scrollTo({
      top: destination,
      behavior: "smooth",
    });
  };

  return (
    <section
      ref={sectionRef}
      id="wedding-timeline"
      className="relative w-full min-h-[220vh] theme-pearl-white border-t border-[#dfba73]/35 flex flex-col items-center"
    >
      {/* Warm ambient gold candlelight radial accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] h-[380px] bg-[#dfba73]/[0.10] rounded-full blur-[100px] pointer-events-none" />

      {/* Sticky Deck Viewport pinned while scrolling through the 220vh track */}
      <div className="sticky top-8 sm:top-12 w-full flex flex-col items-center justify-start pt-4 sm:pt-6 pb-6 px-3 sm:px-4 z-10">
        {/* Top Gold Crest Ornament */}
        <div className="mb-2 opacity-95">
          <svg
            width="64"
            height="20"
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
            <circle cx="20" cy="8" r="1.5" fill="#5c1222" />
            <circle cx="50" cy="8" r="1.5" fill="#5c1222" />
          </svg>
        </div>

        {/* Section Titles */}
        <p className="font-cinzel text-[10px] sm:text-[11px] tracking-[0.3em] text-[#5c1222] uppercase font-bold text-center mb-1">
          THE SACRED CELEBRATIONS
        </p>
        <h2 className="font-pinyon text-3xl sm:text-4xl text-[#380812] font-bold text-center mb-2.5 drop-shadow-[0_1px_3px_rgba(92,18,34,0.15)]">
          Wedding Timeline
        </h2>

        {/* Interactive Day Indicator Pills */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3">
          {cardThemes.map((theme, idx) => {
            const isActive = activeCardIndex === idx;
            return (
              <button
                key={idx}
                onClick={() => scrollToDay(idx)}
                type="button"
                className={`px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-cinzel font-bold tracking-wider transition-all duration-300 flex items-center gap-1 cursor-pointer border ${
                  isActive
                    ? "bg-gradient-to-r from-[#4a0d1b] to-[#6a1628] text-[#dfba73] border-[#dfba73] shadow-[0_2px_12px_rgba(74,13,27,0.3)] scale-105"
                    : "bg-[#fffdf9] text-[#5c1222] border-[#dfba73]/60 hover:border-[#5c1222] hover:text-[#380812] shadow-xs"
                }`}
              >
                <span>{theme.dateLabel}</span>
                <span className="hidden xs:inline">• {theme.shortName}</span>
              </button>
            );
          })}
        </div>

        {/* Stacking Cards Deck Viewport Frame */}
        <div className="relative w-full max-w-[390px] sm:max-w-[420px] h-[410px] sm:h-[420px] mx-auto overflow-hidden rounded-3xl">
          <StackingCards
            totalCards={invitationData.days.length}
            scaleMultiplier={0.04}
            scrollOptions={{ target: sectionRef, offset: ["start start", "end end"] }}
            className="w-full h-full"
          >
            {invitationData.days.map((day, idx) => {
              const theme = cardThemes[idx] || cardThemes[0];
              const topOffset = idx * 22;

              return (
                <StackingCardItem
                  key={idx}
                  index={idx}
                  topPosition={topOffset}
                  className="rounded-3xl cursor-pointer"
                  onClick={() => scrollToDay(idx)}
                >
                  <div
                    className={`relative w-full rounded-3xl p-4 sm:p-5 flex flex-col justify-between transition-shadow duration-300 ${theme.cardBg}`}
                  >
                    {/* Card Header Bar */}
                    <div className="flex items-center justify-between gap-2 mb-3 pb-2 border-b border-[#dfba73]/30">
                      <div
                        className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full border text-[11px] font-cinzel font-bold tracking-wider ${theme.badgeBg}`}
                      >
                        <Calendar className="w-3 h-3" />
                        <span>{day.date}</span>
                        <span className="opacity-80 font-normal italic">
                          • {day.dayOfWeek}
                        </span>
                      </div>
                      <span className="font-cinzel text-[9px] tracking-widest uppercase font-bold opacity-75">
                        Day {theme.stepNum}/03
                      </span>
                    </div>

                    {/* Day Major Title */}
                    <div className="mb-3">
                      <h3
                        className={`font-cinzel text-lg sm:text-xl font-bold tracking-wide ${theme.titleColor}`}
                      >
                        {day.title}
                      </h3>
                    </div>

                    {/* Events list inside this day */}
                    <div className="flex flex-col gap-2.5">
                      {day.events.map((event) => (
                        <div
                          key={event.id}
                          className={`relative p-3 rounded-2xl border transition-all ${theme.innerCardBg}`}
                        >
                          <div className="flex items-center justify-between gap-2 flex-wrap mb-0.5">
                            <h4 className="font-cinzel text-xs sm:text-sm font-bold tracking-wider">
                              {event.name}
                            </h4>
                            {event.time && (
                              <span
                                className={`inline-flex items-center gap-1 text-[10px] font-cinzel font-semibold px-2 py-0.5 rounded-full border ${theme.pillBg}`}
                              >
                                <Clock className="w-2.5 h-2.5" />
                                {event.time}
                              </span>
                            )}
                          </div>

                          {event.note && (
                            <p
                              className={`font-cormorant text-xs italic leading-relaxed ${theme.subtextColor}`}
                            >
                              {event.note}
                            </p>
                          )}

                          {event.location && (
                            <div className="mt-1.5 flex items-center gap-1 text-[11px] font-cinzel tracking-wide pt-1 border-t border-[#dfba73]/20 opacity-90">
                              <MapPin className="w-3 h-3 text-[#dfba73] shrink-0" />
                              <span>{event.location}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    {/* Bottom decorative flourish */}
                    <div className="mt-3 pt-1 flex items-center justify-center gap-2 opacity-60">
                      <span className="w-6 h-[1px] bg-[#dfba73]" />
                      <Sparkles className="w-2.5 h-2.5 text-[#dfba73]" />
                      <span className="w-6 h-[1px] bg-[#dfba73]" />
                    </div>
                  </div>
                </StackingCardItem>
              );
            })}
          </StackingCards>
        </div>

        {/* Scroll Helper Prompt */}
        <div className="mt-3 text-center flex flex-col items-center gap-1">
          <p className="font-cormorant text-xs italic text-[#5c1222] font-semibold flex items-center justify-center gap-1">
            <span>
              {activeCardIndex === 2
                ? "All events revealed • Continue scrolling ↓"
                : "Scroll down to stack cards"}
            </span>
            <ArrowDown className="w-3 h-3 animate-bounce text-[#5c1222]" />
          </p>
          <div className="flex items-center gap-1.5 mt-0.5">
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeCardIndex === i
                    ? "w-5 bg-[#5c1222] shadow-[0_0_6px_rgba(92,18,34,0.3)]"
                    : "w-1.5 bg-[#dfba73]/80"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
