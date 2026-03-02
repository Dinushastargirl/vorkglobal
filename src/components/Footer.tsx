import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Mail, Github, Twitter, Linkedin, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="pt-24 pb-12 bg-obsidian border-t border-[var(--glass-border)]">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-8 text-text-main">
              Let's build the <br />
              <span className="text-zinc-500">future together.</span>
            </h2>
            <p className="text-text-muted text-lg max-w-md mb-10">
              Ready to transform your digital presence with AI? 
              Reach out to our team of experts today.
            </p>
            <motion.a 
              whileHover={{ scale: 1.02, x: 5 }}
              href="mailto:hello@vork.global" 
              className="inline-flex items-center gap-4 text-2xl font-bold hover:text-accent-cyan transition-colors group text-text-main"
            >
              hello@vork.global
              <ArrowUpRight size={28} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </motion.a>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">Navigation</h4>
              <ul className="space-y-4 text-text-muted">
                <li><Link to="/" className="hover:text-text-main transition-colors">Home</Link></li>
                <li><Link to="/services" className="hover:text-text-main transition-colors">Services</Link></li>
                <li><Link to="/ai-integration" className="hover:text-text-main transition-colors">AI Integration</Link></li>
                <li><Link to="/about" className="hover:text-text-main transition-colors">About</Link></li>
                <li><Link to="/contact" className="hover:text-text-main transition-colors">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-6">Social</h4>
              <ul className="space-y-4 text-text-muted">
                <li><a href="#" className="flex items-center gap-2 hover:text-text-main transition-colors"><Twitter size={18} /> Twitter</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-text-main transition-colors"><Linkedin size={18} /> LinkedIn</a></li>
                <li><a href="#" className="flex items-center gap-2 hover:text-text-main transition-colors"><Github size={18} /> GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-[var(--glass-border)] gap-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-accent-cyan to-accent-steel rounded flex items-center justify-center font-bold text-obsidian text-xs">
              V
            </div>
            <span className="font-bold tracking-tight text-text-main">vork.global</span>
          </Link>
          
          <p className="text-text-muted text-sm">
            © {new Date().getFullYear()} vork.global. All rights reserved.
          </p>

          <div className="flex items-center gap-8 text-sm text-text-muted">
            <a href="#" className="hover:text-text-main transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-text-main transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
