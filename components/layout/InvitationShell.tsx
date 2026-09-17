"use client";

import React from "react";

export default function InvitationShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#070103] flex justify-center items-start [overflow-x:clip]">
      {/* Royal atmospheric backdrop for desktop screens */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {/* Deep velvet ambient glow lights */}
        <div className="absolute top-1/4 left-[15%] w-[550px] h-[550px] rounded-full bg-[#4a0512]/25 blur-[160px] animate-flicker" />
        <div className="absolute bottom-1/4 right-[15%] w-[500px] h-[500px] rounded-full bg-[#38030d]/30 blur-[150px] animate-flicker" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#dfba73]/[0.02] rounded-full blur-[180px]" />

        {/* Elegant subtle desktop top brand watermark */}
        <div className="absolute top-6 right-8 flex items-center gap-3 opacity-60">
          <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#dfba73]" />
          <span className="font-cinzel text-[11px] tracking-[0.3em] text-[#dfba73] uppercase">
            Farhan &amp; Arshiya • Walima 2026
          </span>
          <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#dfba73]" />
        </div>
      </div>

      {/* Main invitation phone/card container */}
      <div className="relative w-full max-w-[480px] min-h-screen bg-[#0e0104] shadow-[0_0_100px_rgba(0,0,0,0.95),0_0_40px_rgba(223,186,115,0.06)] border-x border-[#dfba73]/20 flex flex-col z-10 [overflow-x:clip]">
        {children}
      </div>
    </div>
  );
}
