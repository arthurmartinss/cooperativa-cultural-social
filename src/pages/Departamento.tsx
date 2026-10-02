import { Link } from 'react-router-dom'
import type { Departamento as DepartamentoTipo } from '../data/departamentos'

interface DepartamentoProps {
  departamento: DepartamentoTipo
}

export default function Departamento({ departamento }: DepartamentoProps) {
  return (
    <main>
      <section className="bg-[#e8f0ec] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="text-sm font-bold text-teal-800 hover:text-teal-950 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">← Voltar para a CCS</Link>
          <p className="mt-12 text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Departamento da CCS</p>
          <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl">{departamento.nome}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-700">{departamento.descricao}</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <h2 className="text-3xl font-bold text-stone-950 sm:text-4xl">Objetivo do setor</h2>
          <div>
            {departamento.objetivo ? (
              <p className="text-lg leading-8 text-stone-700">{departamento.objetivo}</p>
            ) : (
              <p className="rounded-2xl border border-dashed border-stone-300 p-6 text-stone-600">As informações deste setor estão em preparação.</p>
            )}
            <Link to="/eventos" className="mt-8 inline-flex rounded-xl bg-teal-800 px-6 py-3 font-semibold text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-800">Acompanhar eventos e resultados</Link>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Nossa equipe</p>
          <h2 className="mt-4 text-3xl font-bold text-stone-950 sm:text-4xl">Organograma de {departamento.nome}</h2>
          <div className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white p-8 text-stone-600">
            O organograma deste setor será adicionado aqui quando a equipe enviar os nomes e cargos.
          </div>
        </div>
      </section>
    </main>
  )
}
