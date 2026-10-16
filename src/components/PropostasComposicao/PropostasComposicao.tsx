import {
  fotoDestaqueHome,
  fotografiasHome,
  fotografiasPorDepartamento,
  srcSetResponsivo,
  urlOtimizada,
  type FotografiaSelecionada,
} from '../../data/fotografiasSelecionadas'
import './PropostasComposicao.css'

const arte = fotografiasPorDepartamento.artes[0]
const esporte = fotografiasPorDepartamento.esporte[0]
const tecnologia = fotografiasHome[1]

function FotoPreview({ foto, className = '' }: { foto: FotografiaSelecionada; className?: string }) {
  return (
    <figure className={`composition-photo ${className}`}>
      <img
        src={urlOtimizada(foto, 900)}
        srcSet={srcSetResponsivo(foto)}
        sizes="(max-width: 720px) 85vw, (max-width: 1100px) 40vw, 28vw"
        width={foto.largura}
        height={foto.altura}
        alt={foto.alt}
        loading="lazy"
        decoding="async"
      />
      <figcaption>
        <a href={foto.perfilUrl} target="_blank" rel="noreferrer">Foto: {foto.fotografo}</a>
        <a href={foto.fotoUrl} target="_blank" rel="noreferrer">Unsplash</a>
      </figcaption>
    </figure>
  )
}

export default function PropostasComposicao() {
  return (
    <section className="composition-proposals" aria-labelledby="composition-proposals-title">
      <div className="curation-wrap">
        <div className="composition-proposals-heading">
          <div>
            <span className="curation-kicker">PRÓXIMA ETAPA · ESTUDOS VISUAIS</span>
            <h2 id="composition-proposals-title">Três jeitos de dar espaço às imagens</h2>
            <p>Prévia temporária com fotografias escolhidas. As opções ajudam a comparar o ritmo e o destaque de cada composição antes de decidir a apresentação final.</p>
          </div>
          <span className="composition-proposals-note">ESTUDOS · NÃO PUBLICADOS</span>
        </div>

        <div className="composition-proposals-grid">
          <article className="composition-option composition-option--editorial">
            <div className="composition-option-label"><span>01</span><div><h3>Destaque editorial</h3><p>Uma foto ampla acompanhada de texto</p></div></div>
            <div className="composition-editorial-preview">
              <FotoPreview foto={fotoDestaqueHome} />
              <div className="composition-editorial-copy"><span>CCS · CULTURA EM MOVIMENTO</span><strong>Ideias que crescem quando trabalhamos em conjunto.</strong><i aria-hidden="true">↗</i></div>
            </div>
          </article>

          <article className="composition-option composition-option--mosaic">
            <div className="composition-option-label"><span>02</span><div><h3>Mosaico de histórias</h3><p>Uma imagem principal e recortes de apoio</p></div></div>
            <div className="composition-mosaic-preview">
              <FotoPreview foto={fotografiasHome[0]} className="composition-mosaic-main" />
              <FotoPreview foto={arte} />
              <FotoPreview foto={esporte} />
            </div>
          </article>

          <article className="composition-option composition-option--cards">
            <div className="composition-option-label"><span>03</span><div><h3>Faixa de projetos</h3><p>Cartões visuais para temas diferentes</p></div></div>
            <div className="composition-cards-preview">
              {[arte, esporte, tecnologia].map((foto) => (
                <div className="composition-project-card" key={foto.id}>
                  <FotoPreview foto={foto} />
                  <span>{foto === arte ? 'Arte e expressão' : foto === esporte ? 'Esporte e cultura' : 'Tecnologia e pessoas'}</span>
                </div>
              ))}
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
