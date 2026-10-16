import { Link, NavLink } from 'react-router-dom'

const links = [
  { nome: 'Início', destino: '/' },
  { nome: 'A CCS', destino: '/sobre' },
  { nome: 'Setores', destino: '/setores' },
  { nome: 'Valores', destino: '/valores' },
]

export default function Cabecalho() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur-lg">
      <div className="site-container flex min-h-20 items-center justify-between gap-2 py-3 sm:gap-4">
        <Link to="/" aria-label="CCS, voltar ao início" className="shrink-0 rounded-lg">
          <img src="/brand/ccs-logo-cabecalho.png" alt="CCS — Cooperativa Cultural Social" width="1600" height="420" className="h-11 w-auto rounded-md sm:h-14" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <NavLink key={link.destino} to={link.destino} end={link.destino === '/'} className={({ isActive }) => `border-b-2 py-2 text-sm font-semibold transition-colors ${isActive ? 'border-brand-yellow text-brand-navy' : 'border-transparent text-brand-muted hover:text-brand-navy'}`}>
              {link.nome}
            </NavLink>
          ))}
          <NavLink to="/eventos" className="button-primary ml-1">Eventos e resultados <span aria-hidden="true">↗</span></NavLink>
        </nav>

        <details className="relative lg:hidden">
          <summary className="flex min-h-12 cursor-pointer list-none items-center gap-2 rounded-xl border border-brand-line px-3 text-sm font-bold text-brand-navy marker:hidden">
            <span>Menu</span>
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M2 5h14M2 9h14M2 13h14" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" /></svg>
          </summary>
          <nav aria-label="Navegação móvel" className="absolute right-0 top-full mt-3 flex w-[min(18rem,calc(100vw-3rem))] flex-col gap-1 rounded-2xl border border-brand-line bg-white p-3 shadow-xl">
            {links.map((link) => (
              <Link key={link.destino} to={link.destino} onClick={(evento) => evento.currentTarget.closest('details')?.removeAttribute('open')} className="rounded-lg px-4 py-3 text-sm font-semibold text-brand-ink hover:bg-brand-surface hover:text-brand-navy">
                {link.nome}
              </Link>
            ))}
            <Link to="/eventos" onClick={(evento) => evento.currentTarget.closest('details')?.removeAttribute('open')} className="button-primary mt-2">Eventos e resultados</Link>
          </nav>
        </details>
      </div>
    </header>
  )
}
