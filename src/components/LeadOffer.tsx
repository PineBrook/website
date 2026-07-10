import { motion } from "motion/react";
import { Button } from "./Button";
import { CheckCircle2 } from "lucide-react";
import { openCal } from "../hooks/useCal";

export function LeadOffer() {
  const deliverables = [
    "Technology & Architecture Audit",
    "Operational Gap Analysis",
    "AI & Automation Opportunities",
    "ROI & Cost Savings Estimation",
    "Actionable Improvement Roadmap",
    "Quick Wins Identification"
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0 bg-brand-surface-low border-y border-brand-border/50"></div>
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-3xl border border-brand-border bg-brand-surface overflow-hidden grid lg:grid-cols-2 relative shadow-2xl transition-all duration-300 hover:border-brand-secondary hover:shadow-[0_0_20px_rgba(90,200,250,0.1)]"
        >
          {/* Subtle glow */}
          <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>

          {/* Left Side */}
          <div className="p-10 lg:p-16 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-brand-border relative z-10">

            
            <h2 className="text-3xl lg:text-4xl font-display font-bold text-white mb-6">
              Discover hidden productivity & cost optimization opportunities.
            </h2>
            
            <p className="text-brand-text-muted text-lg mb-10 leading-relaxed">
              Get a detailed evaluation of your operations, technology landscape, automation opportunities, and productivity gaps. Receive a practical roadmap within two weeks.
            </p>

            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col">
                <span className="eyebrow text-[10px] text-brand-text-muted mb-1">VALUE</span>
                <span className="font-display font-semibold text-white">Worth ₹2-5 Lakh</span>
              </div>
              <div className="w-px h-10 bg-brand-border"></div>
              <div className="flex flex-col">
                <span className="eyebrow text-[10px] text-brand-text-muted mb-1">DURATION</span>
                <span className="font-display font-semibold text-white">2 Weeks Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="p-10 lg:p-16 bg-brand-surface-container relative z-10">
            <h3 className="text-xl font-display font-semibold text-white mb-8">Assessment Deliverables</h3>
            <ul className="space-y-6 mb-10">
              {deliverables.map((item, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-5 h-5 text-brand-secondary shrink-0 mt-0.5" />
                  <span className="text-brand-text-muted">{item}</span>
                </li>
              ))}
            </ul>
            
            <Button 
              size="lg" 
              className="w-full group" 
              withArrow
              onClick={openCal}
              data-cal-link="pinebrook"
              data-cal-config='{"layout":"month_view"}'
            >
              Quick Assessment
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
