import { Montserrat } from 'next/font/google'
import localFont from 'next/font/local'

export const agrandir = localFont({
  src: [
    {
      path: '../assets/fonts/Agrandir-TextBold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../assets/fonts/Agrandir-Regular.otf',
      weight: '400',
      style: 'normal',
    },
  ],
})

export const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})
