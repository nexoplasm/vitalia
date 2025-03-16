
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-8">About Vitalia</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-white/70 mb-8">
              Vitalia is dedicated to showcasing the finest AI-generated artwork from across the digital landscape, 
              exploring the intersection of technology and creativity.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-12 mb-4">Our Mission</h2>
            <p className="text-white/70 mb-4">
              We believe that AI-generated art represents a fascinating new frontier in creative expression. 
              Our mission is to curate and present these works in a thoughtful context that celebrates both 
              the technological innovation and the artistic merit they embody.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-12 mb-4">Curation Philosophy</h2>
            <p className="text-white/70 mb-4">
              Each piece in our collection is carefully selected for its unique aesthetic qualities, 
              conceptual depth, and technical execution. We work closely with AI artists and developers 
              to present works that push the boundaries of what machine learning can accomplish in the arts.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-12 mb-4">The Future of AI Art</h2>
            <p className="text-white/70 mb-4">
              As AI technology continues to evolve, so too will the artistic possibilities it enables. 
              Vitalia is committed to remaining at the forefront of this evolution, providing a 
              platform for the most innovative and thought-provoking works in the field.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
