
import { Artwork } from '@/lib/types';
import ArtCard from '../ui/ArtCard';

interface GalleryGridProps {
  artworks: Artwork[];
  loading?: boolean;
}

export default function GalleryGrid({ artworks, loading = false }: GalleryGridProps) {
  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div 
            key={index} 
            className="aspect-[4/5] rounded-lg bg-white/5 animate-pulse"
          />
        ))}
      </div>
    );
  }

  if (artworks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <h3 className="text-xl font-display mb-2">No artworks found</h3>
        <p className="text-white/60">
          Try adjusting your filters or check back later for new additions.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {artworks.map((artwork, index) => (
        <div 
          key={artwork.id} 
          className="animate-fade-in"
          style={{ animationDelay: `${index * 0.05}s` }}
        >
          <ArtCard artwork={artwork} />
        </div>
      ))}
    </div>
  );
}
