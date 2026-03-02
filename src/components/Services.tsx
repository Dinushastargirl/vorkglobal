import { motion } from 'motion/react';
import { Cpu, Globe, Layers, Zap, Shield, BarChart } from 'lucide-react';

const services = [
  {
    title: "AI Strategy & Consulting",
    description: "Navigating the complex landscape of artificial intelligence to identify high-impact opportunities for your business.",
    icon: Cpu,
    color: "text-accent-cyan"
  },
  {
    title: "Digital Ecosystems",
    description: "Building interconnected platforms that deliver seamless experiences across all touchpoints.",
    icon: Globe,
    color: "text-accent-violet"
  },
  {
    title: "Intelligent Automation",
    description: "Streamlining operations through custom-built AI agents and automated workflows.",
    icon: Zap,
    color: "text-amber-400"
  },
  {
    title: "Data Architecture",
    description: "Designing robust, scalable data infrastructures that serve as the backbone for AI insights.",
    icon: Layers,
    color: "text-emerald-400"
  },
  {
    title: "Enterprise Security",
    description: "Protecting your digital assets with advanced, AI-powered threat detection and security protocols.",
    icon: Shield,
    color: "text-rose-400"
  },
  {
    title: "Predictive Analytics",
    description: "Transforming raw data into actionable foresight to drive strategic decision-making.",
    icon: BarChart,
    color: "text-indigo-400"
  }
];

export const Services = () => {
  return (
    <section id="services" className="py-24 bg-charcoal relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent-cyan mb-4">Our Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold tracking-tight">
            Comprehensive solutions for the <br />
            <span className="text-zinc-500">intelligence era.</span>
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 glass rounded-3xl hover:bg-white/[0.08] transition-all duration-500 cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500 ${service.color}`}>
                <service.icon size={24} />
              </div>
              <h4 className="text-xl font-bold mb-4 group-hover:text-accent-cyan transition-colors">{service.title}</h4>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
