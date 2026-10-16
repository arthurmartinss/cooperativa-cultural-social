import { useRef, useState } from 'react'
import type { KeyboardEvent } from 'react'
import { AnimatePresence, useReducedMotion } from 'motion/react'
import * as m from 'motion/react-m'
import { Link } from 'react-router-dom'
import { departamentos } from '../../data/departamentos'
import { iconesDepartamentos } from '../../data/iconesDepartamentos'
import './MapaCooperacao.css'

export default function MapaCooperacao() {
  const [selectedSlug, setSelectedSlug] = useState(departamentos[0]?.slug ?? '')
  const buttonRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const reducedMotion = useReducedMotion()
  const selected = departamentos.find((departamento) => departamento.slug === selectedSlug) ?? departamentos[0]

  const handleSectorKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const last = departamentos.length - 1
    let nextIndex = index

    switch (event.key) {
      case 'ArrowRight': nextIndex = Math.min(index + 1, last); break
      case 'ArrowLeft': nextIndex = Math.max(index - 1, 0); break
      case 'ArrowDown': nextIndex = Math.min(index + 2, last); break
      case 'ArrowUp': nextIndex = Math.max(index - 2, 0); break
      case 'Home': nextIndex = 0; break
      case 'End': nextIndex = last; break
      default: return
    }

    event.preventDefault()
    const next = departamentos[nextIndex]
    if (!next) return
    setSelectedSlug(next.slug)
    buttonRefs.current[next.slug]?.focus()
  }

  if (!selected) return null

  const SelectedIcon = iconesDepartamentos[selected.slug]
  const selectedIndex = departamentos.findIndex((departamento) => departamento.slug === selected.slug) + 1

  return (
    <section id="cooperacao" className="cooperation-section section-pad scroll-mt-20" aria-labelledby="cooperation-title">
      <div className="site-container">
        <div className="cooperation-heading">
          <p className="eyebrow">Como trabalhamos</p>
          <h2 id="cooperation-title">Áreas que se encontram</h2>
          <p>Selecione um setor para ver o que ele faz e conhecer quem participa dele.</p>
        </div>

        <div className="cooperation-layout">
          <div className="cooperation-network">
            <div className="cooperation-nodes" role="tablist" aria-label="Setores da CCS">
              {departamentos.map((departamento, index) => {
                const Icon = iconesDepartamentos[departamento.slug]
                const active = selected.slug === departamento.slug
                return (
                  <button
                    key={departamento.slug}
                    ref={(node) => { buttonRefs.current[departamento.slug] = node }}
                    type="button"
                    id={`cooperation-tab-${departamento.slug}`}
                    role="tab"
                    className={`cooperation-node${active ? ' cooperation-node--active' : ''}`}
                    aria-selected={active}
                    aria-controls="cooperation-detail"
                    tabIndex={active ? 0 : -1}
                    onClick={() => setSelectedSlug(departamento.slug)}
                    onKeyDown={(event) => handleSectorKeyDown(event, index)}
                  >
                    {active && (
                      <m.span
                        className="cooperation-node-highlight"
                        layoutId="cooperation-node-highlight"
                        transition={reducedMotion ? { duration: 0 } : { type: 'spring', stiffness: 420, damping: 34 }}
                        aria-hidden="true"
                      />
                    )}
                    <span className="cooperation-node-content">
                      {Icon && <Icon size={22} strokeWidth={1.8} aria-hidden="true" />}
                      <span>{departamento.nome}</span>
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="cooperation-detail" id="cooperation-detail" role="tabpanel" aria-labelledby={`cooperation-tab-${selected.slug}`} aria-live="polite" tabIndex={0}>
            <span className="cooperation-counter">{String(selectedIndex).padStart(2, '0')} / {String(departamentos.length).padStart(2, '0')}</span>
            <AnimatePresence mode="wait" initial={false}>
              <m.div
                className="cooperation-detail-content"
                key={selected.slug}
                initial={reducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: reducedMotion ? 0 : -8 }}
                transition={{ duration: reducedMotion ? 0 : 0.24 }}
              >
                <span className="cooperation-detail-icon" aria-hidden="true">
                  {SelectedIcon && <SelectedIcon size={27} strokeWidth={1.7} />}
                </span>
                <p className="eyebrow">Área em foco</p>
                <h3>{selected.nome}</h3>
                <p className="cooperation-description">{selected.objetivo ?? selected.descricao}</p>
                <Link to={`/departamentos/${selected.slug}`} className="cooperation-link">
                  Conhecer o setor <span aria-hidden="true">↗</span>
                </Link>
              </m.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
