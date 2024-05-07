import { agrandir, montserrat } from '@/app/fonts'
import { cn } from '@/lib/util'

export function About() {
  return (
    <section id="about" className="w-full grid grid-cols-2 py-20">
      <h2 className={cn(agrandir.className, 'text-5xl font-bold text-[#FF8A00]')}>quem eu sou</h2>
      <div className={cn(montserrat.className, 'space-y-4 text-justify')}>
        <p>
          Olá! Meu nome é Guilherme, tenho 22 anos e sou designer. Meus amigos me apelidaram de Dodge na infância, é
          assim que a maioria das pessoas me chamam hoje, e até prefiro que me chamem assim.{' '}
        </p>
        <p>
          Adoro interagir com as pessoas, sair com os amigos, aproveitar o tempo com minha namorada e viver a vida
          aproveitando ao máximo. Sou apaixonado com música, em tocar violão e assistir filmes. Gosto também de jogar
          jogos eletrônicos, mas só quando me resta um tempinho.
        </p>
        <p>
          Hoje o que eu mais gosto de trabalhar é Web Design. Sempre gostei muito de desenvolver telas e entregar ao
          usuário a melhor experiência possível através delas. Graças ao curso de Ciência da Computação que iniciei pude
          descobri o Front-End junto com UX/UI. Sendo assim, não dei segmento ao curso e migrei para Design.
        </p>
        <p>
          Estou graduando em Design pela Universidade FUMEC, e o curso conta com uma estrutura curricular diferenciada,
          que conta com a integração das áreas do Design Gráfico, Design de Interiores e Design de Produto. O curso da a
          oportunidade de construção do auto conhecimento e aquisição de experiências necessárias para a atuação no
          mercado de trabalho dentro do Design.
        </p>
        <p>
          Atualmente estou morando em Belo Horizonte, Minas Gerais - Brasil, e sou Designer UX/UI Júnior pela empresa
          IN8. Ja atuei como Designer Gráfico, Marketing e Social Media.
        </p>
      </div>
    </section>
  )
}
