import { motion } from "motion/react";
import { Bot, Activity, ShieldCheck, TrendingUp } from "lucide-react";

export function AIProductivity() {
  const chips = [
    { icon: Bot, label: "AI Automation" },
    { icon: Activity, label: "Observability Platforms" },
    { icon: ShieldCheck, label: "Auto-Healing Systems" },
    { icon: TrendingUp, label: "Predictive Analytics" }
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
          
          {/* Left Column */}
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
              className="text-brand-text-muted text-lg mb-12 max-w-lg leading-relaxed"
            >
              We move beyond basic script automation. By integrating cognitive AI models and self-healing architectures, we engineer operational systems that learn, adapt, and scale dynamically.
            </motion.p>

            <div className="grid grid-cols-2 gap-4 mb-16">
              {chips.map((chip, i) => {
                const Icon = chip.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.05) }}
                    className="flex items-center gap-3 p-3 rounded-lg border border-brand-border bg-brand-surface-container transition-all duration-300 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(90,200,250,0.1)] cursor-default"
                  >
                    <Icon className="w-5 h-5 text-brand-secondary" />
                    <span className="text-sm font-medium text-white">{chip.label}</span>
                  </motion.div>
                )
              })}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-brand-border">
              {stats.map((stat, i) => (
                <div key={i}>
                  <div className="text-2xl font-display font-bold text-white mb-1">{stat.value}</div>
                  <div className="eyebrow text-[9px] text-brand-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Synthetic Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square lg:aspect-auto lg:h-[600px] w-full bg-brand-surface-container rounded-2xl border border-brand-border overflow-hidden flex items-center justify-center p-8"
          >
            {/* Background elements */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-primary/20 rounded-full blur-[100px]"></div>
            
            {/* Server cluster abstraction */}
            <div className="relative z-10 w-full h-full border border-brand-border/30 rounded-xl bg-brand-surface-low/50 backdrop-blur-sm shadow-2xl p-6 flex flex-col gap-4">
              <div className="flex justify-between items-center mb-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400/50"></div>
                  <div className="w-3 h-3 rounded-full bg-brand-primary/50"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/50"></div>
                </div>
                <div className="text-[10px] font-mono text-brand-text-muted">SYSTEM_CORE_ACTIVE</div>
              </div>
              
              <div className="flex-1 grid grid-cols-3 gap-4">
                {[1, 2, 3].map((col) => (
                  <div key={col} className="flex flex-col gap-3">
                    {[1, 2, 3, 4, 5].map((row) => (
                      <div key={row} className="h-full bg-brand-surface border border-brand-border rounded relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-secondary/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
                        <div className="absolute left-2 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
