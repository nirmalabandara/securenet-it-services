'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './Logo';
import ThemeToggle from './ThemeToggle';
import { WHATSAPP, WHATSAPP_DISPLAY } from '@/lib/constants';

export default function Navbar({ onOpenRequest, onOpenAdmin }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '/services' },
    { label: 'Tiers & Pricing', href: '/pricing' },
    { label: 'Coverage & Global', href: '/coverage' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`nav-wrapper ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav shell">
        <div className="nav-left">
          <Logo />
          <div className="nav-status-chip" title="Active on-site SLA & digital engineering across Sri Lanka">
            <span className="status-dot live" />
            <span>SRI LANKA &middot; ON-CALL</span>
          </div>
        </div>

        <nav className="nav-links" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="nav-right">
          <ThemeToggle />

          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-whatsapp-link"
            aria-label="Direct WhatsApp contact"
          >
            <span className="wa-icon">WA</span>
            <span className="wa-number">{WHATSAPP_DISPLAY}</span>
          </a>

          <button
            type="button"
            className="button button-small nav-cta-btn"
            onClick={() => onOpenRequest ? onOpenRequest() : (window.location.href = '/contact')}
            id="nav-request-btn"
          >
            Request Quote
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle navigation menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-drawer">
          <div className="mobile-drawer-inner shell">
            <div className="mobile-status-row">
              <span className="status-dot live" />
              <span>Sri Lanka Field Support &amp; Digital Engineering</span>
              <div style={{ marginLeft: 'auto' }}>
                <ThemeToggle />
              </div>
            </div>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="mobile-nav-link"
              >
                {link.label}
              </Link>
            ))}
            <div className="mobile-actions">
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-wa-btn"
              >
                WhatsApp: {WHATSAPP_DISPLAY}
              </a>
              <button
                type="button"
                className="button"
                style={{ width: '100%' }}
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRequest ? onOpenRequest() : (window.location.href = '/contact');
                }}
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
