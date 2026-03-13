import Head from 'next/head';
import Link from 'next/link';
import { useState } from 'react';

const faqCategories = [
  {
    title: 'Socialization & Visits',
    items: [
      { q: 'Are your puppies well socialized?', a: 'Our puppies are incredibly well socialized as they grow. They are family raised around children ranging from the ages newborn to 16. They are loved and cuddled every single day, and are provided with the utmost care. These puppies are not only socialized well with children, but also with other dogs and cats. We strive for our puppies to be as friendly as possible, and mingle with anyone and everyone that they may come into contact with. Our puppies are handled only by us for the first 6 weeks of their lives to avoid any exposure to communicable diseases. We allow in-person puppy visits once puppies reach 6 weeks of age.' },
    ],
  },
  {
    title: 'Bringing Your Puppy Home',
    items: [
      { q: "Why can't my puppy come home earlier than 8 weeks?", a: "It is important to understand that during a puppy's first few weeks of life, they are taught mannerisms from their mom and siblings. This time is crucial to be spent with their littermates to avoid any behavioral problems. It is also Indiana's state law that a puppy is kept with their mom and siblings until 8 weeks of age. Although sometimes it may be convenient to pick your puppy up earlier, we are unfortunately unable to accommodate a pickup earlier than 8 weeks. We are very flexible and will work with you on pickup date and time once your puppy reaches 8 weeks." },
      { q: 'What comes home with my puppy?', a: 'Your puppy will come home with a "goody bag" of toys, food, a blanket with mom and siblings\' scent, a puppy health chart (vaccines and dewormer record), and a signed copy of the health guarantee. We ask that you have read through our health guarantee and are ready to sign it at pickup. If your puppy is being transported, you will be required to sign the health guarantee and email a copy to yarnellefurbabies@gmail.com before your puppy departs.' },
      { q: 'What should I expect the first day and night?', a: 'It is important to know that your puppy will be very stressed from traveling, changing to a new environment, and leaving their mom, siblings, and everything they have known as "home." Provide them with as much comfort as possible — lots of cuddles and love! We recommend holding your puppy during the travel home to begin the bonding process. Your puppy will most likely cry in their crate at bedtime. We recommend a "Snuggle Puppy" with a heartbeat that they can cuddle with at night. Cover the crate with a blanket so your puppy cannot see out at bedtime, creating a dark and quiet space to help limit crying.' },
      { q: 'What kind of schedule has my puppy been on?', a: 'Puppies are a lot like an infant baby — it is not abnormal for them to sleep 18–20 hours a day. They require a lot of time to sleep, play, eat, potty, and cuddle! They are used to getting out to play during the day for about 2–3 hours with their siblings. Regarding feeding, they are free fed, meaning they are used to having a full bowl of food accessible to eat as they please. The recommended amount of food per day is labeled on the back of Purina Puppy Chow Tender and Crunchy.' },
    ],
  },
  {
    title: 'Health & Care',
    items: [
      { q: 'What type of food are these puppies on?', a: 'We have tried several different brands and have had the best outcome with Purina Puppy Chow Tender and Crunchy. The tender pieces allow puppies to begin eating hard food at 3–4 weeks of age, promoting a healthy start to growing! When your puppy comes home we will provide a zip-lock bag of food for their first couple of days. We recommend continuing the same food for about 1–2 weeks before slowly mixing in a new food over 7–10 days.' },
      { q: 'Why does my puppy have diarrhea?', a: 'We take serious precautions and maintain a strict schedule of vaccines and dewormer to prevent any common communicable diseases. Stress symptoms can include acting shy or timid, no appetite, crying, diarrhea, vomiting, and pacing. It is also very important to understand that EVERY dog needs dewormed monthly. After a dose of dewormer, do not be alarmed by common symptoms including upset stomach, diarrhea, vomiting, or even worms in their feces. This is completely normal. If your puppy does have diarrhea, mix white rice or pure pumpkin with their food to bulk up their stool.' },
      { q: 'Has my puppy been on any flea and tick prevention?', a: 'Your puppy has not been started on any flea or tick medication as many cannot be started until puppies reach a certain age due to possible side effects. Please review this topic with your veterinarian and start them on your vet\'s recommended brand at the recommended age. Your puppy will have been dewormed with Pyrantel every 2 weeks from birth and vaccinated at 6 weeks of age before joining their new family.' },
      { q: 'Have they been crate trained or potty trained?', a: "A puppy's bladder is not fully developed until around 4–6 months of age. With that being said, they may need to go potty roughly every 1–3 hours. We do provide our puppies with corn shavings in a separate area in their pen at 3 weeks of age to introduce the idea of going potty away from where they eat and sleep. We recommend starting crate training from day one. Be sure not to give them too much space — purchase a crate for their estimated full grown size and use a divider to keep the space small as a puppy." },
      { q: 'Are these puppies microchipped?', a: 'Our puppies are not microchipped. We have refrained from making this decision for you, as some families do not wish to have their puppies microchipped. Most vets can complete this at your puppy\'s first vet visit (within 7 business days of coming home) if you choose.' },
    ],
  },
  {
    title: 'Coat, Shedding & Grooming',
    items: [
      { q: 'How will I know if my puppy will shed?', a: 'It is important to understand that every puppy and dog sheds — the amount of shedding is what varies. Almost all doodles have very minimal shedding where it is barely noticeable. The saying "the curlier their coat, the less shedding" is typically true. For families with mild allergies, first generation (F1) doodles are a great fit. For families with more moderate allergies, F1b or F1bb is a better option as they have more Poodle in their genetic makeup.' },
      { q: 'How often should my puppy be groomed?', a: 'Goldendoodles, Bernedoodles, Saint Berdoodles, and Aussiedoodles will need groomed routinely every 3–6 months depending on their individual coat and generation. The more Poodle in their genetic makeup, the more often they will need groomed. F1 doodles require the least maintenance, F1b stands at the "middle ground," and F1bb requires the most.' },
      { q: 'What shampoo and brushes are best to use?', a: 'We use a Wet Brush for our puppies, sires, and dams — great for in between grooming and after baths. We also use a slicker brush and Furminator from Amazon. For shampoo, we use Baby Magic, Nature\'s Specialty, or any children\'s shampoo that is tear free.' },
    ],
  },
  {
    title: 'Deposits & Payment',
    items: [
      { q: 'How do deposits and payment work?', a: 'A $200–$400 nonrefundable but transferable deposit is accepted via Zelle, CashApp, or Cash. The remaining balance is due in CASH ONLY at pickup. For transported puppies, full payment is required 2–3 business days before departure via CashApp or Zelle. Contact Brooke at (260) 443-9035 with any questions.' },
      { q: 'Are these puppies AKC or CKC registered?', a: 'Only purebred puppies can be registered with the American Kennel Club (AKC). Many designer breeds have their own registration clubs. Goldendoodles can be registered through the Continental Kennel Club (CKC) — you will not need any information from the sire or dam to do so.' },
    ],
  },
  {
    title: 'Toys & Treats',
    items: [
      { q: 'What toys and treats does my puppy like?', a: 'We introduce toys slowly as our puppies grow to get them acclimated to different types of squeakers, bones, balls, and more. We recommend RAWHIDE FREE bones and toys. Your puppy will come home with their favorite toy at 8 weeks. We do recommend using training treats sparingly, as this can cause tummy upset in your new puppy.' },
    ],
  },
];

const products = [
  { category: 'Food', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357653/66ab5b_5fbddc464b2b4198a4362e20e031aad0_mv2_xq4qul.avif', title: 'Purina Puppy Chow Tender & Crunchy', desc: "The food every Yarnelle puppy is raised on. We'll send a small bag home with your pup — if switching, transition slowly over 7–10 days.", link: 'https://www.amazon.com/s?k=Purina+Puppy+Chow+Tender+Crunchy' },
  { category: 'Comfort', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357662/66ab5b_231e676a4dc44164a8525d7eebeee3d2_mv2_lnwqfj.avif', title: 'Snuggle Puppy with Heartbeat Toy', desc: 'A must-have for the first nights home. The heartbeat mimics mom and helps puppies feel calm and safe. One of our top recommendations for new puppy families.', link: 'https://www.amazon.com/s?k=snuggle+puppy+heartbeat+toy' },
  { category: 'Crate & Training', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357657/66ab5b_0f84d65c830744abb0ae81a00e154f4d_mv2_khb9oq.avif', title: 'Wire Crate with Divider', desc: 'We recommend crate training from day one using a wire crate with a divider panel. The divider keeps the space cozy as your puppy grows, making crate training much easier and faster.', link: 'https://www.amazon.com/s?k=wire+dog+crate+with+divider' },
  { category: 'Training', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357653/66ab5b_64d94f752c794c2293e745486f2b4707_mv2_ijows6.avif', title: 'Train-Me Training Treats', desc: 'Small, soft, and perfectly sized for reward-based training. These are our go-to training treat for all of our puppies. Easy to handle and puppies absolutely love them.', link: 'https://www.amazon.com/s?k=train-me+training+treats+dog' },
  { category: 'Grooming', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357660/66ab5b_64bc117466b5402fa305420d08a6b6fb_mv2_itiick.avif', title: 'Slicker Brush & Wet Brush', desc: "Both are essential for keeping your doodle's coat tangle-free between grooming appointments. Start brushing early so your puppy gets comfortable with the routine.", link: 'https://www.amazon.com/s?k=slicker+brush+dog+doodle' },
  { category: 'Grooming', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357653/66ab5b_4ce4d1dce21442f699b6250c12379e24_mv2_acb9lo.avif', title: 'Baby Magic Gentle Baby Wash', desc: 'Our secret weapon for keeping puppies clean and smelling fresh between baths. Gentle enough for puppies, and it leaves their coat soft and shiny. We use this on all of our fur-babies!', link: 'https://www.amazon.com/s?k=baby+magic+gentle+baby+wash' },
  { category: 'Toys', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357659/66ab5b_a3d423ef4b494250b9b2f401c271f29a_mv2_en2azb.avif', title: 'Rope Toys & Chew Toys', desc: "We are rawhide free! Rope toys and rubber chew toys are safe, durable, and great for teething. Introduce toys slowly so your new puppy doesn't feel overwhelmed.", link: 'https://www.amazon.com/s?k=puppy+rope+toys+chew+toys+set' },
  { category: 'Toys', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357660/66ab5b_69a512b8d24941538ba667ac39c32192_mv2_edv86b.avif', title: "Dentley's Stuffed Bone", desc: 'A puppy favorite at Yarnelle Fur-Babies! The stuffed filling keeps puppies entertained and the chewing helps soothe sore gums during teething. A go-to in our goody bags!', link: "https://www.amazon.com/s?k=dentley%27s+stuffed+bone+dog" },
  { category: 'Sleep', img: 'https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773357656/66ab5b_aa0ee2c489204d0bb0f73878e9665ea3_mv2_rcluca.avif', title: 'White Noise / Lullaby Machine', desc: 'A white noise or lullaby machine near the crate can work wonders for settling a puppy at night. The gentle sounds mimic the ambient sounds of the litter and help puppies sleep through the night faster.', link: 'https://www.amazon.com/s?k=white+noise+machine+baby+sleep' },
];

function FaqCategory({ title, items }) {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <div className="faq-category">
      <div className="faq-category-title">{title}</div>
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button className="faq-question" onClick={() => setOpenIndex(openIndex === i ? null : i)}>
            {item.q} <span className="faq-icon">+</span>
          </button>
          {openIndex === i && (
            <div className="faq-answer"><p>{item.a}</p></div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <>
      <Head>
        <title>FAQ &amp; Recommended Products | Yarnelle Fur-Babies</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Jost:wght@300;400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="https://res.cloudinary.com/dyzfpnrhg/image/upload/v1773365064/IMG_5493_gvo13y.jpg" />
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
        .section-header { text-align:center; margin-bottom:3rem; }
        .section-header .overline { display:block; font-size:0.68rem; letter-spacing:0.2em; text-transform:uppercase; color:var(--red); margin-bottom:0.75rem; }
        .section-header h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.8rem); font-weight:300; color:var(--black); line-height:1.2; }
        .section-header h2 em { font-style:italic; color:var(--red); }
        .section-header p { color:var(--text-light); font-size:0.95rem; max-width:560px; margin:1rem auto 0; }
        .faq-section { padding:6rem 4rem; background:var(--white); }
        .faq-inner { max-width:860px; margin:0 auto; }
        .faq-category { margin-bottom:3rem; }
        .faq-category-title { font-family:'Cormorant Garamond',serif; font-size:1.3rem; font-weight:400; color:var(--black); border-left:3px solid var(--red); padding-left:1rem; margin-bottom:1.25rem; }
        .faq-item { border-bottom:1px solid var(--light-gray); }
        .faq-question { width:100%; background:none; border:none; text-align:left; padding:1.2rem 0; font-family:'Jost',sans-serif; font-size:0.95rem; font-weight:400; color:var(--text); cursor:pointer; display:flex; justify-content:space-between; align-items:center; gap:1rem; }
        .faq-question:hover { color:var(--red); }
        .faq-icon { font-size:1.2rem; color:var(--red); flex-shrink:0; }
        .faq-item.open .faq-icon { transform:rotate(45deg); }
        .faq-answer p { font-size:0.92rem; color:var(--text-light); line-height:1.85; padding-bottom:1.25rem; }
        .products-section { padding:6rem 4rem; background:var(--offwhite); }
        .products-inner { max-width:1100px; margin:0 auto; }
        .products-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }
        .product-card { background:var(--white); border-radius:4px; overflow:hidden; border:1px solid var(--light-gray); display:flex; flex-direction:column; }
        .product-img { width:100%; aspect-ratio:1; object-fit:contain; background:#f9f9f9; padding:1rem; display:block; border-bottom:1px solid var(--light-gray); }
        .product-category-badge { background:var(--black); color:var(--white); font-size:0.62rem; letter-spacing:0.15em; text-transform:uppercase; padding:0.35rem 0.75rem; display:inline-block; margin:1rem 1rem 0; border-radius:2px; align-self:flex-start; }
        .product-card-body { padding:1rem 1.25rem 1.5rem; flex:1; display:flex; flex-direction:column; }
        .product-card h4 { font-family:'Cormorant Garamond',serif; font-size:1.15rem; font-weight:400; color:var(--black); margin-bottom:0.5rem; }
        .product-card p { font-size:0.85rem; color:var(--text-light); line-height:1.7; flex:1; }
        .product-card a { display:inline-block; margin-top:1rem; font-size:0.72rem; letter-spacing:0.1em; text-transform:uppercase; color:var(--red); text-decoration:none; border-bottom:1px solid var(--red); padding-bottom:1px; align-self:flex-start; }
        .product-card a:hover { color:var(--red-dark); }
        .cta-strip { background:var(--black); border-top:3px solid var(--red); padding:4rem; text-align:center; }
        .cta-strip h2 { font-family:'Cormorant Garamond',serif; font-size:clamp(1.8rem,3vw,2.5rem); font-weight:300; color:var(--white); margin-bottom:1rem; }
        .cta-strip h2 em { font-style:italic; color:var(--red); }
        .cta-strip p { color:#aaa; font-size:0.95rem; margin-bottom:2rem; max-width:500px; margin-left:auto; margin-right:auto; }
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
          .faq-section { padding:3rem 1.5rem; }
          .products-section { padding:3rem 1.5rem; }
          .products-grid { grid-template-columns:1fr 1fr; }
          .cta-strip { padding:3rem 1.5rem; }
          footer { padding:3rem 1.5rem; }
          .footer-inner { grid-template-columns:1fr 1fr; gap:2rem; }
          .footer-brand { grid-column:span 2; }
          .footer-bottom { flex-direction:column; gap:0.5rem; text-align:center; }
        }
        @media (max-width:600px) { .products-grid { grid-template-columns:1fr; } }
      `}</style>

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
          <li><Link href="/faq" className="active">FAQ &amp; Products</Link></li>
          <li className="nav-cta"><Link href="/#apply">Apply Now</Link></li>
        </ul>
        <button className="nav-hamburger" onClick={() => setNavOpen(!navOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>

      <section className="page-hero">
        <span className="overline">Everything You Need to Know</span>
        <h1>FAQ &amp; <em>Recommended</em> Products</h1>
        <p>Answers to our most common questions, plus the products we personally use and recommend for your new fur-baby.</p>
      </section>

      <section className="faq-section">
        <div className="faq-inner">
          <div className="section-header">
            <span className="overline">Questions &amp; Answers</span>
            <h2>Frequently Asked <em>Questions</em></h2>
            <p>Everything you need to know before bringing your new fur-baby home.</p>
          </div>
          {faqCategories.map((cat) => (
            <FaqCategory key={cat.title} title={cat.title} items={cat.items} />
          ))}
        </div>
      </section>

      <section className="products-section">
        <div className="products-inner">
          <div className="section-header">
            <span className="overline">Family Tested &amp; Approved</span>
            <h2>Recommended <em>Products</em></h2>
            <p>These are the products we personally use with every single one of our puppies and dogs. We only recommend what we trust!</p>
          </div>
          <div className="products-grid">
            {products.map((p) => (
              <div key={p.title} className="product-card">
                <span className="product-category-badge">{p.category}</span>
                <img className="product-img" src={p.img} alt={p.title} />
                <div className="product-card-body">
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                  <a href={p.link} target="_blank" rel="noopener">Find on Amazon →</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <h2>Ready to Bring Home Your <em>Fur-Baby?</em></h2>
        <p>Browse our available litters or fill out an application today — we&apos;d love to find the perfect match for your family!</p>
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
