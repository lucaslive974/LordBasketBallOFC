import { ArrowUpRight, Handshake, HeartHandshake, ShoppingBag } from 'lucide-react';
import { LINKS, PARTNERS } from '../data/siteContent';

const WAYS = [
  {
    icon: HeartHandshake,
    title: 'Doe pela Vakinha',
    description:
      'Qualquer valor ajuda a custear bolas, uniformes, viagens para campeonatos, lanches e ações para as crianças.',
    cta: 'Acessar Vakinha Oficial',
    href: LINKS.vakinha,
    accent: 'bg-[#F5821F] text-slate-950 hover:bg-[#fb923c]',
  },
  {
    icon: Handshake,
    title: 'Seja um Parceiro',
    description:
      'Empresas, igrejas e apoiadores locais fortalecem nossos núcleos em Contagem e BH e levam o projeto ainda mais longe.',
    cta: 'Conversar no WhatsApp',
    href: LINKS.whatsapp,
    accent: 'bg-[#1B4FD8] text-white hover:bg-[#103294]',
  },
  {
    icon: ShoppingBag,
    title: 'Produtos do Time',
    description:
      'Vista a camisa ou boné oficial do Lord Basketball — cada item adquirido ajuda diretamente a manter os treinos gratuitos.',
    cta: 'Consultar Produtos',
    href: LINKS.whatsapp,
    accent: 'bg-slate-900 text-white hover:bg-slate-800',
  },
] as const;

export function SupportSection() {
  return (
    <section id="apoie" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-bold tracking-widest text-[#1B4FD8] uppercase">
            Faça Parte Dessa Missão
          </span>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-slate-950 uppercase sm:text-5xl">
            Como Apoiar o Projeto
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Esporte que transforma. Vidas que importam. Escolha como caminhar junto com o Lord
            Basketball e o Instituto Lord.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {WAYS.map((way) => {
            const Icon = way.icon;
            return (
              <div
                key={way.title}
                className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-[#1B4FD8]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display mt-5 text-3xl font-bold text-slate-950 uppercase">
                    {way.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{way.description}</p>
                </div>

                <a
                  href={way.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-7 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold transition ${way.accent}`}
                >
                  {way.cta}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* Community Partners */}
        <div className="mt-16 rounded-3xl border border-slate-200 bg-white p-8">
          <p className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase">
            Quem Caminha Conosco • Parceiros, Igrejas, Escolas &amp; Apoiadores
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-700"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
