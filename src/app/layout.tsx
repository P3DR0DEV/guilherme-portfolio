import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { cn } from '@/lib/util'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Dodge Portfolio',
  description: 'Guilherme Ferraz de Carvalho Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={cn(inter.className, 'bg-[#252525]')}>{children}</body>
    </html>
  )
}
