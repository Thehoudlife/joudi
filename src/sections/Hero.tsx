import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'
import { Sun, Cloud, Sprout, ArrowIcon } from '@/components/decor'

export default function Hero() {
  const { t } = useLanguage()

  const scrollTo = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="relative overflow-hidden pt-24 md:pt-32">
      {/* ambient decorations */}
      <Sun className="animate-spin-slow absolute -top-8 end-[6%] w-24 opacity-70 md:w-36" />
      <Cloud className="animate-drift absolute top-[16%] start-[4%] w-28 opacity-60 md:w-44" />
      <Cloud className="animate-drift absolute top-[42%] end-[10%] w-20 opacity-40 md:w-32" color="#E6D6B8" />
      <Sprout className="animate-sway absolute bottom-[30%] start-[7%] hidden w-14 opacity-70 lg:block" />
      <Sprout className="animate-sway absolute bottom-[18%] end-[6%] hidden w-10 opacity-50 lg:block" />

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Reveal>
          <img src="/assets/logo.png" alt="Islora Early Learning School" className="mx-auto w-56 md:w-72" />
        </Reveal>

        <Reveal delay={150}>
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.28em] text-sage md:text-sm">{t.hero.overline}</p>
        </Reveal>

        <Reveal delay={280}>
          <p className="font-display mt-4 text-lg italic text-terracotta md:text-xl">{t.hero.tagline}</p>
        </Reveal>

        <Reveal delay={400}>
          <h1 className="font-display mx-auto mt-6 max-w-3xl text-3xl leading-[1.18] text-olive md:text-5xl">
            {t.hero.headline}
          </h1>
        </Reveal>

        <div className="mx-auto mt-8 max-w-xl space-y-1.5">
          {t.hero.lines.map((line, i) => (
            <Reveal key={i} delay={560 + i * 140}>
              <p className="text-base font-semibold text-charcoal/75 md:text-lg">{line}</p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={1150}>
          <button
            onClick={() => scrollTo('moments')}
            className="btn-pill group mx-auto mt-10 flex items-center gap-3 rounded-full bg-olive py-4 pe-4 ps-8 text-base font-bold text-linen shadow-[0_10px_30px_rgba(79,98,76,0.3)] transition-all hover:scale-[1.04] hover:bg-olive-deep"
          >
            {t.hero.cta}
            <span className="btn-arrow flex h-9 w-9 items-center justify-center rounded-full bg-linen/15">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </button>
        </Reveal>
      </div>

      {/* Arch photo vessel */}
      <div className="relative mx-auto mt-14 max-w-4xl px-6 md:mt-20">
        <Reveal mask delay={200}>
          <div className="arch-top overflow-hidden shadow-[0_30px_60px_rgba(63,59,55,0.15)]">
            <img
              src="/assets/classroom.jpg"
              alt={t.spaces.captions[4].title}
              className="h-[320px] w-full object-cover md:h-[480px]"
            />
          </div>
        </Reveal>
        {/* grass line under arch */}
        <div className="mx-auto h-1.5 w-[70%] rounded-full bg-sage/40" />
      </div>

      {/* soft rolling hill at the bottom of the hero */}
      <svg viewBox="0 0 1440 90" className="mt-[-30px] block w-full" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 60C240 20 480 10 720 35s480 45 720 20v35H0z" fill="#F3E7B8" opacity="0.5" />
      </svg>
    </section>
  )
}
