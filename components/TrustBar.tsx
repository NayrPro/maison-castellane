const items = [
  { icon: '🚚', text: 'Livraison offerte dès 45 €' },
  { icon: '🌿', text: 'Produits 100 % artisanaux' },
  { icon: '🔒', text: 'Paiement 100 % sécurisé' },
  { icon: '↩️', text: 'Retour sous 14 jours' },
]

export default function TrustBar() {
  return (
    <div style={{
      background: 'var(--olive)', padding: '1.1rem 5vw',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      gap: '3rem', flexWrap: 'wrap',
    }}>
      {items.map((item, i) => (
        <>
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', color: 'var(--white)' }}>
            <span style={{ fontSize: '1.1rem' }}>{item.icon}</span>
            <span style={{ fontSize: '0.78rem', letterSpacing: '0.1em', whiteSpace: 'nowrap' }}>
              {item.text}
            </span>
          </div>
          {i < items.length - 1 && (
            <div key={`sep-${i}`} style={{ width: '1px', height: '24px', background: 'rgba(255,255,255,0.25)' }} />
          )}
        </>
      ))}
    </div>
  )
}
