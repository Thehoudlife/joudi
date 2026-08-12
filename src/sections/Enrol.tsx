import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'
import { WhatsAppIcon, InstagramIcon, Sun } from '@/components/decor'
import { CONTACT, whatsappLink } from '@/config/contact'

export default function Enrol() {
  const { t, lang } = useLanguage()

  const waMessage =
    lang === 'en'
      ? 'Hello Islora! We would love to book a tour and visit the school.'
      : 'مرحباً أيزلورا! نودّ حجز جولة لزيارة المدرسة.'

  return (
    <>
      {/* philosophy closing statement */}
      <section className="bg-olive-deep py-24 text-center text-linen md:py-32">
        <div className="mx-auto max-w-3xl px-6">
          <Reveal>
            <p className="font-display text-2xl leading-snug text-linen/70 md:text-3xl">{t.philosophyClosing.line1}</p>
          </Reveal>
          <Reveal delay={180}>
            <p className="font-display mt-4 text-4xl font-medium leading-[1.15] text-butter md:text-5xl">
              {t.philosophyClosing.line2}
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="mx-auto mt-8 max-w-xl leading-relaxed text-linen/70">{t.philosophyClosing.p}</p>
          </Reveal>
        </div>
      </section>

      {/* enrolment invitation */}
      <section id="contact" className="relative overflow-hidden bg-butter/50 py-24 md:py-36">
        <Sun className="animate-spin-slow absolute -top-6 start-[5%] w-24 opacity-50" />
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">{t.enrol.overline}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mt-4 text-4xl leading-[1.12] text-olive md:text-6xl">{t.enrol.title}</h2>
          </Reveal>
          <Reveal delay={260}>
            <p className="font-display mt-6 text-xl italic text-charcoal/70 md:text-2xl">{t.enrol.p1}</p>
          </Reveal>
          <Reveal delay={360}>
            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-charcoal/75">{t.enrol.p2}</p>
          </Reveal>

          <Reveal delay={480}>
            <a
              href={whatsappLink(waMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-10 inline-flex items-center gap-3 rounded-full bg-[#25D366] py-4 pe-5 ps-8 text-lg font-bold text-white shadow-[0_14px_35px_rgba(37,211,102,0.35)] transition-all hover:scale-[1.05]"
            >
              {t.enrol.ctaWhatsapp}
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:rotate-12">
                <WhatsAppIcon className="h-5 w-5" />
              </span>
            </a>
          </Reveal>
          <Reveal delay={560}>
            <p className="mt-3 text-sm text-charcoal/50">{t.enrol.ctaNote}</p>
          </Reveal>

          {/* contact cards */}
          <Reveal delay={620}>
            <div className="mx-auto mt-16 grid max-w-3xl gap-4 text-start sm:grid-cols-2 lg:grid-cols-4">
              <ContactCard label={t.enrol.addressLabel} value={lang === 'en' ? CONTACT.addressEn : CONTACT.addressAr} />
              <ContactCard
                label={t.enrol.phoneLabel}
                value={CONTACT.displayPhone}
                href={`tel:+${CONTACT.whatsappNumber}`}
                ltr
              />
              <ContactCard
                label={t.enrol.instagramLabel}
                value={`@${CONTACT.instagram}`}
                href={`https://instagram.com/${CONTACT.instagram}`}
                icon={<InstagramIcon className="h-4 w-4" />}
                ltr
              />
              <ContactCard label={t.enrol.hoursLabel} value={t.enrol.hours} />
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mx-auto mt-20 max-w-2xl border-t border-olive/20 pt-10 font-display text-xl italic leading-relaxed text-olive/80 md:text-2xl">
              {t.enrol.quote}
            </p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function ContactCard({
  label,
  value,
  href,
  icon,
  ltr,
}: {
  label: string
  value: string
  href?: string
  icon?: React.ReactNode
  ltr?: boolean
}) {
  const inner = (
    <div className="h-full rounded-2xl bg-linen p-5 shadow-[0_6px_20px_rgba(63,59,55,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage">{label}</p>
      <p className={`mt-2 flex items-center gap-1.5 text-sm font-bold text-charcoal ${ltr ? 'ltr:text-left' : ''}`} dir={ltr ? 'ltr' : undefined}>
        {icon}
        {value}
      </p>
    </div>
  )
  return href ? (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    inner
  )
}
