import { useState } from "react";
import { motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { Layers, Zap, Cpu, Settings2 } from "lucide-react";

export function CorePillars() {
  const [activeTab, setActiveTab] = useState("architecture");

  const pillars = [
    {
      id: "architecture",
      label: "Architecture",
      icon: Layers,
      title: "Resilient by Design.",
      desc: "We don't just patch legacy systems; we re-architect them for fault tolerance and limitless scale.",
      features: ["Microservices Transition", "Cloud-Native Infrastructure", "Zero-Trust Security"]
    },
    {
      id: "automation",
      label: "Automation",
      icon: Zap,
      title: "Frictionless Operations.",
      desc: "Replacing repetitive manual toil with intelligent, deterministic automation pipelines.",
      features: ["RPA Integration", "CI/CD Pipeline Optimization", "Automated Remediation"]
    },
    {
      id: "intelligence",
      label: "Intelligence",
      icon: Cpu,
      title: "Data-Driven Execution.",
      desc: "Transforming raw operational data into predictive insights that drive autonomous decision-making.",
      features: ["Predictive Maintenance", "Operational Dashboards", "AI-Assisted Triage"]
    },
    {
      id: "governance",
      label: "Governance",
      icon: Settings2,
      title: "Controlled Velocity.",
      desc: "Ensuring that rapid innovation doesn't compromise compliance, security, or enterprise standards.",
      features: ["Policy-as-Code", "Automated Auditing", "Cost FinOps"]
    }
  ];

  return (
    <section className="py-32 bg-brand-surface relative border-y border-brand-border/50" id="capabilities">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-display font-semibold mb-6"
          >
            Core Pillars of <br/><span className="text-brand-accent">Precision Engineering.</span>
          </motion.h2>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full max-w-4xl mx-auto">
          <div className="flex justify-center mb-12">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 max-w-2xl h-auto p-1">
              {pillars.map((pillar) => (
                <TabsTrigger 
                  key={pillar.id} 
                  value={pillar.id} 
                  className="py-2.5"
                  onMouseEnter={() => setActiveTab(pillar.id)}
                >
                  {pillar.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <TabsContent key={pillar.id} value={pillar.id}>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="p-10 rounded-2xl bg-brand-surface-low border border-brand-border relative overflow-hidden transition-all duration-300 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(90,200,250,0.1)]"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                  
                  <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-brand-surface-highest border border-brand-border flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-brand-secondary" />
                      </div>
                      <h3 className="text-3xl font-display font-bold text-white mb-4">{pillar.title}</h3>
                      <p className="text-brand-text-muted text-lg mb-8 leading-relaxed">{pillar.desc}</p>
                      
                      <ul className="space-y-4">
                        {pillar.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 text-white font-medium">
                            <div className="w-2 h-2 rounded-full bg-brand-primary"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="relative h-[300px] rounded-xl border border-brand-border bg-brand-surface-container overflow-hidden flex items-center justify-center">
                       {/* Synthetic visual for tabs */}
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                       
                       <div className="relative z-10 flex items-end gap-6 h-[200px] w-full max-w-[280px] justify-between px-4">
                          {pillars.map((p, idx) => {
                            const isGlowing = p.id === pillar.id;
                            const heights = ["25%", "50%", "75%", "100%"];
                            const barHeight = heights[idx];
                            return (
                              <div key={p.id} className="flex flex-col items-center gap-3 flex-1 h-full justify-end">
                                <div 
                                  style={{ height: barHeight }}
                                  className={`w-full rounded-t-md transition-all duration-500 border ${
                                    isGlowing 
                                      ? "bg-brand-primary border-brand-primary/80 shadow-[0_0_25px_rgba(0,122,255,0.7)]" 
                                      : "bg-white/10 border-white/5"
                                  }`}
                                />
                                <span className={`text-[10px] uppercase tracking-wider font-semibold transition-colors duration-300 whitespace-nowrap ${
                                  isGlowing ? "text-brand-secondary" : "text-brand-text-muted"
                                }`}>
                                  Pillar {idx + 1}
                                </span>
                              </div>
                            );
                          })}
                       </div>
                    </div>
                  </div>
                </motion.div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
}
