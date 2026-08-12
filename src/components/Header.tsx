import { useEffect, useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const links = [
  { id: 'philosophy', key: 'philosophy' },
  { id: 'heart', key: 'heart' },
  { id: 'programs', key: 'programs' },
  { id: 'spaces', key: 'spaces' },
  { id: 'contact', key: 'contact' },
] as const

export default function Header() {
  const { t, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    let lastY = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      if (y > lastY && y > 320 && !menuOpen) setHidden(true)
      else setHidden(false)
      lastY = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [menuOpen])

  const go = (id: string) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 z-50 w-full ${hidden ? 'header-hidden' : ''} ${
          scrolled ? 'bg-linen/90 shadow-[0_4px_30px_rgba(63,59,55,0.08)] backdrop-blur-md' : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 md:h-20 md:px-8">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5"
            aria-label="Islora home"
          >
            <img src="/assets/mark.png" alt="" className="h-9 w-auto md:h-11" />
            <span className="font-display text-xl text-olive md:text-2xl">Islora</span>
          </button>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => go(l.id)}
                className="group relative text-sm font-semibold text-charcoal/80 transition-colors hover:text-olive"
              >
                {t.nav[l.key]}
                <span className="absolute -bottom-1 start-0 h-[2px] w-0 rounded-full bg-terracotta transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="rounded-full border border-sage/50 px-4 py-1.5 text-sm font-bold text-olive transition-all hover:bg-sage hover:text-linen"
              aria-label="Switch language"
            >
              {t.langName}
            </button>
            <button
              onClick={() => go('contact')}
              className="btn-pill hidden items-center gap-2 rounded-full bg-olive px-5 py-2.5 text-sm font-bold text-linen transition-transform hover:scale-[1.03] md:flex"
            >
              {t.nav.bookTour}
              <span className="btn-arrow">
                <svg viewBox="0 0 20 20" className="h-3.5 w-3.5 rtl:-scale-x-100" fill="none" stroke="currentColor" strokeWidth="2.2">
                  <path d="M3 10h13M12 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </button>
            <button
              className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className={`h-[2px] w-6 bg-olive transition-all ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`h-[2px] w-6 bg-olive transition-all ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`h-[2px] w-6 bg-olive transition-all ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile full-screen menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 bg-linen transition-all duration-500 lg:hidden ${
          menuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        {links.map((l, i) => (
          <button
            key={l.id}
            onClick={() => go(l.id)}
            className="font-display text-3xl text-olive transition-all"
            style={{ transitionDelay: `${i * 60}ms`, transform: menuOpen ? 'translateY(0)' : 'translateY(16px)', opacity: menuOpen ? 1 : 0 }}
          >
            {t.nav[l.key]}
          </button>
        ))}
        <button
          onClick={() => go('contact')}
          className="mt-4 rounded-full bg-olive px-8 py-3.5 font-bold text-linen"
        >
          {t.nav.bookTour}
        </button>
      </div>
    </>
  )
}
