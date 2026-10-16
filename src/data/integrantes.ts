export interface Integrante {
  nome: string
  cargo?: string
  foto: string
}

export const integrantesPorDepartamento: Record<string, Integrante[]> = {
  artes: [
    { nome: 'Lízie', foto: '/integrantes/artes/lizie.jpeg' },
  ],
  esporte: [
    { nome: 'Heloisa Abud', cargo: 'Gestora', foto: '/integrantes/esporte/heloisa-abud.jpeg' },
  ],
  marketing: [
    { nome: 'Ana Luiza', cargo: 'Gestora', foto: '/integrantes/marketing/ana-luiza.jpeg' },
    { nome: 'Isabella', cargo: 'Líder', foto: '/integrantes/marketing/isabella.jpeg' },
    { nome: 'João', foto: '/integrantes/marketing/joao.jpeg' },
  ],
  'recursos-humanos': [
    { nome: 'Gaby', cargo: 'Gestora', foto: '/integrantes/recursos-humanos/gaby.jpeg' },
    { nome: 'Emy', cargo: 'Líder', foto: '/integrantes/recursos-humanos/emy.jpeg' },
    { nome: 'Gustavo', foto: '/integrantes/recursos-humanos/gustavo.jpeg' },
    { nome: 'Livs', foto: '/integrantes/recursos-humanos/livs.jpeg' },
    { nome: 'Natália', foto: '/integrantes/recursos-humanos/natalia.jpeg' },
  ],
  'tecnologia-da-informacao': [
    { nome: 'Ana Luisa', cargo: 'Gestora', foto: '/integrantes/tecnologia/ana-luisa.jpeg' },
    { nome: 'Arthur', cargo: 'Líder', foto: '/integrantes/tecnologia/arthur.jpeg' },
    { nome: 'Patrícia', foto: '/integrantes/tecnologia/patricia.jpeg' },
  ],
  turismo: [
    { nome: 'Isaac', cargo: 'Gestor', foto: '/integrantes/turismo/isaac.jpeg' },
    { nome: 'Cecilia', cargo: 'Líder', foto: '/integrantes/turismo/cecilia.jpeg' },
    { nome: 'Isa', foto: '/integrantes/turismo/isa.jpeg' },
    { nome: 'Sthefany', foto: '/integrantes/turismo/sthefany.jpeg' },
  ],
}
