import Layout from '../components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import { useState } from 'react'

export default function Home({ litters }) {
  const [formStatus, setFormStatus] = useState('idle')
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', breed: '', message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFormStatus('sending')
    const body = new URLSearchParams({ 'form-name': 'puppy-application', ...formData })
    try {
      await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: body.toString() })
      setFormStatus('success')
    } catch {
      setFormStatus('error')
    }
  }

  return (
    <Layout title="Home">

      {/* HERO */}
      <section style={{ background: '#111', borderBottom: '3px solid #cc0000', padding: '6rem 4rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', maxWidth: 1200, margin: '0 auto' }}>
        <div>
          <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '1.5rem' }}>Columbia City, Indiana · Est. 2019</span>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Family-Raised<br /><em style={{ fontStyle: 'italic', color: '#cc0000' }}>Doodle Puppies</em><br />with Love
          </h1>
          <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: 1.8, maxWidth: 480, marginBottom: '2.5rem' }}>
            35+ years of animal husbandry. 16 family members. One 9-acre farm in the heart of Indiana, 
            where every puppy is raised with intention, warmth, and generations of care.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/litters" className="btn-primary">View Available Litters</Link>
            <Link href="#apply" className="btn-secondary" style={{ color: '#fff', borderColor: '#555' }}>Apply Now</Link>
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
          {[
            { n: '35+', l: 'Years Experience' },
            { n: '16', l: 'Family Members' },
            { n: '9', l: 'Acre Farm' },
            { n: '6', l: 'Doodle Breeds' },
          ].map(s => (
            <div key={s.n} style={{ border: '1px solid #333', borderRadius: 4, padding: '1.5rem', textAlign: 'center' }}>
              <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.8rem', fontWeight: 300, color: '#cc0000', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '0.7rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#666', marginTop: '0.5rem' }}>{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section style={{ background: '#f7f7f7', borderBottom: '1px solid #e5e5e5', padding: '4rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '1rem' }}>Our Story</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 300, color: '#111', marginBottom: '1.5rem', lineHeight: 1.2 }}>
              More Than a Breeder —<br /><em style={{ fontStyle: 'italic', color: '#cc0000' }}>A Family Tradition</em>
            </h2>
            <p style={{ color: '#555', lineHeight: 1.9, marginBottom: '1rem', fontSize: '0.95rem' }}>
              The Yarnelle family has dedicated over 35 years to raising animals with care and integrity. 
              Our 9-acre farm in Columbia City, Indiana is home to six generations of family knowledge — 
              from John and Kathy's equine background to Brooke's passion for doodle breeds.
            </p>
            <p style={{ color: '#555', lineHeight: 1.9, marginBottom: '2rem', fontSize: '0.95rem' }}>
              Every puppy is whelped in our heated nursery, socialized with children and other animals, 
              and goes home health-checked, vaccinated, and dewormed — with a puppy packet and our ongoing support.
            </p>
            <Link href="/about" className="btn-secondary">Meet the Family →</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { icon: '🏡', title: 'Home-Raised', desc: 'Puppies live in our home and nursery — never in kennels or cages.' },
              { icon: '🩺', title: 'Health Guaranteed', desc: 'All puppies are vet-checked, vaccinated, dewormed, and microchipped before going home.' },
              { icon: '✈️', title: 'Transport Available', desc: 'We offer ground and air transport via Puppy Nanny for out-of-state families.' },
              { icon: '💬', title: 'Lifetime Support', desc: 'Our family is always available — call, text, or email us anytime.' },
            ].map(f => (
              <div key={f.title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start', padding: '1rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 4 }}>
                <span style={{ fontSize: '1.5rem', flexShrink: 0 }}>{f.icon}</span>
                <div>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#111', marginBottom: '0.2rem' }}>{f.title}</div>
                  <div style={{ fontSize: '0.85rem', color: '#777', lineHeight: 1.6 }}>{f.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AVAILABLE LITTERS */}
      <section style={{ background: '#fff', padding: '5rem 4rem' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Ready & Coming Soon</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 300, color: '#111' }}>
              Available <em style={{ fontStyle: 'italic', color: '#cc0000' }}>Litters</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '3rem' }}>
            {litters.map(litter => (
              <Link key={litter.slug} href={`/litters/${litter.slug}`} style={{ textDecoration: 'none', border: '1px solid #e5e5e5', borderRadius: 4, overflow: 'hidden', display: 'block', transition: 'border-color 0.2s, box-shadow 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#cc0000'; e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.08)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e5e5e5'; e.currentTarget.style.boxShadow = 'none' }}>
                <div style={{ background: '#f7f7f7', padding: '2rem', borderBottom: '1px solid #e5e5e5' }}>
                  <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#aaa', marginBottom: '0.5rem' }}>{litter.generation} · {litter.breeder}</div>
                  <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', fontWeight: 400, color: '#111', marginBottom: '0.25rem' }}>{litter.title}</h3>
                  <div style={{ fontFamily: 'Cormorant Garamond, serif', color: '#cc0000', fontStyle: 'italic', fontSize: '1.1rem' }}>{litter.priceRange}</div>
                </div>
                <div style={{ padding: '1.25rem 2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontSize: '0.75rem', color: '#777' }}>Take Home: <strong style={{ color: '#111' }}>{litter.takeHomeDate || 'TBD'}</strong></div>
                    <div style={{ fontSize: '0.75rem', color: '#777', marginTop: '0.2rem' }}>{litter.puppies?.length || 0} {litter.puppies?.length === 1 ? 'puppy' : 'puppies'} listed</div>
                  </div>
                  <span style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#cc0000' }}>View →</span>
                </div>
              </Link>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/litters" className="btn-primary">View All Litters</Link>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: '#111', padding: '5rem 4rem', borderTop: '3px solid #cc0000' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Simple & Transparent</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 300, color: '#fff' }}>
              How to <em style={{ fontStyle: 'italic', color: '#cc0000' }}>Adopt</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '1.5rem' }}>
            {[
              { n: '01', title: 'Browse Litters', desc: 'Explore available and upcoming litters on our Available Litters page.' },
              { n: '02', title: 'Submit Application', desc: 'Fill out our simple adoption application to tell us about your family.' },
              { n: '03', title: 'Reserve with Deposit', desc: 'A $200 deposit holds your spot and is applied toward the puppy price.' },
              { n: '04', title: 'Pick Your Puppy', desc: 'We match you based on temperament, or you select from available puppies.' },
              { n: '05', title: 'Go Home Together', desc: 'Puppy goes home with health records, first vaccines, and our full support.' },
            ].map(step => (
              <div key={step.n} style={{ textAlign: 'center', padding: '1.5rem 1rem' }}>
                <div style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', fontWeight: 300, color: '#333', lineHeight: 1, marginBottom: '1rem' }}>{step.n}</div>
                <div style={{ width: 1, height: 24, background: '#cc0000', margin: '0 auto 1rem' }}></div>
                <h4 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '0.5rem' }}>{step.title}</h4>
                <p style={{ fontSize: '0.82rem', color: '#666', lineHeight: 1.7 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" style={{ background: '#f7f7f7', padding: '5rem 4rem', borderTop: '1px solid #e5e5e5' }}>
        <div style={{ maxWidth: 700, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: '#cc0000', marginBottom: '0.75rem' }}>Take the First Step</span>
            <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 'clamp(2rem, 3vw, 2.8rem)', fontWeight: 300, color: '#111' }}>
              Apply to <em style={{ fontStyle: 'italic', color: '#cc0000' }}>Adopt</em>
            </h2>
            <p style={{ color: '#777', marginTop: '1rem', fontSize: '0.9rem' }}>We respond to every application within 24–48 hours.</p>
          </div>

          {formStatus === 'success' ? (
            <div style={{ background: '#fff', border: '1px solid #e5e5e5', borderRadius: 4, padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🐾</div>
              <h3 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.8rem', fontWeight: 300, color: '#111', marginBottom: '1rem' }}>Application Received!</h3>
              <p style={{ color: '#777', fontSize: '0.9rem' }}>Thank you! We'll be in touch within 24–48 hours to discuss next steps.</p>
            </div>
          ) : (
            <form
              name="puppy-application"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem', background: '#fff', border: '1px solid #e5e5e5', borderRadius: 4, padding: '2.5rem' }}
            >
              <input type="hidden" name="form-name" value="puppy-application" />
              <input type="hidden" name="bot-field" />

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                {[
                  { name: 'name', label: 'Full Name', type: 'text', required: true },
                  { name: 'email', label: 'Email Address', type: 'email', required: true },
                  { name: 'phone', label: 'Phone Number', type: 'tel', required: false },
                ].map(f => (
                  <div key={f.name} style={f.name === 'name' ? {} : {}}>
                    <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#777', marginBottom: '0.4rem' }}>{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      required={f.required}
                      value={formData[f.name]}
                      onChange={e => setFormData(p => ({ ...p, [f.name]: e.target.value }))}
                      style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e5e5', borderRadius: 2, fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', outline: 'none', background: '#fafafa' }}
                    />
                  </div>
                ))}
                <div>
                  <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#777', marginBottom: '0.4rem' }}>Breed Interest</label>
                  <select
                    name="breed"
                    value={formData.breed}
                    onChange={e => setFormData(p => ({ ...p, breed: e.target.value }))}
                    style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e5e5', borderRadius: 2, fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', outline: 'none', background: '#fafafa' }}
                  >
                    <option value="">Select a breed...</option>
                    <option>Bernedoodle</option>
                    <option>Saint Berdoodle</option>
                    <option>Goldendoodle</option>
                    <option>Aussiedoodle</option>
                    <option>Colliedoodle</option>
                    <option>Cavapoo</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#777', marginBottom: '0.4rem' }}>Tell Us About Your Family</label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  placeholder="Your living situation, experience with dogs, what you're looking for..."
                  style={{ width: '100%', padding: '0.75rem', border: '1px solid #e5e5e5', borderRadius: 2, fontFamily: 'Jost, sans-serif', fontSize: '0.9rem', outline: 'none', background: '#fafafa', resize: 'vertical' }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={formStatus === 'sending'}
                style={{ marginTop: '0.5rem', width: '100%', textAlign: 'center', opacity: formStatus === 'sending' ? 0.7 : 1 }}
              >
                {formStatus === 'sending' ? 'Sending...' : 'Submit Application'}
              </button>
              {formStatus === 'error' && <p style={{ color: '#cc0000', fontSize: '0.85rem', textAlign: 'center' }}>Something went wrong. Please email us directly at yarnellefurbabies@gmail.com</p>}
            </form>
          )}
        </div>
      </section>

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
