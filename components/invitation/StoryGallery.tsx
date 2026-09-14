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
      caption: "Two souls, one destiny, adorned with blessings and divine grace.",
    },
    {
      id: 2,
      image: "/invitation/reveal/wow_stage.webp",
      title: "A Celebration of Love",
      caption: "Under chandeliers and golden arches, beginning our forever.",
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
    <section className="relative w-full py-16 px-6 flex flex-col items-center text-center overflow-hidden bg-gradient-to-b from-[#140105] via-[#1c0208] to-[#150206]">
      {/* Decorative ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#dfba73]/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Heading */}
      <p className="font-cinzel text-[11px] tracking-[0.3em] text-[#dfba73]/80 uppercase font-semibold mb-2">
        A SACRED JOURNEY
      </p>
      <h2 className="font-pinyon text-4xl sm:text-5xl text-gold-gradient font-normal mb-7 drop-shadow-[0_2px_10px_rgba(223,186,115,0.3)]">
        Moments, Softly Held
      </h2>

      {/* Royal Baroque Photo Frame */}
      <div className="relative z-10 w-full max-w-[360px] aspect-[4/3] rounded-3xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.85)] border-2 border-[#dfba73]/50 p-2 bg-gradient-to-b from-[#dfba73]/40 via-[#8c6a28]/30 to-[#dfba73]/30">
        <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-black">
          <Image
            src={slides[activeSlide].image}
            alt={slides[activeSlide].title}
            fill
            sizes="360px"
            className="object-cover object-center transition-all duration-700 hover:scale-105"
          />

          {/* Luxury dark gradient overlay for caption */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent flex flex-col justify-end p-4 text-left">
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
