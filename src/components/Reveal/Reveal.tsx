import type { ReactNode } from 'react'
import * as m from 'motion/react-m'

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  interactive?: boolean
}

export default function Reveal({ children, className, delay = 0, interactive = false }: RevealProps) {
  return (
    <m.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.14 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={interactive ? { y: -4, transition: { type: 'spring', stiffness: 360, damping: 30 } } : undefined}
      whileTap={interactive ? { scale: 0.99, transition: { duration: 0.12 } } : undefined}
    >
      {children}
    </m.div>
  )
}
