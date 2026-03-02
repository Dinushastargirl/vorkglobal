import { motion } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon } from 'lucide-react';
import { cn } from '../lib/utils';
import { useTheme } from '../context/ThemeContext';

export const Navbar = () => {
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  
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
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl"
    >
      <div className="glass rounded-full px-6 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-accent-cyan to-accent-steel rounded-lg flex items-center justify-center font-bold text-obsidian text-xl">
            V
          </div>
          <span className="font-bold text-xl tracking-tight">vork.global</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={cn(
                "hover:text-text-main transition-colors",
                location.pathname === link.path && "text-text-main"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full flex items-center justify-center text-text-muted hover:text-text-main transition-colors"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05, backgroundColor: "var(--color-accent-cyan)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-text-main text-[var(--bg-primary)] px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </motion.nav>
  );
};
