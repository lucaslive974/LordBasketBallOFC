import { Calendar, Clock, MapPin, MessageCircle } from 'lucide-react';
import { LINKS, NUCLEI } from '../data/siteContent';

const BADGE_STYLES = {
  orange: 'bg-orange-100 text-orange-800 border-orange-200',
  blue: 'bg-blue-100 text-blue-800 border-blue-200',
  emerald: 'bg-emerald-100 text-emerald-800 border-emerald-200',
} as const;

export function NucleiSchedule() {
  return (
    <section id="nucleos" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-[#1B4FD8] uppercase">
              Onde e Quando Treinamos
            </span>
            <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-slate-950 uppercase sm:text-5xl">
              Nossos Núcleos &amp; Horários
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Escolha o núcleo mais próximo de você e fale com a equipe no WhatsApp para confirmar a
              turma ideal para a idade do seu filho ou filha.
            </p>
          </div>
          <a
            href={LINKS.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-fit items-center gap-2 rounded-full bg-[#1B4FD8] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#1B4FD8]/20 transition hover:bg-[#103294]"
          >
            <MessageCircle className="h-4 w-4" />
            Tirar dúvidas no WhatsApp
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {NUCLEI.map((nucleus) => (
            <div
              key={nucleus.name}
              className="flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-[#1B4FD8]/40 hover:shadow-lg"
            >
              <div>
                <span
                  className={`inline-flex rounded-full border px-3 py-1 text-xs font-bold ${BADGE_STYLES[nucleus.badgeTone]}`}
                >
                  {nucleus.badge}
                </span>

                <h3 className="font-display mt-4 text-3xl font-bold tracking-wide text-slate-950 uppercase">
                  {nucleus.name}
                </h3>

                <p className="mt-1.5 flex items-center gap-1.5 text-xs font-medium text-slate-500">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F5821F]" />
                  {nucleus.city}
                </p>

                <div className="mt-5 space-y-3">
                  {nucleus.schedules.map((sch) => (
                    <div
                      key={`${sch.day}-${sch.place}`}
                      className="rounded-xl bg-slate-50 p-3.5 ring-1 ring-slate-200/80"
                    >
                      <div className="flex items-center justify-between gap-2 text-sm font-bold text-slate-900">
                        <span className="inline-flex items-center gap-1.5">
                          <Calendar className="h-4 w-4 text-[#1B4FD8]" />
                          {sch.day}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#F5821F]">
                          <Clock className="h-3.5 w-3.5" />
                          {sch.time}
                        </span>
                      </div>
                      <p className="mt-1 text-xs text-slate-600">{sch.place}</p>
                    </div>
                  ))}
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{nucleus.note}</p>
              </div>

              <div className="mt-6 border-t border-slate-100 pt-5">
                <a
                  href={LINKS.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1B4FD8]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Quero treinar neste núcleo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
