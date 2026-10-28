import { WHATSAPP, WHATSAPP_DISPLAY } from '@/lib/constants';

export default function CtaBanner({ onOpenRequest }) {
  return (
    <section className="section-cta">
      <div className="shell">
        <div className="cta-architectural-bar">
          <div className="cta-copy">
            <div className="eyebrow">Start with a conversation</div>
            <h2>
              Technology issues should not
              <br />
              slow your business down.
            </h2>
            <p>
              Tell us what needs to be improved, built, or supported. We will review the scope
              and come back with the next practical step.
            </p>
          </div>

          <div className="cta-actions">
            <button
              type="button"
              className="button cta-primary-btn"
              onClick={() => onOpenRequest ? onOpenRequest() : (window.location.href = '/contact')}
              id="cta-request-btn"
            >
              Request Support / Quote
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
