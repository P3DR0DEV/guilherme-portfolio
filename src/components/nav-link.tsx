export function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="hover:underline transition ease-in-out delay-150 duration-500 decoration-[#FF6B00] underline-offset-8 font-light"
    >
      {children}
    </a>
  )
}
