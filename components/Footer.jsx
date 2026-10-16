import Logo from './Logo';
import { EMAIL, WHATSAPP, WHATSAPP_DISPLAY } from '@/lib/constants';

export default function Footer({ onOpenAdmin }) {
  return (
    <footer>
      <div className="shell footer-main">
        <div>
          <Logo />
          <p>Professional on-site IT support for businesses across Sri Lanka.</p>
        </div>
        <div>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a
            href={`https://wa.me/${WHATSAPP}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {WHATSAPP_DISPLAY}
          </a>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 SecureNet IT Services. All rights reserved.</span>
      </div>
    </footer>
  );
}
