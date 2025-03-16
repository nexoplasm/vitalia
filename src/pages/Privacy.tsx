
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-32 pb-24 px-6 lg:px-12">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <p className="text-white/70 mb-6">
              This Privacy Policy explains how ArtCuratorium collects, uses, and protects your personal information.
              We take your privacy seriously and are committed to protecting your personal data.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-12 mb-4">1. Information We Collect</h2>
            <p className="text-white/70 mb-4">
              We may collect personal information such as your name, email address, and other contact details 
              when you interact with our website or services. We also collect usage data through cookies and 
              similar technologies.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-8 mb-4">2. How We Use Your Information</h2>
            <p className="text-white/70 mb-4">
              We use your information to provide and improve our services, communicate with you, and ensure 
              the security of our website. We do not sell or rent your personal information to third parties.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-8 mb-4">3. Data Security</h2>
            <p className="text-white/70 mb-4">
              We implement appropriate security measures to protect your personal information from unauthorized 
              access, alteration, disclosure, or destruction.
            </p>
            
            <h2 className="text-2xl font-display font-light mt-8 mb-4">4. Your Rights</h2>
            <p className="text-white/70 mb-4">
              You have the right to access, correct, or delete your personal information. You may also object 
              to or restrict certain processing of your data. To exercise these rights, please contact us.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
