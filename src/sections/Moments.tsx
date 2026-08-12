import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'
import { WaveDivider } from '@/components/decor'

export default function Moments() {
  const { t } = useLanguage()

  return (
    <section id="moments" className="relative bg-linen py-24 md:py-36">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">{t.moments.overline}</p>
        </Reveal>
        <Reveal delay={120}>
          <h2 className="font-display mt-4 text-4xl leading-[1.12] text-olive md:text-6xl">{t.moments.title}</h2>
        </Reveal>

        <div className="mt-16 space-y-7 md:mt-20 md:space-y-9">
          {t.moments.lines.map((line, i) => (
            <Reveal key={i} delay={i * 90}>
              <p
                className={`font-display text-xl leading-snug text-charcoal/85 md:text-2xl ${
                  i % 2 === 0 ? 'md:-translate-x-6 rtl:md:translate-x-6' : 'md:translate-x-6 rtl:md:-translate-x-6'
                }`}
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={200} className="mt-16 md:mt-20">
          <div className="inline-block">
            <p className="text-lg font-semibold text-charcoal/60 md:text-xl">{t.moments.bridge1}</p>
            <p className="font-display mt-3 text-3xl font-medium text-terracotta md:text-4xl">{t.moments.bridge2}</p>
          </div>
        </Reveal>

        <Reveal delay={120} className="mt-16 md:mt-20">
          <WaveDivider className="mx-auto w-44 text-sage" color="#C9C0B2" />
        </Reveal>

        <div className="mt-14 space-y-2.5">
          {t.moments.closing.map((line, i) => (
            <Reveal key={i} delay={i * 160}>
              <p
                className={
                  i === t.moments.closing.length - 1
                    ? 'font-display pt-2 text-2xl font-medium text-olive md:text-3xl'
                    : i === t.moments.closing.length - 2
                      ? 'pt-4 text-base text-charcoal/50'
                      : 'text-lg font-semibold text-charcoal/75 md:text-xl'
                }
              >
                {line}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
