"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";

export default function StoryGallery() {
  const slides = [
    {
      id: 1,
      image: "/invitation/photos/couple_hands.webp",
      title: "Sacred Vows & Henna Prayers",
      caption: "Two souls, one destiny, adorned with blessings, intricate mehndi and divine grace.",
    },
    {
      id: 2,
      image: "/invitation/reveal/wow_stage.webp",
      title: "The Royal Stage",
      caption: "Under radiant chandeliers and golden arches, where our celebrations unfold.",
    },
    {
      id: 3,
      image: "/invitation/background/intro_bg.webp",
      title: "A Lifetime of Love",
      caption: "Surrounded by family, sacred duas and the warmth of timeless traditions.",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="relative w-full py-16 px-5 flex flex-col items-center text-center overflow-hidden theme-light-maroon border-t border-[#dfba73]/35">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#dfba73]/[0.10] rounded-full blur-[90px] pointer-events-none" />

      {/* Heading */}
      <p className="font-cinzel text-[10px] tracking-[0.32em] text-[#dfba73]/85 uppercase font-semibold mb-1.5">
        A SACRED JOURNEY
      </p>
      <h2 className="font-pinyon text-4xl sm:text-5xl text-gold-gradient font-bold mb-7 drop-shadow-[0_2px_12px_rgba(223,186,115,0.35)]">
        Moments, Softly Held
      </h2>

      {/* Royal Baroque Photo Frame */}
      <div className="relative z-10 w-full max-w-[370px] aspect-[4/3] rounded-[26px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.9)] border-2 border-[#dfba73]/60 p-2 bg-gradient-to-b from-[#dfba73]/40 via-[#8c6a28]/25 to-[#dfba73]/40">
        {/* Corner Accents */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#dfba73] pointer-events-none z-20" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#dfba73] pointer-events-none z-20" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#dfba73] pointer-events-none z-20" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#dfba73] pointer-events-none z-20" />

        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-black">
          <Image
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            fill
            sizes="370px"
            className="object-cover object-center transition-all duration-700 hover:scale-105"
          />

          {/* Luxury dark gradient overlay for caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-4 text-left">
            <div className="flex items-center gap-1.5 mb-1">
              <Heart className="w-3.5 h-3.5 text-[#dfba73] fill-[#dfba73]" />
              <span className="font-cinzel text-xs font-bold text-gold-gradient tracking-wider">
                {slides[activeSlide].title}
              </span>
            </div>
            <p className="font-cormorant text-sm italic text-[#f4ece3] leading-snug">
              {slides[activeSlide].caption}
            </p>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous photo"
            className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-[#dfba73] flex items-center justify-center border border-[#dfba73]/30 backdrop-blur-xs transition-all cursor-pointer shadow-lg"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next photo"
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 hover:bg-black/80 text-[#dfba73] flex items-center justify-center border border-[#dfba73]/30 backdrop-blur-xs transition-all cursor-pointer shadow-lg"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex items-center justify-center gap-2 mt-5">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setActiveSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              activeSlide === idx
                ? "w-7 h-2 bg-[#dfba73] shadow-[0_0_8px_#dfba73]"
                : "w-2 h-2 bg-[#dfba73]/30 hover:bg-[#dfba73]/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
