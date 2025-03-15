
import { useState } from 'react';
import { Artwork, ArtworkStyle, ArtworkTheme } from '@/lib/types';
import { toast } from 'sonner';
import { sampleArtworks } from '@/data/sampleArtworks';
import { 
  getFeaturedArtworks, 
  getArtworkById, 
  getRelatedArtworks, 
  filterArtworks as filterArtworksUtil,
  createNewArtwork
} from '@/utils/artworkUtils';

export function useArtworks() {
  const [artworks, setArtworks] = useState<Artwork[]>(sampleArtworks);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Methods that directly access the state
  const getArtworkByIdFromState = (id: string) => {
    return getArtworkById(artworks, id);
  };

  const getRelatedArtworksFromState = (id: string, limit = 3) => {
    return getRelatedArtworks(artworks, id, limit);
  };

  const getFeaturedArtworksFromState = () => {
    return getFeaturedArtworks(artworks);
  };

  const filterArtworksFromState = (styles: ArtworkStyle[] = [], themes: ArtworkTheme[] = []) => {
    return filterArtworksUtil(artworks, styles, themes);
  };

  const uploadArtwork = async (artwork: Omit<Artwork, 'id' | 'createdAt'>) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const newArtwork = createNewArtwork(artwork, artworks);
      
      setArtworks([newArtwork, ...artworks]);
      toast.success('Artwork uploaded successfully!');
      return newArtwork;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to upload artwork';
      setError(errorMessage);
      toast.error(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    artworks,
    loading,
    error,
    getFeaturedArtworks: getFeaturedArtworksFromState,
    getArtworkById: getArtworkByIdFromState,
    getRelatedArtworks: getRelatedArtworksFromState,
    filterArtworks: filterArtworksFromState,
    uploadArtwork
  };
}
