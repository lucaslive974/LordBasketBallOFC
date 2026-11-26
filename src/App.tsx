import { lazy, Suspense } from 'react';
import { MotionConfig } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { AboutMinistry, Hero, ImpactStats, Navbar, Programs } from '@sections';
import { Button, ScrollProgress } from '@ui';
import { LINKS } from '@data/siteContent';
import { useSmoothScroll } from '@hooks/useSmoothScroll';

const NucleiSchedule = lazy(() =>
  import('@sections/NucleiSchedule').then((m) => ({ default: m.NucleiSchedule })),
);
const InstitutoSection = lazy(() =>
  import('@sections/InstitutoSection').then((m) => ({ default: m.InstitutoSection })),
);
const Gallery = lazy(() => import('@sections/Gallery').then((m) => ({ default: m.Gallery })));
const SupportSection = lazy(() =>
  import('@sections/SupportSection').then((m) => ({ default: m.SupportSection })),
);
const Footer = lazy(() => import('@sections/Footer').then((m) => ({ default: m.Footer })));

function SectionFallback({ dark = false }: { dark?: boolean }) {
  return (
    <div
      aria-hidden="true"
      className={dark ? 'h-96 bg-[#070B14] animate-pulse' : 'h-96 bg-slate-100 animate-pulse'}
    />
  );
}

export function App() {
  useSmoothScroll({ lerp: 0.095, wheelMultiplier: 1 });

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

          <Suspense fallback={<SectionFallback />}>
            <NucleiSchedule />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <InstitutoSection />
          </Suspense>

          <Suspense fallback={<SectionFallback dark />}>
            <Gallery />
          </Suspense>

          <Suspense fallback={<SectionFallback />}>
            <SupportSection />
          </Suspense>
        </main>

        <Suspense fallback={<SectionFallback dark />}>
          <Footer />
        </Suspense>

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
