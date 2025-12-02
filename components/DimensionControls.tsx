import React, { useState } from 'react';
import { Dimensions } from '../types';
import { Button } from './Button';
import { getDimensionsFromAi } from '../services/geminiService';
import { Wand2, RefreshCcw, Lock, Unlock, Zap } from 'lucide-react';

interface DimensionControlsProps {
  dimensions: Dimensions;
  onDimensionsChange: (dims: Dimensions) => void;
}

export const DimensionControls: React.FC<DimensionControlsProps> = ({ dimensions, onDimensionsChange }) => {
  const [lockedRatio, setLockedRatio] = useState<number | null>(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isAiLoading, setIsAiLoading] = useState(false);
  const [aiError, setAiError] = useState<string | null>(null);
  const [aiSuccessMessage, setAiSuccessMessage] = useState<string | null>(null);

  const handleWidthChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newWidth = Math.max(1, parseInt(e.target.value) || 0);
    if (lockedRatio) {
      onDimensionsChange({ width: newWidth, height: Math.round(newWidth / lockedRatio) });
    } else {
      onDimensionsChange({ ...dimensions, width: newWidth });
    }
  };

  const handleHeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newHeight = Math.max(1, parseInt(e.target.value) || 0);
    if (lockedRatio) {
      onDimensionsChange({ width: Math.round(newHeight * lockedRatio), height: newHeight });
    } else {
      onDimensionsChange({ ...dimensions, height: newHeight });
    }
  };

  const toggleRatioLock = () => {
    if (lockedRatio) {
      setLockedRatio(null);
    } else {
      setLockedRatio(dimensions.width / dimensions.height);
    }
  };

  const swapDimensions = () => {
    onDimensionsChange({ width: dimensions.height, height: dimensions.width });
    if (lockedRatio) setLockedRatio(1 / lockedRatio);
  };

  const handleAiSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!aiPrompt.trim()) return;

    setIsAiLoading(true);
    setAiError(null);
    setAiSuccessMessage(null);

    const result = await getDimensionsFromAi(aiPrompt);

    if (result) {
      onDimensionsChange({ width: result.width, height: result.height });
      setAiSuccessMessage(`Applied: ${result.reason}`);
      if (lockedRatio) setLockedRatio(result.width / result.height);
    } else {
      setAiError("Could not determine dimensions. Try a more specific query.");
    }

    setIsAiLoading(false);
  };

  return (
    <div className="space-y-6">
      
      {/* AI Input Section */}
      <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-2 opacity-10 pointer-events-none">
           <Wand2 size={80} />
        </div>
        <form onSubmit={handleAiSubmit} className="relative z-10">
          <label className="block text-sm font-medium text-indigo-300 mb-2 flex items-center gap-2">
            <Zap size={16} />
            Smart Resize with AI
          </label>
          <div className="flex gap-2">
            <input
              type="text"
              value={aiPrompt}
              onChange={(e) => setAiPrompt(e.target.value)}
              placeholder="e.g., 'Instagram Post', 'A4 Paper', 'iPhone 13 Wallpaper'"
              className="flex-1 bg-slate-900 border border-slate-600 rounded-lg px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
            <Button type="submit" variant="primary" isLoading={isAiLoading} icon={<Wand2 size={16} />}>
              Auto-Size
            </Button>
          </div>
          {aiError && <p className="text-red-400 text-xs mt-2">{aiError}</p>}
          {aiSuccessMessage && <p className="text-green-400 text-xs mt-2">{aiSuccessMessage}</p>}
        </form>
      </div>

      {/* Manual Inputs */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end bg-slate-800 p-6 rounded-xl border border-slate-700">
        <div className="space-y-4 w-full">
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Width (px)</label>
            <input
              type="number"
              value={dimensions.width}
              onChange={handleWidthChange}
              className="w-full bg-slate-900 text-2xl font-mono text-white p-3 rounded-lg border border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>
        </div>

        <div className="flex items-center justify-center gap-2 md:pb-3">
          <button 
            onClick={toggleRatioLock}
            className={`p-2 rounded-lg transition-colors ${lockedRatio ? 'text-indigo-400 bg-indigo-500/10' : 'text-slate-500 hover:text-slate-300'}`}
            title={lockedRatio ? "Unlock aspect ratio" : "Lock aspect ratio"}
          >
            {lockedRatio ? <Lock size={20} /> : <Unlock size={20} />}
          </button>
          <button 
            onClick={swapDimensions}
            className="p-2 text-slate-500 hover:text-white transition-colors rounded-lg hover:bg-slate-700"
            title="Swap width and height"
          >
            <RefreshCcw size={20} />
          </button>
        </div>

        <div className="space-y-4 w-full">
          <div>
            <label className="block text-xs uppercase tracking-wider text-slate-400 mb-1">Height (px)</label>
            <input
              type="number"
              value={dimensions.height}
              onChange={handleHeightChange}
              className="w-full bg-slate-900 text-2xl font-mono text-white p-3 rounded-lg border border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="text-center text-slate-500 text-sm font-mono">
        Aspect Ratio: {(dimensions.width / dimensions.height).toFixed(3)}:1
      </div>
    </div>
  );
};