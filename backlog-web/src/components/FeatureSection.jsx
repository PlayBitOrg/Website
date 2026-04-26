import { useEffect, useRef, useState } from 'react';

export default function FeatureSection({ id, title, body, image, imageAlt, reversed = false, accentColor = 'neon' }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const colorClasses = {
    neon: 'bg-game-neon text-game-neon',
    cyan: 'bg-game-cyan text-game-cyan',
    coral: 'bg-game-coral text-game-coral',
    pink: 'bg-game-pink text-game-pink',
    mint: 'bg-game-mint text-game-mint'
  };

  const currentAccent = colorClasses[accentColor] || colorClasses.neon;
  const bgAccent = currentAccent.split(' ')[0];

  return (
    <section 
      id={id} 
      ref={sectionRef}
      className={`py-20 md:py-32 border-t border-game-border bg-game-dark transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Text Content */}
          <div className={`order-2 ${reversed ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className={`h-2 w-24 mb-8 ${bgAccent}`}></div>
            
            <div className="p-8 md:p-12 border-2 border-game-border relative bg-game-card">
              {/* Decorative corner square */}
              <div className={`absolute -top-3 -right-3 w-6 h-6 border-2 border-game-dark ${bgAccent}`}></div>
              
              <h2 className="text-3xl md:text-5xl font-heading font-black text-white uppercase tracking-tight mb-6">
                {title}
              </h2>
              
              <p className="text-lg md:text-xl text-gray-400 leading-relaxed font-medium">
                {body}
              </p>
            </div>
          </div>

          {/* Image Content */}
          <div className={`order-1 ${reversed ? 'lg:order-2' : 'lg:order-1'} flex justify-center relative`}>
            <div className="relative w-full max-w-sm">
              <div className="rounded-[2rem] border-8 border-game-border overflow-hidden bg-game-card z-10 relative shadow-[16px_16px_0px_0px_#1C1F26]">
                <img 
                  src={image} 
                  alt={imageAlt} 
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
