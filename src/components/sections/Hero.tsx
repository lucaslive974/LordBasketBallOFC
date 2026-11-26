import { ArrowRight, HeartHandshake, MapPin, MessageCircle } from 'lucide-react';
import { assetUrl, LINKS } from '../../data/siteContent';
import { cn } from '../../lib/cn';
import { Badge, Button, Section } from '../ui';

const HERO_HIGHLIGHTS = [
  { color: 'bg-emerald-400', label: 'Treinos sociais e comunitários' },
  { color: 'bg-[#3B82F6]', label: 'Mini Basquete • Feminino • 3x3' },
  { color: 'bg-[#F5821F]', label: 'Inclusão em quadra' },
] as const;

function HeroAmbientGlow() {
  return (
    <>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#1B4FD8]/25 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 bottom-0 h-80 w-80 rounded-full bg-[#F5821F]/20 blur-[120px]"
      />
    </>
  );
}

function HeroCopy() {
  return (
    <>
      <Badge tone="gold-dark" className="px-4 py-1.5 tracking-wider uppercase">
        <MapPin className="h-3.5 w-3.5 text-[#F5821F]" />
        Desde 2007 • Nova Contagem, MG &amp; BH
      </Badge>

      <h1 className="font-display mt-6 text-5xl leading-[0.95] font-extrabold tracking-tight text-white uppercase sm:text-6xl lg:text-7xl">
        Jogue com <span className="text-[#F5821F]">Garra</span>,<br />
        Viva com{' '}
        <span className="bg-gradient-to-r from-[#3B82F6] to-[#1B4FD8] bg-clip-text text-transparent">
          Fé.
        </span>
      </h1>

      <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
        Muito mais que basquete: há 19 anos transformamos vidas, ajudamos o próximo e promovemos o
        esporte para crianças, adolescentes e famílias em{' '}
        <strong className="font-semibold text-white">Contagem e Belo Horizonte</strong>.
      </p>

      <p className="mt-3 text-sm font-medium italic text-slate-400">
        “Cada treino é um passo longe da rua e perto de um sonho.”
      </p>
    </>
  );
}

function HeroActions() {
  return (
    <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:items-center">
      <Button href={LINKS.whatsapp} external variant="primary" size="lg">
        <MessageCircle className="h-5 w-5" />
        Quero Participar
        <ArrowRight className="h-4 w-4" />
      </Button>

      <Button href="#instituto" variant="outline-light" size="lg">
        <HeartHandshake className="h-5 w-5 text-[#FBBF24]" />
        Apoiar o Instituto Lord
      </Button>
    </div>
  );
}

function HeroHighlights() {
  return (
    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
      {HERO_HIGHLIGHTS.map((item) => (
        <span key={item.label} className="inline-flex items-center gap-2">
          <span className={cn('h-2 w-2 rounded-full', item.color)} />
          {item.label}
        </span>
      ))}
    </div>
  );
}

function HeroShowcaseCard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl shadow-black/60">
      <img
        src={assetUrl('images/lider-hero.jpg')}
        alt="Líder do projeto Lord Basketball com a equipe Sub-15 na quadra do Poliesportivo Divino Braga"
        className="aspect-[15/14] w-full object-cover object-center"
      />
      <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-slate-950/90 px-5 py-4">
        <div>
          <p className="font-display text-lg font-bold tracking-wide text-white uppercase">
            Lord Basketball Oficial
          </p>
          <p className="text-xs text-slate-400">
            @lordbasketballofc • Líder @son_o.livera &amp; Equipe Sub-15
          </p>
        </div>
        <Badge tone="blue-dark">Finalista Sub-15</Badge>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <Section
      id="inicio"
      surface="dark"
      pattern
      className="overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-36 lg:pb-24"
    >
      <HeroAmbientGlow />

      <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-6">
          <HeroCopy />
          <HeroActions />
          <HeroHighlights />
        </div>

        <div className="lg:col-span-6">
          <HeroShowcaseCard />
        </div>
      </div>
    </Section>
  );
}
