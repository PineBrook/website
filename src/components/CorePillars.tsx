import { useState } from "react";
import { motion } from "motion/react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./Tabs";
import { Layers, Zap, Cpu } from "lucide-react";

export function CorePillars() {
  const [activeTab, setActiveTab] = useState("gcc");

  const pillars = [
    {
      id: "gcc",
      label: "GCC",
      icon: Layers,
      title: "REDUCE COST. IMPROVE RELIABILITY.",
      desc: "Establish a scalable managed operations center that drives vendor consolidation, enforces strict governance, and guarantees 98% SLA compliance.",
      features: ["30-40% Cost Savings", "98% SLA Compliance", "Vendor Consolidation", "Structured Governance", "Managed Operations"],
      process: ["Assess", "Transition", "Stabilize", "Optimize", "Automate"]
    },
    {
      id: "productivity",
      label: "Productivity",
      icon: Zap,
      title: "AI + AUTOMATION FOR BUSINESS PRODUCTIVITY",
      desc: "Modernize manual workflows with tailored AI solutions and digital accelerators that generate immediate efficiency gains.",
      features: ["Workflow Automation", "Process Digitization", "Operational Dashboards", "AI-Powered Productivity", "Reusable Accelerators"],
      process: ["Map", "Design", "Build", "Deploy", "Reuse"]
    },
    {
      id: "advisory",
      label: "Advisory",
      icon: Cpu,
      title: "EMBEDDED TECHNOLOGY LEADERSHIP",
      desc: "Bridge the gap between business goals and IT capabilities with veteran technology leadership providing architectural roadmaps and execution oversight.",
      features: ["CTO Advisory", "Technology Roadmaps", "Vendor Governance", "Execution Oversight", "Transformation Planning"],
      process: ["Diagnose", "Align", "Govern", "Execute", "Track"]
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
            <TabsList className="grid w-full grid-cols-3 max-w-xl h-auto p-1">
              {pillars.map((pillar) => (
                <TabsTrigger 
                  key={pillar.id} 
                  value={pillar.id} 
                  className="py-2.5 text-xs sm:text-sm"
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
                  className="p-10 rounded-[20px] bg-brand-surface-low border border-brand-border relative overflow-hidden transition-all duration-300 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(90,200,250,0.1)]"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 rounded-full blur-[80px] pointer-events-none"></div>
                  
                  <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                    <div>
                      <div className="w-12 h-12 rounded-lg bg-brand-surface-highest border border-brand-border flex items-center justify-center mb-6">
                        <Icon className="w-6 h-6 text-brand-secondary" />
                      </div>
                      <h3 className="text-2xl font-display font-bold text-white mb-4 leading-tight">{pillar.title}</h3>
                      <p className="text-brand-text-muted text-base mb-8 leading-relaxed">{pillar.desc}</p>
                      
                      <div className="mb-6">
                        <span className="text-xs font-semibold eyebrow text-brand-secondary block mb-3">Key Benefits</span>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
                          {pillar.features.map((feature, i) => (
                            <li key={i} className="flex items-center gap-2 text-white/90 text-sm font-medium">
                              <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="relative h-[380px] rounded-xl border border-brand-border bg-brand-surface-container overflow-hidden flex flex-col items-center justify-center p-6">
                       {/* Synthetic background grid */}
                       <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                       
                       <div className="relative z-10 flex flex-col items-center gap-2 w-full max-w-[280px]">
                         <span className="text-[10px] font-semibold tracking-wider text-brand-secondary eyebrow mb-3">OPERATIONAL WORKFLOW</span>
                         {pillar.process.map((step, idx) => (
                           <div key={step} className="flex flex-col items-center w-full">
                             <div className="w-full py-2 px-4 rounded-lg bg-brand-surface-low border border-brand-border/80 flex items-center justify-between shadow-lg">
                               <span className="text-xs font-mono text-brand-accent">0{idx + 1}</span>
                               <span className="text-sm font-semibold text-white">{step}</span>
                               <div className="w-2 h-2 rounded-full bg-brand-primary shadow-[0_0_8px_rgba(0,122,255,0.8)]"></div>
                             </div>
                             {idx < pillar.process.length - 1 && (
                               <div className="w-px h-3 bg-gradient-to-b from-brand-primary to-transparent my-0.5"></div>
                             )}
                           </div>
                         ))}
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
