import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'
import { ArrowIcon } from '@/components/decor'
import { whatsappLink } from '@/config/contact'

const colorMap: Record<string, { bg: string; text: string }> = {
  sand: { bg: '#E6D6B8', text: '#3F3B37' },
  terracotta: { bg: '#C98C72', text: '#F8F5EF' },
  dusty: { bg: '#AEBFCA', text: '#3F3B37' },
  butter: { bg: '#F3E7B8', text: '#3F3B37' },
}

export default function Programs() {
  const { t, lang } = useLanguage()

  const waMessage =
    lang === 'en'
      ? 'Hello Islora! I would like to ask about enrolment for my child.'
      : 'مرحباً أيزلورا! أودّ الاستفسار عن تسجيل طفلي.'

  return (
    <section id="programs" className="relative overflow-hidden bg-[#EFEAE0] py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-sage">{t.programs.overline}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mt-4 text-4xl leading-[1.12] text-olive md:text-5xl">{t.programs.title}</h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 leading-relaxed text-charcoal/70">{t.programs.subtitle}</p>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {t.programs.items.map((p, i) => {
            const c = colorMap[p.color]
            return (
              <Reveal key={i} delay={i * 130} className={i % 2 === 1 ? 'lg:translate-y-10' : ''}>
                <div className="group flex h-full flex-col rounded-[32px] bg-linen p-7 shadow-[0_8px_30px_rgba(63,59,55,0.06)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(63,59,55,0.14)]">
                  <div
                    className="arch-top mx-auto flex h-28 w-24 items-end justify-center pb-3 transition-transform duration-500 group-hover:scale-105"
                    style={{ backgroundColor: c.bg }}
                  >
                    <span className="font-display text-sm font-bold" style={{ color: c.text }}>
                      {p.ages}
                    </span>
                  </div>
                  <h3 className="font-display mt-5 text-center text-2xl font-medium text-olive">{p.name}</h3>
                  <p className="mt-3 flex-1 text-center text-sm leading-relaxed text-charcoal/70">{p.desc}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <Reveal delay={200} className="mt-16 text-center lg:mt-24">
          <a
            href={whatsappLink(waMessage)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-pill group inline-flex items-center gap-3 rounded-full bg-olive py-4 pe-4 ps-8 font-bold text-linen shadow-[0_10px_30px_rgba(79,98,76,0.3)] transition-all hover:scale-[1.04] hover:bg-olive-deep"
          >
            {t.programs.cta}
            <span className="btn-arrow flex h-9 w-9 items-center justify-center rounded-full bg-linen/15">
              <ArrowIcon className="h-4 w-4" />
            </span>
          </a>
        </Reveal>
      </div>
    </section>
  )
}
