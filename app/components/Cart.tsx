'use client';

import {createContext, ReactNode, useContext, useEffect, useMemo, useState} from 'react';

export type CartProduct = {slug: string; name: string; price: string; image: string};
type CartItem = CartProduct & {size?: string; quantity: number};
type CartContextValue = {items: CartItem[]; count: number; open: boolean; addItem: (product: CartProduct, size?: string) => void; changeQuantity: (slug: string, size: string | undefined, change: number) => void; removeItem: (slug: string, size?: string) => void; openBag: () => void; closeBag: () => void};

const CartContext = createContext<CartContextValue | null>(null);
const storageKey = 'aloura-bag';

export function CartProvider({children}: {children: ReactNode}) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      try { const saved = window.localStorage.getItem(storageKey); if (saved) setItems(JSON.parse(saved) as CartItem[]); } catch { /* Storage can be unavailable in private browsing. */ }
      setReady(true);
    });
  }, []);
  useEffect(() => { if (ready) { try { window.localStorage.setItem(storageKey, JSON.stringify(items)); } catch { /* The in-memory bag still works. */ } } }, [items, ready]);
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKeyDown); };
  }, [open]);

  function addItem(product: CartProduct, size?: string) {
    setItems((current) => {
      const index = current.findIndex((item) => item.slug === product.slug && item.size === size);
      return index < 0 ? [...current, {...product, size, quantity: 1}] : current.map((item, itemIndex) => itemIndex === index ? {...item, quantity: item.quantity + 1} : item);
    });
    setOpen(true);
  }
  function changeQuantity(slug: string, size: string | undefined, change: number) { setItems((current) => current.map((item) => item.slug === slug && item.size === size ? {...item, quantity: item.quantity + change} : item).filter((item) => item.quantity > 0)); }
  function removeItem(slug: string, size?: string) { setItems((current) => current.filter((item) => item.slug !== slug || item.size !== size)); }

  const value = useMemo(() => ({items, count: items.reduce((total, item) => total + item.quantity, 0), open, addItem, changeQuantity, removeItem, openBag: () => setOpen(true), closeBag: () => setOpen(false)}), [items, open]);
  return <CartContext.Provider value={value}>{children}<CartDrawer/></CartContext.Provider>;
}

export function useCart() { const context = useContext(CartContext); if (!context) throw new Error('useCart must be used within CartProvider'); return context; }
function money(value: string) { return Number(value.replace(/[^0-9.]/g, '')) || 0; }

function CartDrawer() {
  const {items, count, open, closeBag, changeQuantity, removeItem} = useCart();
  const subtotal = items.reduce((total, item) => total + money(item.price) * item.quantity, 0);
  if (!open) return null;
  return <div className="bag-layer" onMouseDown={(event) => { if (event.target === event.currentTarget) closeBag(); }}>
    <aside className="bag-drawer" role="dialog" aria-modal="true" aria-labelledby="bag-title">
      <div className="bag-heading"><div><p className="section-kicker">Your selection</p><h2 id="bag-title">Bag <span>({count})</span></h2></div><button type="button" onClick={closeBag} aria-label="Close bag">×</button></div>
      {items.length === 0 ? <div className="bag-empty"><p>Your bag is waiting for its first piece.</p><button type="button" onClick={closeBag}>Continue shopping</button></div> : <>
        <div className="bag-items">{items.map((item) => <article className="bag-item" key={`${item.slug}-${item.size ?? ''}`}><img src={item.image} alt=""/><div><h3>{item.name}</h3>{item.size && <p>Size {item.size}</p>}<p>{item.price}</p><div className="bag-item-actions"><div aria-label={`Quantity for ${item.name}`}><button type="button" onClick={() => changeQuantity(item.slug, item.size, -1)} aria-label={`Decrease ${item.name} quantity`}>−</button><span aria-live="polite">{item.quantity}</span><button type="button" onClick={() => changeQuantity(item.slug, item.size, 1)} aria-label={`Increase ${item.name} quantity`}>+</button></div><button type="button" onClick={() => removeItem(item.slug, item.size)}>Remove</button></div></div></article>)}</div>
        <div className="bag-summary"><div><span>Subtotal</span><strong>${subtotal.toLocaleString('en-US')}</strong></div><p>Complimentary insured shipping. Taxes calculated at checkout.</p><button type="button" onClick={() => window.alert('Checkout is not connected in this storefront preview.')}>Proceed to checkout</button></div>
      </>}
    </aside>
  </div>;
}
