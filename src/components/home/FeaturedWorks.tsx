
import { Link } from 'react-router-dom';
import { Artwork } from '@/lib/types';
import ArtCard from '../ui/ArtCard';
import { ArrowRight } from 'lucide-react';

interface FeaturedWorksProps {
  artworks: Artwork[];
}

export default function FeaturedWorks({ artworks }: FeaturedWorksProps) {
  return (
    <section className="py-24 px-6 lg:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-display font-light mb-4">
              Featured Artworks
            </h2>
            <p className="text-white/70 max-w-lg">
              A selection of outstanding AI-generated pieces that showcase the diversity and sophistication of machine creativity.
            </p>
          </div>
          
          <Link 
            to="/gallery" 
            className="inline-flex items-center mt-6 md:mt-0 link-underline text-white/80 hover:text-white"
          >
            View Full Gallery
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artworks.map((artwork, index) => (
            <div 
              key={artwork.id} 
              className="animate-fade-in" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArtCard artwork={artwork} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
