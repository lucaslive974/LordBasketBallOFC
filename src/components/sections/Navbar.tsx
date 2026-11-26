import { useState } from 'react';
import { Menu, MessageCircle, X } from 'lucide-react';
import { LINKS, NAV_ITEMS } from '../../data/siteContent';
import { BrandAvatar, Button, Container } from '../ui';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070B14]/85 backdrop-blur-md">
      <Container className="flex items-center justify-between py-3">
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

        <div className="hidden items-center gap-3 lg:flex">
          <Button href={LINKS.vakinha} external variant="outline-light" size="sm">
            Doar (Vakinha)
          </Button>
          <Button href={LINKS.whatsapp} external variant="brand" size="sm">
            <MessageCircle className="h-4 w-4" />
            WhatsApp
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          className="inline-flex items-center justify-center rounded-lg border border-white/15 p-2 text-slate-200 transition hover:bg-white/10 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-white/10 bg-[#070B14] px-4 pt-3 pb-5 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-slate-200 transition hover:bg-white/5 hover:text-[#F5821F]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2.5 border-t border-white/10 pt-4">
            <Button href={LINKS.whatsapp} external variant="brand" fullWidth>
              <MessageCircle className="h-4 w-4" />
              Falar no WhatsApp
            </Button>
            <Button href={LINKS.vakinha} external variant="outline-light" fullWidth>
              Apoiar na Vakinha
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
