import { readFileSync } from 'fs'
import { resolve } from 'path'

export async function GET() {
  const path = resolve('public/guilherme-ferraz.pdf')
  const pdf = readFileSync(path)

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'file-name': 'guilherme-ferraz.pdf',
    },
  })
}
