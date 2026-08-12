import { useLanguage } from '@/context/LanguageContext'
import { CONTACT } from '@/config/contact'
import { InstagramIcon, WhatsAppIcon } from '@/components/decor'

export default function Footer() {
  const { t, lang } = useLanguage()

  const go = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  const marqueeWords =
    lang === 'en'
      ? ['wonder', 'curiosity', 'imagination', 'discovery', 'play', 'growth', 'childhood']
      : ['دهشة', 'فضول', 'خيال', 'اكتشاف', 'لعب', 'نمو', 'طفولة']

  return (
    <footer className="bg-olive-deep text-linen">
      {/* marquee of values */}
      <div className="overflow-hidden border-b border-linen/10 py-6">
        <div className="marquee-track flex w-max items-center gap-8 whitespace-nowrap">
          {[...Array(2)].map((_, dup) => (
            <div key={dup} className="flex items-center gap-8">
              {marqueeWords.map((w, i) => (
                <span key={i} className="flex items-center gap-8">
                  <span className="font-display text-2xl italic text-linen/60">{w}</span>
                  <span className="h-2 w-2 rounded-full bg-terracotta" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-3">
            <span className="rounded-2xl bg-linen p-2">
              <img src="/assets/mark.png" alt="Islora" className="h-10 w-auto" />
            </span>
            <div>
              <p className="font-display text-2xl">Islora</p>
              <p className="text-xs text-linen/60">{t.footer.tagline}</p>
            </div>
          </div>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-linen/60">{t.hero.headline}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">{t.footer.explore}</p>
          <div className="mt-5 flex flex-col gap-3">
            {(['philosophy', 'heart', 'programs', 'spaces', 'contact'] as const).map((id) => (
              <button key={id} onClick={() => go(id)} className="w-fit text-sm text-linen/70 transition-colors hover:text-butter">
                {t.nav[id]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-sand">{t.footer.contact}</p>
          <div className="mt-5 flex flex-col gap-3 text-sm text-linen/70">
            <span>{lang === 'en' ? CONTACT.addressEn : CONTACT.addressAr}</span>
            <a href={`tel:+${CONTACT.whatsappNumber}`} dir="ltr" className="w-fit transition-colors hover:text-butter">
              {CONTACT.displayPhone}
            </a>
            <div className="mt-2 flex gap-3">
              <a
                href={`https://instagram.com/${CONTACT.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-linen/10 transition-all hover:bg-linen/20"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href={`https://wa.me/${CONTACT.whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-linen/10 transition-all hover:bg-linen/20"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-linen/10 py-6 text-center text-xs text-linen/45">
        <p>© {new Date().getFullYear()} Islora Early Learning School · {t.footer.rights}</p>
        <p className="mt-1">{t.footer.made}</p>
      </div>
    </footer>
  )
}
