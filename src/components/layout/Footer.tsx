
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/10 bg-black py-8 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-3">
            <h3 className="text-lg font-display">ARTCURATORIUM</h3>
            <p className="text-sm text-white/60 max-w-xs">
              Curating the finest AI-generated artwork from across the digital landscape.
            </p>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <Link to="/" className="text-sm text-white/60 hover:text-white">Home</Link>
              <Link to="/gallery" className="text-sm text-white/60 hover:text-white">Gallery</Link>
              <Link to="/about" className="text-sm text-white/60 hover:text-white">About</Link>
              <Link to="/contact" className="text-sm text-white/60 hover:text-white">Contact</Link>
            </div>
          </div>
          
          <div className="space-y-3">
            <h4 className="text-sm font-medium">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="text-white/60 hover:text-white">
                <Github className="h-5 w-5" />
                <span className="sr-only">Github</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-col md:flex-row md:items-center justify-between">
          <p className="text-xs text-white/40">
            © {currentYear} ArtCuratorium. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="text-xs text-white/40 hover:text-white/60">Privacy Policy</Link>
            <Link to="/terms" className="text-xs text-white/40 hover:text-white/60">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
