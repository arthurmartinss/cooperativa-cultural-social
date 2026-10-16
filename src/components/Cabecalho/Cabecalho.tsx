import { useState } from 'react'
import { LuMoon, LuSun } from 'react-icons/lu'
import { Link, NavLink } from 'react-router-dom'
import { saveTheme, type Theme } from '../../theme'
import './Cabecalho.css'

const links = [
  { nome: 'Início', destino: '/' },
  { nome: 'CCS', destino: '/sobre' },
  { nome: 'Gestores', destino: '/gestores' },
  { nome: 'Setores', destino: '/setores' },
  { nome: 'Valores', destino: '/valores' },
]

export default function Cabecalho() {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light',
  )

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
    saveTheme(nextTheme)
  }

  return (
    <header className="site-header sticky top-0 z-50 border-b border-brand-line backdrop-blur-lg">
      <div className="site-container flex min-h-20 items-center justify-between gap-2 py-3 sm:gap-4">
        <Link to="/" aria-label="CCS, voltar ao início" className="shrink-0 rounded-lg">
          <img src="/brand/ccs-simbolo.png" alt="CCS — Cooperativa Cultural Social" width="1600" height="420" className="h-11 w-auto rounded-md sm:h-14" />
        </Link>

        <nav aria-label="Navegação principal" className="hidden items-center gap-5 lg:flex">
          {links.map((link) => (
            <NavLink key={link.destino} to={link.destino} end={link.destino === '/'} className={({ isActive }) => `border-b-2 py-2 text-sm font-semibold transition-colors ${isActive ? 'border-brand-yellow text-brand-navy' : 'border-transparent text-brand-muted hover:text-brand-navy'}`}>
              {link.nome}
            </NavLink>
          ))}
          <NavLink to="/eventos" className="button-primary ml-1">Eventos <span aria-hidden="true">↗</span></NavLink>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            className="theme-switch"
            onClick={toggleTheme}
            aria-label={theme === 'dark' ? 'Ativar modo claro' : 'Ativar modo escuro'}
            aria-pressed={theme === 'dark'}
            title={theme === 'dark' ? 'Modo claro' : 'Modo escuro'}
          >
            {theme === 'dark' ? <LuSun size={20} aria-hidden="true" /> : <LuMoon size={20} aria-hidden="true" />}
          </button>

          <details className="relative lg:hidden">
            <summary className="mobile-menu-trigger">
              <span className="sr-only">Menu de navegação</span>
              <svg aria-hidden="true" width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path className="mobile-menu-line mobile-menu-line--top" d="M3 6h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path className="mobile-menu-line mobile-menu-line--middle" d="M3 11h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                <path className="mobile-menu-line mobile-menu-line--bottom" d="M3 16h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </summary>
            <nav aria-label="Navegação móvel" className="absolute right-0 top-full mt-3 flex w-[min(18rem,calc(100vw-3rem))] flex-col gap-1 rounded-2xl border border-brand-line bg-brand-paper p-3 shadow-xl">
              {links.map((link) => (
                <NavLink key={link.destino} to={link.destino} end={link.destino === '/'} onClick={(evento) => evento.currentTarget.closest('details')?.removeAttribute('open')} className={({ isActive }) => `rounded-lg px-4 py-3 text-sm font-semibold transition-colors ${isActive ? 'bg-brand-sky text-brand-navy' : 'text-brand-ink hover:bg-brand-surface hover:text-brand-navy'}`}>
                  {link.nome}
                </NavLink>
              ))}
              <NavLink to="/eventos" onClick={(evento) => evento.currentTarget.closest('details')?.removeAttribute('open')} className="button-primary mt-2">Eventos</NavLink>
            </nav>
          </details>
        </div>
      </div>
    </header>
  )
}
