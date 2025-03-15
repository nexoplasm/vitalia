
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Artwork } from '@/lib/types';
import { Eye, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toast } from 'sonner';

interface ArtCardProps {
  artwork: Artwork;
  variant?: 'default' | 'featured' | 'minimal';
  className?: string;
}

export default function ArtCard({ artwork, variant = 'default', className }: ArtCardProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const shareArtwork = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: artwork.description,
        url: `/artwork/${artwork.id}`,
      }).catch(() => {
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.origin + `/artwork/${artwork.id}`);
    toast.success('Link copied to clipboard');
  };

  return (
    <Link 
      to={`/artwork/${artwork.id}`}
      className={cn(
        'group relative overflow-hidden block border border-white/5 transition-all duration-300',
        variant === 'featured' ? 'aspect-square md:aspect-auto' : 'aspect-[4/5]',
        variant === 'minimal' ? 'rounded-md' : 'rounded-lg',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-black/20 z-10 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
      
      <img
        src={artwork.imageUrl}
        alt={artwork.title}
        className={cn(
          'object-cover w-full h-full transition-all duration-700',
          isLoaded ? 'opacity-100' : 'opacity-0 blur-md',
          isHovered && 'scale-105'
        )}
        onLoad={() => setIsLoaded(true)}
      />
      
      {variant !== 'minimal' && (
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 z-20 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-lg md:text-xl font-display font-light mb-1 transform transition-transform duration-300 group-hover:-translate-y-1">
            {artwork.title}
          </h3>
          
          {variant === 'featured' && (
            <p className="text-white/70 text-sm line-clamp-2 mb-3 max-w-md transform transition-transform duration-300 group-hover:-translate-y-1">
              {artwork.description}
            </p>
          )}
          
          <div className="flex items-center justify-between transform transition-transform duration-300 group-hover:-translate-y-1">
            <div className="text-xs text-white/60">
              {artwork.aiModel}
            </div>
            
            <div className="flex items-center space-x-3">
              <button 
                onClick={shareArtwork}
                className="text-white/60 hover:text-white transition-colors"
                aria-label="Share artwork"
              >
                <Share2 className="h-4 w-4" />
              </button>
              
              <div className="flex items-center text-white/60">
                <Eye className="h-4 w-4 mr-1" />
                <span className="text-xs">View</span>
              </div>
            </div>
          </div>
        </div>
      )}
      
      {variant === 'minimal' && isHovered && (
        <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/50">
          <h3 className="text-center font-display text-lg animate-fade-in">
            {artwork.title}
          </h3>
        </div>
      )}
    </Link>
  );
}
