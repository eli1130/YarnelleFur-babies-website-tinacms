import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

export default function About() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>About Us | Yarnelle Fur-Babies — Columbia City, IN</title>
        <meta name="description" content="Meet the Yarnelle family — a close-knit family of 16 raising exceptional doodle puppies on a 10-acre farm in Columbia City, Indiana." />
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
        .page-hero { background:var(--black); padding:5rem 4rem; text-align:center; border-bottom:3px solid var(--red); }
        .page-hero .overline { display:block; font-size:0.7rem; letter-spacing:0.22em; text-transform:uppercase; color:var(--red); margin-bottom:1rem; }
        .page-hero h1 { font-family:'Cormorant Garamond',serif; font-size:clamp(2.5rem,5vw,4rem); font-weight:300; color:var(--white); line-height:1.1; margin-bottom:1rem; }
        .page-hero h1 em { font-style:italic; color:var(--red); }
        .page-hero p { color:#aaa; font-size:1rem; max-width:680px; margin:0 auto; line-height:1.8; }
        .family-section { padding:5rem 4rem; max-width:100%; }
        .family-section.alt { background:var(--offwhite); }
        .family-inner { max-width:1200px; margin:0 auto; }
        .family-header { text-align:center; margin-bottom:3rem; position:relative; }
        .family-header::after { content:''; display:block; width:60px; height:2px; background:var(--red); margin:1.5rem auto 0; }
        .family-header .overline { display:block; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--red); margin-bottom:0.75rem; }
        .family-header h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.8rem); font-weight:300; color:var(--black); line-height:1.2; }
        .family-header h2 em { font-style:italic; color:var(--red); }
        .photo-grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:0.75rem; margin-bottom:2.5rem; }
        .photo-grid-3 img { width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:4px; display:block; }
        .photo-grid-featured { display:grid; grid-template-columns:1.4fr 1fr; gap:0.75rem; margin-bottom:2.5rem; }
        .photo-grid-featured img { width:100%; aspect-ratio:4/3; object-fit:cover; border-radius:4px; display:block; }
        .photo-grid-featured .right-col { display:grid; grid-template-rows:1fr 1fr; gap:0.75rem; }
        .family-bio { max-width:780px; margin:0 auto; text-align:center; }
        .family-bio p { font-size:0.98rem; color:var(--text-light); line-height:1.9; }
        .family-bio p strong { color:var(--text); font-weight:400; }
        .cta-strip { background:var(--offwhite); border-top:3px solid var(--red); padding:4rem; text-align:center; }
        .cta-strip h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:300; color:var(--black); margin-bottom:1rem; }
        .cta-strip h2 em { font-style:italic; color:var(--red); }
        .cta-strip p { color:var(--text-light); font-size:0.95rem; margin-bottom:2rem; max-width:500px; margin-left:auto; margin-right:auto; }
        .cta-buttons { display:flex; gap:1rem; justify-content:center; flex-wrap:wrap; }
        .btn-primary { background:var(--red); color:#fff; padding:0.85rem 2rem; text-decoration:none; font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; border-radius:2px; transition:background 0.2s; display:inline-block; font-family:'Jost',sans-serif; }
        .btn-primary:hover { background:var(--red-dark); }
        .btn-secondary { border:1px solid var(--mid-gray); color:var(--text); padding:0.85rem 2rem; text-decoration:none; font-size:0.78rem; letter-spacing:0.12em; text-transform:uppercase; border-radius:2px; transition:all 0.2s; display:inline-block; font-family:'Jost',sans-serif; }
        .btn-secondary:hover { border-color:var(--black); color:var(--black); }
        footer { background:var(--black); border-top:1px solid #222; padding:3rem 4rem; }
        .footer-inner { max-width:1200px; margin:0 auto; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:3rem; }
        .footer-brand .nav-logo { display:block; margin-bottom:1rem; color:var(--white); }
        .footer-brand p { font-size:0.82rem; color:#666; line-height:1.7; max-width:260px; }
        .footer-col h5 { font-size:0.68rem; letter-spacing:0.18em; text-transform:uppercase; color:#666; margin-bottom:1rem; }
        .footer-col a { display:block; font-size:0.85rem; color:#aaa; text-decoration:none; margin-bottom:0.5rem; transition:color 0.2s; }
        .footer-col a:hover { color:var(--white); }
        .footer-col p { font-size:0.85rem; color:#aaa; line-height:1.7; margin-bottom:0.4rem; }
        .footer-bottom { max-width:1200px; margin:2.5rem auto 0; padding-top:1.5rem; border-top:1px solid #222; display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:#555; }
        .photo-grid-wix { display:grid; grid-template-columns:1fr 1.4fr 1fr; grid-template-rows:1fr 1fr; gap:0.75rem; margin-bottom:2.5rem; }
        .photo-grid-wix img { width:100%; height:220px; object-fit:cover; border-radius:4px; display:block; }
        .photo-grid-wix .center { grid-row: span 2; height:100%; }
        @media (max-width:900px) {
          nav { padding:0 1.5rem; }
          .nav-links { display:none; }
          .nav-hamburger { display:flex; }
          .nav-links.open { display:flex; flex-direction:column; position:absolute; top:68px; left:0; right:0; background:var(--white); border-bottom:1px solid var(--light-gray); padding:1.5rem 2rem; gap:1.25rem; z-index:99; }
          .page-hero { padding:3rem 1.5rem; }
          .family-section { padding:3rem 1.5rem; }
          .photo-grid-3 { grid-template-columns:1fr 1fr; }
          .photo-grid-featured { grid-template-columns:1fr; }
          .cta-strip { padding:3rem 1.5rem; }
          footer { padding:3rem 1.5rem; }
          .footer-inner { grid-template-columns:1fr 1fr; gap:2rem; }
          .footer-brand { grid-column:span 2; }
          .footer-bottom { flex-direction:column; gap:0.5rem; text-align:center; }
          .photo-grid-wix { grid-template-columns:1fr; grid-template-rows:auto; gap:0.5rem; }
          .photo-grid-wix img { height:auto; }
          .photo-grid-wix .center { height:auto; }
        }
      `}</style>

      <div className="announcement">✈ Out of State? We Offer Ground &amp; Air Transport via Puppy Nanny — <a href="tel:2604439035">Call Brooke: (260) 443-9035</a></div>

      <nav>
        <Link href="/" className="nav-logo">Yarnelle <span>Fur-Babies</span></Link>
        <ul className={`nav-links${navOpen ? ' open' : ''}`}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about" className="active">About Us</Link></li>
          <li><Link href="/gotjesus">Got Jesus?</Link></li>
          <li><Link href="/#litters">Available Litters</Link></li>
          <li><Link href="/reviews">Reviews</Link></li>
          <li><Link href="/facility">Our Facility</Link></li>
          <li><Link href="/faq">FAQ &amp; Products</Link></li>
          <li className="nav-cta"><Link href="/#apply">Apply Now</Link></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>

      <section className="page-hero">
        <span className="overline">Columbia City, Indiana</span>
        <h1>Meet the <em>Yarnelle</em> Family</h1>
        <p>Thanks so much for taking the time to visit our website! We wanted to tell you a little more about ourselves and who your fur-baby grew up with. We have been raising equine livestock for over 35 years and specialized in training, breeding, and sales. Dogs have <strong style={{color:'white'}}>ALWAYS</strong> been a huge part of our lives, and we've recently grown our canine program right alongside our growing family. Each of our kids has their own breed that they've pursued with passion. Believe it or not — we have <strong style={{color:'white'}}>SIX</strong> kiddos!</p>
      </section>

      {/* JOHN & KATHY */}
      <section className="family-section alt">
        <div className="family-inner">
          <div className="family-header">
            <span className="overline">The Founders</span>
            <h2>John &amp; Kathy <em>Yarnelle</em></h2>
          </div>
          <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.75rem', marginBottom:'2.5rem'}}>
           <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0015.jpg" alt="John and Kathy Yarnelle" style={{width:'100%', aspectRatio:'4/3', objectFit:'contain', background:'transparent', borderRadius:'4px'}} />
           <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0013.jpg" alt="John and Kathy Yarnelle" style={{width:'100%', aspectRatio:'4/3', objectFit:'contain', background:'transparent', borderRadius:'4px'}} />
           <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/Horse_pic_eovn9g.avif" alt="Yarnelle Farm horses" style={{width:'100%', aspectRatio:'4/3', objectFit:'contain', background:'transparent', borderRadius:'4px'}} />
           <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0020.jpg" alt="Yarnelle property" style={{width:'100%', aspectRatio:'4/3', objectFit:'contain', background:'transparent', borderRadius:'4px'}} />
         </div>
          <div className="family-bio">
            <p>John and Kathy Yarnelle are the heart and soul of Yarnelle Fur-Babies. They have been raising equine livestock for over <strong>35 years</strong> and have built a reputation for excellence through Yarnelle Farms Equine, LLC. As their family grew — through biological children, adoptions from Guatemala, and an ongoing journey adopting from Haiti — so did their love of raising exceptional dogs and doodles. All of our dogs and puppies are loved on <strong>DAILY</strong>. They live on a 10-acre farm with 6 acres of in-ground fencing so their dogs can run and play every single day.</p>
          </div>
        </div>
      </section>

      {/* TRAVIS & HANNAH */}
      <section className="family-section">
        <div className="family-inner">
          <div className="family-header">
            <span className="overline">The Mullendores</span>
            <h2>Travis &amp; Hannah <em>Mullendore</em></h2>
          </div>
         <div className="photo-grid-wix">
         <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0017.jpg" alt="Travis and Hannah Mullendore" />
         <img className="center" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_9e368b186e944f2f9985d1ab7f210a91_mv2_w2w307.avif" alt="Mullendore family" />
         <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_d2b117d4847b43ceb2b09dcc88e9dd18_mv2_qesfuw.avif" alt="Mullendore kids" />
         <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_e035be34f77f4fa48a6c28a135914210_mv2_vmom5g.avif" alt="Mullendore with puppy" />
         <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_b89e81c078b44f60b05bfc7dbd2b618d_mv2_qx99px.avif" alt="Mullendore kids with puppy" style={{objectFit:'contain', background:'transparent'}} />
         <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_afafdff0818649d1af3d5b5511d775de_mv2_ykue2e.avif" alt="Mullendore baby with puppy" style={{objectFit:'contain', background:'transparent'}} />
        </div>
          <div className="family-bio">
            <p>Meet Hannah and her family! Travis and Hannah have five little ones — <strong>Shiloh, Micah, Olive, Uriah, and Boaz</strong>. We are so incredibly blessed to have these kiddos in our lives. Uriah and Boaz are their newly adopted boys from <strong>Haiti</strong> and we are so excited and beyond blessed! Rest assured — between these five and their cousins, our puppies are incredibly well socialized!</p>
          </div>
        </div>
      </section>

      {/* HUNTER & SARAH */}
      <section className="family-section alt">
        <div className="family-inner">
          <div className="family-header">
            <span className="overline">The Nicodemus Family</span>
            <h2>Hunter &amp; Sarah <em>Nicodemus</em></h2>
          </div>
          <div className="photo-grid-wix">
          <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0018.jpg" alt="Hunter and Sarah Nicodemus" style={{objectFit:'contain', background:'#f7f7f7'}} />
          <img className="center" src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_9d27f3058d7144e79f184b4d7fcda135_mv2_by1s8n.avif" alt="Nicodemus family" style={{objectFit:'contain', background:'#f7f7f7'}} />
          <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_967e34bfca374a58a26182a1159d6baf_mv2_bbps3t.avif" alt="Nicodemus kids" style={{objectFit:'contain', background:'#f7f7f7'}} />
          <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_8df2d5432f224dc78e93b2603db6f0db_mv2_idvltg.avif" alt="Nicodemus family with puppies" style={{objectFit:'contain', background:'#f7f7f7'}} />
        </div>
          <div className="family-bio">
            <p>Meet Sarah and her family! Hunter and Sarah have four little ones — <strong>Esther, Jonah John, Seth Jr., and Noah</strong>. Seth Jr. is named after the oldest boy in the Yarnelle family, Seth Yarnelle, who we tragically lost in an accident when he was just 2.5 years old. We miss him dearly. All four kids sure enjoy <strong>all of the puppy love!</strong></p>
          </div>
        </div>
      </section>

      {/* DAKODA & BROOKE */}
      <section className="family-section">
        <div className="family-inner">
          <div className="family-header">
            <span className="overline">The Labenz Family</span>
            <h2>Dakoda &amp; Brooke <em>Labenz</em></h2>
          </div>
          <div className="photo-grid-3">
            <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0016.jpg" alt="Dakoda and Brooke Labenz" style={{objectFit:'contain', background:'transparent'}} />
            <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_14d7f9bb97804b729bd525928f90c1df_mv2_pm6kzr.avif" alt="Brooke with family" style={{objectFit:'contain', background:'transparent'}} />
            <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_10781144b70342d99fabbdbadf8c81e2_mv2_esx7k4.avif" alt="Labenz girls" style={{objectFit:'contain', background:'transparent'}} />
            <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_731a9340371c448b9f12c8ede0d35cf0_mv2_prfqgy.avif" alt="Labenz girls with puppy" style={{objectFit:'contain', background:'transparent'}} />
            <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_dbe35e37f653496badf3b06732247a98_mv2_my1t6y.avif" alt="Brooke with puppy" style={{objectFit:'contain', background:'transparent'}} />
            <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_565d0698797c47a68c9e72b052977605_mv2_mcobii.avif" alt="Labenz family" style={{objectFit:'contain', background:'transparent'}} />
          </div>
          <div className="family-bio">
            <p>Meet Brooke and her family! Brooke and Dakoda have three little girls — <strong>Opal, Norah, and Vaeda</strong>. All three girls have made it very clear that they <strong>LOVE</strong> their puppy cuddles! Brooke is the main sales contact here at Yarnelle Fur-Babies, helping her mom and dad out since they aren&apos;t so &ldquo;tech savvy&rdquo;! She will be answering most of your questions, giving you updates on your puppies, and of course helping take care of them!</p>
          </div>
        </div>
      </section>

      {/* SETH, LUKE & ELI */}
      <section className="family-section alt">
        <div className="family-inner">
          <div className="family-header">
            <span className="overline">The Yarnelle Boys</span>
            <h2>Seth, Luke &amp; Eli <em>Yarnelle</em></h2>
          </div>
          <div className="photo-grid-3">
           <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/image_0019.jpg" alt="Seth Yarnelle" style={{objectFit:'contain', background:'#f7f7f7'}} />
           <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_cee5a0e65b7b40faa35d23fea0b4b0a7_mv2_bo11xk.avif" alt="Luke and Eli with dogs" style={{objectFit:'contain', background:'#f7f7f7'}} />
           <img src="https://pub-e847384c23164145a930ab957dbde017.r2.dev/66ab5b_506da0417d9f4d228ebfb2e2d8ac1cd7_mv2_knloy5.avif" alt="Luke and Eli" style={{objectFit:'contain', background:'#f7f7f7'}} />
          </div>
          <div className="family-bio">
            <p>Meet Seth, Luke, and Eli! Our three handsome boys are adopted from <strong>Guatemala</strong> and have been such a blessing to our family. Seth passed away in a tragic accident when he was just <strong>2.5 years old</strong>. He had a deep passion for all animals he came into contact with. We miss him every day. Luke and Eli are both an incredible help with all the dogs and puppies, and love to spend time with them whenever they have the chance! 🤍</p>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <h2>Ready to Find Your <em>Perfect Pup?</em></h2>
        <p>Browse our available litters or fill out an application — we&apos;d love to welcome you into the Yarnelle family!</p>
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
            <p>Brooke Labenz</p>
            <a href="tel:2604439035">(260) 443-9035</a>
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
