"use client";

import { useEffect, useRef, useState } from "react";
import { Volume2, VolumeX } from "lucide-react";

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio("/invitation/audio/soundtrack.mp3");
    audio.loop = true;
    audio.volume = 0;
    audioRef.current = audio;

    const startAudioWithFade = () => {
      if (!audioRef.current) return;
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
          // Gentle volume ramp up to 0.45
          let vol = 0;
          const fadeInterval = setInterval(() => {
            if (!audioRef.current) {
              clearInterval(fadeInterval);
              return;
            }
            vol = Math.min(0.45, vol + 0.05);
            audioRef.current.volume = vol;
            if (vol >= 0.45) clearInterval(fadeInterval);
          }, 120);
        })
        .catch((e) => console.log("Auto-audio playback deferred:", e));
    };

    const handlePlayEvent = () => {
      startAudioWithFade();
    };

    window.addEventListener("play-wedding-music", handlePlayEvent);

    return () => {
      window.removeEventListener("play-wedding-music", handlePlayEvent);
      audio.pause();
      audio.src = "";
    };
  }, []);

  const toggleAudio = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.volume = 0.45;
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((e) => console.log("Audio playback error:", e));
    }
  };

  return (
    <button
      onClick={toggleAudio}
      title="Assubuhu Bada Part 2 (Lofi) - Urooj Fatima Ansari"
      aria-label={isPlaying ? "Mute music (Assubuhu Bada Part 2 Lofi)" : "Play music (Assubuhu Bada Part 2 Lofi)"}
      className="fixed top-4 left-4 z-50 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-md bg-black/50 border border-[#dfba73]/40 text-[#dfba73] hover:border-[#dfba73] hover:bg-black/70 transition-all duration-300 shadow-lg group cursor-pointer"
    >
      {isPlaying ? (
        <>
          <div className="flex items-end gap-[2px] h-3 w-3.5">
            <span className="w-[2px] bg-[#dfba73] rounded-full animate-[pulse_0.7s_ease-in-out_infinite] h-full" />
            <span className="w-[2px] bg-[#dfba73] rounded-full animate-[pulse_0.9s_ease-in-out_infinite_0.2s] h-3/4" />
            <span className="w-[2px] bg-[#dfba73] rounded-full animate-[pulse_0.6s_ease-in-out_infinite_0.4s] h-4/5" />
          </div>
          <span className="text-[10px] tracking-widest uppercase font-cinzel font-semibold opacity-90 hidden sm:inline">
            Music
          </span>
          <Volume2 className="w-3.5 h-3.5 opacity-80 group-hover:opacity-100" />
        </>
      ) : (
        <>
          <VolumeX className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100" />
          <span className="text-[10px] tracking-widest uppercase font-cinzel font-semibold opacity-80 hidden sm:inline">
            Sound
          </span>
        </>
      )}
    </button>
  );
}
