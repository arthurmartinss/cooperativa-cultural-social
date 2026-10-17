import { Link } from 'react-router-dom'
import { departamentos, type Departamento as DepartamentoTipo } from '../data/departamentos'
import { integrantesPorDepartamento } from '../data/integrantes'
import { iconesDepartamentos } from '../data/iconesDepartamentos'
import Organograma from '../components/Organograma/Organograma'
import GaleriaEditorial from '../components/GaleriaEditorial/GaleriaEditorial'
import { fotografiasPorDepartamento } from '../data/fotografiasSelecionadas'
import { destaquesDepartamentos } from '../data/destaquesDepartamentos'
import Reveal from '../components/Reveal/Reveal'

const galeriasDepartamento = {
  artes: {
    eyebrow: 'Expressão e criação',
    title: 'A arte ganha forma de muitos jeitos',
    description: 'Cores, gestos e processos criativos mostram como cada pessoa e cultura encontra sua própria maneira de se expressar.',
    layout: 'pair' as const,
  },
  esporte: {
    eyebrow: 'Corpo, cultura e encontro',
    title: 'O esporte também aproxima culturas',
    description: 'Práticas diferentes compartilham movimento, estratégia e participação, criando novas formas de estar em grupo.',
    layout: 'triptych' as const,
  },
}

interface DepartamentoProps {
  departamento: DepartamentoTipo
}

export default function Departamento({ departamento }: DepartamentoProps) {
  const IconeDepartamento = iconesDepartamentos[departamento.slug]
  const fotografias = fotografiasPorDepartamento[departamento.slug] ?? []
  const galeria = galeriasDepartamento[departamento.slug as keyof typeof galeriasDepartamento]
  const destaque = destaquesDepartamentos[departamento.slug]
  const integrantes = integrantesPorDepartamento[departamento.slug] ?? []
  const indiceDepartamento = departamentos.findIndex(({ slug }) => slug === departamento.slug)
  const proximosDepartamentos = [1, 2].map((distancia) => departamentos[(indiceDepartamento + distancia) % departamentos.length])

  return (
    <main>
      <section className="section-pad bg-brand-surface">
        <div className="site-container grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <Reveal>
            <Link to="/setores" className="inline-flex items-center gap-2 text-sm font-bold text-brand-navy hover:text-brand-action"><span aria-hidden="true">←</span> Todos os setores</Link>
            <p className="eyebrow mt-10">Departamento da CCS</p>
            <h1 className="mt-4 max-w-3xl text-[clamp(2.25rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] tracking-tight text-brand-ink">{departamento.nome}</h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-brand-muted sm:text-lg">{departamento.descricao}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/eventos" className="button-primary">Acompanhar eventos e resultados <span aria-hidden="true">↗</span></Link>
              {integrantes.length > 0 && <a href="#equipe" className="button-secondary">Conheça a equipe <span aria-hidden="true">↓</span></a>}
            </div>
          </Reveal>
          <Reveal delay={0.12}>
          {destaque ? (
            <figure className="relative isolate flex min-h-[320px] overflow-hidden rounded-[28px] bg-brand-deep shadow-[0_30px_70px_rgba(1,40,105,0.16)] sm:min-h-[390px]">
              <img
                src={destaque.src}
                srcSet={destaque.srcSet}
                sizes="(max-width: 1024px) 100vw, 45vw"
                alt={destaque.alt}
                loading="eager"
                decoding="async"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-deep/90 via-brand-deep/15 to-transparent" />
              <figcaption className="relative z-10 mt-auto flex w-full flex-col gap-3 p-6 text-white sm:p-8">
                <span className="w-fit rounded-full bg-brand-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-brand-deep">{departamento.nome}</span>
                <p className="text-sm text-white/80">{destaque.legenda}</p>
                <p className="text-[11px] text-white/65">Foto: <a className="underline decoration-white/35 underline-offset-2 hover:text-white" href={destaque.perfilUrl} target="_blank" rel="noreferrer">{destaque.fotografo}</a> · <a className="underline decoration-white/35 underline-offset-2 hover:text-white" href={destaque.fotoUrl} target="_blank" rel="noreferrer">Unsplash</a></p>
              </figcaption>
            </figure>
          ) : (
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-[28px] bg-brand-deep p-8 sm:min-h-[390px]">
              <span aria-hidden="true" className="absolute -right-6 -top-12 text-[13rem] font-black leading-none text-white/5">{departamento.sigla}</span>
              <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-56 w-56 rounded-full border-[42px] border-brand-blue/30" />
              <div aria-hidden="true" className="relative z-10 flex h-52 w-52 items-center justify-center rounded-full border border-white/15 bg-white/10 text-brand-yellow shadow-[0_20px_60px_rgba(0,0,0,0.18)] sm:h-64 sm:w-64">
                {IconeDepartamento && <IconeDepartamento size={112} strokeWidth={1.5} className="drop-shadow-[0_8px_18px_rgba(254,197,4,0.15)] sm:h-32 sm:w-32" />}
              </div>
              <span className="absolute bottom-6 left-6 z-20 rounded-full bg-brand-yellow px-4 py-2 text-xs font-extrabold uppercase tracking-wider text-brand-deep">{departamento.nome}</span>
            </div>
          )}
          </Reveal>
        </div>
      </section>

      <section className="section-pad bg-brand-paper">
        <Reveal className="site-container grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="eyebrow">O que fazemos</p>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">Objetivo do setor</h2>
          </div>
          <div className="border-l-[3px] border-brand-yellow pl-6 sm:pl-8">
            {departamento.objetivo ? (
              <p className="text-base leading-8 text-brand-muted sm:text-lg">{departamento.objetivo}</p>
            ) : (
              <p className="rounded-2xl border border-dashed border-brand-line p-6 text-brand-muted">As informações deste setor estão em preparação.</p>
            )}
          </div>
        </Reveal>
      </section>

      {galeria && fotografias.length > 0 && (
        <GaleriaEditorial
          eyebrow={galeria.eyebrow}
          title={galeria.title}
          description={galeria.description}
          photos={fotografias}
          layout={galeria.layout}
        />
      )}

      <section id="equipe" className="section-pad scroll-mt-24 bg-brand-surface">
        <div className="site-container">
          <p className="eyebrow">Nossa equipe</p>
          <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">Organograma de {departamento.nome}</h2>
            {integrantes.length > 0 && <span className="rounded-full border border-brand-line bg-brand-paper px-4 py-2 text-sm font-semibold text-brand-muted">{integrantes.length} {integrantes.length === 1 ? 'pessoa' : 'pessoas'}</span>}
          </div>
          <Organograma
            nomeEquipe={departamento.nome}
            ariaLabel={`Organograma do departamento de ${departamento.nome}`}
            integrantes={integrantes}
            IconeDepartamento={IconeDepartamento}
          />
        </div>
      </section>

      <section className="section-pad bg-brand-paper" aria-labelledby="outros-setores-titulo">
        <Reveal className="site-container">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="eyebrow">Continue explorando</p>
              <h2 id="outros-setores-titulo" className="mt-4 text-3xl font-extrabold tracking-tight text-brand-ink sm:text-4xl">Outras áreas da CCS</h2>
            </div>
            <Link to="/setores" className="inline-flex min-h-11 items-center gap-2 font-bold text-brand-navy hover:text-brand-action">Ver todos os setores <span aria-hidden="true">→</span></Link>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {proximosDepartamentos.map((proximo) => {
              const Icone = iconesDepartamentos[proximo.slug]
              return (
                <Link key={proximo.slug} to={`/departamentos/${proximo.slug}`} className="group relative flex min-h-60 flex-col overflow-hidden rounded-3xl border border-brand-line bg-brand-surface p-7 transition-[border-color,transform,box-shadow] duration-200 hover:-translate-y-1 hover:border-brand-action hover:shadow-[0_18px_40px_rgba(1,40,105,0.1)] sm:p-8">
                  <span aria-hidden="true" className="absolute -right-2 -top-7 text-[8rem] font-black leading-none text-brand-line/50">{proximo.sigla}</span>
                  <span aria-hidden="true" className="relative grid h-12 w-12 place-items-center rounded-2xl bg-brand-sky text-brand-navy">{Icone && <Icone size={25} strokeWidth={1.8} />}</span>
                  <h3 className="relative mt-6 text-xl font-bold text-brand-ink">{proximo.nome}</h3>
                  <p className="relative mt-2 max-w-md text-sm leading-6 text-brand-muted">{proximo.descricao}</p>
                  <span className="relative mt-auto flex items-center gap-2 pt-6 text-sm font-bold text-brand-navy group-hover:text-brand-action">Conhecer setor <span aria-hidden="true">→</span></span>
                </Link>
              )
            })}
          </div>
        </Reveal>
      </section>
    </main>
  )
}
