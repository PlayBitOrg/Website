export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-game-dark border-b border-game-border overflow-hidden pt-10 pb-20 md:pt-0 md:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <div className="order-2 md:order-1 flex flex-col justify-center">
            {/* Brutalist Accent Block */}
            <div className="h-2 w-24 bg-game-neon mb-8"></div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-black text-white uppercase leading-[1.1] tracking-tight mb-6">
              Your Gaming Universe, Unified.
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-400 mb-10 max-w-lg font-medium leading-relaxed">
              Stop jumping between apps. Get the latest news, track your library, and challenge your gaming knowledge in one beautiful home.
            </p>
            
            <div>
              <a 
                href="https://appdistribution.firebase.dev/i/67c96266be1b2f89" 
                className="inline-block px-8 py-5 bg-game-neon text-game-dark font-black uppercase tracking-wider hover:bg-transparent hover:text-game-neon border-4 border-transparent hover:border-game-neon transition-all text-lg md:text-xl"
              >
                Join the Beta
              </a>
            </div>
          </div>

          {/* Hero Image */}
          <div className="order-1 md:order-2 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-sm">
              {/* Phone Mockup Frame */}
              <div className="rounded-[2rem] border-8 border-game-border overflow-hidden bg-game-card shadow-2xl relative z-10 transform md:rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/PlayBit/assets/screenshots/hero-discover.png" 
                  alt="PlayBit Discover Feed" 
                  className="w-full h-auto object-cover"
                />
              </div>
              
              {/* Decorative brutalist blocks behind the phone */}
              <div className="absolute top-10 -right-4 w-full h-full bg-game-pink z-0 transform rotate-6 border-4 border-game-dark"></div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-game-cyan z-0 border-4 border-game-dark"></div>
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Background brutalist grid lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{ backgroundImage: 'linear-gradient(#2A2D35 1px, transparent 1px), linear-gradient(90deg, #2A2D35 1px, transparent 1px)', backgroundSize: '100px 100px' }}>
      </div>
    </section>
  );
}
