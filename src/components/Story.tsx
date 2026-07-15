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

      {/* 2. The PineBrook Blueprint (1x5 Horizontal 3D Flip Grid) */}
      <div className="container mx-auto px-6 max-w-7xl py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow text-xs text-brand-secondary block mb-3">OUR OPERATING MODEL</span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            The PineBrook Blueprint
          </h2>
          <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">
            Hover over each step of our framework to reveal how we deliver high-performance regional engineering.
          </p>
        </div>

        {/* 1x5 Horizontal Grid with 3D Flip Effect */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 [perspective:1000px]">
          {blueprintSteps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ type: "spring", duration: 0.6, delay: idx * 0.1 }}
              className="relative w-full h-[320px] rounded-2xl cursor-pointer group"
            >
              {/* Card Inner Container for 3D rotation */}
              <div className="absolute inset-0 w-full h-full rounded-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-xl">
                
                {/* 1. FRONT SIDE: Sharp Image + Frosted Text Container */}
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-brand-surface-container border border-white/10 overflow-hidden [backface-visibility:hidden] flex flex-col justify-end">
                  {/* Background Image (Sharp) */}
                  <img
                    src={step.image}
                    alt={step.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-60 transition-opacity duration-300"
                  />
                  {/* Faint vignette mask overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-surface/60 via-transparent to-transparent" />
                  
                  {/* Frosted text container at the bottom of the card */}
                  <div className="absolute inset-x-0 bottom-0 p-5 bg-black/60 backdrop-blur-md border-t border-white/10 z-10">
                    <span className="font-mono text-xs font-bold text-brand-secondary block mb-1">{step.step}</span>
                    <h3 className="text-lg md:text-xl font-display font-bold text-white leading-tight">{step.title}</h3>
                  </div>
                </div>

                {/* 2. BACK SIDE: Detailed Text Description */}
                <div className="absolute inset-0 w-full h-full rounded-2xl bg-[#0c0f17]/95 border border-brand-primary/30 flex flex-col justify-between p-6 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-[0_0_20px_rgba(0,122,255,0.1)]">
                  <div>
                    <span className="font-mono text-xs font-bold text-brand-primary block mb-3">{step.step}</span>
                    <h3 className="text-base md:text-lg font-display font-bold text-white mb-3 leading-tight">{step.title}</h3>
                    <p className="text-[13px] text-brand-text-muted leading-relaxed">{step.desc}</p>
                  </div>
                  {/* Glowing blue accent bar on back bottom */}
                  <div className="h-1 w-10 bg-brand-primary rounded-full" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Leadership Section */}
        <div className="border-t border-brand-border/50 pt-24 mt-32">
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
    </section>
  );
}
