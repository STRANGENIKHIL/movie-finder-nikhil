'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <Link href="/" className="navbar-logo">
          <span className="navbar-logo-icon">🎬</span>
          CineFind
        </Link>
        <div className="navbar-links">
          <Link
            href="/"
            className={`navbar-link ${pathname === '/' ? 'navbar-link-active' : ''}`}
          >
            Browse
          </Link>
          <Link
            href="/favorites"
            className={`navbar-link ${pathname === '/favorites' ? 'navbar-link-active' : ''}`}
          >
            ❤️ Favorites
          </Link>
        </div>
      </div>
    </nav>
  );
}
