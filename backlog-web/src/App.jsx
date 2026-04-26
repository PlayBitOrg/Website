import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import DailyPuzzle from './components/DailyPuzzle';
import CtaBanner from './components/CtaBanner';
import Footer from './components/Footer';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfUse from './pages/TermsOfUse';

function App() {
  const [page, setPage] = useState(window.location.hash);

  useEffect(() => {
    const handleHashChange = () => {
      setPage(window.location.hash);
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Legal pages routing
  if (page === '#/privacy') return <PrivacyPolicy />;
  if (page === '#/terms') return <TermsOfUse />;

  // Main landing page
  return (
    <div className="bg-game-dark text-white font-body min-h-screen">
      <Header />
      
      <main>
        <Hero />
        
        <FeatureSection 
          id="features"
          title="Never Miss a Release."
          body="A curated feed of the latest games and news from the sources you trust. From AAA blockbusters to indie gems, stay ahead of the curve with integrated video trailers and deep-dive articles."
          image="/PlayBit/assets/screenshots/hero-discover.png"
          imageAlt="Discover feed"
          reversed={false}
          accentColor="neon"
        />
        
        <FeatureSection 
          id="library"
          title="Conquer Your Library."
          body="Finally, a way to organize your collection that actually works. Categorize what you're playing, what's on deck, and what you've finished across all platforms."
          image="/PlayBit/assets/screenshots/library.png"
          imageAlt="Library tracker"
          reversed={true}
          accentColor="cyan"
        />
        
        <FeatureSection 
          id="details"
          title="The Details Matter."
          body="Get all the information you need in one place. Ratings, platforms, release dates, and integrated reviews so you know exactly what you're getting into."
          image="/PlayBit/assets/screenshots/game-details.png"
          imageAlt="Game details"
          reversed={false}
          accentColor="coral"
        />
        
        <DailyPuzzle />
        
        <CtaBanner />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
