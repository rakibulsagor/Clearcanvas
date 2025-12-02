import React, { useState } from 'react';
import { DimensionControls } from './components/DimensionControls';
import { CanvasPreview } from './components/CanvasPreview';
import { Dimensions } from './types';
import { COMMON_PRESETS } from './constants';
import { Layers, Mail, Linkedin, Info } from 'lucide-react';

const App: React.FC = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 1920, height: 1080 });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-indigo-500/30">
      
      {/* Header */}
      <header className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg">
              <Layers size={24} className="text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white tracking-tight">ClearCanvas AI</h1>
              <p className="text-xs text-slate-400">Transparent Image Generator</p>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Left Column: Controls */}
          <div className="lg:col-span-5 space-y-8">
            <section>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                1. Set Dimensions
              </h2>
              <DimensionControls 
                dimensions={dimensions} 
                onDimensionsChange={setDimensions} 
              />
            </section>

            <section>
              <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-4">
                Quick Presets
              </h2>
              <div className="flex flex-wrap gap-2">
                {COMMON_PRESETS.map((preset) => (
                  <button
                    key={preset.name}
                    onClick={() => setDimensions({ width: preset.width, height: preset.height })}
                    className="px-3 py-1.5 text-xs bg-slate-900 border border-slate-700 hover:border-indigo-500 hover:text-indigo-400 rounded-md transition-colors text-slate-300"
                  >
                    {preset.name} <span className="opacity-50 ml-1">({preset.width}×{preset.height})</span>
                  </button>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Preview & Action */}
          <div className="lg:col-span-7 space-y-8">
             <section>
              <h2 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                2. Preview & Download
              </h2>
              <CanvasPreview dimensions={dimensions} />
            </section>
          </div>

        </div>
      </main>

      <footer className="border-t border-slate-800 mt-12 bg-slate-900 pt-12 pb-8">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            
            {/* Documentation Section */}
            <div>
              <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                <Info size={18} className="text-indigo-400"/>
                Documentation
              </h3>
              <div className="space-y-4 text-sm text-slate-400 leading-relaxed">
                <p>
                  <strong className="text-slate-300">What is this?</strong><br/>
                  ClearCanvas AI is a utility for developers, designers, and creators who need "invisible" placeholder images. These images are 100% transparent PNGs with exact dimensions.
                </p>
                <p>
                  <strong className="text-slate-300">How to use:</strong>
                  <ul className="list-disc list-inside mt-2 space-y-1 ml-1">
                    <li>Enter width and height manually using the input fields.</li>
                    <li>Use the <strong>Smart Resize</strong> input to ask AI for standard sizes (e.g., "iPhone 15 Pro", "Instagram Story").</li>
                    <li>Click <strong>Download PNG</strong> to save the transparent file to your device.</li>
                    <li>Use <strong>Copy to Clipboard</strong> to paste the image directly into design tools like Figma or Photoshop.</li>
                  </ul>
                </p>
              </div>
            </div>

            {/* Contact Section */}
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Developer</h3>
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 space-y-4">
                <p className="text-sm text-slate-400 mb-4">
                  For support, feature requests, or collaboration, please reach out via:
                </p>
                
                {/* 
                  TODO: Update the href below with your actual email address.
                  Example: href="mailto:your.email@example.com"
                */}
                <a 
                  href="mailto:contact@example.com" 
                  className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-all p-3 rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-700 group"
                >
                  <div className="bg-slate-700 p-2 rounded-full group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <Mail size={18} />
                  </div>
                  <span className="font-medium">Send Email</span>
                </a>

                {/* 
                  TODO: Update the href below with your LinkedIn profile URL.
                  Example: href="https://linkedin.com/in/your-profile"
                */}
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-slate-300 hover:text-indigo-400 transition-all p-3 rounded-lg hover:bg-slate-800 border border-transparent hover:border-slate-700 group"
                >
                  <div className="bg-slate-700 p-2 rounded-full group-hover:bg-indigo-500/20 group-hover:text-indigo-400 transition-colors">
                    <Linkedin size={18} />
                  </div>
                  <span className="font-medium">Developer Profile</span>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
             <p>&copy; {new Date().getFullYear()} ClearCanvas AI. All rights reserved.</p>
             <div className="flex gap-4">
               <span>React</span>
               <span>•</span>
               <span>Tailwind</span>
               <span>•</span>
               <span>Gemini API</span>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;