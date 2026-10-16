import type { Integrante } from '../../data/integrantes'
import type { IconType } from 'react-icons'
import './Organograma.css'

interface OrganogramaProps {
  nomeDepartamento: string
  integrantes: Integrante[]
  IconeDepartamento: IconType
}

export default function Organograma({ nomeDepartamento, integrantes, IconeDepartamento }: OrganogramaProps) {
  if (integrantes.length === 0) return null

  return (
    <div className="organograma" role="group" aria-label={`Organograma do departamento de ${nomeDepartamento}`}>
      <div className="organograma__raiz">
        <span className="organograma__icone" aria-hidden="true">
          <IconeDepartamento size={24} strokeWidth={1.8} />
        </span>
        <div>
          <span className="organograma__rotulo">Equipe</span>
          <strong>{nomeDepartamento}</strong>
        </div>
      </div>

      <ul className="organograma__equipe">
        {integrantes.map((integrante) => (
          <li className="organograma__membro" key={integrante.foto}>
            <img
              className="organograma__foto"
              src={integrante.foto}
              alt={`Foto de ${integrante.nome}`}
              width="160"
              height="160"
              loading="lazy"
            />
            <h3>{integrante.nome}</h3>
            {integrante.cargo && <p className="organograma__cargo">{integrante.cargo}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}
