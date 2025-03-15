
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useArtworks } from '@/hooks/useArtworks';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ArtCard from '@/components/ui/ArtCard';
import { ArrowLeft, Share2, Download } from 'lucide-react';
import { toast } from 'sonner';

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getArtworkById, getRelatedArtworks } = useArtworks();
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);

  const artwork = id ? getArtworkById(id) : null;
  const relatedArtworks = id ? getRelatedArtworks(id, 3) : [];

  useEffect(() => {
    if (!artwork) {
      // Give a moment to load before redirecting
      const timer = setTimeout(() => {
        if (!artwork) {
          navigate('/gallery', { replace: true });
          toast.error('Artwork not found');
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [artwork, navigate]);

  const shareArtwork = () => {
    if (navigator.share) {
      navigator.share({
        title: artwork?.title || 'AI Artwork',
        text: artwork?.description || 'Check out this AI-generated artwork',
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

  const downloadImage = async () => {
    if (!artwork) return;
    
    try {
      const response = await fetch(artwork.imageUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      
      const link = document.createElement('a');
      link.href = url;
      link.download = `${artwork.title.replace(/\s+/g, '-').toLowerCase()}.jpg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      toast.success('Image downloaded successfully');
    } catch (error) {
      toast.error('Failed to download image');
    }
  };

  if (isLoading || !artwork) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8">
            <Link 
              to="/gallery" 
              className="inline-flex items-center text-white/60 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Gallery
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="relative aspect-square lg:aspect-auto">
              <div className={`absolute inset-0 bg-white/5 rounded-lg ${imageLoaded ? 'hidden' : 'flex items-center justify-center'}`}>
                <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin" />
              </div>
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title}
                className={`w-full h-full object-cover rounded-lg ${imageLoaded ? 'animate-image-fade-in' : 'opacity-0'}`}
                onLoad={() => setImageLoaded(true)}
              />
            </div>
            
            <div className="space-y-8">
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {artwork.style && (
                    <span className="text-xs text-white/80 px-3 py-1 rounded-full bg-white/10">
                      {artwork.style.charAt(0).toUpperCase() + artwork.style.slice(1)}
                    </span>
                  )}
                  {artwork.theme && (
                    <span className="text-xs text-white/80 px-3 py-1 rounded-full bg-white/10">
                      {artwork.theme.charAt(0).toUpperCase() + artwork.theme.slice(1)}
                    </span>
                  )}
                </div>
                
                <h1 className="text-3xl md:text-4xl font-display font-light mb-4">
                  {artwork.title}
                </h1>
                
                <p className="text-white/70 text-lg mb-6">
                  {artwork.description}
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-white/50 text-sm w-24">AI Model:</span>
                    <span className="text-white text-sm">{artwork.aiModel}</span>
                  </div>
                  
                  <div className="flex items-start">
                    <span className="text-white/50 text-sm w-24">Prompt:</span>
                    <span className="text-white text-sm">{artwork.prompt}</span>
                  </div>
                  
                  <div className="flex items-center">
                    <span className="text-white/50 text-sm w-24">Created On:</span>
                    <span className="text-white text-sm">
                      {new Date(artwork.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <button 
                  onClick={shareArtwork}
                  className="flex items-center px-4 py-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors"
                >
                  <Share2 className="h-4 w-4 mr-2" />
                  Share
                </button>
                
                <button 
                  onClick={downloadImage}
                  className="flex items-center px-4 py-2 border border-white/20 rounded-md hover:bg-white/5 transition-colors"
                >
                  <Download className="h-4 w-4 mr-2" />
                  Download
                </button>
              </div>
            </div>
          </div>
          
          {relatedArtworks.length > 0 && (
            <div className="mt-24">
              <h2 className="text-2xl font-display font-light mb-8">Related Artworks</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedArtworks.map((relatedArtwork) => (
                  <ArtCard key={relatedArtwork.id} artwork={relatedArtwork} />
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
