import { ReactNode } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="relative min-h-screen bg-obsidian text-zinc-100 selection:bg-accent-cyan/30 selection:text-accent-cyan">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};
