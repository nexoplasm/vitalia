
import React from 'react';

interface FilterChipProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

export default function FilterChip({ label, selected, onClick }: FilterChipProps) {
  return (
    <button
      onClick={onClick}
      className={`text-sm px-3 py-1 rounded-full transition-colors ${
        selected
          ? 'bg-white text-black'
          : 'bg-white/10 text-white/80 hover:bg-white/20'
      }`}
    >
      {label}
    </button>
  );
}
