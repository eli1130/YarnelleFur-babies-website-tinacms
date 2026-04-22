import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { client } from '../../tina/__generated__/client';

export default function UpcomingLitterDetail({ litter }) {
  const [navOpen, setNavOpen] = useState(false);
  const [formData, setFormData] = useState({ 'first-name': '', 'last-name': '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    await fetch('https://formspree.io/f/mgonzeel', {
      method: 'POST',
      body: data,
      headers: { Accept: 'application/json' },
    });
    setSubmitted(true);
  }

  const fixUrl = (url) => url
    ? url.replace(/^\/uploads/, '').replace(/^https:\/\/assets\.tina\.io\/[a-f0-9-]+/, '')
    : null;

  const damPhoto = fixUrl(litter.damPhoto);
  const sirePhoto = fixUrl(litter.sirePhoto);

  return (
    <>
      <Head>
        <title>{`${litter.breed} — Upcoming Litter | Yarnelle Fur-Babies`}</title>
        <meta name="description" content={`Join the waitlist for our upcoming ${litter.breed} litter at Yarnelle Fur-Babies. Expected ${litter.expectedDate}. Meet the parents and secure your spot.`} />
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
        .back-bar { background: var(--offwhite); border-bottom: 1px solid var(--light-gray); padding: 0.75rem 4rem; }
        .back-link { font-size: 0.72rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--text-light); text-decoration: none; }
        .back-link:hover { color: var(--red); }
        .litter-hero { background: var(--black); padding: 4rem; border-bottom: 3px solid var(--red); display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; align-items: center; }
        .litter-hero-content .overline { display: block; font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; }
        .litter-hero-content h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.2rem, 4vw, 3.8rem); font-weight: 300; color: var(--white); line-height: 1.1; margin-bottom: 1rem; }
        .litter-hero-content h1 em { font-style: italic; color: var(--red); }
        .litter-hero-content p { color: #aaa; font-size: 0.95rem; line-height: 1.8; margin-bottom: 1.5rem; }
        .litter-hero-meta { display: flex; flex-wrap: wrap; gap: 1.5rem; margin-bottom: 2rem; }
        .meta-item { display: flex; flex-direction: column; gap: 0.2rem; }
        .meta-label { font-size: 0.62rem; letter-spacing: 0.18em; text-transform: uppercase; color: #666; }
        .meta-value { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--white); }
        .litter-hero-image { display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; }
        .parent-img-wrap { position: relative; aspect-ratio: 1/1; overflow: hidden; border-radius: 4px; background: #222; }
        .parent-img-wrap img { width: 100%; height: 100%; object-fit: cover; }
        .parent-img-label { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.7); color: white; font-size: 0.62rem; letter-spacing: 0.12em; text-transform: uppercase; padding: 0.4rem 0.75rem; text-align: center; }
        .parent-img-placeholder { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; color: #444; font-size: 0.75rem; letter-spacing: 0.1em; text-transform: uppercase; }
        .litter-detail { max-width: 1100px; margin: 0 auto; padding: 5rem 4rem; }
        .detail-grid { display: grid; grid-template-columns: 1.4fr 1fr; gap: 5rem; align-items: start; }
        .detail-section-label { font-size: 0.68rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); margin-bottom: 1.25rem; display: block; }
        .parent-detail-cards { display: flex; flex-direction: column; gap: 1.5rem; }
        .parent-card { display: grid; grid-template-columns: 120px 1fr; gap: 0; align-items: start; border: 1px solid var(--light-gray); border-radius: 4px; overflow: hidden; }
        .parent-card-img { aspect-ratio: 1/1; overflow: hidden; background: var(--offwhite); }
        .parent-card-img img { width: 100%; height: 100%; object-fit: cover; }
        .parent-card-body { padding: 1rem 1.1rem; }
        .parent-role { font-size: 0.6rem; letter-spacing: 0.18em; text-transform: uppercase; color: var(--red); margin-bottom: 0.3rem; display: block; }
        .parent-card-body h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.25rem; font-weight: 400; color: var(--black); margin-bottom: 0.4rem; }
        .parent-card-body p { font-size: 0.82rem; color: var(--text-light); line-height: 1.6; }
        .prev-puppies-section { margin-top: 3rem; }
        .prev-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-top: 1.25rem; }
        .prev-grid-item { aspect-ratio: 1/1; overflow: hidden; border-radius: 4px; background: var(--offwhite); }
        .prev-grid-item img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.3s; }
        .prev-grid-item:hover img { transform: scale(1.05); }
        .waitlist-sidebar { position: sticky; top: 90px; display: flex; flex-direction: column; gap: 1rem; }
        .tier-badge { font-size: 0.58rem; letter-spacing: 0.14em; text-transform: uppercase; padding: 0.2rem 0.6rem; border-radius: 2px; font-weight: 500; display: inline-block; margin-bottom: 0.5rem; }
        .tier-badge.free { background: var(--light-gray); color: var(--text-light); }
        .tier-badge.guaranteed { background: var(--red); color: white; }
        .tier-free { background: var(--offwhite); border: 1px solid var(--light-gray); border-radius: 4px; padding: 1.75rem; }
        .tier-free h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 300; color: var(--black); line-height: 1.2; margin-bottom: 0.3rem; }
        .tier-free h3 em { font-style: italic; color: var(--red); }
        .tier-sub { font-size: 0.8rem; color: var(--text-light); line-height: 1.6; margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--light-gray); }
        .tier-notice { background: var(--white); border-left: 2px solid var(--mid-gray); padding: 0.65rem 0.85rem; margin-bottom: 1.25rem; border-radius: 0 2px 2px 0; }
        .tier-notice p { font-size: 0.76rem; color: var(--text-light); line-height: 1.6; }
        .tier-notice strong { color: var(--text); font-weight: 500; }
        .form-field { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 0.75rem; }
        .form-field label { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-light); }
        .form-field input { background: var(--white); border: 1px solid var(--light-gray); color: var(--text); padding: 0.65rem 0.9rem; font-family: 'Jost', sans-serif; font-size: 0.88rem; font-weight: 300; border-radius: 2px; outline: none; transition: border-color 0.2s; width: 100%; }
        .form-field input:focus { border-color: var(--red); }
        .form-submit { margin-top: 1rem; }
        .form-submit button { width: 100%; }
        .form-note { font-size: 0.7rem; color: var(--mid-gray); text-align: center; margin-top: 0.65rem; line-height: 1.5; }
        .success-box { background: var(--white); border-left: 3px solid var(--red); padding: 1.25rem; border-radius: 0 4px 4px 0; }
        .success-box h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.3rem; font-weight: 300; margin-bottom: 0.4rem; }
        .success-box p { font-size: 0.82rem; color: var(--text-light); line-height: 1.6; }
        .tier-deposit { background: var(--black); border-radius: 4px; padding: 1.75rem; border-left: 3px solid var(--red); }
        .tier-deposit h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 300; color: var(--white); line-height: 1.2; margin-bottom: 0.3rem; }
        .tier-deposit h3 em { font-style: italic; color: var(--red); }
        .tier-deposit .tier-sub { color: #888; border-bottom-color: #333; }
        .deposit-notice { background: rgba(204,0,0,0.12); border-left: 2px solid var(--red); padding: 0.65rem 0.85rem; margin-bottom: 1.5rem; border-radius: 0 2px 2px 0; }
        .deposit-notice p { font-size: 0.76rem; color: #ccc; line-height: 1.6; }
        .deposit-notice strong { color: var(--white); font-weight: 400; }
        .deposit-steps { display: flex; flex-direction: column; gap: 0.65rem; margin-bottom: 1.5rem; }
        .deposit-step { display: flex; gap: 0.75rem; align-items: flex-start; }
        .step-num { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; color: var(--red); line-height: 1.3; flex-shrink: 0; width: 1.25rem; }
        .step-text { font-size: 0.78rem; color: #aaa; line-height: 1.6; }
        .step-text strong { color: var(--white); font-weight: 400; }
        .apply-btn { display: block; width: 100%; background: var(--red); color: white; padding: 0.9rem 2rem; text-align: center; text-decoration: none; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 2px; font-family: 'Jost', sans-serif; transition: background 0.2s; }
        .apply-btn:hover { background: var(--red-dark); }
        .deposit-note { font-size: 0.7rem; color: #555; text-align: center; margin-top: 0.65rem; line-height: 1.5; }
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
          .back-bar { padding: 0.75rem 1.5rem; }
          .litter-hero { grid-template-columns: 1fr; padding: 2.5rem 1.5rem; gap: 2rem; }
          .litter-detail { padding: 3rem 1.5rem; }
          .detail-grid { grid-template-columns: 1fr; gap: 3rem; }
          .waitlist-sidebar { position: static; }
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

      <div className="back-bar">
        <Link href="/upcoming-litters" className="back-link">← Back to Upcoming Litters</Link>
      </div>

      <section className="litter-hero">
        <div className="litter-hero-content">
          <span className="overline">Coming Soon · {litter.breed}</span>
          <h1>{litter.damName} <em>&amp;</em> {litter.sireName}</h1>
          <div className="litter-hero-meta">
            {litter.breeder && (
              <div className="meta-item">
                <span className="meta-label">Breeder</span>
                <span className="meta-value">{litter.breeder}</span>
              </div>
            )}
            {litter.expectedDate && (
              <div className="meta-item">
                <span className="meta-label">Expected</span>
                <span className="meta-value">{litter.expectedDate}</span>
              </div>
            )}
            {litter.estimatedSize && (
              <div className="meta-item">
                <span className="meta-label">Est. Size</span>
                <span className="meta-value">{litter.estimatedSize}</span>
              </div>
            )}
          </div>
          <p>{litter.description || litter.cardDesc}</p>
          <a href="#waitlist-anchor" className="btn-primary">Secure Your Spot →</a>
        </div>
        <div className="litter-hero-image">
          <div className="parent-img-wrap">
            {damPhoto
              ? <img src={damPhoto} alt={litter.damName} />
              : <div className="parent-img-placeholder">Mom Photo Coming Soon</div>
            }
            <div className="parent-img-label">Mom — {litter.damName}</div>
          </div>
          <div className="parent-img-wrap">
            {sirePhoto
              ? <img src={sirePhoto} alt={litter.sireName} />
              : <div className="parent-img-placeholder">Dad Photo Coming Soon</div>
            }
            <div className="parent-img-label">Dad — {litter.sireName}</div>
          </div>
        </div>
      </section>

      <div className="litter-detail">
        <div className="detail-grid">

          <div>
            <span className="detail-section-label">Meet the Parents</span>
            <div className="parent-detail-cards">
              <div className="parent-card">
                <div className="parent-card-img">
                  {damPhoto && <img src={damPhoto} alt={litter.damName} />}
                </div>
                <div className="parent-card-body">
                  <span className="parent-role">Dam · Mom</span>
                  <h4>{litter.damName}</h4>
                  <p>{litter.damDesc}</p>
                </div>
              </div>
              <div className="parent-card">
                <div className="parent-card-img">
                  {sirePhoto && <img src={sirePhoto} alt={litter.sireName} />}
                </div>
                <div className="parent-card-body">
                  <span className="parent-role">Sire · Dad</span>
                  <h4>{litter.sireName}</h4>
                  <p>{litter.sireDesc}</p>
                </div>
              </div>
            </div>

            {litter.previousPuppies && litter.previousPuppies.length > 0 && (
              <div className="prev-puppies-section">
                <span className="detail-section-label">Previous Puppies from This Pairing</span>
                <div className="prev-grid">
                  {litter.previousPuppies.map((p, i) => {
                    const src = fixUrl(p.src);
                    return src ? (
                      <div key={i} className="prev-grid-item">
                        <img src={src} alt={p.alt || 'Previous puppy'} />
                      </div>
                    ) : null;
                  })}
                </div>
              </div>
            )}
          </div>

          <div id="waitlist-anchor">
            <div className="waitlist-sidebar">

              <div className="tier-free">
                <span className="tier-badge free">Free · No Guarantee</span>
                <h3>Join the <em>Waitlist</em></h3>
                <p className="tier-sub">Get notified the moment this litter is confirmed — no commitment required.</p>
                <div className="tier-notice">
                  <p><strong>Please note:</strong> The free waitlist does not guarantee a spot. When puppies are ready we'll reach out in signup order, but availability depends on litter size.</p>
                </div>

                {submitted ? (
                  <div className="success-box">
                    <h4>You're on the list! 🐾</h4>
                    <p>We'll reach out as soon as this litter is confirmed. Keep an eye on your phone and email!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <input type="hidden" name="litter" value={`${litter.breed} — ${litter.expectedDate || 'Upcoming'}`} />
                    <div className="form-field">
                      <label>First Name *</label>
                      <input type="text" name="first-name" required onChange={handleChange} />
                    </div>
                    <div className="form-field">
                      <label>Last Name *</label>
                      <input type="text" name="last-name" required onChange={handleChange} />
                    </div>
                    <div className="form-field">
                      <label>Email *</label>
                      <input type="email" name="email" required onChange={handleChange} />
                    </div>
                    <div className="form-field">
                      <label>Phone *</label>
                      <input type="tel" name="phone" required onChange={handleChange} />
                    </div>
                    <div className="form-submit">
                      <button type="submit" className="btn-primary">Notify Me When Confirmed →</button>
                    </div>
                    <p className="form-note">No spam, ever. We'll only reach out about this litter.</p>
                  </form>
                )}
              </div>

              <div className="tier-deposit">
                <span className="tier-badge guaranteed">Guaranteed Spot</span>
                <h3>Reserve Your <em>Place in Line</em></h3>
                <p className="tier-sub">Want to lock in a guaranteed spot? Submit an application and we'll reach out to collect your deposit.</p>
                <div className="deposit-notice">
                  <p><strong>How it works:</strong> Your pick order is determined by when your deposit is received. If no one is ahead of you, you get first pick of the litter.</p>
                </div>
                <div className="deposit-steps">
                  <div className="deposit-step">
                    <span className="step-num">1</span>
                    <span className="step-text"><strong>Submit your application</strong> using the button below — takes about 2 minutes.</span>
                  </div>
                  <div className="deposit-step">
                    <span className="step-num">2</span>
                    <span className="step-text"><strong>We'll contact you</strong> to confirm your spot and collect your deposit.</span>
                  </div>
                  <div className="deposit-step">
                    <span className="step-num">3</span>
                    <span className="step-text"><strong>Your place in line is locked</strong> based on when your deposit is received.</span>
                  </div>
                </div>
                <Link href="/apply" className="apply-btn">Submit an Application →</Link>
                <p className="deposit-note">Questions? Call or text Brooke at (260) 443-9035</p>
              </div>

            </div>
          </div>

        </div>
      </div>

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

export async function getStaticProps({ params }) {
  const { data } = await client.queries.upcomingLitterConnection();
  const litters = data.upcomingLitterConnection.edges.map(e => e.node);
  const litter = litters.find(
    l => (l.slug || l.breed.toLowerCase().replace(/ /g, '-')) === params.slug
  );
  if (!litter) return { notFound: true };
  return { props: { litter } };
}

export async function getStaticPaths() {
  const { data } = await client.queries.upcomingLitterConnection();
  const paths = data.upcomingLitterConnection.edges.map(e => ({
    params: {
      slug: e.node.slug || e.node.breed.toLowerCase().replace(/ /g, '-'),
    },
  }));
  return { paths, fallback: false };
}
