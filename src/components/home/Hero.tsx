
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
        {/* Badge */}
        <div className="inline-block mb-6 backdrop-blur-sm bg-white/5 border border-white/10 px-3 py-1 rounded-full animate-fade-in">
          <span className="text-xs font-medium tracking-wider text-white/80">AI-CURATED GALLERY</span>
        </div>
        
        {/* Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-light leading-tight mb-6 max-w-4xl animate-fade-in">
          Where Artificial Intelligence <br className="hidden md:block" />
          <span className="text-white/90">Becomes Art</span>
        </h1>
        
        {/* Description */}
        <p className="text-lg text-white/70 max-w-2xl mb-10 animate-fade-in">
          Explore a carefully curated collection of AI-generated artworks that challenge our perception of creativity and push the boundaries of digital expression.
        </p>
        
        {/* Call to action */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in">
          <Link 
            to="/gallery" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-white text-black font-medium transition-all hover:bg-white/90 group"
          >
            View Gallery
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          
          <Link 
            to="/about" 
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-white/20 text-white font-medium transition-all hover:bg-white/5"
          >
            Learn More
          </Link>
        </div>
        
        {/* Featured artwork and thumbnails */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <div className="md:col-span-2 animate-fade-in">
            <ArtCard artwork={featuredArtwork} variant="featured" />
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
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
