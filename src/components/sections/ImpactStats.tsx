import { IMPACT_STATS } from '@data/siteContent';
import { AnimatedCounter, Section, StaggerGroup, StaggerItem } from '@ui';

type StatEntry = (typeof IMPACT_STATS)[number];

function StatItem({ count, prefix, suffix, label, detail }: StatEntry) {
  return (
    <StaggerItem className="min-w-0 border-l-2 border-[#F5821F] pl-4 sm:pl-5">
      <p className="font-display whitespace-nowrap text-2xl font-extrabold tracking-wide text-white uppercase sm:text-3xl lg:text-4xl">
        <AnimatedCounter to={count} prefix={prefix} suffix={suffix} />
      </p>
      <p className="mt-0.5 text-sm font-bold text-blue-100">{label}</p>
      <p className="mt-0.5 text-xs text-blue-200/90">{detail}</p>
    </StaggerItem>
  );
}

export function ImpactStats() {
  return (
    <Section ariaLabel="Números de impacto" surface="brand" compact>
      <StaggerGroup className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
        {IMPACT_STATS.map((stat) => (
          <StatItem key={stat.label} {...stat} />
        ))}
      </StaggerGroup>
    </Section>
  );
}
