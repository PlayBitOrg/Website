import Header from '../components/Header';
import Footer from '../components/Footer';

export default function PrivacyPolicy() {
  return (
    <div className="bg-game-dark text-white font-body min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="border-4 border-game-border bg-game-card p-8 md:p-12 shadow-[16px_16px_0px_0px_#2A2D35]">
          <div className="h-2 w-24 bg-game-neon mb-8"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight mb-8">Privacy Policy</h1>
          
          <div className="space-y-6 text-gray-300 font-medium leading-relaxed">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">1. Information We Collect</h2>
              <p>PlayBit is built with a privacy-first approach. All your gaming data, including your library, progress, and preferences, is stored <strong>locally on your device</strong>. The developer does not have access to, nor do we collect, your personal app data.</p>
              <p>The only information collected is related to the beta testing process:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Beta Sign-up Email:</strong> The email address you use to sign up for the beta via Firebase App Distribution.</li>
                <li><strong>Crash Reports:</strong> Anonymous crash logs (if opted-in) to help us fix bugs during the beta phase.</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">2. How We Use Your Information</h2>
              <p>Because your app data is strictly local, we only use the beta sign-up email to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Grant you access to download the PlayBit beta through Firebase.</li>
                <li>Communicate important updates regarding the beta testing phase.</li>
              </ul>
              <p className="text-game-neon font-bold mt-4">We do not sell any data, and we do not see your gaming library or app usage.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">3. Third-Party Services</h2>
              <p>PlayBit uses third-party services that may collect information used to identify you. These include:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Firebase:</strong> Used for App Distribution, crash reporting, and analytics.</li>
                <li><strong>IGDB:</strong> Used to fetch game data and images.</li>
              </ul>
              <p>Please review the privacy policies of these third-party providers for more information on their data practices.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">4. Data Retention and Deletion</h2>
              <p>We retain your data as long as your account is active. You have the right to request the deletion of your account and associated data at any time. To do so, please use the account deletion feature within the app.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">5. Contact Us</h2>
              <p>If you have any questions or suggestions about our Privacy Policy, or want to report an issue, please <a href="https://github.com/abhishekdewan101/PlayBit/issues/new" target="_blank" rel="noopener noreferrer" className="text-game-neon hover:underline">file an issue on our GitHub repository</a>.</p>
            </section>
          </div>
          
          <div className="mt-12 pt-8 border-t border-game-border">
            <a href="#/" className="inline-block px-6 py-3 bg-transparent text-white font-bold uppercase tracking-wider hover:bg-game-border border-2 border-game-border transition-colors">
              &larr; Back to Home
            </a>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
