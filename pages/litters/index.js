import Layout from '../../components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'

export default function LittersIndex({ litters }) {
  return (
    <Layout title="Available Litters">
      <section style={{ background: '#111', padding: '5rem 4rem', borderBottom: '3px solid #cc0000', textAlign: 'center' }}>
        <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '1rem' }}>Available Now</span>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#fff', marginBottom: '1rem' }}>
          Available <em style={{ fontStyle: 'italic', color: '#cc0000' }}>Litters</em>
        </h1>
        <p style={{ color: '#aaa', fontSize: '1rem', maxWidth: 580, margin: '0 auto' }}>
          Click any litter to view puppies, meet the parents, and reserve your spot.
        </p>
      </section>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '4rem', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
        {litters.map(litter => (
          <Link key={litter.slug} href={`/litters/${litter.slug}`} style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: 4, overflow: 'hidden', display: 'block', transition: 'border-color 0.2s' }}>
            <div style={{ padding: '1.5rem' }}>
              <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.5rem' }}>{litter.breeder}</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.4rem', fontWeight: 400, color: '#111', marginBottom: '0.5rem' }}>{litter.title}</h3>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', color: '#cc0000', fontStyle: 'italic', marginBottom: '0.5rem' }}>{litter.priceRange}</div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cc0000', marginTop: '1rem' }}>View Litter →</div>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const littersDir = path.join(process.cwd(), 'content/litters')
  const files = fs.readdirSync(littersDir)
  const litters = files.map(f => {
    const raw = fs.readFileSync(path.join(littersDir, f), 'utf8')
    return JSON.parse(raw)
  })
  return { props: { litters } }
}
