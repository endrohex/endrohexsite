import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "../components/FadeIn";

interface FaqItem {
  q: string;
  a: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    q: "What services does Endrohex offer as a creative agency?",
    a: "We are a full-service creative agency divided into four major sectors: Development (React, fullstack systems, WebGL), Creative (3D modeling, UI/UX, graphic & logo design), Production (VFX, CGI, cinematography, sound design), and Brand (creative direction, positioning, campaigns).",
  },
  {
    q: "How long do typical agency projects take to deliver?",
    a: "Project timelines depend on the chosen tier. Simple brand assets or custom landing pages are delivered in 1-2 weeks. Fullscale branding systems, custom database portals, CGI visualizations, and cinematic campaigns typically range from 3 to 6 weeks.",
  },
  {
    q: "Can we engage Endrohex on a long-term retainer basis?",
    a: "Yes, absolutely. We offer monthly retainer agreements for brands needing continuous development updates, ongoing CGI/3D visual output, marketing production edits, design support, or creative consultation.",
  },
  {
    q: "How do project design iterations and feedback work?",
    a: "We share real-time staging links, design boards, and video pre-renders throughout production. Our direct specialist loop ensures you collaborate directly with the creator responsible for your asset, speeding up feedback.",
  },
  {
    q: "Do you construct custom branding systems from scratch?",
    a: "Yes. We reject generic assets. We create custom vector logos, grid sheets, typography packages, color palettes, and comprehensive corporate design guidelines tailored specifically for your brand.",
  },
  {
    q: "What is your pipeline for 3D modeling, CGI, and VFX?",
    a: "We build assets from scratch using high-end modeling and simulation software, exporting optimized web-ready formats for WebGL/Three.js or producing cinematic CGI environments, composited VFX, and graded cinema clips.",
  },
  {
    q: "What technologies and production tools do you operate?",
    a: "Our codebases run on React, Next.js, TypeScript, Node.js, and Three.js canvas systems. Our visual designs, models, and CGI are rendered in industry-standard suite tools, and cinema cuts are graded using cinematic post-production platforms.",
  },
  {
    q: "How does payment and project staging operate?",
    a: "We operate on a secure 3-step milestone timeline. We initiate with a small $1 / ₹100 pre-payment advance, deliver interactive stage previews for your feedback, and authorize project launching only upon full completion and approval.",
  },
];

interface AccordionItemProps {
  faq: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
  telemetryId: string;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ faq, isOpen, onToggle, telemetryId }) => {
  return (
    <div
      className={`rounded-[var(--rounded-lg)] border transition-all duration-300 overflow-hidden relative group ${
        isOpen 
          ? "border-[var(--colors-primary)] bg-[var(--colors-canvas)] shadow-sm" 
          : "border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:border-[var(--colors-primary)]"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex justify-between items-center w-full px-6 py-5 text-left font-semibold text-[var(--colors-ink)] hover:text-[var(--colors-primary)] transition-colors relative z-10 font-display"
        aria-expanded={isOpen}
      >
        <span className="text-sm sm:text-base pr-4 flex items-center gap-3">
          <span className="font-mono text-[9px] text-[var(--colors-ink-muted-48)] tracking-wider hidden sm:inline shrink-0">
            {telemetryId}
          </span>
          {faq.q}
        </span>
        <span className={`shrink-0 p-1.5 rounded-[var(--rounded-md)] border transition-colors ${
          isOpen ? "bg-[var(--colors-primary)]/10 border-[var(--colors-primary)]/20 text-[var(--colors-primary)]" : "bg-[var(--colors-canvas-parchment)] border-[var(--colors-hairline)] text-[var(--colors-ink-muted-48)] group-hover:text-[var(--colors-ink)]"
        }`}>
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <div className="px-6 pb-6 text-xs sm:text-sm text-[var(--colors-ink-muted-80)] leading-relaxed font-light font-sans border-t border-[var(--colors-hairline)] pt-4 relative z-10">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const FAQSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const handleToggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section
      id="faq"
      className="relative w-full px-6 py-24 sm:py-28 bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink)] overflow-hidden select-none"
    >
      <div className="max-w-3xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-[var(--colors-hairline)] pb-6 text-left w-full mb-6">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl font-light font-mono text-[var(--colors-primary)] tracking-tight">06</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-[var(--colors-ink)] font-display" style={{ letterSpacing: '-0.025em' }}>
              Protocols
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary)]">
            // PRESSURIZED DECONSTRUCTION & SUPPORT FAQS
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="flex flex-col gap-4 w-full">
          {FAQ_DATA.map((faq, idx) => (
            <FadeIn
              key={idx}
              delay={idx * 0.05}
              y={20}
              className="w-full"
            >
              <AccordionItem
                faq={faq}
                isOpen={openIdx === idx}
                onToggle={() => handleToggle(idx)}
                telemetryId={`FAQ-SEC-${idx + 1}`}
              />
            </FadeIn>
          ))}
        </div>

      </div>
    </section>
  );
};
