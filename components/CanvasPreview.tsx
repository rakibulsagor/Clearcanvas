import React, { useRef, useEffect, useState } from 'react';
import { Dimensions } from '../types';
import { Button } from './Button';
import { Download, Copy, Check } from 'lucide-react';

interface CanvasPreviewProps {
  dimensions: Dimensions;
}

export const CanvasPreview: React.FC<CanvasPreviewProps> = ({ dimensions }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [copied, setCopied] = useState(false);

  // Redraw canvas when dimensions change (though for transparent, it's just clearing)
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear the canvas to make it fully transparent
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Note: We don't draw anything because the user wants a transparent background.
    // The visual check is the CSS background behind the canvas element.
  }, [dimensions]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Create a temporary link
    const link = document.createElement('a');
    link.download = `transparent_${dimensions.width}x${dimensions.height}.png`;
    link.href = canvas.toDataURL('image/png');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleCopy = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      canvas.toBlob(async (blob) => {
        if (!blob) return;
        await navigator.clipboard.write([
          new ClipboardItem({
            [blob.type]: blob
          })
        ]);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    } catch (err) {
      console.error('Failed to copy: ', err);
      alert("Clipboard access not supported or denied.");
    }
  };

  // Logic to scale the preview container without affecting actual canvas export size
  const containerStyle = {
    aspectRatio: `${dimensions.width} / ${dimensions.height}`,
    maxHeight: '400px',
    maxWidth: '100%',
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <div className="w-full bg-slate-800/50 rounded-xl border border-slate-700 p-8 flex items-center justify-center overflow-hidden relative">
        
        {/* Visual Indicator of transparency */}
        <div 
          className="relative shadow-2xl bg-checkerboard bg-checker"
          style={containerStyle}
        >
          {/* The actual canvas element used for generation */}
          <canvas
            ref={canvasRef}
            width={dimensions.width}
            height={dimensions.height}
            className="w-full h-full block"
            style={{ 
              // We render it visually but keep intrinsic size for export
              width: '100%', 
              height: '100%' 
            }}
          />
          
          {/* Overlay to show text when hovering or static, to confirm it's there */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
             <div className="bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-mono text-slate-300 border border-slate-700/50">
                {dimensions.width} × {dimensions.height} px
             </div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 w-full md:w-auto">
        <Button 
          onClick={handleDownload} 
          className="flex-1 md:flex-none w-full md:w-48 py-4 text-lg"
          icon={<Download size={20} />}
        >
          Download PNG
        </Button>
        <Button 
          onClick={handleCopy} 
          variant="secondary"
          className="flex-1 md:flex-none w-full md:w-48 py-4 text-lg"
          icon={copied ? <Check size={20} className="text-green-400"/> : <Copy size={20} />}
        >
          {copied ? 'Copied!' : 'Copy to Clipboard'}
        </Button>
      </div>
      
      <p className="text-slate-500 text-xs text-center max-w-md">
        The downloaded image will be completely invisible (transparent) but will have the exact dimensions you specified.
      </p>
    </div>
  );
};