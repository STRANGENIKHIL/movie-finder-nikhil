import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CinematicBg from '@/components/CinematicBg';
import { FavoritesProvider } from '@/context/FavoritesContext';

export const metadata = {
  title: 'CineFind — Discover Movies',
  description:
    'Browse, search, and save your favorite movies. Powered by TMDB. Built by Nikhil Pathak.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Cinematic background — fixed behind everything */}
        <CinematicBg />
        <FavoritesProvider>
          <Navbar />
          {children}
          <Footer />
        </FavoritesProvider>
      </body>
    </html>
  );
}
