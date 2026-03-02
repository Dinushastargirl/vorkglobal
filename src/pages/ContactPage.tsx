import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const ContactPage = () => {
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
            Get in <span className="text-gradient">Touch.</span>
          </h1>
          <p className="text-text-muted text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you. 
            Fill out the form below or reach out directly.
          </p>
        </div>
      </section>

      <section className="py-24 bg-charcoal">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold mb-12 text-text-main">Contact <span className="text-zinc-500">Information.</span></h2>
              <div className="space-y-10">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                    <Mail className="text-accent-cyan" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-text-main">Email Us</h4>
                    <p className="text-text-muted">hello@vork.global</p>
                    <p className="text-text-muted">support@vork.global</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                    <Phone className="text-accent-violet" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-text-main">Call Us</h4>
                    <p className="text-text-muted">+1 (555) 000-0000</p>
                    <p className="text-text-muted">Mon - Fri, 9am - 6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-2xl glass flex items-center justify-center shrink-0">
                    <MapPin className="text-accent-steel" size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1 text-text-main">Visit Us</h4>
                    <p className="text-text-muted">123 Innovation Drive</p>
                    <p className="text-text-muted">Tech City, TC 12345</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass p-10 rounded-[3rem]">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-[var(--glass-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-cyan transition-colors text-text-main"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-white/5 border border-[var(--glass-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-cyan transition-colors text-text-main"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full bg-white/5 border border-[var(--glass-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-cyan transition-colors text-text-main"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold uppercase tracking-wider text-text-muted">Message</label>
                  <textarea 
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/5 border border-[var(--glass-border)] rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-cyan transition-colors resize-none text-text-main"
                  />
                </div>
                <button className="w-full py-5 bg-accent-cyan text-obsidian rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-text-main hover:text-[var(--bg-primary)] transition-all">
                  Send Message <Send size={20} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};
