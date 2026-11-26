import { ArrowRight, HeartHandshake, MapPin, MessageCircle } from 'lucide-react';
import { assetUrl, LINKS } from '../data/siteContent';

export function Hero() {
  return (
    <section
      id="inicio"
      className="court-grid relative overflow-hidden bg-[#070B14] pt-28 pb-20 text-white sm:pt-32 lg:pt-36 lg:pb-24"
    >
      {/* Subtle brand glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#1B4FD8]/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#F5821F]/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <div className="lg:col-span-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#F5821F]/40 bg-[#F5821F]/10 px-4 py-1.5 text-xs font-semibold tracking-wider text-[#FBBF24] uppercase">
            <MapPin className="h-3.5 w-3.5 text-[#F5821F]" />
            Desde 2007 • Nova Contagem, MG &amp; BH
          </div>

          <h1 className="font-display mt-6 text-5xl leading-[0.95] font-extrabold tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
            Jogue com{' '}
            <span className="text-[#F5821F]">Garra</span>,<br />
            Viva com{' '}
            <span className="bg-gradient-to-r from-[#3B82F6] to-[#1B4FD8] bg-clip-text text-transparent">
              Fé.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
            Muito mais que basquete: há 19 anos transformamos vidas, ajudamos o próximo e
            promovemos o esporte para crianças, adolescentes e famílias em{' '}
            <strong className="font-semibold text-white">Contagem e Belo Horizonte</strong>.
          </p>

          <p className="mt-3 text-sm font-medium italic text-slate-400">
            “Cada treino é um passo longe da rua e perto de um sonho.”
          </p>

          <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
            <a
              href={LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#F5821F] px-7 py-3.5 text-base font-bold text-slate-950 shadow-lg shadow-[#F5821F]/25 transition hover:bg-[#fb923c]"
            >
              <MessageCircle className="h-5 w-5" />
              Quero Participar
              <ArrowRight className="h-4 w-4" />
            </a>

            <a
              href="#instituto"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3.5 text-base font-semibold text-white backdrop-blur transition hover:border-white/40 hover:bg-white/10"
            >
              <HeartHandshake className="h-5 w-5 text-[#FBBF24]" />
              Apoiar o Instituto Lord
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Treinos sociais e comunitários
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#3B82F6]" />
              Mini Basquete • Feminino • 3x3
            </span>
            <span className="inline-flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F5821F]" />
              Inclusão em quadra
            </span>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl shadow-black/60">
              <img
                src={assetUrl('images/streetball-quadra.jpg')}
                alt="Atletas do Lord Basketball com troféu e medalhas do Desafio 3x3"
                className="aspect-[4/3] w-full object-cover object-top"
              />
              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-slate-950/90 px-5 py-4">
                <div>
                  <p className="font-display text-lg font-bold tracking-wide text-white uppercase">
                    Lord Basketball Oficial
                  </p>
                  <p className="text-xs text-slate-400">
                    @lordbasketballofc • Comunidade com +6.700 seguidores
                  </p>
                </div>
                <span className="rounded-full bg-[#1B4FD8]/20 px-3 py-1 text-xs font-bold text-[#60A5FA] ring-1 ring-[#1B4FD8]/40">
                  4º Brasileiro 3x3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
