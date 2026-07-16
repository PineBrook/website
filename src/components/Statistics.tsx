"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: "25+", label: "YEARS EXPERIENCE" },
  { value: "40%", label: "COST REDUCTION" },
  { value: "50%", label: "PRODUCTIVITY IMP." },
  { value: "98%", label: "SLA COMPLIANCE" },
  { value: "500+", label: "TARGET ORGS" },
  { value: "12+", label: "GLOBAL PROJECTS" },
];

function Counter({ value }: { value: string }) {
  const [displayValue, setDisplayValue] = useState("0");
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/^(\d+)(.*)$/);
    if (!match) {
      setDisplayValue(value);
      return;
    }

    const target = parseInt(match[1], 10);
    const suffix = match[2];
    const duration = 2500;
    const startTime = performance.now();

    let animationFrameId: number;

    const updateCount = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing out quad
      const easeProgress = progress * (2 - progress);
      const current = Math.floor(easeProgress * target);
      
      setDisplayValue(`${current}${suffix}`);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(updateCount);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(updateCount);

    return () => cancelAnimationFrame(animationFrameId);
  }, [value, isInView]);

  return <span ref={ref}>{displayValue}</span>;
}

export function Statistics() {
  return (
    <section className="py-20 border-y border-brand-border bg-brand-surface-low">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                <Counter value={stat.value} />
              </div>
              <div className="eyebrow text-sm font-normal text-white/80 tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
