export interface Atualizacao {
  titulo: string
  data: string
  resumo: string
  setor?: string
}

// Inclua aqui apenas eventos e entregas confirmados pela equipe da CCS.
export const eventos: Atualizacao[] = []
export const entregas: Atualizacao[] = []
