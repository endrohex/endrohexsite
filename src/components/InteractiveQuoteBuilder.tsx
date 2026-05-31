import React, { useState, useEffect } from "react";

interface AddonOption {
  id: string;
  label: string;
  cost: number;
}

const ADDON_OPTIONS: AddonOption[] = [
  { id: "api", label: "API Integration (+$40)", cost: 40 },
  { id: "backend", label: "Backend complexity (+$80)", cost: 80 },
  { id: "animation", label: "High Animation level (+$50)", cost: 50 },
  { id: "design", label: "Design quality (+$30)", cost: 30 },
  { id: "cms", label: "CMS requirement (+$60)", cost: 60 },
  { id: "auth", label: "Authentication (+$50)", cost: 50 },
  { id: "admin", label: "Admin panel (+$75)", cost: 75 },
  { id: "hosting", label: "Hosting support (+$25)", cost: 25 },
];

interface InteractiveQuoteBuilderProps {
  onSelectPlan: (planName: string, priceUSD: number | string) => void;
}

export const InteractiveQuoteBuilder: React.FC<InteractiveQuoteBuilderProps> = ({ onSelectPlan }) => {
  const [complexity, setComplexity] = useState(1);
  const [selectedAddons, setSelectedAddons] = useState<string[]>([]);
  const [usdPrice, setUsdPrice] = useState(0.15);
  const [requirements, setRequirements] = useState("");
  const [budget, setBudget] = useState("");

  useEffect(() => {
    let total = complexity * 0.15;
    selectedAddons.forEach((addonId) => {
      const addon = ADDON_OPTIONS.find((o) => o.id === addonId);
      if (addon) total += addon.cost;
    });
    setUsdPrice(total);
  }, [complexity, selectedAddons]);

  const handleCheckboxChange = (id: string) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleLockQuote = () => {
    let label = `Custom Quote Builder (Complexity: ${complexity})`;
    if (budget.trim()) {
      label += ` | Client Budget: ${budget.trim()}`;
    }
    onSelectPlan(label, usdPrice.toFixed(2));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 text-left w-full mt-4 select-none px-2 sm:px-0">
      {/* Left side - Calculator slider & features */}
      <div className="flex-1 flex flex-col gap-6">
        
        {/* Slider */}
        <div className="flex flex-col gap-3">
          <div className="flex justify-between items-center text-sm font-semibold text-[var(--colors-ink)] font-display">
            <label htmlFor="complexity-range">Project Architectural Complexity</label>
            <span className="text-[var(--colors-primary)] font-bold text-lg font-mono">{complexity}</span>
          </div>
          <input
            type="range"
            id="complexity-range"
            min="1"
            max="1000"
            value={complexity}
            onChange={(e) => setComplexity(parseInt(e.target.value))}
            className="w-full h-1 bg-[var(--colors-hairline)] rounded-lg appearance-none cursor-pointer accent-[var(--colors-primary)] outline-none"
            aria-label="Project Architectural Complexity scale"
          />
        </div>

        {/* Checkbox grid (Apple Configurator Option Chips) */}
        <div className="flex flex-col gap-3">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-80)] font-bold">Select Custom Engineering Features</span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {ADDON_OPTIONS.map((opt) => {
              const isChecked = selectedAddons.includes(opt.id);
              return (
                <label
                  key={opt.id}
                  className={`flex items-center gap-3 px-4 py-3 rounded-[var(--rounded-pill)] border cursor-pointer select-none transition-all ${
                    isChecked
                      ? "bg-white border-2 border-[var(--colors-primary)] text-[var(--colors-primary)] shadow-sm font-semibold"
                      : "bg-white border border-[var(--colors-hairline)] text-[var(--colors-ink-muted-80)] hover:bg-[var(--colors-canvas-parchment)]"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => handleCheckboxChange(opt.id)}
                    className="w-4 h-4 rounded border-[var(--colors-hairline)] bg-white text-[var(--colors-primary)] focus:ring-[var(--colors-primary-focus)] cursor-pointer"
                  />
                  <span className="text-xs sm:text-sm">{opt.label}</span>
                </label>
              );
            })}
          </div>
        </div>

      </div>

      {/* Right side - Results and lock quote */}
      <div className="w-full lg:w-[320px] shrink-0 p-6 rounded-[var(--rounded-lg)] border border-[var(--colors-hairline)] bg-[var(--colors-surface-pearl)] flex flex-col justify-between gap-6 shadow-sm">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--colors-ink-muted-80)] font-bold">Estimated Investment</span>
          <div className="text-3xl sm:text-4xl font-semibold text-[var(--colors-ink)] mt-1 font-display">
            ${usdPrice.toFixed(2)}
          </div>
          <div className="text-sm text-[var(--colors-ink-muted-80)] font-mono font-medium mt-0.5">
            ₹{(usdPrice * 100).toLocaleString("en-IN", { minimumFractionDigits: 2 })} INR
          </div>
        </div>

        {/* Prevent Auto-Zoom (Font-Size must be at least 16px - text-base) */}
        <div className="flex flex-col gap-3">
          <textarea
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
            className="w-full bg-white border border-[var(--colors-hairline)] rounded-[var(--rounded-lg)] p-3 text-base text-[var(--colors-ink)] placeholder-[var(--colors-ink-muted-48)] outline-none focus:border-[var(--colors-primary)] transition-colors resize-none font-light font-sans"
            rows={3}
            placeholder="Describe your project requirements..."
          />
          <input
            type="text"
            value={budget}
            onChange={(e) => setBudget(e.target.value)}
            className="w-full bg-white border border-[var(--colors-hairline)] rounded-[var(--rounded-pill)] px-4 py-2.5 text-base text-[var(--colors-ink)] placeholder-[var(--colors-ink-muted-48)] outline-none focus:border-[var(--colors-primary)] transition-colors font-light font-sans"
            placeholder="Budget willing to pay (e.g. $500)"
          />
        </div>

        <button
          onClick={handleLockQuote}
          className="w-full py-3 rounded-[var(--rounded-pill)] bg-[var(--colors-primary)] hover:bg-[var(--colors-primary-focus)] text-white font-semibold uppercase tracking-wider text-xs sm:text-sm transition-colors shadow-sm"
        >
          Lock Quote & Confirm
        </button>
      </div>
    </div>
  );
};
