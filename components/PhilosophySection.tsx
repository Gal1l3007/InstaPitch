import React from 'react';
import { Cpu, ArrowRight, X, CheckCircle2, Zap } from 'lucide-react';

const PhilosophySection: React.FC = () => {
  return (
    <section id="philosophy" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side: Text */}
          <div className="md:w-5/12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-wider mb-6">
              <Cpu size={14} />
              <span>Architecture</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight crisp-heading">
              Prompt-as-Code. <br />
              <span className="text-slate-500">The backend is gone.</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Traditional pitch generators rely on rigid templates and complex databases. 
              We replaced the infrastructure with pure generative intelligence. 
              Zero friction, infinite variations.
            </p>
            
            {/* Stat */}
            <div className="flex items-center gap-8 border-t border-white/5 pt-8">
               <div>
                  <div className="text-3xl font-bold text-white crisp-heading">40h</div>
                  <div className="text-sm text-slate-500 mt-1">Manual Drafting</div>
               </div>
               <ArrowRight className="text-slate-700" />
               <div>
                  <div className="text-3xl font-bold text-cyan-400 crisp-heading">30s</div>
                  <div className="text-sm text-slate-500 mt-1">InstaPitch</div>
               </div>
            </div>
          </div>

          {/* Right Side: Comparison Cards */}
          <div className="md:w-7/12 relative">
            {/* Decorative Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-1 gap-6 relative">
              {/* Old Way (Receded) */}
              <div className="group p-8 rounded-3xl bg-[#0f0c1a] border border-white/5 opacity-60 hover:opacity-100 transition-all duration-300 transform scale-95 hover:scale-100 origin-bottom">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold text-red-400 flex items-center gap-2">
                     <X size={18} /> The Friction Layer
                  </h3>
                </div>
                <div className="space-y-3">
                  <div className="h-2 w-3/4 bg-white/5 rounded-full"></div>
                  <div className="h-2 w-full bg-white/5 rounded-full"></div>
                  <div className="h-2 w-5/6 bg-white/5 rounded-full"></div>
                </div>
              </div>

              {/* New Way (Prominent) */}
              <div className="relative z-10 p-8 rounded-3xl bg-[#12101c] border border-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] transform hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                 {/* Top Highlight */}
                 <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
                 
                 <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-white flex items-center gap-2 crisp-heading">
                     <CheckCircle2 size={20} className="text-cyan-400" /> 
                     The Flow State
                  </h3>
                  <div className="px-3 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/20 text-cyan-400 text-xs font-bold">
                     AI Powered
                  </div>
                </div>
                
                <ul className="space-y-4">
                  {[
                    "Natural Language Processing Core",
                    "Real-time Layout Engine",
                    "Zero-Config Deployment"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 flex items-center justify-center shrink-0 border border-white/5">
                         <Zap size={12} className="text-cyan-300" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;