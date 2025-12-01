import React from 'react';
import { Layers, ArrowRight } from 'lucide-react';

interface ExampleCardProps {
  title: string;
  subtitle: string;
  gradient: string;
  delay?: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ title, subtitle, gradient }) => {
  return (
    <div className="group relative h-[400px] w-full perspective-1000">
      {/* Background Gradient Blob */}
      <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`}></div>
      
      <div className="relative h-full w-full bg-[#0c0a13] rounded-3xl border border-white/5 p-2 overflow-hidden transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,1)]">
        {/* Top Highlight (Glass Edge) */}
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        {/* Image / Preview Area */}
        <div className="h-[65%] w-full bg-[#151221] rounded-2xl relative overflow-hidden">
          {/* Abstract Generated Graphic */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-10`}></div>
          <div className="absolute inset-0 flex items-center justify-center">
             <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-white/10 to-transparent border border-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl transform group-hover:scale-110 transition-transform duration-700">
                <Layers size={32} className="text-white/80" />
             </div>
          </div>
          
          {/* Tag */}
          <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md border border-white/10 rounded-full text-[10px] font-bold tracking-wider text-white uppercase">
            Generated
          </div>
        </div>

        {/* Content Area */}
        <div className="h-[35%] p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors crisp-heading">{title}</h3>
            <p className="text-slate-500 font-medium text-sm">{subtitle}</p>
          </div>
          
          <div className="flex items-center justify-between border-t border-white/5 pt-4">
             <span className="text-xs font-mono text-slate-600">ID: {Math.random().toString(36).substr(2, 6).toUpperCase()}</span>
             <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                <ArrowRight size={14} />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExampleCard;