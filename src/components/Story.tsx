import { motion } from "motion/react";
import { Button } from "./Button";

export function Story() {
  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden" id="mission">
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-border to-transparent"></div>
      
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left: Image / Visual */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-brand-border group"
          >
            {/* Using a placeholder gradient for the Himalayan visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-brand-surface-high to-brand-surface-low"></div>
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544257127-14a51e605d5e?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-40 transition-opacity duration-700 group-hover:opacity-60"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-brand-surface via-brand-surface/20 to-transparent"></div>
            
            <div className="absolute bottom-0 left-0 right-0 p-10">
              <div className="eyebrow text-xs text-brand-secondary mb-4">OUR MISSION</div>
              <h3 className="text-3xl font-display font-bold text-white leading-tight">
                Building a sustainable, world-class digital workforce from the Himalayas.
              </h3>
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-semibold mb-6"
            >
              The Uttarakhand <br/>
              <span className="text-brand-accent">Advantage.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-text-muted text-lg mb-10 leading-relaxed"
            >
              We are deliberately building capability away from saturated metros. By investing in regional talent, college partnerships, and local delivery centers, we prevent reverse migration while providing our global clients with a highly stable, dedicated, and scalable workforce.
            </motion.p>

            <div className="grid sm:grid-cols-2 gap-8 mb-12">
              <div>
                <h4 className="font-semibold text-white mb-4 text-lg">Community Impact</h4>
                <ul className="space-y-3">
                  {["Local Employment", "Skill Development", "Sustainable Growth"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text-muted text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-primary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4 text-lg">Operational Edge</h4>
                <ul className="space-y-3">
                  {["Low Attrition Rates", "Dedicated Centers", "Inherent Synergy"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-brand-text-muted text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-brand-secondary"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-6 rounded-xl bg-brand-surface-container border border-brand-border transition-all duration-300 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(90,200,250,0.1)]"
            >
              <div className="eyebrow text-[10px] text-brand-text-muted mb-4">THE VALUE CHAIN</div>
              <div className="flex items-center gap-2 flex-wrap">
                <div className="px-3 py-1.5 rounded bg-brand-surface-high border border-brand-border text-sm text-white">Talent</div>
                <div className="text-brand-text-muted text-xs">→</div>
                <div className="px-3 py-1.5 rounded bg-brand-surface-high border border-brand-border text-sm text-white">Training</div>
                <div className="text-brand-text-muted text-xs">→</div>
                <div className="px-3 py-1.5 rounded bg-brand-surface-high border border-brand-border text-sm text-white">Capability</div>
                <div className="text-brand-text-muted text-xs">→</div>
                <div className="px-3 py-1.5 rounded bg-brand-primary text-sm text-white font-medium shadow-[0_0_10px_rgba(0,122,255,0.3)]">Employment</div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
