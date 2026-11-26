export const assetUrl = (path: string) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;

export const LINKS = {
  whatsapp: 'https://wa.me/message/YSSLN3GMIA4HC1',
  vakinha: 'https://vakinha.bio/4021823',
  instagramLord: 'https://www.instagram.com/lordbasketballofc/',
  instagramInstituto: 'https://www.instagram.com/institutolord1/',
  threadsLord: 'https://www.threads.com/@lordbasketballofc',
} as const;

export const NAV_ITEMS = [
  { label: 'Sobre', href: '#sobre' },
  { label: 'Modalidades', href: '#modalidades' },
  { label: 'Núcleos e Horários', href: '#nucleos' },
  { label: 'Instituto Lord', href: '#instituto' },
  { label: 'Momentos', href: '#momentos' },
  { label: 'Apoie', href: '#apoie' },
] as const;

export const IMPACT_STATS = [
  {
    count: 19,
    prefix: '',
    suffix: '+ Anos',
    label: 'Desde 2007',
    detail: 'Nascido em Nova Contagem – MG',
  },
  {
    count: 3,
    prefix: '',
    suffix: ' Núcleos',
    label: 'Contagem & BH',
    detail: 'Quadras abertas à comunidade',
  },
  {
    count: 4,
    prefix: '',
    suffix: 'º Lugar',
    label: 'Brasileiro 3x3',
    detail: 'Etapa Sudeste • Vila Velha (ES)',
  },
  {
    count: 80,
    prefix: '',
    suffix: '+ Crianças',
    label: 'Ações Sociais',
    detail: 'Dia no Parque, férias e cidadania',
  },
] as const;

export const MARQUEE_PHRASES = [
  'Jogue com Garra, Viva com Fé',
  'Desde 2007 em Nova Contagem',
  'Transformar Vidas • Ajudar o Próximo',
  'Mini Basquete • As Lordianas • Lord 3x3',
  'Inclusão Real em Quadra',
  'Instituto Lord • Construindo o Amanhã',
] as const;

export const MINISTRY_PILLARS = [
  {
    title: 'Transformar Vidas',
    description:
      'Cada treino é um passo longe da rua e perto de um sonho. Formamos caráter, disciplina e esperança através do basquete.',
  },
  {
    title: 'Ajudar o Próximo',
    description:
      'Acolhemos crianças, jovens e famílias com fé, cuidado comunitário, inclusão real e ações sociais ao longo do ano.',
  },
  {
    title: 'Promover o Esporte',
    description:
      'Do Mini Basquete ao 3x3 nacional, criamos oportunidades reais para que nossos atletas ocupem quadras e campeonatos.',
  },
] as const;

export const PROGRAMS = [
  {
    tag: 'Infantil • Sub-11 e Sub-12',
    title: 'Nosso Mini Basquete',
    description:
      'Iniciação esportiva lúdica e formativa para crianças darem os primeiros arremessos, com participação no Festival de Mini Basquete da FMB no Minas Tênis Clube.',
    highlight: 'Formação de base & valores',
  },
  {
    tag: 'Vagas Abertas',
    title: 'As Lordianas (Feminino)',
    description:
      'Time feminino em Nova Contagem focado em acolhimento, evolução técnica e protagonismo das meninas nas quadras.',
    highlight: 'Segundas e Quintas • 18h30',
  },
  {
    tag: 'Destaque Nacional',
    title: 'Lord 3x3',
    description:
      'Representando Contagem no basquete 3x3 — conquistamos o 4º lugar no Campeonato Brasileiro 3x3 (Etapa Sudeste) em Vila Velha/ES.',
    highlight: '4º lugar no Brasileiro 3x3',
  },
  {
    tag: 'Base & Escolas',
    title: 'Categorias de Base & Jogos Escolares',
    description:
      'Equipes juvenis competindo na LIDCOM e na Etapa Estadual dos Jogos Escolares, levando o nome de Nova Contagem para toda Minas Gerais.',
    highlight: 'Esporte + Educação',
  },
] as const;

export const NUCLEI = [
  {
    name: 'Nova Contagem — As Lordianas',
    badge: 'Vagas Abertas • Feminino',
    badgeTone: 'orange' as const,
    city: 'Contagem – MG (Regional Vargem das Flores)',
    schedules: [
      { day: 'Segundas-feiras', time: '18h30', place: 'Quadra do Retiro' },
      { day: 'Quintas-feiras', time: '18h30', place: 'Nova quadra da Escola Ivan Diniz' },
    ],
    note: 'Treinos voltados ao time feminino em Nova Contagem. Venha conhecer!',
  },
  {
    name: 'Núcleo Ipê Amarelo',
    badge: 'Comunidade • Contagem',
    badgeTone: 'blue' as const,
    city: 'Ipê Amarelo • Contagem – MG',
    schedules: [
      { day: 'Terças e Sextas-feiras', time: 'Confirmar horário no WhatsApp', place: 'Quadra do Ipê Amarelo' },
    ],
    note: 'Núcleo comunitário levando o basquete e a convivência saudável para a juventude do bairro.',
  },
  {
    name: 'Núcleo Vila Paquetá — Portal',
    badge: '100% Gratuito • BH',
    badgeTone: 'emerald' as const,
    city: 'Vila Paquetá (Região da Pampulha) • Belo Horizonte – MG',
    schedules: [
      { day: 'Todos os sábados', time: '10h às 11h30', place: 'Portal da Igreja A Ponte' },
    ],
    note: 'Nosso primeiro núcleo fora de Nova Contagem, em parceria com o Portal da Igreja A Ponte para crianças e adolescentes.',
  },
] as const;

export const INSTITUTO_ACTIONS = [
  {
    title: 'Dia no Parque',
    description: 'Levamos 80 crianças para uma tarde inesquecível no Parque Guanabara em parceria com igrejas e projetos da comunidade.',
  },
  {
    title: 'Programação de Férias',
    description: 'Dias inteiros de esporte (vôlei de praia, futevôlei no Dunas Beach), brincadeiras e alimentação gratuita nas férias escolares.',
  },
  {
    title: 'Inclusão em Cadeira de Rodas',
    description: 'Mobilização comunitária junto à FMB, Mover Cadeiras e ABM Inconfidentes para viabilizar cadeira esportiva sob medida ao atleta Yago.',
  },
  {
    title: 'Família & Cidadania',
    description: 'Semana das Crianças, Reuniões de Pais e participação ativa em fóruns comunitários de cultura, educação e paz.',
  },
] as const;

export interface GalleryItem {
  id: string;
  image: string;
  title: string;
  category: string;
  caption: string;
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'desafio-3x3',
    image: 'images/streetball-quadra.jpg',
    title: 'Campeões no Desafio 3x3',
    category: 'Lord 3x3',
    caption: 'Atletas do Lord Basketball celebrando troféu e medalhas no desafio 3x3 em parceria com a Academia da Rua.',
  },
  {
    id: 'globo-role',
    image: 'images/globo-role-das-gerais.jpg',
    title: 'Destaque na TV Globo',
    category: 'Comunidade',
    caption: 'Equipe do Rolê das Gerais (TV Globo) visitando a quadra em Nova Contagem para contar nossa história.',
  },
  {
    id: 'dia-no-parque',
    image: 'images/dia-no-parque.jpg',
    title: 'Dia no Parque — 80 Crianças',
    category: 'Instituto Lord',
    caption: 'Uma tarde inteira de alegria no Parque Guanabara realizada pelo Instituto Lord e parceiros.',
  },
  {
    id: 'brasileiro-3x3',
    image: 'images/brasileiro-3x3.jpg',
    title: 'Campeonato Brasileiro 3x3',
    category: 'Conquista',
    caption: '4º lugar na Etapa Sudeste em Vila Velha (ES), fruto de rifas, garra e apoio da comunidade.',
  },
];

export const PARTNERS = [
  'Federação Mineira de Basketball (FMB)',
  'Dunas Beach',
  'Portal Igreja A Ponte',
  'Igreja Verbo da Vida Retiro',
  'Igreja Amor em Prática',
  'TPA Church',
  'Igreja Peniel NC',
  'Escola Ivan Diniz',
  'Escola Ana Guedes',
  'Regional Vargem das Flores',
  'Academia da Rua',
  'Mover Cadeiras',
  'ABM Inconfidentes',
  'Frango do Pretinho',
  'Casa de Carnes Gregório',
  'Top Gear Lub',
  'Maximus Fotografias',
] as const;
