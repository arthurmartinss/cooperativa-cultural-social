import { FiExternalLink } from 'react-icons/fi'
import * as m from 'motion/react-m'
import { Link } from 'react-router-dom'
import type { FotografiaSelecionada } from '../../data/fotografiasSelecionadas'
import { srcSetResponsivo, urlOtimizada } from '../../data/fotografiasSelecionadas'
import Reveal from '../Reveal/Reveal'
import './GaleriaEditorial.css'

interface GaleriaEditorialProps {
  eyebrow: string
  title: string
  description: string
  photos: FotografiaSelecionada[]
  layout: 'grid' | 'pair' | 'triptych'
  action?: { label: string; to: string }
}

export default function GaleriaEditorial({ eyebrow, title, description, photos, layout, action }: GaleriaEditorialProps) {
  if (photos.length === 0) return null

  return (
    <section className={`selected-gallery selected-gallery--${layout}`}>
      <div className="site-container">
        <Reveal className="selected-gallery-heading">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <div className="selected-gallery-intro">
            <p>{description}</p>
            {action && <Link to={action.to} className="selected-gallery-action">{action.label} <span aria-hidden="true">↗</span></Link>}
          </div>
        </Reveal>
        <div className="selected-gallery-grid">
          {photos.map((photo, index) => (
            <m.figure
              className={`selected-gallery-item selected-gallery-item--${index + 1}`}
              key={photo.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.12 }}
              transition={{ duration: 0.55, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -3, transition: { duration: 0.18 } }}
            >
              <div className="selected-gallery-image">
                <img
                  src={urlOtimizada(photo, 1080)}
                  srcSet={srcSetResponsivo(photo)}
                  sizes={layout === 'grid' || layout === 'pair'
                      ? '(max-width: 640px) 100vw, 50vw'
                      : '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw'}
                  width={photo.largura}
                  height={photo.altura}
                  alt={photo.alt}
                  loading="lazy"
                  decoding="async"
                />
                <span className="selected-gallery-caption">{photo.legenda}</span>
              </div>
              <figcaption>
                <span>Foto de <a href={photo.perfilUrl} target="_blank" rel="noreferrer">{photo.fotografo}</a></span>
                <a href={photo.fotoUrl} target="_blank" rel="noreferrer">Ver no Unsplash <FiExternalLink aria-hidden="true" /></a>
              </figcaption>
            </m.figure>
          ))}
        </div>
      </div>
    </section>
  )
}
