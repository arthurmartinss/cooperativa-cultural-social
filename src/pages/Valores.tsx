import Reveal from '../components/Reveal/Reveal'
import { valores } from '../data/valores'
import { fotografiaCooperacao, srcSetResponsivo, urlOtimizada } from '../data/fotografiasSelecionadas'
import './Valores.css'

export default function Valores() {
  const [cooperacao, ...demaisValores] = valores

  return (
    <main>
      <section className="valores-hero section-pad">
        <Reveal className="site-container">
          <p className="eyebrow">O que nos guia</p>
          <h1>O jeito CCS de trabalhar</h1>
          <p>Esses valores ajudam a decidir como criamos, convivemos e trabalhamos em equipe.</p>
        </Reveal>
      </section>

      <section className="valores-destaque section-pad" aria-labelledby="valor-cooperacao-title">
        <div className="site-container valores-destaque-grid">
          <Reveal className="valores-foto">
            <figure>
              <img
                src={urlOtimizada(fotografiaCooperacao, 1440)}
                srcSet={srcSetResponsivo(fotografiaCooperacao)}
                sizes="(max-width: 800px) 100vw, 55vw"
                width={fotografiaCooperacao.largura}
                height={fotografiaCooperacao.altura}
                alt={fotografiaCooperacao.alt}
                loading="eager"
                decoding="async"
              />
              <figcaption>
                <span>{fotografiaCooperacao.legenda}</span>
                <small>Foto de <a href={fotografiaCooperacao.perfilUrl} target="_blank" rel="noreferrer">{fotografiaCooperacao.fotografo}</a> no <a href={fotografiaCooperacao.fotoUrl} target="_blank" rel="noreferrer">Unsplash</a></small>
              </figcaption>
            </figure>
          </Reveal>
          {cooperacao && (
            <Reveal className="valores-destaque-copy" delay={0.1}>
              <p className="eyebrow">Nosso primeiro princípio</p>
              <h2 id="valor-cooperacao-title">{cooperacao.nome}</h2>
              <p>{cooperacao.descricao} Na CCS, diferentes áreas se juntam para transformar ideias em ações.</p>
            </Reveal>
          )}
        </div>
      </section>

      <section className="valores-lista section-pad" aria-labelledby="valores-lista-title">
        <div className="site-container">
          <Reveal className="valores-lista-heading">
            <p className="eyebrow">Princípios em prática</p>
            <h2 id="valores-lista-title">O que orienta nossas escolhas</h2>
          </Reveal>
          <div className="valores-grade">
            {demaisValores.map((valor, indice) => (
              <article key={valor.nome} className="valores-card">
                <span aria-hidden="true">{String(indice + 2).padStart(2, '0')}</span>
                <h3>{valor.nome}</h3>
                <p>{valor.descricao}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
