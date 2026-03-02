import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../lib/utils';

export const Navbar = () => {
  const location = useLocation();
  
  const navLinks = [
    { name: 'Services', path: '/services' },
    { name: 'AI Integration', path: '/ai-integration' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-4xl"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-violet rounded-lg flex items-center justify-center font-bold text-obsidian text-xl">
            V
          </div>
          <span className="font-bold text-xl tracking-tight">vork.global</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "hover:text-white transition-colors",
                location.pathname === link.path && "text-white"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <motion.button 
          whileHover={{ scale: 1.05, backgroundColor: "#22d3ee" }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-obsidian px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </motion.nav>
  );
};
