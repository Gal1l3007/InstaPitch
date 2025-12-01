import React from 'react';
import { ChevronRight } from 'lucide-react';
import ExampleCard from './ExampleCard';

const ExamplesSection: React.FC = () => {
  return (
    <section id="examples" className="py-32 relative bg-[#030205]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 tracking-tight crisp-heading">Generated Artifacts</h2>
          <p className="text-slate-400 text-lg">
            Live examples generated from raw text prompts. <br className="hidden md:block"/>
            No templates were harmed in the making of these decks.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <ExampleCard 
            title="StudentMind" 
            subtitle="AI Therapy Coach"
            gradient="from-pink-500 via-rose-500 to-purple-600"
            delay="0"
          />
          <ExampleCard 
            title="BoltSaaS" 
            subtitle="Rapid Dev Environment"
            gradient="from-cyan-400 via-blue-500 to-indigo-600"
            delay="100"
          />
          <ExampleCard 
            title="GreenChain" 
            subtitle="Logistics Tracker"
            gradient="from-emerald-400 via-teal-500 to-cyan-600"
            delay="200"
          />
        </div>

        <div className="mt-24 text-center">
           <div className="inline-block relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-full blur opacity-40 group-hover:opacity-100 transition duration-500"></div>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="relative bg-[#0f0c1a] border border-white/10 text-white px-10 py-5 rounded-full font-bold text-lg transition-all flex items-center gap-3 mx-auto hover:bg-[#151221]"
              >
                 Start Your Pitch Now <ChevronRight size={18} className="text-cyan-400" />
              </button>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;