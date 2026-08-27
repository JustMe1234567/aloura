export type Product = {
  slug: string;
  name: string;
  price: string;
  category: string;
  collection: 'Solis' | 'Luna' | 'Muse';
  image: string;
  gallery: Array<{src: string; alt: string}>;
  detail: string;
  story: string;
  itemNumber: string;
  material: string;
  stone: string;
  stoneDetails: string;
  dimensions: string;
  weight: string;
  fit: string;
  sizes?: string[];
};

export const products: Product[] = [
  {
    slug: 'solis-signet', name: 'Solis Diamond Signet', price: '$1,280', category: 'Rings', collection: 'Solis',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=88',
    gallery: [
      {src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1800&q=92', alt: 'Solis Diamond Signet shown from above'},
      {src: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=88', alt: 'Diamond signet ring presented in a jewelry box'},
      {src: 'https://images.unsplash.com/photo-1603561596112-db1d314b7bf8?auto=format&fit=crop&w=1200&q=88', alt: 'Close view of the Solis ring profile and setting'},
    ],
    detail: 'A sculptural signet with a softly substantial feel and a single point of light.',
    story: 'Cast in recycled 14k yellow gold, the Solis signet is hand-finished to a mirror polish and set with a brilliant-cut lab-grown diamond. Its low profile makes it comfortable enough for every day, worn alone or anchoring a considered stack.',
    itemNumber: 'AL-SOL-R01', material: 'Recycled 14k solid yellow gold', stone: 'Lab-grown diamond', stoneDetails: '0.12 ct. round brilliant, F–G color, VS clarity', dimensions: 'Face: 10 × 8 mm; band: 3.2 mm', weight: 'Approx. 5.8 g', fit: 'True to size; designed for a close fit', sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8'],
  },
  {
    slug: 'luna-drop-earrings', name: 'Luna Drop Earrings', price: '$890', category: 'Earrings', collection: 'Luna',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=88',
    gallery: [
      {src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1800&q=92', alt: 'Pair of Luna Drop Earrings'},
      {src: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=88', alt: 'Close view of polished gold earring details'},
      {src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=88', alt: 'Gold earrings styled against ivory fabric'},
    ],
    detail: 'Fluid gold drops shaped to catch the light with every movement.',
    story: 'Each Luna drop is formed and polished by hand, creating a clean silhouette with a gentle swing. Hollow-form construction gives the earrings presence without weight, while secure lever backs make them easy to wear from morning into evening.',
    itemNumber: 'AL-LUN-E02', material: 'Recycled 14k solid yellow gold', stone: 'No stones', stoneDetails: 'High-polish, hand-finished surface', dimensions: 'Drop: 31 mm; widest point: 8 mm', weight: 'Approx. 3.6 g per pair', fit: 'Pierced ears; secure lever-back closure',
  },
  {
    slug: 'aura-chain', name: 'Aura Diamond Chain', price: '$1,460', category: 'Necklaces', collection: 'Luna',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=88',
    gallery: [
      {src: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1800&q=92', alt: 'Aura Diamond Chain arranged in a soft curve'},
      {src: 'https://images.unsplash.com/photo-1619119069152-a2b331eb392a?auto=format&fit=crop&w=1200&q=88', alt: 'Delicate gold necklace worn at the collarbone'},
      {src: 'https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1200&q=88', alt: 'Close view of the diamond station and fine chain'},
    ],
    detail: 'A fine diamond station necklace designed for effortless layering.',
    story: 'Five bezel-set diamonds appear to float along a fine recycled-gold cable chain. The adjustable length sits beautifully at the collarbone or lower in a layered arrangement, with every setting finished front and back for a smooth feel against skin.',
    itemNumber: 'AL-LUN-N03', material: 'Recycled 14k solid yellow gold', stone: 'Lab-grown diamonds', stoneDetails: '0.25 ct. total, round brilliant, F–G color, VS clarity', dimensions: '16–18 in adjustable; 3.2 mm bezels', weight: 'Approx. 2.9 g', fit: 'Adjustable jump ring; lobster clasp',
  },
  {
    slug: 'muse-hoops', name: 'Muse Pavé Hoops', price: '$1,050', category: 'Earrings', collection: 'Muse',
    image: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1200&q=88',
    gallery: [
      {src: 'https://images.unsplash.com/photo-1635767798638-3e25273a8236?auto=format&fit=crop&w=1800&q=92', alt: 'Muse Pavé Hoops shown as a pair'},
      {src: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1200&q=88', alt: 'Side profile of the hoop and pavé setting'},
      {src: 'https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?auto=format&fit=crop&w=1200&q=88', alt: 'Gold hoop earring styled against warm ivory'},
    ],
    detail: 'Close-set pavé hoops with a confident line and an easy scale.',
    story: 'The Muse hoops trace the ear with a precise row of brilliant diamonds. Crafted in recycled 14k gold, their softly squared profile feels modern and substantial, while an integrated hinge and click closure keeps the silhouette uninterrupted.',
    itemNumber: 'AL-MUS-E04', material: 'Recycled 14k solid yellow gold', stone: 'Lab-grown diamonds', stoneDetails: '0.30 ct. total, F–G color, VS clarity', dimensions: 'Outer diameter: 15 mm; width: 2.4 mm', weight: 'Approx. 3.9 g per pair', fit: 'Pierced ears; hinged click closure',
  },
  {
    slug: 'orbit-ring', name: 'Orbit Diamond Ring', price: '$1,780', category: 'Rings', collection: 'Solis',
    image: 'https://images.unsplash.com/photo-1603561596112-db1d314b7bf8?auto=format&fit=crop&w=1200&q=88',
    gallery: [
      {src: 'https://images.unsplash.com/photo-1603561596112-db1d314b7bf8?auto=format&fit=crop&w=1800&q=92', alt: 'Orbit Diamond Ring shown from above'},
      {src: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1200&q=88', alt: 'Close view of the Orbit ring diamonds'},
      {src: 'https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?auto=format&fit=crop&w=1200&q=88', alt: 'Diamond ring presented in an Aloura-style box'},
    ],
    detail: 'A luminous arc of diamonds suspended in an open gold silhouette.',
    story: 'Graduated brilliant-cut diamonds follow the curve of the finger, ending in a deliberate sliver of negative space. The open construction gives this substantial piece a lightness that works equally well on its own or paired with a narrow gold band.',
    itemNumber: 'AL-SOL-R05', material: 'Recycled 14k solid yellow gold', stone: 'Lab-grown diamonds', stoneDetails: '0.48 ct. total, F–G color, VS clarity', dimensions: 'Top width: 8.5 mm; band: 2 mm', weight: 'Approx. 4.2 g', fit: 'True to size; open design allows minimal ease', sizes: ['5', '5.5', '6', '6.5', '7', '7.5', '8'],
  },
  {
    slug: 'heirloom-bracelet', name: 'Heirloom Cuff', price: '$1,320', category: 'Bracelets', collection: 'Muse',
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1200&q=88',
    gallery: [
      {src: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?auto=format&fit=crop&w=1800&q=92', alt: 'Heirloom Cuff shown against a neutral background'},
      {src: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?auto=format&fit=crop&w=1200&q=88', alt: 'Artisan hand-finishing a piece of gold jewelry'},
      {src: 'https://images.unsplash.com/photo-1627293509201-cd0c780043e6?auto=format&fit=crop&w=1200&q=88', alt: 'Close view of the cuff’s softly sculpted edge'},
    ],
    detail: 'A softly sculpted cuff with hand-finished edges and a satisfying weight.',
    story: 'The Heirloom cuff is cast as one continuous form, then shaped and polished by hand until every edge feels smooth. Its restrained curve and warm satin finish are designed to develop character over time—the kind of piece worn often and passed on.',
    itemNumber: 'AL-MUS-B06', material: 'Recycled 14k solid yellow gold', stone: 'No stones', stoneDetails: 'Hand-applied satin finish', dimensions: 'Inner diameter: 58 × 48 mm; width: 5 mm', weight: 'Approx. 11.8 g', fit: 'Fits wrists up to 6.5 in; gently adjustable once',
  },
];
