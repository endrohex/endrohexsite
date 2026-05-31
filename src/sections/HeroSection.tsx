import React, { useState, useEffect, Suspense, lazy } from "react";
import { ArrowRight, Github, Radio, Cpu, ShieldCheck } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

const Antigravity = lazy(() => import("../components/Antigravity"));

function useAntigravityEnabled() {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const checkEnabled = () => {
      // 1. Check screen width (e.g. >= 1024px)
      const isLargeScreen = window.innerWidth >= 1024;

      // 2. Check for fine pointer and not coarse pointer (touch screen)
      const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
      const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches;

      // 3. Check reduced motion preferences
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      setIsEnabled(isLargeScreen && hasFinePointer && !isCoarsePointer && !prefersReducedMotion);
    };

    // Run check initially
    checkEnabled();

    // Event listener for resize
    window.addEventListener("resize", checkEnabled, { passive: true });

    // Listen to media query changes
    const finePointerMedia = window.matchMedia('(pointer: fine)');
    const coarsePointerMedia = window.matchMedia('(pointer: coarse)');
    const reducedMotionMedia = window.matchMedia('(prefers-reduced-motion: reduce)');

    try {
      finePointerMedia.addEventListener('change', checkEnabled);
      coarsePointerMedia.addEventListener('change', checkEnabled);
      reducedMotionMedia.addEventListener('change', checkEnabled);
    } catch {
      finePointerMedia.addListener(checkEnabled);
      coarsePointerMedia.addListener(checkEnabled);
      reducedMotionMedia.addListener(checkEnabled);
    }

    return () => {
      window.removeEventListener("resize", checkEnabled);
      try {
        finePointerMedia.removeEventListener('change', checkEnabled);
        coarsePointerMedia.removeEventListener('change', checkEnabled);
        reducedMotionMedia.removeEventListener('change', checkEnabled);
      } catch {
        finePointerMedia.removeListener(checkEnabled);
        coarsePointerMedia.removeListener(checkEnabled);
        reducedMotionMedia.removeListener(checkEnabled);
      }
    };
  }, []);

  return isEnabled;
}

export const HeroSection: React.FC = () => {
  const isEnabled = useAntigravityEnabled();

  return (
    <section
      id="home"
      className="relative min-h-[85vh] flex flex-col justify-center items-center bg-[var(--colors-canvas)] text-[var(--colors-ink)] px-4 sm:px-6 pt-16 pb-12 select-none"
    >
      {/* 1. Interactive Antigravity background */}
      {isEnabled && (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60">
          <Suspense fallback={null}>
            <Antigravity
              count={250}
              magnetRadius={8}
              ringRadius={8}
              waveSpeed={0.4}
              waveAmplitude={1}
              particleSize={1.5}
              lerpSpeed={0.05}
              color="#0066cc"
              autoAnimate={true}
              particleVariance={1}
              particleShape="capsule"
            />
          </Suspense>
        </div>
      )}

      {/* 2. Main Content Layout */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center gap-8 md:gap-10">

        {/* Centered Apple-Style product description */}
        <FadeIn delay={0.1} y={30} className="w-full text-center flex flex-col items-center gap-4 md:gap-5">
          {/* Tech Label */}
          <div className="flex items-center gap-2 text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.25em] text-[var(--colors-ink-muted-80)] mb-1">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--colors-primary)]" />
            <span>SYS-PORT: ACTIVE // DIGITAL STUDIO ARCHITECTURE</span>
          </div>

          {/* Display Headline */}
          <h1
            className="font-semibold tracking-tighter leading-[1.1] sm:leading-[1.07] text-[var(--colors-ink)] max-w-4xl mx-auto font-display"
            style={{ fontSize: "clamp(1.8rem, 8vw, 4.2rem)", letterSpacing: "-0.03em" }}
          >
            Web Architectures That
            <br />
            <span className="text-[var(--colors-primary)]">
              Don’t Feel Like Websites
            </span>
          </h1>

          {/* Editorial Paragraph */}
          <p className="text-[var(--colors-ink-muted-80)] text-xs sm:text-base max-w-2xl mx-auto font-light leading-relaxed tracking-wide font-sans px-2">
            We design and engineer bespoke luxury digital spaces, high-converting product pages, and high-performance frontend interfaces. Direct collaboration. Zero intermediaries.
          </p>

          {/* Premium CTA Buttons */}
          <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3 mt-2 relative z-10 px-4 sm:px-0">
            {/* Primary Action Blue Pill */}
            <a
              href="#pricing"
              className="group flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-[var(--rounded-pill)] bg-[var(--colors-primary)] hover:bg-[var(--colors-primary-focus)] text-white font-semibold uppercase tracking-wider text-xs sm:text-sm transition-colors shadow-sm"
              aria-label="Get Started and select a pricing package"
            >
              Initiate Project
              <ArrowRight size={15} className="text-white transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            {/* Ghost Pearl Pill */}
            <a
              href="https://github.com/endrohex"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink-muted-80)] font-semibold uppercase tracking-wider text-xs sm:text-sm transition-colors"
              aria-label="View our profile on GitHub"
            >
              <Github size={15} />
              View GitHub
            </a>
          </div>
        </FadeIn>

        {/* 3. Immersive Hardware Render resting on a surface */}
        <FadeIn delay={0.25} y={40} className="w-full max-w-xl mt-2 px-2 sm:px-0">
          <div className="laptop-mockup">
            <div className="laptop-screen">
              {/* Inside screen - Sleek mockup representing digital studio */}
              <div className="w-full h-full bg-[#050D1E] flex flex-col justify-between p-4 sm:p-6 relative text-left select-none">
                <div className="absolute inset-0 bathymetric-grid opacity-30" />
                <div className="absolute inset-0 caustics-layer opacity-40" />

                <div className="flex justify-between items-start relative z-10 w-full">
                  <div className="flex flex-col">
                    <span className="text-[7px] sm:text-[8px] font-mono text-[#2997ff] uppercase tracking-widest font-black">ACTIVE ENGINE // CORE VERIFIED</span>
                    <span className="text-[10px] sm:text-xs font-bold text-white uppercase tracking-wider font-display mt-0.5">Endrohex Systems v2.6</span>
                  </div>
                  <span className="text-[6px] sm:text-[7px] font-mono px-2 py-0.5 rounded border border-[#2997ff]/30 bg-[#2997ff]/10 text-[#2997ff] uppercase font-bold tracking-wider">
                    STABLE-OS
                  </span>
                </div>

                <div className="my-auto flex flex-col gap-0.5 sm:gap-1 relative z-10">
                  <span className="text-sm sm:text-xl font-black font-display text-white tracking-tighter uppercase leading-[1.1]">
                    CRAFTING UNCOMPROMISED
                    <br />
                    VISUAL EXPERIENCES.
                  </span>
                  <p className="text-[8px] sm:text-[9px] text-white/50 leading-relaxed font-light font-sans max-w-[240px] hidden sm:block">
                    Optimized React matrix channels loading responsive content pipelines dynamically at 99.8 FPS core frequencies.
                  </p>
                </div>

                <div className="flex justify-between items-center relative z-10 w-full border-t border-white/[0.08] pt-2 sm:pt-3">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-[7px] sm:text-[8px] font-mono text-white/40">ONLINE // SYSTEM-01 ACTIVE</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#2997ff]" />
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#2997ff]/50" />
                    <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 rounded-full bg-[#2997ff]/20" />
                  </div>
                </div>
              </div>
            </div>
            <div className="laptop-body" />
          </div>
        </FadeIn>

        {/* 4. Telemetry Systems (Trust Badges) */}
        <FadeIn delay={0.3} y={30} className="w-full mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            {[
              {
                icon: <Radio size={16} />,
                title: "SYS-01 // DIRECT PING",
                desc: "Direct coordination driven by organic Instagram outreach. No Upwork commissions or delay fees."
              },
              {
                icon: <Cpu size={16} />,
                title: "SYS-02 // CORE ENGINE",
                desc: "React, TypeScript, Tailwind, and performance builds ensuring rapid responsive screen updates."
              },
              {
                icon: <ShieldCheck size={16} />,
                title: "SYS-03 // VERIFIED MILESTONES",
                desc: "Secure 3-tier milestone structure: $1 / ₹100 pre-payment advance, and balance upon successful staging."
              }
            ].map((badge, bIdx) => (
              <div
                key={bIdx}
                className="flex flex-col items-center text-center gap-2 p-5 sm:p-6 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] shadow-sm hover:border-[var(--colors-primary)] transition-all duration-300"
              >
                <div className="p-3 rounded-[var(--rounded-md)] bg-[var(--colors-canvas-parchment)] text-[var(--colors-primary)]">
                  {badge.icon}
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[var(--colors-ink)] font-display">{badge.title}</span>
                <p className="text-xs text-[var(--colors-ink-muted-80)] leading-relaxed max-w-[240px] font-light font-sans">
                  {badge.desc}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
