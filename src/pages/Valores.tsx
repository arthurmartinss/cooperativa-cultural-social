import { valores } from '../data/valores'

export default function Valores() {
  return (
    <main>
      <section className="bg-[#e8f0ec] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">O que nos guia</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl">Valores que orientam a nossa cooperação.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">A CCS une pessoas e áreas diferentes em torno de princípios compartilhados.</p>
        </div>
      </section>
      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {valores.map((valor, indice) => (
            <article key={valor.nome} className="rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
              <span aria-hidden="true" className="text-xs font-bold tracking-[0.2em] text-teal-800">{String(indice + 1).padStart(2, '0')}</span>
              <h2 className="mt-5 text-2xl font-bold text-stone-950">{valor.nome}</h2>
              <p className="mt-3 leading-7 text-stone-700">{valor.descricao}</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  )
}
