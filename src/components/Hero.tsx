import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-cyan/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-accent-violet/10 rounded-full blur-[100px] -z-10" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--glass-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--glass-border)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-20" />

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 text-center"
      >
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass text-xs font-medium text-accent-cyan mb-8 border border-accent-cyan/20"
        >
          <Sparkles size={14} />
          <span>The Future of Digital Intelligence</span>
        </motion.div>

        <motion.h1 
          variants={itemVariants}
          className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 leading-[1.1] text-text-main"
        >
          Architecting <br />
          <span className="text-gradient">AI-Driven</span> Excellence
        </motion.h1>

        <motion.p 
          variants={itemVariants}
          className="text-text-muted text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          vork.global empowers visionary brands with bespoke AI solutions, 
          seamless digital ecosystems, and future-proof technological foundations.
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent-cyan)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-8 py-4 bg-text-main text-[var(--bg-primary)] rounded-full font-bold text-lg overflow-hidden transition-all"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start Your Journey <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </span>
          </motion.button>
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "var(--glass-border)" }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 glass rounded-full font-bold text-lg transition-all text-text-main"
          >
            View Case Studies
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Abstract 3D-like Graphic with Parallax */}
      <motion.div 
        style={{ y, opacity, scale }}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="mt-20 relative w-full max-w-5xl aspect-video mx-auto px-6"
      >
        <div className="absolute inset-0 glass rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/20 via-transparent to-accent-violet/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            {/* Animated Neural Network Representation */}
            <div className="relative w-full h-full">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-accent-cyan rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0.2, 1, 0.2],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                />
              ))}
              <svg className="w-full h-full opacity-20">
                <defs>
                  <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#22d3ee" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <motion.path
                  d="M 100 100 Q 300 50 500 200 T 900 100"
                  stroke="url(#line-grad)"
                  strokeWidth="2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <motion.path
                  d="M 50 300 Q 400 400 800 200"
                  stroke="url(#line-grad)"
                  strokeWidth="1"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear", delay: 1 }}
                />
              </svg>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent-cyan/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-violet/20 rounded-full blur-2xl animate-pulse" />
      </motion.div>
    </section>
  );
};

