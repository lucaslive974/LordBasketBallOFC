import { Accessibility, Award, Heart, Sparkles, Tv } from 'lucide-react';
import { assetUrl, MINISTRY_PILLARS } from '../../data/siteContent';
import { Card, IconBox, Section, SectionHeader } from '../ui';

const PILLAR_ICONS = [Sparkles, Heart, Award];

export function AboutMinistry() {
  return (
    <Section id="sobre" surface="light">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-6">
          <SectionHeader
            eyebrow="Nossa História • Desde 2007"
            title={
              <>
                O basquete nos une, mas são as{' '}
                <span className="text-[#1B4FD8]">vidas que nos movem.</span>
              </>
            }
          />

          <p className="mt-5 text-base leading-relaxed text-slate-600 sm:text-lg">
            Nascido em <strong className="text-slate-900">Nova Contagem (Contagem/MG)</strong> e
            fundado por <strong className="text-slate-900">@son_o.livera</strong>, o Lord
            Basketball usa o esporte como ferramenta de fé, educação, cidadania e acolhimento para
            crianças, adolescentes e famílias da comunidade.
          </p>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Nosso trabalho já cruzou fronteiras do bairro — foi destaque no programa{' '}
            <strong className="text-slate-900">Rolê das Gerais (TV Globo)</strong>, levou jovens aos
            Jogos Escolares e ao Campeonato Brasileiro 3x3, e hoje se multiplica em novos núcleos
            gratuitos.
          </p>

          <Card variant="highlight-blue" padding="sm" className="mt-7 p-5">
            <div className="flex items-start gap-3.5">
              <IconBox tone="solid-blue" size="sm">
                <Accessibility className="h-5 w-5" />
              </IconBox>
              <div>
                <h3 className="text-sm font-bold tracking-wide text-slate-950 uppercase">
                  Inclusão Real em Quadra
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-700">
                  Acreditamos que o basquete é para todos. Em parceria com a comunidade, FMB, Mover
                  Cadeiras e ABM Inconfidentes, nos mobilizamos para conquistar uma cadeira de rodas
                  esportiva sob medida para nosso atleta <strong>Yago</strong>.
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="lg:col-span-6">
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-100 shadow-xl">
            <img
              src={assetUrl('images/globo-role-das-gerais.jpg')}
              alt="Entrevista do Lord Basketball para o Rolê das Gerais da TV Globo em Nova Contagem"
              className="aspect-[11/10] w-full object-cover"
            />
            <div className="absolute right-4 bottom-4 left-4 rounded-2xl bg-slate-950/85 p-4 text-white backdrop-blur-md">
              <div className="flex items-center gap-2 text-xs font-bold tracking-wider text-[#FBBF24] uppercase">
                <Tv className="h-4 w-4 text-[#F5821F]" />
                Destaque na TV Globo • Rolê das Gerais
              </div>
              <p className="mt-1 text-xs leading-relaxed text-slate-200 sm:text-sm">
                Reportagem especial mostrando o impacto do Lord Basketball na quadra de Nova
                Contagem.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 grid gap-6 md:grid-cols-3">
        {MINISTRY_PILLARS.map((pillar, index) => {
          const Icon = PILLAR_ICONS[index];
          return (
            <Card key={pillar.title} variant="muted" interactive>
              <IconBox tone="blue">
                <Icon className="h-5 w-5" />
              </IconBox>
              <h3 className="font-display mt-4 text-2xl font-bold tracking-wide text-slate-950 uppercase">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{pillar.description}</p>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
