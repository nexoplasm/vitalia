
import { useState } from 'react';
import { useArtworks } from '@/hooks/useArtworks';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalleryFilters from '@/components/gallery/GalleryFilters';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { GalleryFilter } from '@/lib/types';

const Gallery = () => {
  const { artworks, filterArtworks } = useArtworks();
  const [filters, setFilters] = useState<GalleryFilter>({ styles: [], themes: [] });
  
  const handleFilterChange = (newFilters: GalleryFilter) => {
    setFilters(newFilters);
  };
  
  const filteredArtworks = filterArtworks(filters.styles, filters.themes);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h1 className="text-4xl md:text-5xl font-display font-light mb-4">
                Gallery
              </h1>
              <p className="text-white/70 max-w-xl">
                Explore our curated collection of AI-generated artworks, spanning a range of styles, themes, and AI models.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <GalleryFilters onFilterChange={handleFilterChange} />
            </div>
            
            <div className="md:col-span-3">
              <GalleryGrid artworks={filteredArtworks} />
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Gallery;
