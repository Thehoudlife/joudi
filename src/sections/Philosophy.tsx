import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'
import { Sprout } from '@/components/decor'

const pillarColors = ['#7A8F72', '#C98C72', '#AEBFCA', '#E6D6B8']

export default function Philosophy() {
  const { t } = useLanguage()

  return (
    <section id="philosophy" className="relative overflow-hidden bg-[#EFEAE0] py-24 md:py-36">
      <Sprout className="animate-sway absolute end-[5%] top-16 hidden w-16 opacity-40 lg:block" />
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: narrative */}
          <div>
            <Reveal>
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-sage">{t.philosophy.overline}</p>
            </Reveal>
            <Reveal delay={120}>
              <h2 className="font-display mt-4 text-4xl leading-[1.12] text-olive md:text-5xl">{t.philosophy.title}</h2>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-8 text-lg leading-relaxed text-charcoal/80">{t.philosophy.p1}</p>
            </Reveal>
            <Reveal delay={340}>
              <p className="font-display mt-6 border-s-4 border-terracotta ps-6 text-2xl font-medium leading-snug text-olive md:text-3xl">
                {t.philosophy.question}
              </p>
            </Reveal>
            <div className="mt-8 space-y-1.5">
              {t.philosophy.qualities.map((q, i) => (
                <Reveal key={i} delay={420 + i * 90}>
                  <p className="text-lg font-semibold text-charcoal/75">{q}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={300}>
              <p className="mt-10 leading-relaxed text-charcoal/80">{t.philosophy.p2}</p>
            </Reveal>
            <Reveal delay={380}>
              <p className="mt-4 leading-relaxed text-charcoal/80">{t.philosophy.p3}</p>
            </Reveal>
            <Reveal delay={460}>
              <div className="mt-8">
                <p className="font-display text-xl text-charcoal/60">{t.philosophy.statement1}</p>
                <p className="font-display mt-1 text-2xl font-medium italic text-terracotta md:text-3xl">
                  {t.philosophy.statement2}
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right: pillars with staggered rhythm */}
          <div className="grid content-start gap-6 sm:grid-cols-2">
            {t.philosophy.pillars.map((p, i) => (
              <Reveal key={i} delay={i * 140} className={i % 2 === 1 ? 'sm:translate-y-10' : ''}>
                <div className="group h-full rounded-[28px] bg-linen p-7 shadow-[0_8px_30px_rgba(63,59,55,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_18px_40px_rgba(63,59,55,0.12)]">
                  <div
                    className="arch-top mx-auto h-14 w-12 transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundColor: pillarColors[i] }}
                  />
                  <p className="font-display mt-1 text-center text-[11px] font-medium uppercase tracking-widest text-charcoal/40">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="font-display mt-2 text-center text-xl font-medium text-olive">{p.name}</h3>
                  <p className="mt-3 text-center text-sm leading-relaxed text-charcoal/70">{p.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
