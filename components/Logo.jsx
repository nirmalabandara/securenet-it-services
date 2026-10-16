import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/#top" className="logo" aria-label="SecureNet home">
      <span className="logo-mark">S</span>
      <span>
        SECURE<span>NET</span>
      </span>
    </Link>
  );
}
