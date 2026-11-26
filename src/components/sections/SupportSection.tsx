import type { LucideIcon } from 'lucide-react';
import { ArrowUpRight, Handshake, HeartHandshake, ShoppingBag } from 'lucide-react';
import { LINKS, PARTNERS } from '../../data/siteContent';
import {
  Badge,
  Button,
  Card,
  IconBox,
  Marquee,
  Reveal,
  Section,
  SectionHeader,
  StaggerGroup,
  StaggerItem,
  type ButtonVariant,
} from '../ui';

interface SupportOption {
  icon: LucideIcon;
  title: string;
  description: string;
  cta: string;
  href: string;
  variant: ButtonVariant;
}

const SUPPORT_OPTIONS: readonly SupportOption[] = [
  {
    icon: HeartHandshake,
    title: 'Doe pela Vakinha',
    description:
      'Qualquer valor ajuda a custear bolas, uniformes, viagens para campeonatos, lanches e ações para as crianças.',
    cta: 'Acessar Vakinha Oficial',
    href: LINKS.vakinha,
    variant: 'primary',
  },
  {
    icon: Handshake,
    title: 'Seja um Parceiro',
    description:
      'Empresas, igrejas e apoiadores locais fortalecem nossos núcleos em Contagem e BH e levam o projeto ainda mais longe.',
    cta: 'Conversar no WhatsApp',
    href: LINKS.whatsapp,
    variant: 'brand',
  },
  {
    icon: ShoppingBag,
    title: 'Produtos do Time',
    description:
      'Vista a camisa ou boné oficial do Lord Basketball — cada item adquirido ajuda diretamente a manter os treinos gratuitos.',
    cta: 'Consultar Produtos',
    href: LINKS.whatsapp,
    variant: 'dark',
  },
];

function SupportOptionCard({ icon: Icon, title, description, cta, href, variant }: SupportOption) {
  return (
    <StaggerItem className="h-full">
      <Card
        variant="light"
        padding="lg"
        interactive
        className="flex h-full flex-col justify-between hover:-translate-y-1"
      >
        <div>
          <IconBox tone="muted" size="lg">
            <Icon className="h-6 w-6" />
          </IconBox>
          <h3 className="font-display mt-5 text-3xl font-bold text-slate-950 uppercase">{title}</h3>
          <p className="mt-2.5 text-sm leading-relaxed text-slate-600">{description}</p>
        </div>

        <Button href={href} external variant={variant} fullWidth className="mt-7">
          {cta}
          <ArrowUpRight className="h-4 w-4" />
        </Button>
      </Card>
    </StaggerItem>
  );
}

function PartnersWall() {
  return (
    <Reveal delay={0.1}>
      <Card variant="light" padding="lg" className="mt-16 overflow-hidden p-8">
        <p className="text-center text-xs font-bold tracking-widest text-slate-500 uppercase">
          Quem Caminha Conosco • Parceiros, Igrejas, Escolas &amp; Apoiadores
        </p>
        <Marquee durationSeconds={36} className="mt-6">
          {PARTNERS.map((partner) => (
            <Badge key={partner} tone="neutral" className="whitespace-nowrap px-4 py-2 font-semibold">
              {partner}
            </Badge>
          ))}
        </Marquee>
      </Card>
    </Reveal>
  );
}

export function SupportSection() {
  return (
    <Section id="apoie" surface="muted">
      <Reveal>
        <SectionHeader
          eyebrow="Faça Parte Dessa Missão"
          title="Como Apoiar o Projeto"
          description="Esporte que transforma. Vidas que importam. Escolha como caminhar junto com o Lord Basketball e o Instituto Lord."
          align="center"
        />
      </Reveal>

      <StaggerGroup className="mt-12 grid gap-6 md:grid-cols-3">
        {SUPPORT_OPTIONS.map((option) => (
          <SupportOptionCard key={option.title} {...option} />
        ))}
      </StaggerGroup>

      <PartnersWall />
    </Section>
  );
}
