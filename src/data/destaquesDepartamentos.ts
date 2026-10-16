import imagemMarketing from '../assets/marketing/campaign-creators-RSc6D7bO0fA-unsplash.jpg'

interface DestaqueDepartamento {
  src: string
  srcSet?: string
  alt: string
  legenda: string
  fotografo: string
  perfilUrl: string
  fotoUrl: string
}

const referencia = 'utm_source=cooperativa_cultural_social&utm_medium=referral'

function imagemUnsplash(id: string, largura: number) {
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&q=82&w=${largura}`
}

function destaqueUnsplash(
  idImagem: string,
  idFoto: string,
  fotografo: string,
  perfil: string,
  alt: string,
  legenda: string,
): DestaqueDepartamento {
  return {
    src: imagemUnsplash(idImagem, 1400),
    srcSet: [480, 800, 1200, 1600]
      .map((largura) => `${imagemUnsplash(idImagem, largura)} ${largura}w`)
      .join(', '),
    alt,
    legenda,
    fotografo,
    perfilUrl: `https://unsplash.com/@${perfil}?${referencia}`,
    fotoUrl: `https://unsplash.com/photos/${idFoto}?${referencia}`,
  }
}

// Fotos escolhidas manualmente: a página não faz buscas na API ao carregar.
// Arquivos recebidos da equipe podem ser importados de src/assets/<setor>/, como em Marketing.
export const destaquesDepartamentos: Record<string, DestaqueDepartamento> = {
  marketing: {
    src: imagemMarketing,
    alt: 'Mesa de trabalho com computador, materiais e anotações sobre marketing.',
    legenda: 'Ideias, planejamento e comunicação que aproximam a CCS das pessoas',
    fotografo: 'Campaign Creators',
    perfilUrl: `https://unsplash.com/@campaign_creators?${referencia}`,
    fotoUrl: `https://unsplash.com/photos/RSc6D7bO0fA?${referencia}`,
  },
  'recursos-humanos': destaqueUnsplash(
    'photo-1740065592719-052d3e5ec6fb',
    'K7IvqBpE5uY',
    'Zacqueline Baldwin',
    'zacqueline525',
    'Mãos de várias pessoas reunidas em um gesto de união.',
    'Pessoas no centro de cada encontro',
  ),
  'tecnologia-da-informacao': destaqueUnsplash(
    'photo-1753715613388-7e03410b1dce',
    'vhZ8K5Np9mk',
    'Jakub Żerdzicki',
    'jakubzerdzicki',
    'Pessoa desenhando um projeto digital em uma mesa com telas de programação.',
    'Criatividade e tecnologia para transformar ideias em projetos',
  ),
  esporte: destaqueUnsplash(
    'photo-1746058387788-e58453a07498',
    'HzLgETDi1aU',
    'Matthew Stephenson',
    'matthewryanstephenson',
    'Pessoas jogando basquete em uma quadra urbana cercada por prédios.',
    'O movimento também transforma os espaços da cidade',
  ),
  artes: destaqueUnsplash(
    'photo-1774514580497-77d821c40d0a',
    'FUiibNpZV4I',
    'Neon Wang',
    'neonwangphotography',
    'Visitantes observando uma parede de obras coloridas em uma galeria.',
    'Novos olhares para diferentes formas de expressão',
  ),
  turismo: destaqueUnsplash(
    'photo-1642719979012-bd749503e441',
    'oqUywPgdQ7A',
    'Marcos Rei',
    'mvrei',
    'Pessoas caminhando pelo Pelourinho, em Salvador, entre edifícios históricos.',
    'Caminhos que revelam histórias e culturas',
  ),
}
