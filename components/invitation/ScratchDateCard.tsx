"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import confetti from "canvas-confetti";
import { Sparkles, CheckCircle } from "lucide-react";

export default function ScratchDateCard() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [scratchPercent, setScratchPercent] = useState(0);
  const isDrawingRef = useRef(false);
  const hasCelebratedRef = useRef(false);

  const checkScratchPercentage = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    try {
      const imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixels = imgData.data;
      let transparentPixels = 0;
      const totalPixels = pixels.length / 4;

      for (let i = 3; i < pixels.length; i += 16) {
        if (pixels[i] < 128) {
          transparentPixels++;
        }
      }

      const percent = Math.round((transparentPixels / (totalPixels / 4)) * 100);
      setScratchPercent(percent);

      if (percent > 35 && !hasCelebratedRef.current) {
        hasCelebratedRef.current = true;
        setIsRevealed(true);
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.65 },
          colors: ["#dfba73", "#fbe8b5", "#d4af37", "#b8243e"],
        });
      }
    } catch {
      // ignore context security if any
    }
  }, [isRevealed]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = canvas.offsetWidth);
    const height = (canvas.height = canvas.offsetHeight);

    // Luxury antique gold leaf metallic gradient
    const gradient = ctx.createLinearGradient(0, 0, width, height);
    gradient.addColorStop(0, "#d8b467");
    gradient.addColorStop(0.25, "#fae4b5");
    gradient.addColorStop(0.5, "#a8843c");
    gradient.addColorStop(0.75, "#edd399");
    gradient.addColorStop(1, "#c99e4b");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);

    // Subtle ornate patterned stippling
    ctx.fillStyle = "rgba(40, 10, 5, 0.08)";
    for (let x = 8; x < width; x += 14) {
      for (let y = 8; y < height; y += 14) {
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // Border line inside foil
    ctx.strokeStyle = "rgba(255, 255, 255, 0.3)";
    ctx.lineWidth = 2;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // Text instructions stamped on foil
    ctx.fillStyle = "#2e1204";
    ctx.font = "bold 13px Cinzel, serif";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("✦ SCRATCH HERE ✦", width / 2, height / 2 - 9);

    ctx.font = "italic 11px Cormorant Garamond, serif";
    ctx.fillStyle = "#4a2108";
    ctx.fillText("to reveal the sacred dates", width / 2, height / 2 + 13);
  }, []);

  const scratch = (clientX: number, clientY: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 26, 0, Math.PI * 2);
    ctx.fill();

    checkScratchPercentage();
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    isDrawingRef.current = true;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!isDrawingRef.current) return;
    scratch(e.clientX, e.clientY);
  };

  const handlePointerUp = () => {
    isDrawingRef.current = false;
  };

  const handleRevealAll = () => {
    setIsRevealed(true);
    hasCelebratedRef.current = true;
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ["#dfba73", "#fbe8b5", "#d4af37", "#b8243e"],
    });
  };

  return (
    <section className="relative w-full py-16 px-6 flex flex-col items-center text-center overflow-hidden bg-[#140105]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] bg-[#9e162f]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Header */}
      <p className="font-cinzel text-[11px] tracking-[0.3em] text-[#dfba73]/80 uppercase font-semibold mb-2">
        A SACRED MOMENT IN TIME
      </p>
      <h2 className="font-pinyon text-4xl sm:text-5xl text-gold-gradient font-normal mb-6">
        Scratch to Reveal
      </h2>

      {/* Luxury Scratch Card Frame */}
      <div className="relative w-full max-w-[360px] h-[220px] rounded-3xl p-1 bg-gradient-to-b from-[#dfba73] via-[#8c6a28] to-[#dfba73] shadow-[0_12px_40px_rgba(0,0,0,0.8)] border border-[#dfba73]/40">
        <div className="relative w-full h-full rounded-[22px] overflow-hidden bg-[#1e0207] flex flex-col items-center justify-center p-4">
          {/* Underneath Revealed Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-5 text-center select-none bg-[radial-gradient(circle_at_center,_#380510_0%,_#180105_100%)]">
            <span className="font-cinzel text-[11px] tracking-[0.3em] text-[#dfba73] uppercase font-bold mb-1.5">
              SAVE THE DATES
            </span>
            <h3 className="font-cinzel text-2xl sm:text-3xl font-bold text-gold-gradient tracking-wide mb-1.5 drop-shadow-[0_2px_10px_rgba(223,186,115,0.4)]">
              8 — 12 DEC 2026
            </h3>
            <p className="font-cormorant text-base italic text-[#f3e6d8] mb-3">
              Akbarpur &amp; Kanpur, Uttar Pradesh
            </p>
            <div className="flex items-center justify-center gap-2">
              <span className="w-10 h-[1px] bg-gradient-to-r from-transparent to-[#dfba73]" />
              <span className="text-[10px] font-cinzel text-[#dfba73]/90 uppercase tracking-[0.25em]">
                Celebration of Arshiya &amp; Farhan
              </span>
              <span className="w-10 h-[1px] bg-gradient-to-l from-transparent to-[#dfba73]" />
            </div>
          </div>

          {/* Canvas Scratch Foil Layer */}
          <canvas
            ref={canvasRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerUp}
            className={`absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing touch-none transition-opacity duration-700 rounded-[22px] ${
              isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />
        </div>
      </div>

      {/* Manual Action & Feedback */}
      <div className="mt-5 flex flex-col items-center gap-2">
        {!isRevealed ? (
          <button
            onClick={handleRevealAll}
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-[#dfba73]/40 text-[#dfba73] text-[11px] font-cinzel tracking-widest uppercase bg-[#28040c]/80 hover:bg-[#380612] hover:border-[#dfba73] transition-all cursor-pointer shadow-lg active:scale-98"
          >
            <Sparkles className="w-3.5 h-3.5 text-[#dfba73]" />
            <span>Tap to Reveal All</span>
          </button>
        ) : (
          <div className="flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#2a040e]/60 border border-[#dfba73]/40">
            <CheckCircle className="w-4 h-4 text-[#dfba73]" />
            <p className="text-xs font-cormorant italic text-[#dfba73]">
              Dates revealed with endless blessings &amp; joy
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
