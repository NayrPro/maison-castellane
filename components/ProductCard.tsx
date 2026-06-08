'use client'

import { useState } from 'react'
import type { Product } from '@/types'
import { useCart } from './CartContext'

interface Props {
  product: Product
  onAddToast: (name: string) => void
}

export default function ProductCard({ product, onAddToast }: Props) {
  const [hovered, setHovered] = useState(false)
  const { dispatch } = useCart()

  const handleAdd = () => {
    dispatch({ type: 'ADD', product })
    onAddToast(product.name)
  }

  const isGradient = product.bgColor?.startsWith('linear')

  return (
    <article
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ background: 'var(--creme)', position: 'relative', overflow: 'hidden', cursor: 'pointer' }}
    >
      {/* Image area */}
      <div style={{
        aspectRatio: '4/3', overflow: 'hidden', position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: isGradient ? product.bgColor : (product.bgColor ?? 'var(--creme-dark)'),
      }}>
        <span style={{
          fontSize: '4.5rem', lineHeight: 1, display: 'block',
          transition: 'transform 0.5s cubic-bezier(.25,.46,.45,.94)',
          transform: hovered ? 'scale(1.06)' : 'scale(1)',
        }}>
          {product.emoji}
        </span>
        {product.badge && (
          <span style={{
            position: 'absolute', top: '1rem', left: '1rem',
            background: 'var(--terra)', color: 'var(--white)',
            fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase',
            padding: '0.25rem 0.6rem',
          }}>
            {product.badge}
          </span>
        )}
      </div>

      {/* Body */}
      <div style={{ padding: '1.4rem 1.4rem 1.6rem' }}>
        <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-soft)', marginBottom: '0.4rem' }}>
          {product.origin}
        </div>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '0.4rem', lineHeight: 1.25 }}>
          {product.name}
        </div>
        <div style={{ fontSize: '0.82rem', color: 'var(--text-soft)', fontWeight: 300, marginBottom: '1.1rem', lineHeight: 1.55 }}>
          {product.description}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600 }}>
            {product.price.toFixed(2).replace('.', ',')} €
          </div>
          <button
            onClick={handleAdd}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
              background: 'var(--olive)', color: 'var(--white)', border: 'none',
              padding: '0.55rem 1rem', fontSize: '0.72rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', cursor: 'pointer',
              opacity: hovered ? 1 : 0,
              transform: hovered ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.25s, transform 0.25s, background 0.2s',
              fontFamily: 'inherit',
            }}
          >
            + Ajouter
          </button>
        </div>
      </div>
    </article>
  )
}
