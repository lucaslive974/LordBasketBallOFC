import type { LucideIcon } from 'lucide-react';
import { Flame, Medal, Trophy, Users } from 'lucide-react';
import { PROGRAMS } from '../../data/siteContent';
import {
  Badge,
  Card,
  IconBox,
  Reveal,
  Section,
  SectionHeader,
  StaggerGroup,
  StaggerItem,
} from '../ui';

const PROGRAM_ICONS: readonly LucideIcon[] = [Users, Flame, Trophy, Medal];

type ProgramEntry = (typeof PROGRAMS)[number];

function ProgramCard({
  icon: Icon,
  tag,
  title,
  description,
  highlight,
}: ProgramEntry & { icon: LucideIcon }) {
  return (
    <StaggerItem className="h-full">
      <Card
        variant="glass"
        interactive
        className="flex h-full flex-col justify-between hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F5821F]/10"
      >
        <div>
          <div className="flex items-center justify-between gap-2">
            <IconBox tone="orange-dark">
              <Icon className="h-5 w-5" />
            </IconBox>
            <Badge tone="glass" className="text-[11px] font-semibold">
              {tag}
            </Badge>
          </div>

          <h3 className="font-display mt-5 text-2xl font-bold tracking-wide text-white uppercase">
            {title}
          </h3>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-300">{description}</p>
        </div>

        <div className="mt-6 border-t border-white/10 pt-4">
          <span className="text-xs font-bold tracking-wider text-[#FBBF24] uppercase">
            {highlight}
          </span>
        </div>
      </Card>
    </StaggerItem>
  );
}

export function Programs() {
  return (
    <Section id="modalidades" surface="navy" pattern>
      <Reveal>
        <SectionHeader
          eyebrow="Dentro de Quadra"
          title="Modalidades & Categorias"
          description="Do primeiro drible no Mini Basquete às competições estaduais e nacionais — cada fase desenvolve atletas e cidadãos."
          tone="dark"
        />
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {PROGRAMS.map((program, idx) => (
          <ProgramCard key={program.title} icon={PROGRAM_ICONS[idx]} {...program} />
        ))}
      </StaggerGroup>
    </Section>
  );
}
