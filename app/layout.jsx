import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const metadata = {
  title: 'IndianSight — Consulting-First AI',
  description:
    'Indian Sight is a consulting-first AI firm. We help leadership and technical teams prioritize use cases, define governance, and design infrastructure-aware architectures.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className="min-h-screen p-5 sm:p-8"
        style={{
          background: '#7477FF',
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        <div id="top" className="mx-auto max-w-6xl">
          {/* Black frame */}
          <div
            className="rounded-[34px] border-[4px] p-5 shadow-[0_40px_140px_rgba(0,0,0,0.45)]"
            style={{ borderColor: '#000', background: '#0B0B0E' }}
          >
            {/* Inner canvas */}
            <div
              className="rounded-[28px] p-4 sm:p-5"
              style={{ background: '#15161A' }}
            >
              <Navbar />
              <main className="mt-6">{children}</main>
              <Footer />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
