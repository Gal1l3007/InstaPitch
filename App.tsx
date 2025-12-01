import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import ExamplesSection from './components/ExamplesSection';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ href, children }) => (
  <a 
    href={href} 
    className="relative text-sm font-medium text-slate-400 hover:text-white transition-colors group"
  >
    {children}
    <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full"></span>
  </a>
);

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll detection for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#05040a] text-slate-300 font-sans selection:bg-cyan-500/30 selection:text-cyan-200 overflow-x-hidden">
      
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-[#05040a]/80 backdrop-blur-xl border-white/5 py-4' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span className="text-2xl font-extrabold text-white tracking-tighter">InstaPitch</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <NavLink href="#philosophy">Philosophy</NavLink>
            <NavLink href="#examples">Examples</NavLink>
            <div className="pl-4 border-l border-white/10">
              <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[10px] font-bold tracking-wider uppercase text-cyan-400 shadow-[0_0_10px_-3px_rgba(34,211,238,0.3)]">
                Half Baked x Bolt
              </div>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white p-2">
              {mobileMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#05040a] pt-32 px-6 md:hidden">
          <div className="flex flex-col gap-8 text-2xl font-bold">
            <a href="#philosophy" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white">Philosophy</a>
            <a href="#examples" onClick={() => setMobileMenuOpen(false)} className="text-white/80 hover:text-white">Examples</a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <HeroSection />

      {/* Philosophy / Contrast Section */}
      <PhilosophySection />

      {/* Examples Section */}
      <ExamplesSection />

      {/* Footer */}
      <footer className="py-16 border-t border-white/5 bg-[#020103]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
          <span className="text-3xl font-extrabold text-white tracking-tighter mb-6 crisp-heading">InstaPitch</span>
          <p className="text-slate-600 text-sm mb-8 text-center max-w-md leading-relaxed">
            Built for the Half Baked x Bolt Hackathon. <br />
            Demonstrating the power of prompt engineering over traditional backend architecture.
          </p>
          <div className="flex gap-8 text-slate-500 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
            <a href="#" className="hover:text-white transition-colors">GitHub</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;