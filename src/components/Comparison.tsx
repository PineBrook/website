import { motion } from "motion/react";
import { XCircle, CheckCircle2, Star } from "lucide-react";

export function Comparison() {
  return (
    <section className="py-32 bg-brand-surface relative border-y border-brand-border/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Column */}
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-display font-semibold mb-6"
            >
              Why Standard Approaches <br/><span className="text-brand-accent">Keep Failing.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-brand-text-muted text-lg mb-10"
            >
              Organizations often choose between expensive strategy that isn't actionable, or cheap offshore labor that lacks governance. Both lead to stalled transformations.
            </motion.p>

            <div className="space-y-4">
              {[
                { title: "Large Consulting Firms", desc: "Prohibitively expensive. Strategy heavy, light on implementation. Slow execution cycles." },
                { title: "Traditional IT Vendors", desc: "Junior-heavy regional teams. Weak strategic governance. Poor accountability on outcomes." },
                { title: "Freelancers / Contractors", desc: "Limited scale & bandwidth. Inconsistent delivery standards. High turnover risk." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + (i * 0.1) }}
                  className="p-5 rounded-xl bg-brand-surface-low border border-brand-border/50 flex gap-4 transition-all duration-300 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(90,200,250,0.1)]"
                >
                  <XCircle className="w-6 h-6 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-white mb-1 text-base">{item.title}</h3>
                    <p className="text-sm text-brand-text-muted">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column (The PineBrook Alternative) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-brand-surface-container border border-brand-border relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="eyebrow text-xs text-brand-text-muted mb-4 flex items-center gap-1">
                <div className="flex items-center text-brand-secondary mr-2">
                  THE PINEBROOK SOLUTION
                </div>
              </div>
              <h3 className="text-3xl font-display font-bold text-white mb-10">
                Enterprise Expertise.<br/>Practical Execution.
              </h3>

              <div className="space-y-8">
                {[
                  { title: "Quality-Led Cost Optimization", desc: "Reduce operational overheads by 30-40% without compromising delivery quality or speed." },
                  { title: "Senior Leadership Involvement", desc: "Led by veterans with 25+ years of enterprise experience at every touchpoint." },
                  { title: "Regional Delivery Advantage", desc: "Leveraging Uttarakhand's emerging tech ecosystem for sustainable, high-quality talent." },
                  { title: "Outcome-Based Execution", desc: "We don't just deliver slide decks. We engineer and operate solutions for long-term success." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <CheckCircle2 className="w-6 h-6 text-brand-secondary shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-brand-text-muted leading-relaxed">{item.desc}</p>
                    </div>
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
