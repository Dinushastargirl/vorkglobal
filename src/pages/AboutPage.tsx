import { motion } from 'motion/react';
import { Users, Target, Award, Globe } from 'lucide-react';

export const AboutPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-24"
    >
      <section className="pt-32 pb-20 bg-obsidian relative overflow-hidden">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-text-main">
            Our <span className="text-gradient">Story.</span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            vork.global was founded on the belief that the intersection of human 
            creativity and artificial intelligence is the most powerful force for 
            digital growth.
          </p>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
            <div className="relative">
              <div className="glass p-4 rounded-[3rem] rotate-2">
                <img 
                  src="https://picsum.photos/seed/vork-team/800/1000" 
                  alt="Our Team" 
                  className="rounded-[2.5rem] w-full h-auto grayscale"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent-violet/10 blur-[100px] -z-10" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-text-main">Engineering the <span className="text-zinc-500">Future.</span></h2>
              <p className="text-text-muted text-lg mb-8 leading-relaxed">
                Based in the heart of the digital revolution, vork.global is a collective 
                of engineers, designers, and strategists dedicated to pushing the 
                boundaries of what's possible.
              </p>
              <p className="text-text-muted text-lg mb-12 leading-relaxed">
                We partner with forward-thinking companies to build digital products 
                and growth engines that don't just compete—they define their categories.
              </p>
              
              <div className="grid grid-cols-2 gap-8">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-cyan/10 flex items-center justify-center">
                    <Users className="text-accent-cyan" size={20} />
                  </div>
                  <span className="font-bold">50+ Experts</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-violet/10 flex items-center justify-center">
                    <Globe className="text-accent-violet" size={20} />
                  </div>
                  <span className="font-bold">Global Reach</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-steel/10 flex items-center justify-center">
                    <Target className="text-accent-steel" size={20} />
                  </div>
                  <span className="font-bold">Results Driven</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent-slate/10 flex items-center justify-center">
                    <Award className="text-accent-slate" size={20} />
                  </div>
                  <span className="font-bold">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
