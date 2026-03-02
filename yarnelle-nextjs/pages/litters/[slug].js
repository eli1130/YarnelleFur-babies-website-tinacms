import Layout from '../../components/Layout'
import Link from 'next/link'
import fs from 'fs'
import path from 'path'
import styles from '../../styles/litter.module.css'

export default function LitterPage({ litter }) {
  if (!litter) return <Layout title="Not Found"><p>Litter not found.</p></Layout>

  return (
    <Layout title={litter.title}>

      {/* HERO */}
      <section className={styles.hero}>
        <Link href="/" className={styles.backLink}>← Back to All Puppies</Link>
        <span className={styles.breederTag}>{litter.breeder} · {litter.generation}</span>
        <h1>{litter.title}</h1>
        <div className={styles.price}>{litter.priceRange}</div>
      </section>

      {/* BODY */}
      <div className={styles.body}>
        <main className={styles.main}>

          {/* PUPPY PHOTOS */}
          <h2 className={styles.sectionTitle}>Current Litter — {litter.litterTitle}</h2>
          <div className={styles.puppyGrid}>
            {litter.puppies?.map((puppy, i) =>
              puppy.photos?.map((photo, j) => (
                <img key={`${i}-${j}`} src={photo.src} alt={puppy.name} />
              ))
            )}
          </div>

          {/* LITTER DETAILS */}
          <h2 className={styles.sectionTitle}>Litter Details</h2>
          <div className={styles.detailsGrid}>
            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Date of Birth</span>
              <div>{litter.dateOfBirth}</div>
            </div>
            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Take Home Date</span>
              <div>{litter.takeHomeDate}</div>
            </div>
            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Estimated Size</span>
              <div>{litter.estimatedSize}</div>
            </div>
            <div className={styles.detailBox}>
              <span className={styles.detailLabel}>Grooming</span>
              <div>{litter.grooming}</div>
            </div>
            <div className={`${styles.detailBox} ${styles.full}`}>
              <span className={styles.detailLabel}>Temperament</span>
              <div>{litter.temperament}</div>
            </div>
          </div>

          {/* AVAILABLE PUPPIES */}
          <h2 className={styles.sectionTitle}>Available Puppies</h2>
          <div className={styles.puppiesList}>
            {litter.puppies?.map((puppy, i) => (
              <div key={i} className={styles.puppyRow}>
                <span className={styles.puppyName}>{puppy.name}</span>
                <span className={styles.puppyGender}>{puppy.gender}</span>
                {puppy.status !== 'Available' && (
                  <span className={`${styles.puppyStatus} ${puppy.status === 'Reserved' ? styles.reserved : ''}`}>
                    {puppy.status}
                  </span>
                )}
                <span className={styles.puppyPrice}>{puppy.price}</span>
              </div>
            ))}
          </div>

          {/* MEET THE PARENTS */}
          <h2 className={styles.sectionTitle}>Meet the Parents</h2>
          <div className={styles.parentsGrid}>
            <div className={styles.parentCard}>
              {litter.damPhoto && <img src={litter.damPhoto} alt={litter.damName} />}
              <div className={styles.parentCardBody}>
                <span className={styles.parentRole}>Dam</span>
                <div className={styles.parentName}>{litter.damName}</div>
                <div className={styles.parentDesc}>{litter.damDesc}</div>
              </div>
            </div>
            <div className={styles.parentCard}>
              {litter.sirePhoto && <img src={litter.sirePhoto} alt={litter.sireName} />}
              <div className={styles.parentCardBody}>
                <span className={styles.parentRole}>Sire</span>
                <div className={styles.parentName}>{litter.sireName}</div>
                <div className={styles.parentDesc}>{litter.sireDesc}</div>
              </div>
            </div>
          </div>

          {/* PREVIOUS PUPPIES */}
          {litter.previousPuppies?.length > 0 && (
            <>
              <h2 className={styles.sectionTitle}>Previous {litter.title} Puppies</h2>
              <div className={styles.prevGrid}>
                {litter.previousPuppies.map((photo, i) => (
                  <img key={i} src={photo.src} alt={photo.alt || 'Previous puppy'} />
                ))}
              </div>
            </>
          )}

        </main>

        {/* SIDEBAR */}
        <aside className={styles.sidebar}>
          <div className={styles.quickFacts}>
            <div className={styles.quickFactsTitle}>Quick Facts</div>
            <div className={styles.factRow}><span>Generation</span><span>{litter.generation}</span></div>
            <div className={styles.factRow}><span>Size</span><span>{litter.estimatedSize}</span></div>
            <div className={styles.factRow}><span>Deposit</span><span>{litter.deposit}</span></div>
            <div className={styles.factRow}><span>Ready</span><span>{litter.takeHomeDate}</span></div>
            <div className={styles.factRow}><span>Contact</span><span>{litter.contact}</span></div>
          </div>
          <div className={styles.reserveBox}>
            <div className={styles.reserveTitle}>Reserve a Puppy</div>
            <a href="https://cash.app/$YarnelleFurBabies1" target="_blank" rel="noopener" className={styles.btnReserve}>
              Reserve via CashApp
            </a>
            <Link href="/#apply" className={styles.btnApply}>Submit Application</Link>
            <p className={styles.reserveNote}>
              Accepting {litter.deposit} deposits now. Nonrefundable but transferable. Deposit goes toward total cost.
            </p>
          </div>
        </aside>
      </div>

    </Layout>
  )
}

export async function getStaticPaths() {
  const littersDir = path.join(process.cwd(), 'content/litters')
  let slugs = []
  try {
    const files = fs.readdirSync(littersDir)
    slugs = files.map(f => f.replace('.json', ''))
  } catch (e) {}
  return {
    paths: slugs.map(slug => ({ params: { slug } })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  try {
    const filePath = path.join(process.cwd(), 'content/litters', `${params.slug}.json`)
    const raw = fs.readFileSync(filePath, 'utf8')
    return { props: { litter: JSON.parse(raw) } }
  } catch (e) {
    return { notFound: true }
  }
}
