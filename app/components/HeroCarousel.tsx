'use client';

import Link from 'next/link';
import {useCallback, useEffect, useState} from 'react';

const slides = [
  {
    name: 'Solis',
    eyebrow: 'The Solis collection',
    title: <>Light, held<br/><em>in gold.</em></>,
    copy: 'Sculptural solid gold pieces made to catch the light, every day.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=2200&q=92',
    alt: 'Sculptural diamond ring from the Solis collection',
    href: '/collections?collection=solis',
  },
  {
    name: 'Muse',
    eyebrow: 'The Muse collection',
    title: <>For every version<br/><em>of you.</em></>,
    copy: 'Expressive forms designed to be layered, lived in, and made your own.',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=2200&q=92',
    alt: 'Expressive gold jewelry from the Muse collection',
    href: '/collections?collection=muse',
  },
  {
    name: 'Luna',
    eyebrow: 'The Luna collection',
    title: <>Made for<br/><em>after dark.</em></>,
    copy: 'Luminous fine jewelry with a quiet glow and an effortless presence.',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=2200&q=92',
    alt: 'Luminous fine jewelry from the Luna collection',
    href: '/collections?collection=luna',
  },
] as const;

export function HeroCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const showSlide = useCallback((index: number) => {
    setActive(index);
  }, []);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length);
    }, 6000);

    return () => window.clearInterval(timer);
  }, [paused]);

  const slide = slides[active];

  return <section
    className="hero hero-campaign hero-carousel"
    aria-roledescription="carousel"
    aria-label="Aloura signature collections"
    onMouseEnter={() => setPaused(true)}
    onMouseLeave={() => setPaused(false)}
    onFocus={() => setPaused(true)}
    onBlur={(event) => {
      if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false);
    }}
  >
    <div className="hero-slides" aria-live="off">
      {slides.map((item, index) => <img
        key={item.name}
        className={index === active ? 'is-active' : ''}
        src={item.image}
        alt={index === active ? item.alt : ''}
        aria-hidden={index !== active}
        loading={index === 0 ? 'eager' : 'lazy'}
        onError={(event) => {
          event.currentTarget.onerror = null;
          event.currentTarget.src = 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=2200&q=88';
        }}
      />)}
    </div>
    <div className="hero-overlay"/>
    <div className="campaign-content" key={slide.name}>
      <p className="eyebrow">{slide.eyebrow}</p>
      <h1>{slide.title}</h1>
      <p>{slide.copy}</p>
      <div className="campaign-actions">
        <Link href={slide.href} className="boxed-cta light">Shop {slide.name}</Link>
        <Link href="/collections" className="boxed-cta outline">Explore all collections</Link>
      </div>
    </div>
    <div className="hero-carousel-controls">
      <div className="hero-dots" role="group" aria-label="Choose a collection">
        {slides.map((item, index) => <button
          key={item.name}
          type="button"
          className={index === active ? 'is-active' : ''}
          aria-label={`Show ${item.name} collection`}
          aria-current={index === active ? 'true' : undefined}
          onClick={() => showSlide(index)}
        ><span/></button>)}
      </div>
      <button className="hero-pause" type="button" onClick={() => setPaused((value) => !value)} aria-pressed={paused}>
        {paused ? 'Play' : 'Pause'}
      </button>
    </div>
  </section>;
}
