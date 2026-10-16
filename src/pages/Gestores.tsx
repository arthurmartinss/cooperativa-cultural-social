import { LuNetwork } from 'react-icons/lu'
import Organograma from '../components/Organograma/Organograma'
import { gestoresCcs } from '../data/gestoresCcs'

export default function Gestores() {
  return (
    <main>
      <section className="section-pad bg-brand-surface">
        <div className="site-container">
          <p className="eyebrow">Gestão da cooperativa</p>
          <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-brand-ink">
            Quem cuida da gestão da CCS
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">
            Conheça as pessoas que compõem a gestão da cooperativa.
          </p>

          <Organograma
            nomeEquipe="CCS"
            rotuloEquipe="Gestão"
            ariaLabel="Organograma dos gestores da CCS"
            integrantes={gestoresCcs}
            IconeDepartamento={LuNetwork}
          />
        </div>
      </section>
    </main>
  )
}
