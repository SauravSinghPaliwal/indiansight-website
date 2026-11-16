import './globals.css';
import { Inter, Instrument_Serif } from 'next/font/google';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { SITE_URL } from '../lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const instrument = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: ['normal', 'italic'],
  variable: '--font-instrument',
  display: 'swap',
});

const description =
  'Indian Sight is a consulting-first AI firm. We help leadership and technical teams prioritize use cases, define governance, and design infrastructure-aware architectures.';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'IndianSight — Consulting-First AI',
  description,
  openGraph: {
    title: 'IndianSight — Consulting-First AI',
    description,
    url: SITE_URL,
    siteName: 'IndianSight',
    images: [{ url: '/logo.png', width: 500, height: 500, alt: 'IndianSight' }],
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'IndianSight — Consulting-First AI',
    description,
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${instrument.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
