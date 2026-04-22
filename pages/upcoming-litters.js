import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { client } from '../tina/__generated__/client';

export default function UpcomingLitters({ litters }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Upcoming Litters & Waitlist | Yarnelle Fur-Babies</title>
        <meta name="description" content="Get on the waitlist for upcoming doodle litters at Yarnelle Fur-Babies. See planned litters, meet the parents, and secure your spot before puppies arrive." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://pub-e847384c23164145a930ab957dbde017.r2.dev/IMG_5493_gvo13y.jpg" />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --white: #ffffff; --offwhite: #f7f7f7; --light-gray: #e5e5e5;
          --mid-gray: #aaaaaa; --black: #111111;
          --text: #1a1a1a; --text-light: #555555; --red: #cc0000; --red-dark: #aa0000;
        }
        html { scroll-behavior: smooth; }
        body { font-family: 'Jost', sans-serif; background: var(--white); color: var(--text); font-weight: 300; line-height: 1.7; }
        .announcement { background: var(--black); color: var(--white); text-align: center; padding: 0.6rem 1rem; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; }
        .announcement a { color: var(--white); text-decoration: underline; }
        nav { position: sticky; top: 0; z-index: 100; background: var(--white); border-bottom: 1px solid var(--light-gray); padding: 0 2rem; display: flex; align-items: center; justify-content: space-between; height: 68px; }
        .nav-logo { font-family: 'Cormorant Garamond', serif; font-size: 1.5rem; font-weight: 400; color: var(--black); text-decoration: none; letter-spacing: 0.02em; }
        .nav-logo span { color: var(--red); font-style: italic; }
        .nav-links { display: flex; align-items: center; gap: 2rem; list-style: none; }
        .nav-links a { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text); text-decoration: none; transition: color 0.2s; }
        .nav-links a:hover { color: var(--red); }
        .nav-links .nav-cta a { background: var(--red); color: var(--white); padding: 0.5rem 1.2rem; border-radius: 2px; }
        .nav-links .nav-cta a:hover { background: var(--red-dark); color: var(--white); }
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; background: none; border: none; padding: 4px; }
        .nav-hamburger span { display: block; width: 24px; height: 2px; background: var(--black); }
        .btn-primary { background: var(--red); color: #fff; padding: 0.85rem 2rem; text-decoration: none; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 2px; transition: background 0.2s; display: inline-block; cursor: pointer; border: none; font-family: 'Jost', sans-serif; }
        .btn-primary:hover { background: var(--red-dark); }
        .btn-secondary { border: 1px solid #555; color: #fff; padding: 0.85rem 2rem; text-decoration: none; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 2px; transition: all 0.2s; display: inline-block; cursor: pointer; background: none; font-family: 'Jost', sans-serif; }
        .btn-secondary:hover { border-color: #fff; }
        .page-hero { background: var(--black); padding: 5rem 4rem; text-align: center; border-bottom: 3px solid var(--red); }
        .page-hero .overline { display: block; font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; }
        .page-hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.8rem, 5vw, 4.5rem); font-weight: 300; color: var(--white); line-height: 1.1; margin-bottom: 1.25rem; }
        .page-hero h1 em { font-style: italic; color: var(--red); }
        .page-hero p { color: #aaa; font-size: 1rem; max-width: 560px; margin: 0 auto 2rem; line-height: 1.8; }
        .hero-buttons { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-header .overline { display: block; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); margin-bottom: 0.75rem; }
        .section-header h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 300; color: var(--black); line-height: 1.2; }
        .section-header h2 em { font-style: italic; color: var(--red); }
        .section-header p { margin-top: 1rem; color: var(--text-light); max-width: 540px; margin-left: auto; margin-right: auto; font-size: 0.95rem; }
        .litters-section { padding: 6rem 4rem; max-width: 1300px; margin: 0 auto; }
        .litters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
        .litter-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: 4px; overflow: hidden; transition: transform 0.25s, box-shadow 0.25s; cursor: pointer; text-decoration: none; color: inherit; display: block; }
        .litter-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .litter-card-image { position: relative; aspect-ratio: 4/3; overflow: hidden; background: var(--offwhite); }
        .litter-card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .litter-card:hover .litter-card-image img { transform: scale(1.04); }
        .coming-soon-badge { position: absolute; top: 0.75rem; right: 0.75rem; background: var(--black); color: white; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.3rem 0.65rem; border-radius: 2px; border-left: 2px solid var(--red); }
        .litter-card-body { padding: 1.25rem 1.4rem 1.5rem; }
        .litter-family { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--mid-gray); margin-bottom: 0.4rem; }
        .litter-card-body h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 400; color: var(--black); margin-bottom: 0.4rem; line-height: 1.2; }
        .litter-desc { font-size: 0.82rem; color: var(--text-light); line-height: 1.6; margin-bottom: 1rem; }
        .litter-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--light-gray); }
        .litter-date { font-family: 'Cormorant Garamond', serif; font-size: 1rem; color: var(--black); }
        .litter-waitlist { font-size: 0.7rem; letter-spacing: 0.08em; color: var(--red); text-transform: uppercase; }
        .view-litter { display: block; margin-top: 0.75rem; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-light); transition: color 0.2s; }
        .litter-card:hover .view-litter { color: var(--red); }
        .empty-state { text-align: center; padding: 5rem 2rem; border: 1px dashed var(--light-gray); border-radius: 4px; }
        .empty-state h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 300; margin-bottom: 0.75rem; color: var(--black); }
        .empty-state p { color: var(--text-light); font-size: 0.9rem; margin-bottom: 1.5rem; }
        footer { background: var(--black); border-top: 1px solid #222; padding: 3rem 4rem; }
        .footer-inner { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 3rem; }
        .footer-brand .nav-logo { display: block; margin-bottom: 1rem; color: var(--white); }
        .footer-brand .nav-logo span { color: var(--red); }
        .footer-brand p { font-size: 0.82rem; color: #666; line-height: 1.7; max-width: 260px; }
        .footer-col h5 { font-size: 0.68rem; letter-spacing: 0.18em; text-transform: uppercase; color: #666; margin-bottom: 1rem; }
        .footer-col a { display: block; font-size: 0.85rem; color: #aaa; text-decoration: none; margin-bottom: 0.5rem; transition: color 0.2s; }
        .footer-col a:hover { color: var(--white); }
        .footer-col p { font-size: 0.85rem; color: #aaa; line-height: 1.7; margin-bottom: 0.4rem; }
        .footer-bottom { max-width: 1200px; margin: 2.5rem auto 0; padding-top: 1.5rem; border-top: 1px solid #222; display: flex; justify-content: space-between; align-items: center; font-size: 0.75rem; color: #555; }
        @media (max-width: 900px) {
          nav { padding: 0 1.5rem; }
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .nav-links.open { display: flex; flex-direction: column; position: absolute; top: 68px; left: 0; right: 0; background: var(--white); border-bottom: 1px solid var(--light-gray); padding: 1.5rem 2rem; gap: 1.25rem; z-index: 99; }
          .page-hero { padding: 4rem 1.5rem; }
          .litters-section { padding: 4rem 1.5rem; }
          footer { padding: 3rem 1.5rem; }
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .footer-brand { grid-column: span 2; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      <div className="announcement">
        ✈ Out of State? We Offer Ground &amp; Air Transport via Puppy Nanny —{' '}
        <a href="tel:2604439035">Call Brooke: (260) 443-9035</a>
      </div>

      <nav>
        <Link href="/" className="nav-logo">Yarnelle <span>Fur-Babies</span></Link>
        <ul className={`nav-links${navOpen ? ' open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/gotjesus">Got Jesus?</Link></li>
          <li><Link href="/#litters">Available Litters</Link></li>
          <li><Link href="/upcoming-litters">Upcoming Litters &amp; Waitlist</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/facility">Our Facility</Link></li>
          <li><Link href="/faq">FAQ &amp; Products</Link></li>
          <li className="nav-cta"><Link href="/#apply">Apply Now</Link></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section className="page-hero">
        <span className="overline">Be First in Line</span>
        <h1>Upcoming Litters<br />&amp; <em>Waitlist</em></h1>
        <p>These litters are on the way — puppies aren't on the ground yet, but you can secure your spot now. Click any litter to meet the parents and get in line.</p>
        <div className="hero-buttons">
          <Link href="/#litters" className="btn-secondary">View Available Now</Link>
        </div>
      </section>

      <section className="litters-section">
        <div className="section-header">
          <span className="overline">Coming Soon</span>
          <h2>Litters <em>On the Way</em></h2>
          <p>Click any litter to meet the parents, see previous puppies, and secure your spot.</p>
        </div>

        {litters.length === 0 ? (
          <div className="empty-state">
            <h3>No upcoming litters right now</h3>
            <p>Check back soon — or submit an application and we'll contact you when a new litter is planned.</p>
            <Link href="/#apply" className="btn-primary">Submit an Application</Link>
          </div>
        ) : (
          <div className="litters-grid">
            {litters
              .filter(l => l.active !== false)
              .sort((a, b) => (a.sortOrder || 99) - (b.sortOrder || 99))
              .map((l, i) => {
                const cardPhoto = l.cardPhoto
                  ? l.cardPhoto.replace(/^\/uploads/, '').replace(/^https:\/\/assets\.tina\.io\/[a-f0-9-]+/, '')
                  : null;
                return (
                  <Link key={i} href={`/upcoming-litters/${l.slug || l.breed.toLowerCase().replace(/ /g, '-')}`} className="litter-card">
                    <div className="litter-card-image">
                      {cardPhoto && <img src={cardPhoto} alt={l.breed} />}
                      <span className="coming-soon-badge">Coming Soon</span>
                    </div>
                    <div className="litter-card-body">
                      <div className="litter-family">{l.breeder}</div>
                      <h3>{l.breed}</h3>
                      <p className="litter-desc">{l.cardDesc}</p>
                      <div className="litter-meta">
                        <span className="litter-date">{l.expectedDate}</span>
                        <span className="litter-waitlist">Join Waitlist</span>
                      </div>
                      <span className="view-litter">View Litter →</span>
                    </div>
                  </Link>
                );
              })}
          </div>
        )}
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">Yarnelle <span>Fur-Babies</span></Link>
            <p>Columbia City, Indiana &middot; Family-Raised Doodles with Love. Est. 2019.</p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/#litters">Available Litters</Link>
            <Link href="/upcoming-litters">Upcoming Litters</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/faq">FAQ &amp; Products</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <p>Brooke Labenz</p>
            <a href="tel:2604439035">(260) 443-9035</a>
            <a href="mailto:yarnellefurbabies@gmail.com">yarnellefurbabies@gmail.com</a>
          </div>
          <div className="footer-col">
            <h5>Follow Us</h5>
            <a href="https://www.instagram.com/yarnellefurbabies/" target="_blank" rel="noopener">📷 @yarnellefurbabies</a>
            <h5 style={{ marginTop: '1.5rem' }}>Faith</h5>
            <Link href="/gotjesus">Got Jesus? 🙏</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2025 Yarnelle Fur-Babies &middot; Columbia City, Indiana</span>
          <span>Family-Raised Doodles with Love</span>
        </div>
      </footer>
    </>
  );
}

export async function getStaticProps() {
  const { data } = await client.queries.upcomingLitterConnection();
  return {
    props: {
      litters: data.upcomingLitterConnection.edges.map(e => e.node),
    },
  };
}
