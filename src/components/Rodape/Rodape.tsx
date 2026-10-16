import { Link } from 'react-router-dom'

export default function Rodape() {
  return (
    <footer className="bg-brand-deep py-14 text-white">
      <div className="site-container grid gap-10 border-b border-white/20 pb-12 md:grid-cols-[1.4fr_1fr]">
        <div>
          <Link to="/" className="inline-block rounded-lg" aria-label="CCS, voltar ao início">
            <img src="/brand/ccs-logo-cabecalho.png" alt="CCS — Cooperativa Cultural Social" width="1600" height="420" className="h-18 w-auto" loading="lazy" />
          </Link>
          <p className="mt-4 max-w-md text-sm leading-7 text-white/75">Pessoas, cultura e ideias trabalhando juntas para criar oportunidades</p>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">Navegue pela CCS</p>
          <nav aria-label="Navegação do rodapé" className="mt-5 grid grid-cols-2 gap-x-6 gap-y-4 text-sm font-semibold text-white/80">
            <Link to="/sobre" className="hover:text-white">CCS</Link>
            <Link to="/gestores" className="hover:text-white">Gestores</Link>
            <Link to="/setores" className="hover:text-white">Setores</Link>
            <Link to="/valores" className="hover:text-white">Valores</Link>
            <Link to="/eventos" className="hover:text-white">Eventos</Link>
            <Link to="/curadoria" className="hover:text-white">Curadoria de imagens</Link>
          </nav>
        </div>
      </div>
      <div className="site-container flex flex-col gap-3 pt-6 text-xs text-white/60 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} CCS — Cooperativa Cultural Social</span>
        <Link to="/" className="w-fit font-semibold text-white/80 hover:text-white">Voltar ao início ↑</Link>
      </div>
    </footer>
  )
}
