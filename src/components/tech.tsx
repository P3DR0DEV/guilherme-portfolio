import { agrandir } from '@/app/fonts'
import { cn } from '@/lib/util'

export function Tech() {
  return (
    <section id="tech" className="w-full grid grid-cols-2 py-20">
      <h2 className={cn(agrandir.className, 'text-5xl font-bold text-[#FF8A00]')}>software</h2>
      <div className="space-y-4 text-justify">
        <ul className="list-disc">
          <li>Figma</li>
          <li>Photoshop</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>Autocad</li>
          <li>SketchUp</li>
        </ul>
      </div>
    </section>
  )
}
