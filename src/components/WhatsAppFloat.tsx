import { useLanguage } from '@/context/LanguageContext'
import { WhatsAppIcon } from '@/components/decor'
import { whatsappLink } from '@/config/contact'

export default function WhatsAppFloat() {
  const { t, lang } = useLanguage()
  const msg =
    lang === 'en'
      ? 'Hello Islora! I have a question about the school.'
      : 'مرحباً أيزلورا! لديّ سؤال عن المدرسة.'

  return (
    <a
      href={whatsappLink(msg)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.nav.bookTour}
      className="wa-float fixed bottom-6 end-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white transition-transform hover:scale-110"
    >
      <WhatsAppIcon className="h-7 w-7" />
    </a>
  )
}
