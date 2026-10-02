import ListaDepartamentos from '../components/ListaDepartamentos'

export default function Setores() {
  return (
    <main>
      <section className="bg-[#e8f0ec] px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-teal-800">Nossa atuação</p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-stone-950 sm:text-6xl">Departamentos que trabalham juntos.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-stone-700">Conheça o objetivo de cada setor da CCS. Ao entrar em um departamento, você encontra também o espaço para o organograma da equipe.</p>
        </div>
      </section>
      <section className="bg-stone-100 px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl"><ListaDepartamentos /></div>
      </section>
    </main>
  )
}
