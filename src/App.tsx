import { useState } from "react";
import { MessageSquare, ArrowUpRight, Github, Instagram, Mail, Menu, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { KYDSection } from "./sections/KYDSection";
import { PricingSection } from "./sections/PricingSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { ContactSection } from "./sections/ContactSection";
import { ClientChatOverlay } from "./components/ClientChatOverlay";
import { ClickSpark } from "./components/ClickSpark";

function App() {
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<number | null>(null);
  const [selectedTimeline, setSelectedTimeline] = useState<string>("1 Month");

  const [isChatOpen, setIsChatOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);


  const triggerToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleSelectPlan = (
    planName: string,
    services: string[],
    budget: number | null,
    timeline: string
  ) => {
    setSelectedPlan(planName);
    setSelectedServices(services);
    setSelectedBudget(budget);
    setSelectedTimeline(timeline);

    triggerToast(`Selected: ${planName}`);

    // Smooth scroll to Contact Section after a short delay
    setTimeout(() => {
      const contactEl = document.getElementById("contact");
      if (contactEl) {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }
    }, 600);
  };

  const handleResetPlan = () => {
    setSelectedPlan(null);
    setSelectedServices([]);
    setSelectedBudget(null);
    setSelectedTimeline("1 Month");
  };

  return (
    <ClickSpark
      sparkColor="#0066cc"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative bg-[var(--colors-canvas)] text-[var(--colors-ink)] min-h-screen w-full overflow-x-clip select-none">

      {/* 1. Global Navigation (Apple Global Nav) */}
      <div className="fixed top-0 left-0 w-full h-11 bg-[var(--colors-surface-black)] z-50 flex items-center px-4 md:px-8 border-b border-white/[0.08]">
        <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-1.5 text-xs font-black text-white uppercase tracking-[0.15em] font-display">
            <span>Endrohex</span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden md:flex items-center gap-6">
            {[
              { label: "Home", href: "#home" },
              { label: "Manifesto", href: "#about" },
              { label: "Agency Team", href: "#kyd" },
              { label: "Project Tiers", href: "#pricing" },
              { label: "Showcase", href: "#projects" },
              { label: "Endorsements", href: "#testimonials" },
              { label: "FAQs", href: "#faq" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[11px] font-medium text-white/70 hover:text-white uppercase tracking-wider transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Quick Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsChatOpen(true)}
              className="px-3 py-1 rounded-[var(--rounded-sm)] bg-white/10 hover:bg-white/20 text-white text-[10px] font-bold uppercase tracking-wider transition-colors"
            >
              Comms
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-1 md:hidden rounded bg-white/5 text-white/70 hover:text-white"
              aria-label="Toggle Mobile Menu"
            >
              {isMobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. Sub-Navigation (Frosted Sticky Bar - Desktop Only) */}
      <div className="fixed top-11 left-0 w-full h-[52px] frosted-glass border-b border-[var(--colors-hairline)] z-45 hidden md:flex items-center px-4 md:px-8 shadow-sm">
        <div className="w-full max-w-5xl mx-auto flex justify-between items-center">
          <span className="text-sm font-bold text-[var(--colors-ink)] uppercase tracking-widest font-display">
            Agency Showcase
          </span>
          <div className="flex items-center gap-4">
            <span className="hidden sm:inline text-xs text-[var(--colors-ink-muted-80)] font-medium">
              Creative & Technical Agency // Direct Client Portal
            </span>
            <a
              href="#pricing"
              className="px-4 py-1.5 rounded-[var(--rounded-pill)] bg-[var(--colors-primary)] text-white text-xs font-semibold hover:bg-[var(--colors-primary-focus)] transition-colors shadow-sm"
            >
              Select Plan
            </a>
          </div>
        </div>
      </div>

      {/* Spacer for double nav (44px + 52px = 96px on desktop, 44px on mobile) */}
      <div className="h-11 md:h-[96px] w-full" />

      {/* 3. Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed top-11 left-0 w-full z-48 border-b border-white/10 bg-black/95 backdrop-blur-xl flex flex-col p-6 md:hidden gap-4 shadow-2xl text-left"
          >
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home Base", href: "#home" },
                { label: "Studio Manifesto", href: "#about" },
                { label: "Agency Team", href: "#kyd" },
                { label: "Project Tiers", href: "#pricing" },
                { label: "Agency Showcase", href: "#projects" },
                { label: "Client Endorsements", href: "#testimonials" },
                { label: "Intake Protocols", href: "#faq" },
                { label: "Intake request", href: "#contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-2 text-xs font-semibold uppercase tracking-widest text-white/70 hover:text-[var(--colors-primary-on-dark)] hover:pl-2 transition-all"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3 border-t border-white/[0.08]">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsChatOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-[var(--rounded-lg)] bg-[var(--colors-primary)] hover:bg-[var(--colors-primary-focus)] text-white text-xs font-bold uppercase tracking-wider transition-colors shadow-sm"
                >
                  <MessageSquare size={14} />
                  Open Comms Port
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. Page Content Layout Sections */}
      <main>
        <HeroSection />
        <AboutSection />
        <KYDSection />
        <PricingSection onSelectPlan={handleSelectPlan} />
        <ProjectsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection
          selectedPlan={selectedPlan}
          selectedServices={selectedServices}
          selectedBudget={selectedBudget}
          selectedTimeline={selectedTimeline}
          onResetPlan={handleResetPlan}
          onShowToast={triggerToast}
        />
      </main>

      {/* 5. Sleek Direct Client Chat Overlay Simulator */}
      <ClientChatOverlay isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />

      {/* 6. Four-Column technical Marine Footer */}
      <footer className="border-t border-white/[0.04] bg-[#02050F] px-6 py-16 sm:py-20 text-left relative z-20">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 w-full">

          {/* Brand Info */}
          <div className="flex flex-col gap-4">
            <a href="#home" className="flex items-center gap-1.5 text-base font-black text-white uppercase tracking-[0.15em] font-display">
              <span>Endrohex</span>
            </a>
            <p className="text-xs text-white/50 leading-relaxed font-light font-sans">
              A premium multidisciplinary creative agency building immersive digital experiences through web development, design, 3D, branding, and visual storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">Quick Ports</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/50 font-light font-sans">
              <li><a href="#home" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// Home Base</a></li>
              <li><a href="#about" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// Studio Manifesto</a></li>
              <li><a href="#kyd" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// Agency Team</a></li>
              <li><a href="#pricing" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// Project Tiers</a></li>
              <li><a href="#projects" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// Agency Showcase</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">Support</h4>
            <ul className="flex flex-col gap-2.5 text-xs text-white/50 font-light font-sans">
              <li><a href="#faq" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// support protocols</a></li>
              <li><a href="#contact" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// agency intake</a></li>
              <li>
                <button onClick={() => setIsChatOpen(true)} className="hover:text-[#00F2FE] hover:pl-1 transition-all text-left">
                  // Comms Overlay
                </button>
              </li>
              <li><a href="https://github.com/endrohex" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// git profiles</a></li>
              <li><a href="https://instagram.com/endrohex" target="_blank" rel="noopener noreferrer" className="hover:text-[#00F2FE] hover:pl-1 transition-all">// instagram hub</a></li>
            </ul>
          </div>

          {/* Social coordinate tags */}
          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-widest font-display">Social Links</h4>
            <div className="flex flex-col gap-3">

              <a
                href="https://github.com/endrohex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-white/60 hover:text-white font-light group"
              >
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-white/60 group-hover:text-white transition-colors">
                  <Github size={14} />
                </div>
                GitHub Profile
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="https://instagram.com/endrohex"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-xs text-white/60 hover:text-white font-light group"
              >
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-white/60 group-hover:text-white transition-colors">
                  <Instagram size={14} />
                </div>
                Instagram Outreach
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>

              <a
                href="mailto:freelance@endrohex.com"
                className="inline-flex items-center gap-2.5 text-xs text-white/60 hover:text-white font-light group break-all"
              >
                <div className="p-2 rounded-xl bg-white/[0.02] border border-white/[0.04] text-white/60 group-hover:text-white transition-colors">
                  <Mail size={14} />
                </div>
                freelance@endrohex.com
              </a>

            </div>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="max-w-5xl mx-auto border-t border-white/[0.04] mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] font-mono text-white/30 font-light">
          <div>&copy; 2026 Endrohex. All Rights Reserved.</div>
          <div>Crafted with premium React & Oceanic custom styling.</div>
        </div>
      </footer>

      {/* 7. Stateful sliding toast notification frame */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-4 rounded-2xl border border-[#00F2FE]/30 bg-[#050D1E]/95 backdrop-blur-md shadow-2xl text-[#00F2FE] text-xs font-semibold max-w-sm select-none"
          >
            <div className="p-1 rounded-lg bg-[#00F2FE]/10 text-[#00F2FE] shrink-0">
              <Check size={14} className="stroke-[3]" />
            </div>
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      </div>
    </ClickSpark>
  );
}

export default App;
