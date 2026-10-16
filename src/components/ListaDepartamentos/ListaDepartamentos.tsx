import { Link } from 'react-router-dom'
import { departamentos } from '../../data/departamentos'
import { iconesDepartamentos } from '../../data/iconesDepartamentos'
import Reveal from '../Reveal/Reveal'

export default function ListaDepartamentos() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {departamentos.map((departamento, index) => {
        const IconeDepartamento = iconesDepartamentos[departamento.slug]

        return (
          <Reveal key={departamento.slug} className="h-full" delay={index * 0.055} interactive>
            <Link
              to={`/departamentos/${departamento.slug}`}
              className="group flex h-full min-h-64 flex-col rounded-2xl border border-brand-line bg-brand-paper p-7 shadow-sm transition duration-200 hover:border-brand-blue hover:shadow-[0_18px_40px_rgba(1,40,105,0.1)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue"
            >
              <span
                aria-hidden="true"
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-sky text-brand-navy transition-colors group-hover:bg-brand-yellow"
              >
                {IconeDepartamento && <IconeDepartamento size={24} strokeWidth={1.8} />}
              </span>
              <h3 className="mt-7 text-xl font-bold text-brand-ink">
                {departamento.nome}
              </h3>
              <p className="mt-3 text-sm leading-7 text-brand-muted">
                {departamento.descricao}
              </p>
              {departamento.pendente && (
                <span className="pt-5 text-xs font-bold uppercase tracking-wider text-brand-action">
                  Conteúdo em preparação
                </span>
              )}
              <span className="mt-auto w-fit pt-6 text-sm font-bold text-brand-navy group-hover:text-brand-action">
                Conhecer setor <span aria-hidden="true">→</span>
              </span>
            </Link>
          </Reveal>
        )
      })}
    </div>
  )
}
