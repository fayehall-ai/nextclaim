import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import WhoItsFor from '@/components/WhoItsFor'
import Trust from '@/components/Trust'
import About from '@/components/About'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowItWorks />
      <WhoItsFor />
      <Trust />
      <About />
      <Footer />
    </main>
  )
}
