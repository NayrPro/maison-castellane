const cols = [
  {
    title: 'Boutique',
    links: ["Huiles d'olive", 'Miels & confitures', 'Épices & condiments', 'Bien-être & beauté', 'Coffrets cadeaux'],
  },
  {
    title: 'Informations',
    links: ['Notre histoire', 'Nos producteurs', 'Blog & recettes', 'Presse', 'Contact'],
  },
  {
    title: 'Aide',
    links: ['Livraison & délais', 'Retours & échanges', 'FAQ', 'Mentions légales', 'Politique RGPD'],
  },
]

export default function Footer() {
  return (
    <footer style={{ background: 'var(--text)', color: 'rgba(255,255,255,0.55)', padding: '4rem 8vw 2.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem', marginBottom: '3.5rem' }}>
        {/* Brand */}
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 600, color: 'var(--white)', marginBottom: '0.3rem' }}>
            Maison Castellane
          </div>
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>
            Épicerie fine · Provence
          </div>
          <p style={{ fontSize: '0.82rem', lineHeight: 1.65, fontWeight: 300 }}>
            Producteurs locaux engagés,<br />saveurs authentiques du terroir,<br />livrés partout en France.
          </p>
          <div style={{ display: 'flex', gap: '0.8rem', marginTop: '1.2rem' }}>
            {['📸', '📘', '📌'].map((icon) => (
              <div key={icon} style={{
                width: '32px', height: '32px',
                border: '1px solid rgba(255,255,255,0.15)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.9rem', cursor: 'pointer',
              }}>
                {icon}
              </div>
            ))}
          </div>
        </div>

        {/* Cols */}
        {cols.map((col) => (
          <div key={col.title}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--white)', marginBottom: '1.2rem', fontWeight: 500 }}>
              {col.title}
            </div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#" style={{ textDecoration: 'none', color: 'rgba(255,255,255,0.45)', fontSize: '0.82rem', fontWeight: 300 }}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.8rem', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.25)' }}>
          © 2025 Maison Castellane · SARL · Maussane-les-Alpilles (13) · Tous droits réservés
        </div>
        <div style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>
          Projet démo — Développeur freelance Next.js / TypeScript
        </div>
      </div>
    </footer>
  )
}
