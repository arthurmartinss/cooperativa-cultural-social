import fotoOutubro1 from '../assets/eventos/integracao/integracao-outubro.jpeg'
import fotoOutubro2 from '../assets/eventos/integracao/integracao-outubro2.jpeg'

export interface FotoIntegracao {
  src: string
  alt: string
}

export interface Integracao {
  periodo: string
  titulo: string
  resumo: string
  fotos: FotoIntegracao[]
}

// Cada encontro fica como um registro próprio; novas integrações podem ser acrescentadas abaixo.
export const integracoes: Integracao[] = [
  {
    periodo: 'Outubro',
    titulo: 'Boas-vindas a novos integrantes',
    resumo: 'Um momento para receber quem está chegando à CCS, se conhecer e começar a construir vínculos na cooperativa.',
    fotos: [
      { src: fotoOutubro1, alt: 'Novos integrantes da CCS reunidos durante a integração' },
      { src: fotoOutubro2, alt: 'Pessoas conversando durante o encontro de integração da CCS' },
    ],
  },
]
