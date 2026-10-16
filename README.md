# CCS — Cooperativa Cultural Social

Site da CCS desenvolvido em React, TypeScript e Vite. A identidade visual usa a marca criada para a cooperativa, com páginas próprias para os setores e seus organogramas.

**Site publicado:** https://cooperativa-cultural-social.vercel.app/

## Páginas

- `/` — apresentação da cooperativa, setores e valores.
- `/sobre` — propósito, missão e visão da CCS.
- `/gestores` — gestores responsáveis pela cooperativa.
- `/setores` — lista dos departamentos.
- `/valores` — princípios da cooperativa.
- `/eventos` — eventos, entregas e resultados.
- `/curadoria` — galeria temporária para pesquisar, comparar e selecionar fotos do Unsplash; não é linkada no menu e não altera as imagens do site.
- `/departamentos/marketing`, `/departamentos/recursos-humanos`, `/departamentos/tecnologia-da-informacao`, `/departamentos/esporte`, `/departamentos/artes` e `/departamentos/turismo` — páginas de cada setor.

As rotas ficam em `src/routes/Routes.tsx`. Os textos dos setores ficam em `src/data/departamentos.ts` e usam o layout de `src/pages/Departamento.tsx`. Os ícones dos departamentos estão centralizados em `src/data/iconesDepartamentos.ts` e são reutilizados nas páginas e nos cartões de setores. Os organogramas são montados pelo componente `src/components/Organograma/Organograma.tsx`, com nomes e cargos em `src/data/integrantes.ts`. Eventos e entregas confirmados poderão ser adicionados em `src/data/atualizacoes.ts`.

## Identidade visual

O cabeçalho e o rodapé usam a versão horizontal compacta do logo; as áreas de destaque dos setores mostram fotos selecionadas ou ícones próprios, e a aba do navegador usa o ícone da marca. Os arquivos da marca ficam em `public/brand`. As cores estão centralizadas em `src/global.css`: azul-marinho `#012869`, azul `#0877FD` e amarelo `#FEC504`. A tipografia é Inter. Assim, futuras mudanças de identidade podem ser feitas sem editar página por página.

Tailwind CSS v4 é carregado uma vez em `src/global.css` por `@import "tailwindcss"`; o plugin oficial fica em `vite.config.ts`. Mantenha os imports de pacotes externos antes dos módulos locais e os imports de estilos no fim. `.editorconfig` registra a codificação, quebras de linha e recuo padrão do projeto.

## Organização dos arquivos

```text
my-app/
├── public/brand/       Logos e ícones da CCS
├── api/unsplash/       Funções serverless de busca e registro de seleção
├── src/
│   ├── assets/         Fotos separadas em pastas por departamento
│   │   ├── artes/
│   │   ├── esporte/
│   │   ├── gestores-ccs/  Fotos da gestão geral da cooperativa
│   │   ├── marketing/
│   │   ├── recursos-humanos/
│   │   ├── tecnologia/
│   │   └── turismo/
│   ├── components/     Partes reutilizadas, como cabeçalho, rodapé e organograma
│   ├── server/         Integração segura e compartilhada com o Unsplash
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

### Curadoria de imagens

As fotos de destaque dos departamentos são escolhidas manualmente em `src/data/destaquesDepartamentos.ts`. Esse arquivo aceita tanto uma foto colocada na pasta `src/assets/<setor>/` quanto um link direto para a imagem, acompanhado de texto alternativo, legenda e créditos. Marketing usa um arquivo enviado pela equipe; RH e TI usam imagens hospedadas pelo Unsplash. Para acrescentar outra foto, cadastre-a nesse arquivo com o slug do departamento. As fotos já selecionadas para a página inicial e para as galerias continuam em `src/data/fotografiasSelecionadas.ts`.

As animações de entrada e interação usam Motion for React. O componente reutilizável fica em `src/components/Reveal/Reveal.tsx`; os recursos de animação são carregados em um bloco separado e a preferência do sistema por movimento reduzido é respeitada globalmente.

Para pesquisar fotos reais, crie uma aplicação no [Unsplash Developers](https://unsplash.com/developers), copie `.env.example` para `.env.local` e preencha `UNSPLASH_ACCESS_KEY` com a chave de acesso. Reinicie o servidor local depois de salvar. A chave é lida pelo servidor do Vite e não deve receber o prefixo `VITE_` nem ser compartilhada.

Abra `/curadoria` no navegador. A página permite buscar por cultura, arte, esporte, tecnologia, comunicação e projetos sociais, salvar favoritas, ampliar, comparar e associar seleções a uma seção da CCS. As escolhas ficam no armazenamento local do navegador e podem ser baixadas como um arquivo JSON pelo botão **Baixar lista**, para compartilhar ou continuar a curadoria em outro navegador. Ao associar uma imagem para possível uso, o servidor registra a seleção pelo endpoint de download exigido pela API do Unsplash. A galeria exibe os créditos do fotógrafo e links de atribuição.

Para uma implantação futura na Vercel, configure a mesma variável `UNSPLASH_ACCESS_KEY` nas variáveis de ambiente do projeto antes de publicar. A integração não inclui a chave no bundle do navegador.

Antes de enviar mudanças, execute `npm run lint` e `npm run build`. A Vercel publica automaticamente os commits enviados para `main`. O arquivo `vercel.json` mantém as rotas funcionando quando alguém abre diretamente o link de uma página.
