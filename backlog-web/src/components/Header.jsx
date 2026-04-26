import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-game-dark border-b-2 border-game-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <a href="#" className="flex items-center gap-3">
              <img src="/PlayBit/playbit-logo.png" alt="PlayBit Logo" className="h-10 w-10 object-contain" />
              <span className="text-2xl font-heading font-black tracking-widest text-white uppercase">PlayBit</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors">Features</a>
            <a href="#puzzle" className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors">Daily Puzzle</a>
            <a href="https://github.com/abhishekdewan101/PlayBit/issues/new" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-gray-300 hover:text-white uppercase tracking-wider transition-colors">Contact</a>
            <a 
              href="https://appdistribution.firebase.dev/i/67c96266be1b2f89" 
              className="px-6 py-3 bg-game-neon text-game-dark font-black uppercase tracking-wider hover:bg-transparent hover:text-game-neon border-2 border-transparent hover:border-game-neon transition-all"
            >
              Download
            </a>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-game-dark border-b-2 border-game-border">
          <div className="px-2 pt-2 pb-6 space-y-2 sm:px-3">
            <a href="#features" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-gray-300 hover:text-white hover:bg-game-card uppercase tracking-wider">Features</a>
            <a href="#puzzle" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-gray-300 hover:text-white hover:bg-game-card uppercase tracking-wider">Daily Puzzle</a>
            <a href="https://github.com/abhishekdewan101/PlayBit/issues/new" target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-gray-300 hover:text-white hover:bg-game-card uppercase tracking-wider">Contact</a>
            <a 
              href="https://appdistribution.firebase.dev/i/67c96266be1b2f89" 
              className="block mt-4 mx-3 px-6 py-4 text-center bg-game-neon text-game-dark font-black uppercase tracking-wider border-2 border-transparent"
            >
              Download
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
