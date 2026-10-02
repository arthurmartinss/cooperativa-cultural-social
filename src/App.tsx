import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'
import { Outlet, ScrollRestoration } from 'react-router-dom'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
      <ScrollRestoration />
    </>
  )
}
