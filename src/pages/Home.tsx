import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { AIIntegration } from '../components/AIIntegration';
import { motion } from 'motion/react';

export const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <AIIntegration />
      
      {/* Featured Section inspired by Surge */}
      <section className="py-24 bg-obsidian border-y border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <div className="glass p-8 rounded-[2.5rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-cyan/10 blur-3xl" />
                <img 
                  src="https://picsum.photos/seed/tech-surge/800/600" 
                  alt="Innovation" 
                  className="rounded-2xl w-full h-auto grayscale hover:grayscale-0 transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent-cyan mb-4">Our Philosophy</h2>
              <h3 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                Data-driven <br />
                <span className="text-gradient">Growth Engines.</span>
              </h3>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                We don't just build websites; we engineer digital growth engines. By combining 
                performance marketing with cutting-edge AI, we help brands scale at 
                unprecedented speeds.
              </p>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <div className="text-3xl font-bold text-white mb-1">98%</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">Client Retention</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white mb-1">250+</div>
                  <div className="text-sm text-zinc-500 uppercase tracking-wider">AI Deployments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
