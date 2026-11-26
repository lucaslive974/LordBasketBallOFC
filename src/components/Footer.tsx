import { HeartHandshake, Instagram, MapPin, MessageCircle } from 'lucide-react';
import { assetUrl, LINKS, NAV_ITEMS } from '../data/siteContent';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#070B14] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-3">
              <img
                src={assetUrl('images/logo-lord.jpg')}
                alt="Logo Lord Basketball"
                className="h-12 w-12 rounded-full border-2 border-[#F5821F] object-cover"
              />
              <img
                src={assetUrl('images/logo-instituto.jpg')}
                alt="Logo Instituto Lord"
                className="h-12 w-12 rounded-full border border-white/40 bg-white object-cover"
              />
            </div>
            <h3 className="font-display mt-4 text-2xl font-extrabold tracking-wide text-white uppercase">
              Lord Basketball &amp; Instituto Lord
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-slate-400">
              Desde 2007 transformando vidas, ajudando o próximo e promovendo o basquete para
              crianças e jovens em Nova Contagem (Contagem/MG) e Belo Horizonte.
            </p>
            <p className="mt-4 inline-flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="h-4 w-4 text-[#F5821F]" />
              Nova Contagem • Regional Vargem das Flores — Contagem/MG
            </p>
          </div>

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

          <div className="md:col-span-4">
            <h4 className="text-xs font-bold tracking-widest text-white uppercase">
              Canais Oficiais
            </h4>
            <div className="mt-4 flex flex-col gap-3">
              <a
                href={LINKS.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-white transition hover:text-[#F5821F]"
              >
                <MessageCircle className="h-4 w-4 text-[#3B82F6]" />
                WhatsApp Oficial (Inscrições &amp; Parcerias)
              </a>
              <a
                href={LINKS.vakinha}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm font-medium text-white transition hover:text-[#F5821F]"
              >
                <HeartHandshake className="h-4 w-4 text-[#F5821F]" />
                Vakinha Oficial — Instituto Lord
              </a>
              <a
                href={LINKS.instagramLord}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm transition hover:text-[#F5821F]"
              >
                <Instagram className="h-4 w-4 text-slate-400" />
                @lordbasketballofc
              </a>
              <a
                href={LINKS.instagramInstituto}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-sm transition hover:text-[#F5821F]"
              >
                <Instagram className="h-4 w-4 text-slate-400" />
                @institutolord1
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>© {year} Lord Basketball &amp; Instituto Lord. Todos os direitos reservados.</p>
          <p className="italic text-slate-400">Jogue com garra, viva com fé.</p>
        </div>
      </div>
    </footer>
  );
}
