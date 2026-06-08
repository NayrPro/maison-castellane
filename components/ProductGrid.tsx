'use client'

import { useState, useEffect } from 'react'
import { products } from '@/data'
import ProductCard from './ProductCard'

export default function ProductGrid() {
  const [toast, setToast] = useState<string | null>(null)
  const [visible, setVisible] = useState(false)

  const showToast = (name: string) => {
    setToast(name)
    setVisible(true)
    setTimeout(() => setVisible(false), 2800)
  }

  return (
    <>
      <section id="boutique" style={{ background: 'var(--white)', padding: '7rem 8vw' }}>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3.5rem', flexWrap: 'wrap', gap: '1rem' }}>
          <div>
            <div className="eyebrow">Sélection du mois</div>
            <h2 className="section-title">Nos <em>produits phares</em></h2>
          </div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', maxWidth: '440px', fontWeight: 300 }}>
            Chaque produit est sélectionné directement auprès de producteurs engagés, pour vous garantir qualité et authenticité.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }}>
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onAddToast={showToast} />
          ))}
        </div>
      </section>

      {/* Toast */}
      <div style={{
        position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 200,
        background: 'var(--olive)', color: 'var(--white)',
        padding: '0.9rem 1.4rem', fontSize: '0.82rem',
        display: 'flex', alignItems: 'center', gap: '0.6rem',
        boxShadow: '0 8px 24px rgba(0,0,0,0.18)',
        transform: visible ? 'translateY(0)' : 'translateY(100px)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.35s, opacity 0.35s',
        pointerEvents: 'none',
      }}>
        ✅ &ldquo;{toast}&rdquo; ajouté au panier
      </div>
    </>
  )
}
