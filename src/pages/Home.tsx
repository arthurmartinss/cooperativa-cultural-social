import { Link } from 'react-router-dom'
import ListaDepartamentos from '../components/ListaDepartamentos'
import { valores } from '../data/valores'

export default function Home() {
  return (
    <main id="inicio">
      <section className="relative overflow-hidden bg-[#e8f0ec] px-5 py-20 sm:px-8 sm:py-28 lg:py-36">
        <div aria-hidden="true" className="absolute -right-32 -top-36 h-96 w-96 rounded-full border-[70px] border-teal-700/10" />
        <div aria-hidden="true" className="absolute -bottom-44 right-1/4 h-80 w-80 rounded-full bg-amber-300/30 blur-3xl" />
        <div className="relative mx-auto max-w-7xl">
          <p className="mb-6 text-xs font-bold uppercase tracking-[0.22em] text-teal-900 sm:text-sm">CCS · Cooperativa Cultural Social</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight text-stone-950 sm:text-6xl lg:text-7xl">
            Conectamos pessoas. <span className="text-teal-800">Transformamos ideias em oportunidades.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-700 sm:text-xl">
            Cultura, arte, esporte, tecnologia e comunicação se encontram para criar projetos que valorizam talentos e fortalecem a comunidade.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/sobre" className="rounded-xl bg-teal-800 px-6 py-3 font-semibold text-white transition-colors hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-800">Conheça a CCS</Link>
            <Link to="/setores" className="rounded-xl border border-teal-800 px-6 py-3 font-semibold text-teal-900 transition-colors hover:bg-white/70 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-800">Explore nossos setores</Link>
          </div>
        </div>
      </section>

      <section id="sobre" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Quem somos</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-stone-950 sm:text-5xl">Diferentes talentos, um propósito coletivo.</h2>
          </div>
          <div className="space-y-5 text-lg leading-8 text-stone-700">
            <p>A CCS é uma cooperativa criada para promover integração, criatividade, inclusão e desenvolvimento social por meio do trabalho colaborativo.</p>
            <p>Reunimos diferentes áreas e profissionais para desenvolver projetos, ações e iniciativas que aproximam as pessoas e abrem espaço para aprender, participar e criar.</p>
          </div>
        </div>
      </section>

      <section id="setores" className="scroll-mt-24 bg-stone-100 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Nossa atuação</p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight text-stone-950 sm:text-5xl">Áreas que constroem a CCS juntas.</h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-stone-700">Cada setor contribui com seus conhecimentos para transformar ideias em projetos.</p>
          <div className="mt-12"><ListaDepartamentos /></div>
        </div>
      </section>

      <section className="bg-[#e8f0ec] px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">CCS em movimento</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-stone-950 sm:text-4xl">Acompanhe nossos eventos e resultados.</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-stone-700">Um espaço para reunir as atividades, os projetos em andamento e as entregas da cooperativa.</p>
          </div>
          <Link to="/eventos" className="w-fit shrink-0 rounded-xl bg-teal-800 px-6 py-3 font-semibold text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-800">Ver eventos e resultados</Link>
        </div>
      </section>

      <section id="valores" className="scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl rounded-3xl bg-teal-900 px-7 py-12 text-white sm:px-12 sm:py-16 lg:px-16">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-200">O que nos guia</p>
          <h2 className="mt-4 max-w-3xl text-3xl font-bold tracking-tight sm:text-5xl">Cooperação para gerar transformação social.</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-teal-100 sm:text-lg">Acreditamos que a cultura e a inovação criam oportunidades quando caminham com respeito, inclusão e responsabilidade.</p>
          <ul className="mt-10 flex flex-wrap gap-3" aria-label="Valores da CCS">
            {valores.map((valor) => (
              <li key={valor.nome} className="rounded-full border border-teal-500/70 px-4 py-2 text-sm font-medium text-white">{valor.nome}</li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  )
}
