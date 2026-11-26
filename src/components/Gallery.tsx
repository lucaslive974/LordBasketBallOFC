import { useState } from 'react';
import { ArrowUpRight, Instagram, X } from 'lucide-react';
import { assetUrl, GALLERY_ITEMS, LINKS, type GalleryItem } from '../data/siteContent';

export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <section id="momentos" className="bg-[#070B14] py-20 text-white sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#F5821F] uppercase">
              Galeria &amp; Dia a Dia
            </span>
            <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl">
              Momentos que Marcam
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Registros marcantes da nossa caminhada. Para acompanhar os treinos, jogos e bastidores
              de toda semana, siga nossos perfis oficiais no Instagram.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GALLERY_ITEMS.map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setSelected(item)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900 text-left focus:outline-none focus:ring-2 focus:ring-[#F5821F]"
            >
              <div className="aspect-[4/5] w-full overflow-hidden">
                <img
                  src={assetUrl(item.image)}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <span className="inline-block rounded-full bg-[#F5821F]/90 px-2.5 py-0.5 text-[11px] font-bold text-slate-950 uppercase">
                  {item.category}
                </span>
                <h3 className="font-display mt-2 text-2xl font-bold text-white uppercase">
                  {item.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-slate-300">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Instagram Live Feed Callout Cards */}
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <a
            href={LINKS.instagramLord}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-gradient-to-r from-[#1B4FD8]/25 to-slate-900 p-5 transition hover:border-[#F5821F]"
          >
            <div className="flex items-center gap-4">
              <img
                src={assetUrl('images/logo-lord.jpg')}
                alt="Lord Basketball Instagram"
                className="h-14 w-14 rounded-full border-2 border-[#F5821F] object-cover"
              />
              <div>
                <p className="flex items-center gap-1.5 text-sm font-bold text-white">
                  <Instagram className="h-4 w-4 text-[#F5821F]" />
                  @lordbasketballofc
                </p>
                <p className="mt-0.5 text-xs text-slate-300">
                  +6.700 seguidores • Treinos, jogos, Mini Basquete e Lord 3x3
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#F5821F]" />
          </a>

          <a
            href={LINKS.instagramInstituto}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-white/15 bg-gradient-to-r from-white/10 to-slate-900 p-5 transition hover:border-[#F5821F]"
          >
            <div className="flex items-center gap-4">
              <img
                src={assetUrl('images/logo-instituto.jpg')}
                alt="Instituto Lord Instagram"
                className="h-14 w-14 rounded-full border-2 border-white/60 bg-white object-cover"
              />
              <div>
                <p className="flex items-center gap-1.5 text-sm font-bold text-white">
                  <Instagram className="h-4 w-4 text-[#FBBF24]" />
                  @institutolord1
                </p>
                <p className="mt-0.5 text-xs text-slate-300">
                  Ações sociais, Programação de Férias, cidadania e prestação de contas
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-5 w-5 shrink-0 text-slate-300 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#FBBF24]" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
          onClick={() => setSelected(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selected.title}
        >
          <div
            className="relative max-w-2xl overflow-hidden rounded-3xl border border-white/15 bg-slate-950 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 rounded-full bg-black/70 p-2 text-white transition hover:bg-black"
              aria-label="Fechar imagem"
            >
              <X className="h-5 w-5" />
            </button>
            <img
              src={assetUrl(selected.image)}
              alt={selected.title}
              className="max-h-[70vh] w-full object-contain bg-black"
            />
            <div className="p-5">
              <span className="text-xs font-bold tracking-wider text-[#F5821F] uppercase">
                {selected.category}
              </span>
              <h3 className="font-display mt-1 text-2xl font-bold text-white uppercase">
                {selected.title}
              </h3>
              <p className="mt-1.5 text-sm text-slate-300">{selected.caption}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
