import React from "react";
import { Compass, Award, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "../components/FadeIn";

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="relative w-full px-6 py-24 sm:py-28 bg-[var(--colors-surface-tile-1)] text-[var(--colors-body-on-dark)] overflow-hidden select-none"
    >
      {/* 1. Deep Caustics Water Reflections */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="caustics-layer" />
        <div className="bathymetric-grid" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* 2. Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-white/[0.08] pb-6 text-left">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl font-light font-mono text-[var(--colors-primary-on-dark)] tracking-tight">01</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white font-display" style={{ letterSpacing: '-0.025em' }}>
              Studio Manifesto
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary-on-dark)] self-start md:self-auto">
            // OPERATING PRINCIPLES & ORIGINS
          </p>
        </div>

        {/* 3. Magazine-Style Editorial Manifesto Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center text-left">
          
          {/* Column 1: Massive Bold Statement & Narrative */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            <FadeIn delay={0.1} y={30}>
              <p className="text-xl sm:text-2xl md:text-3xl font-semibold uppercase tracking-tight text-white leading-snug font-display" style={{ letterSpacing: '-0.02em' }}>
                We believe the web is being ruined by visual homogenization. Websites shouldn't feel like generic PDF brochures, they should be immersive spatial environments.
              </p>
            </FadeIn>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-[var(--colors-body-muted)] font-light font-sans text-sm sm:text-base leading-relaxed">
              <FadeIn delay={0.2} y={20}>
                <p>
                  Endrohex was founded as a rebellion against visual standards. We refuse to use cookie-cutter startup templates or drag-and-drop page builders. Every line of code we write is customized from scratch to align with your brand's unique character.
                </p>
              </FadeIn>
              <FadeIn delay={0.25} y={20}>
                <p>
                  By bypassing corporate freelance platforms and intermediate markup fee systems, we maintain a raw, direct peer-to-peer dialogue between founders and developers, resulting in rapid-response engineering cycles and uncompromised execution metrics.
                </p>
              </FadeIn>
            </div>
          </div>

          {/* Column 2: Off-Center Tech Compass */}
          <div className="lg:col-span-4 flex justify-center items-center relative">
            <FadeIn delay={0.3} y={30} className="relative w-full max-w-[220px] aspect-square">
              {/* Radial glow */}
              <div className="absolute inset-0 bg-[var(--colors-primary)]/5 filter blur-[40px] rounded-full" />
              
              {/* Spinning Bearing Compass Grid */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-dashed border-white/10 rounded-full flex items-center justify-center"
              >
                <div className="w-[90%] h-[90%] border border-dashed border-white/10 rounded-full flex items-center justify-center relative">
                  <span className="absolute top-2 text-[8px] font-mono font-semibold text-[var(--colors-primary-on-dark)]">N 00°</span>
                  <span className="absolute bottom-2 text-[8px] font-mono font-semibold text-white/20">S 180°</span>
                </div>
              </motion.div>

              {/* Sonar Radar sweep layer */}
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute inset-2 rounded-full pointer-events-none"
                style={{
                  background: "conic-gradient(from 0deg at 50% 50%, rgba(41, 151, 255, 0.08) 0deg, rgba(41, 151, 255, 0) 90deg)"
                }}
              />

              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="100"
                  height="100"
                  viewBox="0 0 100 100"
                  stroke="url(#manifesto-compass)"
                  strokeWidth="1.25"
                  fill="none"
                >
                  <defs>
                    <linearGradient id="manifesto-compass" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--colors-primary)" />
                      <stop offset="100%" stopColor="var(--colors-primary-on-dark)" />
                    </linearGradient>
                  </defs>
                  <polygon points="50,15 53,47 50,50 47,47" fill="url(#manifesto-compass)" opacity="0.85" />
                  <polygon points="50,85 53,53 50,50 47,53" fill="url(#manifesto-compass)" opacity="0.15" />
                  <circle cx="50" cy="50" r="5" stroke="var(--colors-primary-on-dark)" strokeWidth="0.75" />
                  <circle cx="50" cy="50" r="22" stroke="white" strokeWidth="0.5" opacity="0.08" />
                </svg>
              </div>
            </FadeIn>
          </div>

        </div>

        {/* 4. Three Editorial Operating Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4 border-t border-white/[0.08] pt-10 text-left">
          {[
            {
              num: "01 // CYBERNETICS",
              title: "Peer-to-Peer Alignment",
              desc: "We completely cut out corporate project managers, Upwork commission markups, and bureaucratic feedback layers. You talk directly with Aneek and Spandan, the creators writing the actual codebase.",
              icon: <Compass size={16} />
            },
            {
              num: "02 // PRESSURIZED CODE",
              title: "The Frontier Tech Stack",
              desc: "We exclusively code in highly-optimized frontend frameworks; React, TS, Tailwind, custom GSAP, and Three.js canvas matrices. Zero generic visual page-builders or heavy, bloated web extensions.",
              icon: <Cpu size={16} />
            },
            {
              num: "03 // STAGED MILESTONES",
              title: "Milestone Costing Security",
              desc: "Every contract operates on a transparent 3-step milestone timeline. Initiate with a $1 / ₹100 pre-payment advance, view your live stage previews, and finalize payment only upon full completion.",
              icon: <Award size={16} />
            }
          ].map((item, idx) => (
            <FadeIn key={idx} delay={0.2 + idx * 0.08} y={25} className="flex flex-col gap-3">
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[var(--colors-primary-on-dark)] font-semibold">{item.num}</span>
              <h4 className="text-lg font-semibold uppercase text-white font-display flex items-center gap-3 mt-1" style={{ letterSpacing: '-0.02em' }}>
                <span className="p-2 rounded-[var(--rounded-sm)] bg-white/5 text-[var(--colors-primary-on-dark)] inline-flex">
                  {item.icon}
                </span>
                {item.title}
              </h4>
              <p className="text-xs sm:text-sm text-[var(--colors-body-muted)] leading-relaxed font-light font-sans">
                {item.desc}
              </p>
            </FadeIn>
          ))}
        </div>

        {/* 5. Chronological Journey Timeline */}
        <div className="flex flex-col gap-10 mt-6 border-t border-white/[0.08] pt-10 text-left">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-3">
            <h4 className="text-xl sm:text-2xl font-semibold uppercase text-white font-display" style={{ letterSpacing: '-0.025em' }}>
              Chronological Journey
            </h4>
            <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--colors-primary-on-dark)]">
              // AN AUTHENTIC STUDIO RECORD
            </span>
          </div>

          <div className="relative border-l border-white/[0.08] pl-6 sm:pl-8 ml-2 sm:ml-4 flex flex-col gap-8">
            {[
              {
                year: "2024",
                stage: "THE SPARKS // THE CONVERGENCE",
                title: "Identifying the Template Fatigue",
                desc: "Aneek and Spandan first connected online in 2024. Before there was ever a studio, they were just two friends with a shared urge to rebel against a visually homogenized, flawed digital market. That mutual defiance became the foundation for what would eventually become their bespoke web studio."
              },
              {
                year: "2025",
                stage: "DISCARDING INTERMEDIARIES // P2P LOOP",
                title: "Bypassing the Freelancing Giants",
                desc: "Before building our own independent model, 2025 was all about the grind. We bypassed the usual Fiverr and Upwork hustle by joining a freelance agency. Working as freelancers, we spent the year building sites for real clients, honing our high-fidelity design skills and learning exactly how the industry worked from the inside."
              },
              {
                year: "2026",
                stage: "IMMERSIVE FRONTIERS // INDEPENDENT BOUTIQUE",
                title: "Elite Web Architectures",
                desc: "Deciding to reject standard platforms like Upwork and Fiverr, we created our direct peer-to-peer independent agency model. Powered exclusively by direct organic Instagram outreach and high-fidelity showcase pieces, we secured our first wave of ambitious startup founders."
              }
            ].map((milestone, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} y={30} className="relative group">
                {/* Timeline dot marker */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[var(--colors-surface-tile-1)] border border-white/10 flex items-center justify-center group-hover:border-[var(--colors-primary-on-dark)] transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[var(--colors-primary-on-dark)] group-hover:scale-125 transition-all" />
                </div>
                
                {/* Year Tech Tag */}
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1 mb-2">
                  <span className="text-xl sm:text-2xl font-semibold font-display text-white tracking-tight">
                    {milestone.year}
                  </span>
                  <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-[0.2em] text-[var(--colors-primary-on-dark)] font-bold">
                    {milestone.stage}
                  </span>
                </div>

                {/* Milestone Details */}
                <div className="p-5 sm:p-6 rounded-[var(--rounded-lg)] border border-white/[0.04] bg-white/[0.02] hover:bg-white/[0.04] relative overflow-hidden transition-all duration-300">
                  <h5 className="text-sm sm:text-base font-semibold uppercase text-white mb-1.5 font-display" style={{ letterSpacing: '-0.015em' }}>
                    {milestone.title}
                  </h5>
                  <p className="text-xs sm:text-sm text-[var(--colors-body-muted)] leading-relaxed font-light font-sans">
                    {milestone.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
