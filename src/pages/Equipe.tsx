import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal/Reveal'
import { departamentos } from '../data/departamentos'
import { gestoresCcs } from '../data/gestoresCcs'
import { integrantesPorDepartamento, type Integrante } from '../data/integrantes'
import './Equipe.css'

function Pessoa({ integrante }: { integrante: Integrante }) {
  return (
    <article className="equipe-pessoa">
      <div className="equipe-pessoa-foto">
        <img src={integrante.foto} alt={`Retrato de ${integrante.nome}`} loading="lazy" decoding="async" />
      </div>
      <div className="equipe-pessoa-info">
        <h3>{integrante.nome}</h3>
        <p>{integrante.cargo}</p>
      </div>
    </article>
  )
}

export default function Equipe() {
  return (
    <main>
      <section className="equipe-hero section-pad" aria-labelledby="equipe-title">
        <Reveal className="site-container">
          <p className="eyebrow">Pessoas da CCS</p>
          <h1 id="equipe-title">Quem faz a CCS</h1>
          <p className="equipe-intro">Conheça as pessoas que fazem parte da cooperativa, da gestão às equipes de cada setor.</p>
          <nav className="equipe-atalhos" aria-label="Ir para uma equipe">
            <a href="#gestao">Gestão</a>
            {departamentos.map((departamento) => (
              <a key={departamento.slug} href={`#${departamento.slug}`}>{departamento.nome}</a>
            ))}
          </nav>
        </Reveal>
      </section>

      <section id="gestao" className="equipe-grupo equipe-grupo-gestao section-pad" aria-labelledby="equipe-gestao-title">
        <div className="site-container">
          <Reveal className="equipe-grupo-cabecalho">
            <div>
              <p className="eyebrow">Cooperativa</p>
              <h2 id="equipe-gestao-title">Gestão da CCS</h2>
              <p>As pessoas que cuidam da gestão da cooperativa.</p>
            </div>
          </Reveal>
          <div className="equipe-grade">
            {gestoresCcs.map((integrante) => <Pessoa key={integrante.nome} integrante={integrante} />)}
          </div>
        </div>
      </section>

      {departamentos.map((departamento) => {
        const integrantes = integrantesPorDepartamento[departamento.slug] ?? []

        return (
          <section key={departamento.slug} id={departamento.slug} className="equipe-grupo section-pad" aria-labelledby={`equipe-${departamento.slug}-title`}>
            <div className="site-container">
              <Reveal className="equipe-grupo-cabecalho">
                <div>
                  <p className="eyebrow">Setor</p>
                  <h2 id={`equipe-${departamento.slug}-title`}>{departamento.nome}</h2>
                </div>
                <Link to={`/departamentos/${departamento.slug}`} className="equipe-setor-link">Conhecer o setor <span aria-hidden="true">↗</span></Link>
              </Reveal>
              <div className="equipe-grade">
                {integrantes.map((integrante) => <Pessoa key={integrante.nome} integrante={integrante} />)}
              </div>
            </div>
          </section>
        )
      })}
    </main>
  )
}
