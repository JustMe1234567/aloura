import Link from 'next/link';

export function Footer() {
  return <footer className="mega-footer">
    <div className="footer-top">
      <div><Link href="/" className="footer-mark">ALOURA</Link><p>Fine jewelry for the stories only you can tell.</p></div>
      <div className="newsletter"><p>Private previews, styling notes, and stories.</p><form><label className="sr-only" htmlFor="footer-email">Email address</label><input id="footer-email" type="email" placeholder="Your email address" autoComplete="email"/><button type="submit" aria-label="Join the Aloura newsletter">→</button></form></div>
    </div>
    <div className="footer-links">
      <div><h3>Shop</h3><Link href="/shop">Shop all</Link><Link href="/shop/rings">Rings</Link><Link href="/shop/earrings">Earrings</Link><Link href="/shop/necklaces">Necklaces</Link></div>
      <div><h3>About</h3><Link href="/#story">Our story</Link><Link href="/#materials">Materials</Link><Link href="/collections/solis">Solis collection</Link><Link href="/collections/muse">Muse collection</Link></div>
      <div><h3>Client care</h3><p>Complimentary insured shipping</p><p>30-day returns</p><p>Lifetime jewelry care</p><p>Specialist guidance</p></div>
      <div><h3>Visit</h3><p>New York studio<br/>By private appointment</p><p>Mon–Fri, 10am–6pm ET</p></div>
    </div>
    <div className="footer-bottom"><p>© 2026 Aloura Fine Jewelry</p><p>Privacy · Terms · Accessibility</p><p>English / USD</p></div>
  </footer>;
}
