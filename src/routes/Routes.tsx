import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import { departamentos } from '../data/departamentos'
import Departamento from '../pages/Departamento'
import Eventos from '../pages/Eventos'
import Home from '../pages/Home'
import NaoEncontrado from '../pages/NaoEncontrado'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: 'eventos', element: <Eventos /> },
      ...departamentos.map((departamento) => ({
        path: `departamentos/${departamento.slug}`,
        element: <Departamento departamento={departamento} />,
      })),
      { path: '*', element: <NaoEncontrado /> },
    ],
  },
])

export default router
