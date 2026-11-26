import { Flame, Medal, Trophy, Users } from 'lucide-react';
import { PROGRAMS } from '../data/siteContent';

const ICONS = [Users, Flame, Trophy, Medal];

export function Programs() {
  return (
    <section
      id="modalidades"
      className="court-grid relative bg-[#0B1222] py-20 text-white sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-[#F5821F] uppercase">
            Dentro de Quadra
          </span>
          <h2 className="font-display mt-2 text-4xl font-extrabold tracking-tight text-white uppercase sm:text-5xl">
            Modalidades &amp; Categorias
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Do primeiro drible no Mini Basquete às competições estaduais e nacionais — cada fase
            desenvolve atletas e cidadãos.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PROGRAMS.map((program, idx) => {
            const Icon = ICONS[idx];
            return (
              <article
                key={program.title}
                className="flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition hover:border-[#F5821F]/60 hover:bg-white/[0.07]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#F5821F]/15 text-[#F5821F]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold text-slate-200">
                      {program.tag}
                    </span>
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
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
