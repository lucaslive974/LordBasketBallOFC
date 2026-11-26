import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { LINKS, NAV_ITEMS } from '@data/siteContent';
import { BrandAvatar, Button, Container } from '@ui';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

function BrandLockup() {
  return (
    <a
      href="#inicio"
      className="flex items-center gap-3 focus:outline-none"
      aria-label="Lord Basketball — Início"
    >
      <BrandAvatar brand="lord" size="sm" />
      <div className="leading-none">
        <span className="font-display block text-2xl font-extrabold tracking-wide text-white uppercase">
          LORD <span className="text-[#F5821F]">BASKETBALL</span>
        </span>
        <span className="block text-[11px] font-medium tracking-widest text-slate-300 uppercase">
          &amp; Instituto Lord • Desde 2007
        </span>
      </div>
    </a>
  );
}

function DesktopNavigation() {
  return (
    <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegação principal">
      {NAV_ITEMS.map((item) => (
        <a
          key={item.href}
          href={item.href}
          className="text-sm font-medium text-slate-200 transition-colors hover:text-[#F5821F]"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
}

function DesktopActions() {
  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button href={LINKS.vakinha} external variant="outline-light" size="sm">
        Doar (Vakinha)
      </Button>
      <Button href={LINKS.whatsapp} external variant="brand" size="sm">
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </Button>
    </div>
  );
}

function MobileMenuToggle({ open, onToggle }: { open: boolean; onToggle: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-slate-200 transition hover:bg-white/10 lg:hidden"
      aria-label={open ? 'Fechar menu' : 'Abrir menu'}
      aria-expanded={open}
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={open ? 'close' : 'open'}
          initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
          transition={{ duration: 0.16, ease: EASE_OUT }}
          className="flex"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
}

function MobileDrawer({ onNavigate }: { onNavigate: () => void }) {
  return (
    <motion.div
      key="mobile-drawer"
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.28, ease: EASE_OUT }}
      className="overflow-hidden border-t border-white/10 bg-[#070B14]/98 backdrop-blur-md lg:hidden"
    >
      <div className="px-4 pt-3 pb-5">
        <nav className="flex flex-col gap-1" aria-label="Navegação mobile">
          {NAV_ITEMS.map((item, idx) => (
            <motion.a
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -6 }}
              transition={{ duration: 0.2, delay: idx * 0.03, ease: EASE_OUT }}
              className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-[#F5821F]"
            >
              {item.label}
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.22, delay: 0.12, ease: EASE_OUT }}
          className="mt-4 flex flex-col gap-2.5 border-t border-white/10 pt-4"
        >
          <Button href={LINKS.whatsapp} external variant="brand" fullWidth>
            <MessageCircle className="h-4 w-4" />
            Falar no WhatsApp
          </Button>
          <Button href={LINKS.vakinha} external variant="outline-light" fullWidth>
            Apoiar na Vakinha
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open]);

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-backdrop"
            aria-hidden="true"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-[2px] lg:hidden"
          />
        )}
      </AnimatePresence>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070B14]/85 backdrop-blur-md">
        <Container className="flex items-center justify-between py-3">
          <BrandLockup />
          <DesktopNavigation />
          <DesktopActions />
          <MobileMenuToggle open={open} onToggle={() => setOpen((prev) => !prev)} />
        </Container>

        <AnimatePresence>{open && <MobileDrawer onNavigate={() => setOpen(false)} />}</AnimatePresence>
      </header>
    </>
  );
}
