import { motion } from "motion/react";
import { Compass, Award, Shield, Linkedin, GraduationCap, Zap, Heart } from "lucide-react";

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
      icon: GraduationCap,
      title: "Collegiate Sourcing",
      desc: "We partner directly with leading regional universities in Uttarakhand (like UTU) to identify and onboard top-tier engineering talent directly from campus, bypassing saturated metro recruiting cycles.",
      accent: "from-brand-primary to-[#0055ff]"
    },
    {
      step: "02",
      icon: Zap,
      title: "SLA Bootcamp",
      desc: "Onboarded graduates enter an intensive technical boot camp focused on enterprise delivery standards, production AI pipelines, modern data architectures, and strict ITIL operations governance.",
      accent: "from-brand-secondary to-[#00b0ff]"
    },
    {
      step: "03",
      icon: Compass,
      title: "Managed GCC Integration",
      desc: "Boot camp graduates transition seamlessly into dedicated Global Capability Centres (GCC) with secure networking, structured oversight, and redundant operations.",
      accent: "from-brand-accent to-[#8fa9ff]"
    },
    {
      step: "04",
      icon: Award,
      title: "Precision SLA Execution",
      desc: "Our delivery teams operate under strict operational governance and robust cybersecurity protocols, guaranteeing 98% SLA compliance for complex enterprise tech integrations.",
      accent: "from-brand-primary to-brand-secondary"
    },
    {
      step: "05",
      icon: Heart,
      title: "Socio-Economic Impact",
      desc: "By establishing high-value technical careers in Uttarakhand, we prevent brain drain and reverse migration while fueling the growth of a resilient local digital ecosystem.",
      accent: "from-brand-secondary to-brand-accent"
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

      {/* 2. The PineBrook Blueprint (5-Step Staggered Story Timeline with hover effects) */}
      <div className="container mx-auto px-6 max-w-5xl py-24 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="eyebrow text-xs text-brand-secondary block mb-3">OUR OPERATING MODEL</span>
          <h2 className="text-3xl md:text-4xl font-display font-semibold text-white mb-6">
            The PineBrook Blueprint
          </h2>
          <p className="text-brand-text-muted text-sm sm:text-base leading-relaxed">
            Our end-to-end framework for sourcing talent, enforcing enterprise SLAs, and delivering top-tier operational engineering from regional technical hubs.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-6">
          {blueprintSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ type: "spring", duration: 0.6 }}
                className="group p-8 rounded-2xl bg-[#0c0f17]/50 border border-brand-border hover:border-brand-primary/40 hover:bg-[#0c0f17]/80 hover:shadow-[0_8px_30px_rgba(0,122,255,0.06)] hover:scale-[1.01] transition-all duration-300 flex flex-col md:flex-row gap-6 items-start md:items-center relative overflow-hidden"
              >
                {/* Background glow accent on hover */}
                <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${step.accent} opacity-40 group-hover:opacity-100 transition-opacity duration-300`} />
                
                {/* Number Badge */}
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-brand-surface-low border border-brand-border flex items-center justify-center font-mono text-sm font-bold text-white group-hover:border-brand-secondary/40 transition-colors">
                  {step.step}
                </div>

                {/* Icon Circle */}
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-5 h-5 text-brand-secondary" />
                </div>

                {/* Details */}
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-brand-secondary transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-brand-text-muted text-sm leading-relaxed max-w-3xl">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
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
