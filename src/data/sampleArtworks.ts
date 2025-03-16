
import { Artwork } from '@/lib/types';

// Sample artwork data
export const sampleArtworks: Artwork[] = [
  {
    id: '1',
    title: 'Neural Dreamscape',
    imageUrl: '/public/lovable-uploads/38473362-8d94-48a8-a9c7-a86bcc73aca3.png',
    description: 'A mind-bending journey through neural networks, manifesting as a visual exploration of artificial consciousness.',
    aiModel: 'Midjourney v5',
    prompt: 'Surreal dreamscape with neural network patterns, highly detailed, cinematic lighting, 8k resolution',
    style: 'surreal',
    theme: 'conceptual',
    createdAt: '2023-04-15',
    featured: true,
    grid: {
      colSpan: 2,
      rowSpan: 2
    }
  },
  {
    id: '2',
    title: 'Digital Whispers',
    imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Abstract representation of digital communication, visualizing the ephemeral nature of online interaction.',
    aiModel: 'DALL-E 3',
    prompt: 'Abstract visualization of digital communication, flowing data, minimalist style, cool color palette',
    style: 'abstract',
    theme: 'conceptual',
    createdAt: '2023-05-22',
    featured: true
  },
  {
    id: '3',
    title: 'Synthetic Nature',
    imageUrl: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A hyper-realistic depiction of nature through the lens of artificial intelligence, blurring the boundaries between the real and the synthetic.',
    aiModel: 'Stable Diffusion XL',
    prompt: 'Hyper-realistic forest scene with subtle digital glitches, photorealistic, golden hour lighting',
    style: 'photographic',
    theme: 'nature',
    createdAt: '2023-06-10',
    featured: true
  },
  {
    id: '4',
    title: 'Future Metropolis',
    imageUrl: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A sprawling futuristic cityscape imagined by artificial intelligence, showcasing architectural possibilities beyond human constraints.',
    aiModel: 'Midjourney v5',
    prompt: 'Futuristic metropolis, cyberpunk atmosphere, detailed architecture, neon accents, nighttime scene',
    style: 'digital',
    theme: 'architecture',
    createdAt: '2023-07-05'
  },
  {
    id: '5',
    title: 'Quantum Portrait',
    imageUrl: 'https://images.unsplash.com/photo-1656306866936-85dc143fe72c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A reimagining of human portraiture through quantum computing visualization, representing the intersection of humanity and advanced computation.',
    aiModel: 'DALL-E 3',
    prompt: 'Quantum computing-inspired portrait, particle effects, minimalist composition, high contrast',
    style: 'abstract',
    theme: 'portrait',
    createdAt: '2023-08-18'
  },
  {
    id: '6',
    title: 'Algorithmic Serenity',
    imageUrl: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A peaceful landscape generated through complex algorithms, demonstrating how AI interprets concepts of tranquility and natural beauty.',
    aiModel: 'Stable Diffusion XL',
    prompt: 'Serene minimalist landscape, algorithmic patterns, soft gradient sky, tranquil atmosphere',
    style: 'minimalist',
    theme: 'landscape',
    createdAt: '2023-09-30'
  },
  {
    id: '7',
    title: 'Synthetic Emotion',
    imageUrl: 'https://images.unsplash.com/photo-1630698467933-60129955827b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'An exploration of how artificial intelligence interprets and represents human emotions, depicted through abstract visual elements.',
    aiModel: 'Midjourney v5',
    prompt: 'Abstract representation of human emotions, fluid shapes, vibrant colors, dramatic lighting',
    style: 'abstract',
    theme: 'conceptual',
    createdAt: '2023-10-12'
  },
  {
    id: '8',
    title: 'Digital Remnants',
    imageUrl: 'https://images.unsplash.com/photo-1680169267400-60c2c3370070?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A surrealistic composition of digital artifacts and glitches, representing the residual imprints of artificial intelligence processes.',
    aiModel: 'DALL-E 3',
    prompt: 'Surreal composition with digital artifacts and glitches, data visualization aesthetic, dark background with vibrant accents',
    style: 'surreal',
    theme: 'conceptual',
    createdAt: '2023-11-05'
  },
  {
    id: '9',
    title: 'Bionic Flora',
    imageUrl: 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A hybrid vision of plant life merged with technology, illustrating an AI\'s interpretation of evolution in a post-digital world.',
    aiModel: 'Stable Diffusion XL',
    prompt: 'Hybrid plants with technological elements, detailed botanical illustration style, bioluminescent features, dark backdrop',
    style: 'realistic',
    theme: 'nature',
    createdAt: '2023-12-20'
  },
  {
    id: '10',
    title: 'Consciousness Encoded',
    imageUrl: 'https://images.unsplash.com/photo-1617791160536-598cf32026fb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A conceptual representation of artificial consciousness, visualized as an intricate tapestry of code, light, and neural connections.',
    aiModel: 'Midjourney v5',
    prompt: 'Visualization of artificial consciousness, intricate code patterns, neural network imagery, ethereal lighting',
    style: 'digital',
    theme: 'conceptual',
    createdAt: '2024-01-15'
  },
  {
    id: '11',
    title: 'Temporal Structures',
    imageUrl: 'https://images.unsplash.com/photo-1633539016893-096e673c1ee9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'Architectural constructs that defy conventional physics, representing an AI\'s understanding of space-time relationships.',
    aiModel: 'DALL-E 3',
    prompt: 'Impossible architecture with temporal distortions, M.C. Escher inspired, monochromatic palette, dramatic shadows',
    style: 'surreal',
    theme: 'architecture',
    createdAt: '2024-02-08'
  },
  {
    id: '12',
    title: 'Silicon Dawn',
    imageUrl: 'https://images.unsplash.com/photo-1504270997636-07ddfbd48945?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    description: 'A sunrise rendered through the perspective of machine learning, blending natural beauty with digital interpretation.',
    aiModel: 'Stable Diffusion XL',
    prompt: 'Sunrise landscape with digital aesthetic, pixel transition effects, vivid colors, minimalist horizon',
    style: 'minimalist',
    theme: 'landscape',
    createdAt: '2024-03-01'
  }
];
