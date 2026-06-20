import React, { useState } from "react";
import { ExternalLink, EyeOff, Globe, Palette, BookOpen, ShieldAlert, Terminal, Lock, Layout, Gift, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProjectItem {
  title: string;
  desc: string;
  category: string;
  url: string;
  isHosted: boolean;
  isBeta?: boolean;
  icon: React.ReactNode;
  telemetryId: string;
  isMobileMockup?: boolean;
  mockupText: string;
}

const CATEGORIES = [
  { id: "all", label: "All Showcase" },
  { id: "web", label: "Web Development" },
  { id: "3d", label: "3D & CGI" },
  { id: "branding", label: "Branding & Logos" },
  { id: "motion", label: "Motion Graphics & VFX" },
  { id: "video", label: "Video Production" },
  { id: "direction", label: "Creative Direction" }
];

const PROJECTS_DATA: ProjectItem[] = [
  {
    title: "Apple Website Clone",
    desc: "Apple-inspired premium, sleek landing design with cinematic transitions.",
    category: "web",
    url: "https://apple10x.pages.dev/",
    isHosted: true,
    icon: <Globe size={18} className="text-[var(--colors-primary-on-dark)]" />,
    telemetryId: "PRJ-PORT-01",
    mockupText: "APPLE CLONE // CINEMATIC UI",
  },
  {
    title: "Forsaken Archive",
    desc: "Interactive web OS containing elements of custom mystery narratives.",
    category: "web",
    url: "https://forsaken-archive.vercel.app",
    isHosted: true,
    isBeta: true,
    icon: <Lock size={18} className="text-[var(--colors-primary-on-dark)]" />,
    telemetryId: "PRJ-PORT-02",
    mockupText: "FORSAKEN // CUSTOM SYSTEM OS",
  },
  {
    title: "Roxima B",
    desc: "A professional construction company layout with structured visual branding.",
    category: "web",
    url: "https://roxima-b.pages.dev/",
    isHosted: true,
    icon: <Layout size={18} className="text-[var(--colors-primary-on-dark)]" />,
    telemetryId: "PRJ-PORT-03",
    isMobileMockup: true,
    mockupText: "ROXIMA B MOBILE",
  },
  {
    title: "AksharDraws",
    desc: "An interactive portfolio layout for a traditional visual sketching artist.",
    category: "web",
    url: "https://akshardraws.vercel.app",
    isHosted: true,
    icon: <Palette size={18} className="text-[var(--colors-primary-on-dark)]" />,
    telemetryId: "PRJ-PORT-04",
    mockupText: "ARTIST PORTFOLIO MATRIX",
  },
  {
    title: "BL Beauty Lounge",
    desc: "A premium luxury layout showcasing a salon beauty branding space.",
    category: "web",
    url: "https://blbeautyalpha.pages.dev/",
    isHosted: true,
    icon: <ShieldAlert size={18} className="text-[var(--colors-primary-on-dark)]" />,
    telemetryId: "PRJ-PORT-05",
    isMobileMockup: true,
    mockupText: "BL SALON CLIENT FRAME",
  },
  {
    title: "Zillie's Birthday Site",
    desc: "Immersive web animation experience containing dynamic layouts.",
    category: "web",
    url: "https://zillie-birthday.vercel.app",
    isHosted: true,
    icon: <Gift size={18} className="text-[var(--colors-primary-on-dark)]" />,
    telemetryId: "PRJ-PORT-06",
    mockupText: "ZILLIE // VISUAL ANIMATION",
  },
  {
    title: "Tesseth Archive",
    desc: "A novel storytelling layout providing atmospheric digital reading experiences.",
    category: "web",
    url: "https://tesseth-archive.vercel.app",
    isHosted: true,
    isBeta: true,
    icon: <BookOpen size={18} className="text-[var(--colors-primary-on-dark)]" />,
    telemetryId: "PRJ-PORT-07",
    mockupText: "TESSETH STORY HUB",
  },
  {
    title: "Tesseth Levelling",
    desc: "Solo Leveling-inspired dynamic gaming storytelling interface.",
    category: "web",
    url: "https://tesseth-levelling.vercel.app",
    isHosted: true,
    icon: <Terminal size={18} className="text-[var(--colors-primary-on-dark)]" />,
    telemetryId: "PRJ-PORT-08",
    isMobileMockup: true,
    mockupText: "TESSETH LEVEL ENGINE",
  }
];

export const ProjectsSection: React.FC = () => {
  const [activeCat, setActiveCat] = useState<string>("all");

  const filteredProjects = activeCat === "all" 
    ? PROJECTS_DATA 
    : PROJECTS_DATA.filter(p => p.category === activeCat);

  const showPlaceholder = activeCat !== "all" && activeCat !== "web";

  return (
    <section
      id="projects"
      className="relative w-full px-4 sm:px-6 py-24 sm:py-32 bg-[var(--colors-surface-tile-2)] text-[var(--colors-body-on-dark)] overflow-hidden select-none"
    >
      {/* Caustics overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <div className="caustics-layer" />
        <div className="bathymetric-grid" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-white/[0.08] pb-6 text-left w-full">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl font-light font-mono text-[var(--colors-primary-on-dark)] tracking-tight">04</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white font-display" style={{ letterSpacing: '-0.025em' }}>
              Showcase
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary-on-dark)]">
            // CONSOLE ARCHIVES & MULTIDISCIPLINARY WORK
          </p>
        </div>

        {/* Category Navigation Tabs */}
        <div className="flex flex-wrap gap-2 py-4 border-b border-white/[0.04] text-left">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCat(cat.id)}
              className={`px-4 py-2 rounded-[var(--rounded-pill)] text-xs font-semibold uppercase tracking-wider transition-all duration-300 border ${
                activeCat === cat.id
                  ? "bg-[var(--colors-primary-on-dark)] text-white border-[var(--colors-primary-on-dark)] shadow-md"
                  : "bg-white/5 text-white/60 border-white/10 hover:bg-white/10 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Handcrafted Alternating Asymmetrical Layout with AnimatePresence */}
        <div className="flex flex-col gap-16 md:gap-24 w-full mt-8">
          <AnimatePresence mode="popLayout">
            {showPlaceholder ? (
              <motion.div
                key="placeholder"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="w-full text-left"
              >
                <div className="w-full p-8 sm:p-12 md:p-16 rounded-[var(--rounded-lg)] border border-white/[0.08] bg-white/[0.02] flex flex-col items-center justify-center text-center gap-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-white/[0.01] to-transparent pointer-events-none" />
                  <div className="absolute -left-20 -top-20 w-60 h-60 bg-[var(--colors-primary-on-dark)]/5 rounded-full filter blur-[60px] pointer-events-none" />
                  
                  <div className="flex flex-col gap-2 max-w-lg">
                    <span className="text-[9px] font-mono tracking-[0.25em] text-[var(--colors-primary-on-dark)] uppercase font-semibold">
                      STATUS // PIPELINE BUILDING
                    </span>
                    <p className="text-base sm:text-lg font-light text-white leading-relaxed font-sans">
                      Our agency is currently building projects within this division. Once completed and publicly available, they will be showcased here.
                    </p>
                  </div>

                  <a 
                    href="#contact"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-[var(--rounded-pill)] bg-white/5 hover:bg-[var(--colors-primary-on-dark)]/15 border border-white/10 text-[var(--colors-primary-on-dark)] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
                  >
                    Discuss a Project
                    <ArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            ) : (
              filteredProjects.map((proj, idx) => {
                const isLeft = idx % 2 === 0;
                return (
                  <motion.div
                    key={proj.title}
                    layout
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="w-full"
                  >
                    <div 
                      className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 w-full border-b border-white/[0.08] pb-12 md:pb-16 text-left ${
                        isLeft ? "" : "md:flex-row-reverse"
                      }`}
                    >
                      
                      {/* Left Column: Project details (55% width on desktop) */}
                      <div className="w-full md:w-[55%] flex flex-col gap-4">
                        
                        {/* Header: Icon, Telemetry, Beta Label */}
                        <div className="flex items-center gap-3">
                          <div className="p-2.5 rounded-xl bg-white/5 text-[var(--colors-primary-on-dark)] border border-white/5">
                            {proj.icon}
                          </div>
                          <span className="text-[10px] font-mono text-white/35 tracking-wider uppercase">
                            {proj.telemetryId}
                          </span>
                          {proj.isBeta && (
                            <span className="px-2 py-0.5 rounded-md border border-[var(--colors-primary-on-dark)]/30 bg-[var(--colors-primary-on-dark)]/10 text-[var(--colors-primary-on-dark)] text-[9px] font-mono uppercase font-bold tracking-wider">
                              BETA-OS
                            </span>
                          )}
                        </div>

                        {/* Title */}
                        <h3 
                          className="text-2xl sm:text-3xl font-semibold text-white uppercase tracking-wide font-display mt-2 hover:text-[var(--colors-primary-on-dark)] transition-colors"
                          style={{ letterSpacing: '-0.02em' }}
                        >
                          {proj.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-[var(--colors-body-muted)] leading-relaxed font-light font-sans max-w-xl">
                          {proj.desc}
                        </p>

                        {/* Access Action CTA Button */}
                        <div className="pt-2 flex items-center">
                          {proj.isHosted ? (
                            <a
                              href={proj.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 px-5 py-2.5 sm:px-4 sm:py-2 rounded-[var(--rounded-pill)] bg-white/5 hover:bg-[var(--colors-primary-on-dark)]/15 border border-white/10 text-[var(--colors-primary-on-dark)] hover:text-white text-xs font-semibold uppercase tracking-wider transition-all"
                              aria-label={`Visit ${proj.title} project`}
                            >
                              Access Asset
                              <ExternalLink size={12} className="stroke-[2.5]" />
                            </a>
                          ) : (
                            <span className="inline-flex items-center gap-1.5 px-5 py-2.5 sm:px-4 sm:py-2 rounded-[var(--rounded-pill)] bg-white/5 border border-white/5 text-white/35 text-xs font-semibold uppercase tracking-wider cursor-not-allowed">
                              Showcase Render Only
                              <EyeOff size={12} />
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Right Column: Premium CSS Device Showcase (45% width on desktop) */}
                      <div className="w-full md:w-[45%] flex items-center justify-center relative select-none px-4 sm:px-0">
                        <motion.div 
                          className="w-full max-w-[260px] sm:max-w-[340px] flex items-center justify-center pointer-events-auto"
                          style={{ transformStyle: "preserve-3d" }}
                          whileHover={{ 
                            rotateY: isLeft ? 8 : -8, 
                            rotateX: -4, 
                            z: 15,
                            scale: 1.02 
                          }}
                          transition={{ type: "spring", stiffness: 350, damping: 25 }}
                        >
                          {proj.isMobileMockup ? (
                            /* Premium iPhone CSS Mockup Screen Bezels */
                            <div className="phone-mockup relative">
                              <div className="phone-notch" />
                              <div className="phone-screen bg-[#070e1b] flex flex-col justify-between p-5 relative text-center">
                                <div className="absolute inset-0 bathymetric-grid opacity-25" />
                                <div className="text-[6px] font-mono text-[var(--colors-primary-on-dark)] tracking-widest mt-6">
                                  AGENCY SHOWCASE
                                </div>
                                <span className="text-[11px] font-semibold text-white uppercase font-display leading-tight tracking-wide px-2">
                                  {proj.title}
                                </span>
                                <div className="text-[6px] font-mono text-white/30 mb-2">
                                  {proj.telemetryId}
                                </div>
                              </div>
                            </div>
                          ) : (
                            /* Premium MacBook CSS Mockup Screen Bezels */
                            <div className="laptop-mockup relative w-full">
                              <div className="laptop-screen">
                                <div className="w-full h-full bg-[#070e1b] flex flex-col justify-between p-5 relative text-left">
                                  <div className="absolute inset-0 bathymetric-grid opacity-25" />
                                  <div className="flex justify-between items-start relative z-10 w-full">
                                    <span className="text-[7px] font-mono text-[var(--colors-primary-on-dark)] tracking-widest">CREATIVE REEL</span>
                                    <span className="text-[6px] font-mono px-1.5 py-0.5 rounded border border-white/10 bg-white/5 text-white/50">
                                      STAGED
                                    </span>
                                  </div>
                                  <span className="text-[13px] font-semibold text-white uppercase font-display tracking-wide relative z-10 leading-tight">
                                    {proj.mockupText}
                                  </span>
                                  <div className="flex justify-between items-center w-full relative z-10 border-t border-white/[0.06] pt-2">
                                    <span className="text-[6px] font-mono text-white/30">{proj.telemetryId}</span>
                                    <div className="w-1.5 h-1.5 rounded-full bg-[var(--colors-primary-on-dark)] animate-pulse" />
                                  </div>
                                </div>
                              </div>
                              <div className="laptop-body" />
                            </div>
                          )}
                        </motion.div>
                      </div>

                    </div>
                  </motion.div>
                );
              })
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
