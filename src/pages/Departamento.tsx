import { Link } from 'react-router-dom'
import type { Departamento as DepartamentoTipo } from '../data/departamentos'
import { integrantesPorDepartamento } from '../data/integrantes'
import Organograma from '../components/Organograma/Organograma'

interface DepartamentoProps {
  departamento: DepartamentoTipo
}

export default function Departamento({ departamento }: DepartamentoProps) {
  return (
    <main>
      <section className="section-pad bg-brand-surface">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <Link to="/setores" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-action"><span aria-hidden="true">←</span> Todos os setores</Link>
            <p className="eyebrow mt-10">Departamento da CCS</p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-brand-ink">{departamento.nome}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">{departamento.descricao}</p>
            <Link to="/eventos" className="button-primary mt-8">Acompanhar eventos e resultados <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[28px] bg-brand-navy p-8 sm:min-h-[390px]">
            <span aria-hidden="true" className="absolute -right-6 -top-12 text-[13rem] font-black leading-none text-white/5">{departamento.sigla}</span>
            <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full border-[42px] border-brand-blue/30" />
            <img src="/brand/ccs-simbolo.png" alt="" width="1080" height="1080" className="relative z-10 w-full max-w-[290px]" />
            <span className="absolute bottom-6 left-6 z-20 rounded-full bg-brand-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-brand-navy">{departamento.nome}</span>
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">O que fazemos</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">Objetivo do setor</h2>
          </div>
          <div>
            {departamento.objetivo ? (
              <p className="text-base leading-8 text-brand-muted sm:text-lg">{departamento.objetivo}</p>
            ) : (
              <p className="rounded-2xl border border-dashed border-brand-line p-6 text-brand-muted">As informações deste setor estão em preparação.</p>
            )}
          </div>
        </div>
      </section>

      <section className="section-pad bg-brand-surface">
        <div className="site-container">
          <p className="eyebrow">Nossa equipe</p>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">Organograma de {departamento.nome}</h2>
          <Organograma
            nomeDepartamento={departamento.nome}
            integrantes={integrantesPorDepartamento[departamento.slug] ?? []}
          />
        </div>
      </section>
    </main>
  )
}
