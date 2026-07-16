"use client";

import { motion } from "motion/react";
import { Bot, Activity, ShieldCheck, TrendingUp, Cpu, Network } from "lucide-react";
import { OrbitingCircles } from "./OrbitingCircles";

export function AIProductivity() {
  const chips = [
    { icon: Bot, label: "AI Automation" },
    { icon: Activity, label: "Observability Platforms" },
    { icon: ShieldCheck, label: "Auto-Healing Systems" },
    { icon: TrendingUp, label: "Predictive Analytics" },
    { icon: Cpu, label: "Process Automation" },
    { icon: Network, label: "Operational Intelligence" }
  ];

  const stats = [
    { value: "20-30%", label: "EFFICIENCY IMP." },
    { value: "30-40%", label: "COST REDUCTION" },
    { value: "95%", label: "ERROR REDUCTION" },
    { value: "99.9%", label: "SYSTEM UPTIME" }
  ];

  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden" id="industries">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Premium Circular Flowchart / Mobile Engine Flow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative w-full min-h-[620px] sm:h-[600px] bg-brand-surface-container rounded-2xl border border-brand-border overflow-hidden flex items-center justify-center p-6 sm:p-8"
          >
            {/* Background grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-brand-primary/10 rounded-full blur-[80px] pointer-events-none"></div>

            {/* Desktop & Tablet View: Circular Orbiting Network */}
            <div className="hidden sm:flex relative z-10 w-[500px] h-[500px] items-center justify-center overflow-visible scale-[0.75] md:scale-[0.85] lg:scale-100 transition-transform duration-300">
              {/* Central Core Node */}
              <div className="absolute z-20 w-32 h-32 rounded-full bg-brand-surface border-2 border-brand-primary flex flex-col items-center justify-center text-center p-3 shadow-[0_0_35px_rgba(0,122,255,0.4)] backdrop-blur-md">
                <span className="text-[11px] font-mono text-brand-secondary tracking-widest leading-none mb-1">PRECISION</span>
                <span className="text-base font-display font-bold text-white leading-tight">ENGINE</span>
              </div>

              {/* Clockwise Orbit (Inner: 3 items) */}
              <OrbitingCircles radius={135} duration={30} path={true}>
                {[
                  "AI Automation",
                  "Observability Platforms",
                  "Auto-Healing Systems"
                ].map((label, i) => (
                  <div key={i} className="absolute w-36 h-16 flex items-center justify-center p-3 rounded-lg bg-brand-surface-low border border-brand-border/60 hover:border-brand-secondary text-center cursor-default shadow-xl backdrop-blur-sm transition-colors duration-300 hover:shadow-[0_0_15px_rgba(90,200,250,0.2)]">
                    <span className="text-xs sm:text-sm leading-tight font-semibold text-white/95">
                      {label}
                    </span>
                  </div>
                ))}
              </OrbitingCircles>

              {/* Counter-Clockwise Orbit (Outer: 3 items, reverse) */}
              <OrbitingCircles radius={250} duration={40} reverse path={true}>
                {[
                  "Predictive Analytics",
                  "Process Automation",
                  "Operational Intelligence"
                ].map((label, i) => (
                  <div key={i} className="absolute w-36 h-16 flex items-center justify-center p-3 rounded-lg bg-brand-surface-low border border-brand-border/60 hover:border-brand-secondary text-center cursor-default shadow-xl backdrop-blur-sm transition-colors duration-300 hover:shadow-[0_0_15px_rgba(90,200,250,0.2)]">
                    <span className="text-xs sm:text-sm leading-tight font-semibold text-white/95">
                      {label}
                    </span>
                  </div>
                ))}
              </OrbitingCircles>
            </div>

            {/* Mobile View: Vertical Engine Flow Timeline */}
            <div className="sm:hidden flex flex-col items-stretch w-full py-4 z-10">
              {/* Header node: Precision Engine */}
              <div className="flex items-center gap-4 mb-8">
                <div className="relative flex-shrink-0 w-24 h-12 rounded-full bg-brand-surface border border-brand-primary flex flex-col items-center justify-center text-center shadow-[0_0_20px_rgba(0,122,255,0.3)]">
                  <span className="text-[8px] font-mono text-brand-secondary tracking-widest leading-none mb-0.5">PRECISION</span>
                  <span className="text-xs font-display font-bold text-white leading-tight">ENGINE</span>
                </div>
                <div className="flex-1">
                  <div className="h-[1px] bg-gradient-to-r from-brand-primary/50 to-transparent w-full"></div>
                </div>
              </div>

              {/* Vertical Timeline/List */}
              <div className="relative pl-6 border-l border-brand-primary/20 flex flex-col gap-4">
                {/* Multiple glowing pulse indicators sliding down the line */}
                <div className="absolute top-0 left-[-1px] w-[1px] bg-gradient-to-b from-brand-secondary via-brand-primary to-transparent animate-scan-down h-full"></div>
                <div className="absolute top-0 left-[-1px] w-[1px] bg-gradient-to-b from-brand-secondary via-brand-primary to-transparent animate-scan-down h-full [animation-delay:1.5s]"></div>
                <div className="absolute top-0 left-[-1px] w-[1px] bg-gradient-to-b from-brand-secondary via-brand-primary to-transparent animate-scan-down h-full [animation-delay:3s]"></div>

                {[
                  "AI Automation",
                  "Observability Platforms",
                  "Auto-Healing Systems",
                  "Predictive Analytics",
                  "Process Automation",
                  "Operational Intelligence"
                ].map((label, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.08 }}
                    className="relative group flex items-center"
                  >
                    {/* Horizontal connector dot and line */}
                    <div className="absolute left-[-24px] w-6 h-[1px] bg-brand-primary/30 group-hover:bg-brand-secondary/60 transition-colors duration-300"></div>
                    <div 
                      className="absolute left-[-26px] w-1 h-1 rounded-full bg-brand-primary group-hover:bg-brand-secondary shadow-[0_0_6px_rgba(0,122,255,0.6)] transition-all duration-300"
                      style={{
                        animation: "card-glow 6s ease-in-out infinite",
                        animationDelay: `${idx * 1.0}s`
                      }}
                    ></div>

                    {/* Card */}
                    <div 
                      className="w-full p-3.5 rounded-xl bg-brand-surface-low border border-brand-border/60 transition-all duration-300 shadow-md backdrop-blur-sm hover:border-brand-secondary/50 hover:shadow-[0_0_12px_rgba(90,200,250,0.12)]"
                      style={{
                        animation: "card-glow 6s ease-in-out infinite",
                        animationDelay: `${idx * 1.0}s`
                      }}
                    >
                      <div className="flex items-center gap-3">
                        {(() => {
                          const matched = chips.find(c => c.label === label);
                          const Icon = matched ? matched.icon : Bot;
                          return <Icon className="w-4 h-4 text-brand-secondary group-hover:text-white transition-colors duration-300" />;
                        })()}
                        <span className="text-xs font-semibold text-white/90">{label}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column */}
          <div>            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
            >
              AI-Powered<br/>
              Productivity<br/>
              Engineering.
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-text-muted text-lg mb-16 max-w-lg leading-relaxed"
            >
              We move beyond basic script automation. By integrating cognitive AI models and self-healing architectures, we engineer operational systems that learn, adapt, and scale dynamically.
            </motion.p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-brand-border">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="eyebrow text-[11px] font-normal text-white/80 tracking-wide">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
