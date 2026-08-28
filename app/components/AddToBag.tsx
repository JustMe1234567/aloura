'use client';

import {useState} from 'react';
import {CartProduct, useCart} from './Cart';

export function AddToBag({product, sizes}: {product: CartProduct; sizes?: string[]}) {
  const {addItem} = useCart();
  const [size, setSize] = useState('');
  const [error, setError] = useState('');
  function add() { if (sizes && !size) { setError('Please select a ring size.'); document.getElementById('product-size')?.focus(); return; } setError(''); addItem(product, size || undefined); }
  return <>{sizes && <div className="product-size-field"><div><label htmlFor="product-size">Ring size</label><a href="#size-guide">Size guide</a></div><select id="product-size" name="size" value={size} onChange={(event) => { setSize(event.target.value); setError(''); }} aria-describedby={error ? 'size-error' : undefined} aria-invalid={Boolean(error)}><option value="" disabled>Select your size</option>{sizes.map((option) => <option value={option} key={option}>{option}</option>)}</select>{error && <p className="field-error" id="size-error" role="alert">{error}</p>}</div>}<button className="add-button" type="button" onClick={add}><span>Add to bag</span><span>{product.price}</span></button></>;
}
