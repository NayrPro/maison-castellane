const valeurs = [
  { icon: '🌿', title: 'Traçabilité', text: 'Chaque produit identifié avec son producteur et son terroir d\'origine.' },
  { icon: '🤝', title: 'Circuit court', text: 'Producteurs rémunérés à prix juste, sans intermédiaire superflu.' },
  { icon: '🏺', title: 'Savoir-faire', text: 'Méthodes artisanales préservées, refus de la production industrielle.' },
  { icon: '📦', title: 'Emballage', text: 'Cartons recyclés, calages en papier — zéro plastique superflu.' },
]

export default function Histoire() {
  return (
    <section id="histoire" style={{
      background: 'var(--creme)', padding: '7rem 8vw',
      display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6vw', alignItems: 'center',
    }}>
      {/* Visual */}
      <div style={{ position: 'relative' }}>
        <div style={{
          width: '100%', aspectRatio: '4/5',
          background: 'linear-gradient(145deg, #b8a88a 0%, #8fa870 50%, #4a5c3a 100%)',
          borderRadius: '2px', display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '7rem', position: 'relative', overflow: 'hidden',
        }}>
          🌿
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to bottom, transparent 50%, rgba(42,35,24,0.35) 100%)',
          }} />
        </div>
        {/* Year badge */}
        <div style={{
          position: 'absolute', bottom: '-1.5rem', right: '-1.5rem',
          width: '110px', height: '110px',
          background: 'var(--terra)', borderRadius: '50%',
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', color: 'var(--white)', textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, lineHeight: 1 }}>1989</div>
          <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase' }}>fondée en</div>
        </div>
      </div>

      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        <div className="eyebrow">Qui sommes-nous</div>
        <h2 className="section-title">
          Une famille,<br /><em>une passion</em> du terroir.
        </h2>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', fontWeight: 300, lineHeight: 1.8 }}>
          Tout a commencé dans l'oliveraie familiale des Alpilles, en 1989. Marthe et Pierre Castellane décident
          de ne vendre que ce qu'ils jugent digne de leur table — rien de plus, rien de moins.
        </p>
        <p style={{ fontSize: '0.95rem', color: 'var(--text-mid)', fontWeight: 300, lineHeight: 1.8 }}>
          Trente-cinq ans plus tard, nous travaillons avec 34 producteurs locaux qui partagent cette même exigence.
          Chaque produit que vous recevez a été goûté, approuvé et aimé avant d'entrer dans notre catalogue.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {valeurs.map((v) => (
            <div key={v.title} style={{
              background: 'var(--olive-pale)', padding: '1.1rem',
              borderLeft: '2px solid var(--olive)',
            }}>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--olive)', fontWeight: 500, marginBottom: '0.3rem' }}>
                {v.icon} {v.title}
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--text-mid)', fontWeight: 300 }}>{v.text}</div>
            </div>
          ))}
        </div>

        <div style={{
          fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontStyle: 'italic',
          color: 'var(--olive)', paddingTop: '0.5rem', borderTop: '1px solid var(--border)',
        }}>
          Marthe & Pierre Castellane
          <span style={{
            display: 'block', fontFamily: 'inherit', fontSize: '0.7rem',
            letterSpacing: '0.15em', textTransform: 'uppercase',
            color: 'var(--text-soft)', fontStyle: 'normal', marginTop: '0.3rem',
          }}>
            Fondateurs · Maussane-les-Alpilles
          </span>
        </div>
      </div>
    </section>
  )
}
