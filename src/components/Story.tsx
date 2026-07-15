import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Users, Compass, Award, Shield, Linkedin } from "lucide-react";

interface Leader {
  name: string;
  role: string;
  image: string;
  bio: string;
  linkedin: string;
}

export function Story() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const pathLength = useTransform(scrollYProgress, [0.05, 0.95], [0, 1]);

  const leaders = [
    {
      name: "Anoop Singh",
      role: "Managing Partner",
      bio: "Veteran GCC architect and operational strategist. Deliberately building scalable delivery teams and AI capability centers in regional ecosystems.",
      linkedin: "#"
    },
    {
      name: "Shobhit Tiwari",
      role: "Director of Operations",
      bio: "Oversees regional delivery centers and campus talent pipelines in Uttarakhand, securing strict SLA compliance and operational excellence.",
      linkedin: "#"
    },
    {
      name: "Bharat Singh",
      role: "Technology Lead",
      bio: "Drives technology roadmap execution and precision AI engineering integrations, ensuring resilient architecture for enterprise workflows.",
      linkedin: "#"
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
      <div ref={containerRef} className="relative z-10">
        
        {/* Glowing Scroll Light Beam Overlay */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden select-none z-0">
          {/* Desktop Swaying & Splitting Beam */}
          <svg className="hidden md:block w-full h-full absolute inset-0" viewBox="0 0 1000 1200" preserveAspectRatio="none" fill="none">
            {/* Ambient Background Blur Paths */}
            <motion.path
              d="M 500 0 C 500 150, 450 300, 480 450 C 520 600, 500 750, 500 780 C 500 850, 160 880, 160 1050"
              stroke="#007AFF"
              strokeWidth="12"
              strokeLinecap="round"
              className="opacity-5 blur-[12px]"
              style={{ pathLength }}
            />
            <motion.path
              d="M 500 0 C 500 150, 450 300, 480 450 C 520 600, 500 750, 500 780 C 500 850, 500 880, 500 1050"
              stroke="#5AC8FA"
              strokeWidth="12"
              strokeLinecap="round"
              className="opacity-5 blur-[12px]"
              style={{ pathLength }}
            />
            <motion.path
              d="M 500 0 C 500 150, 450 300, 480 450 C 520 600, 500 750, 500 780 C 500 850, 840 880, 840 1050"
              stroke="#007AFF"
              strokeWidth="12"
              strokeLinecap="round"
              className="opacity-5 blur-[12px]"
              style={{ pathLength }}
            />

            {/* Sharp Glowing Foreground Paths (Translucent) */}
            <motion.path
              d="M 500 0 C 500 150, 450 300, 480 450 C 520 600, 500 750, 500 780 C 500 850, 160 880, 160 1050"
              stroke="url(#beamBlueGrad)"
              strokeWidth="2.5"
              strokeOpacity="0.45"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <motion.path
              d="M 500 0 C 500 150, 450 300, 480 450 C 520 600, 500 750, 500 780 C 500 850, 500 880, 500 1050"
              stroke="url(#beamCyanGrad)"
              strokeWidth="2.5"
              strokeOpacity="0.45"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <motion.path
              d="M 500 0 C 500 150, 450 300, 480 450 C 520 600, 500 750, 500 780 C 500 850, 840 880, 840 1050"
              stroke="url(#beamBlueGrad)"
              strokeWidth="2.5"
              strokeOpacity="0.45"
              strokeLinecap="round"
              style={{ pathLength }}
            />

            <defs>
              <linearGradient id="beamBlueGrad" x1="0" y1="0" x2="0" y2="100%">
                <stop stopColor="#007AFF" />
                <stop offset="1" stopColor="#5AC8FA" />
              </linearGradient>
              <linearGradient id="beamCyanGrad" x1="0" y1="0" x2="0" y2="100%">
                <stop stopColor="#5AC8FA" />
                <stop offset="1" stopColor="#007AFF" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile Single Swaying Beam */}
          <svg className="md:hidden w-full h-full absolute inset-0" viewBox="0 0 100 1200" preserveAspectRatio="none" fill="none">
            {/* Ambient Background Blur Path */}
            <motion.path
              d="M 50 0 C 50 150, 30 300, 70 450 C 40 600, 60 750, 50 900 C 50 1000, 50 1100, 50 1150"
              stroke="#007AFF"
              strokeWidth="10"
              strokeLinecap="round"
              className="opacity-5 blur-[8px]"
              style={{ pathLength }}
            />
            {/* Sharp Foreground Path (Translucent) */}
            <motion.path
              d="M 50 0 C 50 150, 30 300, 70 450 C 40 600, 60 750, 50 900 C 50 1000, 50 1100, 50 1150"
              stroke="url(#mobileBeamGrad)"
              strokeWidth="2"
              strokeOpacity="0.45"
              strokeLinecap="round"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="mobileBeamGrad" x1="0" y1="0" x2="0" y2="100%">
                <stop stopColor="#007AFF" />
                <stop offset="1" stopColor="#5AC8FA" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container mx-auto px-6 max-w-7xl py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-32">
          {/* Left Column: Heading */}
          <div>
            <span className="eyebrow text-xs text-brand-secondary block mb-3">FOUNDING VISION</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white leading-snug">
              Why We Build Away <br/>
              From Saturated Tech Hubs.
            </h2>
            
            {/* Value loop flow infographic */}
            <div className="mt-12 p-8 rounded-2xl bg-brand-surface-container/40 border border-brand-border">
              <span className="eyebrow text-[10px] text-brand-secondary block mb-4">THE VALUE LOOP</span>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-primary/10 border border-brand-primary/30 flex items-center justify-center text-xs font-mono text-brand-primary">1</div>
                  <span className="text-sm font-medium text-white">Partner with local technical colleges in Uttarakhand.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-secondary/10 border border-brand-secondary/30 flex items-center justify-center text-xs font-mono text-brand-secondary">2</div>
                  <span className="text-sm font-medium text-white">Intensive technical training aligned with enterprise SLAs.</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center text-xs font-mono text-brand-accent">3</div>
                  <span className="text-sm font-medium text-white">Prevent brain drain/reverse migration via high-value local jobs.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Detailed narrative cards */}
          <div className="space-y-8">
            <div className="p-8 rounded-2xl bg-brand-surface-low border border-brand-border/60 hover:border-brand-primary transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-brand-surface-high border border-brand-border flex items-center justify-center flex-shrink-0">
                  <Compass className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Sustainable Talent Pipelines</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    Metropolitan operations centers suffer from high attrition and unsustainable cost structures. By investing directly in regional talent ecosystems, PineBrook secures a dedicated, loyal team that guarantees continuous stability.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface-low border border-brand-border/60 hover:border-brand-primary transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-brand-surface-high border border-brand-border flex items-center justify-center flex-shrink-0">
                  <Award className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Precision AI & SLA Driven</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    We believe location should enhance, not compromise, quality. Our managed centers enforce strict ITIL governance and robust cybersecurity protocols, assuring 98% SLA compliance for complex enterprise integrations.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-brand-surface-low border border-brand-border/60 hover:border-brand-primary transition-all duration-300">
              <div className="flex gap-4 items-start">
                <div className="w-10 h-10 rounded-lg bg-brand-surface-high border border-brand-border flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-brand-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">Socio-Economic Development</h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed">
                    Every operation established at PineBrook helps support regional families, fuels digital literacy, and demonstrates that world-class engineering centers can thrive away from saturated major cities.
                  </p>
                </div>
              </div>
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
