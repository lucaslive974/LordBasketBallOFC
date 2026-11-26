import { MessageCircle } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ImpactStats } from './components/ImpactStats';
import { AboutMinistry } from './components/AboutMinistry';
import { Programs } from './components/Programs';
import { NucleiSchedule } from './components/NucleiSchedule';
import { InstitutoSection } from './components/InstitutoSection';
import { Gallery } from './components/Gallery';
import { SupportSection } from './components/SupportSection';
import { Footer } from './components/Footer';
import { LINKS } from './data/siteContent';

export function App() {
  return (
    <div className="min-h-screen bg-[#070B14]">
      <Navbar />
      <main>
        <Hero />
        <ImpactStats />
        <AboutMinistry />
        <Programs />
        <NucleiSchedule />
        <InstitutoSection />
        <Gallery />
        <SupportSection />
      </main>
      <Footer />

      {/* Floating WhatsApp button for mobile/desktop quick contact */}
      <a
        href={LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar com o Lord Basketball no WhatsApp"
        className="fixed right-5 bottom-5 z-40 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-bold text-slate-950 shadow-xl shadow-emerald-500/30 transition hover:scale-105 hover:bg-emerald-400"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="hidden sm:inline">WhatsApp</span>
      </a>
    </div>
  );
}

export default App;
