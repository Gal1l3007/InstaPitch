import React, { useState } from 'react';
import { Sparkles, Globe, Loader, AlertTriangle } from 'lucide-react';
import PitchDeckLinker from './PitchDeckLinker';

const HeroSection: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  // State now holds the generated bolt.new URL string
  const [generatedUrl, setGeneratedUrl] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false); // To show clipboard success

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setCopied(false);
    if (!inputValue.trim()) {
        setApiError("Please enter an idea to generate a pitch link.");
        return;
    }

    setIsGenerating(true);
    setGeneratedUrl(null);
    setApiError(null);

    // 1. Define the System Prompt
    const systemInstruction = "You are a world-class Pitch Deck Designer. Your task is to take the startup idea provided by the user, research it using Google Search, and structure the resulting data into a complete, sophisticated 6-slide pitch deck following the required JSON schema. The content must be concise, data-driven, and highly persuasive for a Venture Capital audience. Your entire output MUST be a single, valid JSON array matching the provided schema. Do NOT include any text outside the JSON object or any markdown fences (```json).";
    
    // 2. Define the User Query
    const deckStructurePrompt = `Generate the structured JSON pitch deck data for the idea: "${inputValue}". Ensure the deck has 6 slides: 1. Title, 2. Problem/Inefficiencies, 3. Solution/Architecture, 4. Market Size & Data, 5. Business Model/Traction, 6. Team & Ask. The design should be dark, minimal, and premium, similar to the Orbitoshift Crypto deck.`;

    // 3. Define the JSON Schema (must be included in the prompt for Bolt to use structured output)
    const pitchDeckSchema = {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          slideId: { type: "STRING", description: "A unique identifier for the slide (e.g., 'problem', 'solution', 'market')." },
          title: { type: "STRING", description: "The main, impactful title for the slide." },
          subtitle: { type: "STRING", description: "A small, descriptive header or category text." },
          icon: { type: "STRING", description: "A descriptive keyword for a Lucide icon (e.g., 'Target', 'Lightbulb', 'BarChart3', 'Users', 'Wallet', 'Globe', 'Zap', 'Cpu')." },
          contentBlocks: {
            type: "ARRAY",
            description: "A list of content blocks that form the slide's body.",
            items: {
              type: "OBJECT",
              properties: {
                type: { type: "STRING", enum: ["text", "data_point", "list"], description: "The format of the block: text (paragraph), data_point (stat), or list (bullet points)." },
                heading: { type: "STRING", description: "A subheading for this block (e.g., 'The Core Issue' or 'Traction Metrics')." },
                body: { type: "STRING", description: "The main content text, stat value, or main list item. For a data_point, this should be the primary statistic (e.g., '45%')." },
                details: { type: "STRING", description: "Supporting details, like a descriptive paragraph for a text block, or a small caption for a data_point. For a list, use comma-separated list items here." },
              },
              required: ["type", "heading", "body"],
            },
          },
        },
        required: ["slideId", "title", "subtitle", "icon", "contentBlocks"],
      },
    };

    // 4. Construct the complete prompt string including instructions and the schema
    const fullPrompt = `
      --- SYSTEM INSTRUCTIONS ---
      ${systemInstruction}

      --- REQUIRED JSON SCHEMA ---
      ${JSON.stringify(pitchDeckSchema, null, 2)}
      
      --- USER QUERY ---
      ${deckStructurePrompt}
    `.trim();

    // 5. URL Encode the prompt and construct the bolt.new link
    const encodedPrompt = encodeURIComponent(fullPrompt);
    const boltUrl = `https://bolt.new/?prompt=${encodedPrompt}`;
    
    // Simulate generation time (1 second)
    await new Promise(resolve => setTimeout(resolve, 1000)); 

    setGeneratedUrl(boltUrl);
    setIsGenerating(false);
  };

  const handleCopy = () => {
    if (!generatedUrl) return;

    // Use modern clipboard API if available, fallback to legacy
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(generatedUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } else {
      const tempInput = document.createElement('textarea');
      tempInput.value = generatedUrl;
      document.body.appendChild(tempInput);
      tempInput.select();
      try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); 
      } catch (err) {
          console.error('Failed to copy text: ', err);
      }
      document.body.removeChild(tempInput);
    }
  };


  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-4xl w-full relative z-10 flex flex-col items-center text-center">
        
        {/* Floating Badge */}
        <div className="animate-fade-in-up mb-8">
           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md shadow-2xl shadow-black/50">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <span className="text-xs font-semibold tracking-wide text-slate-300 uppercase">
                LLM Powered Generator Online
              </span>
           </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-8 leading-[1.05] drop-shadow-2xl crisp-heading">
          Turn your idea into a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 animate-gradient-x pb-2">
            Bolt.New Prompt Link.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-slate-400 mb-14 max-w-2xl mx-auto leading-relaxed font-light">
          Zero friction. Zero backend. 
          <span className="text-slate-300 font-medium"> Generate the perfect prompt</span> for the next stage.
        </p>

        {/* Deep Depth Interactive Input */}
        <div className="w-full max-w-2xl mx-auto perspective-1000">
          <form onSubmit={handleGenerate} className="relative group transition-all duration-500 transform hover:scale-[1.01]">
            {/* Outer Glow */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 rounded-2xl opacity-30 group-hover:opacity-60 blur-lg transition duration-500"></div>
            
            {/* Main Container */}
            <div className="relative bg-[#0b0914] rounded-2xl p-2 flex items-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.1),0_20px_50px_-10px_rgba(0,0,0,0.8)] border border-white/10 ring-1 ring-white/5">
              
              <div className="pl-4 pr-3 text-slate-500">
                <Globe size={20} />
              </div>

              <input 
                type="text" 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Describe your startup idea..."
                className="flex-1 bg-transparent text-white placeholder-slate-600 px-2 py-5 outline-none text-lg font-medium w-full"
                disabled={isGenerating}
              />
              
              <button 
                type="submit"
                disabled={isGenerating}
                className="bg-white hover:bg-slate-50 text-black font-bold py-4 px-8 rounded-xl transition-all flex items-center gap-2 shrink-0 disabled:opacity-80 disabled:cursor-not-allowed shadow-[0_5px_15px_-5px_rgba(255,255,255,0.3)] hover:shadow-[0_8px_25px_-5px_rgba(255,255,255,0.4)] transform hover:-translate-y-0.5"
              >
                {isGenerating ? (
                  <>
                    <Loader size={20} className="animate-spin" />
                    <span className="hidden md:inline">Generating...</span>
                  </>
                ) : (
                  <>
                    Generate Link ✨
                    <Sparkles size={18} className="text-indigo-600 fill-current" />
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Result Area */}
        {isGenerating ? (
          <div className="mt-16 text-center text-cyan-400 flex flex-col items-center">
             <Loader size={32} className="animate-spin mb-4" />
             <p className="text-lg font-medium">Constructing Bolt Prompt...</p>
          </div>
        ) : apiError ? (
          <div className="mt-16 text-center bg-red-900/20 border border-red-500/30 text-red-300 p-4 rounded-xl max-w-2xl w-full">
             <p className="font-medium flex items-center justify-center gap-2"><AlertTriangle size={18} /> {apiError}</p>
          </div>
        ) : generatedUrl ? (
          <PitchDeckLinker 
            generatedUrl={generatedUrl} 
            inputValue={inputValue} 
            handleCopy={handleCopy} 
            copied={copied} 
          />
        ) : null}

        {/* Social Proof */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale transition-all hover:grayscale-0 hover:opacity-80">
           {['TechCrunch', 'ProductHunt', 'HackerNews'].map(brand => (
              <span key={brand} className="text-lg font-bold text-white font-serif italic tracking-wide">{brand}</span>
           ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;