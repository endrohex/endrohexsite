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
    q: "How long does a website take to build?",
    a: "Simple landing pages can be developed and optimized in 3 to 7 business days. High-end interactive digital storytelling experiences or database integrations typically take between 2 to 4 weeks depending on the complexity level.",
  },
  {
    q: "Can you build completely custom design mockups?",
    a: "Yes, absolutely. We do not use cookie-cutter pre-made templates. Every project is conceptualized from scratch to fit your exact brand styling, utilizing custom styled assets, WebGL matrices, or React layout parameters.",
  },
  {
    q: "Do you provide web hosting support?",
    a: "Yes. We help configure hosting on state-of-the-art serverless hosting networks (like Vercel, Netlify, Cloudflare, or GitHub Pages) and assist in linking your custom domain records completely free of charge.",
  },
  {
    q: "Can I request revisions during the build?",
    a: "Yes, we offer multiple iteration rounds. We share developmental staging URLs throughout the timeline, allowing you to preview live code iterations and provide direct structural feedback.",
  },
  {
    q: "Can you build custom backend database systems?",
    a: "Yes, we possess solid fullstack competencies. We build custom API layers, database systems (MongoDB, PostgreSQL), secure authentication pipelines (Firebase, Supabase, JWT), and administrative dashboard panels.",
  },
  {
    q: "Do you build mobile responsive websites?",
    a: "Responsiveness is not an afterthought for us. Every single grid, card, navigation header, and container is engineered with mobile-first CSS logic to ensure a stunning layout across all smartphones, tablets, and wide screens.",
  },
  {
    q: "What technologies do you use?",
    a: "We operate with modern development languages including React.js, Next.js, HTML5, Vanilla CSS, TypeScript, Node.js, Firebase, MongoDB, and Three.js.",
  },
  {
    q: "How do payments work?",
    a: "We work with standard milestones ($1 / ₹100 pre-payment (advance payment) for confirming the project, 50% payment upon a successful delivery of the project, last 50% payment upon the launch of the project). We accept global transactions via cryptocurrency, international UPI payments, and vouchers, we will work on paypal, cc / dc payments and direct bank transfers in the upcoming future.",
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
