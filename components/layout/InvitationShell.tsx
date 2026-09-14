"use client";

import React from "react";

export default function InvitationShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen w-full bg-[#090103] flex justify-center items-start [overflow-x:clip]">
      {/* Subtle outer backdrop decorative lighting for desktop views */}
      <div className="hidden lg:block fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#3d040f]/20 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-[#520916]/15 blur-[140px]" />
      </div>

      {/* Main invitation phone/card container */}
      <div className="relative w-full max-w-[480px] min-h-screen bg-[#110104] shadow-[0_0_80px_rgba(0,0,0,0.85)] border-x border-[#dfba73]/15 flex flex-col z-10 [overflow-x:clip]">
        {children}
      </div>
    </div>
  );
}
