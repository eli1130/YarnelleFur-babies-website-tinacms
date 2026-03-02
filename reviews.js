import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const reviewImages = [
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0031.jpg', alt: 'Review from Katie Hendrickson' },
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0032.jpg', alt: 'Review from Taylor Varnes' },
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0033.jpg', alt: 'Review from Ryann Grabher' },
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0034.jpg', alt: 'Review from Alex Bo Kim' },
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0035.jpg', alt: 'Review from Rachael Louise' },
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0036.jpg', alt: 'Review from Sami James' },
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0037.jpg', alt: 'Review from Bailey Dailey' },
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0038.jpg', alt: 'Review from Jenny Finney' },
  { src: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/image_0039.jpg', alt: 'Review from Elizabeth Bower' },
];

export default function Reviews() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Customer Reviews | Yarnelle Fur-Babies</title>
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
        .page-hero { background:var(--black); padding:5rem 4rem; text-align:center; border-bottom:3px solid var(--red); }
        .page-hero .overline { display:block; font-size:0.7rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--red); margin-bottom:1rem; }
        .page-hero h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(2.5rem,5vw,4rem); font-weight:300; color:var(--white); line-height:1.1; margin-bottom:1rem; }
        .page-hero h1 em { font-style:italic; color:var(--red); }
        .page-hero p { color:#aaa; font-size:1rem; max-width:580px; margin:0 auto; line-height:1.8; }
        .reviews-section { padding:5rem 4rem; background:var(--offwhite); }
        .reviews-inner { max-width:1100px; margin:0 auto; }
        .reviews-grid { columns:2; column-gap:1.5rem; }
        .review-card { break-inside:avoid; margin-bottom:1.5rem; background:var(--white); border:1px solid var(--light-gray); border-radius:4px; overflow:hidden; }
        .review-card img { width:100%; display:block; }
        .facebook-cta { background:var(--black); padding:4rem; text-align:center; border-top:3px solid var(--red); }
        .facebook-cta h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:300; color:var(--white); margin-bottom:1rem; }
        .facebook-cta h2 em { font-style:italic; color:var(--red); }
        .facebook-cta p { color:#aaa; font-size:0.95rem; max-width:500px; margin:0 auto 2rem; line-height:1.8; }
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
          .page-hero { padding:3rem 1.5rem; }
          .reviews-section { padding:3rem 1.5rem; }
          .reviews-grid { columns:1; }
          .facebook-cta { padding:3rem 1.5rem; }
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
          <li><Link href="/gotjesus">Got Jesus?</Link></li>
          <li><Link href="/litters">Available Litters</Link></li>
          <li><Link href="/reviews" className="active">Reviews</Link></li>
          <li><Link href="/faq">FAQ &amp; Products</Link></li>
          <li className="nav-cta"><Link href="/#apply">Apply Now</Link></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>

      <section className="page-hero">
        <span className="overline">Happy Families</span>
        <h1>What Our Families <em>Are Saying</em></h1>
        <p>Real reviews from the families who&apos;ve welcomed a Yarnelle Fur-Baby into their homes. We are so grateful for each and every one of you!</p>
      </section>

      <section className="reviews-section">
        <div className="reviews-inner">
          <div className="reviews-grid">
            {reviewImages.map((r) => (
              <div key={r.src} className="review-card">
                <img src={r.src} alt={r.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="facebook-cta">
        <h2>See More on <em>Facebook</em></h2>
        <p>Follow us on Facebook and Instagram for the latest puppy updates, litter announcements, and happy family photos!</p>
        <div className="cta-buttons">
          <a href="https://www.instagram.com/yarnellefurbabies/" target="_blank" rel="noopener" className="btn-primary">📷 Follow on Instagram</a>
          <Link href="/#apply" className="btn-secondary">Apply for a Puppy</Link>
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
