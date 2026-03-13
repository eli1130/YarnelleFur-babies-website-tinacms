import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';
import { client } from '../tina/__generated__/client';

export default function Home({ litters }) {
  const [navOpen, setNavOpen] = useState(false);
  const [formData, setFormData] = useState({
    'first-name': '', 'last-name': '', email: '', phone: '',
    'city-state': '', breed: '', 'rent-own': 'Own', purpose: 'Family Pet',
    'dog-experience': 'Yes', vet: '', 'other-pets': '', referral: '',
    'family-info': '', 'bot-field': ''
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

 async function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.target);
  const body = new URLSearchParams(formData).toString();
  
  await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body,
  });
  setSubmitted(true);
}

  return (
    <>
      <Head>
        <title>Yarnelle Fur-Babies | Family-Raised Doodles — Columbia City, IN</title>
        <meta name="description" content="Family-raised doodle puppies from a close-knit family of 16 on a 10-acre farm in Columbia City, Indiana. Health-tested, socialized with children from birth." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773365064/IMG_5493_gvo13y.jpg" />
      </Head>

      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
        :root {
          --white: #ffffff; --offwhite: #f7f7f7; --light-gray: #e5e5e5;
          --mid-gray: #aaaaaa; --dark-gray: #333333; --black: #111111;
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
        .btn-secondary { border: 1px solid var(--mid-gray); color: var(--text); padding: 0.85rem 2rem; text-decoration: none; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 2px; transition: all 0.2s; display: inline-block; cursor: pointer; background: none; font-family: 'Jost', sans-serif; }
        .btn-secondary:hover { border-color: var(--black); color: var(--black); }
        .btn-black { background: var(--black); color: #fff; padding: 0.85rem 2rem; text-decoration: none; font-size: 0.78rem; letter-spacing: 0.12em; text-transform: uppercase; border-radius: 2px; transition: background 0.2s; display: inline-block; cursor: pointer; border: none; font-family: 'Jost', sans-serif; }
        .btn-black:hover { background: #333; }
        .section-header { text-align: center; margin-bottom: 3rem; }
        .section-header .overline { display: block; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); margin-bottom: 0.75rem; }
        .section-header h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2rem, 3.5vw, 3rem); font-weight: 300; color: var(--black); line-height: 1.2; }
        .section-header h2 em { font-style: italic; color: var(--red); }
        .section-header p { margin-top: 1rem; color: var(--text-light); max-width: 540px; margin-left: auto; margin-right: auto; font-size: 0.95rem; }
        .hero { min-height: 90vh; display: grid; grid-template-columns: 1fr 1fr; align-items: center; background: var(--black); }
        .hero-content { padding: 2rem 4rem 2rem 6rem; }
        .hero-overline { display: block; font-size: 0.7rem; letter-spacing: 0.22em; text-transform: uppercase; color: var(--red); margin-bottom: 1.5rem; }
        .hero h1 { font-family: 'Cormorant Garamond', serif; font-size: clamp(2.8rem, 5vw, 5.2rem); font-weight: 300; line-height: 1.05; color: var(--white); margin-bottom: 1.5rem; }
        .hero h1 em { font-style: italic; color: var(--red); }
        .hero-sub { font-size: 1rem; color: #aaaaaa; max-width: 440px; margin-bottom: 2.5rem; line-height: 1.8; }
        .hero-buttons { display: flex; gap: 1rem; flex-wrap: wrap; }
        .hero-image-right { display: flex; align-items: center; justify-content: center; padding: 1rem 1.5rem 1rem 0; height: 90vh; }
        .hero-image-right img { width: 100%; height: 100%; object-fit: contain; object-position: center; display: block; }
        .about-intro { background: var(--offwhite); padding: 5rem 4rem; border-top: 3px solid var(--red); }
        .about-intro-inner { max-width: 900px; margin: 0 auto; text-align: center; }
        .about-intro-inner .overline { display: block; font-size: 0.7rem; letter-spacing: 0.2em; text-transform: uppercase; color: var(--red); margin-bottom: 1rem; }
        .about-intro-inner h2 { font-family: 'Cormorant Garamond', serif; font-size: clamp(1.8rem, 3vw, 2.6rem); font-weight: 300; color: var(--black); margin-bottom: 1.5rem; line-height: 1.2; }
        .about-intro-inner h2 em { font-style: italic; color: var(--red); }
        .about-intro-inner p { font-size: 1rem; color: var(--text-light); line-height: 1.9; margin-bottom: 1rem; max-width: 780px; margin-left: auto; margin-right: auto; }
        .about-intro-inner p strong { color: var(--text); font-weight: 400; }
        .contact-numbers { margin-top: 2.5rem; display: flex; flex-wrap: wrap; justify-content: center; gap: 1.5rem 3rem; }
        .contact-number-item { text-align: center; }
        .contact-number-item .name { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 400; color: var(--black); display: block; }
        .contact-number-item a { font-size: 0.85rem; color: var(--red); text-decoration: none; letter-spacing: 0.05em; }
        .contact-number-item a:hover { text-decoration: underline; }
        .about-intro-cta { margin-top: 2.5rem; }
        .stats-bar { background: var(--black); color: var(--white); display: grid; grid-template-columns: repeat(4, 1fr); border-top: 3px solid var(--red); }
        .stat-item { padding: 2rem; text-align: center; border-right: 1px solid #333; }
        .stat-item:last-child { border-right: none; }
        .stat-num { font-family: 'Cormorant Garamond', serif; font-size: 3rem; font-weight: 300; color: var(--red); line-height: 1; }
        .stat-label { font-size: 0.7rem; letter-spacing: 0.15em; text-transform: uppercase; color: #aaa; margin-top: 0.4rem; }
        .litters-section { padding: 6rem 4rem; max-width: 1300px; margin: 0 auto; }
        .litters-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1.5rem; }
        .litter-card { background: var(--white); border: 1px solid var(--light-gray); border-radius: 4px; overflow: hidden; transition: transform 0.25s, box-shadow 0.25s; cursor: pointer; text-decoration: none; color: inherit; display: block; }
        .litter-card:hover { transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.1); }
        .litter-card-image { position: relative; aspect-ratio: 4/3; overflow: hidden; background: var(--offwhite); }
        .litter-card-image img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.4s; }
        .litter-card:hover .litter-card-image img { transform: scale(1.04); }
        .availability-badge { position: absolute; top: 0.75rem; right: 0.75rem; background: var(--red); color: white; font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; padding: 0.3rem 0.65rem; border-radius: 2px; }
        .litter-card-body { padding: 1.25rem 1.4rem 1.5rem; }
        .litter-family { font-size: 0.65rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--mid-gray); margin-bottom: 0.4rem; }
        .litter-card-body h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.35rem; font-weight: 400; color: var(--black); margin-bottom: 0.4rem; line-height: 1.2; }
        .litter-desc { font-size: 0.82rem; color: var(--text-light); line-height: 1.6; margin-bottom: 1rem; }
        .litter-meta { display: flex; justify-content: space-between; align-items: center; padding-top: 0.75rem; border-top: 1px solid var(--light-gray); }
        .litter-price { font-family: 'Cormorant Garamond', serif; font-size: 1.1rem; font-weight: 400; color: var(--black); }
        .litter-avail { font-size: 0.7rem; letter-spacing: 0.08em; color: var(--red); text-transform: uppercase; }
        .view-litter { display: block; margin-top: 0.75rem; font-size: 0.7rem; letter-spacing: 0.12em; text-transform: uppercase; color: var(--text-light); transition: color 0.2s; }
        .litter-card:hover .view-litter { color: var(--red); }
        .process-section { background: var(--black); padding: 6rem 4rem; }
        .process-inner { max-width: 1100px; margin: 0 auto; }
        .process-steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 3rem; }
        .process-step { background: transparent; padding: 2rem; border-left: 2px solid var(--red); }
        .step-num { font-family: 'Cormorant Garamond', serif; font-size: 3.5rem; font-weight: 300; color: var(--red); line-height: 1; margin-bottom: 0.5rem; }
        .process-step h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.2rem; font-weight: 400; color: var(--white); margin-bottom: 0.5rem; }
        .process-step p { font-size: 0.85rem; color: #aaa; line-height: 1.7; }
        .process-transport { margin-top: 2rem; background: var(--black); color: var(--white); padding: 2rem 2.5rem; border-radius: 4px; display: flex; align-items: center; gap: 2rem; flex-wrap: wrap; border: 1px solid #333; }
        .process-transport .transport-icon { font-size: 2.5rem; flex-shrink: 0; }
        .process-transport h4 { font-family: 'Cormorant Garamond', serif; font-size: 1.4rem; font-weight: 300; margin-bottom: 0.3rem; }
        .process-transport p { font-size: 0.85rem; color: #aaa; line-height: 1.6; }
        .process-transport .btn-primary { margin-left: auto; flex-shrink: 0; }
        .apply-section { background: var(--white); color: var(--text); padding: 6rem 4rem; }
        .apply-inner { max-width: 700px; margin: 0 auto; }
        .apply-inner .section-header h2 { color: var(--black); }
        .apply-inner .section-header p { color: var(--text-light); }
        .form-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2.5rem; }
        .form-field { display: flex; flex-direction: column; gap: 0.4rem; }
        .form-field.full { grid-column: span 2; }
        .form-field label { font-size: 0.68rem; letter-spacing: 0.15em; text-transform: uppercase; color: var(--text-light); }
        .form-field input, .form-field select, .form-field textarea { background: var(--offwhite); border: 1px solid var(--light-gray); color: var(--text); padding: 0.75rem 1rem; font-family: 'Jost', sans-serif; font-size: 0.9rem; font-weight: 300; border-radius: 2px; outline: none; transition: border-color 0.2s; width: 100%; }
        .form-field input:focus, .form-field select:focus, .form-field textarea:focus { border-color: var(--red); }
        .form-field textarea { resize: vertical; min-height: 100px; }
        .form-submit { margin-top: 1.5rem; text-align: center; }
        .honeypot { display: none; }
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
        .footer-bottom a { color: #555; text-decoration: none; }
        .success-message { text-align: center; padding: 3rem; background: var(--offwhite); border-radius: 4px; }
        .success-message h3 { font-family: 'Cormorant Garamond', serif; font-size: 1.8rem; font-weight: 300; color: var(--black); margin-bottom: 1rem; }
        .success-message p { color: var(--text-light); }
        @media (max-width: 900px) {
          .hero { grid-template-columns: 1fr; min-height: auto; }
          .hero-content { padding: 3rem 1.5rem; }
          .hero-image-right { padding: 0 1.5rem 3rem; height: auto; max-height: 50vh; }
          nav { padding: 0 1.5rem; }
          .nav-links { display: none; }
          .nav-hamburger { display: flex; }
          .nav-links.open { display: flex; flex-direction: column; position: absolute; top: 68px; left: 0; right: 0; background: var(--white); border-bottom: 1px solid var(--light-gray); padding: 1.5rem 2rem; gap: 1.25rem; z-index: 99; }
          .stats-bar { grid-template-columns: repeat(2, 1fr); }
          .stat-item:nth-child(2) { border-right: none; }
          .about-intro { padding: 4rem 1.5rem; }
          .contact-numbers { gap: 1rem 2rem; }
          .litters-section { padding: 4rem 1.5rem; }
          .process-section { padding: 4rem 1.5rem; }
          .process-steps { grid-template-columns: 1fr; }
          .apply-section { padding: 4rem 1.5rem; }
          .form-grid { grid-template-columns: 1fr; }
          .form-field.full { grid-column: span 1; }
          footer { padding: 3rem 1.5rem; }
          .footer-inner { grid-template-columns: 1fr 1fr; gap: 2rem; }
          .footer-brand { grid-column: span 2; }
          .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
        }
      `}</style>

      {/* ANNOUNCEMENT BAR */}
      <div className="announcement">
        ✈ Out of State? We Offer Ground &amp; Air Transport via Puppy Nanny —{' '}
        <a href="tel:2604439035">Call Brooke: (260) 443-9035</a>
      </div>

      {/* NAV */}
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
       <li className="nav-cta"><a href="#apply">Apply Now</a></li>
     </ul>
     <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu">
       <span /><span /><span />
     </button>
    </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-overline">Columbia City, Indiana &middot; Est. 2019</span>
          <h1>Welcome to<br />Yarnelle<br /><em>Fur-Babies</em></h1>
          <p className="hero-sub">A small, family-run breeding program on a beautiful 10-acre farm — where every puppy is loved daily and raised with children from birth.</p>
          <div className="hero-buttons">
            <Link href="/#litters" className="btn-primary">View Available Puppies</Link>
            <Link href="/about" className="btn-secondary" style={{ borderColor: '#555', color: '#fff' }}>Meet Our Family</Link>
          </div>
        </div>
        <div className="hero-image-right">
          <img src="https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773259955/family%20photo.avif" alt="The Yarnelle Family" />
        </div>
      </section>

      {/* ABOUT INTRO */}
      <section className="about-intro">
        <div className="about-intro-inner">
          <span className="overline">About Us</span>
          <h2>A Close-Knit Family of <em>16 &amp; Growing</em></h2>
          <p>We have MOVED! Yes, you read that right! We have moved our family farm to Columbia City, IN to give our doggies more room to run and play! Yarnelle Fur-Babies is a small breeding program run by our very close-knit family of 16 — and growing! We specialize in livestock breeding, training, and sales. <strong>Yarnelle Farms Equine, LLC has been in business for over 35 years.</strong> Not only do we specialize in raising equine, but our fur-babies are our pride and joy, as we absolutely love raising our Doodles! All of our fur-babies are very well socialized around other animals and people of all ages, including children — on our 10-acre family farm located in Columbia City, IN. Contact us today to add one of our fur-babies to your family! 🐾</p>
          <div className="contact-numbers">
            <div className="contact-number-item">
              <span className="name">John &amp; Kathy Yarnelle</span>
              <a href="tel:2604107925">(260) 410-7925</a>
            </div>
            <div className="contact-number-item">
              <span className="name">Dakoda &amp; Brooke Labenz</span>
              <a href="tel:2604439035">(260) 443-9035</a>
            </div>
            <div className="contact-number-item">
              <span className="name">Travis &amp; Hannah Mullendore</span>
              <a href="tel:2604104149">(260) 410-4149</a>
            </div>
            <div className="contact-number-item">
              <span className="name">Hunter &amp; Sarah Nicodemus</span>
              <a href="tel:2604940405">(260) 494-0405</a>
            </div>
            <div className="contact-number-item">
              <span className="name">Luke Yarnelle</span>
              <a href="tel:2602131685">(260) 213-1685</a>
            </div>
          </div>
          <div className="about-intro-cta">
            <Link href="/about" className="btn-secondary">Read Our Full Family Story →</Link>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="stats-bar">
        <div className="stat-item">
          <div className="stat-num">35+</div>
          <div className="stat-label">Years Breeding Experience</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">10</div>
          <div className="stat-label">Acres of Fenced Farm</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">9+</div>
          <div className="stat-label">Breeds Available</div>
        </div>
        <div className="stat-item">
          <div className="stat-num">♥</div>
          <div className="stat-label">Health Guaranteed</div>
        </div>
      </div>

      {/* AVAILABLE LITTERS */}
      <section className="litters-section" id="litters">
        <div className="section-header">
          <span className="overline">Our Puppies</span>
          <h2>Available <em>Breeds &amp; Litters</em></h2>
          <p>Click any breed to view full litter details, meet the parents, and see available puppies.</p>
        </div>
        <div className="litters-grid">
          {litters
           .filter(l => l.active !== false)
           .sort((a, b) => (a.sortOrder || 99) - (b.sortOrder || 99))
           .map(l => {
              const availableCount = (l.puppies || []).filter(p => p.status === 'Available').length
              const cardPhoto = l.cardPhoto
                ? l.cardPhoto.replace(/^\/uploads/, '').replace(/^https:\/\/assets\.tina\.io\/[a-f0-9-]+/, '')
                : 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0001.jpg'
              return (
                <Link key={l.slug} href={`/litters/${l.slug}`} className="litter-card">
                  <div className="litter-card-image">
                    <img src={cardPhoto} alt={l.title} />
                    <span className="availability-badge">{availableCount} Available</span>
                  </div>
                  <div className="litter-card-body">
                    <div className="litter-family">{l.breeder}</div>
                    <h3>{l.title}</h3>
                    <p className="litter-desc">{l.cardDesc}</p>
                    <div className="litter-meta">
                      <span className="litter-price">{l.priceRange}</span>
                      <span className="litter-avail">{availableCount} Available</span>
                    </div>
                    <span className="view-litter">View Litter →</span>
                  </div>
                </Link>
              )
            })}
        </div>
      </section>

      {/* ADOPTION PROCESS */}
      <section className="process-section">
        <div className="process-inner">
          <div className="section-header">
            <span className="overline">Step by Step</span>
            <h2 style={{ color: 'var(--white)' }}>The <em>Adoption</em> Process</h2>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-num">01</div>
              <h4>Browse &amp; Reach Out</h4>
              <p>Browse available breeds above or contact Brooke at (260) 443-9035 about upcoming litters and waitlists.</p>
            </div>
            <div className="process-step">
              <div className="step-num">02</div>
              <h4>Place a Deposit</h4>
              <p>A $200–$400 nonrefundable but transferable deposit holds your spot. Zelle, CashApp, or Cash. Tell us your preferred gender.</p>
            </div>
            <div className="process-step">
              <div className="step-num">03</div>
              <h4>Pick Your Puppy</h4>
              <p>Virtual picks begin at 3–4 weeks for solid litters. Multicolor picks begin at 1–2 weeks via FaceTime. In-person visits at 6 weeks.</p>
            </div>
            <div className="process-step">
              <div className="step-num">04</div>
              <h4>Submit Application</h4>
              <p>Complete the puppy application before your visit. This helps us ensure the perfect match for your family.</p>
            </div>
            <div className="process-step">
              <div className="step-num">05</div>
              <h4>Welcome Home!</h4>
              <p>At 8 weeks your puppy comes home with a goody bag, food, scent blanket, vaccine records, and health guarantee. Balance due in cash.</p>
            </div>
            <div className="process-step" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href="https://cash.app/$YarnelleFurBabies1" className="btn-primary" target="_blank" rel="noopener">Place a Deposit via CashApp →</a>
            </div>
          </div>
          <div className="process-transport">
            <div className="transport-icon">✈</div>
            <div>
              <h4>Can't Pick Up? We'll Deliver!</h4>
              <p>We offer ground transport for local delivery, and air transport via puppy nanny for out-of-state families — personally flown by Luke Yarnelle anywhere in the US.</p>
            </div>
            <Link href="mailto:yarnellefurbabies@gmail.com?subject=Delivery%20Pricing%20Inquiry" className="btn-primary">Contact for Pricing</Link>
          </div>
        </div>
      </section>

      {/* APPLICATION FORM */}
      <section className="apply-section" id="apply">
        <div className="apply-inner">
          <div className="section-header">
            <span className="overline">Apply Today</span>
            <h2>Puppy <em>Application</em></h2>
            <p>Please take a moment to fill this out — it helps us get to know you and find the perfect match. We look forward to adding you to our tribe!</p>
          </div>
          {submitted ? (
            <div className="success-message">
              <h3>Application Received! 🐾</h3>
              <p>Thank you! We'll be in touch soon to discuss your perfect puppy match.</p>
            </div>
          ) : (
            <form name="puppy-application" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="puppy-application" />
              <div className="honeypot"><input name="bot-field" onChange={handleChange} /></div>
              <div className="form-grid">
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
                <div className="form-field">
                  <label>City &amp; State *</label>
                  <input type="text" name="city-state" required onChange={handleChange} />
                </div>
                <div className="form-field">
                  <label>Which Breed or Litter? *</label>
                  <select name="breed" required onChange={handleChange}>
                    <option value="">Select a breed...</option>
                    <option>Saint Berdoodles — John &amp; Kathy (Lucy)</option>
                    <option>Mini F1B Bernedoodles — John &amp; Kathy</option>
                    <option>Mini Multigen Bernedoodles — Luke &amp; Eli</option>
                    <option>Saint Berdoodles (Blake) — Luke &amp; Eli</option>
                    <option>Cavapoos — Dakoda &amp; Brooke</option>
                    <option>Saint Berdoodles (Gracie) — Dakoda &amp; Brooke</option>
                    <option>Micro Mini Goldendoodles — Hunter &amp; Sarah</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Rent or Own?</label>
                  <select name="rent-own" onChange={handleChange}>
                    <option>Own</option>
                    <option>Rent</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Purpose *</label>
                  <select name="purpose" required onChange={handleChange}>
                    <option>Family Pet</option>
                    <option>Breeding Prospect</option>
                    <option>Therapy / Service Animal</option>
                    <option>Show Prospect</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Owned a Dog Before?</label>
                  <select name="dog-experience" onChange={handleChange}>
                    <option>Yes</option>
                    <option>No</option>
                  </select>
                </div>
                <div className="form-field">
                  <label>Veterinarian Name &amp; Phone</label>
                  <input type="text" name="vet" onChange={handleChange} />
                </div>
                <div className="form-field full">
                  <label>Other Pets? (Breed, Age, Gender)</label>
                  <input type="text" name="other-pets" onChange={handleChange} />
                </div>
                <div className="form-field full">
                  <label>How Did You Hear About Us? *</label>
                  <select name="referral" required onChange={handleChange}>
                    <option value="">Select...</option>
                    <option>Google</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>Friend / Word of Mouth</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-field full">
                  <label>Tell Us About Your Family</label>
                  <textarea name="family-info" placeholder="We look forward to getting to know you!" onChange={handleChange}></textarea>
                </div>
              </div>
              <div className="form-submit">
                <button type="submit" className="btn-primary">Submit Application</button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* FOOTER */}
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
            <Link href="/gotjesus">Got Jesus?</Link>
            <Link href="/#litters">Available Litters</Link>
            <Link href="/reviews">Reviews</Link>
            <Link href="/faq">FAQ &amp; Products</Link>
          </div>
          <div className="footer-col">
            <h5>Contact</h5>
            <p>Brooke Labenz</p>
            <a href="tel:2604439035">(260) 443-9035</a>
            <a href="mailto:yarnellefurbabies@gmail.com">yarnellefurbabies@gmail.com</a>
            <br />
            <p>John Yarnelle</p>
            <a href="tel:2604107925">(260) 410-7925</a>
          </div>
          <div className="footer-col">
            <h5>Follow Us</h5>
            <a href="https://www.instagram.com/yarnellefurbabies/" target="_blank" rel="noopener">📷 @yarnellefurbabies</a>
            <br />
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
  const { data } = await client.queries.litterConnection()
  return {
    props: {
      litters: data.litterConnection.edges.map(e => e.node),
    },
  }
}
