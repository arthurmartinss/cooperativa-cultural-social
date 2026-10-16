import ListaDepartamentos from "../components/ListaDepartamento/ListaDepartamentos";

export default function Setores() {
  return (
    <main>
      <section className="bg-brand-surface px-5 py-20 sm:px-8 sm:py-28">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-brand-action">
            Nossa atuação
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-brand-ink sm:text-6xl">
            Departamentos que trabalham juntos.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-muted">
            Conheça o objetivo de cada setor da CCS. Ao entrar em um
            departamento, você encontra também o espaço para o organograma da
            equipe.
          </p>
        </div>
      </section>
      <section className="bg-brand-surface px-5 py-20 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <ListaDepartamentos />
        </div>
      </section>
    </main>
  );
}
