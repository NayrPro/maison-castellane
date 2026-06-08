import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import { CartProvider } from '@/components/CartContext'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Maison Castellane — Épicerie fine provençale',
  description: 'Huiles d\'olive AOP, miels de garrigue, tapenades maison. Producteurs locaux, livraison partout en France.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
