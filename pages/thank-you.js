import Head from 'next/head';
import Link from 'next/link';

export default function ThankYou() {
  return (
    <>
      <Head>
        <title>Thank You | Yarnelle Fur-Babies</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div style={{
        minHeight: '60vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '4rem 2rem'
      }}>
        <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2.5rem', marginBottom: '1rem' }}>
          Application Received! 🐾
        </h1>
        <p style={{ fontFamily: 'Jost, sans-serif', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '500px' }}>
          Thank you! We'll be in touch soon to discuss your perfect puppy match.
        </p>
        <Link href="/" style={{ color: '#8B0000', fontFamily: 'Jost, sans-serif' }}>
          ← Back to Home
        </Link>
      </div>
    </>
  );
}
