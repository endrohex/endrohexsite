import React from "react";
import { FadeIn } from "../components/FadeIn";

interface ServiceDetail {
  name: string;
  desc: string;
}

interface DivisionItem {
  num: string;
  name: string;
  tagline: string;
  services: ServiceDetail[];
}

const DIVISIONS_DATA: DivisionItem[] = [
  {
    num: "01",
    name: "Development Division",
    tagline: "High-performance code meeting premium visual architectures.",
    services: [
      { name: "Web Development", desc: "Interactive applications, serverless systems, and custom database frameworks coded cleanly in React, TypeScript, and Node.js." },
      { name: "Backend Systems", desc: "Scalable API architectures, secure authentication pipelines, and database solutions (MongoDB, PostgreSQL) for data orchestration." },
      { name: "WebGL Integrations", desc: "Immersive 3D interactive graphics, custom canvas animations, and WebGL matrices driven by Three.js and custom shader code." }
    ]
  },
  {
    num: "02",
    name: "Creative Division",
    tagline: "Stunning aesthetic languages custom crafted from the ground up.",
    services: [
      { name: "3D Design", desc: "Creation of bespoke three-dimensional visual assets, environment models, and organic spatial structures for digital brands." },
      { name: "UI/UX Design", desc: "Cinematic web interfaces, micro-interaction models, high-fidelity wireframes, and responsive user flows prioritizing execution metrics." },
      { name: "Graphic & Logo Design", desc: "Perfect vector logotypes, custom iconography packs, and visual assets that capture your brand's unique ethos." }
    ]
  },
  {
    num: "03",
    name: "Production Division",
    tagline: "Cinematic visual assets built for high-impact engagement.",
    services: [
      { name: "VFX", desc: "High-end visual effects, green screen compositing, matte painting, and simulation physics integrated seamlessly into project video feeds." },
      { name: "CGI", desc: "Computer-generated imagery, architectural visualization, dynamic photorealistic renders, and lighting simulation pipelines." },
      { name: "Video & Audio Editing", desc: "Cinematic pacing, customized soundscapes, post-production mixing, and color grading tailored to promotional video materials." }
    ]
  },
  {
    num: "04",
    name: "Brand Division",
    tagline: "Constructing cohesive brand identities for global reach.",
    services: [
      { name: "Creative Direction", desc: "Guiding the overall artistic design strategy, cinematic tone, structural styling, and brand vision to ensure consistent execution." },
      { name: "Brand Development", desc: "Establishing corporate positioning guidelines, target audience assets, color palettes, and full brand guideline documentation." },
      { name: "Content Strategy", desc: "Designing high-fidelity promotional, digital, and media content pipelines designed to capture and hold visitor engagement." }
    ]
  }
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="relative bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-20 select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col">
        {/* Services Heading */}
        <div className="mb-16 sm:mb-20 md:mb-28 text-center">
          <FadeIn delay={0} y={40}>
            <h2
              className="text-[#0C0C0C] font-black uppercase centered leading-none tracking-tight"
              style={{ fontSize: "clamp(3rem, 11vw, 140px)" }}
            >
              Services
            </h2>
            <p className="text-xs sm:text-sm font-mono text-[#0C0C0C]/60 uppercase tracking-[0.25em] mt-4">
              // Bespoke Creative & Technical Divisions
            </p>
          </FadeIn>
        </div>

        {/* Divisions Stack */}
        <div className="border-t border-[rgba(12,12,12,0.15)] flex flex-col w-full">
          {DIVISIONS_DATA.map((division, idx) => (
            <FadeIn
              key={division.name}
              delay={idx * 0.1}
              y={30}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 py-12 sm:py-16 border-b border-[rgba(12,12,12,0.15)] w-full text-left"
            >
              {/* Left Column: Num & Name (40% width on desktop) */}
              <div className="lg:w-[40%] flex flex-col gap-3 shrink-0">
                <div
                  className="font-black text-[#0C0C0C] leading-none"
                  style={{ fontSize: "clamp(2.5rem, 8vw, 100px)" }}
                >
                  {division.num}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-[#0C0C0C] font-display mt-2">
                  {division.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#0C0C0C]/65 font-light leading-relaxed max-w-sm">
                  {division.tagline}
                </p>
              </div>

              {/* Right Column: List of sub-services (60% width on desktop) */}
              <div className="lg:w-[60%] flex flex-col gap-8">
                {division.services.map((sub) => (
                  <div key={sub.name} className="flex flex-col gap-1.5 border-l-2 border-[#0C0C0C]/10 pl-4 hover:border-[var(--colors-primary)] transition-colors duration-300">
                    <h4 className="text-sm sm:text-base font-semibold uppercase tracking-wider text-[#0C0C0C]">
                      {sub.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-[#0C0C0C]/60 font-light leading-relaxed">
                      {sub.desc}
                    </p>
                  </div>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};
