import React from "react";
import { Star, MessageSquare } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

interface Testimonial {
  name: string;
  role: string;
  rating: number;
  text: string;
  initials: string;
  avatarBg: string;
  avatarText: string;
  telemetryId: string;
}

const TESTIMONIALS_DATA: Testimonial[] = [
  {
    name: "Satoshi",
    role: "Founder, Team Deny",
    rating: 5,
    text: '"Endrohex delivered our unified web portal and corporate brand vectors. The seamless synchronization between design details and frontend execution completely blew our minds."',
    initials: "Si",
    avatarBg: "rgba(0, 102, 204, 0.05)",
    avatarText: "var(--colors-primary)",
    telemetryId: "REC-PORT-01",
  },
  {
    name: "Akshar Gupta",
    role: "Youtuber, AksharDraws",
    rating: 5,
    text: '"Our interactive portfolio looks spectacular. The Endrohex team possesses an incredible sense of design details, transforming static images into an artistic storytelling canvas."',
    initials: "AG",
    avatarBg: "rgba(0, 102, 204, 0.05)",
    avatarText: "var(--colors-primary)",
    telemetryId: "REC-PORT-02",
  },
  {
    name: "Aarav Raj",
    role: "Lead Architect, Roxima Group",
    rating: 5,
    text: '"Their brand video production and color-graded cinematography assets are world-class. Bypassing corporate account managers meant our video feedback loops were coordinated instantly."',
    initials: "AR",
    avatarBg: "rgba(0, 102, 204, 0.05)",
    avatarText: "var(--colors-primary)",
    telemetryId: "REC-PORT-03",
  },
  {
    name: "Nancy",
    role: "Founder, Zillie",
    rating: 5,
    text: '"The 3D product renders and custom WebGL campaign page are so cutesy and beautiful. Highly recommend their design specialists for complete creative brand rollouts."',
    initials: "Ny",
    avatarBg: "rgba(0, 102, 204, 0.05)",
    avatarText: "var(--colors-primary)",
    telemetryId: "REC-PORT-04",
  },
  {
    name: "Yashwat Mallick",
    role: "Creator, Tesseth Archive",
    rating: 5,
    text: '"Endrohex built the dark storytelling atmosphere we envisioned flawlessly. Their command over Three.js canvas systems and composited VFX assets is unparalleled."',
    initials: "YM",
    avatarBg: "rgba(0, 102, 204, 0.05)",
    avatarText: "var(--colors-primary)",
    telemetryId: "REC-PORT-05",
  },
  {
    name: "Ethan Brooks",
    role: "Product Lead, AlphaSaaS",
    rating: 5,
    text: '"Outstanding brand guidelines and logo systems. We saw immediate investor alignment after launching their brand positioning roadmap. Five stars all around."',
    initials: "EB",
    avatarBg: "rgba(0, 102, 204, 0.05)",
    avatarText: "var(--colors-primary)",
    telemetryId: "REC-PORT-06",
  },
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section
      id="testimonials"
      className="relative w-full px-4 sm:px-6 py-24 sm:py-32 bg-[var(--colors-canvas)] text-[var(--colors-ink)] overflow-hidden select-none"
    >
      {/* Caustics overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="caustics-layer" style={{ backgroundImage: 'radial-gradient(circle at 10% 80%, rgba(0, 102, 204, 0.04) 0%, transparent 45%)' }} />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-12 sm:gap-16 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-[var(--colors-hairline)] pb-6 text-left w-full mb-6">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl font-light font-mono text-[var(--colors-primary)] tracking-tight">05</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-[var(--colors-ink)] font-display" style={{ letterSpacing: '-0.025em' }}>
              Endorsements
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary)]">
            // CO-DEVELOPMENT RECORD & FOUNDER FEEDBACK
          </p>
        </div>

        {/* Handcrafted Editorial 2-Column Split Layout */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 w-full items-start">
          
          {/* Left Column: Sticky Editorial Trust Sidebar (1/3 Width) */}
          <div className="w-full lg:w-[32%] lg:sticky lg:top-28 flex flex-col gap-6 text-left">
            <div className="p-6 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] flex flex-col gap-6 shadow-[0_1px_2px_rgba(0,0,0,0.01)] relative">
              <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[var(--colors-ink-muted-80)] font-bold">// TRUST VERIFICATION</span>
              
              <div className="flex flex-col">
                <h3 className="text-2xl sm:text-3xl font-semibold text-[var(--colors-ink)] font-display uppercase tracking-wide leading-tight" style={{ letterSpacing: '-0.02em' }}>
                  Trusted by Founders
                </h3>
                <p className="text-xs sm:text-sm text-[var(--colors-ink-muted-80)] font-light font-sans mt-3 leading-relaxed">
                  Every feedback is verified from live production handovers. We prioritize uncompromised frontend execution and direct coordination.
                </p>
              </div>

              {/* Verified Metrics box */}
              <div className="border-t border-[var(--colors-hairline)] pt-5 flex flex-col gap-3">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} size={14} className="fill-[var(--colors-primary)] text-[var(--colors-primary)]" />
                  ))}
                  <span className="text-sm font-bold text-[var(--colors-ink)] font-mono ml-2">4.9/5 Rating</span>
                </div>
                <div className="text-[10px] font-mono text-[var(--colors-ink-muted-48)] uppercase tracking-wider">
                  24+ Verified Deployments
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-[var(--rounded-pill)] bg-[var(--colors-primary)] hover:bg-[var(--colors-primary-focus)] text-white text-xs font-semibold uppercase tracking-wider transition-colors shadow-sm"
              >
                <MessageSquare size={13} />
                Initiate Project
              </a>
            </div>
          </div>

          {/* Right Column: Cascading testimonials grid (2/3 Width) */}
          <div className="w-full lg:w-[68%] grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-start">
            {TESTIMONIALS_DATA.map((test, idx) => {
              // Offset second column items to create staggered handcrafted visual rhythm
              const isEven = idx % 2 === 0;
              return (
                <FadeIn
                  key={test.name}
                  delay={idx * 0.05}
                  y={30}
                  className={`w-full ${isEven ? "" : "sm:translate-y-8"}`}
                >
                  <article className="w-full p-6 sm:p-8 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:bg-[var(--colors-canvas)] hover:border-[var(--colors-primary)] transition-all duration-300 flex flex-col justify-between items-start text-left gap-6 shadow-[0_1px_2px_rgba(0,0,0,0.01)] hover:shadow-md relative group">
                    
                    {/* Review Quote on Top - Premium Editorial Look */}
                    <div className="w-full">
                      <p className="text-sm sm:text-base text-[var(--colors-ink)] font-light leading-relaxed font-sans italic">
                        {test.text}
                      </p>
                    </div>

                    {/* Highly polished Signature Block at Bottom */}
                    <div className="w-full border-t border-[var(--colors-hairline)] pt-5 flex items-center justify-between">
                      <div className="flex items-center gap-3 min-w-0">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-display shadow-inner shrink-0"
                          style={{
                            backgroundColor: "rgba(0, 102, 204, 0.05)",
                            color: 'var(--colors-primary)',
                            border: `1px solid rgba(0, 102, 204, 0.08)`,
                          }}
                        >
                          {test.initials}
                        </div>
                        <div className="flex flex-col min-w-0">
                          <h4 className="text-xs sm:text-sm font-semibold text-[var(--colors-ink)] leading-tight font-display uppercase tracking-wide truncate">
                            {test.name}
                          </h4>
                          <p className="text-[10px] text-[var(--colors-ink-muted-80)] font-light mt-0.5 truncate">{test.role}</p>
                        </div>
                      </div>
                      
                      {/* Rating Stars aligned perfectly in signature */}
                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <div className="flex items-center gap-0.5">
                          {Array.from({ length: 5 }).map((_, sIdx) => (
                            <Star
                              key={sIdx}
                              size={9}
                              className={
                                sIdx < test.rating
                                  ? "fill-[var(--colors-primary)] text-[var(--colors-primary)]"
                                  : "text-[var(--colors-hairline)]"
                              }
                            />
                          ))}
                        </div>
                        <span className="font-mono text-[8px] text-[var(--colors-ink-muted-48)] tracking-wider">
                          {test.telemetryId}
                        </span>
                      </div>
                    </div>

                  </article>
                </FadeIn>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
