import { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { CreditCard, RefreshCw, Scale, Network, Shield, Settings, EyeOff, Users, GitMerge } from "lucide-react";
import { cn } from "../lib/utils";

const cards = [
  {
    icon: CreditCard,
    title: "High IT Costs",
    description: "Bloated vendor contracts and shadow IT draining budgets without clear ROI or accountability.",
  },
  {
    icon: RefreshCw,
    title: "Manual Processes",
    description: "Knowledge workers tied up in repetitive data entry instead of strategic work and innovation.",
  },
  {
    icon: Scale,
    title: "Poor Governance",
    description: "Lack of accountability and transparency in multi-vendor delivery environments across regions.",
  },
  {
    icon: Network,
    title: "Disconnected Systems",
    description: "Siloed platforms requiring manual reconciliation and creating dangerous data blind spots.",
  },
  {
    icon: Shield,
    title: "Technology Debt",
    description: "Legacy platforms slowing down innovation and increasing maintenance overhead exponentially.",
  },
  {
    icon: Settings,
    title: "Lack of Automation",
    description: "Scaling requires proportional headcount increases—destroying margin growth and efficiency.",
  },
  {
    icon: EyeOff,
    title: "Limited Visibility",
    description: "No real-time operational insights to make data-driven leadership decisions.",
  },
  {
    icon: Users,
    title: "Talent Constraints",
    description: "Inability to attract or retain specialized engineering and operational talent.",
  },
  {
    icon: GitMerge,
    title: "Execution Bottlenecks",
    description: "Great strategies that fail at the critical point of practical implementation.",
  }
];

export function ExecutionGap() {
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      // Only run proximity check on mobile/tablet viewports
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

        // Make sure the card is vertically centered on the viewport
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      // Require card center to be reasonably close to viewport center to trigger active state
      setActiveCardIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    // Trigger on mount
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 border-t border-l border-brand-border/30">
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
                className={cn(
                  "group relative flex flex-col items-center justify-between p-10 sm:p-12 h-[380px] border-r border-b border-brand-border/30 overflow-hidden transition-all duration-500",
                  isActive 
                    ? "bg-brand-surface-container/30 border-brand-secondary/40 shadow-[0_0_25px_rgba(90,200,250,0.1)]" 
                    : "bg-brand-surface-container/10 hover:bg-brand-surface-container/25"
                )}
              >
                {/* Hover/Active Gradient */}
                <div 
                  className={cn(
                    "absolute inset-0 bg-[radial-gradient(ellipse_100%_100%_at_50%_0%,rgba(255,255,255,0.1)_0%,transparent_60%)] transition-opacity duration-700 pointer-events-none",
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                  )}
                />
                
                {/* Top: Icon + Title */}
                <div 
                  className={cn(
                    "flex flex-col items-center gap-3 relative z-10 pt-2 transform transition-transform duration-500",
                    isActive ? "-translate-y-2" : "group-hover:-translate-y-2"
                  )}
                >
                  <Icon 
                    className={cn(
                      "w-8 h-8 text-white mb-1 transition-transform duration-500",
                      isActive ? "scale-110 text-brand-secondary" : "group-hover:scale-110 group-hover:text-brand-secondary"
                    )} 
                  />
                  <h3 className="text-2xl font-display font-medium text-white">{card.title}</h3>
                </div>

                {/* Bottom: Description */}
                <div className="flex flex-col items-center text-center relative z-10 w-full h-[140px] justify-end">
                  <div 
                    className={cn(
                      "transform transition-transform duration-500 flex flex-col items-center",
                      isActive ? "-translate-y-8" : "group-hover:-translate-y-8"
                    )}
                  >
                    <span 
                      className={cn(
                        "text-brand-text-muted text-xs font-semibold uppercase tracking-wider mb-4 transition-opacity duration-500",
                        isActive ? "opacity-100 text-brand-secondary" : "opacity-80 group-hover:opacity-100"
                      )}
                    >
                      Challenge {String(index + 1).padStart(2, '0')}
                    </span>
                    <p className="text-white text-lg font-medium leading-snug max-w-[280px]">
                      {card.description}
                    </p>
                  </div>
                  
                  {/* Read more link */}
                  <div 
                    className={cn(
                      "absolute bottom-0 flex items-center gap-1 text-brand-secondary text-sm font-medium cursor-pointer transition-all duration-500",
                      isActive 
                        ? "opacity-100 translate-y-0 pointer-events-auto" 
                        : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto"
                    )}
                  >
                    Explore solution <span className="text-lg leading-none">&rsaquo;</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
