import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { content, type Content, type Lang } from '@/i18n/content'

interface LanguageCtx {
  lang: Lang
  t: Content
  toggle: () => void
}

const Ctx = createContext<LanguageCtx>({
  lang: 'en',
  t: content.en,
  toggle: () => {},
})

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>('en')

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = content[lang].dir
    document.title =
      lang === 'en'
        ? 'Islora Early Learning School — Tripoli'
        : 'أيزلورا — مدرسة التعليم المبكر، طرابلس'
  }, [lang])

  const toggle = () => setLang((l) => (l === 'en' ? 'ar' : 'en'))

  return <Ctx.Provider value={{ lang, t: content[lang], toggle }}>{children}</Ctx.Provider>
}

export const useLanguage = () => useContext(Ctx)
