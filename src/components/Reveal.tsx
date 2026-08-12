import { useEffect, useRef, type CSSProperties, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  /** use the image mask reveal instead of fade-up */
  mask?: boolean
}

export default function Reveal({ children, delay = 0, className = '', mask = false }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`${mask ? 'mask-reveal' : 'reveal'} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  )
}
