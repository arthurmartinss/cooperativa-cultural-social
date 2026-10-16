import lizie from '../assets/artes/lizie.jpeg'
import marianaArtes from '../assets/artes/mariana.jpeg'
import michelly from '../assets/artes/michelly.jpeg'
import heloisaAbud from '../assets/esporte/heloisa-abud.jpeg'
import lucasEsporte from '../assets/esporte/lucas.jpeg'
import victor from '../assets/esporte/victor.jpeg'
import anaLuizaMarketing from '../assets/marketing/ana-luiza.jpeg'
import isabella from '../assets/marketing/isabella.jpeg'
import joao from '../assets/marketing/joao.jpeg'
import lavinia from '../assets/marketing/lavinia.jpeg'
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
  cargo: string
  foto: string
}

export const integrantesPorDepartamento: Record<string, Integrante[]> = {
  artes: [
    { nome: 'Michelly Cerqueira', cargo: 'Gestora', foto: michelly },
    { nome: 'Lízie', cargo: 'Colaboradora', foto: lizie },
    { nome: 'Mariana Gonçalves', cargo: 'Colaboradora', foto: marianaArtes },
  ],
  esporte: [
    { nome: 'Heloisa Abud', cargo: 'Gestora', foto: heloisaAbud },
    { nome: 'Lucas Nogueira', cargo: 'Líder', foto: lucasEsporte },
    { nome: 'Victor Ribeiro', cargo: 'Colaborador', foto: victor },
  ],
  marketing: [
    { nome: 'Ana Luiza', cargo: 'Gestora', foto: anaLuizaMarketing },
    { nome: 'Isabella', cargo: 'Líder', foto: isabella },
    { nome: 'João', cargo: 'Colaborador', foto: joao },
    { nome: 'Lavinia', cargo: 'Colaboradora', foto: lavinia },
  ],
  'recursos-humanos': [
    { nome: 'Gaby', cargo: 'Gestora', foto: gaby },
    { nome: 'Emy', cargo: 'Líder', foto: emy },
    { nome: 'Gustavo', cargo: 'Colaborador', foto: gustavo },
    { nome: 'Livs', cargo: 'Colaboradora', foto: livs },
    { nome: 'Natália', cargo: 'Colaboradora', foto: natalia },
  ],
  'tecnologia-da-informacao': [
    { nome: 'Ana Luisa', cargo: 'Gestora', foto: anaLuisaTi },
    { nome: 'Arthur', cargo: 'Líder', foto: arthur },
    { nome: 'Patrícia', cargo: 'Colaboradora', foto: patricia },
  ],
  turismo: [
    { nome: 'Isaac', cargo: 'Gestor', foto: isaac },
    { nome: 'Cecilia', cargo: 'Líder', foto: cecilia },
    { nome: 'Isa', cargo: 'Colaboradora', foto: isa },
    { nome: 'Sthefany', cargo: 'Colaboradora', foto: sthefany },
  ],
}
