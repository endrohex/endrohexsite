import React from "react";
import { Mail, Instagram, Compass } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { LockableContactForm } from "../components/LockableContactForm";

interface ContactSectionProps {
  selectedPlan: string | null;
  selectedServices: string[];
  selectedBudget: number | null;
  selectedTimeline: string;
  onResetPlan: () => void;
  onShowToast: (msg: string) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  selectedPlan,
  selectedServices,
  selectedBudget,
  selectedTimeline,
  onResetPlan,
  onShowToast,
}) => {
  return (
    <section
      id="contact"
      className="relative w-full px-6 py-24 sm:py-28 bg-[var(--colors-surface-black)] text-[var(--colors-body-on-dark)] overflow-hidden select-none"
    >
      {/* Caustics overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="caustics-layer" />
        <div className="bathymetric-grid" />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-white/[0.08] pb-6 text-left w-full mb-6">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl font-light font-mono text-[var(--colors-primary-on-dark)] tracking-tight">07</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-white font-display" style={{ letterSpacing: '-0.025em' }}>
              Initiate
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary-on-dark)]">
            // DECOMPRESSION INTAKE & SECURE TRANSMISSION
          </p>
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
          
          {/* Left Column: Sidebar details */}
          <div className="lg:col-span-4 flex flex-col gap-6 w-full text-left">
            
            {/* Sidebar Details Container */}
            <FadeIn delay={0.3} y={20} className="w-full">
              <div className="p-6 rounded-[var(--rounded-lg)] border border-white/[0.08] bg-white/[0.02] flex flex-col gap-6 shadow-sm">
                
                {/* Email Address */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-[var(--rounded-md)] bg-[var(--colors-primary)]/10 text-[var(--colors-primary-on-dark)]">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-1">Send Email</div>
                    <a href="mailto:freelance@endrohex.com" className="text-sm sm:text-base font-bold text-white hover:text-[var(--colors-primary-on-dark)] transition-colors break-all">
                      freelance@endrohex.com
                    </a>
                  </div>
                </div>

                {/* Instagram Handle */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-[var(--rounded-md)] bg-[var(--colors-primary)]/10 text-[var(--colors-primary-on-dark)]">
                    <Instagram size={18} />
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest text-white/40 font-semibold mb-1">Follow Instagram</div>
                    <a href="https://instagram.com/endrohex" target="_blank" rel="noopener noreferrer" className="text-sm sm:text-base font-bold text-white hover:text-[var(--colors-primary-on-dark)] transition-colors">
                      @endrohex
                    </a>
                  </div>
                </div>

              </div>
            </FadeIn>

            {/* Why Endrohex container */}
            <FadeIn delay={0.4} y={20} className="w-full">
              <div className="p-6 rounded-[var(--rounded-lg)] border border-white/[0.08] bg-white/[0.02] flex flex-col gap-3 shadow-sm">
                <h3 className="text-sm uppercase tracking-wider text-white font-semibold flex items-center gap-2 font-display">
                  <Compass size={14} className="text-[var(--colors-primary-on-dark)]" />
                  Why Endrohex?
                </h3>
                <p className="text-xs sm:text-sm text-[var(--colors-body-muted)] leading-relaxed font-light font-sans">
                  Direct coordination delivers unified technology, design, and video production without standard agency overhead. We integrate fullstack architectures, 3D spatial modeling, CGI, visual effects, and cinematography straight to your brand.
                </p>
              </div>
            </FadeIn>

          </div>

          {/* Right Column: Lockable Form container */}
          <div className="lg:col-span-8 w-full">
            <FadeIn delay={0.35} y={30} className="w-full">
              <LockableContactForm
                selectedPlan={selectedPlan}
                selectedServices={selectedServices}
                selectedBudget={selectedBudget}
                selectedTimeline={selectedTimeline}
                onResetPlan={onResetPlan}
                onShowToast={onShowToast}
              />
            </FadeIn>
          </div>

        </div>

      </div>
    </section>
  );
};
