'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = () => {
    if (!email || !email.includes('@')) {
      setError(true)
      setTimeout(() => setError(false), 1500)
      return
    }
    setSubmitted(true)
  }

  return (
    <section id="newsletter" style={{ background: 'var(--creme-dark)', padding: '6rem 8vw', textAlign: 'center' }}>
      <div style={{ fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', color: 'var(--terra)', marginBottom: '0.8rem' }}>
        Restez informé
      </div>
      <h2 className="section-title" style={{ margin: '0 auto 0.5rem' }}>
        Les arrivages du <em>mois</em>,<br />en avant-première.
      </h2>
      <p style={{ color: 'var(--text-mid)', fontSize: '0.95rem', fontWeight: 300, maxWidth: '420px', margin: '0 auto 2.5rem' }}>
        Recevez nos sélections saisonnières, recettes provençales et offres exclusives réservées aux abonnés.
      </p>

      {submitted ? (
        <div style={{ fontSize: '1rem', color: 'var(--olive)', fontFamily: 'var(--font-display)', fontStyle: 'italic' }}>
          ✓ Merci ! Vous êtes bien inscrit à notre newsletter.
        </div>
      ) : (
        <>
          <div style={{ display: 'flex', maxWidth: '460px', margin: '0 auto' }}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.fr"
              style={{
                flex: 1, padding: '0.9rem 1.2rem',
                border: `1px solid ${error ? 'var(--terra)' : 'var(--border)'}`,
                borderRight: 'none', background: 'var(--white)',
                fontFamily: 'inherit', fontSize: '0.9rem', color: 'var(--text)',
                outline: 'none', transition: 'border-color 0.2s',
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                background: 'var(--terra)', color: 'var(--white)',
                border: '1px solid var(--terra)', padding: '0.9rem 1.5rem',
                fontFamily: 'inherit', fontSize: '0.75rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', fontWeight: 500, cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              S'abonner →
            </button>
          </div>
          <p style={{ fontSize: '0.72rem', color: 'var(--text-soft)', marginTop: '1rem' }}>
            Pas de spam. Désabonnement en un clic. Vos données restent chez nous.
          </p>
        </>
      )}
    </section>
  )
}
