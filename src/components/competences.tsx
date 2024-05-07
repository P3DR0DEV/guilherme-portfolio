import { agrandir } from '@/app/fonts'
import { cn } from '@/lib/util'

export function Competences() {
  return (
    <section id="competences" className="w-full grid grid-cols-2 py-20">
      <h2 className={cn(agrandir.className, 'text-5xl font-bold text-[#FF8A00]')}>competências</h2>
      <div className="space-y-4 text-justify">
        <ul className="list-disc">
          <li>Desing de Sistema de identidade</li>
          <li>User-experience design</li>
          <li>User-interface design</li>
          <li>Trabalho em grupo</li>
          <li>Comunicação</li>
          <li>Organização</li>
          <li>Autodidata</li>
          <li>Adaptabilidade</li>
          <li>Inglês avançado</li>
        </ul>
      </div>
    </section>
  )
}
