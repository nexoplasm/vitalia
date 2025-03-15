
export interface Artwork {
  id: string;
  title: string;
  imageUrl: string;
  description: string;
  aiModel: string;
  prompt: string;
  style?: string;
  theme?: string;
  createdAt: string;
  featured?: boolean;
  grid?: {
    colSpan?: number;
    rowSpan?: number;
  };
}

export type ArtworkStyle = 'abstract' | 'realistic' | 'surreal' | 'minimalist' | 'digital' | 'photographic';

export type ArtworkTheme = 'nature' | 'portrait' | 'landscape' | 'conceptual' | 'architecture' | 'futuristic';

export interface GalleryFilter {
  styles: ArtworkStyle[];
  themes: ArtworkTheme[];
}
