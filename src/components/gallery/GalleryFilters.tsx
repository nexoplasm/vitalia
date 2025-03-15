
import { useState } from 'react';
import { ArtworkStyle, ArtworkTheme, GalleryFilter } from '@/lib/types';
import { Sliders, X } from 'lucide-react';

interface GalleryFiltersProps {
  onFilterChange: (filters: GalleryFilter) => void;
}

const styles: { label: string; value: ArtworkStyle }[] = [
  { label: 'Abstract', value: 'abstract' },
  { label: 'Realistic', value: 'realistic' },
  { label: 'Surreal', value: 'surreal' },
  { label: 'Minimalist', value: 'minimalist' },
  { label: 'Digital', value: 'digital' },
  { label: 'Photographic', value: 'photographic' },
];

const themes: { label: string; value: ArtworkTheme }[] = [
  { label: 'Nature', value: 'nature' },
  { label: 'Portrait', value: 'portrait' },
  { label: 'Landscape', value: 'landscape' },
  { label: 'Conceptual', value: 'conceptual' },
  { label: 'Architecture', value: 'architecture' },
  { label: 'Futuristic', value: 'futuristic' },
];

export default function GalleryFilters({ onFilterChange }: GalleryFiltersProps) {
  const [selectedStyles, setSelectedStyles] = useState<ArtworkStyle[]>([]);
  const [selectedThemes, setSelectedThemes] = useState<ArtworkTheme[]>([]);
  const [filtersOpen, setFiltersOpen] = useState(false);

  const toggleStyle = (style: ArtworkStyle) => {
    setSelectedStyles(prev => 
      prev.includes(style)
        ? prev.filter(s => s !== style)
        : [...prev, style]
    );
  };

  const toggleTheme = (theme: ArtworkTheme) => {
    setSelectedThemes(prev => 
      prev.includes(theme)
        ? prev.filter(t => t !== theme)
        : [...prev, theme]
    );
  };

  const applyFilters = () => {
    onFilterChange({
      styles: selectedStyles,
      themes: selectedThemes
    });
    
    if (window.innerWidth < 768) {
      setFiltersOpen(false);
    }
  };

  const clearFilters = () => {
    setSelectedStyles([]);
    setSelectedThemes([]);
    onFilterChange({ styles: [], themes: [] });
  };

  const totalSelectedFilters = selectedStyles.length + selectedThemes.length;

  return (
    <div className="relative">
      {/* Mobile filter toggle */}
      <div className="flex md:hidden justify-between mb-6">
        <button
          onClick={() => setFiltersOpen(!filtersOpen)}
          className="flex items-center px-4 py-2 rounded-md border border-white/20 bg-white/5 text-sm"
        >
          <Sliders className="h-4 w-4 mr-2" />
          Filters {totalSelectedFilters > 0 && `(${totalSelectedFilters})`}
        </button>
        
        {totalSelectedFilters > 0 && (
          <button
            onClick={clearFilters}
            className="text-sm text-white/60 hover:text-white"
          >
            Clear all
          </button>
        )}
      </div>
      
      {/* Filter sidebar - mobile */}
      <div 
        className={`md:hidden fixed inset-0 z-40 glass-card transition-transform duration-300 transform ${
          filtersOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full py-8 px-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-display">Filters</h3>
            <button 
              onClick={() => setFiltersOpen(false)}
              aria-label="Close filters"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          
          <div className="overflow-y-auto flex-grow">
            <div className="mb-8">
              <h4 className="text-sm text-white/70 mb-3">Style</h4>
              <div className="flex flex-wrap gap-2">
                {styles.map(style => (
                  <button
                    key={style.value}
                    onClick={() => toggleStyle(style.value)}
                    className={`text-sm px-3 py-1 rounded-full transition-colors ${
                      selectedStyles.includes(style.value)
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    {style.label}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="mb-8">
              <h4 className="text-sm text-white/70 mb-3">Theme</h4>
              <div className="flex flex-wrap gap-2">
                {themes.map(theme => (
                  <button
                    key={theme.value}
                    onClick={() => toggleTheme(theme.value)}
                    className={`text-sm px-3 py-1 rounded-full transition-colors ${
                      selectedThemes.includes(theme.value)
                        ? 'bg-white text-black'
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    {theme.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-auto pt-4 flex gap-3">
            <button
              onClick={clearFilters}
              className="flex-1 px-4 py-2 rounded border border-white/20 text-white/80 hover:bg-white/5"
            >
              Clear all
            </button>
            <button
              onClick={applyFilters}
              className="flex-1 px-4 py-2 rounded bg-white text-black hover:bg-white/90"
            >
              Apply
            </button>
          </div>
        </div>
      </div>
      
      {/* Desktop filters */}
      <div className="hidden md:block mb-10">
        <div className="flex justify-between mb-4">
          <h3 className="text-lg font-medium">Filter by</h3>
          
          {totalSelectedFilters > 0 && (
            <button
              onClick={clearFilters}
              className="text-sm text-white/60 hover:text-white"
            >
              Clear all
            </button>
          )}
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm text-white/70 mb-3">Style</h4>
          <div className="flex flex-wrap gap-2">
            {styles.map(style => (
              <button
                key={style.value}
                onClick={() => {
                  toggleStyle(style.value);
                  setTimeout(applyFilters, 100);
                }}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  selectedStyles.includes(style.value)
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {style.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="text-sm text-white/70 mb-3">Theme</h4>
          <div className="flex flex-wrap gap-2">
            {themes.map(theme => (
              <button
                key={theme.value}
                onClick={() => {
                  toggleTheme(theme.value);
                  setTimeout(applyFilters, 100);
                }}
                className={`text-sm px-3 py-1 rounded-full transition-colors ${
                  selectedThemes.includes(theme.value)
                    ? 'bg-white text-black'
                    : 'bg-white/10 text-white/80 hover:bg-white/20'
                }`}
              >
                {theme.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
