import type { LucideIcon } from 'lucide-react';
import { HeartHandshake, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { LINKS, NAV_ITEMS } from '@data/siteContent';
import { cn } from '@lib/cn';
import { BrandAvatar, Container } from '@ui';

const OFFICIAL_CHANNELS: ReadonlyArray<{
  icon: LucideIcon;
  iconClass: string;
  label: string;
  href: string;
  emphasized?: boolean;
}> = [
  {
    icon: MessageCircle,
    iconClass: 'text-[#3B82F6]',
    label: 'WhatsApp Oficial (Inscrições & Parcerias)',
    href: LINKS.whatsapp,
    emphasized: true,
  },
  {
    icon: HeartHandshake,
    iconClass: 'text-[#F5821F]',
    label: 'Vakinha Oficial — Instituto Lord',
    href: LINKS.vakinha,
    emphasized: true,
  },
  {
    icon: Instagram,
    iconClass: 'text-slate-400',
    label: '@lordbasketballofc',
    href: LINKS.instagramLord,
  },
  {
    icon: Instagram,
    iconClass: 'text-slate-400',
    label: '@institutolord1',
    href: LINKS.instagramInstituto,
  },
];

function FooterBrandColumn() {
  return (
    <div className="md:col-span-5">
      <div className="flex items-center gap-3">
        <BrandAvatar brand="lord" size="sm" className="h-12 w-12" />
        <BrandAvatar brand="instituto" size="sm" className="h-12 w-12" />
      </div>
      <h3 className="font-display mt-4 text-2xl font-extrabold tracking-wide text-white uppercase">
        Lord Basketball &amp; Instituto Lord
      </h3>
      <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
        Desde 2007 transformando vidas, ajudando o próximo e promovendo o basquete para crianças e
        jovens em Nova Contagem (Contagem/MG) e Belo Horizonte.
      </p>
      <p className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400">
        <MapPin className="h-4 w-4 text-[#F5821F]" />
        Nova Contagem • Regional Vargem das Flores — Contagem/MG
      </p>
    </div>
  );
}

function FooterNavigationColumn() {
  return (
    <div className="md:col-span-3">
      <h4 className="text-xs font-bold tracking-widest text-white uppercase">Navegação</h4>
      <ul className="mt-4 space-y-2.5 text-sm">
        {NAV_ITEMS.map((item) => (
          <li key={item.href}>
            <a href={item.href} className="transition hover:text-[#F5821F]">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterChannelsColumn() {
  return (
    <div className="md:col-span-4">
      <h4 className="text-xs font-bold tracking-widest text-white uppercase">Canais Oficiais</h4>
      <div className="mt-4 flex flex-col gap-3">
        {OFFICIAL_CHANNELS.map(({ icon: Icon, iconClass, label, href, emphasized }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'inline-flex items-center gap-2.5 text-sm transition hover:text-[#F5821F]',
              emphasized && 'font-medium text-white',
            )}
          >
            <Icon className={cn('h-4 w-4', iconClass)} />
            {label}
          </a>
        ))}
      </div>
    </div>
  );
}

function FooterBottomBar() {
  const year = new Date().getFullYear();

  return (
    <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
      <p>© {year} Lord Basketball &amp; Instituto Lord. Todos os direitos reservados.</p>
      <p className="italic text-slate-400">Jogue com garra, viva com fé.</p>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#070B14] text-slate-300">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-12">
          <FooterBrandColumn />
          <FooterNavigationColumn />
          <FooterChannelsColumn />
        </div>
        <FooterBottomBar />
      </Container>
    </footer>
  );
}
