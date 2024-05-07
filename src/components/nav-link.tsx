interface NavLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  children: React.ReactNode
  href: string
}

export function NavLink({ href, children, ...props }: NavLinkProps) {
  return (
    <a
      href={href}
      {...props}
      className="hover:underline transition ease-in-out delay-150 duration-500 decoration-[#FF6B00] underline-offset-8 font-light"
    >
      {children}
    </a>
  )
}
