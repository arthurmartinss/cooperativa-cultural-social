import { entregas, eventos, type Atualizacao } from '../data/atualizacoes'

interface ListaAtualizacoesProps {
  itens: Atualizacao[]
  vazio: string
}

function ListaAtualizacoes({ itens, vazio }: ListaAtualizacoesProps) {
  if (itens.length === 0) {
    return <p className="rounded-2xl border border-dashed border-stone-300 bg-white px-6 py-10 text-stone-600">{vazio}</p>
  }

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {itens.map((item) => (
        <article key={`${item.data}-${item.titulo}`} className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-widest text-teal-800">{item.data}{item.setor ? ` · ${item.setor}` : ''}</p>
          <h3 className="mt-4 text-xl font-bold text-stone-950">{item.titulo}</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">{item.resumo}</p>
        </article>
      ))}
    </div>
  )
}

export default function Eventos() {
  return (
    <main>
      <section className="bg-[#e8f0ec] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">CCS em movimento</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl">Eventos e resultados da cooperativa.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">Acompanhe as atividades, os projetos e as entregas que tornam o trabalho coletivo da CCS visível para a comunidade.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl rounded-3xl border border-teal-200 bg-teal-50 p-7 sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Tema do mês · Tecnologia da Informação</p>
          <h2 className="mt-4 text-2xl font-bold text-stone-950 sm:text-3xl">Conectando ideias: o início da CCS no mundo digital</h2>
          <p className="mt-4 max-w-3xl leading-7 text-stone-700">O departamento de TI está planejando a presença digital da CCS, com a participação dos outros setores na definição da estrutura e dos conteúdos do site.</p>
        </div>
      </section>

      <section className="bg-stone-100 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-stone-950 sm:text-4xl">Eventos</h2>
          <p className="mb-8 mt-3 max-w-2xl leading-7 text-stone-700">Encontros, ações e atividades realizados pela CCS.</p>
          <ListaAtualizacoes itens={eventos} vazio="Os próximos eventos serão publicados aqui assim que forem confirmados." />
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-stone-950 sm:text-4xl">Entregas e resultados</h2>
          <p className="mb-8 mt-3 max-w-2xl leading-7 text-stone-700">Projetos concluídos, aprendizados e impactos compartilhados pela cooperativa.</p>
          <ListaAtualizacoes itens={entregas} vazio="As entregas e os resultados serão publicados aqui conforme os projetos forem concluídos." />
        </div>
      </section>
    </main>
  )
}
