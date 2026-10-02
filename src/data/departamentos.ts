export interface Departamento {
  nome: string
  descricao: string
  objetivo?: string
  sigla: string
  slug: string
  pendente?: boolean
}

export const departamentos: Departamento[] = [
  {
    nome: 'Marketing',
    sigla: 'MK',
    slug: 'marketing',
    descricao: 'Divulga projetos e eventos, valoriza a diversidade cultural e aproxima novos públicos da CCS.',
    objetivo: 'Promover a cultura, valorizar a diversidade e aproximar as pessoas das diferentes formas de expressão cultural. O setor divulga projetos e eventos, alcança novos públicos e fortalece a identidade da cooperativa.',
  },
  {
    nome: 'Recursos Humanos',
    sigla: 'RH',
    slug: 'recursos-humanos',
    descricao: 'Cuida das pessoas, da integração das equipes e de um ambiente de trabalho respeitoso e colaborativo.',
    objetivo: 'Organizar, acompanhar e desenvolver as equipes, valorizar seus talentos e promover um ambiente saudável, respeitoso, colaborativo e acolhedor.',
  },
  {
    nome: 'Tecnologia da Informação',
    sigla: 'TI',
    slug: 'tecnologia-da-informacao',
    descricao: 'Desenvolve a presença digital da cooperativa e apoia os setores com soluções tecnológicas.',
    objetivo: 'Criar e manter um espaço digital para divulgar projetos, eventos, atividades e oportunidades, facilitar o acesso à informação e apoiar os outros setores em suas necessidades tecnológicas.',
  },
  {
    nome: 'Esporte',
    sigla: 'ES',
    slug: 'esporte',
    descricao: 'Promove dinâmicas interativas que exploram a diversidade cultural presente no esporte.',
    objetivo: 'Realizar dinâmicas interativas que apresentem a diversidade cultural no meio esportivo e mostrem como o esporte participa das diferentes culturas.',
  },
  {
    nome: 'Artes',
    sigla: 'AR',
    slug: 'artes',
    descricao: 'Apresenta expressões artísticas de diferentes culturas e formas de retratar o mundo.',
    objetivo: 'Promover a arte de diversas culturas e apresentar os diferentes modos como cada uma se expressa.',
  },
  {
    nome: 'Turismo',
    sigla: 'TU',
    slug: 'turismo',
    descricao: 'As informações sobre as atividades deste setor estão em preparação.',
    pendente: true,
  },
]
