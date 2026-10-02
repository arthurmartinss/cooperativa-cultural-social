import { Link } from 'react-router-dom'
import { departamentos } from '../data/departamentos'

export default function ListaDepartamentos() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {departamentos.map((departamento) => (
        <Link key={departamento.slug} to={`/departamentos/${departamento.slug}`} className="group flex min-h-64 flex-col rounded-2xl border border-stone-200 bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-teal-500 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-800">
          <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-100 text-sm font-bold text-teal-900">{departamento.sigla}</span>
          <h3 className="mt-7 text-xl font-bold text-stone-950">{departamento.nome}</h3>
          <p className="mt-3 text-sm leading-6 text-stone-600">{departamento.descricao}</p>
          {departamento.pendente && <span className="pt-5 text-xs font-semibold uppercase tracking-wider text-amber-800">Conteúdo em preparação</span>}
          <span className="mt-auto w-fit pt-6 text-sm font-bold text-teal-800 group-hover:text-teal-950">
            Conhecer setor <span aria-hidden="true">→</span>
          </span>
        </Link>
      ))}
    </div>
  )
}
