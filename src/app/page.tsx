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
    <main className="max-w-screen-2xl flex flex-col">
      <Navbar />
      <div className="w-screen mx-auto">
        <Hero />
        <BorderHero />
        <div className="p-28">
          <About />
          <Work />
          <Tech />
          <Competences />
          <Education />
        </div>
      </div>
    </main>
  )
}
