
import { Artwork, ArtworkStyle, ArtworkTheme } from '@/lib/types';

export const getFeaturedArtworks = (artworks: Artwork[]) => {
  return artworks.filter(artwork => artwork.featured);
};

export const getArtworkById = (artworks: Artwork[], id: string) => {
  return artworks.find(artwork => artwork.id === id);
};

export const getRelatedArtworks = (artworks: Artwork[], id: string, limit = 3) => {
  const artwork = getArtworkById(artworks, id);
  if (!artwork) return [];

  return artworks
    .filter(a => a.id !== id && (a.style === artwork.style || a.theme === artwork.theme))
    .sort(() => Math.random() - 0.5)
    .slice(0, limit);
};

export const filterArtworks = (
  artworks: Artwork[],
  styles: ArtworkStyle[] = [], 
  themes: ArtworkTheme[] = []
) => {
  if (styles.length === 0 && themes.length === 0) {
    return artworks;
  }

  return artworks.filter(artwork => {
    const styleMatch = styles.length === 0 || (artwork.style && styles.includes(artwork.style as ArtworkStyle));
    const themeMatch = themes.length === 0 || (artwork.theme && themes.includes(artwork.theme as ArtworkTheme));
    return styleMatch && themeMatch;
  });
};

export const createNewArtwork = (artwork: Omit<Artwork, 'id' | 'createdAt'>, existingArtworks: Artwork[]): Artwork => {
  return {
    ...artwork,
    id: (existingArtworks.length + 1).toString(),
    createdAt: new Date().toISOString().split('T')[0]
  };
};
