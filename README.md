# Lord Basketball & Instituto Lord — SPA Oficial

Single Page Application (SPA) institucional do ministério **Lord Basketball** (`@lordbasketballofc`) e do **Instituto Lord** (`@institutolord1`), desenvolvida com **React 19 + TypeScript + Vite + Tailwind CSS v4**, pronta para publicação gratuita no **GitHub Pages**.

## Rodando localmente

```bash
npm install
npm run dev
```

## Build de produção

```bash
npm run build
npm run preview
```

## Como atualizar textos, núcleos e horários

Todos os conteúdos editáveis (links oficiais, números, modalidades, núcleos/horários, galeria e parceiros) ficam centralizados em:

- `src/data/siteContent.ts`

As imagens e logos ficam em `public/images/`.

## Publicação automática no GitHub Pages

O workflow `.github/workflows/deploy.yml` já está configurado para compilar e publicar automaticamente a cada push na branch `main`:

1. Crie o repositório no GitHub e faça o push da branch `main`.
2. No GitHub, acesse **Settings → Pages**.
3. Em **Build and deployment → Source**, selecione **GitHub Actions**.
4. A cada novo push na `main`, o site será compilado com Vite e atualizado automaticamente.

> **Domínio próprio**: caso configure um domínio customizado, altere `VITE_BASE_PATH` para `'/'` no arquivo `.github/workflows/deploy.yml`.
