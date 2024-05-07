import { agrandir, montserrat } from '@/app/fonts'
import { cn } from '@/lib/util'

export function Work() {
  return (
    <section id="works" className="w-full grid grid-cols-2 py-20">
      <h2 className={cn(agrandir.className, 'text-5xl font-bold text-[#FF8A00]')}>experiência</h2>
      <div className={cn(montserrat.className, 'text-justify')}>
        <ul className="list-disc space-y-6">
          <li className="font-light">
            <span className="font-bold">Framework Digital - Estágio</span> (out/2021 - mar/2022)
            <ul className="list-disc list-inside">
              <li>
                out/2021 - jul/2022
                <ul className="list-disc list-inside ml-4">
                  <li>
                    Entrei na empresa como Dev de Front em um programa de estágio ofertado pela empresa mas acabei não
                    atuando muito.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="font-light">
            <span className="font-bold">In8 Produtos Digitais - Estágio</span> (out/2023 até mar/2024)
            <ul className="list-disc list-inside">
              <li>
                Meu maior crescimento foi dentro dessa empresa. Aprendi muito sobre Figma, como trabalhar em grupo e
                comunicação em equipe, skills que eu não tinha desenvolvido tão bem ainda. Além disso, tive a
                oportunidade de atuar no time de marketing.
              </li>
            </ul>
          </li>
          <li className="font-light">
            <span className="font-bold">In8 - UX/UI Júnior</span> (mar/2024 - atual)
            <ul className="list-disc list-inside">
              <li>
                Após 1 ano de estágio na empresa, recebi a proposta para ser UX/UI Júnior e fazer algumas participações
                no time de marketing, desenvolvendo algumas artes, mas com o foco em prototipar e elaborar páginas web e
                mobile.
              </li>
            </ul>
          </li>

          <li className="font-light">
            <span className="font-bold">Anonymous Cantos</span> (autônomo) (momento atual)
            <ul className="list-disc list-inside">
              <li>Realizo artes e faço o social media da empresa Anonymous Cantos.</li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}
