import Reveal from '../components/Reveal/Reveal'
import fotoIntegracao1 from '../assets/eventos/integracao/integracao-outubro.jpeg'
import fotoIntegracao2 from '../assets/eventos/integracao/integracao-outubro2.jpeg'
import fotoPrincipalMis from '../assets/eventos/visita-mis/foto-principal-visita.jpeg'
import fotoGrupoMis from '../assets/eventos/visita-mis/foto.jpeg'
import fotoExposicaoMis1 from '../assets/eventos/visita-mis/museu-quadro.jpeg'
import fotoExposicaoMis2 from '../assets/eventos/visita-mis/museu-quadro2.jpeg'
import './Eventos.css'

export default function Eventos() {
  return (
    <main>
      <section className="eventos-hero section-pad">
        <Reveal className="site-container">
          <p className="eyebrow">Encontros da CCS</p>
          <h1>Experiências que aproximam</h1>
          <p>Registros de visitas, integrações e atividades que fazem parte da trajetória da cooperativa.</p>
        </Reveal>
      </section>

      <section className="eventos-lista section-pad" aria-labelledby="eventos-visita-title">
        <div className="site-container">
          <Reveal className="eventos-cabecalho">
            <div>
              <p className="eyebrow">Visita cultural</p>
              <h2 id="eventos-visita-title">Um dia no Museu da Imagem e do Som</h2>
              <p>A equipe da CCS visitou o MIS para conhecer suas exposições e compartilhar uma experiência cultural.</p>
            </div>
            <span className="eventos-selo">Destaque</span>
          </Reveal>

          <Reveal className="mis-destaque" delay={0.08}>
            <img src={fotoPrincipalMis} alt="Integrantes da CCS reunidos durante a visita ao MIS" loading="eager" decoding="async" />
            <p>Integrantes da CCS na visita ao Museu da Imagem e do Som</p>
          </Reveal>

          <div className="mis-galeria" aria-label="Outros registros da visita ao MIS">
            <figure><img src={fotoGrupoMis} alt="Exposição Arlete Bonelli no MIS" loading="lazy" decoding="async" /><figcaption>Exposição de fotografia no MIS</figcaption></figure>
            <figure><img src={fotoExposicaoMis1} alt="Fotografia de uma árvore em paisagem iluminada, exposta no museu" loading="lazy" decoding="async" /><figcaption>Obra em exposição</figcaption></figure>
            <figure><img src={fotoExposicaoMis2} alt="Fotografia de uma montanha ao entardecer, exposta no museu" loading="lazy" decoding="async" /><figcaption>Obra em exposição</figcaption></figure>
          </div>
        </div>
      </section>

      <section className="eventos-integracao section-pad" aria-labelledby="eventos-integracao-title">
        <div className="site-container integracao-grid">
          <Reveal className="integracao-copy">
            <p className="eyebrow">Integração</p>
            <h2 id="eventos-integracao-title">Boas-vindas a novos integrantes</h2>
            <p>Um momento para receber quem está chegando à CCS, se conhecer e começar a construir vínculos na cooperativa.</p>
          </Reveal>
          <div className="integracao-galeria" aria-label="Registros da integração de novos integrantes">
            <Reveal><img src={fotoIntegracao1} alt="Novos integrantes da CCS reunidos durante a integração" loading="lazy" decoding="async" /></Reveal>
            <Reveal delay={0.1}><img src={fotoIntegracao2} alt="Pessoas conversando durante o encontro de integração da CCS" loading="lazy" decoding="async" /></Reveal>
          </div>
        </div>
      </section>
    </main>
  )
}
