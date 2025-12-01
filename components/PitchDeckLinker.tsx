import React from 'react';
import { CheckCircle2, Clipboard, ExternalLink } from 'lucide-react';

interface PitchDeckLinkerProps {
  generatedUrl: string;
  inputValue: string;
  handleCopy: () => void;
  copied: boolean;
}

const PitchDeckLinker: React.FC<PitchDeckLinkerProps> = ({ generatedUrl, inputValue, handleCopy, copied }) => {
    return (
        <div className="mt-16 w-full text-left max-w-3xl mx-auto animate-fade-in-up-slow"> 
            <h2 className="text-3xl font-bold text-white mb-6 crisp-heading flex items-center gap-3">
                <CheckCircle2 size={28} className="text-cyan-400" />
                Prompt Ready!
            </h2>
            <p className="text-lg text-slate-400 mb-6">
                Click "Launch in Bolt" to generate the structured pitch deck for: <span className="text-white font-semibold">"{inputValue}"</span>.
            </p>

            <div className="bg-[#12101c] border border-white/10 rounded-xl p-4 shadow-xl shadow-black/50 overflow-hidden relative">
                <div className="flex flex-col md:flex-row items-center gap-4">
                    {/* URL Display */}
                    <div className="flex-1 bg-white/5 p-3 rounded-lg text-sm font-mono text-slate-500 overflow-x-auto whitespace-nowrap scrollbar-hide w-full">
                        {generatedUrl}
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-3 w-full md:w-auto">
                        <button 
                            onClick={handleCopy}
                            className={`px-4 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 shrink-0 ${
                                copied 
                                ? 'bg-emerald-500 text-white' 
                                : 'bg-white/10 text-slate-300 hover:bg-white/20'
                            }`}
                        >
                            {copied ? (
                                <>
                                    <CheckCircle2 size={16} /> Copied!
                                </>
                            ) : (
                                <>
                                    <Clipboard size={16} /> Copy Prompt
                                </>
                            )}
                        </button>
                        <a 
                            href={generatedUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-3 rounded-lg font-semibold text-sm transition-all flex items-center gap-2 shrink-0 bg-cyan-600 text-white hover:bg-cyan-500 shadow-md"
                        >
                            Launch in Bolt <ExternalLink size={16} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PitchDeckLinker;