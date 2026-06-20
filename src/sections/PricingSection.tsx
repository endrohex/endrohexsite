import React, { useState } from "react";
import { Check, Flame, Calendar, DollarSign, Briefcase } from "lucide-react";
import { FadeIn } from "../components/FadeIn";

interface PricingSectionProps {
  onSelectPlan: (
    planName: string,
    services: string[],
    budget: number | null,
    timeline: string
  ) => void;
}

const PACKAGES_DATA = [
  {
    name: "Starter Package",
    tagline: "Landing Pages & Identity",
    price: "Starting at $199",
    desc: "Perfect for lightweight portfolios, product landings, or basic startup branding packages.",
    services: [
      "Landing Page Development",
      "Basic Branding",
      "Basic Logo Design"
    ],
    timeline: "Under 2 Weeks",
    tierId: "PKG-STARTER"
  },
  {
    name: "Growth Package",
    tagline: "Multi-Page Platforms & UX",
    price: "Starting at $499",
    desc: "Designed for structured multi-page platforms and complete brand identity guidelines.",
    services: [
      "Multi-Page Website",
      "Branding Package",
      "Advanced UI/UX"
    ],
    timeline: "1 Month",
    tierId: "PKG-GROWTH"
  },
  {
    name: "Premium Package",
    price: "Starting at $999",
    tagline: "High-end Custom & Motion",
    desc: "For immersive web experience rollouts, cinematic motion graphics, and full identity ecosystems.",
    services: [
      "Custom Website",
      "Branding System",
      "Motion Graphics",
      "3D Assets"
    ],
    timeline: "2 - 3 Months",
    tierId: "PKG-PREMIUM"
  }
];

const CUSTOM_SERVICES = [
  "Web Development",
  "Branding",
  "Logo Design",
  "Graphic Design",
  "Motion Graphics",
  "Video Editing",
  "Audio Editing",
  "3D Design",
  "CGI",
  "VFX",
  "Color Grading",
  "Creative Direction"
];

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  // Custom Quote States
  const [selectedServices, setSelectedServices] = useState<string[]>(["Web Development"]);
  const [budget, setBudget] = useState<number>(850);
  const [timeline, setTimeline] = useState<string>("1 Month");

  const handleSelectPackage = (pkg: typeof PACKAGES_DATA[0]) => {
    onSelectPlan(pkg.name, pkg.services, null, pkg.timeline);
  };

  const handleSelectCustomQuote = () => {
    onSelectPlan("Custom Quote", selectedServices, budget, timeline);
  };

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <section
      id="pricing"
      className="relative w-full px-6 py-24 sm:py-28 bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink)] overflow-hidden select-none"
    >
      {/* Caustics overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div
          className="caustics-layer"
          style={{
            backgroundImage:
              "radial-gradient(circle at 10% 80%, rgba(0, 102, 204, 0.02) 0%, transparent 45%)"
          }}
        />
      </div>

      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-[var(--colors-hairline)] pb-6 text-left w-full">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl font-light font-mono text-[var(--colors-primary)] tracking-tight">
              03
            </span>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-[var(--colors-ink)] font-display"
              style={{ letterSpacing: "-0.025em" }}
            >
              Project Tiers
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary)]">
            // AGENCY PACKAGES & CUSTOM ESTIMATOR
          </p>
        </div>

        {/* Pricing Cards Grid (3 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch text-left">
          {PACKAGES_DATA.map((pkg, idx) => {
            const isGrowth = pkg.name === "Growth Package";
            return (
              <FadeIn key={pkg.name} delay={0.08 * idx} y={30} className="flex w-full h-full" blur={false}>
                <article
                  className={`p-6 sm:p-7 rounded-[var(--rounded-lg)] border flex flex-col justify-between w-full h-full gap-6 shadow-sm relative overflow-hidden bg-[var(--colors-canvas)] ${
                    isGrowth
                      ? "border-2 border-[var(--colors-primary)] shadow-md"
                      : "border-[var(--colors-hairline)] hover:border-[var(--colors-primary)]"
                  }`}
                >
                  {isGrowth && (
                    <div className="absolute top-0 right-0 px-3 py-1 bg-[var(--colors-primary)] text-white text-[8px] uppercase font-mono font-black tracking-widest rounded-bl-[var(--rounded-lg)] flex items-center gap-1">
                      <Flame size={10} className="text-white" />
                      Popular
                    </div>
                  )}

                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-[var(--colors-ink)] uppercase tracking-wide font-display">
                        {pkg.name}
                      </h3>
                      <p className="text-[9px] text-[var(--colors-primary)] font-mono uppercase tracking-wider font-bold mt-0.5">
                        {pkg.tagline}
                      </p>
                      <div className="mt-4 pb-4 border-b border-[var(--colors-hairline)]">
                        <span className="text-[8px] text-[var(--colors-ink-muted-48)] font-mono block tracking-widest uppercase">
                          starting at
                        </span>
                        <span className="text-2xl sm:text-3xl font-bold text-[var(--colors-ink)] font-display">
                          {pkg.price.replace("Starting at ", "")}
                        </span>
                      </div>
                      <p className="text-xs text-[var(--colors-ink-muted-80)] font-sans mt-3 leading-relaxed font-light">
                        {pkg.desc}
                      </p>
                    </div>

                    <div className="border-t border-[var(--colors-hairline)] pt-4 flex flex-col gap-2.5">
                      <span className="text-[9px] font-mono text-[var(--colors-ink-muted-48)] uppercase tracking-widest font-bold block">
                        Included Services:
                      </span>
                      <ul className="flex flex-col gap-2 mt-1">
                        {pkg.services.map((service) => (
                          <li key={service} className="flex items-center gap-2 text-xs text-[var(--colors-ink-muted-80)] font-light">
                            <span className="w-3.5 h-3.5 rounded-full bg-[var(--colors-primary)]/10 text-[var(--colors-primary)] flex items-center justify-center shrink-0">
                              <Check size={10} className="stroke-[3]" />
                            </span>
                            <span>{service}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-[var(--colors-hairline)] pt-4 flex flex-col gap-2">
                    <button
                      onClick={() => handleSelectPackage(pkg)}
                      className={`w-full py-2.5 rounded-[var(--rounded-pill)] text-xs font-bold uppercase tracking-wider transition-colors shadow-sm ${
                        isGrowth
                          ? "bg-[var(--colors-primary)] hover:bg-[var(--colors-primary-focus)] text-white"
                          : "border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink-muted-80)]"
                      }`}
                    >
                      Choose Package
                    </button>
                    <div className="text-[8px] font-mono text-[var(--colors-ink-muted-48)] text-center">
                      IDENTIFIER // {pkg.tierId}
                    </div>
                  </div>
                </article>
              </FadeIn>
            );
          })}
        </div>

        {/* Custom Quote Planner Section */}
        <FadeIn delay={0.3} y={35} className="w-full" blur={false}>
          <div className="p-6 sm:p-10 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-canvas)] shadow-sm text-left relative overflow-hidden">
            <h3
              className="text-xl sm:text-2xl font-semibold text-[var(--colors-ink)] uppercase tracking-wide mb-2 font-display"
              style={{ letterSpacing: "-0.025em" }}
            >
              Custom Project Estimator
            </h3>
            <p className="text-xs text-[var(--colors-ink-muted-80)] font-sans mb-8 leading-relaxed font-light max-w-xl">
              Configure a tailored scope. Combine any services from our creative and engineering capabilities, adjust the budget range slider, and request a custom quotation.
            </p>

            <div className="flex flex-col lg:flex-row gap-8 w-full">
              {/* Left Side: Selectors */}
              <div className="flex-1 flex flex-col gap-6">
                {/* 1. Category Chips */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-48)] font-bold flex items-center gap-1">
                    <Briefcase size={12} />
                    Services Needed
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {CUSTOM_SERVICES.map((cat) => {
                      const isSelected = selectedServices.includes(cat);
                      return (
                        <button
                          key={cat}
                          type="button"
                          onClick={() => toggleService(cat)}
                          className={`px-4 py-2.5 rounded-[var(--rounded-pill)] text-xs font-semibold transition-all border ${
                            isSelected
                              ? "bg-white border-2 border-[var(--colors-primary)] text-[var(--colors-primary)] font-bold"
                              : "bg-white border border-[var(--colors-hairline)] text-[var(--colors-ink-muted-80)] hover:bg-[var(--colors-surface-pearl)]"
                          }`}
                        >
                          {cat}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Budget Slider */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-48)] font-bold flex items-center gap-1">
                    <DollarSign size={12} />
                    Estimated Budget Scale
                  </span>
                  <div className="flex flex-col gap-2 p-4 bg-[var(--colors-surface-pearl)] rounded-[var(--rounded-md)] border border-[var(--colors-hairline)] max-w-md">
                    <div className="flex justify-between items-baseline">
                      <span className="text-[10px] font-mono text-[var(--colors-ink-muted-48)] uppercase font-semibold">
                        Selected Budget:
                      </span>
                      <span className="text-base font-bold text-[var(--colors-primary)] font-mono">
                        ${budget} USD
                      </span>
                    </div>
                    <input
                      type="range"
                      min={20}
                      max={4000}
                      step={10}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full h-1.5 bg-[var(--colors-hairline)] rounded-lg appearance-none cursor-pointer accent-[var(--colors-primary)] mt-1"
                    />
                    <div className="flex justify-between text-[8px] font-mono text-[var(--colors-ink-muted-48)]">
                      <span>$20</span>
                      <span>$4000</span>
                    </div>
                  </div>
                </div>

                {/* 3. Timeline Chips */}
                <div className="flex flex-col gap-3">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-48)] font-bold flex items-center gap-1">
                    <Calendar size={12} />
                    Required Timeline Target
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {["Under 2 Weeks", "1 Month", "2 - 3 Months", "Ongoing Retainer"].map((time) => (
                      <button
                        key={time}
                        type="button"
                        onClick={() => setTimeline(time)}
                        className={`px-4 py-2.5 rounded-[var(--rounded-pill)] text-xs font-semibold transition-all border ${
                          timeline === time
                            ? "bg-white border-2 border-[var(--colors-primary)] text-[var(--colors-primary)] font-bold"
                            : "bg-white border border-[var(--colors-hairline)] text-[var(--colors-ink-muted-80)] hover:bg-[var(--colors-surface-pearl)]"
                        }`}
                      >
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Side: Quote Summary and Call to Action */}
              <div className="w-full lg:w-[320px] shrink-0 p-6 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] flex flex-col justify-between gap-6 shadow-sm">
                <div>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-48)] font-bold flex items-center gap-1">
                    QUALIFIER ESTIMATOR
                  </span>
                  <div className="text-2xl sm:text-3xl font-semibold text-[var(--colors-ink)] mt-2 font-display leading-tight">
                    Custom Quote
                  </div>
                  <p className="text-xs text-[var(--colors-ink-muted-80)] mt-2 leading-relaxed font-light">
                    Proceed with this configuration to pre-populate and unlock the agency intake coordinates.
                  </p>
                </div>

                <div className="border-t border-[var(--colors-hairline)] pt-4 flex flex-col gap-2.5">
                  <div className="text-[10px] font-mono text-[var(--colors-ink-muted-80)] leading-relaxed">
                    <span className="font-bold text-[var(--colors-primary)]">SERVICES:</span>{" "}
                    {selectedServices.join(", ") || "None selected"}
                    <br />
                    <span className="font-bold text-[var(--colors-primary)]">BUDGET:</span> ${budget} USD
                    <br />
                    <span className="font-bold text-[var(--colors-primary)]">TIMELINE:</span> {timeline}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={handleSelectCustomQuote}
                  disabled={selectedServices.length === 0}
                  className="w-full py-3 rounded-[var(--rounded-pill)] bg-[var(--colors-primary)] hover:bg-[var(--colors-primary-focus)] text-white font-semibold uppercase tracking-wider text-xs sm:text-sm transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continue to Contact
                </button>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
