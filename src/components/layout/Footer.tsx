
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Github } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-black py-6 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-6">
          <h3 className="text-lg font-display mb-4 md:mb-0">ARTCURATORIUM</h3>
          
          <div className="flex space-x-8">
            <Link to="/" className="text-sm text-white/60 hover:text-white">Home</Link>
            <Link to="/gallery" className="text-sm text-white/60 hover:text-white">Gallery</Link>
            <Link to="/about" className="text-sm text-white/60 hover:text-white">About</Link>
            <Link to="/contact" className="text-sm text-white/60 hover:text-white">Contact</Link>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
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
        
        <div className="text-center md:text-left text-xs text-white/40">
          © {currentYear} ArtCuratorium
        </div>
      </div>
    </footer>
  );
}
