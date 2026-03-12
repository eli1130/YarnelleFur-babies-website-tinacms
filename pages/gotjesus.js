import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const verses = [
  { ref: 'John 3:16', text: '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life."' },
  { ref: 'Jeremiah 29:11', text: '"For I know the plans I have for you," declares the Lord, "plans to prosper you and not to harm you, plans to give you hope and a future."' },
  { ref: '1 Corinthians 13:13', text: '"And now these three remain: faith, hope and love. But the greatest of these is love."' },
  { ref: 'Psalm 23:4', text: '"Even though I walk through the darkest valley, I will fear no evil, for you are with me; your rod and your staff, they comfort me."' },
  { ref: 'Proverbs 3:5-6', text: '"Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight."' },
  { ref: 'Philippians 4:13', text: '"I can do all this through him who gives me strength."' },
];

export default function GotJesus() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Got Jesus? | Yarnelle Fur-Babies</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <style>{`
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
        .nav-links a:hover, .nav-links a.active { color:var(--red); }
        .nav-links .nav-cta a { background:var(--red); color:var(--white); padding:0.5rem 1.2rem; border-radius:2px; }
        .nav-links .nav-cta a:hover { background:var(--red-dark); }
        .nav-hamburger { display:none; flex-direction:column; gap:5px; cursor:pointer; background:none; border:none; padding:4px; }
        .nav-hamburger span { display:block; width:24px; height:2px; background:var(--black); }
        .page-hero { background:var(--black); padding:6rem 4rem; text-align:center; border-bottom:3px solid var(--red); }
        .page-hero .overline { display:block; font-size:0.7rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--red); margin-bottom:1rem; }
        .page-hero h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(2.8rem,6vw,5rem); font-weight:300; color:var(--white); line-height:1.1; margin-bottom:1.5rem; }
        .page-hero h1 em { font-style:italic; color:var(--red); }
        .page-hero p { color:#bbb; font-size:1.05rem; max-width:680px; margin:0 auto; line-height:1.9; }
        .verses-section { background:var(--offwhite); padding:5rem 4rem; border-top:1px solid var(--light-gray); border-bottom:1px solid var(--light-gray); }
        .verses-inner { max-width:900px; margin:0 auto; }
        .verses-header { text-align:center; margin-bottom:4rem; }
        .verses-header .overline { display:block; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--red); margin-bottom:0.75rem; }
        .verses-header h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.8rem); font-weight:300; color:var(--black); }
        .verses-header h2 em { font-style:italic; color:var(--red); }
        .verse-grid { display:grid; grid-template-columns:1fr 1fr; gap:2rem; }
        .verse-card { background:var(--white); border-left:3px solid var(--red); padding:2rem 2rem 2rem 2.5rem; border-radius:0 4px 4px 0; }
        .verse-ref { font-size:0.72rem; letter-spacing:0.15em; text-transform:uppercase; color:var(--red); margin-bottom:1rem; display:block; }
        .verse-text { font-family:'Cormorant Garamond',serif; font-size:1.2rem; font-weight:300; font-style:italic; color:var(--text); line-height:1.8; }
        .faith-closing { background:var(--black); padding:5rem 4rem; text-align:center; border-top:3px solid var(--red); }
        .faith-closing h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.8rem); font-weight:300; color:var(--white); margin-bottom:1.5rem; }
        .faith-closing h2 em { font-style:italic; color:var(--red); }
        .faith-closing p { color:#aaa; font-size:1rem; max-width:580px; margin:0 auto 2.5rem; line-height:1.9; }
        .cta-buttons { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
        .btn-primary { background:var(--red); color:#fff; padding:0.85rem 2rem; text-decoration:none; font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; border-radius:2px; transition:background 0.2s; display:inline-block; font-family:'Jost',sans-serif; }
        .btn-primary:hover { background:var(--red-dark); }
        .btn-secondary { border:1px solid #555; color:var(--white); padding:0.85rem 2rem; text-decoration:none; font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; border-radius:2px; transition:all 0.2s; display:inline-block; font-family:'Jost',sans-serif; }
        .btn-secondary:hover { border-color:var(--white); }
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
          .page-hero { padding:4rem 1.5rem; }
          .verses-section { padding:3rem 1.5rem; }
          .verse-grid { grid-template-columns:1fr; }
          .faith-closing { padding:3rem 1.5rem; }
          footer { padding:3rem 1.5rem; }
          .footer-inner { grid-template-columns:1fr 1fr; gap:2rem; }
          .footer-brand { grid-column:span 2; }
          .footer-bottom { flex-direction:column; gap:0.5rem; text-align:center; }
        }
      `}</style>

      <div className="announcement">✈ Out of State? We Offer Ground &amp; Air Transport via Puppy Nanny — <a href="tel:2604439035">Call Brooke: (260) 443-9035</a></div>

      <nav>
        <Link href="/" className="nav-logo">Yarnelle <span>Fur-Babies</span></Link>
        <ul className={`nav-links${navOpen ? ' open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/gotjesus" className="active">Got Jesus?</Link></li>
          <li><Link href="/#litters">Available Litters</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/facility">Our Facility</Link></li>
          <li><Link href="/faq">FAQ &amp; Products</Link></li>
          <li className="nav-cta"><Link href="/#apply">Apply Now</Link></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>

      <section className="page-hero">
        <span className="overline">Faith &amp; Family</span>
        <h1>Got <em>Jesus?</em></h1>
        <p>I know what you are thinking… this has nothing to do with our page. The truth is, it has <em style={{color:'#ddd'}}>everything</em> to do with not only our page, but the care that is provided to each of our puppies. We are a very close-knit family raised on our family farm in Indiana. We were all blessed to be able to grow up in a small Lutheran church and school. Every puppy we raise, every family we welcome, and every litter we bring into this world is done with love, gratitude, and faith. We give all the thanks to the Lord above! Please enjoy some of our favorite Bible verses. 🙏</p>
      </section>

      <section className="verses-section">
        <div className="verses-inner">
          <div className="verses-header">
            <span className="overline">Scripture</span>
            <h2>Our Favorite <em>Bible Verses</em></h2>
          </div>
          <div className="verse-grid">
            {verses.map((v) => (
              <div key={v.ref} className="verse-card">
                <span className="verse-ref">{v.ref}</span>
                <p className="verse-text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="faith-closing">
        <h2>Blessed to Share Our <em>Faith</em></h2>
        <p>Our faith is at the center of everything we do — how we care for our animals, how we raise our family, and how we welcome each of you into the Yarnelle Fur-Babies family. God bless!</p>
        <div className="cta-buttons">
          <Link href="/litters" className="btn-primary">View Available Puppies</Link>
          <Link href="/about" className="btn-secondary">Meet Our Family</Link>
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
            <Link href="/">Home</Link><Link href="/about">About Us</Link>
            <Link href="/gotjesus">Got Jesus?</Link><Link href="/litters">Available Litters</Link>
            <Link href="/reviews">Reviews</Link><Link href="/faq">FAQ &amp; Products</Link>
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
