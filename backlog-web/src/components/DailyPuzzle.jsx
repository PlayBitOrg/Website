export default function DailyPuzzle() {
  // Generate random dots for the pixel background grid
  const renderPixelGrid = () => {
    const pixels = [];
    const colors = ['bg-game-neon', 'bg-game-pink', 'bg-game-cyan', 'bg-game-card', 'bg-game-border'];
    
    for (let i = 0; i < 400; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      // mostly dark squares
      const finalColor = Math.random() > 0.85 ? color : 'bg-transparent';
      pixels.push(
        <div key={i} className={`w-full h-full border-[0.5px] border-game-dark/30 ${finalColor}`}></div>
      );
    }
    return pixels;
  };

  return (
    <section id="puzzle" className="py-20 md:py-32 border-y-4 border-game-border bg-game-card relative overflow-hidden">
      
      {/* Pixel Grid Decoration */}
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="w-full h-full grid grid-cols-[repeat(auto-fill,minmax(20px,1fr))] grid-rows-[repeat(auto-fill,minmax(20px,1fr))]">
          {renderPixelGrid()}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-4 py-2 bg-game-pink text-white font-black uppercase tracking-widest text-sm mb-6 border-2 border-game-dark">
            Daily Challenge
          </div>
          
          <h2 className="text-4xl md:text-6xl font-heading font-black text-white uppercase tracking-tight mb-6">
            Think You Know Your Games?
          </h2>
          
          <p className="text-xl text-gray-300 font-medium">
            Put your expertise to the test with daily interactive puzzles. Guess the game from pixelated screenshots and build your winning streak. New challenges refresh every 24 hours.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
          
          <div className="relative w-full max-w-xs transform md:-rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
            <div className="rounded-[2rem] border-8 border-game-border overflow-hidden bg-game-dark shadow-[16px_16px_0px_0px_#CBF221]">
              <img 
                src="/PlayBit/assets/screenshots/pixel-guess.png" 
                alt="Pixel Guess Puzzle" 
                className="w-full h-auto"
              />
            </div>
          </div>
          
          <div className="hidden md:flex items-center justify-center w-16 h-16 bg-game-dark border-4 border-game-border text-game-neon font-black text-3xl">
            +
          </div>
          
          <div className="relative w-full max-w-xs transform md:rotate-6 hover:rotate-0 transition-transform duration-300 z-20">
            <div className="rounded-[2rem] border-8 border-game-border overflow-hidden bg-game-dark shadow-[16px_16px_0px_0px_#F25C78]">
              <img 
                src="/PlayBit/assets/screenshots/play.png" 
                alt="Play Section" 
                className="w-full h-auto"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
