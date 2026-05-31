import React, { useState, useEffect } from "react";
import { Lock, Send, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";

interface LockableContactFormProps {
  selectedPlan: string | null;
  selectedPriceUSD: number | string | null;
  selectedPriceINR: number | string | null;
  onResetPlan: () => void;
  onShowToast: (msg: string) => void;
}

export const LockableContactForm: React.FC<LockableContactFormProps> = ({
  selectedPlan,
  selectedPriceUSD,
  selectedPriceINR,
  onResetPlan,
  onShowToast,
}) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [socialPlatform, setSocialPlatform] = useState("None");
  const [socialHandle, setSocialHandle] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  const isLocked = !selectedPlan;

  useEffect(() => {
    if (socialPlatform === "None") {
      setSocialHandle("");
    }
  }, [socialPlatform]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLocked) return;

    const templateParams = {
      name: name,
      email: email,
      phone: phone.trim() ? phone : "N/A",
      social_platform: socialPlatform,
      social_handle: socialPlatform !== "None" ? socialHandle : "N/A",
      project_details: description.trim() ? description : "N/A",
      selected_plan: selectedPriceUSD && selectedPriceUSD !== "Custom"
        ? `${selectedPlan} ($${selectedPriceUSD} / ₹${selectedPriceINR?.toLocaleString("en-IN")})`
        : (selectedPlan || "N/A"),
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
        onShowToast(`Thank you, ${name}! Project inquiry received.`);

        setName("");
        setEmail("");
        setSocialPlatform("None");
        setSocialHandle("");
        setPhone("");
        setDescription("");

        setTimeout(() => {
          onResetPlan();
        }, 3000);
      })
      .catch((err) => {
        console.error("FAILED...", err);
        onShowToast("Transmission failed. Please check your connection and try again.");
      });
  };

  return (
    <div
      className={`p-5 sm:p-10 rounded-[var(--rounded-lg)] relative overflow-hidden transition-all duration-500 border ${isLocked
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
              <div className="absolute inset-1 border border-dashed border-[var(--colors-primary-on-dark)]/30 rounded-full animate-spin" style={{ animationDuration: "15s" }} />
            </motion.div>

            <h3 className="text-base sm:text-lg font-semibold text-white mb-2 font-display uppercase tracking-widest" style={{ letterSpacing: '0.05em' }}>
              Airlock Pres-Seal Locked
            </h3>
            <p className="text-[11px] sm:text-xs text-white/50 max-w-xs leading-relaxed font-light font-sans mb-1 px-4">
              Select a pricing milestone or lock a quote in the architect builder above to unlock transmission cores.
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
            UNLOCKED // PLAN ACTIVE: {selectedPlan}
            {selectedPriceUSD !== "Custom" && selectedPriceUSD && (
              ` ($${selectedPriceUSD} / ₹${selectedPriceINR?.toLocaleString("en-IN")})`
            )}
          </motion.div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 w-full">
          {/* Client Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="client-name" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Your Name *
            </label>
            <input
              type="text"
              id="client-name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors shadow-inner"
              placeholder="Aneek Biswas"
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

          {/* Preferred Social Platform */}
          <div className="flex flex-col gap-2">
            <label htmlFor="social-platform" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Preferred Social Platform
            </label>
            <select
              id="social-platform"
              value={socialPlatform}
              onChange={(e) => setSocialPlatform(e.target.value)}
              className="w-full bg-[var(--colors-surface-tile-3)] border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white/80 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors cursor-pointer shadow-inner"
              style={{ colorScheme: "dark" }}
            >
              <option value="None" className="bg-[var(--colors-surface-black)]">None</option>
              <option value="Instagram" className="bg-[var(--colors-surface-black)]">Instagram</option>
              <option value="X" className="bg-[var(--colors-surface-black)]">X (Twitter)</option>
              <option value="Reddit" className="bg-[var(--colors-surface-black)]">Reddit</option>
              <option value="SimpleX Chat" className="bg-[var(--colors-surface-black)]">SimpleX Chat</option>
              <option value="Telegram" className="bg-[var(--colors-surface-black)]">Telegram</option>
              <option value="Signal" className="bg-[var(--colors-surface-black)]">Signal</option>
            </select>
          </div>

          {/* Phone Number */}
          <div className="flex flex-col gap-2">
            <label htmlFor="client-phone" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Phone Number (Optional)
            </label>
            <input
              type="tel"
              id="client-phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors shadow-inner"
              placeholder="+1 (555) 000-0000"
            />
          </div>

          {/* Dynamic Social Handle */}
          {socialPlatform !== "None" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="flex flex-col gap-2 sm:col-span-2 overflow-hidden"
            >
              <label htmlFor="social-handle" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
                {socialPlatform} Coordinates *
              </label>
              <input
                type="text"
                id="social-handle"
                required
                value={socialHandle}
                onChange={(e) => setSocialHandle(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] px-4 py-3 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors shadow-inner"
                placeholder={
                  socialPlatform === "Signal" || socialPlatform === "SimpleX Chat"
                    ? "Contact Address string"
                    : "@username"
                }
              />
            </motion.div>
          )}

          {/* Project Description */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="client-desc" className="text-xs font-bold uppercase tracking-wider text-white/50 font-mono">
              Pressurized Project Specifications
            </label>
            <textarea
              id="client-desc"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-[var(--rounded-md)] p-4 text-base text-white placeholder-white/20 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors resize-none shadow-inner font-sans font-light"
              placeholder="Briefly outline your architectural goals, design preferences, and staging timeframe..."
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
