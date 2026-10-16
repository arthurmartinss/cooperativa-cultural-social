import type { Integrante } from '../../data/integrantes'
import './Organograma.css'

interface OrganogramaProps {
  nomeDepartamento: string
  integrantes: Integrante[]
}

export default function Organograma({ nomeDepartamento, integrantes }: OrganogramaProps) {
  if (integrantes.length === 0) return null

  return (
    <div className="organograma" role="group" aria-label={`Organograma do departamento de ${nomeDepartamento}`}>
      <div className="organograma__raiz">
        <img src="/brand/ccs-simbolo.png" alt="" width="1080" height="1080" />
        <span>{nomeDepartamento}</span>
      </div>

      <div className="organograma__conector" aria-hidden="true" />

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
