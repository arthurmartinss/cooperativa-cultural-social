import { Link } from 'react-router-dom'

export default function NaoEncontrado() {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-7xl flex-col justify-center px-5 py-20 sm:px-8">
      <p className="text-sm font-bold uppercase tracking-[0.2em] text-brand-action">Página não encontrada</p>
      <h1 className="mt-4 text-4xl font-bold text-brand-ink sm:text-6xl">Este caminho ainda não existe.</h1>
      <p className="mt-5 max-w-xl text-lg leading-8 text-brand-muted">Volte à página inicial para conhecer a CCS e seus departamentos.</p>
      <Link to="/" className="button-primary mt-8 w-fit">Ir para o início</Link>
    </main>
  )
}
