import { About } from '@/components/about'
import { BorderHero } from '@/components/border-hero'
import { Competences } from '@/components/competences'
import { Education } from '@/components/education'
import { Hero } from '@/components/hero'
import { Navbar } from '@/components/navbar'
import { Tech } from '@/components/tech'
import { Work } from '@/components/work'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <BorderHero />
      <div className="bg-[#252525] p-28">
        <About />
        <Work />
        <Tech />
        <Competences />
        <Education />
      </div>
    </main>
  )
}
