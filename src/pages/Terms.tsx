
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 mb-6">
              These Terms of Service ("Terms") govern your access to and use of the ArtCuratorium website
              and services. Please read these Terms carefully before using our services.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-12 mb-4">1. Acceptance of Terms</h2>
            <p className="text-white/70 mb-4">
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree 
              to these Terms, you may not access or use our services.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-8 mb-4">2. Use of Services</h2>
            <p className="text-white/70 mb-4">
              Our services are provided for your personal, non-commercial use. You agree not to reproduce, 
              duplicate, copy, sell, resell, or exploit any portion of our services without express written 
              permission.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-8 mb-4">3. Intellectual Property</h2>
            <p className="text-white/70 mb-4">
              All content featured on ArtCuratorium, including images, text, and software, is protected by 
              copyright, trademark, and other intellectual property laws. Reproduction or distribution of 
              such content without permission is prohibited.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-8 mb-4">4. Changes to Terms</h2>
            <p className="text-white/70 mb-4">
              We reserve the right to modify these Terms at any time. Your continued use of our services 
              following any changes indicates your acceptance of the new Terms.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
