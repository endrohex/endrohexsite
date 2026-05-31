import React, { useState } from "react";
import { Check, Flame, Shield } from "lucide-react";
import { FadeIn } from "../components/FadeIn";
import { InteractiveQuoteBuilder } from "../components/InteractiveQuoteBuilder";

interface PricingSectionProps {
  onSelectPlan: (planName: string, priceUSD: number | string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  const [addonP1, setAddonP1] = useState(false);
  const [addonP2, setAddonP2] = useState(false);
  const [addonP3, setAddonP3] = useState(false);

  const priceP1 = addonP1 ? 25 : 20;
  const priceP2 = addonP2 ? 55 : 50;
  const priceP3 = addonP3 ? 105 : 100;

  const handleSelectPackage = (planName: string, basePrice: number | string, addonChecked?: boolean) => {
    let finalPrice = basePrice;
    let label = planName;
    if (addonChecked && typeof basePrice === "number") {
      finalPrice = basePrice + 5;
      label += " (+ Contact Form)";
    }
    onSelectPlan(label, finalPrice);
  };

  return (
    <section
      id="pricing"
      className="relative w-full px-6 py-24 sm:py-28 bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink)] overflow-hidden select-none"
    >
      <div className="max-w-5xl mx-auto flex flex-col gap-16 relative z-10">
        
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-6 border-b border-[var(--colors-hairline)] pb-6 text-left w-full">
          <div className="flex items-baseline gap-4">
            <span className="text-4xl sm:text-5xl font-light font-mono text-[var(--colors-primary)] tracking-tight">03</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold uppercase tracking-tight text-[var(--colors-ink)] font-display" style={{ letterSpacing: '-0.025em' }}>
              Milestone Costs
            </h2>
          </div>
          <p className="text-[10px] font-mono uppercase tracking-[0.25em] text-[var(--colors-primary)]">
            // TRANSPARENT ARCHITECT COSTING
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch text-left">
          
          {/* Card 1: Simple Landing Page */}
          <FadeIn delay={0.1} y={30} className="flex w-full h-full" blur={false}>
            <article className="p-6 sm:p-8 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-canvas)] hover:border-[var(--colors-primary)] transition-all duration-300 flex flex-col justify-between w-full h-full gap-6 shadow-sm relative overflow-hidden">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--colors-ink)] uppercase tracking-wide font-display">Simple Landing Page</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[var(--colors-ink)]">${priceP1}</span>
                  <div className="text-xs text-[var(--colors-ink-muted-80)] font-mono mt-1">
                    ₹{(priceP1 * 100).toLocaleString("en-IN")} INR Base
                  </div>
                </div>
                <ul className="flex flex-col gap-3 mt-6 text-xs sm:text-sm text-[var(--colors-ink-muted-80)]">
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Single dynamic website page
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Tailored for quick portfolio assets
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Premium HTML, CSS, JavaScript
                  </li>
                </ul>
              </div>

              <div>
                {/* Custom Checkbox as Configurator Option Chip */}
                <label 
                  htmlFor="addon-p1" 
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-[var(--rounded-pill)] border cursor-pointer select-none transition-all mb-4 ${
                    addonP1 
                      ? "bg-white border-2 border-[var(--colors-primary)] text-[var(--colors-primary)] font-semibold" 
                      : "bg-[var(--colors-canvas-parchment)] border border-[var(--colors-hairline)] text-[var(--colors-ink-muted-80)] hover:bg-[var(--colors-surface-pearl)]"
                  }`}
                >
                  <input
                    type="checkbox"
                    id="addon-p1"
                    checked={addonP1}
                    onChange={(e) => setAddonP1(e.target.checked)}
                    className="w-4 h-4 rounded border-[var(--colors-hairline)] bg-white text-[var(--colors-primary)] focus:ring-[var(--colors-primary-focus)] cursor-pointer"
                  />
                  <div className="text-xs flex justify-between w-full">
                    <span>Contact Form Add-on</span>
                    <span>+$5 (₹500)</span>
                  </div>
                </label>
                
                <button
                  onClick={() => handleSelectPackage("Plan 1 - Simple Landing Page", 20, addonP1)}
                  className="w-full py-2.5 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink-muted-80)] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  Select Package
                </button>
              </div>
            </article>
          </FadeIn>

          {/* Card 2: Dynamic Frontend */}
          <FadeIn delay={0.15} y={30} className="flex w-full h-full" blur={false}>
            <article className="p-6 sm:p-8 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-canvas)] hover:border-[var(--colors-primary)] transition-all duration-300 flex flex-col justify-between w-full h-full gap-6 shadow-sm relative overflow-hidden">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--colors-ink)] uppercase tracking-wide font-display">Dynamic Frontend</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[var(--colors-ink)]">${priceP2}</span>
                  <div className="text-xs text-[var(--colors-ink-muted-80)] font-mono mt-1">
                    ₹{(priceP2 * 100).toLocaleString("en-IN")} INR Base
                  </div>
                </div>
                <ul className="flex flex-col gap-3 mt-6 text-xs sm:text-sm text-[var(--colors-ink-muted-80)]">
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Custom modern architecture
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Accessibility (ARIA) focused
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Built with React & Tailwind CSS
                  </li>
                </ul>
              </div>

              <div>
                {/* Custom Checkbox as Configurator Option Chip */}
                <label 
                  htmlFor="addon-p2" 
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-[var(--rounded-pill)] border cursor-pointer select-none transition-all mb-4 ${
                    addonP2 
                      ? "bg-white border-2 border-[var(--colors-primary)] text-[var(--colors-primary)] font-semibold" 
                      : "bg-[var(--colors-canvas-parchment)] border border-[var(--colors-hairline)] text-[var(--colors-ink-muted-80)] hover:bg-[var(--colors-surface-pearl)]"
                  }`}
                >
                  <input
                    type="checkbox"
                    id="addon-p2"
                    checked={addonP2}
                    onChange={(e) => setAddonP2(e.target.checked)}
                    className="w-4 h-4 rounded border-[var(--colors-hairline)] bg-white text-[var(--colors-primary)] focus:ring-[var(--colors-primary-focus)] cursor-pointer"
                  />
                  <div className="text-xs flex justify-between w-full">
                    <span>Contact Form Add-on</span>
                    <span>+$5 (₹500)</span>
                  </div>
                </label>

                <button
                  onClick={() => handleSelectPackage("Plan 2 - Dynamic Frontend Website", 50, addonP2)}
                  className="w-full py-2.5 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink-muted-80)] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  Select Package
                </button>
              </div>
            </article>
          </FadeIn>

          {/* Card 3: Interactive Experience - Popular / Best tier! */}
          <FadeIn delay={0.2} y={30} className="flex w-full h-full" blur={false}>
            <article className="p-6 sm:p-8 rounded-[var(--rounded-lg)] relative overflow-hidden border-2 border-[var(--colors-primary)] bg-[var(--colors-canvas)] flex flex-col justify-between w-full h-full gap-6 shadow-sm">
              {/* Popular Tag */}
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[var(--colors-primary)] text-white text-[9px] uppercase font-mono font-black tracking-widest rounded-bl-[var(--rounded-lg)] flex items-center gap-1">
                <Flame size={12} className="text-white" />
                Popular
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--colors-ink)] uppercase tracking-wide font-display">Interactive Experience</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[var(--colors-ink)]">${priceP3}</span>
                  <div className="text-xs text-[var(--colors-ink-muted-80)] font-mono mt-1">
                    ₹{(priceP3 * 100).toLocaleString("en-IN")} INR Base
                  </div>
                </div>
                <ul className="flex flex-col gap-3 mt-6 text-xs sm:text-sm text-[var(--colors-ink-muted-80)]">
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Immersive 2D & Parallax animations
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Advanced performance audit
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    React, TS, Three.js, Tailwind
                  </li>
                </ul>
              </div>

              <div>
                {/* Custom Checkbox as Configurator Option Chip */}
                <label 
                  htmlFor="addon-p3" 
                  className={`flex items-center gap-3 px-4 py-2.5 rounded-[var(--rounded-pill)] border cursor-pointer select-none transition-all mb-4 ${
                    addonP3 
                      ? "bg-white border-2 border-[var(--colors-primary)] text-[var(--colors-primary)] font-semibold" 
                      : "bg-[var(--colors-canvas-parchment)] border border-[var(--colors-hairline)] text-[var(--colors-ink-muted-80)] hover:bg-[var(--colors-surface-pearl)]"
                  }`}
                >
                  <input
                    type="checkbox"
                    id="addon-p3"
                    checked={addonP3}
                    onChange={(e) => setAddonP3(e.target.checked)}
                    className="w-4 h-4 rounded border-[var(--colors-hairline)] bg-white text-[var(--colors-primary)] focus:ring-[var(--colors-primary-focus)] cursor-pointer"
                  />
                  <div className="text-xs flex justify-between w-full">
                    <span>Contact Form Add-on</span>
                    <span>+$5 (₹500)</span>
                  </div>
                </label>

                <button
                  onClick={() => handleSelectPackage("Plan 3 - Interactive Experience", 100, addonP3)}
                  className="w-full py-2.5 rounded-[var(--rounded-pill)] bg-[var(--colors-primary)] hover:bg-[var(--colors-primary-focus)] text-white text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors shadow-sm"
                >
                  Select Package
                </button>
              </div>
            </article>
          </FadeIn>

          {/* Card 4: Luxury Experience */}
          <FadeIn delay={0.25} y={30} className="flex w-full h-full" blur={false}>
            <article className="p-6 sm:p-8 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-canvas)] hover:border-[var(--colors-primary)] transition-all duration-300 flex flex-col justify-between w-full h-full gap-6 shadow-sm relative overflow-hidden">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--colors-ink)] uppercase tracking-wide font-display">Luxury Experience</h3>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[var(--colors-ink)]">$150</span>
                  <div className="text-xs text-[var(--colors-ink-muted-80)] font-mono mt-1">
                    ₹15,000 INR Complete
                  </div>
                </div>
                <ul className="flex flex-col gap-3 mt-6 text-xs sm:text-sm text-[var(--colors-ink-muted-80)]">
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Full cinematic storytelling layout
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Contact submission form included
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    React, TS, Three.js, Firebase
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-[var(--rounded-pill)] bg-emerald-50 border border-emerald-100 mb-4 text-xs font-semibold text-emerald-600">
                  <Shield size={14} />
                  Contact Form Included FREE
                </div>
                <button
                  onClick={() => handleSelectPackage("Plan 4 - Luxury Premium Experience", 150)}
                  className="w-full py-2.5 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink-muted-80)] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  Select Package
                </button>
              </div>
            </article>
          </FadeIn>

          {/* Card 5: Custom Backend */}
          <FadeIn delay={0.3} y={30} className="flex w-full h-full" blur={false}>
            <article className="p-6 sm:p-8 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-canvas)] hover:border-[var(--colors-primary)] transition-all duration-300 flex flex-col justify-between w-full h-full gap-6 shadow-sm relative overflow-hidden">
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-[var(--colors-ink)] uppercase tracking-wide font-display">Custom Backend</h3>
                <div className="mt-4">
                  <span className="text-3xl font-bold text-[var(--colors-ink)]">Contact Us</span>
                  <div className="text-xs text-[var(--colors-ink-muted-80)] font-mono mt-1">
                    Bespoke Estimate
                  </div>
                </div>
                <ul className="flex flex-col gap-3 mt-6 text-xs sm:text-sm text-[var(--colors-ink-muted-80)]">
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Full scalable database engine
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    APIs & user authorization systems
                  </li>
                  <li className="flex items-center gap-2.5 font-light">
                    <Check size={14} className="text-[var(--colors-primary)] shrink-0" />
                    Fully secure Node, Express, Mongo
                  </li>
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-2 px-4 py-2 rounded-[var(--rounded-pill)] bg-emerald-50 border border-emerald-100 mb-4 text-xs font-semibold text-emerald-600">
                  <Shield size={14} />
                  Contact Form Included FREE
                </div>
                <button
                  onClick={() => handleSelectPackage("Plan 5 - Custom Backend Solution", "Custom")}
                  className="w-full py-2.5 rounded-[var(--rounded-pill)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] hover:bg-[var(--colors-canvas-parchment)] text-[var(--colors-ink-muted-80)] text-xs sm:text-sm font-semibold uppercase tracking-wider transition-colors"
                >
                  Select Package
                </button>
              </div>
            </article>
          </FadeIn>

        </div>

        {/* Plan 6: Custom Quote Builder Section (Apple Configurator look) */}
        <FadeIn delay={0.35} y={35} className="w-full" blur={false}>
          <div className="p-6 sm:p-10 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-canvas)] shadow-sm relative overflow-hidden">
            <h3 className="text-xl sm:text-2xl font-semibold text-[var(--colors-ink)] uppercase tracking-wide mb-6 text-center lg:text-left font-display" style={{ letterSpacing: '-0.02em' }}>
              Custom Quote Architect
            </h3>
            <InteractiveQuoteBuilder onSelectPlan={(lbl, usd) => onSelectPlan(lbl, usd)} />
          </div>
        </FadeIn>

      </div>
    </section>
  );
};
