'use client';

import Link from 'next/link';
import {FormEvent, ReactNode, useEffect, useRef, useState} from 'react';

type MenuGroup = {label: string; labelHe: string; links: Array<{label: string; labelHe: string; href: string}>};

const menuGroups: MenuGroup[] = [
  {label: 'New arrivals', labelHe: 'חדש', links: [{label: 'The latest edit', labelHe: 'הקולקציה החדשה', href: '/collections'}, {label: 'Bestsellers', labelHe: 'הנמכרים ביותר', href: '/collections'}]},
  {label: 'Rings', labelHe: 'טבעות', links: [{label: 'Diamond rings', labelHe: 'טבעות יהלומים', href: '/collections'}, {label: 'Bands', labelHe: 'טבעות נישואין', href: '/collections'}, {label: 'Statement rings', labelHe: 'טבעות נוכחות', href: '/collections'}]},
  {label: 'Necklaces', labelHe: 'שרשראות', links: [{label: 'Pendant necklaces', labelHe: 'שרשראות תליון', href: '/collections'}, {label: 'Chains', labelHe: 'שרשראות זהב', href: '/collections'}]},
  {label: 'Earrings', labelHe: 'עגילים', links: [{label: 'Stud earrings', labelHe: 'עגילים צמודים', href: '/collections'}, {label: 'Hoops', labelHe: 'עגילי חישוק', href: '/collections'}]},
  {label: 'Collections', labelHe: 'קולקציות', links: [{label: 'Solis', labelHe: 'Solis', href: '/collections?collection=solis'}, {label: 'Luna', labelHe: 'Luna', href: '/collections?collection=luna'}, {label: 'Muse', labelHe: 'Muse', href: '/collections?collection=muse'}]},
  {label: 'Gifts', labelHe: 'מתנות', links: [{label: 'Gifts for her', labelHe: 'מתנות עבורה', href: '/collections'}, {label: 'Milestone gifts', labelHe: 'מתנות לרגעים מיוחדים', href: '/collections'}]},
];

function Icon({children}: {children: ReactNode}) {
  return <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">{children}</svg>;
}

export default function Header({light = false}: {light?: boolean}) {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);
  const [he, setHe] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const updateHeader = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', updateHeader, {passive: true});
    return () => window.removeEventListener('scroll', updateHeader);
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    searchRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [open]);

  function language() {
    const next = !he;
    setHe(next);
    document.documentElement.lang = next ? 'he' : 'en';
    document.documentElement.dir = next ? 'rtl' : 'ltr';
  }

  function closeMenu() { setOpen(false); setExpanded(null); }
  function submitSearch(event: FormEvent<HTMLFormElement>) { event.preventDefault(); closeMenu(); window.location.href = '/collections'; }

  return <>
    <div className="announcement">{he ? 'משלוח מבוטח חינם ברחבי ארה״ב' : 'Complimentary insured shipping across the U.S.'}<span>{he ? 'לפרטים' : 'Discover our promise'}</span></div>
    <header className={`site-header ${light ? 'header-light' : ''} ${scrolled ? 'header-scrolled' : ''} ${open ? 'menu-open' : ''}`}>
      <button className="menu-button mobile-only" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}><i/><i/></button>
      <Link href="/" className="wordmark" aria-label="Aloura home" onClick={closeMenu}>ALOURA <small>FINE JEWELRY</small></Link>
      <nav aria-label="Primary navigation"><Link href="/collections">{he ? 'חדש' : 'New arrivals'}</Link><Link href="/collections">{he ? 'טבעות' : 'Rings'}</Link><Link href="/collections">{he ? 'שרשראות' : 'Necklaces'}</Link><Link href="/collections">{he ? 'עגילים' : 'Earrings'}</Link><Link href="/#story">{he ? 'העולם שלנו' : 'Our world'}</Link></nav>
      <div className="header-actions"><button className="text-button" onClick={language} aria-label="Change language">{he ? 'HE · ₪' : 'EN · $'}</button><Link href="/collections" className="search-link">{he ? 'חיפוש' : 'Search'}</Link><button className="bag-button" aria-label={he ? 'סל, 0 פריטים' : 'Bag, 0 items'}>{he ? 'סל' : 'Bag'} <span>0</span></button></div>
    </header>
    {light && <div className="header-spacer" aria-hidden="true"/>}
    {open && <aside id="mobile-navigation" className="mobile-menu" dir={he ? 'rtl' : 'ltr'} aria-label={he ? 'ניווט לנייד' : 'Mobile navigation'}>
      <form className="mobile-search" role="search" onSubmit={submitSearch}>
        <label className="sr-only" htmlFor="mobile-search-input">{he ? 'חיפוש תכשיטים' : 'Search jewelry'}</label>
        <input ref={searchRef} id="mobile-search-input" name="q" type="search" placeholder={he ? 'חיפוש' : 'Search'} autoComplete="off" />
        <button type="submit" aria-label={he ? 'חיפוש' : 'Submit search'}><Icon><circle cx="11" cy="11" r="6.5"/><path d="m16 16 4 4"/></Icon></button>
      </form>
      <div className="mobile-menu-groups">
        {menuGroups.map((group) => {
          const active = expanded === group.label;
          const id = `mobile-group-${group.label.replaceAll(' ', '-').toLowerCase()}`;
          return <div className={`mobile-menu-group ${active ? 'expanded' : ''}`} key={group.label}>
            <button type="button" onClick={() => setExpanded(active ? null : group.label)} aria-expanded={active} aria-controls={id}><span>{he ? group.labelHe : group.label}</span><i aria-hidden="true" /></button>
            <div id={id} className="mobile-submenu" hidden={!active}>{group.links.map((link) => <Link href={link.href} onClick={closeMenu} key={`${group.label}-${link.label}`}>{he ? link.labelHe : link.label}</Link>)}</div>
          </div>;
        })}
        <Link className="mobile-sale-link" href="/collections" onClick={closeMenu}>{he ? 'מבצעים' : 'Sale'}</Link>
      </div>
      <div className="mobile-account-links">
        <Link href="/" onClick={closeMenu}><Icon><circle cx="12" cy="8" r="3.5"/><path d="M5.5 21v-2.5a6.5 6.5 0 0 1 13 0V21z"/></Icon><span>{he ? 'כניסה / הרשמה' : 'Sign in / up'}</span></Link>
        <Link href="/collections" onClick={closeMenu}><Icon><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8z"/></Icon><span>{he ? 'מועדפים' : 'Wishlist'}</span></Link>
        <button type="button"><Icon><path d="M6 8h12l1 13H5L6 8z"/><path d="M9 8V6a3 3 0 0 1 6 0v2"/></Icon><span>{he ? 'הסל שלי' : 'My bag'}</span><b>0</b></button>
        <button type="button" onClick={language}><Icon><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18"/></Icon><span>{he ? 'English / USD' : 'עברית / ILS'}</span></button>
      </div>
    </aside>}
  </>;
}
