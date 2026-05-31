import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, X } from "lucide-react";

interface Message {
  id: string;
  sender: "You" | "Endrohex Devs" | "System";
  text: string;
  time: string;
}

interface ClientChatOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClientChatOverlay: React.FC<ClientChatOverlayProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial-1",
      sender: "System",
      text: "Welcome to Endrohex Direct Client Space! ⚡",
      time: "System",
    },
    {
      id: "initial-2",
      sender: "Endrohex Devs",
      text: "Let us know what kind of website you are looking to build. We are ready to start coding.",
      time: "Just now",
    },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSend = () => {
    const trimmed = inputVal.trim();
    if (!trimmed) return;

    const timeStr = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const userMsg: Message = {
      id: `msg-${Date.now()}`,
      sender: "You",
      text: trimmed,
      time: timeStr,
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputVal("");
    setIsTyping(true);

    setTimeout(() => {
      let reply =
        "Thank you for reaching out! Aneek and Spandan have received your live ping. We are currently actively checking details. Drop us a DM on Instagram @endrohex to sync instantly!";
      
      const lower = trimmed.toLowerCase();
      if (lower.includes("price") || lower.includes("cost") || lower.includes("pricing")) {
        reply =
          "Regarding costs: We operate with transparent pricing structures starting from $20. For custom backend databases or premium interactive layers, we recommend checking out our Custom Architectural Builder!";
      } else if (lower.includes("react") || lower.includes("threejs") || lower.includes("ts") || lower.includes("typescript")) {
        reply =
          "Absolutely! We focus heavily on React, TypeScript, and Three.js environments for performance metrics, ensuring fluid animations and optimized state loading.";
      }

      const devMsg: Message = {
        id: `msg-${Date.now() + 1}`,
        sender: "Endrohex Devs",
        text: reply,
        time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      };

      setMessages((prev) => [...prev, devMsg]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 select-none">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Chat Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 280 }}
            className="relative w-full max-w-lg h-[600px] rounded-[var(--rounded-lg)] border border-white/[0.08] bg-[var(--colors-surface-tile-2)]/95 backdrop-blur-xl shadow-2xl flex flex-col overflow-hidden text-left"
          >
            {/* Header */}
            <header className="flex justify-between items-center px-6 py-4 border-b border-white/[0.08] bg-white/[0.01]">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div
                    className="w-8 h-8 rounded-full border border-[var(--colors-primary-on-dark)]/40 bg-[var(--colors-primary)]/10 flex items-center justify-center text-xs font-semibold text-white shadow-md font-display"
                    title="Aneek Biswas"
                  >
                    A
                  </div>
                  <div
                    className="w-8 h-8 rounded-full border border-[var(--colors-primary-on-dark)]/40 bg-[var(--colors-primary)]/10 flex items-center justify-center text-xs font-semibold text-white shadow-md font-display"
                    title="Spandan Upmanyu"
                  >
                    S
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white flex items-center gap-2">
                    Endrohex Developers
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  </h4>
                  <p className="text-[10px] text-white/50 font-light">Direct Dev Connection (Active)</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full border border-white/[0.05] bg-white/[0.02] text-white/65 hover:text-white hover:bg-white/[0.05] transition-colors"
                aria-label="Close Chat"
              >
                <X size={16} />
              </button>
            </header>

            {/* Messages Area */}
            <div
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-6 space-y-4 scroll-smooth"
            >
              {messages.map((msg) => {
                const isUser = msg.sender === "You";
                const isSystem = msg.sender === "System";

                if (isSystem) {
                  return (
                    <div key={msg.id} className="flex justify-center">
                      <span className="text-[11px] uppercase tracking-widest text-[var(--colors-primary-on-dark)] bg-white/5 px-4 py-1 rounded-[var(--rounded-pill)] border border-white/10 font-semibold">
                        {msg.text}
                      </span>
                    </div>
                  );
                }

                return (
                  <div
                    key={msg.id}
                    className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-[var(--rounded-lg)] px-4 py-2.5 text-sm leading-relaxed shadow-sm font-light ${
                        isUser
                          ? "bg-[var(--colors-primary)] text-white rounded-tr-none font-medium"
                          : "bg-white/[0.03] border border-white/[0.06] text-white/90 rounded-tl-none"
                      }`}
                    >
                      <span className="block text-[10px] font-semibold opacity-60 mb-1">
                        {msg.sender}
                      </span>
                      <p>{msg.text}</p>
                    </div>
                    <span className="text-[9px] text-white/35 mt-1 px-1 font-light">{msg.time}</span>
                  </div>
                );
              })}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex flex-col items-start">
                  <div className="bg-white/[0.03] border border-white/[0.06] text-white/60 rounded-[var(--rounded-lg)] rounded-tl-none px-4 py-3 flex items-center gap-1.5 shadow-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-white/60 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              )}
            </div>

            {/* Input Bar */}
            <div className="p-4 border-t border-white/[0.08] bg-white/[0.01] flex items-center gap-3">
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                placeholder="Type a message to Aneek & Spandan..."
                className="flex-grow bg-white/[0.02] border border-white/[0.06] rounded-[var(--rounded-pill)] px-4 py-2.5 text-sm text-white placeholder-white/30 outline-none focus:border-[var(--colors-primary-on-dark)] transition-colors"
              />
              <button
                onClick={handleSend}
                className="p-3 rounded-[var(--rounded-pill)] bg-[var(--colors-primary-on-dark)] hover:bg-[var(--colors-primary)] text-white hover:scale-105 active:scale-95 transition-all shadow-md"
                aria-label="Send Message"
              >
                <Send size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
