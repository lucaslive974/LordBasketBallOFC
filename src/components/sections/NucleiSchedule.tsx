import { Calendar, Clock, MapPin, MessageCircle } from 'lucide-react';
import { LINKS, NUCLEI } from '@data/siteContent';
import {
  Badge,
  Button,
  Card,
  Reveal,
  Section,
  SectionHeader,
  StaggerGroup,
  StaggerItem,
} from '@ui';

type NucleusEntry = (typeof NUCLEI)[number];
type ScheduleEntry = NucleusEntry['schedules'][number];

function ScheduleSlot({ day, time, place }: ScheduleEntry) {
  return (
    <div className="rounded-xl bg-slate-50 p-3.5 ring-1 ring-slate-200/80">
      <div className="flex items-center justify-between gap-2 text-sm font-bold text-slate-900">
        <span className="inline-flex items-center gap-1.5">
          <Calendar className="h-4 w-4 text-[#1B4FD8]" />
          {day}
        </span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#F5821F]">
          <Clock className="h-3.5 w-3.5" />
          {time}
        </span>
      </div>
      <p className="mt-1 text-xs text-slate-600">{place}</p>
    </div>
  );
}

function NucleusCard({ name, badge, badgeTone, city, schedules, note }: NucleusEntry) {
  return (
    <StaggerItem className="h-full">
      <Card
        variant="light"
        padding="lg"
        interactive
        className="flex h-full flex-col justify-between hover:-translate-y-1"
      >
        <div>
          <Badge tone={badgeTone}>{badge}</Badge>

          <h3 className="font-display mt-4 text-3xl font-bold tracking-wide text-slate-950 uppercase">
            {name}
          </h3>

          <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
            <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F5821F]" />
            {city}
          </p>

          <div className="mt-5 space-y-3">
            {schedules.map((sch) => (
              <ScheduleSlot key={`${sch.day}-${sch.place}`} {...sch} />
            ))}
          </div>

          <p className="mt-4 text-sm leading-relaxed text-slate-600">{note}</p>
        </div>

        <div className="mt-6 border-t border-slate-100 pt-5">
          <Button href={LINKS.whatsapp} external variant="dark" fullWidth className="rounded-xl">
            <MessageCircle className="h-4 w-4" />
            Quero treinar neste núcleo
          </Button>
        </div>
      </Card>
    </StaggerItem>
  );
}

export function NucleiSchedule() {
  return (
    <Section id="nucleos" surface="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Onde e Quando Treinamos"
          title="Nossos Núcleos & Horários"
          description="Escolha o núcleo mais próximo de você e fale com a equipe no WhatsApp para confirmar a turma ideal para a idade do seu filho ou filha."
          action={
            <Button href={LINKS.whatsapp} external variant="brand">
              <MessageCircle className="h-4 w-4" />
              Tirar dúvidas no WhatsApp
            </Button>
          }
        />
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-6 lg:grid-cols-3">
        {NUCLEI.map((nucleus) => (
          <NucleusCard key={nucleus.name} {...nucleus} />
        ))}
      </StaggerGroup>
    </Section>
  );
}
