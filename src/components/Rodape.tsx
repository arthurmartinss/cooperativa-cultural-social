import { Link } from 'react-router-dom'

export default function Rodape() {
  return (
    <footer className="bg-stone-900 px-5 py-10 text-stone-100 sm:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xl font-bold">CCS</p>
          <p className="mt-1 text-sm text-stone-300">Cooperativa Cultural Social</p>
          <p className="mt-3 max-w-md text-sm leading-6 text-stone-400">Pessoas, cultura e ideias trabalhando juntas para criar oportunidades.</p>
        </div>
        <div className="flex flex-col gap-3 text-sm font-semibold text-teal-200">
          <Link to="/sobre" className="hover:text-white">A CCS</Link>
          <Link to="/setores" className="hover:text-white">Setores</Link>
          <Link to="/valores" className="hover:text-white">Valores</Link>
          <Link to="/eventos" className="hover:text-white">Eventos e resultados</Link>
          <Link to="/" className="hover:text-white">Voltar ao início ↑</Link>
        </div>
      </div>
    </footer>
  )
}
