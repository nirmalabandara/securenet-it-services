'use client';

import { useState } from 'react';
import Logo from './Logo';
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY } from '@/lib/constants';

export default function Navbar({ onOpenRequest, onOpenAdmin }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="topbar">
        <div className="shell">
          <span className="topbar-info">
            On-site IT support for businesses across Sri Lanka
          </span>
          <div className="topbar-contacts">
            <a href={`mailto:${EMAIL}`}>
              <span>✉</span> {EMAIL}
            </a>
            <span className="top-separator" />
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>WhatsApp:</span> {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
      </header>

      <div className="nav-wrapper">
        <nav className="nav shell">
          <Logo />

          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#how">How it works</a>
            <a href="#packages">Packages</a>
            <a href="#coverage">Coverage</a>
          </div>

          <button
            type="button"
            className="button button-small"
            onClick={() => onOpenRequest()}
            id="nav-request-btn"
          >
            Request support <span>→</span>
          </button>

          <button
            type="button"
            className="mobile-menu-btn"
            aria-label="Toggle menu"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? '✕' : '☰'}
          </button>
        </nav>

        {mobileMenuOpen && (
          <div
            style={{
              padding: '16px 24px',
              background: '#ffffff',
              borderTop: '1px solid #edf2f7',
              display: 'flex',
              flexDirection: 'column',
              gap: '12px',
            }}
          >
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: '#14233d', fontWeight: 600 }}
            >
              Services
            </a>
            <a
              href="#how"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: '#14233d', fontWeight: 600 }}
            >
              How it works
            </a>
            <a
              href="#packages"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: '#14233d', fontWeight: 600 }}
            >
              Packages
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              style={{ textDecoration: 'none', color: '#14233d', fontWeight: 600 }}
            >
              Coverage
            </a>
            <button
              type="button"
              className="button"
              style={{ width: '100%', marginTop: '6px' }}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRequest();
              }}
            >
              Request support <span>→</span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}
