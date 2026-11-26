import { Flame, Medal, Trophy, Users } from 'lucide-react';
import { PROGRAMS } from '../../data/siteContent';
import { Badge, Card, IconBox, Section, SectionHeader } from '../ui';

const ICONS = [Users, Flame, Trophy, Medal];

export function Programs() {
  return (
    <Section id="modalidades" surface="navy" pattern>
      <SectionHeader
        eyebrow="Dentro de Quadra"
        title="Modalidades & Categorias"
        description="Do primeiro drible no Mini Basquete às competições estaduais e nacionais — cada fase desenvolve atletas e cidadãos."
        tone="dark"
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map((program, idx) => {
          const Icon = ICONS[idx];
          return (
            <Card
              key={program.title}
              variant="glass"
              interactive
              className="flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2">
                  <IconBox tone="orange-dark">
                    <Icon className="h-5 w-5" />
                  </IconBox>
                  <Badge tone="glass" className="text-[11px] font-semibold">
                    {program.tag}
                  </Badge>
                </div>

                <h3 className="font-display mt-5 text-2xl font-bold tracking-wide text-white uppercase">
                  {program.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-slate-300">
                  {program.description}
                </p>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <span className="text-xs font-bold tracking-wider text-[#FBBF24] uppercase">
                  {program.highlight}
                </span>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
