import React from "react";
import { User, Clock, Github, ExternalLink, Linkedin, Shield } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

interface DevProfile {
  name: string;
  ageText: string;
  role: string;
  desc: string;
  skills: string[];
  githubUrl: string;
  portfolioUrl: string;
  linkedinUrl: string;
  gradientId: string;
  avatarChar: string;
  telemetryId: string;
}

const DEV_DATA: DevProfile[] = [
  {
    name: "Aneek Biswas",
    ageText: "17 Years Old, Male",
    role: "Lead Architect & System Integrator",
    desc: "Aneek is the systems architect driving Endrohex. Specializing in highly complex fullstack architectures, reactive systems, interactive graphics pipelines, and client data flows. He guarantees high performance integrations for any custom frontend or backend project.",
    skills: [
      "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", 
      "Bootstrap CSS", "Three.js", "Next.js", "TypeScript", 
      "Node.js", "Firebase", "MongoDB", "Git", "GitHub"
    ],
    githubUrl: "https://github.com/weblith",
    portfolioUrl: "https://aneekbio.vercel.app",
    linkedinUrl: "https://www.linkedin.com/in/aneek-biswas-180a09413/",
    gradientId: "gradient-aneek",
    avatarChar: "AB",
    telemetryId: "DEV-SEC-01",
  },
  {
    name: "Spandan Upmanyu",
    ageText: "15 Years Old, Male",
    role: "Lead Creative Developer & UI Specialist",
    desc: "Spandan is the designer-developer hybrid driving our visual language. Deeply committed to creative code, micro-interactions, sleek dark layout structures, and high fidelity responsive styling, he builds interactive client assets that will immediately wow visitors.",
    skills: [
      "HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS", 
      "Three.js", "Next.js", "TypeScript", "Git", "GitHub"
    ],
    githubUrl: "https://github.com/spanhex",
    portfolioUrl: "https://spandan-bio.vercel.app",
    linkedinUrl: "#",
    gradientId: "gradient-spandan",
    avatarChar: "SU",
    telemetryId: "DEV-SEC-02",
  }
];

export const KYDSection: React.FC = () => {
  return (
    <section
      id="kyd"
      className="relative w-full px-6 py-24 sm:py-28 bg-[var(--colors-canvas)] text-[var(--colors-ink)] overflow-hidden select-none"
    >
      {/* Caustics and grid overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="caustics-layer" style={{ backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(0, 102, 204, 0.04) 0%, transparent 45%)' }} />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-[var(--colors-hairline)] pb-6 text-left w-full mb-6">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl font-light font-mono text-[var(--colors-primary)] tracking-tight">02</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-[var(--colors-ink)] font-display" style={{ letterSpacing: '-0.025em' }}>
              Engineering Team
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary)] self-start md:self-auto">
            // CORE DEVELOPERS & SECURITY INTEGRATIONS
          </p>
        </div>

        {/* Profiles Layout */}
        <div className="flex flex-col gap-12 w-full">
          {DEV_DATA.map((dev, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <FadeIn
                key={dev.name}
                delay={0.15 * idx}
                y={40}
                className={`w-full ${isReverse ? "md:flex-row-reverse" : ""}`}
              >
                <div 
                  className={`p-6 sm:p-10 rounded-[var(--rounded-lg)] w-full flex flex-col md:flex-row items-center gap-10 border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:border-[var(--colors-primary)] transition-all duration-400 shadow-sm relative overflow-hidden`}
                >
                  {/* Spotlight backlight */}
                  <div className="absolute -left-10 -top-10 w-40 h-40 bg-[var(--colors-primary)]/5 rounded-full filter blur-[40px] pointer-events-none" />

                  {/* Sonar Biometric Scanner Sphere (Refactored to Apple clean look) */}
                  <div className="w-[170px] sm:w-[190px] aspect-square shrink-0 relative flex items-center justify-center pointer-events-none">
                    
                    {/* Concentric rotating swept rings */}
                    <div className="absolute inset-0 border border-[var(--colors-primary)]/10 rounded-full animate-spin" style={{ animationDuration: "20s" }} />
                    <div className="absolute inset-3 border border-dashed border-[var(--colors-primary)]/20 rounded-full animate-spin" style={{ animationDuration: "12s", animationDirection: "reverse" }} />
                    
                    {/* Radar Scanner */}
                    <svg className="w-full h-full relative z-10" viewBox="0 0 100 100" fill="none">
                      <defs>
                        <linearGradient id={dev.gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--colors-primary)" />
                          <stop offset="100%" stopColor="var(--colors-primary-on-dark)" />
                        </linearGradient>
                      </defs>
                      
                      {/* Concentric scan coords */}
                      <circle cx="50" cy="50" r="46" stroke="var(--colors-primary)" strokeWidth="0.75" strokeDasharray="3 5" opacity="0.3" />
                      <circle cx="50" cy="50" r="36" stroke="var(--colors-primary)" strokeWidth="0.5" opacity="0.15" />
                      
                      {/* Crosshairs */}
                      <line x1="50" y1="2" x2="50" y2="8" stroke="var(--colors-primary)" strokeWidth="0.75" opacity="0.4" />
                      <line x1="50" y1="92" x2="50" y2="98" stroke="var(--colors-primary)" strokeWidth="0.75" opacity="0.4" />
                      <line x1="2" y1="50" x2="8" y2="50" stroke="var(--colors-primary)" strokeWidth="0.75" opacity="0.4" />
                      <line x1="92" y1="50" x2="98" y2="50" stroke="var(--colors-primary)" strokeWidth="0.75" opacity="0.4" />

                      {/* Inner Scanner */}
                      <circle cx="50" cy="50" r="18" stroke={`url(#${dev.gradientId})`} strokeWidth="1.25" fill="rgba(0, 102, 204, 0.01)" />
                      
                      <text 
                        x="50%" 
                        y="52%" 
                        dominantBaseline="middle" 
                        textAnchor="middle" 
                        fill="var(--colors-ink)" 
                        className="text-[14px] font-semibold font-display tracking-wider"
                      >
                        {dev.avatarChar}
                      </text>
                    </svg>

                    {/* Sonar sweep overlay */}
                    <div className="sonar-scan-line" style={{ background: 'linear-gradient(90deg, transparent, var(--colors-primary), transparent)' }} />
                  </div>

                  {/* Dev Security Info Content */}
                  <div className="flex-grow flex flex-col gap-4 text-left relative z-10 w-full">
                    
                    {/* Header Name */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[var(--colors-hairline)] pb-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--colors-ink)] font-display uppercase tracking-wide" style={{ letterSpacing: '-0.02em' }}>
                          {dev.name}
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-1 text-xs text-[var(--colors-ink-muted-80)] font-sans">
                          <span className="flex items-center gap-1 font-light">
                            <User size={13} className="text-[var(--colors-primary)]" />
                            {dev.ageText}
                          </span>
                          <span className="flex items-center gap-1 font-light">
                            <Clock size={13} className="text-[var(--colors-primary)]" />
                            {dev.role}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1.5 px-3 py-1 rounded-[var(--rounded-sm)] border border-[var(--colors-hairline)] bg-[var(--colors-canvas-parchment)] text-[10px] font-mono text-[var(--colors-primary)] tracking-wider self-start sm:self-center">
                        <Shield size={12} />
                        {dev.telemetryId}
                      </div>
                    </div>

                    {/* Bio Description */}
                    <p className="text-sm text-[var(--colors-ink-muted-80)] leading-relaxed font-light font-sans">
                      {dev.desc}
                    </p>

                    {/* Technical Arsenal badging grid (Pearl buttons look) */}
                    <div className="flex flex-col gap-2">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-48)] font-semibold">
                        ARSD-DECK // TECHNICAL ARSENAL
                      </span>
                      <div className="flex flex-wrap gap-2 max-w-2xl">
                        {dev.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-3 py-1 rounded-[var(--rounded-md)] text-xs font-medium border border-[var(--colors-divider-soft)] bg-[var(--colors-surface-pearl)] text-[var(--colors-ink-muted-80)] shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:border-[var(--colors-primary)] hover:bg-[var(--colors-canvas)] hover:text-[var(--colors-primary)] transition-all duration-200"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Interactive security links */}
                    <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[var(--colors-hairline)]">
                      <a
                        href={dev.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--rounded-pill)] bg-[var(--colors-primary)] text-white text-xs font-semibold hover:bg-[var(--colors-primary-focus)] transition-colors shadow-sm"
                      >
                        <Github size={13} />
                        GitHub
                      </a>
                      <a
                        href={dev.portfolioUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] text-[var(--colors-ink-muted-80)] text-xs font-semibold hover:bg-[var(--colors-canvas-parchment)] transition-colors"
                      >
                        <ExternalLink size={13} />
                        Portfolio
                      </a>
                      <a
                        href={dev.linkedinUrl}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] text-[var(--colors-ink-muted-80)] text-xs font-semibold hover:bg-[var(--colors-canvas-parchment)] transition-colors"
                      >
                        <Linkedin size={13} />
                        LinkedIn
                      </a>
                    </div>

                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>

      </div>
    </section>
  );
};
