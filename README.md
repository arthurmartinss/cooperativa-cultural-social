# CCS — Cooperativa Cultural Social

Site da CCS desenvolvido em React, TypeScript e Vite. Esta é a primeira etapa do front-end, com identidade visual provisória enquanto o marketing prepara as diretrizes oficiais.

## Páginas

- `/` — apresentação da cooperativa, setores e valores.
- `/eventos` — eventos, entregas e resultados.
- `/departamentos/marketing`, `/departamentos/recursos-humanos`, `/departamentos/tecnologia-da-informacao`, `/departamentos/esporte`, `/departamentos/artes` e `/departamentos/turismo` — páginas de cada setor.

As rotas ficam em `src/routes/Routes.tsx`. Os textos dos setores ficam em `src/data/departamentos.ts` e usam o layout de `src/pages/Departamento.tsx`. Cada página reserva espaço para o organograma do próprio setor. Eventos e entregas confirmados poderão ser adicionados em `src/data/atualizacoes.ts`.

## Desenvolvimento

```bash
npm install
npm run dev
```

Antes de publicar, execute `npm run lint` e `npm run build`. O arquivo `vercel.json` mantém as rotas funcionando quando alguém abre diretamente o link de uma página.
