"use client";

export default function AmbientGlow() {
  return (
    <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
      {/* Sconce warm glow (left side chandelier) */}
      <div
        className="absolute top-[28%] left-[8%] w-[240px] h-[240px] rounded-full blur-[65px] animate-flicker pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 204, 102, 0.28) 0%, rgba(223, 140, 40, 0.12) 55%, transparent 75%)",
        }}
      />

      {/* Sconce warm glow (right side in wow stage) */}
      <div
        className="absolute top-[32%] right-[8%] w-[220px] h-[220px] rounded-full blur-[60px] animate-flicker pointer-events-none"
        style={{
          animationDelay: "1.5s",
          background: "radial-gradient(circle, rgba(255, 204, 102, 0.22) 0%, rgba(223, 140, 40, 0.08) 55%, transparent 75%)",
        }}
      />

      {/* Center ambient warm stage glow */}
      <div
        className="absolute top-[18%] left-1/2 -translate-x-1/2 w-[340px] h-[340px] rounded-full blur-[80px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(255, 225, 140, 0.25) 0%, rgba(180, 40, 40, 0.15) 60%, transparent 80%)",
        }}
      />
    </div>
  );
}
