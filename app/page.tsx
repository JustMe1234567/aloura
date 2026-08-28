import Link from 'next/link';
import Header from './components/Header';
import ProductCard from './components/ProductCard';
import {HeroCarousel} from './components/HeroCarousel';
import {products} from './data';

const collections = [
  {number: '01', name: 'Solis', line: 'Light, held in gold.', image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1400&q=90'},
  {number: '02', name: 'Muse', line: 'For every version of you.', image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1400&q=90'},
  {number: '03', name: 'Luna', line: 'Made for after dark.', image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1400&q=90'},
];

const categories = ['Rings', 'Earrings', 'Necklaces', 'Bracelets'];

export default function Home() {
  return <main>
    <Header/>
    <HeroCarousel/>

    <section className="manifesto" aria-labelledby="manifesto-title">
      <p className="section-kicker">The Aloura point of view</p>
      <div className="manifesto-copy">
        <h2 id="manifesto-title">Not saved for someday.<br/><em>Made for your every day.</em></h2>
        <div><p>Fine jewelry should feel personal from the first wear—not precious in the untouchable sense, but precious because it becomes unmistakably yours.</p><Link href="/collections" className="text-link">Discover the collection <span aria-hidden="true">↗</span></Link></div>
      </div>
    </section>

    <section className="collection-index" aria-labelledby="collection-index-title">
      <header><p className="section-kicker">Three signatures</p><h2 id="collection-index-title">A study in form.</h2></header>
      <div className="collection-index-list">{collections.map((collection) => <Link href={`/collections?collection=${collection.name.toLowerCase()}`} className="collection-index-row" key={collection.name}>
        <span className="collection-number">{collection.number}</span>
        <div className="collection-thumb"><img src={collection.image} alt="" loading="lazy"/></div>
        <h3>{collection.name}</h3>
        <p>{collection.line}</p>
        <span className="collection-arrow" aria-hidden="true">↗</span>
      </Link>)}</div>
    </section>

    <section className="editorial-product-feature">
      <div className="editorial-product-image"><img src="https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1800&q=92" alt="Solis diamond signet in recycled yellow gold" loading="lazy"/><span>01 / 06</span></div>
      <div className="editorial-product-copy"><p className="section-kicker">The signature</p><h2>A little weight.<br/>A point of light.</h2><p>The Solis signet balances a softly substantial silhouette with one brilliant diamond. An everyday object, made exceptional.</p><dl><div><dt>Material</dt><dd>14k recycled gold</dd></div><div><dt>Stone</dt><dd>Lab-grown diamond</dd></div><div><dt>Price</dt><dd>$1,250</dd></div></dl><Link href="/products/solis-diamond-signet" className="boxed-cta dark">Meet the Solis signet</Link></div>
    </section>

    <section className="shop-by-type" aria-labelledby="shop-type-title">
      <div className="shop-type-intro"><p className="section-kicker">Find your piece</p><h2 id="shop-type-title">The everyday<br/><em>jewelry wardrobe.</em></h2></div>
      <nav aria-label="Shop by jewelry type">{categories.map((category, index) => <Link href="/collections" key={category}><span>{String(index + 1).padStart(2, '0')}</span><strong>{category}</strong><i aria-hidden="true">→</i></Link>)}</nav>
    </section>

    <section className="featured new-edit" aria-labelledby="new-edit-title">
      <div className="new-edit-heading"><div><p className="section-kicker">Objects to live in</p><h2 id="new-edit-title">The new edit.</h2></div><p>Six considered forms. Each one designed to gather meaning with wear.</p><Link href="/collections" className="text-link">View all pieces <span aria-hidden="true">→</span></Link></div>
      <div className="product-grid editorial-product-grid">{products.map((product, index) => <ProductCard key={product.slug} product={product} index={index}/>)}</div>
    </section>

    <section className="portrait-story" id="story">
      <div className="portrait-image"><img src="https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=1800&q=90" alt="Woman wearing a fine gold necklace in natural light" loading="lazy"/></div>
      <div className="portrait-copy"><p className="section-kicker">Worn, not styled</p><blockquote>“The pieces I keep are the ones that remember with me.”</blockquote><p>Inside the private rituals, accidental combinations, and quiet confidence that make jewelry personal.</p><Link href="/collections" className="text-link">Read the portrait <span aria-hidden="true">↗</span></Link></div>
    </section>

    <section className="material-note">
      <p className="section-kicker">Our standard</p><h2>Precious materials.<br/><em>Plainly spoken.</em></h2><div><p>Recycled solid gold. Responsibly grown stones. Fixed specifications and honest prices, presented without the theater.</p><Link href="/collections" className="boxed-cta light">How we make Aloura</Link></div>
    </section>

    <section className="service-row refined-services"><div><span>01</span><h3>Complimentary shipping</h3><p>Insured U.S. delivery and 30-day returns.</p></div><div><span>02</span><h3>Lifetime care</h3><p>Cleaning, inspection, and repair support.</p></div><div><span>03</span><h3>Thoughtfully sourced</h3><p>Recycled gold and responsibly grown stones.</p></div><div><span>04</span><h3>Always personal</h3><p>Real guidance from our jewelry specialists.</p></div></section>
  </main>;
}
