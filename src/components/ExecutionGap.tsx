"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { CreditCard, RefreshCw, Scale, Network, Shield, Settings, EyeOff, Users, GitMerge, X, Loader2, CheckCircle2 } from "lucide-react";
import { cn } from "../lib/utils";
import { Button } from "./Button";

interface ChallengeCard {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  solution: string;
}

const cards: ChallengeCard[] = [
  {
    icon: CreditCard,
    title: "High IT Costs",
    description: "Bloated vendor contracts and shadow IT draining budgets without clear ROI or accountability.",
    solution: "Vendor consolidation, cloud optimization audits, and direct regional capability center placement to reduce operational overhead by up to 40%."
  },
  {
    icon: RefreshCw,
    title: "Manual Processes",
    description: "Knowledge workers tied up in repetitive data entry instead of strategic work and innovation.",
    solution: "Custom operational scripts, secure local LLM processing pipelines, and structured workflow automations that return hours of productivity to your core team."
  },
  {
    icon: Scale,
    title: "Poor Governance",
    description: "Lack of accountability and transparency in multi-vendor delivery environments across regions.",
    solution: "Establishing unified ITIL governance frameworks, hourly dashboard check-ins, and dedicated project managers to secure strict SLA compliance."
  },
  {
    icon: Network,
    title: "Disconnected Systems",
    description: "Siloed platforms requiring manual reconciliation and creating dangerous data blind spots.",
    solution: "API middleware integration, secure data bridging, and real-time database synchronization to automate information flow across your tools."
  },
  {
    icon: Shield,
    title: "Technology Debt",
    description: "Legacy platforms slowing down innovation and increasing maintenance overhead exponentially.",
    solution: "Strategic codebase refactoring, modular containerization (Docker/Kubernetes), and systematic technology upgrades with zero-downtime cutovers."
  },
  {
    icon: Settings,
    title: "Lack of Automation",
    description: "Scaling requires proportional headcount increases—destroying margin growth and efficiency.",
    solution: "Implementing automated testing, automated CI/CD code deployments, and programmatic cloud resource scaling to support business growth without staff bloat."
  },
  {
    icon: EyeOff,
    title: "Limited Visibility",
    description: "No real-time operational insights to make data-driven leadership decisions.",
    solution: "Building real-time dashboard telemetry, unified log indexing, and customized automated executive reporting systems."
  },
  {
    icon: Users,
    title: "Talent Constraints",
    description: "Inability to attract or retain specialized engineering and operational talent.",
    solution: "Sourcing dedicated developers from our Uttarakhand university pipeline, providing local stability and preventing high city-center turnover rates."
  },
  {
    icon: GitMerge,
    title: "Execution Bottlenecks",
    description: "Great strategies that fail at the critical point of practical implementation.",
    solution: "Embedded technical architects, agile delivery leads, and structured daily checkpoints to turn strategy into operating reality."
  }
];

export function ExecutionGap() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const [selectedChallenge, setSelectedChallenge] = useState<ChallengeCard | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Modal Inquiry Form State
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneExtension, setPhoneExtension] = useState("+91");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth >= 768) {
        setActiveCardIndex(null);
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      let closestIndex: number | null = null;
      let minDistance = Infinity;

      cardRefs.current.forEach((ref, index) => {
        if (!ref) return;
        const rect = ref.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(cardCenter - viewportCenter);

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveCardIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstname || !companyName || !phoneExtension || !phoneNumber) {
      setErrorMessage("First Name, Company, and Phone Number are required.");
      setStatus("error");
      return;
    }

    setStatus("submitting");

    try {
      const response = await fetch("/api/inquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          email,
          phoneExtension,
          phoneNumber,
          companyName,
          location: location || `Solution Info: ${selectedChallenge?.title}`
        })
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        // Reset form
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhoneNumber("");
        setCompanyName("");
        setLocation("");
      } else {
        setErrorMessage(data.message || "Submission failed. Please try again.");
        setStatus("error");
      }
    } catch (err) {
      setErrorMessage("Network error. Please check your connection.");
      setStatus("error");
    }
  };

  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden" id="solutions">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold mb-6 leading-tight text-white"
          >
            Great Strategies Fail From the <br />
            <span className="text-brand-accent">Friction of Execution.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-brand-text-muted text-lg"
          >
            Most organizations possess the strategic vision to scale, but falter at operational reality. We diagnose and eliminate the friction holding your business back.
          </motion.p>
        </div>

        {/* 3x3 Half-height Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {cards.map((card, index) => {
            const Icon = card.icon;
            const isActive = activeCardIndex === index;
            
            return (
              <motion.div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onClick={() => setSelectedChallenge(card)}
                className={cn(
                  "group relative flex flex-col items-center justify-center p-8 h-[200px] rounded-2xl border border-white/10 overflow-hidden transition-all duration-300 z-10 cursor-pointer",
                  isActive 
                    ? "bg-brand-surface-container/35 border-brand-secondary/50 shadow-[0_15px_35px_rgba(90,200,250,0.15)] -translate-y-2 scale-[1.03] z-20" 
                    : "bg-brand-surface-container/10 hover:bg-[#121625]/90 hover:border-brand-secondary/50 hover:shadow-[0_15px_35px_rgba(90,200,250,0.15)] hover:-translate-y-2 hover:scale-[1.03] hover:z-20"
                )}
              >
                {/* Hover/Active Gradient */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(255,255,255,0.06)_0%,transparent_60%)] transition-opacity duration-700 pointer-events-none",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
                
                {/* Center Content: Icon + Title */}
                <div 
                  className={cn(
                    "flex flex-col items-center gap-4 relative z-10 transform transition-transform duration-500",
                    isActive ? "-translate-y-3" : "group-hover:-translate-y-3"
                  )}
                >
                  <Icon 
                    className={cn(
                      "w-8 h-8 text-white transition-transform duration-500",
                      isActive ? "scale-110 text-brand-secondary" : "group-hover:scale-110 group-hover:text-brand-secondary"
                    )} 
                  />
                  <h3 className="text-xl font-display font-semibold text-white text-center leading-snug">{card.title}</h3>
                </div>

                {/* Explore link appearing on hover */}
                <div 
                  className={cn(
                    "absolute bottom-6 flex items-center gap-1 text-brand-secondary text-xs font-semibold uppercase tracking-wider transition-all duration-500",
                    isActive 
                      ? "opacity-100 translate-y-0" 
                      : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
                  )}
                >
                  Explore solution <span className="text-sm leading-none">&rsaquo;</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Challenge & Solution Detail Modal with Inquire Component */}
      <AnimatePresence>
        {selectedChallenge && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Dark glass backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                setSelectedChallenge(null);
                setStatus("idle");
              }}
              className="absolute inset-0 bg-[#080b11]/80 backdrop-blur-md cursor-pointer"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="relative w-full max-w-4xl bg-[#0c0f17]/95 border border-white/10 rounded-2xl shadow-[0_20px_50px_rgba(0,122,255,0.15)] overflow-hidden z-10 flex flex-col md:flex-row max-h-[90vh] md:max-h-[85vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => {
                  setSelectedChallenge(null);
                  setStatus("idle");
                }}
                className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors p-2 z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Side: Challenge & Solution Explanation */}
              <div className="flex-1 p-8 sm:p-10 overflow-y-auto border-b md:border-b-0 md:border-r border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-secondary">
                    {(() => {
                      const Icon = selectedChallenge.icon;
                      return <Icon className="w-6 h-6" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-display font-semibold text-white leading-tight">
                    {selectedChallenge.title}
                  </h3>
                </div>

                <div className="space-y-6 pr-2">
                  <div>
                    <span className="text-[10px] eyebrow font-semibold text-brand-primary tracking-widest block mb-2">THE CHALLENGE</span>
                    <p className="text-sm text-brand-text-muted leading-relaxed bg-white/5 p-4 rounded-xl border border-white/5">
                      {selectedChallenge.description}
                    </p>
                  </div>

                  <div>
                    <span className="text-[10px] eyebrow font-semibold text-brand-secondary tracking-widest block mb-2">HOW WE SOLVE IT</span>
                    <p className="text-sm text-white leading-relaxed font-medium">
                      {selectedChallenge.solution}
                    </p>
                  </div>
                  
                  <div className="pt-4 border-t border-white/10 flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0" />
                    <span className="text-xs text-brand-text-muted">Enterprise-grade SLAs, redundant infrastructure, and locally embedded management.</span>
                  </div>
                </div>
              </div>

              {/* Right Side: Integrated Inquiry Component (Connected to Google Sheets Webhook) */}
              <div className="w-full md:w-[350px] p-8 sm:p-10 bg-[#080b11]/60 flex flex-col justify-center overflow-y-auto shrink-0">
                <h4 className="text-lg font-display font-semibold text-white mb-2">Solve This Challenge</h4>
                <p className="text-xs text-brand-text-muted mb-6">
                  Connect with our team to configure a custom capability center layout.
                </p>

                {status === "success" ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center text-center py-8"
                  >
                    <CheckCircle2 className="w-12 h-12 text-brand-secondary mb-4 animate-bounce" />
                    <h5 className="text-white font-bold mb-2">Inquiry Saved</h5>
                    <p className="text-xs text-brand-text-muted leading-relaxed">
                      Your details for <strong>{selectedChallenge.title}</strong> have been logged successfully. We'll be in touch shortly.
                    </p>
                    <Button 
                      className="mt-6 w-full justify-center"
                      onClick={() => {
                        setSelectedChallenge(null);
                        setStatus("idle");
                      }}
                    >
                      Done
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-3.5">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label htmlFor="modal-firstname" className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                          First Name <span className="text-brand-secondary">*</span>
                        </label>
                        <input
                          id="modal-firstname"
                          type="text"
                          required
                          value={firstname}
                          onChange={(e) => setFirstname(e.target.value)}
                          placeholder="First Name"
                          className="w-full bg-[#121625]/60 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/30 focus:border-brand-primary outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label htmlFor="modal-lastname" className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                          Last Name
                        </label>
                        <input
                          id="modal-lastname"
                          type="text"
                          value={lastname}
                          onChange={(e) => setLastname(e.target.value)}
                          placeholder="Last Name"
                          className="w-full bg-[#121625]/60 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/30 focus:border-brand-primary outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-company" className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                        Company Name <span className="text-brand-secondary">*</span>
                      </label>
                      <input
                        id="modal-company"
                        type="text"
                        required
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        placeholder="Company Name"
                        className="w-full bg-[#121625]/60 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/30 focus:border-brand-primary outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div className="col-span-1">
                        <label htmlFor="modal-ext" className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                          Ext <span className="text-brand-secondary">*</span>
                        </label>
                        <select
                          id="modal-ext"
                          value={phoneExtension}
                          onChange={(e) => setPhoneExtension(e.target.value)}
                          className="w-full bg-[#121625] border border-white/10 rounded-lg px-1.5 py-1.5 text-xs text-white focus:border-brand-primary outline-none transition-colors"
                        >
                          <option value="+91">IN (+91)</option>
                          <option value="+1">US (+1)</option>
                          <option value="+44">UK (+44)</option>
                          <option value="+61">AU (+61)</option>
                          <option value="+65">SG (+65)</option>
                          <option value="+971">AE (+971)</option>
                        </select>
                      </div>
                      <div className="col-span-2">
                        <label htmlFor="modal-phone" className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                          Phone Number <span className="text-brand-secondary">*</span>
                        </label>
                        <input
                          id="modal-phone"
                          type="tel"
                          required
                          value={phoneNumber}
                          onChange={(e) => setPhoneNumber(e.target.value)}
                          placeholder="Phone Number"
                          className="w-full bg-[#121625]/60 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/30 focus:border-brand-primary outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="modal-email" className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                        Email Address
                      </label>
                      <input
                        id="modal-email"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="you@company.com"
                        className="w-full bg-[#121625]/60 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/30 focus:border-brand-primary outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="modal-location" className="block text-[10px] font-semibold text-brand-text-muted uppercase tracking-wider mb-1">
                        Location
                      </label>
                      <input
                        id="modal-location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="e.g. London, UK"
                        className="w-full bg-[#121625]/60 border border-white/10 rounded-lg px-2.5 py-1.5 text-xs text-white placeholder-white/30 focus:border-brand-primary outline-none transition-colors"
                      />
                    </div>

                    {status === "error" && (
                      <p className="text-[11px] text-red-400 font-medium">
                        {errorMessage}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-2.5 bg-brand-primary text-white font-semibold text-xs rounded-lg overflow-hidden transition-all duration-300 hover:bg-brand-primary/90 outline-none disabled:opacity-50 flex items-center justify-center gap-2 cursor-pointer shadow-[0_0_10px_rgba(0,122,255,0.2)]"
                    >
                      {status === "submitting" ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Submitting...</span>
                        </>
                      ) : (
                        <span>Get Started</span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
