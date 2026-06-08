export default function Hero() {
  const badges = [
    { num: '34', label: 'Producteurs partenaires' },
    { num: '4.9', label: 'Note moyenne clients' },
    { num: '+2 800', label: 'Commandes expédiées' },
  ]

  return (
    <section style={{ paddingTop: '72px' }}>
      <div style={{ background: '#2e3d24', padding: '56px 8vw 0', position: 'relative', overflow: 'hidden' }}>

        {/* Monogramme décoratif */}
        <div style={{
          position: 'absolute', top: '-10px', right: '4vw',
          fontSize: '200px', fontWeight: 700,
          color: 'rgba(255,255,255,0.03)',
          letterSpacing: '-8px', lineHeight: 1,
          pointerEvents: 'none', fontFamily: 'var(--font-display)',
          userSelect: 'none',
        }}>
          MC
        </div>

        {/* Ligne verticale décorative */}
        <div style={{
          position: 'absolute', top: 0, left: '50%',
          width: '1px', height: '100%',
          background: 'rgba(255,255,255,0.05)',
        }} />

        {/* Contenu centré */}
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Eyebrow */}
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            gap: '12px', marginBottom: '20px',
          }}>
            <div style={{ height: '1px', width: '32px', background: 'var(--terra)' }} />
            <span style={{
              fontSize: '0.68rem', letterSpacing: '0.26em', textTransform: 'uppercase',
              color: 'var(--terra)',
            }}>
              Terroir provençal depuis 1989
            </span>
            <div style={{ height: '1px', width: '32px', background: 'var(--terra)' }} />
          </div>

          {/* Titre */}
          <h1 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.6rem, 5vw, 3.8rem)',
            fontWeight: 300, lineHeight: 1.2,
            color: 'var(--creme)', marginBottom: '1.2rem',
          }}>
            Le goût authentique<br />
            de la <em style={{ fontStyle: 'italic', color: '#9aaf7a' }}>Provence</em>,<br />
            livré chez vous.
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '0.95rem', color: 'rgba(245,240,232,0.65)',
            lineHeight: 1.8, fontWeight: 300,
            marginBottom: '1.8rem',
            maxWidth: '400px', marginLeft: 'auto', marginRight: 'auto',
          }}>
            Huiles d'olive AOP, miels de garrigue, tapenades maison — nos producteurs
            locaux sélectionnent le meilleur du terroir provençal.
          </p>

          {/* CTAs */}
          <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', marginBottom: '2.2rem', flexWrap: 'wrap' }}>
            <a href="#boutique" className="btn-primary" style={{ background: '#9aaf7a', color: '#1a2712' }}>
              Découvrir la boutique →
            </a>
            <a href="#histoire" style={{
              display: 'inline-flex', alignItems: 'center',
              border: '1px solid rgba(245,240,232,0.25)', color: 'var(--creme)',
              padding: '0.9rem 2rem', fontSize: '0.8rem',
              letterSpacing: '0.16em', textTransform: 'uppercase',
              textDecoration: 'none', fontWeight: 400,
            }}>
              Notre histoire
            </a>
          </div>

          {/* Avis card */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '14px',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '4px', padding: '12px 20px',
            marginBottom: '40px',
          }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ color: '#d4a017', fontSize: '0.7rem', letterSpacing: '3px', marginBottom: '4px' }}>
                ★★★★★
              </div>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '0.95rem',
                fontStyle: 'italic', color: 'rgba(245,240,232,0.85)', lineHeight: 1.5,
              }}>
                « La meilleure huile que j'ai jamais goûtée. »
              </div>
            </div>
            <div style={{ width: '1px', height: '36px', background: 'rgba(255,255,255,0.15)', flexShrink: 0 }} />
            <div style={{ fontSize: '0.72rem', color: 'rgba(245,240,232,0.45)', whiteSpace: 'nowrap', lineHeight: 1.6 }}>
              Sophie M.<br />Lyon
            </div>
          </div>
        </div>

        {/* Barre de badges */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          borderTop: '1px solid rgba(255,255,255,0.08)',
          margin: '0 -8vw',
        }}>
          {badges.map((b, i) => (
            <div key={b.label} style={{
              padding: '1.2rem 0', textAlign: 'center',
              borderRight: i < badges.length - 1 ? '1px solid rgba(255,255,255,0.08)' : 'none',
            }}>
              <div style={{
                fontFamily: 'var(--font-display)', fontSize: '1.5rem',
                fontWeight: 600, color: 'var(--terra)',
              }}>
                {b.num}
              </div>
              <div style={{
                fontSize: '0.68rem', letterSpacing: '0.14em',
                textTransform: 'uppercase', color: 'rgba(245,240,232,0.4)',
                marginTop: '3px',
              }}>
                {b.label}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}