import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'motion/react';
import { ArrowRight, HeartHandshake, MapPin, MessageCircle } from 'lucide-react';
import { assetUrl, LINKS, MARQUEE_PHRASES } from '../../data/siteContent';
import { cn } from '../../lib/cn';
import { Badge, Button, Marquee } from '../ui';

const EASE_OUT = [0.22, 1, 0.36, 1] as const;

const HERO_HIGHLIGHTS = [
  { color: 'bg-emerald-400', label: 'Treinos sociais e comunitários' },
  { color: 'bg-[#3B82F6]', label: 'Mini Basquete • Feminino • 3x3' },
  { color: 'bg-[#F5821F]', label: 'Inclusão em quadra' },
] as const;

function HeroAmbientGlow({
  blueY,
  orangeY,
}: {
  blueY: MotionValue<number>;
  orangeY: MotionValue<number>;
}) {
  return (
    <>
      <motion.div
        aria-hidden="true"
        style={{ y: blueY }}
        className="pointer-events-none absolute -top-24 left-1/4 h-96 w-96 rounded-full bg-[#1B4FD8]/30 blur-[120px]"
      />
      <motion.div
        aria-hidden="true"
        style={{ y: orangeY }}
        className="pointer-events-none absolute right-0 bottom-12 h-80 w-80 rounded-full bg-[#F5821F]/25 blur-[120px]"
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

function HeroShowcaseCard({ y }: { y: MotionValue<number> }) {
  return (
    <motion.div
      style={{ y }}
      initial={{ opacity: 0, y: 28, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.75, delay: 0.15, ease: EASE_OUT }}
      className="will-change-transform"
    >
      <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-900 shadow-2xl shadow-black/60">
        <img
          src={assetUrl('images/lider-hero.jpg')}
          alt="Líder do projeto Lord Basketball com a equipe Sub-15 na quadra do Poliesportivo Divino Braga"
          className="aspect-[15/14] w-full object-cover object-center transition duration-700 hover:scale-[1.03]"
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
    </motion.div>
  );
}

function HeroKineticRibbon() {
  return (
    <div className="relative mt-16 border-y border-white/10 bg-[#F5821F] py-2.5 text-slate-950">
      <Marquee durationSeconds={28} fadeEdges={false}>
        {MARQUEE_PHRASES.map((phrase) => (
          <span
            key={phrase}
            className="font-display inline-flex items-center gap-4 px-3 text-lg font-extrabold tracking-wider uppercase"
          >
            <span>{phrase}</span>
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-slate-950/60" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}

export function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const prefersReduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const blueGlowY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, 120]);
  const orangeGlowY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -90]);
  const copyY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, 36]);
  const cardY = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [0, -48]);

  return (
    <section
      ref={heroRef}
      id="inicio"
      className="court-grid relative overflow-hidden bg-[#070B14] pt-28 text-white sm:pt-32 lg:pt-36"
    >
      <HeroAmbientGlow blueY={blueGlowY} orangeY={orangeGlowY} />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:gap-10 lg:px-8">
        <motion.div
          style={{ y: copyY }}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
          className="lg:col-span-6"
        >
          <HeroCopy />
          <HeroActions />
          <HeroHighlights />
        </motion.div>

        <div className="lg:col-span-6">
          <HeroShowcaseCard y={cardY} />
        </div>
      </div>

      <HeroKineticRibbon />
    </section>
  );
}
