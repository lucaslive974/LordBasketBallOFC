import { MotionConfig } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import {
  AboutMinistry,
  Footer,
  Gallery,
  Hero,
  ImpactStats,
  InstitutoSection,
  Navbar,
  NucleiSchedule,
  Programs,
  SupportSection,
} from './components/sections';
import { Button, ScrollProgress } from './components/ui';
import { LINKS } from './data/siteContent';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#070B14]">
        <ScrollProgress />
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

        <Button
          href={LINKS.whatsapp}
          external
          variant="whatsapp"
          ariaLabel="Falar com o Lord Basketball no WhatsApp"
          className="fixed right-5 bottom-5 z-40 px-4 py-3 hover:scale-105"
        >
          <MessageCircle className="h-5 w-5" />
          <span className="hidden sm:inline">WhatsApp</span>
        </Button>
      </div>
    </MotionConfig>
  );
}

export default App;
