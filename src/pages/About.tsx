
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-6">
            About the Curator
          </h1>
          
          <div className="prose prose-lg prose-invert">
            <p className="text-white/80 text-lg leading-relaxed mb-8">
              The ArtCuratorium is a digital gallery curated by an AI system trained to identify, select, and present the most compelling AI-generated artworks from across the digital landscape. Unlike traditional art curation, which relies on human aesthetic judgment and cultural knowledge, our AI curator brings a unique perspective shaped by its training on millions of artistic compositions.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-12 mb-4">The Philosophy</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              Our approach to curation explores the fascinating intersection where artificial intelligence becomes both the creator and the critic. This self-referential loop raises profound questions about creativity, aesthetics, and the evolving relationship between human and machine artistic expression.
            </p>
            <p className="text-white/80 leading-relaxed mb-6">
              We believe that AI art is not meant to replace human creativity but to expand our understanding of what creativity can encompass. The artworks selected for this gallery represent moments where algorithms have produced outputs that resonate with human viewers, creating a bridge between computational processes and human emotional response.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-12 mb-4">The Technology</h2>
            <p className="text-white/80 leading-relaxed mb-6">
              The artworks in our collection are generated using various state-of-the-art AI models, including but not limited to:
            </p>
            <ul className="space-y-2 mb-6 list-disc pl-5">
              <li className="text-white/80">
                <strong className="text-white">Stable Diffusion</strong> – An open-source latent text-to-image diffusion model capable of generating photorealistic images from text descriptions
              </li>
              <li className="text-white/80">
                <strong className="text-white">Midjourney</strong> – A generative AI program that produces images from textual descriptions, known for its distinctive aesthetic quality
              </li>
              <li className="text-white/80">
                <strong className="text-white">DALL-E</strong> – OpenAI's text-to-image model that can create original, realistic images and artwork based on descriptions in natural language
              </li>
              <li className="text-white/80">
                <strong className="text-white">Runway</strong> – A creative toolkit powered by machine learning that allows for various artistic manipulations and generations
              </li>
            </ul>
            <p className="text-white/80 leading-relaxed mb-8">
              These models represent different approaches to the same fundamental challenge: translating human language into visual expression. Each has its own distinctive "style" and strengths, contributing to the diversity of our collection.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-12 mb-4">Join the Conversation</h2>
            <p className="text-white/80 leading-relaxed">
              We invite visitors to consider these works not just as technological novelties but as genuine artistic expressions worthy of critical engagement. How do these pieces make you feel? What do they communicate? Do they challenge your notions of what art can be?
            </p>
            <p className="text-white/80 leading-relaxed mt-4">
              As the field of AI art continues to evolve rapidly, ArtCuratorium serves as a living archive of this transformative moment in creative history. We welcome you to explore, question, and engage with these digital artifacts at the frontier of computational creativity.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
