import { Link } from 'react-router-dom'

export default function Sobre() {
  return (
    <main>
      <section className="bg-brand-surface px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-action">Sobre a CCS</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight text-brand-ink sm:text-6xl">Gente diferente fazendo cultura junto</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">Na CCS, pessoas de áreas diferentes se juntam para criar projetos culturais e sociais com a comunidade.</p>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-20">
          <h2 className="text-3xl font-semibold text-brand-ink sm:text-4xl">Por que existimos</h2>
          <div className="space-y-5 text-lg leading-8 text-brand-muted">
            <p>Queremos que cultura, arte, esporte, tecnologia e comunicação abram espaço para mais pessoas participarem e criarem.</p>
            <p>Por isso reunimos equipes com conhecimentos diferentes. Planejamos ações em conjunto, compartilhamos o que aprendemos e damos lugar a novos talentos.</p>
          </div>
        </div>
      </section>

      <section className="bg-brand-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          <article className="rounded-2xl border border-brand-line bg-brand-paper p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-action">O que fazemos</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-ink">Missão</h2>
            <p className="mt-5 leading-7 text-brand-muted">Promover oportunidades e desenvolvimento pela união entre cultura, arte, esporte, tecnologia, comunicação e pessoas. Criamos projetos que valorizam talentos, estimulam a criatividade e contribuem para a sociedade.</p>
          </article>
          <article className="rounded-2xl border border-brand-line bg-brand-paper p-8 shadow-sm">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-action">Onde queremos chegar</p>
            <h2 className="mt-4 text-3xl font-bold text-brand-ink">Visão</h2>
            <p className="mt-5 leading-7 text-brand-muted">Ser reconhecida por transformar ideias em projetos, conectar pessoas e criar oportunidades, tornando-se referência em iniciativas culturais e sociais.</p>
          </article>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-brand-ink">Conheça as equipes</h2>
            <p className="mt-3 text-brand-muted">Veja o trabalho de cada setor e as pessoas que fazem parte dele.</p>
          </div>
          <Link to="/setores" className="button-primary w-fit">Explorar setores</Link>
        </div>
      </section>
    </main>
  )
}
