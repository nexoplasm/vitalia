
import React from 'react';
import FilterSection from './FilterSection';
import { ArtworkStyle, ArtworkTheme } from '@/lib/types';

interface DesktopFiltersProps {
  selectedStyles: ArtworkStyle[];
  selectedThemes: ArtworkTheme[];
  toggleStyle: (style: ArtworkStyle) => void;
  toggleTheme: (theme: ArtworkTheme) => void;
  onApplyFilter: () => void;
  onClear: () => void;
  totalSelectedFilters: number;
  styleOptions: { label: string; value: ArtworkStyle }[];
  themeOptions: { label: string; value: ArtworkTheme }[];
}

export default function DesktopFilters({
  selectedStyles,
  selectedThemes,
  toggleStyle,
  toggleTheme,
  onApplyFilter,
  onClear,
  totalSelectedFilters,
  styleOptions,
  themeOptions,
}: DesktopFiltersProps) {
  return (
    <div className="hidden md:block mb-10">
      <div className="flex justify-between mb-4">
        <h3 className="text-lg font-medium">Filter by</h3>
        
        {totalSelectedFilters > 0 && (
          <button
            onClick={onClear}
            className="text-sm text-white/60 hover:text-white"
          >
            Clear all
          </button>
        )}
      </div>
      
      <FilterSection
        title="Style"
        options={styleOptions}
        selectedValues={selectedStyles}
        onToggle={(style) => {
          toggleStyle(style as ArtworkStyle);
          setTimeout(onApplyFilter, 100);
        }}
      />
      
      <FilterSection
        title="Theme"
        options={themeOptions}
        selectedValues={selectedThemes}
        onToggle={(theme) => {
          toggleTheme(theme as ArtworkTheme);
          setTimeout(onApplyFilter, 100);
        }}
      />
    </div>
  );
}
