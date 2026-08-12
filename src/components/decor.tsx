/** Hand-drawn style SVG decorations in the Islora palette */

export function Sun({ className = '', color = '#F3E7B8' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" aria-hidden="true">
      <circle cx="50" cy="50" r="22" fill={color} />
      {Array.from({ length: 8 }).map((_, i) => {
        const a = (i * Math.PI) / 4
        const x1 = 50 + Math.cos(a) * 30
        const y1 = 50 + Math.sin(a) * 30
        const x2 = 50 + Math.cos(a) * 40
        const y2 = 50 + Math.sin(a) * 40
        return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={color} strokeWidth="4" strokeLinecap="round" />
      })}
    </svg>
  )
}

export function Cloud({ className = '', color = '#AEBFCA' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 120 70" className={className} fill="none" aria-hidden="true">
      <path
        d="M25 58c-11 0-18-7.5-18-16 0-8.5 7-15 15-15C25 16 35 8 46 8c14 0 24 9 26 21 3-3 8-5 13-5 10 0 18 8 18 17 0 10-8 17-18 17H25z"
        fill={color}
      />
    </svg>
  )
}

export function Sprout({ className = '', color = '#7A8F72' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} fill="none" aria-hidden="true">
      <path d="M30 76C30 56 30 44 30 34" stroke={color} strokeWidth="4" strokeLinecap="round" />
      <path
        d="M30 36C30 22 20 12 6 12c0 14 10 24 24 24z"
        fill={color}
        opacity="0.9"
      />
      <path
        d="M30 30c0-14 10-24 24-24 0 14-10 24-24 24z"
        fill={color}
        opacity="0.7"
      />
    </svg>
  )
}

export function Leaf({ className = '', color = '#7A8F72' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} fill="none" aria-hidden="true">
      <path
        d="M20 4C10 10 6 20 8 34c14-2 24-12 26-28-6-3-11-3-14-2z"
        fill={color}
      />
      <path d="M12 30C16 22 22 16 30 10" stroke="#F8F5EF" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  )
}

/** Wavy hand-drawn divider between sections */
export function WaveDivider({ className = '', color = '#7A8F72' }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 220 24" className={className} fill="none" aria-hidden="true">
      <path
        className="leaf-path"
        d="M4 14c18-12 30 8 46-2s28-4 40 2 26 8 40-2 30-6 44 0 30 6 42-2"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Rainbow({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 62" className={className} fill="none" aria-hidden="true">
      <path d="M10 58a50 50 0 0 1 100 0" stroke="#C98C72" strokeWidth="8" strokeLinecap="round" />
      <path d="M24 58a36 36 0 0 1 72 0" stroke="#F3E7B8" strokeWidth="8" strokeLinecap="round" />
      <path d="M38 58a22 22 0 0 1 44 0" stroke="#7A8F72" strokeWidth="8" strokeLinecap="round" />
    </svg>
  )
}

export function WhatsAppIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38a9.87 9.87 0 0 0 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zm0 18.03a8.1 8.1 0 0 1-4.13-1.13l-.3-.18-3.12.82.83-3.04-.2-.31a8.08 8.08 0 0 1-1.24-4.28c0-4.47 3.64-8.1 8.12-8.1 4.47 0 8.11 3.63 8.11 8.1s-3.6 8.12-8.07 8.12zm4.45-6.06c-.24-.12-1.44-.71-1.66-.79-.22-.08-.39-.12-.55.12-.16.24-.63.79-.77.95-.14.16-.28.18-.53.06-.24-.12-1.03-.38-1.96-1.21-.72-.64-1.21-1.44-1.35-1.68-.14-.24-.02-.37.11-.5.11-.11.24-.28.37-.42.12-.14.16-.24.24-.4.08-.16.04-.31-.02-.43-.06-.12-.55-1.32-.75-1.81-.2-.48-.4-.41-.55-.42h-.47c-.16 0-.43.06-.65.31-.22.24-.86.84-.86 2.05 0 1.21.88 2.37 1 2.53.12.16 1.72 2.63 4.18 3.69.58.25 1.04.4 1.4.52.59.19 1.12.16 1.54.1.47-.07 1.44-.59 1.65-1.16.2-.57.2-1.05.14-1.16-.06-.1-.22-.16-.46-.28z" />
    </svg>
  )
}

export function InstagramIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.9" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function ArrowIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d="M3 10h13M12 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
