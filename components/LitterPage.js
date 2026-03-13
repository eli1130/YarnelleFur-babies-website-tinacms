import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const STYLES = `
  *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
  :root { --white:#fff; --offwhite:#f7f7f7; --light-gray:#e5e5e5; --mid-gray:#aaa; --black:#111; --text:#1a1a1a; --text-light:#555; --red:#cc0000; --red-dark:#aa0000; }
  html { scroll-behavior:smooth; }
  body { font-family:'Jost',sans-serif; background:var(--white); color:var(--text); font-weight:300; line-height:1.7; }
  .announcement { background:var(--black); color:var(--white); text-align:center; padding:0.6rem 1rem; font-size:0.75rem; letter-spacing:0.08em; text-transform:uppercase; }
  .announcement a { color:var(--white); text-decoration:underline; }
  nav { position:sticky; top:0; z-index:100; background:var(--white); border-bottom:1px solid var(--light-gray); padding:0 2rem; display:flex; align-items:center; justify-content:space-between; height:68px; }
  .nav-logo { font-family:'Cormorant Garamond',serif; font-size:1.5rem; font-weight:400; color:var(--black); text-decoration:none; }
  .nav-logo span { color:var(--red); font-style:italic; }
  .nav-links { display:flex; align-items:center; gap:2rem; list-style:none; }
  .nav-links a { font-size:0.72rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--text); text-decoration:none; transition:color 0.2s; }
  .nav-links a:hover { color:var(--red); }
  .nav-links .nav-cta a { background:var(--red); color:var(--white); padding:0.5rem 1.2rem; border-radius:2px; }
  .nav-links .nav-cta a:hover { background:var(--red-dark); }
  .nav-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; background:none; border:none; padding:4px; }
  .nav-hamburger span { display:block; width:24px; height:2px; background:var(--black); }
  .litter-hero { background:var(--black); padding:3rem 5rem 3.5rem; border-bottom:3px solid var(--red); }
  .back-link { display:inline-block; font-size:0.72rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--mid-gray); text-decoration:none; margin-bottom:1.5rem; transition:color 0.2s; }
  .back-link:hover { color:var(--white); }
  .breeder-tag { font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--red); margin-bottom:0.75rem; display:block; }
  .litter-hero h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(2.2rem,4vw,3.5rem); font-weight:300; color:var(--white); line-height:1.1; margin-bottom:0.75rem; }
  .litter-hero .price { font-family:'Cormorant Garamond',serif; font-size:1.5rem; color:var(--red); font-style:italic; }
  .litter-body { max-width:1200px; margin:0 auto; padding:3.5rem 4rem; display:grid; grid-template-columns:1fr 300px; gap:3rem; align-items:start; }
  .litter-main { min-width:0; }
  .section-title { font-family:'Cormorant Garamond',serif; font-size:1.5rem; font-weight:400; color:var(--black); margin-bottom:1.25rem; padding-bottom:0.75rem; border-bottom:1px solid var(--light-gray); }
  .puppy-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem; margin-bottom:3rem; }
  .puppy-grid img { width:100%; height:auto; border-radius:4px; display:block; }
  .litter-details { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; margin-bottom:3rem; }
  .detail-box { background:var(--offwhite); border:1px solid var(--light-gray); border-radius:4px; padding:1rem 1.25rem; }
  .detail-box.full { grid-column:span 2; }
  .detail-label { font-size:0.62rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--red); margin-bottom:0.35rem; display:block; }
  .detail-value { font-size:0.95rem; color:var(--text); }
  .puppies-list { margin-bottom:3rem; }
  .puppy-row { display:flex; justify-content:space-between; align-items:center; padding:0.9rem 0; border-bottom:1px solid var(--light-gray); }
  .puppy-row:first-child { border-top:1px solid var(--light-gray); }
  .puppy-name { font-size:0.95rem; color:var(--text); }
  .puppy-gender { font-size:0.68rem; letter-spacing:0.12em; text-transform:uppercase; color:var(--mid-gray); }
  .puppy-price { font-family:'Cormorant Garamond',serif; font-size:1.1rem; color:var(--red); font-style:italic; }
  .puppy-status { font-size:0.68rem; letter-spacing:0.1em; text-transform:uppercase; color:#888; background:var(--offwhite); padding:0.2rem 0.5rem; border-radius:2px; }
  .puppy-status.reserved { color:var(--red); background:#fff0f0; }
  .parents-grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin-bottom:3rem; }
  .parent-card { border:1px solid var(--light-gray); border-radius:4px; overflow:hidden; }
  .parent-card img { width:100%; height:auto; display:block; }
  .parent-card-body { padding:1rem 1.25rem; }
  .parent-role { font-size:0.62rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--red); margin-bottom:0.25rem; display:block; }
  .parent-name { font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:400; color:var(--black); margin-bottom:0.25rem; }
  .parent-desc { font-size:0.82rem; color:var(--text-light); }
  .prev-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:0.75rem; margin-bottom:3rem; }
  .prev-grid img { width:100%; height:220px; object-fit:cover; border-radius:4px; display:block; }
  .litter-sidebar { position:sticky; top:84px; }
  .quick-facts { border:1px solid var(--light-gray); border-radius:4px; overflow:hidden; margin-bottom:1.5rem; }
  .quick-facts-title { background:var(--offwhite); padding:0.85rem 1.25rem; font-size:0.72rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--text); border-bottom:1px solid var(--light-gray); }
  .fact-row { display:flex; justify-content:space-between; align-items:center; padding:0.75rem 1.25rem; border-bottom:1px solid var(--light-gray); font-size:0.85rem; }
  .fact-row:last-child { border-bottom:none; }
  .fact-label { color:var(--text-light); }
  .fact-value { color:var(--text); font-weight:400; text-align:right; }
  .reserve-box { border:1px solid var(--light-gray); border-radius:4px; overflow:hidden; padding:1.25rem; }
  .reserve-title { font-family:'Cormorant Garamond',serif; font-size:1.15rem; font-weight:400; color:var(--black); margin-bottom:1rem; }
  .btn-reserve { display:block; width:100%; background:var(--red); color:var(--white); text-align:center; padding:0.85rem; font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; border-radius:2px; margin-bottom:0.75rem; transition:background 0.2s; font-family:'Jost',sans-serif; }
  .btn-reserve:hover { background:var(--red-dark); }
  .btn-apply { display:block; width:100%; border:1px solid var(--light-gray); color:var(--text); text-align:center; padding:0.85rem; font-size:0.72rem; letter-spacing:0.12em; text-transform:uppercase; text-decoration:none; border-radius:2px; margin-bottom:0.75rem; transition:all 0.2s; font-family:'Jost',sans-serif; }
  .btn-apply:hover { border-color:var(--black); color:var(--black); }
  .reserve-note { font-size:0.78rem; color:var(--text-light); line-height:1.6; }
  footer { background:var(--black); border-top:1px solid #222; padding:3rem 4rem; margin-top:4rem; }
  .footer-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:3rem; }
  .footer-brand .nav-logo { display:block; margin-bottom:1rem; color:var(--white); }
  .footer-brand p { font-size:0.82rem; color:#666; line-height:1.7; max-width:260px; }
  .footer-col h5 { font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase; color:#666; margin-bottom:1rem; }
  .footer-col a { display:block; font-size:0.85rem; color:#aaa; text-decoration:none; margin-bottom:0.5rem; transition:color 0.2s; }
  .footer-col a:hover { color:var(--white); }
  .footer-col p { font-size:0.85rem; color:#aaa; line-height:1.7; margin-bottom:0.4rem; }
  .footer-bottom { max-width:1200px; margin:2.5rem auto 0; padding-top:1.5rem; border-top:1px solid #222; display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:#555; }

  /* CAROUSEL */
  .carousel { position:relative; margin-bottom:3rem; }
  .carousel-track-wrap { overflow:hidden; border-radius:4px; }
  .carousel-track { display:flex; transition:transform 0.4s ease; }
  .carousel-track img { width:100%; flex-shrink:0; height:420px; object-fit:contain; background:transparent; border-radius:4px; }
  .carousel-btn { position:absolute; top:50%; transform:translateY(-50%); background:rgba(0,0,0,0.55); border:none; color:#fff; font-size:1.4rem; width:42px; height:42px; border-radius:50%; cursor:pointer; display:flex; align-items:center; justify-content:center; z-index:10; transition:background 0.2s; }
  .carousel-btn:hover { background:rgba(0,0,0,0.85); }
  .carousel-btn.prev { left:10px; }
  .carousel-btn.next { right:10px; }
  .carousel-dots { display:flex; justify-content:center; gap:6px; margin-top:0.75rem; }
  .carousel-dot { width:8px; height:8px; border-radius:50%; background:var(--light-gray); border:none; cursor:pointer; transition:background 0.2s; padding:0; }
  .carousel-dot.active { background:var(--red); }

  @media (max-width:960px) {
    nav { padding:0 1.5rem; }
    .nav-links { display:none; }
    .nav-hamburger { display:flex; }
    .nav-links.open { display:flex; flex-direction:column; position:absolute; top:68px; left:0; right:0; background:var(--white); border-bottom:1px solid var(--light-gray); padding:1.5rem 2rem; gap:1.25rem; z-index:99; }
    .litter-hero { padding:2rem 1.5rem 2.5rem; }
    .litter-body { grid-template-columns:1fr; padding:2rem 1.5rem; gap:2rem; }
    .litter-sidebar { position:static; }
    .puppy-grid { grid-template-columns:repeat(2,1fr); }
    .litter-details { grid-template-columns:1fr; }
    .detail-box.full { grid-column:span 1; }
    .parents-grid { grid-template-columns:1fr; }
    .prev-grid { grid-template-columns:repeat(2,1fr); }
    .carousel-track img { height:280px; }
    footer { padding:3rem 1.5rem; }
    .footer-inner { grid-template-columns:1fr 1fr; gap:2rem; }
    .footer-brand { grid-column:span 2; }
    .footer-bottom { flex-direction:column; gap:0.5rem; text-align:center; }
  }
`;

function Carousel({ photos, alt }) {
  const [index, setIndex] = useState(0);
  const total = photos.length;
  const prev = () => setIndex((index - 1 + total) % total);
  const next = () => setIndex((index + 1) % total);
  if (total === 0) return null;
  return (
    <div className="carousel">
      <div className="carousel-track-wrap">
        <div className="carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
          {photos.map((src, i) => (
            <img key={i} src={src} alt={`${alt} ${i + 1}`} />
          ))}
        </div>
      </div>
      {total > 1 && (
        <>
          <button className="carousel-btn prev" onClick={prev}>&#8249;</button>
          <button className="carousel-btn next" onClick={next}>&#8250;</button>
          <div className="carousel-dots">
            {photos.map((_, i) => (
              <button key={i} className={`carousel-dot${i === index ? ' active' : ''}`} onClick={() => setIndex(i)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default function LitterPage({ litter }) {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>{litter.title} | Yarnelle Fur-Babies</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773365064/IMG_5493_gvo13y.jpg" />
      </Head>
      <style>{STYLES}</style>

      <div className="announcement">✈ Out of State? We Offer Ground &amp; Air Transport via Puppy Nanny — <a href="tel:2604439035">Call Brooke: (260) 443-9035</a></div>

      <nav>
        <Link href="/" className="nav-logo">Yarnelle <span>Fur-Babies</span></Link>
        <ul className={`nav-links${navOpen ? ' open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/gotjesus">Got Jesus?</Link></li>
          <li><Link href="/#litters">Available Litters</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/facility">Our Facility</Link></li>
          <li><Link href="/faq">FAQ &amp; Products</Link></li>
          <li className="nav-cta"><Link href="/#apply">Apply Now</Link></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>

      <section className="litter-hero">
        <Link href="/" className="back-link">← Back to All Puppies</Link>
        <span className="breeder-tag">{litter.breeder} · {litter.generation}</span>
        <h1>{litter.title}</h1>
        <div className="price">{litter.priceRange}</div>
      </section>

      <div className="litter-body">
        <main className="litter-main">

          <h2 className="section-title">Current Litter — {litter.parents}</h2>
          {litter.showCarousel ? (
            <Carousel photos={litter.photos} alt={litter.title} />
          ) : (
            <div className="puppy-grid">
              {litter.photos.map((src, i) => (
                <img key={i} src={src} alt={`${litter.title} puppy`} />
              ))}
            </div>
          )}

          <h2 className="section-title">Litter Details</h2>
          <div className="litter-details">
            <div className="detail-box"><span className="detail-label">Date of Birth</span><div className="detail-value">{litter.dob}</div></div>
            <div className="detail-box"><span className="detail-label">Take Home Date</span><div className="detail-value">{litter.takeHome}</div></div>
            <div className="detail-box"><span className="detail-label">Estimated Size</span><div className="detail-value">{litter.size}</div></div>
            <div className="detail-box"><span className="detail-label">Grooming</span><div className="detail-value">{litter.grooming}</div></div>
            <div className="detail-box full"><span className="detail-label">Temperament</span><div className="detail-value">{litter.temperament}</div></div>
          </div>

          <h2 className="section-title">Available Puppies</h2>
          <div className="puppies-list">
            {litter.puppies.map((p, i) => (
              <div key={i} className="puppy-row">
                <span className="puppy-name">{p.name}</span>
                <span className="puppy-gender">{p.gender}</span>
                <span className="puppy-price">{p.price}</span>
                {p.status && <span className={`puppy-status${p.status === 'Reserved' ? ' reserved' : ''}`}>{p.status}</span>}
              </div>
            ))}
          </div>

          <h2 className="section-title">Meet the Parents</h2>
          <div className="parents-grid">
            <div className="parent-card">
              <img src={litter.damPhoto} alt={litter.dam.name} />
              <div className="parent-card-body">
                <span className="parent-role">Dam</span>
                <div className="parent-name">{litter.dam.name}</div>
                <div className="parent-desc">{litter.dam.desc}</div>
              </div>
            </div>
            <div className="parent-card">
              <img src={litter.sirePhoto} alt={litter.sire.name} />
              <div className="parent-card-body">
                <span className="parent-role">Sire</span>
                <div className="parent-name">{litter.sire.name}</div>
                <div className="parent-desc">{litter.sire.desc}</div>
              </div>
            </div>
          </div>

          {litter.prevPhotos && litter.prevPhotos.length > 0 && (
            <>
              <h2 className="section-title">Previous {litter.title} Puppies</h2>
              {litter.showPrevCarousel ? (
                <Carousel photos={litter.prevPhotos} alt={`Previous ${litter.title}`} />
              ) : (
                <div className="prev-grid">
                  {litter.prevPhotos.map((src, i) => (
                    <img key={i} src={src} alt="Previous puppy" />
                  ))}
                </div>
              )}
            </>
          )}

        </main>

        <aside className="litter-sidebar">
          <div className="quick-facts">
            <div className="quick-facts-title">Quick Facts</div>
            <div className="fact-row"><span className="fact-label">Generation</span><span className="fact-value">{litter.generation}</span></div>
            <div className="fact-row"><span className="fact-label">Size</span><span className="fact-value">{litter.size}</span></div>
            <div className="fact-row"><span className="fact-label">Deposit</span><span className="fact-value">${litter.deposit}</span></div>
            <div className="fact-row"><span className="fact-label">Ready</span><span className="fact-value">{litter.takeHome}</span></div>
            <div className="fact-row"><span className="fact-label">Contact</span><span className="fact-value">{litter.contact}</span></div>
          </div>
          <div className="reserve-box">
            <div className="reserve-title">Reserve a Puppy</div>
            <a href="https://cash.app/$YarnelleFurBabies1" target="_blank" rel="noopener" className="btn-reserve">Reserve via CashApp</a>
            <Link href="/#apply" className="btn-apply">Submit Application</Link>
            <p className="reserve-note">Accepting ${litter.deposit} deposits now. Nonrefundable but transferable. Deposit goes toward total cost.</p>
          </div>
        </aside>
      </div>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">Yarnelle <span>Fur-Babies</span></Link>
            <p>Columbia City, Indiana · Family-Raised Doodles with Love. Est. 2019.</p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <Link href="/">Home</Link><Link href="/about">About Us</Link>
            <Link href="/gotjesus">Got Jesus?</Link><Link href="/#litters">Available Litters</Link>
            <Link href="/reviews">Reviews</Link><Link href="/facility">Our Facility</Link>
            <Link href="/faq">FAQ &amp; Products</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <p>Brooke Labenz</p><a href="tel:2604439035">(260) 443-9035</a>
            <a href="mailto:yarnellefurbabies@gmail.com">yarnellefurbabies@gmail.com</a>
            <br /><p>John Yarnelle</p><a href="tel:2604107925">(260) 410-7925</a>
          </div>
          <div className="footer-col">
            <h5>Follow Us</h5>
            <a href="https://www.instagram.com/yarnellefurbabies/" target="_blank" rel="noopener">📷 @yarnellefurbabies</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2025 Yarnelle Fur-Babies · Columbia City, Indiana</span>
          <span>Family-Raised Doodles with Love</span>
        </div>
      </footer>
    </>
  );
}
