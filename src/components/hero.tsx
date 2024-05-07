import { agrandir } from '@/app/fonts'
import { cn } from '@/lib/util'

import { StarIcon } from './ui/icons'

export function Hero() {
  return (
    <section className="w-full bg-[#171717] h-[calc(100vh-60px)] pb-16 grid grid-cols-2 ">
      <div>
        <div className="bg-[#FFB800] h-[400px] absolute bottom-0 rounded-t-full w-[800px] left-16" />
        <div className="h-[680px] absolute bottom-0 bg-[#FF6B00] w-36 rounded-se-full" />
      </div>
      <div className="flex flex-col justify-end gap-10">
        <StarIcon size={87} />
        <div className="w-[calc(100%-700px)] text-wrap">
          <h1 className={cn(agrandir.className, 'text-8xl font-bold text-wrap')}>Guilherme Ferraz</h1>
          <h2 className={cn(agrandir.className, 'text-3xl font-normal')}>Dodge</h2>
        </div>
      </div>
      <div className="absolute bg-[#FF8A00] right-10 w-36 h-80 rounded-b-full" />
    </section>
  )
}
