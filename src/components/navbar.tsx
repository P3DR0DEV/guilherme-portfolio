import { NavButton } from './nav-button'
import { NavLink } from './nav-link'

export function Navbar() {
  return (
    <nav className="flex gap-6 p-5 items-center justify-center fixed w-full bg-black z-20 ">
      <NavLink href="#about">sobre mim</NavLink>
      <NavLink href="#works">trabalhos</NavLink>
      <NavLink href="/api/download-pdf" download="guilherme-ferraz.pdf">
        currículo
      </NavLink>
      <NavButton
        href="https://www.linkedin.com/in/guilherme-ferraz-de-carvalho/"
        target="_blank"
        className="hover:text-black hover:bg-[#FF6B00]"
      >
        LinkedIn
      </NavButton>
    </nav>
  )
}
