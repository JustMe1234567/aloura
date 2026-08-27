import type {Metadata} from 'next'; import './globals.css';
export const metadata:Metadata={title:'Aloura Fine Jewelry',description:'Modern fine jewelry, responsibly made in solid gold and designed to become part of your story.',openGraph:{title:'ALOURA',description:'Fine Jewelry, Made Personal',images:['/og.png']},twitter:{card:'summary_large_image',title:'ALOURA',description:'Fine Jewelry, Made Personal',images:['/og.png']}};
export default function RootLayout({children}:Readonly<{children:React.ReactNode}>){return <html lang="en"><body>{children}</body></html>}
