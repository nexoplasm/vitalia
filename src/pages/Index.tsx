
import { useState, useEffect } from 'react';
import { useArtworks } from '@/hooks/useArtworks';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import FeaturedWorks from '@/components/home/FeaturedWorks';

const Index = () => {
  const { artworks, getFeaturedArtworks } = useArtworks();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const featuredArtworks = getFeaturedArtworks();
  const heroArtwork = featuredArtworks[0];
  const thumbnails = featuredArtworks.slice(1, 4);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="text-4xl font-display font-light mb-4 animate-pulse-subtle">
            VITALIA
          </div>
          <div className="w-8 h-8 border-t-2 border-white rounded-full animate-spin" />
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero 
          featuredArtwork={heroArtwork} 
          thumbnails={thumbnails} 
        />
        <FeaturedWorks artworks={featuredArtworks.slice(0, 6)} />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
