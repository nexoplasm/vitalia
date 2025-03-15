
import { useState } from 'react';
import { useArtworks } from '@/hooks/useArtworks';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import GalleryFilters from '@/components/gallery/GalleryFilters';
import GalleryGrid from '@/components/gallery/GalleryGrid';
import { GalleryFilter } from '@/lib/types';
import { PlusCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const { artworks, filterArtworks } = useArtworks();
  const [filters, setFilters] = useState<GalleryFilter>({ styles: [], themes: [] });
  const [showUpload, setShowUpload] = useState(false);
  
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
            
            <div className="relative">
              <button
                onClick={() => setShowUpload(!showUpload)}
                className="hidden md:flex items-center space-x-2 text-white/80 hover:text-white"
                aria-label="Options"
              >
                <PlusCircle className="h-5 w-5" />
                <span className="text-sm">Upload</span>
              </button>
              
              {showUpload && (
                <div className="absolute right-0 mt-2 w-48 backdrop-blur-lg bg-black/80 border border-white/10 rounded-md shadow-lg p-2 z-10 animate-fade-in">
                  <Link 
                    to="/upload" 
                    className="block w-full text-left px-4 py-2 text-sm rounded-md hover:bg-white/10"
                  >
                    Upload your artwork
                  </Link>
                </div>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-1">
              <GalleryFilters onFilterChange={handleFilterChange} />
              
              <div className="md:hidden text-center mt-6">
                <Link 
                  to="/upload" 
                  className="inline-flex items-center text-white/80 hover:text-white space-x-2"
                >
                  <PlusCircle className="h-5 w-5" />
                  <span>Upload your artwork</span>
                </Link>
              </div>
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
