import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function Facility() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Our Facility | Yarnelle Fur-Babies — Columbia City, IN</title>
        <meta name="description" content="Tour our 10-acre farm facility in Columbia City, Indiana — heated puppy nursery, outdoor pens, a beautiful pond, and a deck built with love by John Yarnelle himself." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://pub-e847384c23164145a930ab957dbde017.r2.dev/IMG_5493_gvo13y.jpg" />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root { --white:#fff; --offwhite:#f7f7f7; --light-gray:#e5e5e5; --mid-gray:#aaa; --black:#111; --text:#1a1a1a; --text-light:#555; --red:#cc0000; --red-dark:#aa0000; }
        html { scroll-behavior: smooth; }
        body { font-family:'Jost',sans-serif; background:var(--white); color:var(--text); font-weight:300; line-height:1.7; }
        .announcement { background:var(--black); color:var(--white); text-align:center; padding:0.6rem 1rem; font-size:0.75rem; letter-spacing:0.08em; text-transform:uppercase; }
        .announcement a { color:var(--white); text-decoration:underline; }
        nav { position:sticky; top:0; z-index:100; background:var(--white); border-bottom:1px solid var(--light-gray); padding:0 2rem; display:flex; align-items:center; justify-content:space-between; height:68px; }
        .nav-logo { font-family:'Cormorant Garamond',serif; font-size:1.5rem; font-weight:400; color:var(--black); text-decoration:none; letter-spacing:0.02em; }
        .nav-logo span { color:var(--red); font-style:italic; }
        .nav-links { display:flex; align-items:center; gap:2rem; list-style:none; }
        .nav-links a { font-size:0.72rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--text); text-decoration:none; transition:color 0.2s; }
        .nav-links a:hover, .nav-links a.active { color:var(--red); }
        .nav-links .nav-cta a { background:var(--red); color:var(--white); padding:0.5rem 1.2rem; border-radius:2px; }
        .nav-links .nav-cta a:hover { background:var(--red-dark); }
        .nav-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; background:none; border:none; padding:4px; }
        .nav-hamburger span { display:block; width:24px; height:2px; background:var(--black); }

        /* HERO */
        .page-hero { background:var(--black); padding:5rem 4rem; text-align:center; border-bottom:3px solid var(--red); }
        .page-hero .overline { display:block; font-size:0.7rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--red); margin-bottom:1rem; }
        .page-hero h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(2.5rem,5vw,4rem); font-weight:300; color:var(--white); line-height:1.1; margin-bottom:1rem; }
        .page-hero h1 em { font-style:italic; color:var(--red); }
        .page-hero p { color:#aaa; font-size:1rem; max-width:680px; margin:0 auto; line-height:1.8; }

        /* FEATURE HIGHLIGHTS */
        .highlights { background:var(--offwhite); border-bottom:1px solid var(--light-gray); padding:2.5rem 4rem; }
        .highlights-inner { max-width:1100px; margin:0 auto; display:grid; grid-template-columns:repeat(4,1fr); gap:1.5rem; text-align:center; }
        .highlight-item { padding:1.25rem; }
        .highlight-icon { font-size:1.75rem; margin-bottom:0.5rem; }
        .highlight-label { font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase; color:var(--red); margin-bottom:0.35rem; display:block; }
        .highlight-value { font-family:'Cormorant Garamond',serif; font-size:1.15rem; color:var(--black); }

        /* PHOTO SECTIONS */
        .facility-section { padding:4rem; max-width:100%; }
        .facility-section.alt { background:var(--offwhite); }
        .facility-inner { max-width:1200px; margin:0 auto; }
        .section-header { margin-bottom:2rem; }
        .section-header .overline { display:block; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--red); margin-bottom:0.5rem; }
        .section-header h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.6rem,2.5vw,2.2rem); font-weight:300; color:var(--black); }
        .section-header h2 em { font-style:italic; color:var(--red); }
        .section-header p { color:var(--text-light); font-size:0.92rem; margin-top:0.5rem; max-width:600px; }

        /* GRID LAYOUTS */
        .grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem; margin-bottom:0; }
        .grid-2 { display:grid; grid-template-columns:1fr 1fr; gap:0.75rem; }
        .grid-full { display:grid; grid-template-columns:1fr; gap:0.75rem; }

        .facility-img { width:100%; height:320px; object-fit:contain; background:transparent; border-radius:4px; display:block; }
        .facility-img.tall { height:420px; }
        .facility-img.short { height:240px; }

        /* CTA */
        .cta-strip { background:var(--offwhite); border-top:3px solid var(--red); padding:4rem; text-align:center; }
        .cta-strip h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:300; color:var(--black); margin-bottom:1rem; }
        .cta-strip h2 em { font-style:italic; color:var(--red); }
        .cta-strip p { color:var(--text-light); font-size:0.95rem; margin-bottom:2rem; max-width:500px; margin-left:auto; margin-right:auto; }
        .cta-buttons { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
        .btn-primary { background:var(--red); color:#fff; padding:0.85rem 2rem; text-decoration:none; font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; border-radius:2px; transition:background 0.2s; display:inline-block; font-family:'Jost',sans-serif; }
        .btn-primary:hover { background:var(--red-dark); }
        .btn-secondary { border:1px solid var(--mid-gray); color:var(--text); padding:0.85rem 2rem; text-decoration:none; font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; border-radius:2px; transition:all 0.2s; display:inline-block; font-family:'Jost',sans-serif; }
        .btn-secondary:hover { border-color:var(--black); color:var(--black); }

        /* FOOTER */
        footer { background:var(--black); border-top:1px solid #222; padding:3rem 4rem; }
        .footer-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:3rem; }
        .footer-brand .nav-logo { display:block; margin-bottom:1rem; color:var(--white); }
        .footer-brand p { font-size:0.82rem; color:#666; line-height:1.7; max-width:260px; }
        .footer-col h5 { font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase; color:#666; margin-bottom:1rem; }
        .footer-col a { display:block; font-size:0.85rem; color:#aaa; text-decoration:none; margin-bottom:0.5rem; transition:color 0.2s; }
        .footer-col a:hover { color:var(--white); }
        .footer-col p { font-size:0.85rem; color:#aaa; line-height:1.7; margin-bottom:0.4rem; }
        .footer-bottom { max-width:1200px; margin:2.5rem auto 0; padding-top:1.5rem; border-top:1px solid #222; display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:#555; }

        @media (max-width:900px) {
          nav { padding:0 1.5rem; }
          .nav-links { display:none; }
          .nav-hamburger { display:flex; }
          .nav-links.open { display:flex; flex-direction:column; position:absolute; top:68px; left:0; right:0; background:var(--white); border-bottom:1px solid var(--light-gray); padding:1.5rem 2rem; gap:1.25rem; z-index:99; }
          .page-hero { padding:3rem 1.5rem; }
          .highlights { padding:2rem 1.5rem; }
          .highlights-inner { grid-template-columns:1fr 1fr; }
          .facility-section { padding:2.5rem 1.5rem; }
          .grid-3 { grid-template-columns:1fr 1fr; }
          .grid-2 { grid-template-columns:1fr; }
          .facility-img { height:240px; }
          .facility-img.tall { height:280px; }
          .cta-strip { padding:3rem 1.5rem; }
          footer { padding:3rem 1.5rem; }
          .footer-inner { grid-template-columns:1fr 1fr; gap:2rem; }
          .footer-brand { grid-column:span 2; }
          .footer-bottom { flex-direction:column; gap:0.5rem; text-align:center; }
        }
        @media (max-width:600px) {
          .grid-3 { grid-template-columns:1fr; }
          .highlights-inner { grid-template-columns:1fr 1fr; }
        }
      `}</style>

      <div className="announcement">✈ Out of State? We Offer Ground &amp; Air Transport via Puppy Nanny — <a href="tel:2604439035">Call Brooke: (260) 443-9035</a></div>

      <nav>
        <Link href="/" className="nav-logo">Yarnelle <span>Fur-Babies</span></Link>
        <ul className={`nav-links${navOpen ? ' open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/gotjesus">Got Jesus?</Link></li>
          <li><Link href="/#litters">Available Litters</Link></li>
          <li><Link href="/upcoming-litters">Upcoming Litters &amp; Waitlist</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/facility" className="active">Our Facility</Link></li>
          <li><Link href="/faq">FAQ &amp; Products</Link></li>
          <li className="nav-cta"><Link href="/#apply">Apply Now</Link></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>

      <section className="page-hero">
        <span className="overline">Where Our Puppies Are Raised</span>
        <h1>Our <em>Facility</em></h1>
        <p>10 acres with a beautiful pond, a heated &amp; air-conditioned puppy nursery, outdoor pens, and a deck where puppies play from 6 weeks on — all built with love by John Yarnelle himself.</p>
      </section>

      <div className="highlights">
        <div className="highlights-inner">
          <div className="highlight-item">
            <div className="highlight-icon">🌾</div>
            <span className="highlight-label">Property</span>
            <div className="highlight-value">10 Acres of Land</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🏠</div>
            <span className="highlight-label">Nursery</span>
            <div className="highlight-value">Heated &amp; Air-Conditioned</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">🐾</div>
            <span className="highlight-label">Outdoor Pens</span>
            <div className="highlight-value">Puppies Play from 6 Weeks</div>
          </div>
          <div className="highlight-item">
            <div className="highlight-icon">💙</div>
            <span className="highlight-label">Built By</span>
            <div className="highlight-value">John Yarnelle Himself</div>
          </div>
        </div>
      </div>

      {/* THE FARM & GROUNDS */}
      <section className="facility-section">
        <div className="facility-inner">
          <div className="section-header">
            <span className="overline">The Grounds</span>
            <h2>The Farm &amp; <em>Outdoor Space</em></h2>
            <p>Our dogs roam 10 acres of beautiful Indiana farmland — including a pond, open fields, and 6 acres of in-ground fencing so they can run and play every single day.</p>
          </div>
          <div className="grid-3">
            <img className="facility-img" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0021.jpg" alt="Yarnelle farm and barn" />
            <img className="facility-img" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0022.jpg" alt="Dogs by the pond" />
            <img className="facility-img" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0023.jpg" alt="Outdoor puppy pen" />
          </div>
        </div>
      </section>

      {/* THE DECK */}
      <section className="facility-section alt">
        <div className="facility-inner">
          <div className="section-header">
            <span className="overline">The Deck</span>
            <h2>Our Custom-Built <em>Puppy Deck</em></h2>
            <p>Puppies begin exploring the outdoors from 6 weeks of age on our beautiful handcrafted deck — a favorite spot for both puppies and visitors alike.</p>
          </div>
          <div className="grid-2">
            <img className="facility-img" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0024.jpg" alt="Puppy deck view" />
            <img className="facility-img tall" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0025.jpg" alt="Deck with seating area" />
          </div>
        </div>
      </section>

      {/* THE NURSERY */}
      <section className="facility-section">
        <div className="facility-inner">
          <div className="section-header">
            <span className="overline">The Nursery</span>
            <h2>Heated &amp; Air-Conditioned <em>Puppy Nursery</em></h2>
            <p>Our state-of-the-art nursery was custom built by John Yarnelle. It features individual whelping areas, climate control, and everything needed to give every litter the best possible start.</p>
          </div>
          <div className="grid-2" style={{marginBottom:'0.75rem'}}>
            <img className="facility-img tall" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0026.jpg" alt="Puppy in nursery" />
            <img className="facility-img tall" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0027.jpg" alt="Nursery interior overview" />
          </div>
          <div className="grid-3">
            <img className="facility-img" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0028.jpg" alt="Nursery whelping area" />
            <img className="facility-img" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0029.jpg" alt="Nursery kennel area" />
            <img className="facility-img" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0030.jpg" alt="Nursery grooming station" />
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <h2>Want to Meet Your <em>Future Pup?</em></h2>
        <p>In-person visits are welcome once puppies reach 6 weeks of age. Browse our available litters or apply today!</p>
        <div className="cta-buttons">
          <Link href="/#litters" className="btn-primary">View Available Puppies</Link>
          <Link href="/#apply" className="btn-secondary">Apply Now</Link>
        </div>
      </section>

      <footer>
        <div className="footer-inner">
          <div className="footer-brand">
            <Link href="/" className="nav-logo">Yarnelle <span>Fur-Babies</span></Link>
            <p>Columbia City, Indiana · Family-Raised Doodles with Love. Est. 2019.</p>
          </div>
          <div className="footer-col">
            <h5>Navigate</h5>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/gotjesus">Got Jesus?</Link>
            <Link href="/#litters">Available Litters</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/facility">Our Facility</Link>
            <Link href="/faq">FAQ &amp; Products</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <p>Eli Yarnelle</p>
            <a href="tel:2604454378">(260) 445-4378</a>
            <a href="mailto:yarnellefurbabies@gmail.com">yarnellefurbabies@gmail.com</a>
            <br /><p>John Yarnelle</p>
            <a href="tel:2604107925">(260) 410-7925</a>
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
