import { Link } from 'react-router-dom'
import { departamentos } from '../data/departamentos'

export default function ListaDepartamentos() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {departamentos.map((departamento) => (
        <Link key={departamento.slug} to={`/departamentos/${departamento.slug}`} className="group flex min-h-64 flex-col rounded-2xl border border-brand-line bg-white p-7 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-brand-blue hover:shadow-[0_18px_40px_rgba(1,40,105,0.1)]">
          <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sky text-sm font-extrabold text-brand-navy">{departamento.sigla}</span>
          <h3 className="mt-7 text-xl font-bold text-brand-ink">{departamento.nome}</h3>
          <p className="mt-3 text-sm leading-7 text-brand-muted">{departamento.descricao}</p>
          {departamento.pendente && <span className="pt-5 text-xs font-bold uppercase tracking-wider text-brand-action">Conteúdo em preparação</span>}
          <span className="mt-auto w-fit pt-6 text-sm font-bold text-brand-navy group-hover:text-brand-action">
            Conhecer setor <span aria-hidden="true">→</span>
          </span>
        </Link>
      ))}
    </div>
  )
}
