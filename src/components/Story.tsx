import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Compass, Award, Shield, Linkedin } from "lucide-react";

export function Story() {
  const [activeStep, setActiveStep] = useState(0);

  const leaders = [
    {
      name: "Anoop Singh",
      role: "Managing Partner",
      bio: "Veteran GCC architect and operational strategist. Deliberately building scalable delivery teams and AI capability centers in regional ecosystems.",
      linkedin: "#"
    },
    {
      name: "Shobhit Tiwari",
      role: "Technology Lead",
      bio: "Oversees regional delivery centers and campus talent pipelines in Uttarakhand, securing strict SLA compliance and operational excellence.",
      linkedin: "#"
    },
    {
      name: "Bharat Singh",
      role: "Director of Operations",
      bio: "Drives technology roadmap execution and precision AI engineering integrations, ensuring resilient architecture for enterprise workflows.",
      linkedin: "#"
    }
  ];

  const valueLoopSteps = [
    {
      title: "Collegiate Sourcing",
      desc: "Partner with regional institutions in Uttarakhand (like UTU) to identify talented engineering graduates directly from campus, bypassing saturated metropolitan job markets."
    },
    {
      title: "SLA Bootcamp",
      desc: "Immersive training program aligning core skills with Fortune 500 delivery standards, focusing on production AI pipelines, modern logic architectures, and rigorous operations governance."
    },
    {
      title: "GCC Integration",
      desc: "Transitioning boot camp graduates into active Global Capability Centres (GCC) under strict delivery governance, ensuring stable scale-out operations."
    },
    {
      title: "Sustainable Employment",
      desc: "Securing stable high-value technology jobs locally in Uttarakhand, preventing brain drain/reverse migration and building local digital ecosystems."
    }
  ];

  return (
    <section className="bg-brand-surface relative overflow-hidden" id="mission">
      
      {/* 1. Immersive Himalayan Hero Section */}
      <div className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {/* Background Himalayas Image with Dark Masking */}
        <div 
          className="absolute inset-0 bg-[url('/images/himalayas.jpg')] bg-cover bg-center" 
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f17]/80 via-brand-surface/70 to-brand-surface" />
        
        {/* Ambient Glows */}
        <div className="absolute top-[30%] left-[10%] w-96 h-96 bg-brand-primary/15 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-96 h-96 bg-brand-secondary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center pt-20">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="eyebrow text-xs sm:text-sm text-brand-secondary tracking-widest block mb-4"
          >
            OUR MISSION & STORY
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-bold text-white tracking-tight mb-6 max-w-4xl mx-auto leading-tight"
          >
            Building the Digital Frontier <br/>
            <span className="bg-gradient-to-r from-white via-brand-accent to-brand-secondary bg-clip-text text-transparent">
              From the Himalayas.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-brand-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            PineBrook fuses high-altitude determination with cutting-edge technical execution to deliver stable, sustainable, and scalable capabilities for global enterprises.
          </motion.p>
        </div>
      </div>

      {/* 2. Brand Story & Strategy Grid + Leadership Container */}
      <div className="relative z-10">
        <div className="container mx-auto px-6 max-w-7xl py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
            
            {/* Left Column: Heading & Interactive Stepper */}
            <div className="sticky top-28">
              <span className="eyebrow text-xs text-brand-secondary block mb-3">FOUNDING VISION</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-snug mb-6">
                Why We Build Away <br/>
                From Saturated Tech Hubs.
              </h2>
              <p className="text-brand-text-muted text-sm leading-relaxed mb-8 max-w-lg">
                Saturated metropolitan corridors face high attrition and unsustainable cost dynamics. We target high-value engineering roles directly within regional technical ecosystems.
              </p>
              
              {/* Interactive Value Loop Infographic (Next.js style stepper) */}
              <div className="p-8 rounded-2xl bg-brand-surface-container/30 border border-brand-border backdrop-blur-md relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/5 rounded-full blur-[40px] pointer-events-none" />
                <span className="eyebrow text-[10px] text-brand-secondary block mb-6">INTERACTIVE VALUE LOOP</span>
                
                {/* Stepper Buttons with connector line */}
                <div className="flex justify-between items-center gap-2 mb-8 relative">
                  <div className="absolute top-1/2 left-2 right-2 h-0.5 bg-brand-border/30 z-0 -translate-y-1/2" />
                  
                  {valueLoopSteps.map((_, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveStep(idx)}
                      className={`relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold border transition-all duration-300 cursor-pointer ${
                        activeStep === idx
                          ? idx === 1
                            ? "bg-brand-secondary border-brand-secondary text-black shadow-[0_0_15px_rgba(90,200,250,0.4)]"
                            : idx === 2
                            ? "bg-brand-accent border-brand-accent text-black shadow-[0_0_15px_rgba(173,198,255,0.4)]"
                            : "bg-brand-primary border-brand-primary text-white shadow-[0_0_15px_rgba(0,122,255,0.4)]"
                          : "bg-brand-surface-low border-brand-border text-brand-text-muted hover:text-white"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  ))}
                </div>

                {/* Step content with animation */}
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="min-h-[120px] flex flex-col justify-center"
                >
                  <span className={`text-[10px] eyebrow font-semibold tracking-wider block mb-2 ${
                    activeStep === 1 
                      ? "text-brand-secondary" 
                      : activeStep === 2 
                      ? "text-brand-accent" 
                      : "text-brand-primary"
                  }`}>
                    STEP {activeStep + 1} • {valueLoopSteps[activeStep].title}
                  </span>
                  <p className="text-sm text-brand-text-muted leading-relaxed">
                    {valueLoopSteps[activeStep].desc}
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Right Column: Waypoint-triggered Storyline Timeline */}
            <div className="relative pl-8 border-l border-brand-border/40 ml-4 md:ml-6 space-y-12">
              
              {/* Waypoint 1 */}
              <div className="relative">
                {/* Node Badge */}
                <div className="absolute -left-[49px] top-1.5 w-8 h-8 rounded-full bg-brand-surface border border-brand-primary/40 shadow-[0_0_12px_rgba(0,122,255,0.2)] flex items-center justify-center text-[10px] font-mono font-bold text-brand-primary">
                  01
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="p-8 rounded-2xl bg-brand-surface-low border border-brand-border hover:border-brand-primary/40 hover:shadow-[0_8px_30px_rgba(0,122,255,0.04)] transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">Sustainable Talent Pipelines</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    Metropolitan operations centers suffer from high attrition and unsustainable cost structures. By investing directly in regional talent ecosystems, PineBrook secures a dedicated, loyal team that guarantees continuous stability.
                  </p>
                </motion.div>
              </div>

              {/* Waypoint 2 */}
              <div className="relative">
                {/* Node Badge */}
                <div className="absolute -left-[49px] top-1.5 w-8 h-8 rounded-full bg-brand-surface border border-brand-secondary/40 shadow-[0_0_12px_rgba(90,200,250,0.2)] flex items-center justify-center text-[10px] font-mono font-bold text-brand-secondary">
                  02
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="p-8 rounded-2xl bg-brand-surface-low border border-brand-border hover:border-brand-secondary/40 hover:shadow-[0_8px_30px_rgba(90,200,250,0.04)] transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">Precision AI & SLA Driven</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    We believe location should enhance, not compromise, quality. Our managed centers enforce strict ITIL governance and robust cybersecurity protocols, assuring 98% SLA compliance for complex enterprise integrations.
                  </p>
                </motion.div>
              </div>

              {/* Waypoint 3 */}
              <div className="relative">
                {/* Node Badge */}
                <div className="absolute -left-[49px] top-1.5 w-8 h-8 rounded-full bg-brand-surface border border-brand-accent/40 shadow-[0_0_12px_rgba(173,198,255,0.2)] flex items-center justify-center text-[10px] font-mono font-bold text-brand-accent">
                  03
                </div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ type: "spring", duration: 0.6 }}
                  className="p-8 rounded-2xl bg-brand-surface-low border border-brand-border hover:border-brand-accent/40 hover:shadow-[0_8px_30px_rgba(173,198,255,0.04)] transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-white mb-2">Socio-Economic Development</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    Every operation established at PineBrook helps support regional families, fuels digital literacy, and demonstrates that world-class engineering centers can thrive away from saturated major cities.
                  </p>
                </motion.div>
              </div>
            </div>

          </div>

          {/* 3. Leadership Section */}
          <div className="border-t border-brand-border/50 pt-24">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <span className="eyebrow text-xs text-brand-secondary block mb-3">PINEBROOK LEADERSHIP</span>
              <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-4">
                Embedded Leadership
              </h2>
              <p className="text-brand-text-muted text-sm sm:text-base">
                Veteran technology builders and operators guiding our regional capability centers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {leaders.map((leader, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-6 rounded-[20px] bg-brand-surface-low border border-brand-border flex flex-col h-full hover:scale-[1.01] hover:border-brand-secondary hover:shadow-[0_10px_30px_rgba(90,200,250,0.05)] transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-white leading-none">{leader.name}</h3>
                    <a
                      href={leader.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-text-muted hover:text-white transition-colors p-1"
                      aria-label={`${leader.name} LinkedIn Profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                  
                  <span className="text-xs font-semibold eyebrow text-brand-secondary block mb-4">
                    {leader.role}
                  </span>
                  
                  <p className="text-brand-text-muted text-xs leading-relaxed flex-grow">
                    {leader.bio}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
