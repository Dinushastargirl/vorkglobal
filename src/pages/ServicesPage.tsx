import { motion } from 'motion/react';
import { Cpu, Globe, Layers, Zap, Shield, BarChart, Search, Target, TrendingUp, Code, Database, Layout as LayoutIcon } from 'lucide-react';

const detailedServices = [
  {
    title: "Performance Marketing",
    description: "Data-driven strategies designed to scale your brand through paid acquisition, SEO, and conversion optimization.",
    icon: TrendingUp,
    color: "text-accent-steel",
    features: ["Paid Search & Social", "SEO & Content Marketing", "Conversion Rate Optimization (CRO)", "Marketing Analytics"]
  },
  {
    title: "AI & Machine Learning",
    description: "Custom AI solutions that automate workflows, predict customer behavior, and drive intelligent decision-making.",
    icon: Cpu,
    color: "text-accent-cyan",
    features: ["Custom LLM Training", "Predictive Modeling", "AI Agents & Automation", "Natural Language Processing"]
  },
  {
    title: "Digital Product Engineering",
    description: "Building scalable, high-performance web and mobile applications that deliver exceptional user experiences.",
    icon: Code,
    color: "text-accent-slate",
    features: ["Full-stack Development", "Mobile App Development", "Cloud Architecture", "API Integration"]
  },
  {
    title: "Data & Analytics",
    description: "Transforming raw data into actionable insights through advanced tracking, visualization, and modeling.",
    icon: Database,
    color: "text-accent-steel",
    features: ["Data Warehousing", "Business Intelligence", "Advanced Tracking", "Customer Data Platforms"]
  },
  {
    title: "UX/UI Design",
    description: "Crafting intuitive, beautiful digital experiences that resonate with your audience and drive engagement.",
    icon: LayoutIcon,
    color: "text-accent-cyan",
    features: ["User Research", "Interface Design", "Prototyping", "Design Systems"]
  },
  {
    title: "Strategic Consulting",
    description: "Helping brands navigate the digital landscape and identify high-impact opportunities for growth.",
    icon: Target,
    color: "text-accent-slate",
    features: ["Digital Transformation", "Market Analysis", "Growth Strategy", "Technology Audits"]
  }
];

export const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      <section className="pt-32 pb-20 bg-obsidian relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-cyan/5 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-text-main">
            Our <span className="text-gradient">Services.</span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We offer a comprehensive suite of digital solutions designed to help 
            modern brands thrive in an AI-first world.
          </p>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 glass rounded-[2.5rem] hover:bg-white/[0.08] transition-all duration-500"
              >
                <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 ${service.color}`}>
                  <service.icon size={28} />
                </div>
                <h2 className="text-2xl font-bold mb-4 group-hover:text-accent-cyan transition-colors text-text-main">{service.title}</h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-center gap-2 text-sm text-text-muted">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent-cyan/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-obsidian">
        <div className="container mx-auto px-6">
          <div className="glass p-12 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-violet/10 blur-3xl" />
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to scale your <span className="text-gradient">digital presence?</span></h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-12">
              Our team of experts is ready to help you navigate the future of digital growth. 
              Let's build something extraordinary together.
            </p>
            <button className="px-10 py-5 bg-white text-obsidian rounded-full font-bold text-lg hover:bg-accent-cyan transition-all">
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
