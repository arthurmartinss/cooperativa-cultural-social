import { Link } from 'react-router-dom'

export default function Sobre() {
  return (
    <main>
      <section className="bg-[#e8f0ec] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Sobre a CCS</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl">Cultura e colaboração para criar oportunidades.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">A Cooperativa Cultural Social reúne diferentes conhecimentos e habilidades para desenvolver projetos que aproximam as pessoas e fortalecem a comunidade.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <h2 className="text-3xl font-bold text-stone-950 sm:text-4xl">Nosso propósito</h2>
          <div className="space-y-5 text-lg leading-8 text-stone-700">
            <p>A CCS nasceu para promover integração, criatividade, inclusão e desenvolvimento social por meio da cultura, da arte, do esporte, da tecnologia e da comunicação.</p>
            <p>O trabalho coletivo transforma essas áreas em projetos, ações e iniciativas que estimulam talentos, geram oportunidades e permitem que mais pessoas aprendam, participem e criem.</p>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">O que fazemos</p>
            <h2 className="mt-4 text-3xl font-bold text-stone-950">Missão</h2>
            <p className="mt-5 leading-7 text-stone-700">Promover oportunidades e desenvolvimento pela união entre cultura, arte, esporte, tecnologia, comunicação e pessoas. Criamos projetos que valorizam talentos, estimulam a criatividade e contribuem para a sociedade.</p>
          </article>
          <article className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Onde queremos chegar</p>
            <h2 className="mt-4 text-3xl font-bold text-stone-950">Visão</h2>
            <p className="mt-5 leading-7 text-stone-700">Ser reconhecida por transformar ideias em projetos, conectar pessoas e criar oportunidades, tornando-se referência em iniciativas culturais e sociais.</p>
          </article>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-bold text-stone-950">Conheça quem constrói a CCS.</h2>
            <p className="mt-3 text-stone-700">Cada departamento contribui com uma parte dessa missão.</p>
          </div>
          <Link to="/setores" className="w-fit rounded-xl bg-teal-800 px-6 py-3 font-semibold text-white hover:bg-teal-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-800">Explorar setores</Link>
        </div>
      </section>
    </main>
  )
}
