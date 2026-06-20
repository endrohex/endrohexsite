import React, { useState, useEffect } from "react";
import { Lock, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface LockableContactFormProps {
  selectedPlan: string | null;
  selectedServices: string[];
  selectedBudget: number | null;
  selectedTimeline: string;
  onResetPlan: () => void;
  onShowToast: (msg: string) => void;
}

const TIMELINES = [
  "Under 2 Weeks",
  "1 Month",
  "2 - 3 Months",
  "Ongoing Retainer"
];

export const LockableContactForm: React.FC<LockableContactFormProps> = ({
  selectedPlan,
  selectedServices: propsSelectedServices,
  selectedBudget: propsSelectedBudget,
  selectedTimeline: propsSelectedTimeline,
  onResetPlan,
  onShowToast,
}) => {
  // Input fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectTimeline, setProjectTimeline] = useState("Under 2 Weeks");
  const [description, setDescription] = useState("");
  const [additionalNotes, setAdditionalNotes] = useState("");

  const isLocked = !selectedPlan;

  // Pre-populate timeline from pricing page selection
  useEffect(() => {
    if (selectedPlan) {
      setProjectTimeline(propsSelectedTimeline);
    }
  }, [selectedPlan, propsSelectedTimeline]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;

    const templateParams = {
      name: name,
      email: email,
      company_name: companyName.trim() ? companyName : "N/A",
      project_title: projectTitle.trim() ? projectTitle : "N/A",
      selected_package: selectedPlan || "N/A",
      selected_services: propsSelectedServices.join(", ") || "None",
      budget_value: propsSelectedBudget !== null ? `$${propsSelectedBudget} USD` : "N/A",
      timeline: projectTimeline,
      project_details: description.trim() ? description : "N/A",
      additional_notes: additionalNotes.trim() ? additionalNotes : "N/A",
      // Backward compatibility fields
      project_type: selectedPlan || "N/A",
      budget_range: propsSelectedBudget !== null ? `$${propsSelectedBudget} USD` : "N/A",
      selected_category: propsSelectedServices.join(", ")
    };

    emailjs
      .send(
        "service_oa0iksa",
        "template_b3xlkoq",
        templateParams,
        "g8PRzBL0HoE82QlGu"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        onShowToast(`Thank you, ${name}! Inquiry received. Syncing with coordination dashboard.`);

        setName("");
        setEmail("");
        setCompanyName("");
        setProjectTitle("");
        setDescription("");
        setAdditionalNotes("");

        setTimeout(() => {
          onResetPlan();
        }, 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        onShowToast("Transmission failed. Please check network protocols and try again.");
      });
  };

  return (
    <div
      className={`p-5 sm:p-10 rounded-[var(--rounded-lg)] relative overflow-hidden transition-all duration-500 border ${
        isLocked
          ? "border-white/[0.04] bg-white/[0.02]"
          : "border-[var(--colors-primary-on-dark)]/30 bg-gradient-to-br from-[var(--colors-primary-on-dark)]/[0.02] to-white/[0.04] shadow-xl"
      }`}
    >
      {/* 1. Decompression Bulkhead Airlock Lock Overlay */}
      <AnimatePresence>
        {isLocked && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.98, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 bg-[var(--colors-surface-black)]/96 backdrop-blur-md z-30 flex flex-col justify-center items-center p-6 text-center select-none"
          >
            {/* Spinning Airlock Bulkhead */}
            <motion.div
              initial={{ scale: 0.85, rotate: -45 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.85, rotate: 180 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-[var(--colors-primary-on-dark)] mb-4 sm:mb-5 shadow-sm relative animate-pulse"
            >
              <Lock size={18} className="stroke-[2.5] relative z-10" />

              {/* Spinning hatch markers */}
              <div
                className="absolute inset-1 border border-dashed border-[var(--colors-primary-on-dark)]/30 rounded-full animate-spin"
                style={{ animationDuration: "15s" }}
              />
            </motion.div>

            <h3
              className="text-base sm:text-lg font-semibold text-white mb-2 font-display uppercase tracking-widest"
              style={{ letterSpacing: "0.05em" }}
            >
              Intake Channel Locked
            </h3>
            <p className="text-[11px] sm:text-xs text-white/50 max-w-xs leading-relaxed font-light font-sans mb-1 px-4">
              Select a package or configure a custom quote above to unlock agency intake.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Pressurized Launch Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5 sm:gap-6 text-left relative z-10">
        {/* Active Badge Status Indicator */}
        {!isLocked && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-[var(--rounded-md)] bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold max-w-max self-start shadow-sm font-mono"
          >
            <Check size={14} className="stroke-[3]" />
            UNLOCKED // INTENT SYNCD
          </motion.div>
        )}

        {/* Sync Summary Metadata Card */}
        {!isLocked && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 rounded-[var(--rounded-md)] border border-white/[0.08] bg-white/[0.02] flex flex-col gap-2 text-[11px] font-mono text-white/70"
          >
            <div className="flex justify-between border-b border-white/[0.06] pb-2 text-[var(--colors-primary-on-dark)] font-bold tracking-wider">
              <span>ESTIMATOR CORES</span>
              <span>SYNCHRONIZED</span>
            </div>
            <div>
              <span className="text-white/40 uppercase">Selected Plan:</span>{" "}
              <span className="text-white font-sans font-semibold ml-1">{selectedPlan}</span>
            </div>
            <div>
              <span className="text-white/40 uppercase">Services:</span>{" "}
              <span className="text-white/90 font-sans ml-1">{propsSelectedServices.join(", ")}</span>
            </div>
            {propsSelectedBudget !== null && (
              <div>
                <span className="text-white/40 uppercase">Estimated Budget:</span>{" "}
                <span className="text-[var(--colors-primary-on-dark)] font-bold ml-1">${propsSelectedBudget} USD</span>
              </div>
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
          {/* Full Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="client-name" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Full Name *
            </label>
            <input
              type="text"
              id="client-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors shadow-inner"
              placeholder="e.g. Aneek Biswas"
            />
          </div>

          {/* Email Address */}
          <div className="flex flex-col gap-2">
            <label htmlFor="client-email" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Email Address *
            </label>
            <input
              type="email"
              id="client-email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors shadow-inner"
              placeholder="name@domain.com"
            />
          </div>

          {/* Company Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="company-name" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Company / Brand Name
            </label>
            <input
              type="text"
              id="company-name"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors shadow-inner"
              placeholder="e.g. Acme Corporation"
            />
          </div>

          {/* Project Title */}
          <div className="flex flex-col gap-2">
            <label htmlFor="project-title" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Project Title *
            </label>
            <input
              type="text"
              id="project-title"
              required
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors shadow-inner"
              placeholder="e.g. Website Redesign & Branding"
            />
          </div>

          {/* Timeline Target */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="project-timeline" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Required Timeline Target *
            </label>
            <select
              id="project-timeline"
              value={projectTimeline}
              onChange={(e) => setProjectTimeline(e.target.value)}
              className="w-full bg-[var(--colors-surface-tile-3)] border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white/85 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors cursor-pointer shadow-inner font-sans"
              style={{ colorScheme: "dark" }}
            >
              {TIMELINES.map((time) => (
                <option key={time} value={time} className="bg-[var(--colors-surface-black)]">
                  {time}
                </option>
              ))}
            </select>
          </div>

          {/* Project Description */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="client-desc" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Project Description *
            </label>
            <textarea
              id="client-desc"
              rows={4}
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] p-4 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors resize-none shadow-inner font-sans font-light"
              placeholder="Outline your project scope, design aesthetic guidelines, and technical parameters..."
            />
          </div>

          {/* Additional Notes */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="additional-notes" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Additional Notes / Requests
            </label>
            <textarea
              id="additional-notes"
              rows={3}
              value={additionalNotes}
              onChange={(e) => setAdditionalNotes(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] p-4 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors resize-none shadow-inner font-sans font-light"
              placeholder="Any other specifications or retainers required..."
            />
          </div>
        </div>

        <button
          type="submit"
          className="flex items-center justify-center gap-2.5 w-full py-3.5 sm:py-4 rounded-[var(--rounded-pill)] bg-[var(--colors-primary-on-dark)] hover:bg-[var(--colors-primary-focus)] text-white font-bold uppercase tracking-wider text-xs sm:text-sm transition-colors shadow-sm"
        >
          <Send size={15} />
          Transmit Launch Inquiry
        </button>
      </form>
    </div>
  );
};
