import { IMPACT_STATS } from '../../data/siteContent';
import { Section } from '../ui';

type StatEntry = (typeof IMPACT_STATS)[number];

function StatItem({ value, label, detail }: StatEntry) {
  return (
    <div className="border-l-2 border-[#F5821F] pl-4 sm:pl-5">
      <p className="font-display text-3xl font-extrabold tracking-wide text-white uppercase sm:text-4xl">
        {value}
      </p>
      <p className="mt-0.5 text-sm font-bold text-blue-100">{label}</p>
      <p className="mt-0.5 text-xs text-blue-200/90">{detail}</p>
    </div>
  );
}

export function ImpactStats() {
  return (
    <Section ariaLabel="Números de impacto" surface="brand" compact>
      <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        {IMPACT_STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </div>
    </Section>
  );
}
