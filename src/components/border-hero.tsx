import { agrandir } from '@/app/fonts'
import { cn } from '@/lib/util'

import { StarIcon } from './ui/icons'

const techs = ['UX Design', 'UI Design', 'Design Gráfico', 'Produto Digital', 'Photoshop', 'Figma']

export function BorderHero() {
  return (
    <div className="w-full h-16 z-10 absolute bg-[#000]">
      <div className="flex items-center justify-evenly h-full">
        {techs.map((tech) => (
          <div key={tech} className="flex items-center gap-2">
            <StarIcon size={22} fill="#FF6B00" className="animate-pulse" />
            <span className={cn(agrandir.className, 'font-bold text-2xl')}>{tech}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
