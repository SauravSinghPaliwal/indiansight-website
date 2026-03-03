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
        style={{
          background: '#15161A',
          fontFamily:
            "ui-sans-serif, system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        }}
      >
        {/* Gradient top accent bar */}
        <div
          className="h-[3px] w-full"
          style={{ background: 'linear-gradient(90deg, #F8B432 0%, #F47A35 50%, #E8342C 100%)' }}
        />

        <Navbar />

        <main className="mx-auto max-w-screen-2xl px-4 py-6 sm:px-8 sm:py-8">
          {children}
        </main>

        <div className="mx-auto max-w-screen-2xl px-4 pb-6 sm:px-8 sm:pb-8">
          <Footer />
        </div>
      </body>
    </html>
  );
}
