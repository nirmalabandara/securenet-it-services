import Link from 'next/link';
import Logo from './Logo';
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY, PHONE_DISPLAY, ADDRESS_PRIMARY } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="footer-architectural">
      <div className="shell footer-top">
        <div className="footer-col brand-col">
          <Logo />
          <p className="brand-mission">
            On-site IT support and practical digital systems for businesses across Sri Lanka.
          </p>

          <div className="footer-status-pill">
            <span>Quotes are prepared around your requirements.</span>
          </div>

          <div className="footer-tz-badge">
            <span className="tz-key">STUDIO TIME:</span>
            <span className="tz-val">COLOMBO (+05:30 IST)</span>
          </div>
        </div>

        <div className="footer-col">
          <h4>Web &amp; Software Platforms</h4>
          <ul className="footer-nav-list">
            <li><Link href="/portfolio">Case Study: Snap Cap Store</Link></li>
            <li><Link href="/services#ecommerce-payments">E-Commerce &amp; PayHere/Koko</Link></li>
            <li><Link href="/services#whatsapp-automation">WhatsApp &amp; SMS Automation</Link></li>
            <li><Link href="/services#hospitality-booking">Villa Direct Booking Engines</Link></li>
            <li><Link href="/services#custom-erp-portals">Web POS &amp; Business Portals</Link></li>
            <li><Link href="/services#b2b-exporters">Exporter Corporate Sites</Link></li>
            <li><Link href="/services#offshore-development">Offshore Engineering Pods</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Consulting &amp; Reach</h4>
          <ul className="footer-nav-list">
            <li><Link href="/services#network-security-consulting">Commercial Network &amp; Cloud Security</Link></li>
            <li><Link href="/pricing">Turnkey Software Packages</Link></li>
            <li><Link href="/coverage">Colombo Studio &amp; Global Overlap</Link></li>
            <li><Link href="/contact">Schedule Technical Review</Link></li>
          </ul>
        </div>

        <div className="footer-col contact-col">
          <h4>Direct Operations</h4>
          <div className="footer-contact-item">
            <span className="contact-label">DIRECT STUDIO DESK &amp; WA:</span>
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
            <span>Contact us to discuss your requirements.</span>
          </div>
        </div>
      </div>

      <div className="shell footer-bottom">
        <div className="copyright-line">
          &copy; {new Date().getFullYear()} SecureNet IT &amp; Digital Solutions. All rights reserved.
        </div>

        <div className="footer-bottom-links">
          <Link href="/services">Services</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/pricing">Tiers &amp; Pricing</Link>
          <Link href="/coverage">Coverage</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
