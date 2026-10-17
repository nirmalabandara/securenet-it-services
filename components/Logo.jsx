import Link from 'next/link';

export default function Logo({ light = false }) {
  return (
    <Link href="/#top" className="logo" aria-label="SecureNet Technologies home">
      <span className="logo-glyph" aria-hidden="true">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
          <polygon points="12 2 22 12 12 22 2 12" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="3.5" fill="currentColor" />
        </svg>
      </span>
      <span className="logo-text">
        SECURE<span>NET</span>
      </span>
    </Link>
  );
}
