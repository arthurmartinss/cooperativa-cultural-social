import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { departamentos } from '../data/departamentos'
import Departamento from '../pages/Departamento'
import Eventos from '../pages/Eventos'
import Curadoria from '../pages/Curadoria'
import Gestores from '../pages/Gestores'
import Home from '../pages/Home'
import NaoEncontrado from '../pages/NaoEncontrado'
import Setores from '../pages/Setores'
import Sobre from '../pages/Sobre'
import Valores from '../pages/Valores'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'sobre', element: <Sobre /> },
      { path: 'setores', element: <Setores /> },
      { path: 'gestores', element: <Gestores /> },
      { path: 'valores', element: <Valores /> },
      { path: 'eventos', element: <Eventos /> },
      { path: 'curadoria', element: <Curadoria /> },
      ...departamentos.map((departamento) => ({
        path: `departamentos/${departamento.slug}`,
        element: <Departamento departamento={departamento} />,
      })),
      { path: '*', element: <NaoEncontrado /> },
    ],
  },
])

export default router
