export default function Footer() {
  return (
    <footer className="bg-game-dark border-t-4 border-game-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-12 border-b-2 border-game-border pb-12">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <img src="./playbit-logo.png" alt="PlayBit Logo" className="h-10 w-10 object-contain grayscale" />
              <span className="text-2xl font-heading font-black tracking-widest text-white uppercase">PlayBit</span>
            </a>
            <p className="text-gray-400 font-medium max-w-sm">
              Your gaming universe, unified. Track your library, discover new releases, and challenge your gaming knowledge in one beautiful home.
            </p>
          </div>
          
          <div>
            <h3 className="text-white font-black uppercase tracking-widest mb-6">Navigation</h3>
            <ul className="space-y-4 font-bold text-gray-500 uppercase tracking-wide">
              <li><a href="#features" className="hover:text-game-neon transition-colors">Features</a></li>
              <li><a href="#puzzle" className="hover:text-game-neon transition-colors">Daily Puzzle</a></li>
              <li><a href="https://appdistribution.firebase.dev/i/67c96266be1b2f89" className="hover:text-game-neon transition-colors">Download Beta</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-black uppercase tracking-widest mb-6">Legal</h3>
            <ul className="space-y-4 font-bold text-gray-500 uppercase tracking-wide">
              <li><a href="#/privacy" className="hover:text-game-neon transition-colors">Privacy Policy</a></li>
              <li><a href="#/terms" className="hover:text-game-neon transition-colors">Terms of Use</a></li>
              <li><a href="https://github.com/abhishekdewan101./issues/new" target="_blank" rel="noopener noreferrer" className="hover:text-game-neon transition-colors">Contact / Report Issue</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 font-bold uppercase tracking-wider text-sm">
            &copy; {new Date().getFullYear()} PlayBit. Built with <span className="text-game-pink">❤</span> for gamers.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
