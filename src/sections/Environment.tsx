import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'
import { ArrowIcon, Leaf } from '@/components/decor'

export default function Environment() {
  const { t } = useLanguage()

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section id="environment" className="relative overflow-hidden bg-olive py-24 text-linen md:py-36">
      <Leaf className="animate-float absolute start-[6%] top-14 w-10 opacity-20" color="#F3E7B8" />
      <Leaf className="animate-float-rev absolute bottom-24 end-[8%] w-14 opacity-15" color="#F8F5EF" />

      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sand">{t.environment.overline}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-4 text-3xl leading-[1.15] text-linen/90 md:text-4xl">
                {t.environment.title}
              </h2>
            </Reveal>
            <Reveal delay={260}>
              <p className="font-display mt-8 text-4xl font-medium leading-[1.15] text-butter md:text-5xl">
                {t.environment.statement}
              </p>
            </Reveal>
            <Reveal delay={380}>
              <p className="mt-8 leading-relaxed text-linen/75">{t.environment.p1}</p>
            </Reveal>
            <Reveal delay={460}>
              <p className="mt-4 font-semibold text-linen/85">{t.environment.p2}</p>
            </Reveal>
            <div className="mt-6 space-y-1">
              {t.environment.list.map((item, i) => (
                <Reveal key={i} delay={540 + i * 110}>
                  <p className="font-display text-xl text-sand md:text-2xl">{item}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={300}>
              <p className="mt-8 leading-relaxed text-linen/75">{t.environment.p3}</p>
            </Reveal>
            <Reveal delay={380}>
              <div className="mt-10">
                <p className="text-linen/60">{t.environment.closing1}</p>
                <p className="font-display mt-1 text-2xl font-medium italic text-butter md:text-3xl">
                  {t.environment.closing2}
                </p>
              </div>
            </Reveal>
            <Reveal delay={460}>
              <button
                onClick={() => go('heart')}
                className="btn-pill group mt-10 flex items-center gap-3 rounded-full bg-butter py-3.5 pe-3.5 ps-7 font-bold text-olive transition-all hover:scale-[1.04]"
              >
                {t.environment.cta}
                <span className="btn-arrow flex h-8 w-8 items-center justify-center rounded-full bg-olive/10">
                  <ArrowIcon className="h-4 w-4" />
                </span>
              </button>
            </Reveal>
          </div>

          {/* offset photos in arch vessels */}
          <div className="relative">
            <Reveal mask>
              <div className="arch-top ms-auto w-[72%] overflow-hidden">
                <img src="/assets/stage.jpg" alt={t.spaces.captions[0].title} className="h-[300px] w-full object-cover md:h-[380px]" />
              </div>
            </Reveal>
            <Reveal mask delay={220} className="-mt-16 md:-mt-24">
              <div className="w-[58%] overflow-hidden rounded-[28px] border-4 border-linen/20 shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <img src="/assets/gym.jpg" alt={t.spaces.captions[2].title} className="h-[220px] w-full object-cover md:h-[280px]" />
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
