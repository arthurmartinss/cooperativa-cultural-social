import { LazyMotion, MotionConfig } from 'motion/react'
import { Outlet, ScrollRestoration } from 'react-router-dom'
import Cabecalho from './components/Cabecalho/Cabecalho'
import Rodape from './components/Rodape/Rodape'

const loadMotionFeatures = () => import('./motionFeatures').then((module) => module.default)

export default function App() {
  return (
    <LazyMotion features={loadMotionFeatures} strict>
      <MotionConfig reducedMotion="user">
        <Cabecalho />
        <Outlet />
        <Rodape />
        <ScrollRestoration />
      </MotionConfig>
    </LazyMotion>
  )
}
