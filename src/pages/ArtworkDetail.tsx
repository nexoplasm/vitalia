
import { useParams, Link } from 'react-router-dom';
import { useArtworks } from '@/hooks/useArtworks';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ArrowLeft, Share2, Download } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import ArtCard from '@/components/ui/ArtCard';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { getArtworkById, getRelatedArtworks } = useArtworks();
  
  const artwork = getArtworkById(id || '');
  const relatedArtworks = getRelatedArtworks(id || '', 3);
  
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  if (!artwork) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="pt-32 pb-24 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl font-display font-light mb-6">Artwork Not Found</h1>
            <p className="text-white/70 mb-8">The artwork you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/gallery" 
              className="inline-flex items-center px-6 py-3 border border-white/20 rounded-md hover:bg-white/5 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Gallery
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
  
  const shareArtwork = () => {
    if (navigator.share) {
      navigator.share({
        title: artwork.title,
        text: artwork.description,
        url: window.location.href,
      }).catch(() => {
        copyToClipboard();
      });
    } else {
      copyToClipboard();
    }
  };
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(window.location.href);
    toast.success('Link copied to clipboard');
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/gallery" 
            className="inline-flex items-center text-white/60 hover:text-white mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Gallery
          </Link>
          
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              <div className="relative border border-white/10 rounded-lg overflow-hidden">
                {!isImageLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin" />
                  </div>
                )}
                <img 
                  src={artwork.imageUrl} 
                  alt={artwork.title}
                  className={`w-full h-auto transition-opacity duration-500 ${isImageLoaded ? 'opacity-100' : 'opacity-0'}`}
                  onLoad={() => setIsImageLoaded(true)}
                />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <h1 className="text-3xl sm:text-4xl font-display font-light mb-4">{artwork.title}</h1>
              
              <p className="text-white/70 mb-8">{artwork.description}</p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xs uppercase text-white/50 mb-1">AI Model</h3>
                  <p>{artwork.aiModel}</p>
                </div>
                
                {artwork.style && (
                  <div>
                    <h3 className="text-xs uppercase text-white/50 mb-1">Style</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">
                      {artwork.style}
                    </div>
                  </div>
                )}
                
                {artwork.theme && (
                  <div>
                    <h3 className="text-xs uppercase text-white/50 mb-1">Theme</h3>
                    <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-sm">
                      {artwork.theme}
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-xs uppercase text-white/50 mb-1">Prompt</h3>
                  <p className="text-white/70 text-sm italic">"{artwork.prompt}"</p>
                </div>
                
                <div>
                  <h3 className="text-xs uppercase text-white/50 mb-1">Created</h3>
                  <p className="text-white/70">Created in 2025</p>
                </div>
              </div>
              
              <div className="flex space-x-4">
                <button
                  onClick={shareArtwork}
                  className="inline-flex items-center px-4 py-2 rounded border border-white/20 hover:bg-white/5 transition-colors"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
              </div>
            </div>
          </div>
          
          {relatedArtworks.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-display font-light mb-8">Related Artworks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArtworks.map(relatedArtwork => (
                  <ArtCard 
                    key={relatedArtwork.id} 
                    artwork={relatedArtwork} 
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ArtworkDetail;
