import type {Metadata} from 'next';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import {products} from '../../data';
import {AddToBag} from '../../components/AddToBag';

type ProductPageProps = {params: Promise<{slug: string}>};

export async function generateMetadata({params}: ProductPageProps): Promise<Metadata> {
  const {slug} = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} | Aloura Fine Jewelry`,
    description: product.detail,
    openGraph: {title: product.name, description: product.detail, images: [{url: product.image, alt: product.name}]},
    twitter: {card: 'summary_large_image', title: product.name, description: product.detail, images: [product.image]},
  };
}

export default async function Product({params}: ProductPageProps) {
  const {slug} = await params;
  const product = products.find((item) => item.slug === slug);
  if (!product) notFound();
  const related = products.filter((item) => item.slug !== product.slug && (item.collection === product.collection || item.category === product.category)).slice(0, 4);

  return <main>
    <Header light/>
    <nav className="product-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href={`/shop/${product.category.toLowerCase()}`}>{product.category}</Link><span>/</span><span aria-current="page">{product.name}</span></nav>
    <section className="product-detail-shell">
      <div className="product-gallery-grid" aria-label={`${product.name} gallery`}>
        {product.gallery.map((image, index) => <figure className={index === 0 ? 'product-gallery-main' : ''} key={image.src}>
          <img src={image.src} alt={image.alt} loading={index === 0 ? 'eager' : 'lazy'}/>
          {index === 0 && <figcaption>Responsibly made · Recycled 14k gold</figcaption>}
        </figure>)}
      </div>
      <aside className="product-purchase" aria-labelledby="product-title">
        <p className="section-kicker">The {product.collection} collection · {product.category}</p>
        <h1 id="product-title">{product.name}</h1>
        <div className="product-price-row"><p className="price">{product.price}</p><p>Taxes calculated at checkout</p></div>
        <p className="product-lede">{product.detail}</p>
        <p className="product-story">{product.story}</p>
        <AddToBag product={{slug: product.slug, name: product.name, price: product.price, image: product.image}} sizes={product.sizes}/>
        <p className="afterpay">Or four interest-free payments. Complimentary insured U.S. delivery.</p>
        <div className="purchase-assurances" aria-label="Purchase assurances">
          <div><strong>Ready to ship</strong><span>Leaves our studio in 1–2 business days</span></div>
          <div><strong>30-day returns</strong><span>Complimentary and insured</span></div>
          <div><strong>Lifetime care</strong><span>Cleaning and inspection included</span></div>
        </div>
        <div className="product-accordions">
          <details open><summary>Product details</summary><dl>
            <div><dt>Item</dt><dd>{product.itemNumber}</dd></div><div><dt>Material</dt><dd>{product.material}</dd></div><div><dt>Stone</dt><dd>{product.stone}</dd></div><div><dt>Setting / finish</dt><dd>{product.stoneDetails}</dd></div><div><dt>Dimensions</dt><dd>{product.dimensions}</dd></div><div><dt>Weight</dt><dd>{product.weight}</dd></div><div><dt>Fit</dt><dd>{product.fit}</dd></div>
          </dl></details>
          <details><summary>Shipping & returns</summary><p>Complimentary insured delivery within the U.S. Signature is required. Unworn pieces may be returned in their original condition within 30 days of delivery.</p></details>
          <details><summary>Care & warranty</summary><p>Covered by Aloura lifetime care for manufacturing defects, with complimentary annual cleaning and inspection. Store separately and avoid direct contact with fragrance, chlorine, and abrasive surfaces.</p></details>
          <details id="size-guide"><summary>Size & fit guidance</summary><p>{product.category === 'Rings' ? 'Measure at the end of the day when hands are warm. If you fall between sizes, choose the larger half size. Our team can help confirm your fit before dispatch.' : 'Designed for a comfortable everyday fit. Contact our jewelry specialists if you would like help assessing scale or length.'}</p></details>
        </div>
      </aside>
    </section>
    <section className="product-craft-story">
      <div><p className="section-kicker">Made with intention</p><h2>Considered from every angle.</h2><p>Each Aloura piece is made in small batches from recycled solid gold and set by hand. Our stones are individually inspected for proportion, color, and light performance before they reach the bench.</p><Link href="/#materials" className="text-link">Discover our materials →</Link></div>
      <img src="https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1400&q=88" alt="Jeweler hand-finishing a gold piece at the bench" loading="lazy"/>
    </section>
    {related.length > 0 && <section className="product-related" aria-labelledby="related-title"><div className="compact-heading"><div><p className="section-kicker">Wear it with</p><h2 id="related-title">Complete the story.</h2></div><Link href="/shop">Shop all pieces →</Link></div><div className="product-grid">{related.map((item, index) => <ProductCard product={item} index={index} key={item.slug}/>)}</div></section>}
    <section className="service-row refined-services"><div><span>01</span><h3>Complimentary shipping</h3><p>Insured U.S. delivery and 30-day returns.</p></div><div><span>02</span><h3>Lifetime care</h3><p>Cleaning, inspection, and repair support.</p></div><div><span>03</span><h3>Thoughtfully sourced</h3><p>Recycled gold and responsibly grown stones.</p></div><div><span>04</span><h3>Always personal</h3><p>Real guidance from our jewelry specialists.</p></div></section>
  </main>;
}
