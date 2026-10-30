import { LuInstagram, LuMail } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { contatoCcs } from '../../data/contato'

export default function Rodape() {
  return (
    <footer className="bg-brand-deep py-14 text-white">
      <div className="site-container grid gap-10 border-b border-white/20 pb-12 md:grid-cols-[1.3fr_1fr_1.1fr]">
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
            <Link to="/equipe" className="hover:text-white">Equipe</Link>
            <Link to="/setores" className="hover:text-white">Setores</Link>
            <Link to="/valores" className="hover:text-white">Valores</Link>
            <Link to="/eventos" className="hover:text-white">Eventos</Link>
            <Link to="/curadoria" className="hover:text-white">Curadoria de imagens</Link>
          </nav>
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">Contato</p>
          <div className="mt-5 flex flex-col gap-4 text-sm font-semibold text-white/80">
            <a href={contatoCcs.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-white"><LuInstagram size={19} aria-hidden="true" />{contatoCcs.instagramUsuario}</a>
            <a href={`mailto:${contatoCcs.email}`} className="flex items-center gap-3 break-all hover:text-white"><LuMail size={19} className="shrink-0" aria-hidden="true" />{contatoCcs.email}</a>
          </div>
        </div>
      </div>
      <div className="site-container flex flex-col gap-3 pt-6 text-xs text-white/60 sm:flex-row sm:justify-between">
        <span>© {new Date().getFullYear()} CCS — Cooperativa Cultural Social</span>
        <Link to="/" className="w-fit font-semibold text-white/80 hover:text-white">Voltar ao início ↑</Link>
      </div>
    </footer>
  )
}
