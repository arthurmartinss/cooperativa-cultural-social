import { FiExternalLink } from 'react-icons/fi'
import type { FotografiaSelecionada } from '../../data/fotografiasSelecionadas'
import { srcSetResponsivo, urlOtimizada } from '../../data/fotografiasSelecionadas'
import './GaleriaEditorial.css'

interface GaleriaEditorialProps {
  eyebrow: string
  title: string
  description: string
  photos: FotografiaSelecionada[]
  layout: 'mosaic' | 'pair' | 'triptych'
}

export default function GaleriaEditorial({ eyebrow, title, description, photos, layout }: GaleriaEditorialProps) {
  if (photos.length === 0) return null

  return (
    <section className={`selected-gallery selected-gallery--${layout}`}>
      <div className="site-container">
        <div className="selected-gallery-heading">
          <div>
            <p className="eyebrow">{eyebrow}</p>
            <h2>{title}</h2>
          </div>
          <p>{description}</p>
        </div>
        <div className="selected-gallery-grid">
          {photos.map((photo, index) => (
            <figure className={`selected-gallery-item selected-gallery-item--${index + 1}`} key={photo.id}>
              <div className="selected-gallery-image">
                <img
                  src={urlOtimizada(photo, 1080)}
                  srcSet={srcSetResponsivo(photo)}
                  sizes={layout === 'mosaic'
                    ? '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 66vw'
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
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
