"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import InvitationShell from "@/components/layout/InvitationShell";
import SmoothScroll from "@/components/layout/SmoothScroll";
import AudioPlayer from "@/components/effects/AudioPlayer";
import CurtainReveal from "@/components/invitation/CurtainReveal";
import InvitationIntro from "@/components/invitation/InvitationIntro";
import UnionBlessing from "@/components/invitation/UnionBlessing";
import ScratchDateCard from "@/components/invitation/ScratchDateCard";
import StoryGallery from "@/components/invitation/StoryGallery";
import EventTimeline from "@/components/invitation/EventTimeline";
import VenueSection from "@/components/invitation/VenueSection";
import FinalSection from "@/components/invitation/FinalSection";

export default function Home() {
  const [curtainRemoved, setCurtainRemoved] = useState(false);
  const [introStarted, setIntroStarted] = useState(false);
  const curtainWrapperRef = useRef<HTMLDivElement | null>(null);

  // Lock body scroll while curtain is closed
  useEffect(() => {
    if (!curtainRemoved) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [curtainRemoved]);

  const handleRevealComplete = () => {
    setIntroStarted(true);

    // Crossfade curtain reveal layer out smoothly to reveal the invitation
    if (curtainWrapperRef.current) {
      gsap.to(curtainWrapperRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: "power2.inOut",
        onComplete: () => {
          setCurtainRemoved(true);
        },
      });
    } else {
      setCurtainRemoved(true);
    }
  };

  return (
    <main className="relative w-full min-h-screen bg-[#070103] selection:bg-[#dfba73]/30 selection:text-[#dfba73]">
      {/* Lenis Smooth Scrolling (Active once curtain reveal completes) */}
      <SmoothScroll enabled={curtainRemoved} />

      {/* Atmospheric Audio Player Toggle (Unobtrusive floating button) */}
      <AudioPlayer />

      {/* Main Responsive 9:16 Invitation Shell */}
      <InvitationShell>
        {/* ========================================================================= */}
        {/* PHYSICAL CURTAIN REVEAL OVERLAY (Fullscreen landing + physical parting)    */}
        {/* ========================================================================= */}
        {!curtainRemoved && (
          <div
            ref={curtainWrapperRef}
            className="fixed inset-0 z-40 w-full h-full flex justify-center bg-[#0a0104]"
          >
            <div className="relative w-full max-w-[480px] h-full">
              <CurtainReveal onRevealComplete={handleRevealComplete} />
            </div>
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCROLLABLE INVITATION CONTENT                                             */}
        {/* ========================================================================= */}
        <div className="relative w-full flex flex-col z-20">
          {/* 1. Primary Invitation Intro Frame (Live HTML typography) */}
          <InvitationIntro />

          {/* 2. Union & Blessing ("Join us for the union of two souls") */}
          <UnionBlessing />

          {/* 3. Interactive Scratch-to-Reveal Date Card */}
          <ScratchDateCard />

          {/* 4. Our Story Photo Gallery (featuring real couple hands with henna & rings) */}
          <StoryGallery />

          {/* 5. The Celebration (Event Timeline: 8, 10, 12 Dec 2026) */}
          <EventTimeline />

          {/* 6. The Venues (Shivam Palace & Shanti Upvan + Google Maps) */}
          <VenueSection />

          {/* 7. Final Section (With All Our Hearts + WhatsApp Share + Calendar) */}
          <FinalSection />
        </div>
      </InvitationShell>
    </main>
  );
}
