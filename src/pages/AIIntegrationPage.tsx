import { motion } from 'motion/react';
import { Cpu, Brain, Network, Sparkles, Zap, Shield, Search, MessageSquare } from 'lucide-react';

const aiCapabilities = [
  {
    title: "Custom LLM Solutions",
    description: "Fine-tuning large language models on your proprietary data to create secure, brand-aligned intelligence.",
    icon: Brain,
    color: "text-accent-cyan"
  },
  {
    title: "Autonomous Agents",
    description: "Deploying AI agents that can perform complex tasks, from customer support to automated research.",
    icon: Zap,
    color: "text-accent-steel"
  },
  {
    title: "Predictive Analytics",
    description: "Leveraging machine learning to forecast trends, customer churn, and market opportunities.",
    icon: Network,
    color: "text-accent-slate"
  },
  {
    title: "Intelligent Search",
    description: "Implementing semantic search and RAG (Retrieval-Augmented Generation) for your knowledge bases.",
    icon: Search,
    color: "text-accent-cyan"
  }
];

export const AIIntegrationPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      <section className="pt-32 pb-20 bg-obsidian relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-violet/5 rounded-full blur-[100px] -z-10" />
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass-dark text-xs font-medium text-accent-cyan mb-8 border border-accent-cyan/20">
            <Sparkles size={14} />
            <span>AI-First Digital Transformation</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-text-main">
            AI <span className="text-gradient">Integration.</span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            We help enterprises bridge the gap between traditional operations and 
            AI-powered efficiency through strategic integration and custom development.
          </p>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-main">Why AI Integration <span className="text-zinc-500">Matters.</span></h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-cyan/10 flex items-center justify-center shrink-0">
                    <Zap className="text-accent-cyan" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-text-main">Operational Efficiency</h4>
                    <p className="text-text-muted">Automate repetitive tasks and free up your team for high-value strategic work.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-accent-violet/10 flex items-center justify-center shrink-0">
                    <Shield className="text-accent-violet" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-text-main">Data Security</h4>
                    <p className="text-text-muted">Deploy private AI instances that keep your sensitive data within your secure perimeter.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-400/10 flex items-center justify-center shrink-0">
                    <MessageSquare className="text-emerald-400" size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2 text-text-main">Customer Experience</h4>
                    <p className="text-text-muted">Deliver hyper-personalized experiences that drive loyalty and conversion.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="glass p-8 rounded-[3rem] relative z-10">
                <div className="bg-obsidian rounded-[2rem] p-8 aspect-video flex flex-col justify-center">
                  <div className="space-y-4">
                    <div className="h-2 w-3/4 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1.5 }}
                        className="h-full bg-accent-cyan" 
                      />
                    </div>
                    <div className="h-2 w-1/2 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "50%" }}
                        transition={{ duration: 1.5, delay: 0.2 }}
                        className="h-full bg-accent-violet" 
                      />
                    </div>
                    <div className="h-2 w-2/3 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: "66%" }}
                        transition={{ duration: 1.5, delay: 0.4 }}
                        className="h-full bg-emerald-400" 
                      />
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between items-end">
                    <div className="text-4xl font-bold text-white">AI Core</div>
                    <div className="text-accent-cyan text-sm font-mono">ACTIVE_SESSION_01</div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-64 h-64 bg-accent-cyan/10 blur-[100px] -z-10" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aiCapabilities.map((cap, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-10 glass rounded-[2.5rem] flex items-start gap-8"
              >
                <div className={`w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 ${cap.color}`}>
                  <cap.icon size={32} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-4 text-text-main">{cap.title}</h3>
                  <p className="text-text-muted leading-relaxed">
                    {cap.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};
