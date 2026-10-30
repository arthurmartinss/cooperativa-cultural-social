import { useRef } from 'react'
import { useReducedMotion, useScroll, useTransform } from 'motion/react'
import * as m from 'motion/react-m'
import { Link } from 'react-router-dom'
import GaleriaEditorial from '../components/GaleriaEditorial/GaleriaEditorial'
import MapaCooperacao from '../components/MapaCooperacao/MapaCooperacao'
import Reveal from '../components/Reveal/Reveal'
import { fotoDestaqueHome, fotografiasHome, srcSetResponsivo, urlOtimizada } from '../data/fotografiasSelecionadas'
import { valores } from '../data/valores'
import './Home.css'

export default function Home() {
  const heroRef = useRef<HTMLElement>(null)
  const reducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const colorWashOpacity = useTransform(scrollYProgress, [0, 0.35, 0.85, 1], [0, 0, 0.78, 1])

  return (
    <main id="inicio">
      <section ref={heroRef} className="home-hero section-pad" aria-labelledby="home-title">
        <m.div className="home-hero-wash" style={{ opacity: reducedMotion ? 0 : colorWashOpacity }} aria-hidden="true" />
        <div className="site-container home-hero-grid">
          <Reveal className="home-hero-copy">
            <p className="eyebrow home-hero-eyebrow">Cooperativa Cultural Social</p>
            <h1 id="home-title">Cultura se faz <span>junto</span></h1>
            <p className="home-hero-intro">Gente de áreas diferentes se encontra aqui para criar projetos culturais e sociais, compartilhar conhecimento e abrir espaço para novos talentos.</p>
            <div className="home-hero-actions">
              <Link to="/setores" className="home-hero-primary">Conheça os setores <span aria-hidden="true">↗</span></Link>
              <Link to="/sobre" className="home-hero-secondary">Sobre a CCS <span aria-hidden="true">→</span></Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <figure className="home-hero-figure">
              <img src={urlOtimizada(fotoDestaqueHome, 1400)} srcSet={srcSetResponsivo(fotoDestaqueHome)} sizes="(max-width: 1024px) 100vw, 50vw" width={fotoDestaqueHome.largura} height={fotoDestaqueHome.altura} alt={fotoDestaqueHome.alt} loading="eager" decoding="async" fetchPriority="high" />
              <figcaption>
                <strong>{fotoDestaqueHome.legenda}</strong>
                <small>Foto: <a href={fotoDestaqueHome.perfilUrl} target="_blank" rel="noreferrer">{fotoDestaqueHome.fotografo}</a> · <a href={fotoDestaqueHome.fotoUrl} target="_blank" rel="noreferrer">Unsplash</a></small>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </section>

      <section id="sobre" className="home-about section-pad scroll-mt-20">
        <Reveal className="site-container home-about-grid">
          <div><p className="eyebrow">CCS</p><h2>Um lugar para fazer ideias acontecerem</h2></div>
          <div className="home-about-text">
            <p>Somos uma cooperativa que reúne cultura, arte, esporte, tecnologia e comunicação. Cada área traz seu olhar; juntas, elas criam oportunidades para a comunidade.</p>
            <Link to="/sobre" className="home-text-link">Saiba mais <span aria-hidden="true">→</span></Link>
          </div>
        </Reveal>
      </section>

      <div id="setores" className="scroll-mt-20"><MapaCooperacao /></div>

      <section className="home-team section-pad">
        <Reveal className="site-container home-team-grid">
          <div>
            <p className="eyebrow">Nossa equipe</p>
            <h2>Quem faz a CCS</h2>
          </div>
          <div>
            <p>Conheça as pessoas que fazem parte da cooperativa, da gestão às equipes de cada setor.</p>
            <Link to="/equipe" className="home-text-link">Conhecer a equipe <span aria-hidden="true">→</span></Link>
          </div>
        </Reveal>
      </section>

      <GaleriaEditorial eyebrow="Nossa inspiração" title="Pessoas, lugares e ideias em movimento" description="Estas imagens ajudam a imaginar os encontros, a expressão e o trabalho em conjunto que queremos construir na CCS." photos={fotografiasHome} layout="grid" action={{ label: 'Explorar curadoria', to: '/curadoria' }} />

      <section className="home-updates section-pad">
        <Reveal className="site-container home-updates-grid">
          <div>
            <p className="eyebrow">Projetos e encontros</p>
            <h2>O que está acontecendo na CCS</h2>
            <p>Estamos construindo nossa presença digital com a participação dos setores. Aqui também vamos reunir os próximos eventos e os resultados do nosso trabalho.</p>
            <Link to="/eventos" className="button-primary">Acompanhar novidades <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-updates-note">
            <span>Em construção · TI</span>
            <h3>Conectando ideias</h3>
            <p>O site da CCS é nosso primeiro espaço para apresentar as pessoas, os projetos e as atividades da cooperativa.</p>
          </div>
        </Reveal>
      </section>

      <section id="valores" className="home-values section-pad scroll-mt-20">
        <Reveal className="site-container">
          <p className="eyebrow home-values-eyebrow">O que nos move</p>
          <h2>Fazer junto muda o que é possível</h2>
          <p>Cooperação, respeito e inclusão orientam cada projeto. A cultura abre o caminho; as pessoas dão sentido a ele.</p>
          <ul aria-label="Valores da CCS">{valores.map((valor) => <li key={valor.nome}>{valor.nome}</li>)}</ul>
          <Link to="/valores" className="home-values-link">Todos os nossos valores <span aria-hidden="true">→</span></Link>
        </Reveal>
      </section>
    </main>
  )
}
