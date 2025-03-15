
import { useState } from 'react';
import { ArtworkStyle, ArtworkTheme, GalleryFilter } from '@/lib/types';
import { Sliders } from 'lucide-react';
import MobileFilterDrawer from './MobileFilterDrawer';
import DesktopFilters from './DesktopFilters';

interface GalleryFiltersProps {
  onFilterChange: (filters: GalleryFilter) => void;
}

const styleOptions: { label: string; value: ArtworkStyle }[] = [
  { label: 'Abstract', value: 'abstract' },
  { label: 'Realistic', value: 'realistic' },
  { label: 'Surreal', value: 'surreal' },
  { label: 'Minimalist', value: 'minimalist' },
  { label: 'Digital', value: 'digital' },
  { label: 'Photographic', value: 'photographic' },
];

const themeOptions: { label: string; value: ArtworkTheme }[] = [
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
      
      {/* Mobile filters */}
      <MobileFilterDrawer
        isOpen={filtersOpen}
        onClose={() => setFiltersOpen(false)}
        selectedStyles={selectedStyles}
        selectedThemes={selectedThemes}
        toggleStyle={toggleStyle}
        toggleTheme={toggleTheme}
        onApply={applyFilters}
        onClear={clearFilters}
        styleOptions={styleOptions}
        themeOptions={themeOptions}
      />
      
      {/* Desktop filters */}
      <DesktopFilters
        selectedStyles={selectedStyles}
        selectedThemes={selectedThemes}
        toggleStyle={toggleStyle}
        toggleTheme={toggleTheme}
        onApplyFilter={applyFilters}
        onClear={clearFilters}
        totalSelectedFilters={totalSelectedFilters}
        styleOptions={styleOptions}
        themeOptions={themeOptions}
      />
    </div>
  );
}
