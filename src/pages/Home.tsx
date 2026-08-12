import Header from '@/components/Header'
import WhatsAppFloat from '@/components/WhatsAppFloat'
import Hero from '@/sections/Hero'
import Moments from '@/sections/Moments'
import Philosophy from '@/sections/Philosophy'
import Environment from '@/sections/Environment'
import Heart from '@/sections/Heart'
import Programs from '@/sections/Programs'
import Spaces from '@/sections/Spaces'
import Enrol from '@/sections/Enrol'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-linen">
      <Header />
      <main>
        <Hero />
        <Moments />
        <Philosophy />
        <Environment />
        <Heart />
        <Programs />
        <Spaces />
        <Enrol />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
