import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

export function Story() {
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

  const blueprintSteps = [
    {
      step: "01",
      title: "Collegiate Sourcing",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=400&auto=format&fit=crop",
      desc: "Partnering directly with leading regional universities in Uttarakhand to identify and onboard top-tier engineering talent directly from campus."
    },
    {
      step: "02",
      title: "SLA Bootcamp",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=400&auto=format&fit=crop",
      desc: "An intensive technical boot camp focused on enterprise standards, production AI pipelines, and strict operations governance."
    },
    {
      step: "03",
      title: "GCC Integration",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=400&auto=format&fit=crop",
      desc: "Transitioning graduates into active Global Capability Centres with secure integrations, structured oversight, and redundant operations."
    },
    {
      step: "04",
      title: "Precision Execution",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=400&auto=format&fit=crop",
      desc: "Enforcing strict ITIL governance and robust cybersecurity protocols, assuring 98% SLA compliance for complex enterprise integrations."
    },
    {
      step: "05",
      title: "Socio-Economic Impact",
      image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=400&auto=format&fit=crop",
      desc: "Establishing high-value technical careers in Uttarakhand, preventing brain drain and reverse migration while building regional ecosystems."
    }
  ];

  return (
    <section className="bg-brand-surface relative overflow-hidden" id="mission">
      
      {/* 1. Immersive Himalayan Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Himalayas Image with Dark Masking */}
        <div 
          className="absolute inset-0 bg-[url('/images/himalayas.jpg')] bg-cover bg-center" 
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0c0f17]/50 via-brand-surface/40 to-[#121625]" />
        
        {/* Ambient Glows */}
        <div className="absolute top-[20%] left-[10%] w-[600px] h-[600px] bg-brand-primary/25 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-[5%] right-[10%] w-[600px] h-[600px] bg-brand-secondary/20 rounded-full blur-[140px] pointer-events-none" />

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

      {/* 2. The PineBrook Blueprint (1x5 Horizontal 3D Flip Grid) */}
      <div className="relative bg-[#121625] z-10">
        {/* Central Ambient Blueprint Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-primary/10 rounded-full blur-[150px] pointer-events-none z-0" />
        
        <div className="container mx-auto px-6 max-w-7xl py-24 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="eyebrow text-xs text-brand-secondary block mb-3">OUR OPERATING MODEL</span>
            <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
              The PineBrook Blueprint
            </h2>
            <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">
              Hover over each step of our framework to reveal how we deliver high-performance engineering.
            </p>
          </div>

          {/* 1x5 Horizontal Grid with 3D Flip Effect */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 [perspective:1000px]">
            {blueprintSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", duration: 0.6, delay: idx * 0.1 }}
                className="relative w-full h-[300px] rounded-2xl cursor-pointer group"
              >
                {/* Card Inner Container for 3D rotation */}
                <div className="absolute inset-0 w-full h-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
                  
                  {/* 1. FRONT SIDE: Sharp Panoramic Split Image */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl bg-brand-surface-container border border-white/20 overflow-hidden [backface-visibility:hidden] flex flex-col justify-end">
                    {/* Background Image (Shared Panoramic split) */}
                    <div className={`absolute inset-0 w-full h-full opacity-80 group-hover:opacity-100 transition-opacity duration-300 card-split-bg-${idx}`} />
                    {/* Vignette mask overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-0" />
                    
                    {/* Title directly on vignette backdrop */}
                    <div className="absolute inset-x-0 bottom-0 p-5 z-10">
                      <h3 className="text-lg md:text-xl font-display font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">{step.title}</h3>
                    </div>
                  </div>

                  {/* 2. BACK SIDE: Detailed Text Description */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#181d30]/95 border border-brand-secondary/50 flex flex-col justify-between p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_0_25px_rgba(90,200,250,0.15)]">
                    <div>
                      <h3 className="text-base md:text-lg font-display font-bold text-white mb-3 leading-tight">{step.title}</h3>
                      <p className="text-[15px] text-brand-text-muted leading-relaxed">{step.desc}</p>
                    </div>
                    <div>
                      {/* Number just above the _ */}
                      <span className="font-mono text-m font-bold text-brand-primary block mb-2">{step.step}</span>
                      {/* Glowing blue accent bar on back bottom */}
                      <div className="h-1 w-10 bg-brand-primary rounded-full" />
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </div>

        {/* 3. Leadership Section */}
        <div className="border-t border-brand-border/50 pt-24 mt-32 relative">
          {/* Semi-circular glowing light sources from both ends */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-[400px] rounded-r-full bg-brand-primary/20 blur-[95px] pointer-events-none z-0" />
          <div className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-[400px] rounded-l-full bg-brand-secondary/15 blur-[95px] pointer-events-none z-0" />
          
          <div className="relative z-10">
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
      </div>
    </section>
  );
}
