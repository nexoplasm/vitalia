
import React from 'react';
import { X } from 'lucide-react';
import FilterSection from './FilterSection';
import { ArtworkStyle, ArtworkTheme } from '@/lib/types';

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedStyles: ArtworkStyle[];
  selectedThemes: ArtworkTheme[];
  toggleStyle: (style: ArtworkStyle) => void;
  toggleTheme: (theme: ArtworkTheme) => void;
  onApply: () => void;
  onClear: () => void;
  styleOptions: { label: string; value: ArtworkStyle }[];
  themeOptions: { label: string; value: ArtworkTheme }[];
}

export default function MobileFilterDrawer({
  isOpen,
  onClose,
  selectedStyles,
  selectedThemes,
  toggleStyle,
  toggleTheme,
  onApply,
  onClear,
  styleOptions,
  themeOptions,
}: MobileFilterDrawerProps) {
  return (
    <div 
      className={`md:hidden fixed inset-0 z-40 glass-card transition-transform duration-300 transform ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex flex-col h-full py-8 px-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-display">Filters</h3>
          <button 
            onClick={onClose}
            aria-label="Close filters"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
        
        <div className="overflow-y-auto flex-grow">
          <FilterSection
            title="Style"
            options={styleOptions}
            selectedValues={selectedStyles}
            onToggle={toggleStyle}
          />
          
          <FilterSection
            title="Theme"
            options={themeOptions}
            selectedValues={selectedThemes}
            onToggle={toggleTheme}
          />
        </div>
        
        <div className="mt-auto pt-4 flex gap-3">
          <button
            onClick={onClear}
            className="flex-1 px-4 py-2 rounded border border-white/20 text-white/80 hover:bg-white/5"
          >
            Clear all
          </button>
          <button
            onClick={onApply}
            className="flex-1 px-4 py-2 rounded bg-white text-black hover:bg-white/90"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}
