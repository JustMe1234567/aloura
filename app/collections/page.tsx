'use client';

import {Suspense} from 'react';
import {usePathname, useSearchParams} from 'next/navigation';
import Link from 'next/link';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import {products} from '../data';

const collectionStories = {
  All: {
    eyebrow: 'The Aloura collection',
    title: <>Objects of <em>affection.</em></>,
    story: 'A study in light, form, and feeling. Each Aloura piece begins with a quiet gesture and is finished in precious materials to become part of your everyday story.',
    image: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2200&q=90',
    alt: 'Sculptural gold earrings arranged on warm ivory stone',
  },
  Solis: {
    eyebrow: 'The Solis collection',
    title: <>Light, held <em>in gold.</em></>,
    story: 'Solis captures the warmth of first light in sculptural gold and brilliant diamonds. Strong silhouettes and softened edges make each piece feel luminous, grounded, and easy to live in.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2200&q=90',
    alt: 'Diamond ring photographed in warm natural light',
  },
  Muse: {
    eyebrow: 'The Muse collection',
    title: <>For every version <em>of you.</em></>,
    story: 'Muse celebrates individuality through expressive proportions and tactile forms. Pavé light and polished gold come together in pieces designed to be styled entirely on your terms.',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=2200&q=90',
    alt: 'Expressive gold jewelry from the Muse collection',
  },
  Luna: {
    eyebrow: 'The Luna collection',
    title: <>Made for <em>after dark.</em></>,
    story: 'Luna follows the glow of evening with fluid drops, delicate chains, and points of diamond light. Refined enough for an occasion, each piece is effortless enough for every day.',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=2200&q=90',
    alt: 'Luminous fine jewelry from the Luna collection',
  },
};

type CollectionName = keyof typeof collectionStories;

function CollectionsContent() {
  const categories = Object.keys(collectionStories) as CollectionName[];
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const pathParts = pathname.split('/').filter(Boolean);
  const pathCollection = pathParts[0] === 'collections' ? pathParts[1] : undefined;
  const pathCategory = pathParts[0] === 'shop' ? pathParts[1] : undefined;
  const requested = searchParams.get('collection') ?? pathCollection;
  const requestedCategory = searchParams.get('category') ?? products.find((product) => product.category.toLowerCase() === pathCategory?.toLowerCase())?.category;
  const searchQuery = searchParams.get('q')?.trim() ?? '';
  const shopView = pathname.startsWith('/shop') || searchParams.get('view') === 'shop';
  const linkedCollection = categories.find((category) => category.toLowerCase() === requested?.toLowerCase()) ?? 'All';
  const filter = linkedCollection;
  const collectionProducts = filter === 'All' ? products : products.filter((product) => product.collection === filter);
  const availableCategories = Array.from(new Set(collectionProducts.map((product) => product.category)));
  const activeCategory = requestedCategory && availableCategories.includes(requestedCategory) ? requestedCategory : 'All';
  const categoryProducts = activeCategory === 'All' ? collectionProducts : collectionProducts.filter((product) => product.category === activeCategory);
  const shown = searchQuery ? categoryProducts.filter((product) => `${product.name} ${product.category} ${product.collection} ${product.detail}`.toLowerCase().includes(searchQuery.toLowerCase())) : categoryProducts;
  const story = collectionStories[filter];
  const otherCollections = categories.filter((category) => category !== 'All' && category !== filter);
  const collectionsOverview = filter === 'All' && activeCategory === 'All' && !searchQuery && !shopView;
  const pageLabel = searchQuery ? `Results for “${searchQuery}”` : activeCategory === 'All' ? (filter === 'All' ? 'The complete edit' : `The ${filter} collection`) : activeCategory;
  const pageTitle = searchQuery ? `${shown.length} ${shown.length === 1 ? 'piece' : 'pieces'} found.` : activeCategory === 'All' ? (filter === 'All' ? 'Find the piece that feels like yours.' : `Discover every piece in ${filter}.`) : `${activeCategory}, considered for every day.`;

  function categoryHref(category: string) {
    if (filter !== 'All') return `/collections/${filter.toLowerCase()}${category !== 'All' ? `?category=${encodeURIComponent(category)}` : ''}#collection-pieces`;
    if (searchQuery) return `/shop${category !== 'All' ? `/${category.toLowerCase()}` : ''}?q=${encodeURIComponent(searchQuery)}#collection-pieces`;
    return category === 'All' ? '/shop#collection-pieces' : `/shop/${category.toLowerCase()}#collection-pieces`;
  }

  return <main>
    <Header/>
    <section className="collection-story-hero" aria-live="polite">
      <img key={story.image} src={story.image} alt={story.alt}/>
      <div className="collection-story-overlay"/>
      <div className="collection-story-copy"><p className="section-kicker">{story.eyebrow}</p><h1>{story.title}</h1><p>{story.story}</p><a href={collectionsOverview ? '#collection-families' : '#collection-pieces'} className="boxed-cta light">{collectionsOverview ? 'Explore the collections' : 'Explore the pieces'}</a></div>
      <span className="collection-story-count">{collectionsOverview ? '03 collections' : `${shown.length.toString().padStart(2, '0')} pieces`}</span>
    </section>
    {!collectionsOverview && <section className="catalog" id="collection-pieces">
      <div className="catalog-intro"><p className="section-kicker">{pageLabel}</p><h2>{pageTitle}</h2></div>
      <div className="collection-category-filter" aria-label={`Filter ${filter} collection by jewelry type`}>
        {['All', ...availableCategories].map((category) => <Link href={categoryHref(category)} key={category} className={activeCategory === category ? 'active' : ''} aria-current={activeCategory === category ? 'page' : undefined}>{category}</Link>)}
        <span aria-live="polite">{shown.length} {shown.length === 1 ? 'piece' : 'pieces'}</span>
      </div>
      {shown.length > 0 ? <div className="product-grid catalog-grid">{shown.map((product, index) => <ProductCard key={product.slug} product={product} index={index}/>)}</div> : <div className="catalog-empty"><h3>No pieces found.</h3><p>Try another jewelry type or clear your search to see the complete collection.</p><Link href="/shop#collection-pieces" className="boxed-cta dark">View all jewelry</Link></div>}
    </section>}
    <section className="other-collections" id="collection-families" aria-labelledby="other-collections-title">
      <div className="other-collections-heading"><p className="section-kicker">{collectionsOverview ? 'The Aloura signatures' : 'Continue the story'}</p><h2 id="other-collections-title">{collectionsOverview ? 'Meet our collections.' : 'Explore other collections.'}</h2></div>
      <div className={`other-collections-grid ${otherCollections.length === 2 ? 'two-up' : ''}`}>{otherCollections.map((collection) => {
        const next = collectionStories[collection];
        return <Link href={`/collections/${collection.toLowerCase()}`} className="other-collection-card" key={collection}>
          <img src={next.image} alt="" loading="lazy"/><span className="other-collection-shade"/><div><p>The {collection} collection</p><h3>{next.title}</h3><span>Discover {collection} →</span></div>
        </Link>;
      })}</div>
    </section>
  </main>;
}

export default function Collections() {
  return <Suspense fallback={null}><CollectionsContent/></Suspense>;
}
