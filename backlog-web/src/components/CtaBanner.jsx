export default function CtaBanner() {
  return (
    <section className="py-24 bg-game-dark relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="border-4 border-game-neon bg-game-card p-8 md:p-16 relative">
          
          {/* Decorative Corner Elements */}
          <div className="absolute -top-4 -left-4 w-8 h-8 bg-game-neon border-4 border-game-dark"></div>
          <div className="absolute -bottom-4 -right-4 w-8 h-8 bg-game-neon border-4 border-game-dark"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-6">
                Ready to Level Up Your Gaming?
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 mb-10 font-medium">
                Join thousands of gamers already using PlayBit to organize their gaming life, track their backlog, and discover what's next.
              </p>
              
              <a 
                href="https://appdistribution.firebase.dev/i/67c96266be1b2f89" 
                className="inline-block px-8 py-5 w-full text-center md:w-auto bg-game-neon text-game-dark font-black uppercase tracking-wider hover:bg-transparent hover:text-game-neon border-4 border-transparent hover:border-game-neon transition-all text-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] hover:shadow-[0px_0px_0px_0px_rgba(255,255,255,0.1)]"
              >
                Get Early Access
              </a>
            </div>
            
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm rounded-[2rem] border-8 border-game-border overflow-hidden transform lg:translate-x-8 lg:-translate-y-8">
                <img 
                  src="/PlayBit/assets/screenshots/profile.png" 
                  alt="PlayBit Profile Stats" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}
