export const animationConstants = {
  // Tap-to-open interaction
  tapFadeDuration: 0.35,
  tapFadeScale: 0.94,

  // Physical Curtain Opening
  curtainSplitDuration: 1.35,
  curtainEase: "power3.inOut",
  curtainSkew: 2.2, // Subtle physical fold/gather
  curtainGatherScale: 0.92,

  // Interior Light Bloom
  bloomDuration: 1.1,
  bloomPeakOpacity: 0.95,

  // WOW Stage Reveal
  wowRevealScaleFrom: 1.05,
  wowRevealScaleTo: 1.0,
  wowHoldDuration: 0.8, // Snappy & majestic stage hold time

  // Transition from WOW to Intro Frame
  introCrossfadeDuration: 0.9,
  introCrossfadeEase: "power2.inOut",

  // Typography Cascade Delays & Timings
  staggerDelay: 0.22,
  textFadeDuration: 0.9,
  textEase: "power2.out",

  // Audio settings
  audioFadeDuration: 1.5,
  defaultVolume: 0.45,
};
