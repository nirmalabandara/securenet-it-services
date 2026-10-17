import Link from 'next/link';
import Logo from './Logo';
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY, PHONE_DISPLAY, ADDRESS_PRIMARY } from '@/lib/constants';

export default function Footer({ onOpenAdmin }) {
  return (
    <footer className="footer-architectural">
      <div className="shell footer-top">
        <div className="footer-col brand-col">
          <Logo />
          <p className="brand-mission">
            Enterprise on-site IT support and digital product engineering for forward-thinking
            businesses across Sri Lanka and worldwide.
          </p>

          <div className="footer-status-pill">
            <span className="status-dot live" />
            <span>&lt; 2h Colombo Field Response SLA</span>
          </div>

          <div className="footer-tz-badge">
            <span className="tz-key">LOCAL HUB TIME:</span>
            <span className="tz-val">COLOMBO (+05:30 IST)</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Digital Engineering</h4>
          <ul className="footer-nav-list">
            <li><Link href="/services#ecommerce-payments">E-Commerce &amp; Local IPG</Link></li>
            <li><Link href="/services#whatsapp-automation">WhatsApp &amp; SMS Bots</Link></li>
            <li><Link href="/services#hospitality-booking">Villa &amp; Hotel Direct Booking</Link></li>
            <li><Link href="/services#custom-erp-portals">Custom ERP &amp; POS Systems</Link></li>
            <li><Link href="/services#b2b-exporters">Exporter Corporate Web</Link></li>
            <li><Link href="/services#offshore-development">Offshore Engineering Pods</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>On-Site Infrastructure</h4>
          <ul className="footer-nav-list">
            <li><Link href="/services#emergency-it">Emergency IT Incident Dispatch</Link></li>
            <li><Link href="/services#network-wifi">Enterprise Network &amp; Wi-Fi</Link></li>
            <li><Link href="/services#managed-it">Managed Workplace Care</Link></li>
            <li><Link href="/services#cybersecurity">Cybersecurity &amp; Ransomware Defense</Link></li>
            <li><Link href="/services#office-setup">Turnkey Commercial Office Setup</Link></li>
            <li><Link href="/coverage">Island-Wide Coverage Hubs</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>Direct Operations</h4>
          <div className="footer-contact-item">
            <span className="contact-label">EMERGENCY DISPATCH &amp; WA:</span>
            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-wa-link"
            >
              {WHATSAPP_DISPLAY}
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="contact-label">TECHNICAL INQUIRIES:</span>
            <a href={`mailto:${EMAIL}`} className="footer-email-link">
              {EMAIL}
            </a>
          </div>

          <div className="footer-contact-item">
            <span className="contact-label">PRIMARY OFFICE:</span>
            <address className="footer-address">
              {ADDRESS_PRIMARY}
            </address>
          </div>

          <div className="footer-hours">
            <span>Engineering Standby: 24/7/365</span>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <div className="copyright-line">
          &copy; {new Date().getFullYear()} SecureNet IT &amp; Digital Solutions. All rights reserved.
        </div>

        <div className="footer-bottom-links">
          <Link href="/services">Services</Link>
          <Link href="/pricing">Tiers &amp; Pricing</Link>
          <Link href="/coverage">Coverage</Link>
          <Link href="/contact">Contact</Link>
          {onOpenAdmin ? (
            <button
              type="button"
              className="admin-footer-btn"
              onClick={onOpenAdmin}
            >
              Dispatch Admin Portal
            </button>
          ) : (
            <Link href="/admin" className="admin-footer-btn">
              Dispatch Admin Portal
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
