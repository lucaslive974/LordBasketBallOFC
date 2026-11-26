import { ArrowUpRight, HeartHandshake, Instagram } from 'lucide-react';
import { assetUrl, INSTITUTO_ACTIONS, LINKS } from '../data/siteContent';

export function InstitutoSection() {
  return (
    <section id="instituto" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-[#FAF9F6] shadow-xl">
          <div className="grid items-center lg:grid-cols-12">
            <div className="p-8 sm:p-12 lg:col-span-7">
              <div className="flex items-center gap-4">
                <img
                  src={assetUrl('images/logo-instituto.jpg')}
                  alt="Logo Instituto Lord"
                  className="h-16 w-16 rounded-full border border-slate-300 bg-white object-cover shadow-sm"
                />
                <div>
                  <span className="text-xs font-bold tracking-widest text-slate-500 uppercase">
                    Braço Social • @institutolord1
                  </span>
                  <h2 className="font-serif-brand text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
                    Instituto Lord
                  </h2>
                </div>
              </div>

              <p className="font-serif-brand mt-5 text-2xl italic text-slate-700">
                “Fazendo a diferença hoje, construindo o amanhã.”
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-600">
                O Instituto Lord amplia o impacto além das quatro linhas: promove cultura, lazer,
                alimentação, inclusão e acompanhamento familiar para que crianças e adolescentes
                tenham novas perspectivas de futuro.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {INSTITUTO_ACTIONS.map((action) => (
                  <div
                    key={action.title}
                    className="rounded-2xl border border-slate-200/90 bg-white p-4"
                  >
                    <h3 className="text-sm font-bold text-slate-950">{action.title}</h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      {action.description}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={LINKS.vakinha}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#F5821F] px-6 py-3.5 text-sm font-bold text-slate-950 shadow-md transition hover:bg-[#fb923c]"
                >
                  <HeartHandshake className="h-4 w-4" />
                  Contribuir na Vakinha Oficial
                  <ArrowUpRight className="h-4 w-4" />
                </a>

                <a
                  href={LINKS.instagramInstituto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-800 transition hover:border-slate-900"
                >
                  <Instagram className="h-4 w-4" />
                  @institutolord1
                </a>
              </div>
            </div>

            <div className="relative h-full min-h-[340px] lg:col-span-5">
              <img
                src={assetUrl('images/dia-no-parque.jpg')}
                alt="80 crianças do Lord Basketball e Instituto Lord no Dia no Parque"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-slate-950/85 p-4 text-white backdrop-blur-md">
                <p className="text-xs font-bold tracking-wider text-[#FBBF24] uppercase">
                  Ação Social em Destaque
                </p>
                <p className="mt-0.5 text-sm font-medium text-slate-100">
                  Dia no Parque — 80 crianças vivendo uma tarde de sonho no Parque Guanabara.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
