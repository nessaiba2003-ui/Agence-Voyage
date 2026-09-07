import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata={metadataBase:new URL('https://fantastic-golden-taroudant.amalyu.chatgpt.site'),title:'Fantastic Golden | Omra & Voyages depuis Taroudant',description:'Votre compagnon de confiance vers les Lieux Saints.',openGraph:{title:'Fantastic Golden — خير رفيق للبيت العتيق',description:'Votre voyage spirituel commence bien avant le départ.',type:'website',images:['/og.png']},twitter:{card:'summary_large_image',title:'Fantastic Golden — خير رفيق للبيت العتيق',description:'Votre compagnon de confiance vers les Lieux Saints.',images:['/og.png']}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="fr"><body>{children}</body></html>}
