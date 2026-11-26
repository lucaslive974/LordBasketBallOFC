import { useState } from 'react';
import { assetUrl, GALLERY_ITEMS, LINKS, type GalleryItem } from '@data/siteContent';
import {
  Badge,
  Modal,
  Reveal,
  Section,
  SectionHeader,
  SocialProfileCard,
  StaggerGroup,
  StaggerItem,
} from '@ui';

function GalleryTile({
  item,
  onSelect,
}: {
  item: GalleryItem;
  onSelect: (item: GalleryItem) => void;
}) {
  return (
    <StaggerItem>
      <button
        type="button"
        onClick={() => onSelect(item)}
        className="group relative block w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900 text-left transition hover:-translate-y-1 hover:border-[#F5821F]/60 focus:outline-none focus:ring-2 focus:ring-[#F5821F]"
      >
        <div className="aspect-[4/5] w-full overflow-hidden">
          <img
            src={assetUrl(item.image)}
            alt={item.title}
            loading="lazy"
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-4">
          <Badge tone="solid-orange" className="px-2.5 py-0.5 text-[11px] uppercase">
            {item.category}
          </Badge>
          <h3 className="font-display mt-2 text-2xl font-bold text-white uppercase">
            {item.title}
          </h3>
          <p className="mt-1 line-clamp-2 text-xs text-slate-300">{item.caption}</p>
        </div>
      </button>
    </StaggerItem>
  );
}

function InstagramFollowGrid() {
  return (
    <Reveal delay={0.1} className="mt-10 grid gap-5 md:grid-cols-2">
      <SocialProfileCard
        brand="lord"
        handle="@lordbasketballofc"
        description="+6.700 seguidores • Treinos, jogos, Mini Basquete e Lord 3x3"
        href={LINKS.instagramLord}
        accent="orange"
      />
      <SocialProfileCard
        brand="instituto"
        handle="@institutolord1"
        description="Ações sociais, Programação de Férias, cidadania e prestação de contas"
        href={LINKS.instagramInstituto}
        accent="gold"
      />
    </Reveal>
  );
}

function GalleryLightboxContent({ item }: { item: GalleryItem }) {
  return (
    <>
      <img
        src={assetUrl(item.image)}
        alt={item.title}
        className="max-h-[70vh] w-full bg-black object-contain"
      />
      <div className="p-5">
        <span className="text-xs font-bold tracking-wider text-[#F5821F] uppercase">
          {item.category}
        </span>
        <h3 className="font-display mt-1 text-2xl font-bold text-white uppercase">{item.title}</h3>
        <p className="mt-1.5 text-sm text-slate-300">{item.caption}</p>
      </div>
    </>
  );
}

export function Gallery() {
  const [selected, setSelected] = useState<GalleryItem | null>(null);

  return (
    <Section id="momentos" surface="dark">
      <Reveal>
        <SectionHeader
          eyebrow="Galeria & Dia a Dia"
          title="Momentos que Marcam"
          description="Registros marcantes da nossa caminhada. Para acompanhar os treinos, jogos e bastidores de toda semana, siga nossos perfis oficiais no Instagram."
          tone="dark"
        />
      </Reveal>

      <StaggerGroup className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {GALLERY_ITEMS.map((item) => (
          <GalleryTile key={item.id} item={item} onSelect={setSelected} />
        ))}
      </StaggerGroup>

      <InstagramFollowGrid />

      <Modal
        open={selected !== null}
        onClose={() => setSelected(null)}
        ariaLabel={selected?.title ?? 'Visualizar foto'}
      >
        {selected && <GalleryLightboxContent item={selected} />}
      </Modal>
    </Section>
  );
}
