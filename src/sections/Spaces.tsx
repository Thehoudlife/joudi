import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import Reveal from '@/components/Reveal'

const photos = [
  { src: '/assets/stage.jpg', shape: 'arch-top', tall: true },
  { src: '/assets/roleplay.jpg', shape: 'rounded-[32px]', tall: false },
  { src: '/assets/gym.jpg', shape: 'rounded-[32px]', tall: false },
  { src: '/assets/lounge.jpg', shape: 'arch-top', tall: true },
  { src: '/assets/classroom.jpg', shape: 'rounded-[32px]', tall: false },
]

export default function Spaces() {
  const { t } = useLanguage()
  const [lightbox, setLightbox] = useState<number | null>(null)

  return (
    <section id="spaces" className="relative overflow-hidden bg-linen py-24 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-terracotta">{t.spaces.overline}</p>
          </Reveal>
          <Reveal delay={120}>
            <h2 className="font-display mt-4 text-4xl leading-[1.12] text-olive md:text-5xl">{t.spaces.title}</h2>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 leading-relaxed text-charcoal/70">{t.spaces.subtitle}</p>
          </Reveal>
        </div>

        {/* asymmetric editorial gallery */}
        <div className="mt-16 grid gap-6 md:grid-cols-12">
          <Reveal mask className="md:col-span-5">
            <button onClick={() => setLightbox(0)} className="group block w-full text-start">
              <div className={`${photos[0].shape} overflow-hidden`}>
                <img
                  src={photos[0].src}
                  alt={t.spaces.captions[0].title}
                  className="h-[380px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[460px]"
                />
              </div>
              <Caption title={t.spaces.captions[0].title} desc={t.spaces.captions[0].desc} />
            </button>
          </Reveal>
          <div className="flex flex-col gap-6 md:col-span-7">
            <Reveal mask delay={150}>
              <button onClick={() => setLightbox(1)} className="group block w-full text-start">
                <div className={`${photos[1].shape} overflow-hidden`}>
                  <img
                    src={photos[1].src}
                    alt={t.spaces.captions[1].title}
                    className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[300px]"
                  />
                </div>
                <Caption title={t.spaces.captions[1].title} desc={t.spaces.captions[1].desc} />
              </button>
            </Reveal>
            <Reveal mask delay={280}>
              <button onClick={() => setLightbox(2)} className="group block w-full text-start">
                <div className={`${photos[2].shape} overflow-hidden`}>
                  <img
                    src={photos[2].src}
                    alt={t.spaces.captions[2].title}
                    className="h-[220px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[260px]"
                  />
                </div>
                <Caption title={t.spaces.captions[2].title} desc={t.spaces.captions[2].desc} />
              </button>
            </Reveal>
          </div>
          <div className="flex flex-col gap-6 md:col-span-7">
            <Reveal mask>
              <button onClick={() => setLightbox(4)} className="group block w-full text-start">
                <div className={`${photos[4].shape} overflow-hidden`}>
                  <img
                    src={photos[4].src}
                    alt={t.spaces.captions[4].title}
                    className="h-[260px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[320px]"
                  />
                </div>
                <Caption title={t.spaces.captions[4].title} desc={t.spaces.captions[4].desc} />
              </button>
            </Reveal>
          </div>
          <Reveal mask delay={150} className="md:col-span-5 md:-mt-10">
            <button onClick={() => setLightbox(3)} className="group block w-full text-start">
              <div className={`${photos[3].shape} overflow-hidden`}>
                <img
                  src={photos[3].src}
                  alt={t.spaces.captions[3].title}
                  className="h-[300px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[360px]"
                />
              </div>
              <Caption title={t.spaces.captions[3].title} desc={t.spaces.captions[3].desc} />
            </button>
          </Reveal>
        </div>
      </div>

      {/* lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-backdrop fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/70 p-6"
          onClick={() => setLightbox(null)}
        >
          <div className="relative max-h-[85vh] max-w-4xl overflow-hidden rounded-[24px]">
            <img src={photos[lightbox].src} alt={t.spaces.captions[lightbox].title} className="max-h-[85vh] w-full object-contain" />
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-charcoal/80 to-transparent p-6 text-linen">
              <p className="font-display text-xl">{t.spaces.captions[lightbox].title}</p>
              <p className="text-sm text-linen/80">{t.spaces.captions[lightbox].desc}</p>
            </div>
            <button
              className="absolute end-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-linen/90 text-xl text-charcoal"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              ×
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

function Caption({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mt-3 px-1">
      <p className="font-display text-lg font-medium text-olive">{title}</p>
      <p className="text-sm text-charcoal/60">{desc}</p>
    </div>
  )
}
