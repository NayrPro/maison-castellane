import { reviews } from '@/data'

export default function Reviews() {
  return (
    <section id="avis" style={{ background: 'var(--olive)', padding: '7rem 8vw' }}>
      <div style={{ color: '#a8c490', fontSize: '0.68rem', letterSpacing: '0.28em', textTransform: 'uppercase', marginBottom: '0.8rem', display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <span style={{ display: 'block', width: '24px', height: '1px', background: '#a8c490' }} />
        Ce que disent nos clients
      </div>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', fontWeight: 300, color: 'var(--white)', marginBottom: '3.5rem', lineHeight: 1.2 }}>
        Ils ont <em style={{ fontStyle: 'italic', color: '#a8c490' }}>goûté</em>,<br />ils ont adoré.
      </h2>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px' }}>
        {reviews.map((r) => (
          <div key={r.id} style={{
            background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.12)',
            padding: '2rem', position: 'relative',
          }}>
            <div style={{ position: 'absolute', top: '1.5rem', right: '1.8rem', fontFamily: 'var(--font-display)', fontSize: '4rem', color: 'rgba(255,255,255,0.06)', lineHeight: 1 }}>
              "
            </div>
            <div style={{ color: '#d4a017', fontSize: '1rem', letterSpacing: '2px', marginBottom: '1.2rem' }}>★★★★★</div>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontStyle: 'italic', color: 'rgba(255,255,255,0.88)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              « {r.text} »
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
              <div style={{
                width: '38px', height: '38px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '1.1rem', background: 'rgba(255,255,255,0.1)',
              }}>
                {r.avatar}
              </div>
              <div>
                <div style={{ fontSize: '0.8rem', fontWeight: 500, color: 'rgba(255,255,255,0.9)', letterSpacing: '0.05em' }}>{r.author}</div>
                <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.45)', marginTop: '0.1rem' }}>{r.location}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
