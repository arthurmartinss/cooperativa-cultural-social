# CCS — Cooperativa Cultural Social

Site da CCS desenvolvido em React, TypeScript e Vite. A identidade visual usa a marca criada para a cooperativa, com páginas próprias para os setores e seus organogramas.

**Site publicado:** https://cooperativa-cultural-social.vercel.app/

## Páginas

- `/` — apresentação da cooperativa, setores e valores.
- `/sobre` — propósito, missão e visão da CCS.
- `/setores` — lista dos departamentos.
- `/valores` — princípios da cooperativa.
- `/eventos` — eventos, entregas e resultados.
- `/departamentos/marketing`, `/departamentos/recursos-humanos`, `/departamentos/tecnologia-da-informacao`, `/departamentos/esporte`, `/departamentos/artes` e `/departamentos/turismo` — páginas de cada setor.

As rotas ficam em `src/routes/Routes.tsx`. Os textos dos setores ficam em `src/data/departamentos.ts` e usam o layout de `src/pages/Departamento.tsx`. Os ícones dos departamentos estão centralizados em `src/data/iconesDepartamentos.ts` e são reutilizados nas páginas e nos cartões de setores. Os organogramas são montados pelo componente `src/components/Organograma/Organograma.tsx`, com nomes e cargos em `src/data/integrantes.ts`. Eventos e entregas confirmados poderão ser adicionados em `src/data/atualizacoes.ts`.

## Identidade visual

O cabeçalho e o rodapé usam a versão horizontal compacta do logo; as áreas de destaque dos setores usam ícones próprios, e a aba do navegador usa o ícone da marca. Os arquivos da marca ficam em `public/brand`. As cores estão centralizadas em `src/global.css`: azul-marinho `#012869`, azul `#0877FD` e amarelo `#FEC504`. A tipografia é Inter. Assim, futuras mudanças de identidade podem ser feitas sem editar página por página.

## Organização dos arquivos

```text
my-app/
├── public/brand/       Logos e ícones da CCS
├── src/
│   ├── assets/         Fotos separadas em pastas por departamento
│   │   ├── artes/
│   │   ├── esporte/
│   │   ├── marketing/
│   │   ├── recursos-humanos/
│   │   ├── tecnologia/
│   │   └── turismo/
│   ├── components/     Partes reutilizadas, como cabeçalho, rodapé e organograma
│   ├── data/           Textos, equipes, ícones e informações de setores e eventos
│   ├── pages/          Conteúdo de cada página
│   ├── routes/         Caminhos de navegação do site
│   └── global.css      Fonte, cores e estilos compartilhados
└── dist/               Versão gerada para publicação (não editar)
```

Em `public/brand`, `ccs-logo-cabecalho.png` aparece no cabeçalho e no rodapé; `ccs-simbolo.png` é usado nos destaques; `ccs-icone-32.png`, `ccs-icone-64.png` e `ccs-icone-512.png` são tamanhos para a aba do navegador e dispositivos. O kit completo de variações da marca fica em `../docs/branding` neste espaço de trabalho, fora do repositório React.

Ao executar `npm run build`, o Vite cria `dist/assets`. `index-...js` é o código compilado, `index-...css` reúne os estilos e `inter-...woff2` é a fonte. Os trechos finais dos nomes mudam conforme o conteúdo para o navegador atualizar os arquivos corretamente. A pasta `dist` é ignorada pelo Git e pode ser gerada novamente; as alterações devem ser feitas em `src` e `public`.

## Desenvolvimento

```bash
npm install
npm run dev
```

Antes de enviar mudanças, execute `npm run lint` e `npm run build`. A Vercel publica automaticamente os commits enviados para `main`. O arquivo `vercel.json` mantém as rotas funcionando quando alguém abre diretamente o link de uma página.
