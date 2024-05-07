import React from 'react'

import { cn } from '@/lib/util'

interface NavButtonProps extends React.HTMLProps<HTMLAnchorElement> {
  href: string
  children: React.ReactNode
}

export function NavButton({ href, children, className, ...props }: NavButtonProps) {
  return (
    <a
      href={href}
      className={cn('px-5 py-2.5 border border-[#FF6B00] text-[#FF6B00] rounded-full font-bold text-base ', className)}
      {...props}
    >
      {children}
    </a>
  )
}
