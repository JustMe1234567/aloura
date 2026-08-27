import Link from 'next/link';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import {products} from './data';

const categories=[
  {name:'Diamond Icons',image:'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=900&q=88'},
  {name:'Anniversary Rings',image:'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=900&q=88'},
  {name:'Everyday Gold',image:'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=900&q=88'},
  {name:'Modern Earrings',image:'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=88'},
];

const collections=[
  {name:'The Solis',copy:'Light, held in gold.',image:'https://images.unsplash.com/photo-1603561596112-db1d314b7bf8?auto=format&fit=crop&w=1100&q=88'},
  {name:'The Muse',copy:'For every version of you.',image:'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1100&q=88'},
  {name:'The Luna',copy:'Made for after dark.',image:'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1100&q=88'},
];

export default function Home(){return <main>
  <Header/>
  <section className="hero hero-campaign">
    <img src="https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2200&q=92" alt="Gold earrings styled against warm ivory fabric"/>
    <div className="hero-overlay"/>
    <div className="campaign-content"><p className="eyebrow">The private summer edit</p><h1>Golden hour,<br/><em>all day long.</em></h1><p>Our most-loved solid gold pieces, selected for the season.</p><div className="campaign-actions"><Link href="/collections" className="boxed-cta light">Shop the edit</Link><Link href="/collections" className="boxed-cta outline">Discover new arrivals</Link></div></div>
    <div className="hero-scroll">Scroll to discover <span>↓</span></div>
  </section>

  <section className="shop-section category-section"><div className="compact-heading"><h2>Featured edits</h2><Link href="/collections">View all jewelry →</Link></div><div className="category-grid">{categories.map((c,i)=><Link href="/collections" className="category-card" key={c.name}><div><img src={c.image} alt="" loading={i>1?'lazy':'eager'}/><span>Explore</span></div><h3>{c.name}</h3></Link>)}</div></section>

  <section className="shop-section collection-section"><div className="compact-heading"><h2>Signature collections</h2><p>Distinctive forms. Endlessly personal.</p></div><div className="collection-grid">{collections.map(c=><Link href="/collections" className="collection-card" key={c.name}><img src={c.image} alt="" loading="lazy"/><div><h3>{c.name}</h3><p>{c.copy}</p><span>Shop collection →</span></div></Link>)}</div></section>

  <section className="duo-feature"><article><img src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1300&q=88" alt="Diamond ring in an Aloura jewelry box" loading="lazy"/><div><p className="section-kicker">A modern promise</p><h2>Rings for your<br/>forever moments.</h2><p>Fixed specifications, transparent pricing, and exceptional craftsmanship—made simple.</p><Link href="/collections" className="boxed-cta dark">Explore rings</Link></div></article><article><img src="https://images.unsplash.com/photo-1627293509201-cd0c780043e6?auto=format&fit=crop&w=1300&q=88" alt="Sculptural gold ring photographed close up" loading="lazy"/><div><p className="section-kicker">Ready when you are</p><h2>Beautifully set.<br/>Ready to wear.</h2><p>Every design arrives exactly as shown, with considered details and a fixed price.</p><Link href="/collections" className="boxed-cta light">Shop ready-to-wear</Link></div></article></section>

  <section className="featured bestseller-section"><div className="section-head centered-head"><div><p className="section-kicker">The Aloura edit</p><h2>Our bestsellers</h2><div className="mini-tabs"><span>Rings</span><span>Earrings</span><span>Necklaces</span></div></div><Link href="/collections" className="underlink">Shop all pieces →</Link></div><div className="product-grid">{products.map((p,i)=><ProductCard key={p.slug} product={p} index={i}/>)}</div></section>

  <section className="editorial-banner"><img src="https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=2000&q=88" alt="Woman wearing delicate gold jewelry" loading="lazy"/><div className="editorial-copy"><p className="section-kicker">The portrait series · No. 04</p><h2>Jewelry,<br/><em>in her own words.</em></h2><p>Meet the women who wear Aloura their way—layered, lived-in, and entirely personal.</p><Link href="/collections" className="boxed-cta light">Read the story</Link></div></section>

  <section className="press-section"><p className="section-kicker">As seen in</p><div className="press-logos"><span>VOGUE</span><span>goop</span><span>FORBES</span><span>ELLE</span><span>domino</span></div><blockquote>“A quieter, more personal take on modern fine jewelry.”</blockquote></section>

  <section className="concierge-grid"><div className="concierge-image"><img src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1400&q=88" alt="Jeweler carefully working on a gold ring" loading="lazy"/></div><div className="concierge-copy"><p className="section-kicker">Meet your jewelry concierge</p><h2>Personal guidance,<br/>wherever you are.</h2><p>Questions about size, styling, or gifting? Connect one-to-one with an Aloura specialist by video or chat.</p><div><Link href="/collections" className="boxed-cta dark">Book a virtual styling</Link><Link href="/collections" className="text-link">Message a specialist →</Link></div></div></section>

  <section className="service-row refined-services"><div><span>01</span><h3>Complimentary shipping</h3><p>Insured U.S. delivery and 30-day returns.</p></div><div><span>02</span><h3>Lifetime care</h3><p>Cleaning, inspection, and repair support.</p></div><div><span>03</span><h3>Thoughtfully sourced</h3><p>Recycled gold and conflict-free stones.</p></div><div><span>04</span><h3>Always personal</h3><p>Real guidance from our jewelry specialists.</p></div></section>

  <footer className="mega-footer"><div className="footer-top"><div><Link href="/" className="footer-mark">ALOURA</Link><p>Fine jewelry for the stories only you can tell.</p></div><div className="newsletter"><p>Private previews, styling notes, and stories.</p><form><label className="sr-only" htmlFor="email">Email address</label><input id="email" type="email" placeholder="Your email address"/><button aria-label="Submit email">→</button></form></div></div><div className="footer-links"><div><h3>Shop</h3><Link href="/collections">New arrivals</Link><Link href="/collections">Rings</Link><Link href="/collections">Earrings</Link><Link href="/collections">Necklaces</Link></div><div><h3>About</h3><Link href="/#story">Our story</Link><Link href="/#story">Materials</Link><Link href="/#story">Journal</Link><Link href="/#story">Careers</Link></div><div><h3>Client care</h3><Link href="/collections">Contact us</Link><Link href="/collections">Shipping & returns</Link><Link href="/collections">Jewelry care</Link><Link href="/collections">Size guide</Link></div><div><h3>Visit</h3><p>New York studio<br/>By private appointment</p><p>Mon–Fri, 10am–6pm ET</p></div></div><div className="footer-bottom"><p>© 2026 Aloura Fine Jewelry</p><p>Privacy · Terms · Accessibility</p><p>English / USD</p></div></footer>
</main>}
