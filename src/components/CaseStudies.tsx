import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

export function CaseStudies() {
  const cases = [
    {
      client: "Global FinTech Provider",
      metric: "45%",
      metricLabel: "Reduction in Cloud Spend",
      desc: "Architected a multi-region automated FinOps pipeline, eliminating zombie infrastructure and optimizing compute allocation."
    },
    {
      client: "Healthcare Logistics",
      metric: "99.99%",
      metricLabel: "Uptime Achieved",
      desc: "Implemented self-healing Kubernetes clusters to prevent critical downtime during peak supply chain operations."
    }
  ];

  return (
    <section className="py-32 bg-brand-surface relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-semibold mb-4">
              Proven Outcomes.
            </h2>
            <p className="text-brand-text-muted text-lg max-w-xl">
              We measure our success strictly by the operational friction we eliminate and the efficiency we unlock.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-brand-primary font-medium hover:text-white transition-colors">
            View all case studies <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {cases.map((cs, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-8 md:p-10 rounded-2xl bg-brand-surface-low border border-brand-border transition-all duration-300 hover:border-brand-primary/50 hover:bg-brand-surface-container relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -translate-x-4 group-hover:translate-x-0">
                <ArrowUpRight className="w-8 h-8 text-brand-secondary" />
              </div>
              
              <div className="eyebrow text-xs text-brand-text-muted mb-8">{cs.client}</div>
              
              <div className="mb-6 flex items-baseline gap-2">
                <span className="text-5xl md:text-6xl font-display font-bold text-white">{cs.metric}</span>
                <span className="text-brand-secondary font-medium">{cs.metricLabel}</span>
              </div>
              
              <p className="text-brand-text-muted leading-relaxed max-w-md">
                {cs.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
