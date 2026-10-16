import lizie from '../assets/artes/lizie.jpeg'
import heloisaAbud from '../assets/esporte/heloisa-abud.jpeg'
import anaLuizaMarketing from '../assets/marketing/ana-luiza.jpeg'
import isabella from '../assets/marketing/isabella.jpeg'
import joao from '../assets/marketing/joao.jpeg'
import emy from '../assets/recursos-humanos/emy.jpeg'
import gaby from '../assets/recursos-humanos/gaby.jpeg'
import gustavo from '../assets/recursos-humanos/gustavo.jpeg'
import livs from '../assets/recursos-humanos/livs.jpeg'
import natalia from '../assets/recursos-humanos/natalia.jpeg'
import anaLuisaTi from '../assets/tecnologia/ana-luisa.jpeg'
import arthur from '../assets/tecnologia/arthur.jpeg'
import patricia from '../assets/tecnologia/patricia.jpeg'
import cecilia from '../assets/turismo/cecilia.jpeg'
import isa from '../assets/turismo/isa.jpeg'
import isaac from '../assets/turismo/isaac.jpeg'
import sthefany from '../assets/turismo/sthefany.jpeg'

export interface Integrante {
  nome: string
  cargo?: string
  foto: string
}

export const integrantesPorDepartamento: Record<string, Integrante[]> = {
  artes: [
    { nome: 'Lízie', foto: lizie },
  ],
  esporte: [
    { nome: 'Heloisa Abud', cargo: 'Gestora', foto: heloisaAbud },
  ],
  marketing: [
    { nome: 'Ana Luiza', cargo: 'Gestora', foto: anaLuizaMarketing },
    { nome: 'Isabella', cargo: 'Líder', foto: isabella },
    { nome: 'João', foto: joao },
  ],
  'recursos-humanos': [
    { nome: 'Gaby', cargo: 'Gestora', foto: gaby },
    { nome: 'Emy', cargo: 'Líder', foto: emy },
    { nome: 'Gustavo', foto: gustavo },
    { nome: 'Livs', foto: livs },
    { nome: 'Natália', foto: natalia },
  ],
  'tecnologia-da-informacao': [
    { nome: 'Ana Luisa', cargo: 'Gestora', foto: anaLuisaTi },
    { nome: 'Arthur', cargo: 'Líder', foto: arthur },
    { nome: 'Patrícia', foto: patricia },
  ],
  turismo: [
    { nome: 'Isaac', cargo: 'Gestor', foto: isaac },
    { nome: 'Cecilia', cargo: 'Líder', foto: cecilia },
    { nome: 'Isa', foto: isa },
    { nome: 'Sthefany', foto: sthefany },
  ],
}
