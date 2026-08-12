import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'
import { Rainbow, Sprout, WaveDivider } from '@/components/decor'

export default function Heart() {
  const { t } = useLanguage()

  return (
    <section id="heart" className="relative overflow-hidden bg-linen py-24 md:py-36">
      <Rainbow className="absolute end-[4%] top-20 hidden w-28 opacity-50 lg:block" />
      <div className="mx-auto max-w-4xl px-6">
        {/* Opening belief */}
        <div className="text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">{t.heart.overline}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mt-4 text-4xl leading-[1.12] text-olive md:text-6xl">{t.heart.title}</h2>
          </Reveal>
          <div className="mx-auto mt-12 max-w-2xl space-y-4">
            {t.heart.beliefs.map((b, i) => (
              <Reveal key={i} delay={i * 110}>
                <p className="text-lg font-semibold leading-relaxed text-charcoal/75 md:text-xl">{b}</p>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200} className="mt-14">
            <div>
              <p className="text-lg text-charcoal/60">{t.heart.born1}</p>
              <p className="font-display mt-2 text-5xl font-medium text-olive md:text-6xl">{t.heart.born2}</p>
              <p className="mt-6 text-lg text-charcoal/70">{t.heart.born3}</p>
              <p className="font-display mt-1 text-2xl font-medium italic text-terracotta md:text-3xl">{t.heart.born4}</p>
            </div>
          </Reveal>
        </div>

        <Reveal className="my-20 md:my-28">
          <WaveDivider className="mx-auto w-44" color="#C9C0B2" />
        </Reveal>

        {/* The question */}
        <div className="grid items-start gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <Reveal>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-sage">{t.heart.questionTitle}</p>
            </Reveal>
            <Reveal delay={120}>
              <p className="font-display mt-4 text-2xl leading-snug text-charcoal/70 line-through decoration-terracotta/50 decoration-2 md:text-3xl">
                {t.heart.question1}
              </p>
            </Reveal>
            <Reveal delay={240}>
              <p className="mt-6 text-charcoal/70">{t.heart.question2}</p>
            </Reveal>
            <Reveal delay={340}>
              <p className="font-display mt-4 text-3xl font-medium leading-snug text-olive md:text-4xl">
                {t.heart.question3}
              </p>
            </Reveal>
          </div>
          <div className="space-y-3 pt-2">
            {t.heart.answer.map((a, i) => (
              <Reveal key={i} delay={i * 120}>
                <div className="flex items-start gap-3">
                  <Sprout className="mt-1 w-5 shrink-0" color={['#7A8F72', '#C98C72', '#AEBFCA', '#C9C0B2'][i % 4]} />
                  <p className="text-lg font-semibold leading-relaxed text-charcoal/80">{a}</p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={520}>
              <p className="pt-3 font-display text-xl italic text-olive">{t.heart.answerClosing}</p>
            </Reveal>
          </div>
        </div>

        {/* Journey */}
        <div className="mt-24 rounded-[36px] bg-[#EFEAE0] p-8 md:mt-32 md:p-14">
          <Reveal>
            <h3 className="font-display text-3xl leading-[1.15] text-olive md:text-4xl">{t.heart.journeyTitle}</h3>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 leading-relaxed text-charcoal/80">{t.heart.journeyP1}</p>
          </Reveal>
          <Reveal delay={250}>
            <p className="font-display mt-6 text-2xl font-medium leading-snug text-terracotta md:text-3xl">
              {t.heart.journeyHighlight}
            </p>
          </Reveal>
          <Reveal delay={350}>
            <p className="mt-6 leading-relaxed text-charcoal/80">{t.heart.journeyP2}</p>
          </Reveal>
          <Reveal delay={450}>
            <p className="mt-6 leading-relaxed text-charcoal/70">{t.heart.journeyP3}</p>
          </Reveal>
          <Reveal delay={550}>
            <p className="font-display mt-4 text-2xl font-medium text-olive md:text-3xl">{t.heart.journeyHighlight2}</p>
          </Reveal>
        </div>

        {/* One question + promise */}
        <div className="mt-24 text-center md:mt-32">
          <Reveal>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-sage">{t.heart.decisionTitle}</p>
          </Reveal>
          <Reveal delay={150}>
            <p className="font-display mx-auto mt-5 max-w-2xl text-3xl font-medium leading-[1.2] text-olive md:text-5xl">
              {t.heart.decisionQuestion}
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="mt-6 text-lg text-charcoal/70">{t.heart.decisionP}</p>
          </Reveal>
        </div>

        <div className="mx-auto mt-20 max-w-2xl">
          <Reveal>
            <h3 className="font-display text-center text-3xl text-olive md:text-4xl">{t.heart.promiseTitle}</h3>
          </Reveal>
          <div className="mt-10 space-y-4">
            {t.heart.promise.map((p, i) => (
              <Reveal key={i} delay={i * 100}>
                <div className="flex items-center gap-4 rounded-2xl bg-[#EFEAE0] px-6 py-4 transition-transform duration-300 hover:scale-[1.02]">
                  <span className="font-display w-8 shrink-0 text-center text-lg font-medium text-terracotta">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="font-semibold text-charcoal/85">{p}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Closing */}
        <div className="mt-24 text-center md:mt-32">
          <Reveal>
            <p className="font-display text-3xl font-medium leading-[1.2] text-olive md:text-4xl">{t.heart.closing1}</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-charcoal/75">{t.heart.closing2}</p>
          </Reveal>
          <Reveal delay={320}>
            <p className="font-display mt-8 text-2xl italic text-terracotta md:text-3xl">{t.heart.closing3}</p>
          </Reveal>
          <Reveal delay={450}>
            <p className="mx-auto mt-12 max-w-xl border-t border-taupe/60 pt-8 text-sm italic leading-relaxed text-charcoal/50">
              {t.heart.quote}
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
