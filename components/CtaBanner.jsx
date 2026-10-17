import { WHATSAPP, WHATSAPP_DISPLAY } from '@/lib/constants';

export default function CtaBanner({ onOpenRequest }) {
  return (
    <section className="section-cta">
      <div className="shell">
        <div className="cta-architectural-bar">
          <div className="cta-copy">
            <div className="eyebrow">
              <span className="live-dot" /> Ready to Deploy
            </div>
            <h2>
              Technology issues should not
              <br />
              slow your business down.
            </h2>
            <p>
              Whether you need urgent hands-on triage at your commercial office in Colombo,
              or a high-converting web platform with local PayHere, Koko, and WhatsApp automation.
            </p>
          </div>

          <div className="cta-actions">
            <button
              type="button"
              className="button cta-primary-btn"
              onClick={() => onOpenRequest ? onOpenRequest() : (window.location.href = '/contact')}
              id="cta-request-btn"
            >
              Request Support / Quote <span>&rarr;</span>
            </button>

            <a
              href={`https://wa.me/${WHATSAPP}`}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-wa-btn"
            >
              <span className="wa-dot" />
              <span>Direct WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
