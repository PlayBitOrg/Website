import Header from '../components/Header';
import Footer from '../components/Footer';

export default function TermsOfUse() {
  return (
    <div className="bg-game-dark text-white font-body min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="border-4 border-game-border bg-game-card p-8 md:p-12 shadow-[16px_16px_0px_0px_#2A2D35]">
          <div className="h-2 w-24 bg-game-pink mb-8"></div>
          <h1 className="text-4xl md:text-5xl font-heading font-black uppercase tracking-tight mb-8">Terms of Use</h1>
          
          <div className="space-y-6 text-gray-300 font-medium leading-relaxed">
            <p>Last Updated: {new Date().toLocaleDateString()}</p>
            
            <div className="bg-game-dark border-l-4 border-game-pink p-4 my-6 text-sm text-gray-400">
              <p className="font-bold text-white uppercase mb-1">Beta Disclaimer</p>
              <p>PlayBit is currently in beta. Features may change, break, or be removed without notice. Data loss is possible. Use at your own risk.</p>
            </div>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By downloading or using the PlayBit app ("Service"), these terms will automatically apply to you. Please read them carefully before using the app.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">2. Description of Service</h2>
              <p>PlayBit is a video game library management tool. The app is provided on an "as-is" and "as available" basis. We reserve the right to modify, suspend, or discontinue the Service at any time without notice.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">3. User Conduct</h2>
              <p>You agree not to use the Service to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Violate any local, state, national, or international laws.</li>
                <li>Attempt to reverse engineer, decompile, or hack the app.</li>
                <li>Interfere with or disrupt the security, integrity, or performance of the Service.</li>
                <li>Access the Service through automated means (like bots or scrapers).</li>
              </ul>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">4. Intellectual Property</h2>
              <p>The PlayBit branding, logos, and original content are the property of PlayBit. You may not copy, modify, or distribute our intellectual property without prior written consent.</p>
              <p>Game titles, cover art, and other gaming-related metadata displayed in the app are the property of their respective owners and publishers. We use this data fairly for informational purposes under applicable APIs (like IGDB).</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-game-pink uppercase tracking-wider mt-8 mb-4">5. Limitation of Liability</h2>
              <p className="uppercase font-bold text-white">To the maximum extent permitted by law, PlayBit shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from your use of the service.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">6. Disclaimer of Warranties</h2>
              <p>The app is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, or non-infringement.</p>
            </section>
            
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-wider mt-8 mb-4">7. Changes to Terms</h2>
              <p>We may update our Terms of Use from time to time. Thus, you are advised to review this page periodically for any changes. We will notify you of any changes by posting the new Terms of Use on this page.</p>
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
