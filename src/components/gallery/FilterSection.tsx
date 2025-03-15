
import React from 'react';
import FilterChip from './FilterChip';

interface FilterOption {
  label: string;
  value: string;
}

interface FilterSectionProps {
  title: string;
  options: FilterOption[];
  selectedValues: string[];
  onToggle: (value: string) => void;
}

export default function FilterSection({ 
  title, 
  options, 
  selectedValues, 
  onToggle 
}: FilterSectionProps) {
  return (
    <div className="mb-6">
      <h4 className="text-sm text-white/70 mb-3">{title}</h4>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <FilterChip
            key={option.value}
            label={option.label}
            selected={selectedValues.includes(option.value)}
            onClick={() => onToggle(option.value)}
          />
        ))}
      </div>
    </div>
  );
}
