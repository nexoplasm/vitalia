
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Artwork } from '@/lib/types';
import ArtCard from '../ui/ArtCard';

interface HeroProps {
  featuredArtwork: Artwork;
  thumbnails: Artwork[];
}

export default function Hero({ featuredArtwork, thumbnails }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-12 pt-24 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-light leading-tight mb-8 max-w-4xl animate-fade-in">
          AI-Generated <span className="text-white/90">Art</span>
        </h1>
        
        <p className="text-lg text-white/70 max-w-xl mb-10 animate-fade-in">
          Curated collection of AI-generated artworks that challenge our perception of creativity.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in">
          <Link 
            to="/gallery" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-medium transition-all hover:bg-white/90 group"
          >
            View Gallery
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fade-in">
          <ArtCard artwork={featuredArtwork} variant="featured" />
          
          <div className="grid grid-cols-1 gap-6">
            {thumbnails.map((artwork, index) => (
              <div 
                key={artwork.id} 
                className="animate-fade-in" 
                style={{ animationDelay: `${(index + 1) * 0.1}s` }}
              >
                <ArtCard artwork={artwork} variant="minimal" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
