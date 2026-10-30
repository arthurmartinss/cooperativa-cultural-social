# CCS — Cooperativa Cultural Social

A CCS reúne pessoas de diferentes áreas para criar projetos culturais e sociais com a comunidade. Este site apresenta a cooperativa, seus setores, as equipes e o espaço onde serão divulgados eventos, entregas e resultados.

**Acesse o site:** [cooperativa-cultural-social.vercel.app](https://cooperativa-cultural-social.vercel.app/)

## O que você encontra no site

| Página | Conteúdo |
| --- | --- |
| [Início](https://cooperativa-cultural-social.vercel.app/) | Apresentação da CCS, setores, imagens e valores. |
| [CCS](https://cooperativa-cultural-social.vercel.app/sobre) | Propósito, missão e visão da cooperativa. |
| [Equipe](https://cooperativa-cultural-social.vercel.app/equipe) | Gestores da CCS e integrantes de cada setor, com fotos e cargos. |
| [Setores](https://cooperativa-cultural-social.vercel.app/setores) | Marketing, Recursos Humanos, TI, Esporte, Artes e Turismo. Cada setor tem sua página e seu organograma. |
| [Valores](https://cooperativa-cultural-social.vercel.app/valores) | Princípios que orientam o trabalho da cooperativa. |
| [Eventos](https://cooperativa-cultural-social.vercel.app/eventos) | Registros da visita ao MIS e da integração de novos integrantes. |
| [Curadoria](https://cooperativa-cultural-social.vercel.app/curadoria) | Pesquisa e seleção de imagens para possíveis usos no projeto. |

As informações de alguns setores e os próximos eventos ainda estão sendo preparados pela equipe. O site mostra esse estado sem anunciar atividades que não foram confirmadas.
O endereço antigo `/gestores` leva à página Equipe.

## Tecnologias

- **React, TypeScript e Vite** para a interface e a compilação.
- **React Router** para as páginas e os links diretos.
- **Tailwind CSS e CSS** para o layout e a identidade visual.
- **Motion for React** para transições discretas, respeitando a preferência por movimento reduzido.
- **Vercel** para publicar o site e executar as funções da curadoria.
- **Unsplash API** para a busca de imagens na curadoria; a chave fica no servidor.

O site oferece modo claro e escuro, guarda a preferência no navegador e adapta o layout a telas menores. A marca usa azul-marinho `#012869`, azul `#0877FD` e amarelo `#FEC504`; as cores compartilhadas ficam em `src/global.css`.

## Como executar localmente

Use Node.js e npm. Na pasta do projeto:

```bash
npm install
npm run dev
```

Abra o endereço local exibido pelo Vite. As páginas do site funcionam sem chave de API; apenas a **busca de novas fotos** na curadoria depende da configuração abaixo.

Para habilitar a busca, copie `.env.example` para `.env.local` e preencha a **Access Key** da aplicação criada no [Unsplash Developers](https://unsplash.com/developers):

```dotenv
UNSPLASH_ACCESS_KEY=sua_access_key
```

Reinicie o servidor local após salvar. Não use a Secret Key, não adicione `VITE_` ao nome da variável e não envie `.env.local` ao GitHub. O arquivo já é ignorado pelo Git.

## Organização do projeto

```text
my-app/
├── api/unsplash/             Funções da Vercel para busca e registro de seleção
├── public/brand/             Marca e ícones da CCS
├── src/
│   ├── assets/               Fotos locais, separadas por setor
│   ├── components/           Cabeçalho, rodapé, organogramas e partes reutilizáveis
│   ├── data/                 Textos, equipes, setores, imagens e atualizações
│   ├── pages/                Páginas do site
│   ├── routes/               Configuração das rotas
│   ├── server/               Lógica compartilhada da integração com o Unsplash
│   └── global.css            Cores, tipografia e estilos globais
├── index.html                Título, descrição e ícones do site
├── vercel.json               Acesso direto às rotas do React
└── vite.config.ts            Configuração do Vite e da API local
```

`dist/` é gerada por `npm run build` e não deve ser editada. O kit completo da marca fica em `../docs/branding`, fora deste repositório React.

### Onde atualizar o conteúdo

- **Setores:** `src/data/departamentos.ts`. Todas as páginas usam o modelo `src/pages/Departamento.tsx`.
- **Integrantes e cargos:** `src/data/integrantes.ts`; gestores da CCS em `src/data/gestoresCcs.ts`. As fotos locais ficam em `src/assets/<setor>/`.
- **Eventos e integrações:** eventos em `src/pages/Eventos.tsx`; integrações por mês em `src/data/integracoes.ts`, com as fotos em `src/assets/eventos/`.
- **Fotos do site:** `src/data/destaquesDepartamentos.ts` e `src/data/fotografiasSelecionadas.ts`, com texto alternativo e crédito.
- **Rotas:** `src/routes/Routes.tsx`.

As seleções feitas em `/curadoria` ficam no armazenamento **do navegador usado**. O botão **Baixar lista** exporta um JSON para compartilhar as escolhas. Selecionar uma foto ali não altera o site publicado; a equipe precisa revisar a escolha e adicioná-la aos dados do projeto. A página exibe autoria e links para as fotos no Unsplash.

## Publicação

O repositório está conectado à Vercel. Alterações enviadas para a branch `main` geram uma nova publicação em [cooperativa-cultural-social.vercel.app](https://cooperativa-cultural-social.vercel.app/). Antes de enviar, execute:

```bash
npm run lint
npm run build
```

Para usar a busca da curadoria no ambiente publicado, configure `UNSPLASH_ACCESS_KEY` nas variáveis de ambiente do projeto na Vercel. A chave é usada pelas funções em `api/unsplash/`, sem entrar no código enviado ao navegador.

Atualmente, eventos, entregas, setores e equipes são mantidos em arquivos do projeto. Ainda não há banco de dados nem painel administrativo; essas partes poderão ser acrescentadas quando a CCS definir quem vai cadastrar e aprovar os conteúdos.
