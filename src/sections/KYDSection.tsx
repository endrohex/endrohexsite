import React from "react";
import { Github, ExternalLink, Linkedin, Shield } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

interface DevProfile {
  name: string;
  role: string;
  specialty: string;
  department: string;
  desc: string;
  contribution: string;
  skills: string[];
  githubUrl: string;
  portfolioUrl: string;
  linkedinUrl: string;
  gradientId: string;
  gradientColors: { start: string; end: string };
  telemetryId: string;
}

const TEAM_DATA: DevProfile[] = [
  {
    name: "Aneek Biswas",
    role: "Lead Web Architect & Manager",
    specialty: "Full-Stack Web Systems & Technical Planning",
    department: "Technical Division",
    desc: "Aneek directs technical coordination and system architecture. Specializing in highly complex fullstack architectures, reactive systems, and API design, he ensures custom brand platforms compile and load with maximum performance.",
    contribution: "Endrohex fullstack React/Next.js system architecture and client API gateways.",
    skills: [
      "React.js", "TypeScript", "Next.js", "Node.js", "Firebase", 
      "MongoDB", "HTML5", "CSS3", "JavaScript", "System Architecture",
      "Project Management", "Client Communication", "Team Coordination"
    ],
    githubUrl: "https://github.com/weblith",
    portfolioUrl: "https://aneekbio.vercel.app",
    linkedinUrl: "https://www.linkedin.com/in/aneek-biswas-180a09413/",
    gradientId: "gradient-aneek",
    gradientColors: { start: "var(--colors-primary)", end: "#0066cc" },
    telemetryId: "TEAM-SEC-01",
  },
  {
    name: "Spandan Upmanyu",
    role: "Lead Web Developer & Manager",
    specialty: "Frontend Engineering & Interactive Code",
    department: "Technical Division",
    desc: "Spandan coordinates frontend layouts and custom UI logic. Specializing in web animation frameworks, interactive canvas overlays, responsive design systems, and clean code optimization.",
    contribution: "High-performance CSS layouts, fluid web animations, and responsive system engines.",
    skills: [
      "React.js", "TypeScript", "Next.js", "Tailwind CSS", "Three.js", 
      "HTML5", "CSS3", "JavaScript", "Backend Development", "Git/GitHub",
      "Project Management", "Client Communication"
    ],
    githubUrl: "https://github.com/spanhex",
    portfolioUrl: "https://spandan-bio.vercel.app",
    linkedinUrl: "#",
    gradientId: "gradient-spandan",
    gradientColors: { start: "#00F2FE", end: "#4FACFE" },
    telemetryId: "TEAM-SEC-02",
  },
  {
    name: "Devie",
    role: "Chief Executive Officer & Creative Director",
    specialty: "3D Design, Branding & Graphic Systems",
    department: "Creative & Brand Division",
    desc: "Devie leads executive strategy and brand development at Endrohex. Specializing in custom three-dimensional modeling, graphic aesthetics, logo vector design, and unified visual brand direction.",
    contribution: "Artistic brand strategy, high-fidelity 3D modeling, and creative project roadmaps.",
    skills: [
      "3D Design", "Graphic Design", "Logo Design", "Brand Development",
      "Creative Direction", "HTML5", "CSS3", "JavaScript"
    ],
    githubUrl: "#",
    portfolioUrl: "#",
    linkedinUrl: "#",
    gradientId: "gradient-devie",
    gradientColors: { start: "#F35588", end: "#FF758C" },
    telemetryId: "TEAM-SEC-03",
  },
  {
    name: "Pranjal Halder",
    role: "Founder & Design Director",
    specialty: "VFX, Motion Graphics & Cinematic Media Production",
    department: "Production & Design Division",
    desc: "Pranjal founded Endrohex and leads design direction. Specializing in high-end computer-generated imagery, cinematic filming, visual effects compositing, color grading, motion graphics, and audio engineering.",
    contribution: "Cinematic media production, motion graphics, CGI rendering, and final visual grading.",
    skills: [
      "VFX", "Motion Graphics", "Video Editing", 
      "Audio Editing", "Photo Editing", "Design Direction", "Color Grading",
      "Cinematography", "Creative Production"
    ],
    githubUrl: "#",
    portfolioUrl: "#",
    linkedinUrl: "#",
    gradientId: "gradient-pranjal",
    gradientColors: { start: "#F5A623", end: "#F8E71C" },
    telemetryId: "TEAM-SEC-04",
  }
];

export const KYDSection: React.FC = () => {
  const AVATAR_IMAGE_URL = "https://img.magnific.com/premium-photo/png-blue-user-profile-account-icon-transparent-background_53876-959603.jpg?semt=ais_hybrid&w=740&q=80";

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
              Agency Team
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary)] self-start md:self-auto">
            // MULTIDISCIPLINARY CREATIVE BOARD
          </p>
        </div>

        {/* Profiles Layout */}
        <div className="flex flex-col gap-12 w-full">
          {TEAM_DATA.map((dev, idx) => {
            const isReverse = idx % 2 === 1;
            return (
              <FadeIn
                key={dev.name}
                delay={0.15 * idx}
                y={40}
                className={`w-full ${isReverse ? "md:flex-row-reverse" : ""}`}
              >
                <div 
                  className="group p-6 sm:p-10 rounded-[var(--rounded-lg)] w-full flex flex-col md:flex-row items-center gap-10 border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:border-[var(--colors-primary)] hover:shadow-md transition-all duration-400 relative overflow-hidden"
                >
                  {/* Spotlight backlight */}
                  <div className="absolute -left-10 -top-10 w-40 h-40 bg-[var(--colors-primary)]/5 rounded-full filter blur-[40px] pointer-events-none" />

                  {/* Premium Creative Agency Profile Frame */}
                  <div className="w-[170px] sm:w-[190px] aspect-square shrink-0 relative flex items-center justify-center pointer-events-none z-10">
                    
                    {/* Ambient glow matching team member's accent gradient */}
                    <div 
                      className="absolute inset-4 rounded-full filter blur-xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `linear-gradient(135deg, ${dev.gradientColors.start}, ${dev.gradientColors.end})`
                      }}
                    />

                    {/* Frosted backing plate */}
                    <div className="absolute inset-2 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md shadow-[inset_0_1px_3px_rgba(255,255,255,0.05),0_4px_15px_rgba(0,0,0,0.1)] pointer-events-none" />

                    {/* Outer accent ring */}
                    <div className="absolute inset-4 rounded-full border border-[var(--colors-hairline)] bg-transparent group-hover:border-[var(--colors-primary)]/30 transition-colors duration-500 pointer-events-none" />

                     {/* Inner circular portrait container with glass border */}
                    <div className="absolute inset-6 rounded-full overflow-hidden border border-white/20 shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-black/40 z-10 transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-[0_8px_30px_rgba(0,102,204,0.25)]">
                      <img 
                        src={AVATAR_IMAGE_URL} 
                        alt={dev.name} 
                        className="w-full h-full object-cover transition-all duration-500"
                      />
                    </div>

                  </div>

                  {/* Dev Security Info Content */}
                  <div className="flex-grow flex flex-col gap-4 text-left relative z-10 w-full">
                    
                    {/* Header Name */}
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[var(--colors-hairline)] pb-4">
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--colors-ink)] font-display uppercase tracking-wide flex flex-wrap items-baseline gap-x-2" style={{ letterSpacing: '-0.02em' }}>
                          {dev.name}
                          <span className="text-xs sm:text-sm font-light text-[var(--colors-primary)] font-sans normal-case tracking-normal">
                            ~ {dev.role}
                          </span>
                        </h3>
                        <div className="flex flex-wrap items-center gap-x-3 gap-y-2 mt-2 text-xs text-[var(--colors-ink-muted-80)] font-sans">
                          <span className="flex items-center gap-1 font-light border border-[var(--colors-divider-soft)] bg-[var(--colors-canvas-parchment)] px-2 py-0.5 rounded-[var(--rounded-md)] text-[10px]">
                            <span className="text-[var(--colors-primary)] font-bold uppercase tracking-wider">DEPT //</span>
                            {dev.department}
                          </span>
                          <span className="flex items-center gap-1 font-light border border-[var(--colors-divider-soft)] bg-[var(--colors-canvas-parchment)] px-2 py-0.5 rounded-[var(--rounded-md)] text-[10px]">
                            <span className="text-[var(--colors-primary)] font-bold uppercase tracking-wider">FOCUS //</span>
                            {dev.specialty}
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

                    {/* Major Contribution */}
                    <div className="flex flex-col gap-1 text-left">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-48)] font-bold">
                        CORE RESPONSIBILITY & CONTRIBUTION
                      </span>
                      <p className="text-xs font-mono text-[var(--colors-primary)] font-semibold leading-relaxed">
                        // {dev.contribution}
                      </p>
                    </div>

                    {/* Technical Arsenal badging grid (Pearl buttons look) */}
                    <div className="flex flex-col gap-2 pt-1">
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-48)] font-bold">
                        DECK-SKILLS // DIVISION EXPERTISE
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
                    {(dev.githubUrl !== "#" || dev.portfolioUrl !== "#" || dev.linkedinUrl !== "#") && (
                      <div className="flex flex-wrap items-center gap-3 pt-3 border-t border-[var(--colors-hairline)]">
                        {dev.githubUrl !== "#" && (
                          <a
                            href={dev.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--rounded-pill)] bg-[var(--colors-primary)] text-white text-xs font-semibold hover:bg-[var(--colors-primary-focus)] transition-colors shadow-sm"
                          >
                            <Github size={13} />
                            GitHub
                          </a>
                        )}
                        {dev.portfolioUrl !== "#" && (
                          <a
                            href={dev.portfolioUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] text-[var(--colors-ink-muted-80)] text-xs font-semibold hover:bg-[var(--colors-canvas-parchment)] transition-colors"
                          >
                            <ExternalLink size={13} />
                            Portfolio
                          </a>
                        )}
                        {dev.linkedinUrl !== "#" && (
                          <a
                            href={dev.linkedinUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] text-[var(--colors-ink-muted-80)] text-xs font-semibold hover:bg-[var(--colors-canvas-parchment)] transition-colors"
                          >
                            <Linkedin size={13} />
                            LinkedIn
                          </a>
                        )}
                      </div>
                    )}

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
