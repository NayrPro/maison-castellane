'use client'

import { useEffect, useState } from 'react'
import { useCart } from './CartContext'

export default function Header() {
  const { state } = useCart()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '0 5vw', height: '72px',
        background: 'rgba(245, 240, 232, 0.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border)',
        boxShadow: scrolled ? '0 2px 20px rgba(0,0,0,0.08)' : 'none',
        transition: 'box-shadow 0.3s',
      }}
    >
      <div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, letterSpacing: '0.04em', lineHeight: 1 }}>
          Maison Castellane
        </div>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-soft)', fontWeight: 300 }}>
          Épicerie fine · Provence
        </div>
      </div>

      <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
        {['#boutique', '#histoire', '#avis'].map((href, i) => (
          <a key={href} href={href} style={{
            fontSize: '0.8rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            fontWeight: 400, color: 'var(--text-mid)', textDecoration: 'none',
          }}>
            {['Boutique', 'Notre histoire', 'Avis'][i]}
          </a>
        ))}
        <a href="#boutique" style={{
          display: 'flex', alignItems: 'center', gap: '0.4rem',
          background: 'var(--olive)', color: 'var(--white)',
          padding: '0.5rem 1.1rem', fontSize: '0.8rem',
          letterSpacing: '0.14em', textTransform: 'uppercase',
          textDecoration: 'none', fontWeight: 400,
        }}>
          🛒 Panier ({state.count})
        </a>
      </nav>
    </header>
  )
}
