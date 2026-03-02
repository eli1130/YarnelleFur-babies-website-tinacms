import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Layout({ children, title = 'Yarnelle Fur-Babies' }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const router = useRouter()

  return (
    <>
      <Head>
        <title>{title} | Yarnelle Fur-Babies</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
      </Head>

      <div className="announcement">
        ✈ Out of State? We Offer Ground &amp; Air Transport via Puppy Nanny —{' '}
        <a href="tel:2604439035">Call Brooke: (260) 443-9035</a>
      </div>

      <nav>
        <Link href="/" className="nav-logo">
          Yarnelle <span>Fur-Babies</span>
        </Link>
        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><Link href="/" className={router.pathname === '/' ? 'active' : ''}>Home</Link></li>
          <li><Link href="/about" className={router.pathname === '/about' ? 'active' : ''}>About Us</Link></li>
          <li><Link href="/gotjesus" className={router.pathname === '/gotjesus' ? 'active' : ''}>Got Jesus?</Link></li>
          <li><Link href="/litters" className={router.pathname.startsWith('/litters') ? 'active' : ''}>Available Litters</Link></li>
          <li><Link href="/reviews" className={router.pathname === '/reviews' ? 'active' : ''}>Reviews</Link></li>
          <li><Link href="/faq" className={router.pathname === '/faq' ? 'active' : ''}>FAQ &amp; Products</Link></li>
          <li className="nav-cta"><Link href="/#apply">Apply Now</Link></li>
        </ul>
        <button
          className="nav-hamburger"
          aria-label="Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>

      <main>{children}</main>

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
            <Link href="/litters">Available Litters</Link>
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
            <a href="https://www.instagram.com/yarnellefurbabies/" target="_blank" rel="noopener">
              📷 @yarnellefurbabies
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>&copy; 2025 Yarnelle Fur-Babies · Columbia City, Indiana</span>
          <span>Family-Raised Doodles with Love</span>
        </div>
      </footer>
    </>
  )
}
