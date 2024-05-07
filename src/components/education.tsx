import { agrandir } from '@/app/fonts'
import { cn } from '@/lib/util'

export function Education() {
  return (
    <section id="education" className="w-full grid grid-cols-2 py-20">
      <h2 className={cn(agrandir.className, 'text-5xl font-bold text-[#FF8A00]')}>educação</h2>
      <div className="space-y-4 text-justify">
        <ul className="list-disc">
          <li>
            Faculdade FUMEC - Design <span className="font-light">(2022-2026)</span>
          </li>
          <li>
            Colégio Imaculada Conceição <span className="font-light">(2020)</span>
          </li>
        </ul>
      </div>
    </section>
  )
}
