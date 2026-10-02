import { Link, NavLink } from 'react-router-dom'

const linksSecoes = [
  { nome: 'A CCS', destino: '/#sobre' },
  { nome: 'Setores', destino: '/#setores' },
  { nome: 'Valores', destino: '/#valores' },
]

const classeLink = 'text-sm font-medium text-stone-700 transition-colors hover:text-teal-800 focus-visible:rounded focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-700'

export default function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 border-b border-stone-200 bg-[#faf9f6]/95 backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 sm:px-8">
        <Link to="/" className="flex items-center gap-3" aria-label="CCS, voltar ao início">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-800 text-sm font-bold tracking-tight text-white">CCS</span>
          <span className="max-w-44 text-xs font-bold leading-tight tracking-wide text-stone-900 sm:text-sm">Cooperativa Cultural Social</span>
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-7 md:flex">
          <NavLink to="/" end className={classeLink}>Início</NavLink>
          <NavLink to="/eventos" className={`${classeLink} font-bold text-teal-800`}>Eventos e resultados</NavLink>
          {linksSecoes.map((link) => (
            <a key={link.destino} href={link.destino} className={classeLink}>
              {link.nome}
            </a>
          ))}
        </nav>

        <details className="relative md:hidden">
          <summary className="cursor-pointer list-none rounded-lg border border-stone-300 px-3 py-2 text-sm font-semibold text-stone-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-700">
            Menu
          </summary>
          <nav aria-label="Navegação móvel" className="absolute right-0 top-full mt-3 flex min-w-44 flex-col rounded-xl border border-stone-200 bg-white p-2 shadow-xl">
            <Link to="/" onClick={(evento) => evento.currentTarget.closest('details')?.removeAttribute('open')} className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-teal-50">Início</Link>
            <Link to="/eventos" onClick={(evento) => evento.currentTarget.closest('details')?.removeAttribute('open')} className="rounded-lg px-3 py-2 text-sm font-bold text-teal-800 hover:bg-teal-50">Eventos e resultados</Link>
            {linksSecoes.map((link) => (
              <a key={link.destino} href={link.destino} onClick={(evento) => evento.currentTarget.closest('details')?.removeAttribute('open')} className="rounded-lg px-3 py-2 text-sm font-medium text-stone-700 hover:bg-teal-50 hover:text-teal-800">
                {link.nome}
              </a>
            ))}
          </nav>
        </details>
      </div>
    </header>
  )
}
