import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export const AIIntegration = () => {
  return (
    <section id="ai" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="flex-1">
            <h2 className="text-sm font-bold uppercase tracking-[0.2em] text-accent-violet mb-4">AI Integration</h2>
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight mb-8">
              Seamlessly embedding <br />
              <span className="text-gradient">intelligence</span> into your core.
            </h3>
            
            <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
              We don't just add AI as a feature; we integrate it into your business logic, 
              creating systems that learn, adapt, and evolve with your needs.
            </p>

            <div className="space-y-4">
              {[
                "Custom LLM Fine-tuning",
                "Computer Vision Systems",
                "Natural Language Processing",
                "Autonomous Agent Development"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="text-accent-cyan" size={20} />
                  <span className="text-zinc-200 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "#8b5cf6", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="mt-12 px-8 py-4 bg-white text-obsidian rounded-full font-bold transition-all"
            >
              Explore Our Tech Stack
            </motion.button>
          </div>

          <div className="flex-1 relative">
            <div className="relative z-10 glass p-4 rounded-[2.5rem] rotate-3 hover:rotate-0 transition-transform duration-700">
              <div className="bg-obsidian rounded-[2rem] overflow-hidden aspect-square flex items-center justify-center p-12">
                {/* Abstract AI Core Visualization */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 border-2 border-dashed border-accent-cyan/30 rounded-full"
                  />
                  <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 border-2 border-dashed border-accent-violet/30 rounded-full"
                  />
                  <div className="w-32 h-32 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-full blur-2xl opacity-50 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 glass rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-white rounded-full animate-ping opacity-20" />
                      <div className="absolute w-4 h-4 bg-white rounded-full" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-accent-violet/20 blur-[100px] -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};
